import "./style.css";
import img from "./img/rikkei logo.png";
export let loginPage = /*html*/`
<div class="main_sign_in">

    <div class="sign_in">

        <!-- Logo rikkei -->
        <div class="logo">
            <img src="${img}" alt="Rikkei-logo">
        </div>
        <h1>Sign in to Rikkei chat</h1>

        <!-- Sing in -->
        <div class="sign_in_table">

        <form id="login-form">
            <p>Email address:</p>
            <input type="email" name="email" placeholder="Please enter your email">
            <p class="err-email" id="email-error-message"></p>
            <p class="name">Password:</p>
            <input type="text" name="password" placeholder="Please enter your password">
            <p class="err-password" id="password-error-message"></p>
            <button>Login</button>
        </form> 

        </div>
        <!-- New acc -->

        <div class="new_acc">
            <p id="singInNewAcc">New to Rikkei Chat? Create an account</p>
        </div>
        <!-- Forget password -->

        <div class="forget_pass">
            <p id="forgetPass">Forget your password? Click here</p>
        </div>


    </div>


</div>
`