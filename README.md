# REST API for MOCK

# Table of Contents
1. [How to Use](#How-to-Use)
2. [게시판](#게시판)
3. [챗팅](#챗팅)

## How-to-Use

* Windows Cmd or PowerShell
```bat
C:/> npm install -g json-server
[...]
C:/> json-server --watch db.json
```

* Linux or Mac OSX
```bash
$ npm install -g json-server
[...]
$ ./start.sh
or
$ json-server --watch db.json
```


## 게시판
> 본 내용은 **REST API** 중 `게시판`에 대한 내용입니다.

1. 게시판 목록 및 내용 조회

   | METHOD  | PATH    |
   | ------- |:------- |
   | GET     | boards  |

   [REQ]
   ```http
   GET  http://{host}:{port}/boards
   ```
   [RES]
   ```json
   [
     {
       "id": 1,
       "name": "Inquiry",
       "status": "enable"
     },
     {
       "id": 2,
       "name": "Notice",
       "status": "enable"
     }
   ]
   ```

2. 특정 게시판 내용 조회

   | METHOD  | PATH        | 
   | ------- |:----------- |
   | GET     | boards/{id} |

   [REQ]
   ```http
   GET  http://{host}:{port}/boards/1
   ```
   [RES]
   ```json
   {
     "id": 1,
     "name": "Inquiry",
     "status": "enable"
   }
   ```

3. 특정 게시판 게시물 조회

   | METHOD  | PATH                 |
   | ------- |:-------------------- |
   | GET     | boards/{id}/contents |

   [REQ]
   ```http
   GET http://{host}:{port}/boards/1/contents
   ```
   [RES]
   ```json
   [
     {
       "id": 1,
       "author": "",
       "title": "문의1",
       "content": "문의가있습니다.",
       "tag": "기타",
       "created": 1214340983204,
       "updated": 1214340983204,
       "boardId": 1
     }
   ]
   ```

4. 특정 게시판 게시물 및 코멘트 조회

   | METHOD  | PATH                 | PARAMETERS      |
   | ------- |:-------------------- |:--------------- |
   | GET     | boards/{id}/contents | _embed=comments |

   [REQ]
   ```http
   GET  http://{host}:{port}/boards/1/contents?_embed=comments
   ```
   [RES]
   ```json
   [
     {
       "id": 1,
       "author": "",
       "title": "문의1",
       "content": "문의가있습니다.",
       "tag": "기타",
       "created": 1214340983204,
       "updated": 1214340983204,
       "boardId": 1,
       "comments": [
         {
           "id": 1,
           "author": "",
           "comment": "안녕하세요. 반갑습니다.",
           "created": 1214340983204,
           "updated": 1214340983204,
           "contentId": 1
         }
       ]
     }
   ]
   ```

## 챗팅
> 본 내용은 **REST API** 중 `챗팅`에 대한 내용입니다.

1. 챗팅룸 목록 조회

   | METHOD  | PATH    |
   | ------- |:------- |
   | GET     | rooms   |

   [REQ]
   ```http
   GET  http://{host}:{port}/rooms
   ```
   [RES]
   ```json
   [
     {
       "id": 1,
       "name": "Secret1",
       "created": 1214340983204
     },
     {
       "id": 2,
       "name": "Public1",
       "created": 1214340983204
     }
   ]
   ```

> 내용은 계속 추가됩니다.