# View Chat (Candidate App Name) - Data Structure

뷰챗(가칭) 어플리케이션을 서비스하기 위해서는 서버의 다양한 지원이 필요하겠지만, 그 중에서도 REST API, OFFLINE FIRST, P2P 등에 대한 지원이다. 따라서, 위 나열된 기능을 지원하기 위해서는 보다 쉽고 빠른 개발 방법이 요구되며 서버의 구성이 무엇보다 중요하다 하겠다.

## Table of Contents

   1. [구성 - Architecture](#구성)
   1. [데이터](#데이터)

### 구성

- Singular

```text
                            ------------------------------------|
  ------------|             |  ----------|       ------------|  |
  |           |             |  |         |       |           |  |
  | Client    | Replication |  | Sync    |  DCP  | Couchbase |  |
  | Couchbase | <---------> |  |         | <---> | Server    |  |
  | Lite      |    REST     |  | GateWay |       | Cluster(s)|  |
  |           |             |  |         |       |           |  |
  |------------             |  |----------       |------------  |
                            |------------------------------------
```

### 데이터

데이터 타입(문맥적) 종류

| TYPE    | Description       |
|---------|-------------------|
| User    |                   |
| Post    |                   |
| Comment |                   |