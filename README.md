CLI to wrap a hapi plugin in a pack and start the server.

[![Build Status](https://secure.travis-ci.org/wpreul/doitlive.svg)](http://travis-ci.org/wpreul/doitlive)

## Getting Started

1. Install doitlive globally with:

```
npm install -g doitlive
```

2. Inside of a plugin folder for hapi run `doitlive`


## Options

By default `dotitlive` starts on the first available port.  However, you can override this to start the server on a
specific port.  To do this pass as the first argument the port number to start on.  For example:


```
$ doitlive 8080
Server started
port: 8080
plugin: tv
```
