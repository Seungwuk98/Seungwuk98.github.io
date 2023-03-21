---
title: "java 멀티스레딩, 병행성 및 성능 최적화 공부 3일차"
excerpt: "유데미 강의를 듣고 자바의 멀티스레딩에 대해 공부합니다."
category: 
 - Java
tags:
 - [java, 자바, 멀티스레딩, 병행성]
author_profile: true
toc: true
toc_sticky: true
published: true
date: 2022-12-10
last_modified_at: 2022-12-16
---

## 스레드 종료 및 Daemon 스레드
스레드는 아무것도 하고 있지 않을 때도, 리소스를 사용한다. 메모리와 일부 커널 리소스, cpu 시간과 cpu 캐시 공간이 차지된다. 생성한 스레드가 사용되지 않는 경우 리소스를 정리해야한다. 또한 어떤 방식으로든 오작동한다면 스레드를 중지하는 것이 좋다. 마지막으로 최소 하나의 스레드만 존재해도 프로그램은 멈추지 않는다. 메인스레드가 종료되더라도 하나의 스레드가 살아남으면 종료되지 않으므로 스레드 종료가 필요하다. 

### Thread.interrupt()

Thread A 에서 threadB 객체에 interrupt() 함수를 호출하는 방식으로 이용한다. 


#### Thread Interrupt 시나리오

1. 우리가 interrupt하고자 하는 스레드가 `InterruptedException`을 발생시키는 경우

```java
package thread.interrpt;

/**
 * Main
 */
public class Main {

    public static void main(String[] args) {
        Thread thread = new Thread(new BlockingTask());

        thread.start();

        thread.interrupt();
    }

    private static class BlockingTask implements Runnable{

        @Override
        public void run() {
            // do things
            try {
                Thread.sleep(500000);
            } catch (InterruptedException e) {
                System.out.println("Exiting blocking thread");
            }            
        } 
        
    }
}
```

2. 인터럽트하려는 스레드가 신호를 명시적으로 처리하는 경우

```java
package thread.interrpt;

import java.math.BigInteger;

public class Main2 {
    public static void main(String[] args) {
        Thread thread = new Thread(new LongComputation(new BigInteger("200000"), new BigInteger("100000000")));
        
        thread.start();
        thread.interrupt();
    }

    private static class LongComputation implements Runnable {
        private BigInteger base;
        private BigInteger power;

        public LongComputation(BigInteger base, BigInteger power) {
            this.base = base;
            this.power = power;
        }

        @Override
        public void run() {
            System.out.println(base + "^" + power + " = " + pow(base, power));
        }

        private BigInteger pow(BigInteger base, BigInteger power) {
            BigInteger result = BigInteger.ONE;

            for (BigInteger i = BigInteger.ZERO; i.compareTo(power) != 0; i = i.add(BigInteger.ONE)) {
                if (Thread.currentThread().isInterrupted()) {
                    System.out.println("Prematurely interrupted computation");
                    return BigInteger.ZERO;
                }
                result = result.multiply(base);
            }

            return result;
        }

    }
}

```


### Daemon Threads
배경에서 실행되는 스레드로 메인 스레드가 종료되어도 어플리케이션 종료를 막지 않는다. 

#### Daemon Threads 시나리오
1. 주 작업이 아닌 배경에서 돌아가는 것을 맡는다. 예로 텍스트 에디터에는 몇 분마다 자동 저장시키는 기능을 구현해놓는다. 갑자기 앱을 닫고 싶다면 이 백그라운드 스레드의 실행 여부는 신경쓰지 않고 완료될 때까지 기다리지도 않는다. 

2. 작업자 스레드에서 실행되는 코드를 제어할 수 없는 경우도 Daemon 스레드가 앱 종료를 방해하는 일은 없어야 한다. 대표적인 예시가 외부 라이브러리를 이용하는 경우이다.  

```java
package thread.interrpt;

import java.math.BigInteger;

public class Main2 {
    public static void main(String[] args) {
        Thread thread = new Thread(new LongComputation(new BigInteger("200000"), new BigInteger("100000000")));
        
        thread.setDaemon(true);
        thread.start();
        thread.interrupt();
    }

    private static class LongComputation implements Runnable {
        private BigInteger base;
        private BigInteger power;

        public LongComputation(BigInteger base, BigInteger power) {
            this.base = base;
            this.power = power;
        }

        @Override
        public void run() {
            System.out.println(base + "^" + power + " = " + pow(base, power));
        }

        private BigInteger pow(BigInteger base, BigInteger power) {
            BigInteger result = BigInteger.ONE;

            for (BigInteger i = BigInteger.ZERO; i.compareTo(power) != 0; i = i.add(BigInteger.ONE)) {
                result = result.multiply(base);
            }

            return result;
        }

    }
}

```