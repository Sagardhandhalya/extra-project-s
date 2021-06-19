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
description : refresh access token

req = {
    "refresh": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTYxMjk4Mjk1NCwianRpIjoiN2U1MzVjNjNjNWQzNDExY2IxZTI4MTZiMGI4MTI3OTMiLCJ1c2VyX2lkIjoxfQ.mpKV7kgapTSRGTpNwJ3rN2ZA7oRzsijmpwx_DgHEfDc"
}

res = {
    "access": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjEyOTE0NTU0LCJqdGkiOiJlODY0OTc5M2RhNGM0OWY3OTZiODU0MzU0Nzc1NTAyMCIsInVzZXJfaWQiOjF9.S4H16pb1vqodaCPGNVWOuWHuQNTiNgwadIpX4ujAlvE"
}
```

3. POST /api/signup/

``` c++

description : for Signup of new user

req = {
    "username":"user10", "password":"password", "first_name":"uname", "last_name":"1", "email":"user10@g.com"
}

res = {
    "id": 3,
    "password": "pbkdf2_sha256$180000$jBF7SnX8ywg3$I+F+sUMnPFIcISVHoiEWhqmRBTzq6sbAsEF+ofjon4I=",
    "last_login": null,
    "is_superuser": false,
    "username": "user10",
    "first_name": "uname",
    "last_name": "1",
    "email": "user10@g.com",
    "is_staff": false,
    "is_active": true,
    "date_joined": "2021-02-10T14:27:11.788716Z",
    "groups": [],
    "user_permissions": []
}

```


4. GET /api/note/

```c++
description : get all notes for a user 

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

5. POST /api/note/

```c++

description : Add a new note

req = {
        "title": "add this note",
        "color": "red",
        "is_pinned" : "true",
        "is_archived":"true",
        "is_text":"false",
        "reminder" :"2021-02-10 01:36:33.461825",
    
    }


res = {

    "id": 10,
    "title": "add this note",
    "color": "red",
    "is_pinned": true,
    "is_archived": true,
    "is_text": false,
    "reminder": "2021-02-10 01:36:33.461825",
    "todos": []

}
```

OR

```c++

description : Add a new note

req = {
        "title": "After 2",
        "color": "red",
        "reminder" :"2021-02-10 01:36:33.461825",
        "is_reminder_seen": false,
        "todos": [
                    {
                        "content": "done",
                        "is_completed": false
                    }
                ]
    }




res = {
    "id": 6,
    "title": "After 2",
    "color": "red",
    "is_pinned": false,
    "is_archived": false,
    "is_text": false,
    "reminder": "2021-02-10T01:36:33.461825Z",
    "is_reminder_seen": false,
    "todos": [
        {
            "id": 3,
            "content": "done",
            "is_completed": false,
            "note_id": 6
        }
    ]
}

```


6. DELETE /api/note/id

```c++
description : delete note with given id

req = {

}

header = auth header [aceess token]

res ={}

```

7. POST /api/todo

```c++

description : add a new todo

req = {
    "content":"do it 3",
    "is_completed":"False",
    "note_id":"9"
}

header = auth header [access token]

res = {
    "id": 16,
    "content": "do it 3",
    "is_completed": false,
    "note_id": 9
}


```

8. PATCH /api/todo/id

``` c++
description : update todo with a given id

req = {
         ...

        "<attribute_you_want_to_update>" : "<new Value>"
        ...
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

9.  DELETE /api/todo/id

```c++
description : delete todo with given id

req = {

}

header = auth header [aceess token]

res ={}

```

10. GET /api/reminder/

```c++
description : get all note's reminder 

req = {}

headers = Acess token

res = [
    {
        "id": 2,
        "title": "Before 2",
        "reminder": "2021-02-11T14:23:09Z",
        "is_reminder_seen": false
    },
    {
        "id": 5,
        "title": "Before",
        "reminder": "2021-02-10T14:23:09.521058Z",
        "is_reminder_seen": false
    }
]

```

