const form = document.querySelector("#regForm");
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const errorMessage = document.querySelector("#error-message");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirmPassword");
const age = document.querySelector("#age");

const nameError = document.querySelector("#nameError");
const emailError = document.querySelector("#emailError");
const passwordError = document.querySelector("#passwordError");
const confirmError = document.querySelector("#confirmError");
const ageError = document.querySelector("#ageError");

function clearError(){
    nameError.textContent = "";
    emailError.textContent = "";
    passwordError.textContent = "";
    confirmError.textContent = "";
    ageError.textContent = "";
}

form.addEventListener("submit",(event)=>{
    let isvalid = true;
    clearError();

    const username = username.value.trim();
    if(username === ""){
        nameError.textContent= "Name cannot be blank"
        isvalid = false;
    }

    const email = email.value.trim();
    if(email==="" || !email.includes("@")){
        emailError.textContent = "Please enter a valid email address.";
        isvalid = false;
    }

    const password = password.value;
    if(password.length < 8){
        passwordError.textContent = "Password must be at least 8 characters."
        isvalid = false;
    }

    const confirmPassword = confirmPassword.value;
    if(password != confirmPassword){
        confirmError.textContent = "Passwords do not match."
        isvalid = false;
    }

    const age = age.value.trim();
    if(age === "" || Number(age) <= 0){
        ageError.textContent = "Please enter a valid age."
        isvalid = false;
    }
    if(!isvalid){
        event.preventDefault();
    }
})