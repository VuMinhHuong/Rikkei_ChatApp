import { getAuth,
       createUserWithEmailAndPassword,
       updateProfile,
       signInWithEmailAndPassword } 
  from "firebase/auth";
import { renderErrorMessage, setActiveScreen} from '../view/index';

export let createNewUser = (firsName, lastName, email, password) => {
    const auth = getAuth();
     createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        console.log(userCredential);
        renderErrorMessage("serser-error-message", '');
        renderErrorMessage("serser-success-message", 'Susscess');

        updateProfile(auth.currentUser, {
            displayName: `${firsName} ${lastName}`, photoURL: "https://example.com/jane-q-user/profile.jpg"
          }).then(() => {
            // Profile updated!
            // ...
          }).catch((error) => {
            // An error occurred
            // ...
          });

    })
    .catch((err) => {
        const errorCode = err.code;
        const errorMessage = err.message;
        renderErrorMessage("serser-error-message", errorMessage);
        renderErrorMessage("serser-success-message", '');
    });
};


export let signIn = (email, password) => {
  const auth = getAuth();
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in
    setActiveScreen("chatPage")

    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorCode);
  });
}
