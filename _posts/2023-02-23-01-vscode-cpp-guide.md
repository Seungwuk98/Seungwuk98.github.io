---
title: "VSCode C++ 문제 풀이 설정 가이드"
excerpt: "VSCode로 C++ 설정하기에 대한 모든 것"
category: 
 - 기타
tags:
 - [c++, cpp, gcc, g++, vscode]
author_profile: true
toc: true
toc_sticky: true
published: true
date: 2023-02-23
last_modified_at: 2023-02-23
---

# Windows VSCode C++ 문제풀이 설정
---
이것 때문에 정말 오랫동안 싸워왔고, 일부 성공한 상태로만 1년을 사용했다. vscode는 기본적으로 **코드 편집기**이고 자체적으로 빌드하는 기능은 제공하지 않는다. vscode의 동작 방식은 `동작 코드 -> 실행 엔진에 전달 -> [실행 엔진] -> 실행 엔진 결과물 확인 -> 동작 결과 사용자에게 전달`이다. 여기서 `실행 엔진`들이 우리가 알고 있는 `GCC 컴파일러`, `Python 인터프리터`, `JVM`과 같은 것들이다. 익스텐션에서 볼 수 있는 `C/C++`, `Python`, `Java`와 같은 것들은 사실, `실행 엔진`단계에서 사용되는 것들이 아닌 `실행 엔진에 전달`에 대한 설정을 담당하고, `실행 엔진 결과물 확인` 및 `동작 결과 사용자에게 전달` 과정을 돕는 역할을 수행한다. 그리고 사용자는 `실행 엔진`을 제외하면 많은 부분을 커스텀할 수 있다.

이러한 vscode의 성질은 이를 매우 자유롭게 만든다. 하지만 반대로 초심자에게 절망을 선사한다. 터미널을 기본적으로 다룰 줄 알아야만 json 설정들의 키워드를 어느정도 이해하고, 지레 짐작이라도 할 수 있기 때문이다.

## 준비물
모든 설정을 완료하기 위해서는 `bash`터미널이 필요하다. `bash`터미널은 리눅스에서 사용하는 터미널로, 이것저것 편의 기능이 내장되어 있다. 구글에 `git`을 치고, 이를 다운받으면 `git bash`가 자동으로 설치된다. `git`은 개발자들에게도 필수적인 기능이므로 설치하는데 거부감을 가질 필요는 없다. ~~어차피 언젠가는 설치하게 된다.~~

## GCC 컴파일러
문제풀이를 위한 컴파일러는 단연 gcc를 추천한다. 따라서 이번 설정에도 GCC 컴파일러를 다운받아 설정할 것이다. 

