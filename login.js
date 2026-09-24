// alert("login.js");

// Handle login *********************************************************************

const loginBtn = document.getElementById("login-btn");
console.log(loginBtn);
loginBtn.addEventListener("click", (event) => {
    event.preventDefault();

    const loginEmail = document.getElementById("login-email");
    const loginPassword = document.getElementById("login-password");

    const loginEmailValue = loginEmail.value;
    const loginPasswordValue = loginPassword.value;

    const loginEmailCorrection = document.getElementById("login-email-correction");
    const loginPasswordCorrection = document.getElementById("login-password-correction");

    if (loginEmailValue === "") {
        loginEmailCorrection.textContent = "Email field is empty";
        loginEmailCorrection.style.display = "block";
        loginEmail.addEventListener("input", () => {
            if (loginEmail.value !== "") {
                loginEmailCorrection.style.display = "none";
            } else {loginEmailCorrection.style.display = "block";}
        });
    }
    if (loginPasswordValue === "") {
        loginPasswordCorrection.textContent = "Password field is empty";
        loginPasswordCorrection.style.display = "block";
        loginPassword.addEventListener("input", () => {
            if (loginPassword.value !== "") {
                loginPasswordCorrection.style.display = "none";
            } else {loginPasswordCorrection.style.display = "block";}
        });
    }

if (loginEmailValue !== "" && loginPasswordValue !== "") {

    const loginData = {
        loginEmail: loginEmailValue,
        loginPassword: loginPasswordValue,
    }

    console.log(loginData);

    async function loginVerification(loginData) {
        try{

            const response = await fetch("http://localhost:5000/api/admins/login",
                {
                    method: "POST",
                    headers: {"content-type": "application/json"},
                    body: JSON.stringify(loginData)
                }
            );

            const result = await response.json();
            console.log(result);

            console.log(response);
            if (!response.ok) {
                const failLoginMessage = document.getElementById("fail-login-message");
                failLoginMessage.style.display = "block";
                throw new Error( result || "Failed to create account");
            } else {
                console.log(result);
                const notificationMessage = document.getElementById("notification-message");
                let message = `<h2>You have successful logged in</h2>
                <p>You will be redirected to home page</p> `;
                notificationMessage.innerHTML = message;
                notificationMessage.style.display = "block";
                setTimeout(() => {
                    window.location.replace("index.html");
                }, 5000);
            }

        } catch (error) {
            console.error("Error occured:", error);
        }
    }
    loginVerification(loginData);

}

});
