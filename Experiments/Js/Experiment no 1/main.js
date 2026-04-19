const studentName = "Yash Patil";
const rollNo = 109;
const studentMarks = 90;

const detailsDiv = document.getElementById("student-details");
if (detailsDiv) {
    detailsDiv.innerHTML = `
        <p>Name: ${studentName}</p>
        <p>Roll No: ${rollNo}</p>
        <p>Marks: ${studentMarks}</p>
    `;
}

const num = 40;
console.log(`${num} is ${num % 2 === 0 ? "Even" : "Odd"}`);

const resultMarks = 45;
console.log(`Result: ${resultMarks >= 40 ? "Pass" : "Fail"}`);

console.log("Numbers from 1 to 10:");
for (let i = 1; i <= 10; i++) {
    console.log(i);
}
