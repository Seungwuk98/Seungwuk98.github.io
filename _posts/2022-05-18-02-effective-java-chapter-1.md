---
title: "이펙티브 자바 1장 공부"
excerpt: "이펙티브 자바를 공부합니다."
category: 
 - Effective java
tags:
 - [java, Effective java]
author_profile: true
toc: true
toc_sticky: true
published: true
date: 2022-05-18
last_modified_at: 2022-05-18
---

# 이펙티브 자바 1장
---
소마에서 멘토님께 이펙티브 자바를 꼭 공부하라는 이야기를 들었습니다. 그 동안 자바의 정석으로 충분할 것이라고 생각했지만, 안일한 생각이었던 것 같습니다. 사실 자바라는 언어를 많이 싫어하는 편이고 극혐하는 편이지만, 그래도 장점은 분명 있죠.

    1. 타입 안정성을 심하게 따진다.
  자바를 사용하다보면 이것도 안돼? 이것도? 하는 부분이 참 많습니다. 대표적으로 이런 문법은 허용이 안되죠. 하지만 이런 부분이 귀찮기는 해도 사용자로 하여금 의도를 명확하게 전달하도록 유도합니다.
```java
int a = 1;
if (a) System.out.println(1);
```
    2. 에러가 적게 난다.

이거는 사람마다 조금 다를 것 같습니다. 하지만 제가 짧은 경험으로 자바를 사용해본 결과 c++을 이용할 때 보다 훨씬 에러가 적었습니다. 이건 1의 이유도 있을 것이고, 또 인터페이스의 지원 등등의 이유도 있을텐데, 좀 더 공부해보겠습니다.


## 들어가기
---
이펙티브 자바에서는 **11개의 주제**에 총 **90개의 아이템**이 담겨있고, 각 주제에는 순서가 없다고 합니다. 해당 아이템들은 베테랑 프로그래머들이 유익하다고 인정하는 관례들 소개한다고 합니다. 즉, 이펙티브 자바에서는 자바를 **이미 사용할 수 있는** 개발자들이 더욱 좋은 코드를 작성할 수 있도록 유도한다고 볼 수 있을 것 같습니다. 

다양한 코드 예제들이 등장하며, 친절하게도 안티패턴(antipattern), 즉, 따라해서 좋지 않은 코드도 소개한다고 합니다. 안티패턴 예제는 주석까지 달아놓는다고 하니 감사할 따름입니다. 



### 기본원칙
---
이 책의 기본 원칙은 **명료성**과 **단순성**을 기본 원칙으로 둔다고 합니다. 컴포넌트는 ***정해진 동작*** 및 ***예측 가능한 동작*** 만을 수행해야하며, ***가능한 작되***, 너무 작지 않도록 작지 않도록 유의해야 한다고 합니다. 

또한 이런 규칙들을 100% 적용할 수는 없겠지만, 어기는 경우 **합당한 이유**를 생각하고 제시하는 것 역시 중요하다고 합니다. 즉, 모든 규칙을 통달하고, 규칙을 깨도 되는 경우를 익혀야한다는 것이지요.

해당 책은 일단은 성능보다는 **명확하고, 유용하고, 견고하고, 유연하고, 관리하기 쉬운 코드**를 짜는 데 집중하도록 요구하고 있습니다.


### 예제
---
책 속의 예제는 기본적으로 바로 실행되나, 가독성을 위해 생략한 부분도 있다고 하니, 오류가 나도 당황하지 말고 [예제 사이트](https://git.io/fAm6s)에서 확인할 수 있다고 하니 확인해봅시다.


### 기술 용어
---
자바 8용 언어 명세(The Java Language Specification, Java SE 8 Edition)을 따른다고 하며, 일부 용어는 다르게 사용한다고 합니다.

<div style = "width : 100%; text-align : center;">상속(inheritance) => 서브클래싱(subclassing)</div>
<div style = "width : 100%; text-align : center;">(인터페이스 상속 => )인터페이스 구현(implement) 및 인터페이스 확장(extand) </div>
<div style = "width : 100%; text-align : center;">패키지 접근(pakage access) => 패키지 프라이빗(package-private)</div>
<br>


명세되지 않은 기술용어도 사용한다고 합니다. 
<br>
***공개 API(API)*** : 클래스, 인터페이스, 패키지를 통해 접근할 수 있는 모든 클래스, 인터페이스, 생성자, 멤버, 직렬화된 형태(serialized form)를 말하며, API 프로그램 작성자는 **사용자**(user)라고 하고, API를 사용하는 클래스를 **클라이언트**(Client)라고 한다고 합니다. 