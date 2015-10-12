# Client-side-log-for-Javascript
[![Build Status](https://travis-ci.org/Atherinca/Client-side-log-for-Javascript.svg?branch=master)](https://travis-ci.org/Atherinca/Client-side-log-for-Javascript)

# Description
This is a simple library for catching Javascript errors and send it to a specified server
It use window.onerror (saving the previous onerror and apply it at the end of the execution),
create a new XHMLHttpRequest() or ActiveXObject() and send the log message to the server which was settled

# Usage

For install this library you need to make a npm install first
Then in your application you can use the param "onerror.param.enabled" for set the log's sending to true or false
and the  "onerror.param.url" for set the url of your server which will receive the log
