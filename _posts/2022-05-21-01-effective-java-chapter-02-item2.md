---
title: "이펙티브 자바 2장 공부 - 아이템2"
excerpt: "생성자에 매개변수가 많다면 빌더를 고려하라"
category: 
 - Effective java
tags:
 - [java, Effective java]
author_profile: true
toc: true
toc_sticky: true
published: true
date: 2022-05-21
last_modified_at: 2022-05-21
---
# :satisfied: 이펙티브 자바 2장 아이템 2
---
## 생성자에 매개변수가 많다면 빌더를 고려하라
---
혼자 이해하기에는 어려움이 있어서 백기선님의 강의를 참고하고 있음을 미리 알립니다 :smile:

### 정적 팩터리 메서드와 생성자의 한계
---
앞장에서 정적 팩터리 메서드에 대해 열심히 작성했으나, 선택적 매개변수가 많을 경우, 정적 팩터리 메서드 역시 한계가 존재합니다. (이 한계는 생성자 역시 동일합니다.) 

다음과 같은 예를 들어보자.

**클래스 : 식품 포장의 영양 정보**
|필수 항목 | 선택항목 |
|:----------:|:----------:|
|1회 내용량|1회 제공량당 칼로리|
|총 제공량|총 지방|
||나트륨|
||탄수화물|
이런 경우 프로그래머들은 `점층적 생성자 패턴(telescoping constructor pattern)`을 주로 사용해왔습니다. 아래와 같은 코드를 확인해봅시다.

```java
public class NutritionFacts{
    private final int servingSize;      // (ml, 1회 제공량)     // 필수
    private final int servings;         // (회, 총 n회 제공량)  // 필수 
    private final int calories;         // (1회 제공량당)       // 선택
    private final int fat;              // (g/1회 제공량)       // 선택
    private final int sodium;           // (mg/1회 제공량)      // 선택
    private final int carbonhydrate;    // (g/1회 제공량)       // 선택

    public NutritionFacts(int servingSize, int servings){
        this(servingSize, servings, 0);
    }
    public NutritionFacts(int servingSize, int servings, int calories) {
        this(servingSize, servings, calories, 0);
    }
    public NutritionFacts(int servingSize, int servings, int calories, int fat) {
        this(servingSize, servings, calories, fat, 0);
    }
    public NutritionFacts(int servingSize, int servings, int calories, int fat, int sodium) {
        this(servingSize, servings, calories, fat, sodium, 0);
    }
    public NutritionFacts(int servingSize, int servings, int calories, int fat, int sodium, int carbonhydrate) {
        this.servingSize    = servingSize;
        this.servings       = servings;
        this.calories       = calories;
        this.fat            = fat;
        this.sodium         = sodium;
        this.carbonhydrate  = carbonhydrate;
    }
}
```
위와 같이 생성자를 점층적으로 작성하고, 원하는 매개변수를 모두 포함한 생성자 중 가장 짧은 것을 선택하여 호출하게 됩니다. 하지만 이러한 생성방식에는 단점이 있습니다.
```
1. 원하지 않는 인자를 넣어야한다.
2. 클라이언트 코드를 작성하거나 읽기 어렵다.
```
매개변수의 개수를 주의 깊게 세어야 하고, 또 각 값의 의미가 무엇인지 파악하는데 시간을 사용해야 합니다. 특히, 타입이 같은 매개변수가 늘어져 있으면 더욱 파악하기 어려울 것입니다. 또한, 실수로 순서가 바뀐다고 해도, 컴파일러는 예외를 던져주지 않을 겁니다. 

### 자바빈즈 패턴(JavaBeans pattern)
---
위와 같은 문제를 해결하기 위한 패턴으로, 매개변수가 없는 생성자로 객체를 만든 후, 세터(setter) 메서드들을 호출해 원하는 매개변수의 값을 설정하는 방식입니다. 

```java
public class NutritionFacts{
    private int servingSize   = -1; // 필수. 기본값 없음      
    private int servings      = -1; // 필수. 기본값 없음    
    private int calories      =  0;         
    private int fat           =  0;              
    private int sodium        =  0;           
    private int carbonhydrate =  0;    

    public NutritionFacts(){}
    public void setServingSize(int val)     {servingSize = val;}
    public void setServings(int val)        {servings = val;}
    public void setCalories(int val)        {calories = val;}
    public void setFat(int val)             {fat = val;}
    public void setSodium(int val)          {sodium = val;}
    public void setCarbonhydrate(int val)   {carbonhydrate = val;}
}

public static void main(String[] args){
    NutritionFacts cocaCola = new NutritionFacts();
    cocaCola.setServingSize(240);
    cocaCola.setServings(8);
    cocaCola.setCalories(100);
    cocaCola.setSodium(35);
    cocaCola.setCarbonhydrate(27);
}
```
위 방식에서 보면, 객체가 만들어지고 어떤 값이 어떻게 세팅되었는지 명확하게 확인할 수 있습니다. 하지만 이러한 자바빈즈 패턴에는 치명적인 단점이 있습니다.

