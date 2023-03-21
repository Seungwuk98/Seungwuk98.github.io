---
title: "java 멀티스레딩, 병행성 및 성능 최적화 공부 2일차"
excerpt: "유데미 강의를 듣고 자바의 멀티스레딩에 대해 공부합니다."
category: 
 - Java
tags:
 - [java, 자바, 멀티스레딩, 병행성]
author_profile: true
toc: true
toc_sticky: true
published: true
date: 2022-12-08
last_modified_at: 2022-12-08
---

## JAVA의 멀티스레딩 첫 코드
Java에서는 JDK가 모든 스레드 관련 속성과 메서드를 스레드 클래스에 압축해놓았다. 스레드 객체를 생성함으로서 스레드를 만들어낼 수 있다. 


- 예제 코드 1

```java
package thread.creation.example;

public class Main {

    public static void main(String[] args) throws InterruptedException {
        
        Thread thread = new Thread(() -> {
            System.out.println("We are in thread : " + Thread.currentThread().getName());
            System.out.println("Current thread priority is " + Thread.currentThread().getPriority());
        });
        // 스레드 이름을 지정해주는 것이 좋다.
        thread.setName("New Worker Thread");

        // 동적 우선순위의 정적 우선순위를 지정할 수 있다. 
        thread.setPriority(Thread.MAX_PRIORITY);

        System.out.println("We are in thread : " + Thread.currentThread().getName() + " before starting a new thread");
        thread.start();
        System.out.println("We are in thread : " + Thread.currentThread().getName() + " after starting a new thread");
        // start하면 JVM이 새 스레드를 생성해 운영 체제에 전달한다.

        Thread.sleep(10000); // 운영체제에 지시. 현재 스레드를 스케줄링하지 말 것.
    }
    
}
```

- 예제 코드 2

```java
package thread.creation.example;

public class Main_1 {
    public static void main(String[] args) {
        Thread thread = new Thread(() -> {
            throw new RuntimeException("Intentional Exception");
        });

        thread.setName("Misbehaving thread");

        // 타 스래드에서 발생한 예외를 핸들러를 지정함으로서 해결할 수 있다. 
        thread.setUncaughtExceptionHandler(new Thread.UncaughtExceptionHandler() {
            @Override
            public void uncaughtException(Thread arg0, Throwable arg1) {
                System.out.println("A critical error happened in thread " + arg0.getName() + " the error is " + arg1.getMessage());                
            }
        });

        thread.start();
    }
}
```

## 자바 멀티스레딩 두 번째 코드

스레드 클래스는 Runnable 인터페이스를 구현하고 있다. 따라서 스레드를 상속하는 것은 일석 이조이다. 또한 객체 내에서 this 키워드를 사용할 수 있는 장점이 있다. 

```java
package thread.creation.example2;

public class Main {
    public static void main(String[] args) {
        Thread thread = new NewThread();            
        thread.start();
    }

    // 새로운 스레드 클래스
    private static class NewThread extends Thread {
        @Override
        public void run() {
            System.out.println("Hello from " + this.getName());
        }
    }
    
}
```

금고와 도둑, 경찰 스레드를 생성하여 마치 게임처럼 코딩을 진행해보았다. 

```java
package thread.creation.example2;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

public class Main_1 {
    public static final int MAX_PASSWORD = 9999;
    public static void main(String[] args) {
        Random random = new Random();

        Vault vault = new Vault(random.nextInt(MAX_PASSWORD));

        List<Thread> threads = new ArrayList<>();
        
        threads.add(new AscendingHackerThread(vault));
        threads.add(new DescendingHackerThread(vault));
        threads.add(new PoliceThread());

        for (Thread thread : threads) {
            thread.start();
        }
    }

    private static class Vault {
        private int password;
        public Vault(int password) {
            this.password = password;
        }
        
        public boolean isCorrectPassword(int guess) {
            try {
                Thread.sleep(5);
            } catch (InterruptedException e) {}
            return this.password == guess;
        }
    }

    private static abstract class HackerThread extends Thread {
        protected Vault vault;

        public HackerThread(Vault vault) {
            this.vault = vault;
            this.setName(this.getClass().getSimpleName());
            this.setPriority(MAX_PRIORITY);
        }

        @Override
        public synchronized void start() {
            System.out.println("Starting thread " + this.getName());
            super.start();
        }
    }

    private static class AscendingHackerThread extends HackerThread {
        public AscendingHackerThread(Vault vault) {
            super(vault);
        }

        @Override
        public void run() {
            for (int guess = 0 ; guess <= MAX_PASSWORD ; guess++) {
                if (vault.isCorrectPassword(guess)) {
                    System.out.println(this.getName() + "guessed the password " + guess);
                    System.exit(0);
                }
            }
        }
    }

    private static class DescendingHackerThread extends HackerThread {
        public DescendingHackerThread(Vault vault) {
            super(vault);
        }

        @Override
        public void run() {
            for (int guess = MAX_PASSWORD ; guess >= 0 ; guess--) {
                if (vault.isCorrectPassword(guess)) {
                    System.out.println(this.getName() + "guessed the password " + guess);
                    System.exit(0);
                }
            }
        }
    }

    private static class PoliceThread extends Thread {
        @Override
        public void run() {
            for (int i=10 ; i > 0 ; i--) {
                try {
                    Thread.sleep(1000);
                } catch (InterruptedException e) {
                }
                System.out.println(i);
            }
            System.out.println("Game over for you hacker");
        }
    }
}
```