GCC 컴파일러는 [winlibs](https://winlibs.com/)에서 다운로드 가능하다. 아래 UCRT runtime 메뉴에서 원하는 버전의 GCC 컴파일러를 다운로드하자. 오직 문제풀이만을 위해서라면 사실 크게 버전은 중요하지 않으므로, 아무거나 해도 무방하다. 나는 `12.2.0`버전을 다운로드 했다. (without LLVM/Clang/LLD/LLDB 버전을 다운로드해도 크게 상관은 없을 것이다.)

이를 압축풀기하면 안에 `mingw64`라는 폴더가 있을 것이다. 이를 `C드라이브`에 넣어두자.

![image](https://seungwuk98.hopto.org/index.php/apps/files_sharing/publicpreview/WZZGbp8HFSJLMBC?file=/&fileId=15988&x=1920&y=1080&a=true)

이제 `환경 변수`를 지정해주어야 한다. `환경 변수`는 터미널에서 특정 키워드를 입력했을때, 적절한 파일이 있는지 찾아주는 최우선 경로라고 보면 된다. 만약 터미널에서 `gcc`키워드를 입력했을 때, 현재 경로에서 `gcc`를 찾지 못하면 `환경 변수`의 `path`로 등록된 경로에 `gcc`키워드를 처리할 수 있는 파일이 있는지 모두 검색한다. 

윈도우즈의 `시스템 환경 변수 편집`을 찾아 열어준다.


|시스템 속성|환경 변수|
|:---:|:---:|
|![image](https://seungwuk98.hopto.org/index.php/apps/files_sharing/publicpreview/Ts7GqJrBPwpNHt6?file=/&fileId=15998&x=1920&y=1080&a=true)|![image](https://seungwuk98.hopto.org/index.php/apps/files_sharing/publicpreview/F47eAgsDwitXRMp?file=/&fileId=16008&x=1920&y=1080&a=true)|


위 `Path`를 더블 클릭하면 경로들을 추가해줄 수 있다. 우리가 추가해줘야하는 경로는 `gcc.exe`와 `g++.exe` 컴파일러가 있는 경로이다. 따라서 `C:\mingw64\bin` 경로를 입력해주면 된다. 그리고 터미널을 열어주어 `gcc --version`을 입력하여 아래와 같이 나온다면 성공이다. 

|Path 추가|gcc 컴파일러 확인|
|:---:|:---:|
|![image](https://seungwuk98.hopto.org/index.php/apps/files_sharing/publicpreview/YXKqXp4zKEkpSeZ?file=/&fileId=16017&x=1920&y=1080&a=true)|![image](https://seungwuk98.hopto.org/index.php/apps/files_sharing/publicpreview/9X7Nw3xTijZNgqt?file=/&fileId=16027&x=1920&y=1080&a=true)|

만약 여기까지 제대로 했는데, 컴파일러 확인이 되지 않는다면 재부팅을 하고 오면 될 것이다.

## VSCode 설정
이제 VSCode 설정을 해보자. 만약 깔려있지 않다면 구글에 `visual studio code`를 검색하고 설치하자. 

우선 `C/C++` 익스텐션을 설치해야한다. `C/C++ Extension Pack`을 설치하면 기타 등등 필요한 것들을 한꺼번에 받을 수 있다. 여기까지 설치가 완료되었다면, cpp 파일을 만들어 코드를 작성해보자. 

|C/C++ Extension Pack|코드 작성|
|:---:|:---:|
|![image](https://seungwuk98.hopto.org/index.php/apps/files_sharing/publicpreview/WFaTDS47p9HNjrk?file=/&fileId=16037&x=1920&y=1080&a=true)|![image](https://seungwuk98.hopto.org/index.php/apps/files_sharing/publicpreview/o3FpC3fr5RckWfH?file=/&fileId=16047&x=1920&y=1080&a=true)|

위와 같이 코드 하이라이트가 적용되면 성공이다. 만약 안된다면, 역시 vscode를 껐다가 켜보자.

하지만, 아직 cpp코드를 실행할 수 없다. (물론 터미널로는 가능하지만) 우선 기본 터미널을 `git bash`로 설정해야 한다.

![image](https://seungwuk98.hopto.org/index.php/apps/files_sharing/publicpreview/irBCxF5W6Wm3sHy?file=/&fileId=16057&x=1920&y=1080&a=true)

터미널을 열어 `기본 프로필 선택`을 눌러주면 기본 터미널을 설정할 수 있다. `git bash`로 설정해주자. 만약 위와 같은 터미널 창이 현재 VSCode 화면에서 보이지 않는다면 ctrl + \`(백틱, 1 왼쪽, tab키 위쪽)을 눌러 터미널을 켜주자.

설정이 되고, ctrl + shift + \`을 눌러 새로운 터미널을 열면, `git bash`가 열리게 될 것이다. 

![image](https://seungwuk98.hopto.org/index.php/apps/files_sharing/publicpreview/MRr4ApZbggXdEMn?file=/&fileId=16067&x=1920&y=1080&a=true)


이제 본격적으로 실행하는 방법을 세팅할 것이다. `ctrl + shift + b`를 누르면 위 프롬프트에 `g++ 활성화 빌드`와 같은 것이 보이게 될 것이다. 클릭하면 `.vscode/`경로가 생기고 안에 `tasks.json`이라는 파일이 생성될 것이다. 

해당 파일에 아래와 같이 복사해주자.

```json
{
    "version": "2.0.0",
    "tasks": [
        {
            "type": "shell",
            "label": "C++ 빌드",
            "command": "g++",
            "args": [
                "-fdiagnostics-color=always",
                "-g",
                "${relativeFileDirname}/${fileBasename}",
                "-o",
                "${relativeFileDirname}/${fileBasenameNoExtension}.out",
                "&&",
                "${relativeFileDirname}/${fileBasenameNoExtension}.out",
                "<",
                "input.txt",
                ">",
                "output.txt"
            ],
            "problemMatcher": [
                "$gcc"
            ],
            "group": {
                "kind": "build",
                "isDefault": true
            }
        },
        {
            "type": "shell",
            "label": "g++ debug",
            "command": "g++",
            "args": [
                "-fdiagnostics-color=always",
                "-g",
                "${relativeFileDirname}/${fileBasename}",
                "-o",
                "${relativeFileDirname}/${fileBasenameNoExtension}.out"
            ],
            "problemMatcher": [
                "$gcc"
            ],
            "group": {
                "kind": "build"
            },
        }
    ]
}
```

`tasks.json`은 쉽게 말하면 매크로이다. 위는 `C/C++ 빌드`와 `g++ debug`두 가지 매크로에 대한 정보를 담고 있다. 

설정에 대해 간단하게만 설명하면아래와 같다.
|설정|설정하는 값|설정 내용|
|:---:|:---:|:---|
|`type`|명령의 종류|쉘스크립트를 이용할 것이므로 `shell`을 입력하였다.|
|`label`|명령의 이름|VSCode에서 보여지는 해당 명령의 이름<br> 원하는 이름을 작성해주면 된다.|
|`command`|명령 인자|`g++`을 이용하여 cpp 파일을 빌드할 것이므로 `g++`을 입력해주었다. 환경 변수 설정이 되지 않았다면 `g++.exe`파일의 절대 경로를 작성해주어야 한다.|
|`args`|명령 작성 시 뒤에 붙는 인자들|이는 따로 설명|
|`problemMatcher`|컴파일 에러 발생 시 처리|`gcc`컴파일러가 에러메시지를 전달할 것이므로 `$gcc`로 작성|
|`group`|그룹|해당 명령의 그룹, 둘다 `cpp`파일 빌드를 담당할 것이므로 `"kind": "build"`로 설정, 기본 빌드는 `C/C++ 빌드`이므로 `C/C++ 빌드`에만 `"isDefault": true`를 작성해줌|


### args 설명
---
`args`는 프로그램 실행 시 전달하는 인자들이다. 

예시를 들면 아래와 같다. `type`이 `shell`, `command`가 `g++`이고 `args`가 `["a.cpp", "-o", "a.out"]`이라면 `shell`에 다음과 같은 명령어가 실행된다. 

```bash
$ g++ a.cpp -o a.out
```

이는 `g++`을 이용하여 `a.cpp` 파일을 컴파일하여 `a.out`으로 결과를 만든다는 `g++` 명령어이다. 하지만 `bash` 터미널을 이용하면 이러한 꼼수를 부릴 수 있다. 

`args`가 `["a.cpp", "-o", "a.out", "&&", "./a.out", "<", "input.txt", ">", "output.txt"]`이라면 `shell`에 다음과 같은 명령어가 실행된다. 

```bash
$ g++ a.cpp -o a.out && ./a.out < input.txt > output.txt
```

여기서 `&&`은 두 개의 명령을 구분한다는 의미이다. 따라서 위는 `g++ a.cpp -o a.out`과 `./a.out < input.txt > output.txt`가 순차적으로 실행된다. 그리고 `bash`터미널에서 `<`의 의미는 `표준 입력 리다이렉션`, `>`의 의미는 `표준 출력 리다이렉션`이다. 위 명령어를 통해 `./a.out`이 실행 될 때, 터미널에서 입력을 받지 않고 `input.txt` 파일에서 입력을 받게 된다. 이렇게 하면, **번거롭게 예제 입력을 복사 및 붙여넣기 하지 않고**, 한 번만 `input.txt`에 작성하면 된다. 그리고 출력은 터미널이 아닌 `output.txt`에 작성된다. 이는 **출력을 재활용할 때, 굉장히 유용**하다. 

그럼 이제 `C/C++ 빌드` `tasks.json`의 `args`를 다시 가져와보겠다.

```json
"args": [
    "-fdiagnostics-color=always",
    "-g",
    "${relativeFileDirname}/${fileBasename}",
    "-o",
    "${relativeFileDirname}/${fileBasenameNoExtension}.out",
    "&&",
    "${relativeFileDirname}/${fileBasenameNoExtension}.out",
    "<",
    "input.txt",
    ">",
    "output.txt"
]
```

`-fdiagnostics-color=always`는 에러 발생시, 컴파일러의 내용을 컬러로 출력하겠다는 명령어이다. `-g`는 디버그 옵션으로, 사실 이유는 모르겠으나, 이 디버그 옵션으로 인해 `undefined behavior`의 동작이 달라져 과제 점수를 0점 받은 적이 있다. 웬만하면 붙여주는 편이다. 여기서 `${relativeFileDirname}`는 실행하는 파일의 상위 폴더의 상대 경로를 출력해주는 VSCode 예약어이다. `${fileBasename}`은 실행하는 파일의 이름으로 바꾸어준다. 따라서 `workspace` 경로가 `~/`이고, `~/ps/practice.cpp`를 실행한다고 하면 `${relativeFileDirname}`는 `./ps`가 되고, `${fileBasename}`는 `practice.cpp`가 되어 전체 명령어가 `./ps/practice.cpp`가 된다. `${fileBasenameNoExtension}`은 실행 파일에서 확장자를 제거해준다. `practice.cpp`가 `practice` 될 것이다. 따라서 해당 경우 위 명령어는 아래와 같이 실행된다.


```bash
$ g++ -fdiagnostics-color=always -g ./ps/practice.cpp -o ./ps/practice.out && \
 ./ps/practice.out < input.txt > output.txt
```
컴파일을 완료하고, 그 파일을 실행하는데, `input.txt`와 `output.txt`로 리다이렉션을 수행한다는 뜻이 되는 것이다. 

### cpp 파일 실행

이제 `input.txt`를 생성하고, 프로그램을 실행하는 `ctrl + shift + b`를 누르면 프로그램 실행이 될 것이다.

![image](https://seungwuk98.hopto.org/index.php/apps/files_sharing/publicpreview/ACs2xzZcWr6JATH?file=/&fileId=16076&x=1920&y=1080&a=true)


여기까지가 바로 프로그램 실행에 대한 설정이고, 1년 전에 이미 성공했던 내용이다. 이제 디버깅 설정을 해보겠다.

## gdb 디버깅 설정
디버거를 설정하기 위해 먼저 `tasks.json`의 설정을 미리 건드려두었다. `g++ debug` 매크로가 바로 그것이다. 이 매크로는 `.out`파일로 컴파일만 진행하고 `default`가 아니라서 `ctrl + shift + b`를 누르더라도 실행되진 않는다. 이제 `launch.json`파일을 설정해보자. 없다면 `.vscode` 경로에 직접 생성해주어도 좋다.

```json
{
    "version": "0.2.0",
    "configurations": [
        {
            "name": "C++ Launch",
            "type": "cppdbg",
            "request": "launch",
            "program": "${workspaceFolder}/${fileBasenameNoExtension}.out",
            "stopAtEntry": false,
            "args": ["<", "input.txt", ">", "output.txt"],
            "cwd": "${workspaceFolder}",
            "MIMode": "gdb",
            "miDebuggerPath": "gdb",
            "preLaunchTask": "g++ debug"
        }
    ]
}
```

위는 나도 정확하게 이해하는 부분이 많지는 않으니 이해하고 있는 부분만 간단하게만 설명하겠다. `.cpp` 파일에 `F5`를 누르면 `launch`가 진행된다. 이 때 cpp파일을 실행할 수 있는 `cppdbg`라는 `type`이 찾아져 위 명령을 실행한다. 그리고 `"MIMiode" : "gdb"` 명령어를 통해 `C/C++` 익스텐션의 `debug`기능과 실행이 연결된다. 

한편 `.cpp`파일은 컴파일을 해주어야 하므로 먼저 `"preLaunchTask": "g++ debug"`를 통해 `g++ debug` 매크로가 먼저 실행되어 컴파일이 진행된다. `program`을 통해 실행할 파일이 정해지며, 이 파일은 컴파일 완료된 `.out`파일이다. 단, 이 실행에서도 역시 리다이렉션을 사용할 것이므로 `args`를 위와 같이 설정해주었다. `cwd`는 `gdb`에 명령어 전달시 필요한 키워드인 것으로 보인다. 현재 `workspace` 경로를 지정해주었다. 디버거 경로는 `miDebuggerPath`로 지정된다. 환경 변수가 설정되어있으므로 `gdb`로 입력해두었다.

이제 모든 설정이 완료되었다. 이제 자동으로 `input.txt`, `output.txt`에서 입력이 진행되는 디버그를 VSCode에서 진행할 수 있다.

![image](https://seungwuk98.hopto.org/index.php/apps/files_sharing/publicpreview/5JCN6iWoNcWkBYJ?file=/&fileId=16086&x=1920&y=1080&a=true)


이제 디버깅까지 모든 과정을 VSCode에서 편하게 진행할 수 있을 것이다. 추가적으로 나는 `ctrl + shift + b`는 불편해서 `ctrl + alt + c`로 바꿔서 쓰고 있긴 하다. 


