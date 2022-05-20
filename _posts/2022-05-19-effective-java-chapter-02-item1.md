---
title: "이펙티브 자바 2장 공부 - 아이템1"
excerpt: "생성자 대신 정적 팩터리 메서드를 고려하라"
category: 
 - Effective java
tags:
 - [java, Effective java]
author_profile: true
toc: true
toc_sticky: true
published: true
date: 2022-05-19
last_modified_at: 2022-05-19
---

# :satisfied:이펙티브 자바 2장 아이템 1
---
## 생성자 대신 정적 팩터리 메서드를 고려하라
---
혼자 이해하기에는 어려움이 있어서 백기선님의 강의를 참고하고 있음을 미리 알립니다 :smile:

### 장점 1 : 이름을 가질 수 있다.
---
```java
public class Foo {
    String name;

    // 일반적인 생성자
    public Foo(String name) {
        this.name = name;
    }

    // 정적 팩터리 메서드
    public static Foo withname(String name) {
        return new Foo(name);
    }
}
```

위의 예시처럼 정적 팩터리 메서드는 이름을 가질 수 있습니다. 이를 실행하는 입장에서는 다음과 같이 됩니다.

```java
public static void main(String[] args) {
    // 일반 생성자로 객체를 생성
    Foo foo = new Foo("승욱");
    // 정적 팩터리 메서드로 객체를 생성
    Foo foo = Foo.withname("승욱");
}
```
이처럼 이름을 가짐으로서 의미 전달이 쉽게 가능합니다. 

또한 일반 생성자는 같은 인자를 가지는 생산자를 단 1개만 만들 수 있지만, 정적 팩터리 메서드는 크게 문제가 없다. 다음과 같은 예시를 확인해봅시다.

```java
public class Foo {
    String name;
    String address;

    // 일반적인 생성자
    public Foo(){}

    public Foo(String name) {
        this.name = name;
    }

    public Foo(String address){
        this.address = address;  // 에러. 인자가 같은 두 함수를 정의할 수 없음
    }

    // 정적 팩터리 메서드
    public static Foo withname(String name) {
        return new Foo(name);
    }

    // 같은 인자를 받더라도, 이름이 다르므로 문제 없음.
    public static Foo withaddress(String address){
        Foo ret = new Foo();
        ret.address = address;
        return ret;
    }
}
```

### 장점 2 : 항상 새로운 인스턴스를 생성할 필요가 없다.
---
불변 클래스(immutable class)는 인스턴스를 미리 만들거나, 새로 생성한 인스턴스를 캐싱하여 재활용하는 식으로 불필요한 객체 생성을 피할 수 있습니다.

```java
public static Boolean valueOf(boolean b) {
    return b ? Boolean.TRUE : Boolean.FALSE;
}
```

책에서 나온 예제입니다. b값이 true라면 Boolean 클래스에 미리 정의된 TRUE를, 아니면 FALSE를 리턴하도록 되어있습니다. 

```java
public class Foo {
    String name;
    String address;

    ...

    private static final Foo MANAGER = new Foo();

    public static Foo getManager() {
        return MANAGER;
    }
}
```

위 예시처럼 미리 정해놓은 MANAGER 객체를 데려오는 것 역시 가능할 겁니다. 


### 장점 3. 리턴 타입의 하위 타입 객체를 반환할 수 있는 능력이 생긴다.
---
반환할 객체의 클래스를 자유롭게 선택할 수 있도록 하는 **유연성**을 제공합니다. 
`java.util.Collections`가 해당 예인데 `java.util.Collections`는 45개에 달하는 인터페이스 구현체의 인스턴스를 제공하지만, 그 구현체들은 모두 non-public으로 정적 팩터리 메서드를 통해 얻도록 했습니다. 

인터페이스 뒤에 구현체들을 숨겨놓음에 따라 public으로 제공할 API를 줄이고 개념적인 무게까지 줄일 수 있다고 합니다. 이 부분은 아직 감으로 체감되지 않는 부분이라 좀 더 생각해봐야할 듯합니다.

자바 8부터는 인터페이스에 정적 메서드를 가질 수 없다는 제한이 풀렸으므로 인스턴스화 불가 동반 클래스(예컨대 `java.util.Collections`)를 둘 이유가 없지만, private static 메서드는 자바 9부터 이용할 수 있으므로, 이것이 필요한 경우에는 자바 9부터 이용해야한다고 합니다. 

```java
public interface FooInterface {
    public static Foo getFoo(){
        return new Foo();
    }
}
```
위와 같은 문법이 불가능 했기 때문에, `java.util.Collections` 클래스를 따로 만들었던 것으로 보입니다.

### 장점 4. 입력 매개변수에 따라 매번 다른 클래스의 객체를 반환할 수 있다.
---
3의 연장선으로 느껴지는 장점입니다. 

```java
public class Foo {
    String name;
    String address;

    ...

    private static final Foo MANAGER = new Foo();

    public static Foo getManager() {
        return MANAGER;
    }

    // 다음과 같이 다른 클래스를 리턴하도록 할 수도 있다. 
    public static Foo getFoo(boolean flag) {
        return flag? new Foo() : new BarFoo();
    }

    static class BarFoo extends Foo {

    }
}
```
위와 같이 다른 클래스를 리턴하도록 하는 것이 가능하기도 합니다.

EnumSet 클래스는 생성자 없이 `allOf(), of()`등의 정적 팩터리 메서드를 제공하는데, 객체의 타입은 enum의 개수에 따라 `RegularEnumSet` 또는 `JumboEnumSet`을 반환한다고 합니다. 이런 것이 감춰져 있기 때문에, 사용자는 자바의 버전이 바뀌거나, 새로운 타입을 만들더라도 크게 문제되지 않게 됩니다. 

```java
public static void main(String[] args) {
    EnumSet<Color> colors = EnumSet.allOf(Color.class);

    EnumSet<Color> blueWhite = EnumSet.of(BLUE, WHITE);
}

enum Color{
    RED, BLUE, WHITE
}
```
위 예제는 원소가 3개 밖에 없지만, 매우 많아지는 경우 다른 타입을 리턴하는 것이지만, 사용자의 입장에서는 몰라도 된다고 합니다. 애초에 숨겨두었기 때문에 몰라도 됩니다:smile:

### 장점 5. 정적 팩터리 메서드를 작성하는 시점에는 반환할 객체의 클래스가 존재하지 않아도 된다.

