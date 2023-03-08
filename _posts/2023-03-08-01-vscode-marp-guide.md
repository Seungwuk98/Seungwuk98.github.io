# Marp 시작 가이드

## Marp

최근에 노마드 코더가 다뤄보았기에 `Marp`를 설치 및 사용해보았고, 사용과정에서 받은 인사이트가 있어서 이렇게 글로 남겨보려고 한다. 기존에도 워낙 마크다운으로 작업하는 것을 좋아해서, `Marp`는 상당히 반갑게 다가오는 툴이었다.

### Marp란?

---

**Markdown Presentation Ecosystem**의 줄임말인 것으로 보인다. 기존의 마크다운 문법들을 이용하여 프레젠테이션을 만드는 종합툴 같은거라고 생각하면 된다. 하지만 `GUI`는 당연히 없고 텍스트 에디터에서만 진행한다. 만약 마크다운 문법이 익숙하지 않다면 [이 글](https://seungwuk98.github.io/%EA%B8%B0%ED%83%80/01-markdown-guide/)을 읽고 오는 것을 추천한다.

![image](https://seungwuk98.hopto.org/index.php/apps/files_sharing/publicpreview/2MsFQDNmWmn4n5n?file=/&fileId=20302&x=2560&y=1600&a=true)

깃허브를 확인해보면 `marp-team`에서 개발한 것으로 보이나, people을 보면 한 명만 있다. 아마도 혼자서 모든 개발 과정을 완료하신 듯 하다. ~~어지간히 마우스 쓰기 싫으셨나보다.~~ 일본분이신 듯하며 `marp` 자료들을 찾아보면 일본어로 된 자료들이 꽤 많다.

### VSCode로 작업하기

---

`VSCode`에 `Marp for VS Code`라는 익스텐션이 있다. 이를 설치하자.

![image](https://seungwuk98.hopto.org/index.php/apps/files_sharing/publicpreview/A2Y6a5HmY8LPt72?file=/&fileId=20311&x=2560&y=1600&a=true)

설치하면 아래와 같이 아이콘이 생성된다.

![image](https://seungwuk98.hopto.org/index.php/apps/files_sharing/publicpreview/CE2eqwxRiZ3zfsS?file=/&fileId=20331&x=2560&y=1600&a=true)

이렇게 되면 설치 끝이다. 다만 `Markdown Preview Enhanced`라는 익스텐션을 먼저 깔아놨다면 `Marp`를 사용하는데 문제가 될 수 있다.

우선 해당 문제의 원인은 `Markdown Preview Enhanced`가 마크다운 미리보기에 대한 모든 단축키와 활성 옵션을 모두 가져가기 때문인 것으로 보인다. 그에 반해 `Marp`는 VSCode에 내장된 `built-in markdown preview`를 기반으로 한 듯하다. 적어도 나는 무슨 짓을 하더라도 `Marp` 미리보기 화면을 열 수 없었다. 해결방법은 아래와 같다.

-   설정에 들어가서 `markdown.showPreview` 옵션을 찾아 단축키를 원하는 것으로 바꾼다.
-   또는 `ctrl + <shift> + v`를 가진 `Markdown Preview Enhanced` 미리보기 활성화의 단축키를 지운다.

나는 빌드 단축키를 `ctrl + alt + c`를 사용하기 때문에, 기존의 빌드 단축키였던 `ctrl + shift + b`로 `markdown.showPreview` 단축키를 바꿔주었다. 이제 마크다운 파일을 작성하고, 설정한 단축키를 누르면 아래와 같이 기본 마크다운 미리보기가 잘 작동하게 된다.

![image](https://seungwuk98.hopto.org/index.php/apps/files_sharing/publicpreview/k3tbw4qyoGbcgH5?file=/&fileId=20350&x=2560&y=1600&a=true)

이제 `Marp` 버튼을 클릭하고 `Toggle Marp Feature for Current Markdown`을 클릭하면 아래와 같이 작동한다.

![image](https://seungwuk98.hopto.org/index.php/apps/files_sharing/publicpreview/xCXT7zfD5M2onBR?file=/&fileId=20360&x=2560&y=1600&a=true)

마크다운의 가장 위쪽에 있는 `---`와 `---` 사이에 있는 값들은 일반적으로 파일의 설정값들이다. `marp` 옵션을 `true`로 활성화함으로써 기본 마크다운 미리보기 엔진이 아닌 `marp` 엔진이 렌더링하게 된다. `marp`는 기본적으로 위와 같은 화면을 제공하며, 구분선을 추가함으로써 페이지를 추가할 수 있다. 또한 내부에 아무리 많은 내용이 있더라도, 페이지의 크기는 절대 커지지 않고 고정된다.

|새 슬라이드|overflow : hidden|
|:---:|:---:|
| ![image](https://seungwuk98.hopto.org/index.php/apps/files_sharing/publicpreview/Sk896rMwjFYBQq4?file=/&fileId=20369&x=2560&y=1600&a=true) | ![image](https://seungwuk98.hopto.org/index.php/apps/files_sharing/publicpreview/ysayrj5Y8dmytSr?file=/&fileId=20378&x=2560&y=1600&a=true) |

그리고 아래와 같은 기능들이 있다.

- 예쁜 테마 적용
- 테마 내부의 Class 적용을 통해, 쉽게 스타일 적용
- 모든 페이지에 Header 추가
- 이미지 크기 조절, 특수 효과, 배경으로 적용 등

이 이후 모든 문법들은 [document](https://marpit.marp.app/)에서 확인하길 바란다. 모든 상당히 정리가 잘 되어있어서, 쉽게 이해할 수 있을 것이다. 여기서 다룰 내용은 `marp` 다루기를 극대화하기 위한 꿀팁에 관련된 내용이다.

### 테마 적용하기
---

[marp-themes](https://github.com/topics/marp-themes)에 들어가보면 다양한 테마들이 소개되어있는 것이 보인다. 그 중에서 `matsubara0507 / marp-themes` 리포지토리의 `olive` 테마를 적용해보자. 

우리에게 필요한 것은 `.css`파일이다. 다만, `.css`파일을 직접 다운받아서 관리하는 것은 조금 부담스러운 느낌이 있다. 다운받지 않고 인터넷에서 직접 `.css` 파일을 받아 관리할 수 있도록 하자.

https://github.com/matsubara0507/marp-themes/blob/master/themes/olive.css

위는 `.css`파일의 `github` 주소이다. 하지만 위 링크 그대로는 파일에 대한 정보를 얻을 수 없다. 하지만 뒤에 쿼리 파라미터 `?raw=true`를 붙여주면 아래와 같은 주소로 리다이렉션된다.

https://raw.githubusercontent.com/matsubara0507/marp-themes/master/themes/olive.css

이 주소를 `settings.json`에 넣어 테마로 사용할 수 있도록 해보자. 우선 마크다운을 주로 작업할 워크스페이스에서 `settings.json`를 키자. `.vscode` 폴더가 없으면 만들고, `settings.json`파일을 만들어준다. 만들고 아래와 같이 세팅한다.

```json
{
    "markdown.marp.themes": [
        "https://raw.githubusercontent.com/matsubara0507/marp-themes/master/themes/olive.css",
    ]
}
```
기존에 `settings.json` 파일이 이미 있다면, 위 설정만 추가한다. 설정을 추가하면 이제 `olive`테마를 추가할 수 있다.

![image](https://seungwuk98.hopto.org/index.php/apps/files_sharing/publicpreview/3JZZeMNffHPryZi?file=/&fileId=20387&x=2560&y=1600&a=true)

이제 예쁜 ppt를 만들 수 있을 것만 같은 기분이 들게 된다.

### 슬라이드 한정 스타일 적용
---
테마를 바꿀 수는 없지만, 각 테마에는 `class`가 정의되어 있다. `olive`에는 `default, invert, olive, lead, lead-invert, lead-olive` 등이 있다고 한다. `default`랑 `lead`만 이용해보자.

`class`는 맨 위에 선언해줄 수 있다. 우선 선언하는데로 가장 우선순위가 높은 `class`의 스타일이 적용되는 듯 하다. 

```markdown
---
marp: true
theme: olive
class:
    - lead
    - default
---
```
지금은 `lead`가 적용되어 중앙정렬이 되는 것을 볼 수 있다.

![image](https://seungwuk98.hopto.org/index.php/apps/files_sharing/publicpreview/krdoXXYmMCHba7R?file=/&fileId=20395&x=2560&y=1600&a=true)

슬라이드에 `class`를 적용시키는 방법은 2가지가 있다.

```markdown
<!-- class: lead -->
<!-- _class: lead -->
```
마크다운 내에 주석처리를 하고, 주석 내부에 위와 같이 작성해준다. 단 `_`없이 `class`를 선언하는 경우 **현재 슬라이드 이후 모든 슬라이드에 class**가 적용된다. 따라서 처음에만 정의해주고 웬만하면 슬라이드 내부에는 `_class`를 활용하는 것이 좋다.


### html 추출 및 웹으로 불러오기

`marp` 사용의 꽃이라고 볼 수 있다. `marp`의 아이콘을 클릭하면 `Export Slide Deck`을 볼 수 있고, 이를 누르면 파일로 저장할 수 있다. 여기서 `html`파일로 추출하는 것이 가능하다. `marp` 설정에 들어가면 기본 파일 형식을 바꿀 수 있다. 

`html`파일로 추출하고 실행하면, 전체화면, 발표자 모드 등을 지원한다. 만일 서버가 있다면, 이를 바로 배포하여 웹으로 어디서든지 발표하는 것이 가능할 것이지만, 이것은 당연히 쉽지 않다. `github`를 극한으로 이용하는 방법을 알아보자.

우선 `html` 파일을 `github`에 올려놓자. 그러면 위에서 했던 것처럼, 쿼리 파라미터 `?raw=true`를 붙여 주소를 가지고 오자.

https://raw.githubusercontent.com/Seungwuk98/TIL/main/wow.html

하지만 이 http 요청의 결과는 `text/plain`이므로 웹페이지의 결과물이 보이지 않는다. 도메인을 `raw.githack.com`으로 바꾸고 결과물을 살펴보자.

https://raw.githack.com/Seungwuk98/TIL/main/wow.html


결과를 `text/html`로 받게되며 브라우저가 이를 렌더링하게 된다. 복잡하게 `gh-pages`등으로 배포하는 과정을 겪을 필요없이, 웹사이트처럼 방문하는 것이 가능하다. 또한 `ppt`까지 `git` 플로우로 작업한다는 것이 개발자라면 개발자다울수도 있겠다. 

### 마무리 및 총평

`markdown`을 숨쉬듯이 사용하는터라 상당히 반갑고 좋은 툴이지만 **이게 왜 안돼?** 할만한, 당연히 될 것같지만 되지 않는 기능들도 몇몇 있는 편이다. 또한 **길이가 길어질수록 슬라이드를 관리하는 것이 쉽지 않다**. 아마도 영원히 `ppt`를 대체하는 일은 없겠지만, 빠르고 쉽게 짧은 `ppt`를 만들 수 있다는 점이 매력으로 다가와 꾸준히 쓸 것 같다. ~~사실 나도 마우스 잡는게 싫다.~~ 
