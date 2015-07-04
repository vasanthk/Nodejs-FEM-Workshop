## My Notes
### Node Debugging
* nodemon or node-inspector (can debug using chrome dev tools)

### CommonJS Modules
* Node implements CommonJS style 

In Node - Errors need to be handled in callbacks or the process crashes.

### ExpressJS
Express is basically a stack of middleware that is all executed sequentially to process data that is coming in from an http request and then give a lot of different function a chance to operate on that data before ultimately returning a response.

Express also provides high level functionality like routing.
Routes - Responds to HTTP requests with a callback.

### Middleware
* Is a means of filtering data as its coming in from a http request, before it gets to your business logic in your route.
* For precporcessing requests
* eg. Authentication/Authorization

### Socket.io
* Thin wrapper around Websockets
* Works in tandem with n HTTP Server
* Client/Server push
* Broadcast messages to all connected clients easily
* Have session info for individual clients
* Easy to namespace messages to segmenet portion of messages going between client and server.

When using a 'set' function on the connected socket, it's kinda like storing a cookie. It's a persistent value that whenever there is an incoming messsage from that socket, you'll be able to access the value.

### Browserify
* Node-style require in the browser.
* self-contained node module environment.
* Can use local, core or npm-installed modules.
* Unifies the code style across client and server side JS (when using Node.js)