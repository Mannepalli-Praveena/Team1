const form = document.querySelector("#form");
const Name = document.querySelector("#Name");
const email = document.querySelector("#email");
const Password = document.querySelector("#Password");
const Phone_Number = document.querySelector("#Phone_Number");

form.addEventListener('submit', (e) => {
    e.preventDefault();
    validateInputs();
});

function validateInputs() {
    const NameVal = Name.value.trim();
    const emailVal = email.value.trim();
    const PasswordVal = Password.value.trim();
    const Phone_NumberVal = Phone_Number.value.trim();

    if (NameVal === '') {
        setError(Name, 'Name is required');
    } else {
        setSuccess(Name);
    }

    if (emailVal === '') {
        setError(email, 'Email is required');
    } else if (!validateEmail(emailVal)) {
        setError(email, 'Please enter a valid email');
    } else {
        setSuccess(email);
    }

    if (PasswordVal === '') {
        setError(Password, 'Password is required');
    } else if (PasswordVal.length < 8) {
        setError(Password, 'Password must be at least 8 characters');
    } else {
        setSuccess(Password);
    }

    if (Phone_NumberVal === '') {
        setError(Phone_Number, 'Phone Number is required');
    } else if(Phone_NumberVal.length==10) {
        setSuccess(Phone_Number);
    }else{
        setError(Phone_Number,'Phone Number must contain 10 numbers');
    }
}

function setError(element, message) {
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error');
    errorElement.innerText = message;
    inputGroup.classList.add('error');
    inputGroup.classList.remove('success');
}

function setSuccess(element) {
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error');
    errorElement.innerText = '';
    inputGroup.classList.add('success');
    inputGroup.classList.remove('error');
}

const validateEmail = (email) => {
    return email.toLowerCase().match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};
