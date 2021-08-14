import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyDWmCZ3ti6mQYJrKiahC1HzbOHfpKLRnA0',
	authDomain: 'vathat-cf57f.firebaseapp.com',
	projectId: 'vathat-cf57f',
	storageBucket: 'vathat-cf57f.appspot.com',
	messagingSenderId: '793747978348',
	appId: '1:793747978348:web:bc0a5b372cde64c04c0049',
	measurementId: 'G-BB66K20R34',
};

function init() {
	!firebase.apps.length && firebase.initializeApp(firebaseConfig);
}

init();

const db = firebase.firestore();

const database = {
	add: async (collection, item) => {
		const doc = await db.collection(collection).add(item);
		return { data: { ...item, id: doc.id } };
	},
	getAll: async collection => {
		const querySnapshot = await db.collection('hats').get();
		let result = [];
		querySnapshot.forEach(doc => {
			result.push({
				...doc.data(),
				id: doc.id,
			});
		});
		return result;
	},
	getHat: async id => {
		const doc = await db.collection('hats').doc(id).get();

		return { ...doc.data(), id: doc.id };
	},
};

const auth = {
	currentUser: () => firebase.auth().currentUser,
	observe: callback => {
		const unsubscribe = firebase.auth().onAuthStateChanged(userCredential => {
			callback(userCredential);
		});
		return unsubscribe;
	},
};

export const FirebaseApi = {
	database: database,
	auth: auth,
	currentUser: () => {
		return firebase.auth().currentUser;
	},
	getHat: async id => {
		return database.getHat(id);
	},
	signOut: async () => {
		try {
			await firebase.auth().signOut();
		} catch (error) {
			var errorCode = error.code;
			var errorMessage = error.message;
			console.log('error', errorCode, errorMessage);
			return { error };
		}
	},
	signup: async ({ email, password }) => {
		try {
			const userCredential = await firebase
				.auth()
				.createUserWithEmailAndPassword(email, password);

			return { user: userCredential.user };
		} catch (error) {
			var errorCode = error.code;
			var errorMessage = error.message;
			console.log('error', errorCode, errorMessage);
			return { error };
		}
	},
	login: async ({ email, password }) => {
		try {
			const userCredential = await firebase.auth().signInWithEmailAndPassword(email, password);

			return { user: userCredential.user };
		} catch (error) {
			var errorCode = error.code;
			var errorMessage = error.message;
			console.log('error', errorCode, errorMessage);
			return { error };
		}
	},
	observe: callback => {
		const unsubscribe = firebase.auth().onAuthStateChanged(user => {
			if (user) {
				callback(user);
			} else {
				callback(null);
			}
		});
		return unsubscribe;
	},
};
