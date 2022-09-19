import { setActiveScreen, view } from '../view/index';
import {renderErrorMessage} from '../view/index';
import { createNewUser, signIn } from "../model/index";
import { registerPage } from '../pages/registerPage';

export let validateLoginInfo = (email, password) => {
  // regex, regular expression
  // email regex
  const emailRegex =
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
if (!email) {
  renderErrorMessage("email-error-message", "Please enter your email");
} else if (!emailRegex.test(email)) {
  renderErrorMessage("email-error-message", "Invalid email");
} else {
  renderErrorMessage("email-error-message", "");
}

if (!password) {
  renderErrorMessage("password-error-message", "Please enter your password");
} else {
  renderErrorMessage("password-error-message", "");
}

// if (email && password) {
//   // let singInNewAcc = document.getElementById("singInNewAcc");
//   // singInNewAcc.onclick = () => setActiveScreen("registerPage");
// }
if(email, password) {
  signIn(email, password)
}

}


export let validateRegisterForm = (firstName, lastName, emailAddress, password, confirmPassword) => {
    // regex, regular expression
    // email regex
    const emailRegex =
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  if (!emailAddress) {
    renderErrorMessage("email-error-message", "Please enter your email");
  } else if (!emailRegex.test(emailAddress)) {
    renderErrorMessage("email-error-message", "Invalid email");
  } else {
    renderErrorMessage("email-error-message", "");
  }
  
  if (!firstName) {
    renderErrorMessage("firstName-error-message", "Please enter your firstName");
  } else {
    renderErrorMessage("firstName-error-message", "");
  }

  if (!lastName) {
    renderErrorMessage("lastName-error-message", "Please enter your lastName");
  } else {
    renderErrorMessage("lastName-error-message", "");
  }

  if (!password) {
    renderErrorMessage("password-error-message", "Please enter your password");
  } else {
    renderErrorMessage("password-error-message", "");
  }

  if (!confirmPassword) {
    renderErrorMessage("confirmPassword-error-message", "Please enter your confirmPassword");
  } else {
    renderErrorMessage("confirmPassword-error-message", "");
  }
  if(
    firstName && lastName && emailAddress && password && confirmPassword && password === confirmPassword) {
        createNewUser(firstName, lastName, emailAddress, password);

        setActiveScreen("loginPage");
    }
  }


export let validateResetPasswordPage = (email) => {
    // regex, regular expression
    // email regex
    const emailRegex =
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  if (!email) {
    renderErrorMessage("email-error", "Please enter your email");
  } else if (!emailRegex.test(email)) {
    renderErrorMessage("email-error", "Invalid email");
  } else {
    renderErrorMessage("email-error", "");
  }
  }


