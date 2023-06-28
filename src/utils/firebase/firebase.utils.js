import { initializeApp } from "firebase/app";
import {
	getAuth,
	signInWithRedirect,
	signInWithPopup,
	GoogleAuthProvider,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyDrg8K4tRHbdLOOli2atFY4JbKh5bk88_c",
	authDomain: "crwn-clothing-db-7c154.firebaseapp.com",
	projectId: "crwn-clothing-db-7c154",
	storageBucket: "crwn-clothing-db-7c154.appspot.com",
	messagingSenderId: "355342649722",
	appId: "1:355342649722:web:61300336f2f33f431e6ec3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
	prompt: "select_account",
});

export const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
//access firebase database
export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
	const userDocRef = doc(db, "users", userAuth.uid);
	const userSnapshot = await getDoc(userDocRef);

	if (!userSnapshot.exists()) {
		const { displayName, email } = userAuth;
		const createdDate = new Date();

		try {
			await setDoc(userDocRef, { displayName, email, createdDate });
		} catch (error) {
			console.log("error creating the user", error.message);
		}
	}
	return userDocRef;
};
