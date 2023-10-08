function getGrade() {
    let score = parseInt(document.getElementById("examScore").value);

    if (isNaN(score) || score < 0 || score > 100) {
        alert("Please enter a valid score between 0 and 100.");
        return; // Exit the function early if value is not between 0 to 100.
    }

    let grade;

    if (score >= 90) {
        grade = "A";
        document.getElementById("gradeResult").innerText = "Your grade is: " + grade + " , Impressive!";
    } else if (score >= 80) {
        grade = "B";
        document.getElementById("gradeResult").innerText = "Your grade is: " + grade + " , Great buddy!";
    } else if (score >= 70) {
        grade = "C";
        document.getElementById("gradeResult").innerText = "Your grade is: " + grade + " , Enjoy Your Day, You're Passed!";
    } else if (score >= 60) {
        grade = "D";
        document.getElementById("gradeResult").innerText = "Your grade is: " + grade + " , Good Effort at last days";
    } else {
        grade = "F";
        document.getElementById("gradeResult").innerText = "Your grade is: " + grade + " , Don't worry, It is life. We are with you bro!"; // Exit the function early if grade is "F"
    }
}
