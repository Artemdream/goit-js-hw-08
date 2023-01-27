import throttle from "lodash.throttle";

const form = document.querySelector('.feedback-form');
const formData = {};

form.addEventListener('input', throttle(onFormInput), 500);
form.addEventListener("submit", onFormSubmit)
contentForm();

function onFormInput (e) { 
    formData[e.target.name] = e.target.value;
    localStorage.setItem("feedback-form-state", JSON.stringify(formData))
};

function contentForm() {
    const saveData = localStorage.getItem("feedback-form-state");
        if (saveData) { 
            const contentParse = JSON.parse(saveData);
            form.email.value = contentParse.email;
            form.message.value = contentParse.message;
        }
};

function onFormSubmit (e){
    e.preventDefault()
    console.log(formData); 
    localStorage.removeItem("feedback-form-state");
    e.currentTarget.reset()
};
console.log(111);