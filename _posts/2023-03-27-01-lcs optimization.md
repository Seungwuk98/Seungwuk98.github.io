---
title: "LCS - 메모리 절약"
excerpt: "Longest Common Subsequence"
category: 
 - 알고리즘
tags:
 - [다이나믹 프로그래밍, dp, 알고리즘, 백준]
author_profile: true
toc: true
toc_sticky: true
published: true
date: 2023-03-27
last_modified_at: 2022-03-27
use_math: true
---

## Toggling LCS

해당 문제는 백준에 따로 출제되어 있는 문제는 아닌 걸로 알고있다. 하지만 이러한 테크닉을 사용해야하는 문제들이 (평범한 배낭 등) 있음을 알 것이다.

$LCS$의 길이 구하기 역시 토글링 방식으로 문제를 해결할 수 있다. $i$번째 행의 $DP$ 테이블을 채울 때, 오로지 $i-1$번째 행과 $i$번째 행만 필요하기 때문에, 2개의 행만 정의하고 홀수, 짝수에 따라 현재 행과 이전 행의 번호만 토글링해주면 된다.

```cpp
#include <bits/stdc++.h>

using namespace std;

string a, b;
int dp[2][1010];
int n, m;

int main() {
    cin >> a >> b;
    n = a.size(); m = b.size();
    for (int i=1; i<=n; ++i) {
        int now = i & 1;
        int prev = now ^ 1;
        for (int j=1; j<=m; ++j) {
            if (a[i - 1] == b[j - 1]) dp[now][j] = dp[prev][j - 1] + 1;
            else dp[now][j] = max(dp[prev][j], dp[now][j - 1]);
        }
    }
    cout << dp[n & 1][m];
}
```

![](/assets/img/togglelcs/1.png)
