tubes.io standalone server
==========================

Standalone web server that runs node.js tube scripts. Casper & PhantomJS scripts are not supported at present.

Getting started
---------------

Clone this repo and then copy your tube scripts into the scripts folder.

Start the server 
```bash
$ npm start
```

Your script will then be available to GET/POST via HTTP at

http://localhost:3000/tube/[script name without .js extension] 

For example:

`GET http://localhost:3000/tube/hello?name=foo`

Executes the example script `hello.js` and returns the following

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