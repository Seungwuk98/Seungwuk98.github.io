---
title: "마크다운 가이드"
excerpt: "개발자의 한글, 개발자의 워드 마크다운 시작하기"
category: 
 - 기타
tags:
 - [markdown, 마크다운, 블로그]
author_profile: true
toc: true
toc_sticky: true
published: true
date: 2023-02-02
last_modified_at: 2023-02-02
---

# 마크다운 가이드
---

마크다운을 처음 써보시는 여러분들을 위해 준비했습니다. :smiley:

## Header
---
```markdown
# 결과물은 아래와 같습니다.
## 결과물은 아래와 같습니다.
### 결과물은 아래와 같습니다.
#### 결과물은 아래와 같습니다.
##### 결과물은 아래와 같습니다.
###### 결과물은 아래와 같습니다.
```
# 결과물은 아래와 같습니다.
## 결과물은 아래와 같습니다.
### 결과물은 아래와 같습니다.
#### 결과물은 아래와 같습니다.
##### 결과물은 아래와 같습니다.
###### 결과물은 아래와 같습니다.

## 구분선
---
```markdown
구분선
---
***
```

이게

---
***
구분선이에요


## Code Block
---
<pre>
<code>```python
import ssafy_ens from ssafy

print(ssafy_ens)
```</code>
</pre>

결과물은 아래와 같이 나옵니다. 여러분들이 원하는 언어를 입력하면 그 언어의 하이라이팅이 적용됩니다.
**ex) cpp, java, html, css.. 등등**

```python
import ssafy_ens from ssafy

print(ssafy_ens)
```

## 인라인 코드 블록
---
코드블럭은 너무 크다. 인라인으로 써야할 때도 많을 것이다.
```markdown
이것이 `inline codeblock` 이다.
```

이것이 `inline codeblock` 이다.


## 강조 효과
---

```markdown
강조
*피사의탑*

기울임
**아싸라비야**

강조 / 기울임
***피사의 탑 아싸라비야*** 

밑줄
<u>밑줄 텍스트</u>

색 적용
<span style="color:red">붉은 돼지</span>

취소선
~~나는 역시 최고다~~
```

*피사의탑*

**아싸라비야**

***피사의 탑 아싸라비야*** 

<u>밑줄 텍스트</u>

<span style="color:red">붉은 돼지</span>

~~나는 역시 최고다~~


## 링크
---
```markdown
주소
<http://myavatar.co.kr>
```
<http://myavatar.co.kr>

```markdown
설명이 있는 주소
[내 포트폴리오](http://myavatar.co.kr)
```

[내 포트폴리오](http://myavatar.co.kr)

## 그림 삽입
---
```image
img 태그 사용
<img src="https://mypetlife.co.kr/9989/kakaotalk_20180720_165306472/"/>

그림 삽입
![image](https://mypetlife.co.kr/9989/kakaotalk_20180720_165306472/)
```

img 태그 사용
<img src="https://mypetlife.co.kr/9989/kakaotalk_20180720_165306472/"/>

그림 삽입
![image](https://mypetlife.co.kr/9989/kakaotalk_20180720_165306472/)

## Block Quotes
---
```markdown
> 맻개고?
>> 밥알 말이다.
>>> 맻개고? 
```
> 맻개고?
>> 밥알 말이다.
>>> 맻개고? 

## 리스트
---

```markdown
순서 없는 리스트
- 이건
- 순서가 
- 없습니다.
    - 순서
    * 신경 쓰지 말고
    + 써봐요
        - 앞의 문자도 신경쓸 필요 없어요
```
순서 없는 리스트
- 이건
- 순서가 
- 없습니다.
    - 순서
    * 신경 쓰지 말고
    + 써봐요
        - 앞의 문자도 신경쓸 필요 없어요

```markdown
순서가 있는 리스트
1. 이건
2. 순서가
3. 있습니다.
    1. 근데 숫자는
    2123424. 상관이 없어요
7777. 좋죠?
```

1. 이건
2. 순서가
3. 있습니다.
    1. 근데 숫자는
    2123424. 상관이 없어요
7777. 좋죠?


```markdown
체크 박스
- [ ] XXX
- [X] OOO
```
- [ ] XXX
- [x] OOO

## 표
---
```markdown
|왼쪽 정렬|중앙 정렬|오른쪽 정렬|
|:---|:---:|---:|
|새로운|마크다운은|정말 최고야!|
|표는|이렇게|사용한다구~|

```
|왼쪽 정렬|중앙 정렬|오른쪽 정렬|
|:---|:---:|---:|
|새로운|마크다운은|정말 최고야!|
|표는|이렇게|사용한다구~~~~|

정렬은 :의 위치로 표현 가능합니다.

|정렬||
|:---|---|
|왼쪽 정렬|:---|
|중앙 정렬|:---:|
|오른쪽 정렬|---:|


## html 블럭
---
마크다운은 결국 html로 렌더링 해주는 것..!
이미 html인 것은 그대로 사용하므로 마크다운이 어렵다면 html을 사용하는 것도 가능합니다.

```html
<button>버튼입니다.</button>
<input placeholder="인풋입니다." />
```

<button>버튼입니다.</button>
<input placeholder="인풋입니다." />