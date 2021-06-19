1. POST /api/token/

``` c++

description : for login get access token and refresh token
req = {
    "username" : "admin",
    "password":"admin"
}

res = {
    "refresh": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTYxMjk4Mjk1NCwianRpIjoiN2U1MzVjNjNjNWQzNDExY2IxZTI4MTZiMGI4MTI3OTMiLCJ1c2VyX2lkIjoxfQ.mpKV7kgapTSRGTpNwJ3rN2ZA7oRzsijmpwx_DgHEfDc",
    "access": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjEyOTE0NTU0LCJqdGkiOiJlODY0OTc5M2RhNGM0OWY3OTZiODU0MzU0Nzc1NTAyMCIsInVzZXJfaWQiOjF9.S4H16pb1vqodaCPGNVWOuWHuQNTiNgwadIpX4ujAlvE"
}
```


2. POST /api/token/refresh/

```c++
description : refresh acesss token
req = {
    "username" : "admin",
    "password":"admin"
}

res = {
    "refresh": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTYxMjk4Mjk1NCwianRpIjoiN2U1MzVjNjNjNWQzNDExY2IxZTI4MTZiMGI4MTI3OTMiLCJ1c2VyX2lkIjoxfQ.mpKV7kgapTSRGTpNwJ3rN2ZA7oRzsijmpwx_DgHEfDc",
    "access": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjEyOTE0NTU0LCJqdGkiOiJlODY0OTc5M2RhNGM0OWY3OTZiODU0MzU0Nzc1NTAyMCIsInVzZXJfaWQiOjF9.S4H16pb1vqodaCPGNVWOuWHuQNTiNgwadIpX4ujAlvE"
}
```

3. POST /api/signup/

```c++
descreption : add new user 

req = {
    {
        "username":"xuser",
        "email":"xuser@xuser.com",
        "phone":"9087345523",
        "password":"astrongpassword",
        "first_name": "jams",
        "last_name":"Disuja"
    }
}

res ={
     {
         "id" : 3,
        "username":"xuser",
        "email":"xuser@xuser.com",
        "phone":"9087345523",
        "password":"astrongpassword",
        "first_name": "jams",
        "last_name":"Disuja"
    }
}
```

4. GET /app/note

```c++
description : get all notes of perticuler user 

req = {}

headers = Acess token

res = {
    [
    {
        "id": 9,
        "title": "Do something..",
        "color": "black",
        "is_pinned": false,
        "is_archived": false,
        "is_text": false,
        "reminder": "2021-02-09T20:10:48.750472Z",
        "todos": [
            {
                "id": 16,
                "content": "do it 3",
                "is_completed": false,
                "note_id": 9
            },

        ]
    },
]
}

```

5. POST /app/note

```c++

description : Add a new note

req = {
    
    {
        "title": "add this note",
        "color": "red",
        "todos": [
           
        ],
        "is_pinned" : "true",
        "is_archived":"true",
        "is_text":"false",
        "reminder" :"2021-02-10 01:36:33.461825"
    }
}

res = {
{
    "id": 10,
    "title": "add this note",
    "color": "red",
    "is_pinned": true,
    "is_archived": true,
    "is_text": false,
    "reminder": "2021-02-10 01:36:33.461825",
    "todos": []
}
}
```

6. DELETE /app/note/id

```c++
description : delete note with given id

req = {

}

header = auth header [aceess token]

res ={}

```

7. POST /app/todo

```c++

description : add a new todo

req = {
    {
    "content":"do it 3",
    "is_completed":"False",
    "note_id":"9"
}
}

header = auth header [access token]

res = {
    {
    "id": 16,
    "content": "do it 3",
    "is_completed": false,
    "note_id": 9
}
}


```

8. PATCH /app/todo/id

``` c++
description : update todo with a given id

req = {
    {
        ...

        "<attribute_you_want_to_update>" : "<new Value>"
        ...
    }

}

res ={

    {
    "id": 16,
    ...
        "<attribute_you_want_to_update>" : "<updated Value>"
   ...
}

}

```

9.  DELETE /app/todo/id

```c++
description : delete todo with given id

req = {

}

header = auth header [aceess token]

res ={}

```

