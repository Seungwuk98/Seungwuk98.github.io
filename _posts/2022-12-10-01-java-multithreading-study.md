---
title: "java 멀티스레딩, 병행성 및 성능 최적화 공부 3일차"
excerpt: "유데미 강의를 듣고 자바의 멀티스레딩에 대해 공부합니다."
category: 
 - 자바 멀티스레딩
tags:
 - [java, 자바, 멀티스레딩, 병행성]
author_profile: true
toc: true
toc_sticky: true
published: true
date: 2022-12-10
last_modified_at: 2022-12-10
---

## 스레드 종료 및 Daemon 스레드
스레드는 아무것도 하고 있지 않을 때도, 리소스를 사용한다. 메모리와 일부 커널 리소스, cpu 시간과 cpu 캐시 공간이 차지된다. 생성한 스레드가 사용되지 않는 경우 리소스를 정리해야한다. 또한 어떤 방식으로든 오작동한다면 스레드를 중지하는 것이 좋다. 마지막으로 최소 하나의 스레드만 존재해도 프로그램은 멈추지 않는다. 메인스레드가 종료되더라도 하나의 스레드가 살아남으면 종료되지 않으므로 스레드 종료가 필요하다. 

### Thread.interrupt()

Thread A 에서 threadB 객체에 interrupt() 함수를 호출하는 방식으로 이용한다. 

