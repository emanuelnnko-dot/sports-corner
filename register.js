// Handle registration
const registerEmailCorrection = document.getElementById("register-email-correction");
const fNameCorrection = document.getElementById("f-name-correction");
const lNameCorrection = document.getElementById("l-name-correction");
const registerPasswordCorrection = document.getElementById("register-password-correction");
const confirmPasswordCorrection = document.getElementById("confirm-password-correction");

const registerBtn = document.getElementById("register-btn");
console.log(registerBtn);
registerBtn.addEventListener("click", (event) => {
    event.preventDefault();

    const registerEmail = document.getElementById("register-email").value;
    const firstName = document.getElementById("f-name").value;
    const lastName = document.getElementById("l-name").value;
    const registerPassword = document.getElementById("register-password").value;
    const confirmPassword = document.getElementById("confirm-password").value;

    if (registerEmail === "") {
        registerEmailCorrection.textContent = "Email is required";
        registerEmailCorrection.style.display = "block";
    } else {registerEmailCorrection.style.display = "none";}

    if (firstName === "") {
        fNameCorrection.textContent = "First name is required";
        fNameCorrection.style.display = "block";
    } else {fNameCorrection.style.display = "none";}

    if (lastName === "") {
        lNameCorrection.textContent = "Last name is required";
        lNameCorrection.style.display = "block";
    } else {lNameCorrection.style.display = "none";}

    if (registerPassword === "") {
        registerPasswordCorrection.textContent = "Password is required";
        registerPasswordCorrection.style.display = "block";
    } 

    if (confirmPassword === "") {
        confirmPasswordCorrection.textContent = "Password is required";
        confirmPasswordCorrection.style.display = "block";
    } 

    if (registerPassword !== confirmPassword) {
        confirmPasswordCorrection.textContent = "Confirmation password doesn't match";
        confirmPasswordCorrection.style.display = "block";
    } 

    if (registerEmail !== "" && firstName !== "" && lastName !== "" && registerPassword !== "" && confirmPassword !== "" && registerPassword === confirmPassword) {

        const newAdmin = {
            email: registerEmail,
            firstName: firstName,
            lastName: lastName,
            password: registerPassword
        }

        console.log(newAdmin);

        async function registerAdmin(newAdmin) {
            try{

                const response = await fetch("http://localhost:5000/api/admins",
                    {
                        method: "POST",
                        headers: {"content-type": "application/json"},
                        body: JSON.stringify(newAdmin)
                    }
                );

                const result = await response.json();
                console.log(result);

                console.log(response);
                if (!response.ok) {
                    throw new Error( result || "Failed to create account");
                } else {
                    const notificationMessage = document.getElementById("notification-message");
                    let message = `<h2>You have successful created an account</h2>
                    <p>You will be redirected to log in page for log in process</p> `;
                    notificationMessage.innerHTML = message;
                    notificationMessage.style.display = "block";
                    setTimeout(() => {
                        window.location.replace("login.html");
                    }, 5000);
                }

            } catch (error) {
                console.error("Error occured:", error.message);
            }
        }
        registerAdmin(newAdmin);
    }

});
