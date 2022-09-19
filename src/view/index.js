import{ loginPage } from '../pages/loginPage/index';
import{ chatPage } from '../pages/chatPage/index';
import{ registerPage } from '../pages/registerPage/index';
import{ resetPasswordPage } from '../pages/resetPasswordPage/index';
import{ validateLoginInfo, validateRegisterForm, validateResetPasswordPage } from '../controler/index';
import{ createNewUser } from '../model/index';
export let setActiveScreen = (screenName) => {
    let app = document.getElementById("app");
    switch (screenName) {
        case 'loginPage':
            if(app) {
                app.innerHTML = loginPage;
            }
            const loginForm = document.getElementById("login-form");
            if(loginForm) {
                // console.log(loginForm);
                loginForm.addEventListener("submit", (event) => {
                    event.preventDefault();

                    const email = loginForm.email.value;
                    const password = loginForm.password.value;

          // Controller làm nhiệm vụ validate thông tin
          // Tạo hàm validateLoginInfo nhận vào email và password trong controller
          // Export hàm validateLoginInfo
          // Import hàm validateLoginInfo trong view
          // Trong Screen Login, gọi hàm validateLoginInfo() với email và pass lấy
          // từ form

          // Trong controller, logic của hàm validateLoginInfo sẽ là kiểm tra xem
          // có phải email hợp lệ không, có bỏ trống trường nào không

          // Tạo một hàm setMessage ở view và export sang controller để in ra lỗi
          // từ những trường hợp validate đó

          //Làm giống hệt các bước trên với những hàm resetpassword và register

                    console.log(email, password);
                    validateLoginInfo(email, password);
                })
            }
            let singInNewAcc = document.getElementById("singInNewAcc");
             singInNewAcc.onclick = () => setActiveScreen("registerPage");

            let forgetPass = document.getElementById("forgetPass");
            forgetPass.onclick = () => setActiveScreen("resetPasswordPage");

            break;

        case 'registerPage':
            if(app) {
                app.innerHTML = registerPage;
            }
            const registerForm = document.getElementById("register-form");
            if(registerForm) {
                console.log(registerForm);
                registerForm.addEventListener("submit", (event) => {
                    event.preventDefault();

                    const firstName = registerForm.firstName.value;
                    const lastName = registerForm.lastName.value;
                    const emailAddress = registerForm.emailAddress.value;
                    const password = registerForm.password.value;
                    const confirmPassword = registerForm.confirmPassword.value;

                    validateRegisterForm(firstName, lastName, emailAddress, password, confirmPassword);
                })

                let alreadyAcc = document.getElementById("alreadyAcc-loginPage");
                alreadyAcc.onclick = () => setActiveScreen("loginPage")

            }
            break;
        
        case 'chatPage':
            if(app) {
                app.innerHTML = chatPage;
            }
            break;


            
        case 'resetPasswordPage':
            if(app) {
                app.innerHTML = resetPasswordPage;
            }
            const resetPasswordFrom = document.getElementById("email-error-message");
            // console.log(resetPasswordFrom);
            if(resetPasswordFrom) {
                // console.log(resetPasswordFrom);
                resetPasswordFrom.addEventListener("submit", (event) => {
                    event.preventDefault();

                    const emailAddress = resetPasswordFrom.resetPasswordPage.value;
                    console.log(emailAddress);
                    validateResetPasswordPage(emailAddress);
                })
            }

            let loginFromReset = document.getElementById("login-form-reset");
            loginFromReset.onclick = () => setActiveScreen("loginPage");

            break;

        default:

            break;
    }
}

export let renderErrorMessage = (id, text) => {
    const errorMessage = document.getElementById(id);
    if (errorMessage) {
      errorMessage.innerText = text;
    }
  };




