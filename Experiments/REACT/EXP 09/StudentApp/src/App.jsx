import StudentList from "./StudentList";

function App() {
  const students = [
    { id: 1, name: "yash", marks: 85 },
    { id: 2, name: "pratik", marks: 90 },
    { id: 3, name: "satyarth", marks: 78 }
  ];

  return (
    <>
      <h1>Student List</h1>
      <StudentList students={students} />
    </>
  );
}

export default App;