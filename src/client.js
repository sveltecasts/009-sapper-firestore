import * as sapper from '@sapper/app';
import { firebaseConfig } from './firebaseConfig'
let app = firebase.initializeApp(firebaseConfig)
window.db = app.firestore()
sapper.start({
	target: document.querySelector('#sapper')
});