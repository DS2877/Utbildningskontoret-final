const initApp = async() => {
    const id = location.search.split("=")[1];
    console.log(id);
    loadCourse(id);
};

const loadCourse = async (id) => {
    const url = "http://localhost:3000/courses/?" + id;
    const response = await fetch(url);

    if (response.ok) {
        const course = await response.json()
        console.log(course)
    }
};

const bookCourse = async (courseTitle, studentEmail) => {
    // Skriva ner till Json namn på studenten samt namnet på kursen
    // POST!!!
}

document.addEventListener("DOMContentLoaded", initApp);