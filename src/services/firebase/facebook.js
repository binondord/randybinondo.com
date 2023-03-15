import { getAuth, signInWithRedirect, FacebookAuthProvider } from "firebase/auth";




export default function signin() {
    const provider = new FacebookAuthProvider();

    provider.addScope('user_birthday');
    const auth = getAuth();
    signInWithRedirect(auth, provider)
  .then((result) => {
    // The signed-in user info.
    const user = result.user;
    console.log('user: ', user);

    // This gives you a Facebook Access Token. You can use it to access the Facebook API.
    const credential = FacebookAuthProvider.credentialFromResult(result);
    const accessToken = credential.accessToken;

    // IdP data available using getAdditionalUserInfo(result)
    // ...
  })
  .catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = FacebookAuthProvider.credentialFromError(error);

    // ...
  });
}