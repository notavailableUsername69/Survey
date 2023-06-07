document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var name = document.getElementById("name").value;
    var address = document.getElementById("address").value;
    var contactNumber = document.getElementById("contactNumber").value;
    var email = document.getElementById("email").value;
    var course = document.getElementById("course").value;
    var yearLevel = document.getElementById("yearLevel").value;

    document.getElementById("resultName").textContent = name;
    document.getElementById("resultAddress").textContent = address;
    document.getElementById("resultContactNumber").textContent = contactNumber;
    document.getElementById("resultEmail").textContent = email;
    document.getElementById("resultCourse").textContent = course;
    document.getElementById("resultYearLevel").textContent = yearLevel;
    document.getElementById("resultCampus").textContent = "Cervantes Campus";

    document.getElementById("results").style.display = "block";
});