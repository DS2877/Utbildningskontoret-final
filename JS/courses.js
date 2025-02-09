const initApp = async() => {
    const url = "http://localhost:3000/courses";
    const response = fetch(url);
    if (response.ok) {
        const courses = await response.json();
        console.log(courses)
    }
};

document.addEventListener("DOMContentLoaded", initApp)