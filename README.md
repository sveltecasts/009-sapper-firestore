# sapper-template & firebase firestore

[Rollup Fix (found @ Stackoverflow)](https://stackoverflow.com/a/56817589) 

Important files:

```src/firebaseConfig``` Add your Firebase Config here!!!

```rollup.config.js```  Rollup Fix (see post @ stackoverflow)

```src/template.html``` Added firebase CDN

```src/firebase.js```checks if we are onthe Client or Serverside

```src/client.js``` Prepares firebase for the Serverside

```src/firebase.js```checks if we are on the client or serverside and returns the firestore() function

```src/routes/index.svelte``` show our list on serverside & clientside






