function StudentList(props) {
  return (
    <div>
      {props.students.map((student) => (
        <div key={student.id}>
          <h3>Name: {student.name}</h3>
          <p>Marks: {student.marks}</p>
        </div>
      ))}
    </div>
  );
}

export default StudentList;