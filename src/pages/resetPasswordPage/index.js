import "./style.css";
// import img from "./img/rikkei logo.png";
export let resetPasswordPage = /*html*/`
<div class="main_reset">

    <div class="reset">

        <!-- Logo rikkei -->
        <div class="logo">
           
        </div>
        <h1>Reset your password</h1>

        <!-- Sing in -->
        <form class="sign_in_table"  id="email-error-message">
            <p>Email address:</p>
            <input type="email" name="resetPasswordPage" placeholder="Please enter your email">
            <p id="email-error" style="color: red; font-size: 14px"></p>
            <button>Reset Password</button>
        </form>
        <!-- New acc -->

        <div class="new_acc">
            <p id="login-form-reset">Already have an account? Login here</p>
        </div>


    </div>


</div>
`