```
1. 객체를 하나 만들기까지 메서드를 여러 개 호출해야 한다.
2. 객체가 완전히 생성되기 전까지 일관성(consistency)이 무너진 상태로 존재한다.
```
점층적 생성자 패턴에서는 매개변수들이 유효한지 생성자에서만 확인하면 일관성이 유지되었으나, 그 장치가 사라진 것입니다. 일관성이 깨진 객체가 생성되면, 버그를 심은 코드와 그 버그 때문에 런타임에 문제를 겪는 코드가 물리적으로도 멀리 떨어지게 되므로 디버깅 역시 힘들어지게 됩니다. 이 말이 무슨말인지 곰곰히 생각해보았는데, 아마도 이런 뜻인듯 합니다. 

**이 부분은 제 생각이므로 틀릴 가능성이 높습니다.**
```
값이 유효한지 확인하는 코드를 생성자에 만들면, 해당 객체가 유효함을 보증할 수 있습니다. 
하지만 자바빈즈 패턴에서는 각각의 세터 메서드가 존재하여 해당 흐름이 병렬적으로 흐르게 됩니다. 
각각의 값의 유효함을 확인하는 코드를 넣는다해도 역시나 물리적으로 조금 떨어져 있으니 좋은 방법은 아닌 듯 합니다. 
```
이 처럼 일관성이 무너지는 문제 때문에 **자바진즈 패턴에서는 클래스를 불변을로 만들 수 없으며** 스레드 안전성을 얻으려면 프로그래머가 추가 작업을 수행해주어야만 합니다. 

이러한 단점들을 보완하고자 생성이 끝난 객체를 수동으로 **얼리고**(freezing) 얼리기 전에는 사용할 수 없도록 하기도 한다고는 하나, 복잡하고 런타임 에러에도 취약하기 때문에 실전에서도 거의 쓰이지 않는다고 합니다. (해당 방법이 무엇인지는 백기선님께서도 잘 모르겠다고 하십니다.)

### 빌더 패턴(Builder pattern)
---
점층적 생성자 패턴의 안전성과 자바 빈즈 패턴의 가독성을 겸비한 패턴입니다. 클라이언트는 필수 매개변수만으로 생성자(또는 정적 팩터리 메서드)를 이용하여 빌더 객체를 얻습니다. 그리고 백더 객체가 제공하는 세터 메서드들을 이용하여 원하는 선택 매개변수들을 설정하고, 마지막으로 매개변수가 없는 `build`메서드를 호출하여 필요한 (보통 불변인) 객체를 얻습니다.

```java
public class NutritionFacts{
    private final int servingSize;      // (ml, 1회 제공량)     // 필수
    private final int servings;         // (회, 총 n회 제공량)  // 필수 
    private final int calories;         // (1회 제공량당)       // 선택
    private final int fat;              // (g/1회 제공량)       // 선택
    private final int sodium;           // (mg/1회 제공량)      // 선택
    private final int carbonhydrate;    // (g/1회 제공량)       // 선택

    public static class Builder{
        // 필수 매개변수
        private final int servingSize;
        private final int servings;
        // 선택 매개변수 - 기본값 초기화 필수
        private final int calories          = 0;         
        private final int fat               = 0;              
        private final int sodium            = 0;           
        private final int carbonhydrate     = 0;    

        public Builder(int servingSize, int servings){
            this.servingSize = servingSize;
            this.servings    = servings;
        }

        public Builder calories(int val)        { calories = val;       return this; }
        public Builder fat(int val)             { fat = val;            return this; }
        public Builder sodium(int val)          { sodium = val;         return this; }
        public Builder carbonhydrate(int val)   { carbonhydrate = val;  return this; }

        public Nutritions build() { return new NutritionFacts(this); }
    }

    private NutritionFacts(Builder builder) {
        servingSize     = builder.servingSize;
        servings        = builder.servings;
        calories        = builder.calories;
        fat             = builder.fat;
        sodium          = builder.sodium;
        carbonhydrate   = builder.carbonhydrate;
    }
}
```
NutritionFacts 클래스는 불변이며, 빌더의 세터 메서드들은 빌더 자신을 반환하기 때문에 연쇄적으로 호출이 가능합니다. 이러한 방식을 `플루언트 API(fluent API)` 혹은 `메서드 연쇄(method chaining)`이라고 하며 다음과 같이 사용할 수 있습니다.

```java
NutritionFacts cocaCola = new NutritionFacts.Builder(240, 8)
                .calories(100).sodium(35).carbonhydrate(27).build();
```

코드를 작성하기도 쉽고, 뜻이 명확하여 읽기도 쉽다. 이러한 빌더 패턴은 파이썬과 스칼라에 있는 **명명된 선택적 매개변수**(named optional parameters)를 흉내 낸 것이다.

위 예제는 유효성 검사 코드는 생략되어 있으나, 잘못된 매개변수를 일찍 발견하기 위해서는, 빌더의 생성자 및 메서드에서 매개변수를 검사하고, build 메서드가 호출하는 생성자에서 여러 매개변수에 걸친 불변식(invariant)를 검사하는 방식을 이용한다고 합니다. 검사 이후, 어떤 매개변수가 잘못되었는지를 자세히 알려주는 메시지를 담아 `IllegalArgumentException`을 던지도록 해야합니다.

```
여기서 불변식이란 프로그램이 정해진 기간 동안, 변경은 허용되나 특정 조건을 만족해야하는 것을 이야기 합니다.
리스트의 크기가 항상 0보다 크거나 같아야하는 것 역시 불변식이라고 볼 수 있습니다.
```

빌더 패턴은 **계층적으로 설계된 클래스**와 함께 쓰기에 좋다고 합니다. 