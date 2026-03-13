export default function getListStudents(students) {
 if (!Array.isArray(students)) return[];
 const idSum = students.reduce((total, student) => total + student.id, 0);
 return idSum;
}
