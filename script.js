const form = document.getElementById("marksForm");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    // Get student name
    let name = document.getElementById("studentName").value;

    // Get gender
    let gender = document.querySelector(
        'input[name="gender"]:checked'
    );

    // Get selected courses
    let courses = document.querySelectorAll(
        'input[name="course"]:checked'
    );

    // Get marks
    let marksInputs = document.querySelectorAll(".marks");

    let grades = document.querySelectorAll(".grade");

    let marks = [];

    // Validate marks
    for (let input of marksInputs) {

        let value = input.value;

        if (value === "" || Number(value) < 0 ||
            Number(value) > 100) {

            alert("Please enter marks between 0 and 100!");
            input.focus();
            return;
        }

        marks.push(Number(value));
    }

    // Calculate grades
    function getGrade(mark) {

        if (mark >= 80) return "A";
        else if (mark >= 70) return "B";
        else if (mark >= 60) return "C";
        else if (mark >= 50) return "D";
        else return "F";

    }

    // Display grades
    marks.forEach(function(mark, index) {

        grades[index].textContent = getGrade(mark);

    });

    // Calculate average
    let total = 0;

    for (let mark of marks) {
        total += mark;
    }

    let average = total / marks.length;

    document.getElementById("average").textContent =
        average.toFixed(2);

    // Selected courses
    let selectedCourses = [];

    courses.forEach(function(course) {
        selectedCourses.push(course.value);
    });

    // Display result
    document.getElementById("result").innerHTML = `
        Student Name: ${name}<br>
        Gender: ${gender.value}<br>
        Courses: ${selectedCourses.length > 0
            ? selectedCourses.join(", ")
            : "Not selected"}<br>
        Total Marks: ${total}<br>
        Average: ${average.toFixed(2)}<br>
        Overall Grade: ${getGrade(average)}
    `;

});