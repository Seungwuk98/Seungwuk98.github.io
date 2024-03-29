---
title: "이펙티브 자바 2장 공부 - 아이템1"
excerpt: "생성자 대신 정적 팩터리 메서드를 고려하라"
category: 
 - Java
tags:
 - [java, Effective java]
author_profile: true
toc: true
toc_sticky: true
published: true
date: 2022-05-19
last_modified_at: 2022-05-19
---

# :satisfied: 이펙티브 자바 2장 아이템 1
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
---
이러한 유연함은 서비스 제공자 프레임워크(service provider framework)를 만드는 근간이 된다고 합니다. 대표적인 예시로 JDBC(Java Database Connectivity)를 들고 있습니다. (이 부분은 잘 모르겠습니다..) 

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
        Foo foo;
        // TODO 어떤 특정 약속 되어 있는 텍스트 파일에서 Foo의 구현체의 FQCN을 읽어온다. (Full Qualified Class Name 이라고 합니다.)
        // TODO FQCN에 해당하는 인스턴스를 생성한다.
        // TODO foo 변수를 해당 인스턴스를 가리키도록 수정한다.

        // 즉, 메서드를 만들고 나서 Foo 타입의 다른 클래스를 만들 수 있다.
        // 얼마든지 후에 바꿀 수 있다.
        // 의존성을 밖에서 컨트롤한다.
        // => 의존성 주입과 같은 개념과도 연관이 있을 수 있다고 합니다.
        return foo;
    }
}
```
위와 같이 정적 팩터리 메서드 내에서 다른 파일에서 완성된 객체를 공급받아 작성되도록 할 수 있다고 합니다. 

서비스 제공자 프레임워크는 3개의 핵심 컴포넌트로 이뤄지며, 구현체의 동작을 정의하는 `서비스 인터페이스`, 제공자가 구현체를 등록할 때 사용하는 `제공자 등록 API`, 클라이언트가 서비스의 인스턴스를 얻을 때 사용하는 `서비스 접근 API`가 그 주인공들이라고 합니다. 클라이언트가 `서비스 접근 API`를 이용할 때, 원하는 구현체의 조건을 명시하면, 이에 따라 기본 구현체를 반환하거나 지원하는 구현체들을 하나씩 돌아가며 반환하도록 할 수 있습니다. 이런 `서비스 접근 API`의 근간이 `유연한 정적 팩터리`의 실체라고 할 수 있습니다. 

부가적으로 서비스 인터페이스의 인스턴스를 제공하는 `서비스 제공자 인터페이스`라는 네 번째 컴포넌트가 쓰이기도 하는데, 이것은 서비스 인터페이스의 인스턴스를 생성하는 팩터리 객체를 설명해준다고 합니다. 이것이 없다면 각 구현체를 인스턴스로 만들 때 **리플렉션**(아직 잘 모르겠습니다.)을 사용해주어야 한다고 합니다. JDBC에서는 `Connection`이 `서비스 인터페이스` 역할을, `DriverManager.registerDriver`가 `제공자 등록 API`역할을, `DriverManager.getConnection`이 `서비스 접근 API` 역할을, `Driver`가 `서비스 제공자 인터페이스`역할을 수행한다고 합니다.

서비스 제공자 프레임워크 패턴에는 많은 변형이 있는데, `서비스 접근 API`는 공급자가 제공하는 것보다 더 풍부한 서비스 인터페이스를 클라이언트에 반환할 수 있으며, 이를 `브릿지 패턴(Bridge pattern)`이라고 합니다. `의존 객체 주입(dependency injection)` 프레임 워크도 강력한 서비스 제공자라고 생각할 수 있다고 하며, 자바 6부터는 `java.util.ServiceLoader`라는 범용 서비스 제공자 프레임워크가 제공되어 프레임워크를 직접 만들 필요도 거의 없어졌다고 합니다.

이 부분은 너무 어려워서 나중에 꼭 다시 봐야할 것 같습니다.

### 단점 1. 상속을 하려면 public이나 protected 생성자가 필요하니 정적 팩터리 메서드만 제공하면 하위 클래스를 만들 수 없다.
---
`java.util.Collections`에서 제공하는 편의성 구현체는 상속할 수 없습니다. 다만, 상속을 할 필요가 없는 클래스인 경우 오히려 장점이 될 수도 있습니다. 

### 단점 2. 정적 팩터리 메서드는 프로그래머가 찾기 어렵다.
---
생성자처럼 API 설명에 명확하게 드러나지 않으므로, 사용자가 직접 클래스를 인스턴스화할 방법을 알아내야 합니다. API 문서를 잘 써놓고 메서드 이름도 널리 알려진 규약을 따라 짓는 것으로 문제를 완화해야 합니다.
