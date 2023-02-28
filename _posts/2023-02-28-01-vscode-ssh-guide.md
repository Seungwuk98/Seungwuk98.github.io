---
title: "VSCode SSH 접속 가이드"
excerpt: "VSCode로 SSH 접속해서 편하게 개발하자"
category: 
 - 기타
tags:
 - [ssh, vscode]
author_profile: true
toc: true
toc_sticky: true
published: true
date: 2023-02-28
last_modified_at: 2023-02-28
---


# VSCode로 SSH 원격 접속하자
윈도우 환경에서 `git bash` 터미널 설치 시, 서드파티 프로그램으로 SSH 클라이언트를 제공한다. 따라서 `git bash` 안에서 `ssh <option> user@hostname` 형식으로 접근하는 것이 가능하다. 하지만 CLI 환경에서 접근하는 것이 익숙하지 않다면, SSH 접속을 완료해도 사용하는 것이 쉽지 않을 것이다. 이 때, 사용할 수 있는 것이 VSCode(~~만능~~)이다.

우선 SSH 클라이언트를 설치한다.

![image](https://seungwuk98.hopto.org/index.php/apps/files_sharing/publicpreview/nJ7CTDzTmHeq5Jo?file=/&fileId=16691&x=1920&y=1080&a=true)

위 익스텐션을 설치하자. 설치가 완료되면, 좌측 탭에서 원격 접속 관련된 메뉴가 생성된다. 그리고 `ctrl + shift + p`를 눌러 `ssh config`를 입력하면 아래와 같은 메뉴를 볼 수 있다. 클릭하면 유저에 있는 config 파일이나 global에 있는 config 파일을 고를 수 있는데, 우리는 개인 PC이기 때문에 편한걸 하면된다.


|원격 접속 메뉴| SSH config|
|:---:|:---:|
|![image](https://seungwuk98.hopto.org/index.php/apps/files_sharing/publicpreview/zeEaSJqwDrp5Ffe?file=/&fileId=16700&x=1920&y=1080&a=true)|![image](https://seungwuk98.hopto.org/index.php/apps/files_sharing/publicpreview/rk3kcYeW8TaidMA?file=/&fileId=16710&x=1920&y=1080&a=true)|

열면 다음과 같은 파일이 나오는데 여기서 여러분들이 접속할 서버에 관련된 설정을 진행하면 된다.

![image](https://seungwuk98.hopto.org/index.php/apps/files_sharing/publicpreview/sbgXmJRfcpByRYb?file=/&fileId=16719&x=1920&y=1080&a=true)

|설정 이름|설명|
|:---:|:---|
|`Host`|SSH 접속할 서버에 대한 설명|
|`HostName`|도메인 또는 IP 주소|
|`IdentityFile`|인증 용도로 사용되는 파일 주소, `pem`, `rsa` 파일 등|
|`User`|유저 이름, 일반적으로 `AWS`는 우분투 `EC2`를 처음 생성하면 `ubuntu`|
|`Port`|포트 번호를 지정해줄 수 있다.|

필요한 설정을 완료하면 해당 설정으로 자동으로 접속할 수 있는 아이콘이 생성된다. 

![image](https://seungwuk98.hopto.org/index.php/apps/files_sharing/publicpreview/TAGD79S6aRxnLg2?file=/&fileId=16729&x=1920&y=1080&a=true)

아이콘을 누르면 접속할 수 있다.

![image](https://seungwuk98.hopto.org/index.php/apps/files_sharing/publicpreview/Mpsjc3MZ84pidCT?file=/&fileId=16738&x=1920&y=1080&a=true)

필자는 CLI 환경이 익숙한편이라 자주 VSCode로 접속하지는 않지만, VSCode만으로 진행할 수 있는 개발도 있어 종종 사용한다. 여러분들도 꼭 VSCode로 접속해서 편하게 개발해보길 바란다.