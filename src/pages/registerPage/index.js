import "./style.css";
// import img from "./img/rikkei logo.png";
export let registerPage = /*html*/`
<div class="create">

    <div class="sign_in">

        <!-- Logo rikkei -->
        <div class="logo">
            
        </div>
        <h1>Create new account</h1>
        <div class="error" id="serser-error-message" style="color: red; font-size: 18px"></div>
        <div class="error" id="serser-success-message" style="color: blue; font-size: 18px"></div>
        <!-- Sing in -->
        <div class="sign_in_table">
        <form id = "register-form">
            <p>First name:</p>
            <input type="text" name="firstName" placeholder="Please enter your first name">
            <p red id="firstName-error-message" style="color: red; font-size: 14px"></p>
            <p>Last name:</p>
            <input type="text" name="lastName" placeholder="Please enter your last name">
            <p id="lastName-error-message" style="color: red; font-size: 14px"></p>
            <p>Email address:</p>
            <input type="email" name="emailAddress" placeholder="Please enter your email">
            <p id="email-error-message" style="color: red; font-size: 14px"></p>
            <p>Password::</p>
            <input type="password" name="password" placeholder="Please enter your password">
            <p id="password-error-message" style="color: red; font-size: 14px"></p>
            <p>Confirm Password::</p>
            <input type="password" name="confirmPassword" placeholder="Confirm your password">
            <p id="confirmPassword-error-message" style="color: red; font-size: 14px"></p>
            <button id="login-loginPage">Login</button>
        </form>
        </div>
        <!-- New acc -->

        <div class="new_acc">
            <p id="alreadyAcc-loginPage">Already have an account? Login here</p>
        </div>


    </div>


</div>
`