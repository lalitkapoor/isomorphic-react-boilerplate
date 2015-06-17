isomorphic-react-boilerplate
=========
An isomorphic react app written in es6 making use of babel, webpack, react-router

To run:

```bash
npm install
npm start
```

To run with docker:

```bash
docker build -t isomorphic-react-boilerplate
docker run -d -p 80:80 --name test isomorphic-react-boilerplate
open http://$(boot2docker ip) #OSX
# open http://127.0.0.1 #Linux
```
