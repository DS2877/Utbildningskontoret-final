const loginInput = document.querySelector("#email");
const loginButton = document.querySelector("#login");

const initApp = async() => {
    findStudent("philip@philip.se")
};

const findStudent = async(email) => {
    const url = "http://localhost:3000/students?email=" + email;
    const response = await fetch(url);
    if (response.ok) {
        const student = await response.json();
        if(student.length === 0){
            //Registrera
            console.log("Registrera dig!")
            location.href= "./register.html";
        } else {
            console.log(student);
        }
    }
};

const handleLogin = () => {
    const email = loginInput.value;
    findStudent(email);
};

document.addEventListener("DOMContentLoaded", initApp);
loginButton.addEventListener("click", handleLogin)