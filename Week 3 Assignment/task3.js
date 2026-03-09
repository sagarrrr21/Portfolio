let students = [
  { name: "Alice", age: 22, scores: [78, 85, 92] },
  { name: "Bob", age: 20, scores: [88, 90, 76] },
  { name: "Charlie", age: 21, scores: [95, 80, 85] },
];

function analyzeStudents(students) {
  let topStudent = "";
  let highestAvg = 0;

  students.forEach((student) => {
    let sum = student.scores.reduce((a, b) => a + b, 0);
    let avg = sum / student.scores.length;

    console.log(`${student.name} Average Score: ${avg.toFixed(2)}`);

    if (avg > highestAvg) {
      highestAvg = avg;
      topStudent = student.name;
    }
  });

  console.log(
    `Top Student: ${topStudent} with an average score of ${highestAvg.toFixed(2)}`,
  );
}

analyzeStudents(students);

