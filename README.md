tubes.io standalone server
==========================

Standalone web server that runs node tube scripts.

Getting started
---------------

Clone this repo and then copy your tube scripts into the scripts folder.

Start the server 
```bash
$ npm start
```

Your script will then be available to call via HTTP at

http://localhost:3000/tube/[script name without .js extension] 

For example:

GET http://localhost:3000/tube/hello?name=foo

Returns

```json
{
    "success": true,
    "result": {
        "hello": "foo"
    },
    "time": {
        "start": "2015-06-03T11:37:48.566Z",
        "end": "2015-06-03T11:37:48.723Z",
        "elapsed": 157
    },
    "log": [
        "2015-06-03T11:37:48.715Z - INFO: Hello log!\n"
    ]
}
```  