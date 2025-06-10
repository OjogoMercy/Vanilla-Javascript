console.log(`Score Tracker system`)
const Scores =[
    {id:1, name:'Mercy', Math:97, English :93},
    {id:2, name:'David', Math:47, English :73},
    {id:3, name:'Alex', Math:67, English :53},
]
// to display all the scores 
// to add new scores and students 
function addStudent (id,name,Math,English){
    return Scores.push({
        id:id,
        name:name,
        Math:Math,
        English:English
    })
}
addStudent(4,'Eminem',30,75)
addStudent(5,'Sasha',68,90)
console.log(Scores)
// to update the score of a student 
function updateScore (studentName,newMath,newEnglish){
    const Student =  Scores.find(s => s.name === studentName);
    if (Student){
        Student.Math = newMath;
        Student.English = newEnglish
        console.log(`${studentName}'s scores have been updated`)
    }
    else{console.log(`${studentName} does not exist in this school 😒😠😡 go back to sender `)}
}
updateScore('shade',40,50)
updateScore('Eminem',30,50)

// to calculate the average scores Student and display the top performers 
function studentPerformance() {
    let totalScore = 0;
    let totalSubjects = 0;
    
    // Filter top-performing students while calculating overall average
    const topStudents = Scores.filter(student => {
        const studentTotal = student.Math + student.English; 
        student.average = studentTotal / 2; 
        totalScore += studentTotal; 
        totalSubjects += 2; 
        return student.average > 70; 
    });
    //to Display top-performing students
    console.log("Top Performing Students (Average > 70):");
    topStudents.forEach(student => {
        console.log(`${student.name} - Average Score: ${student.average}`);
    });
}

studentPerformance();

// to assign grades to each student 
function Grades() {
    Scores.forEach(student => {
        student.grade = {
            Math: AssignGrades(student.Math),
            English: AssignGrades(student.English)
        };
        console.log(`${student.name}'s grades --- Math: ${student.grade.Math}, English: ${student.grade.English}`);
    });
}

function AssignGrades(Score) {
    if (Score >= 70) return 'A Grade';
    else if (Score >= 60) return 'B Grade';
    else if (Score >= 50) return 'C Grade';
    else if (Score >= 45) return 'D Grade';
    else if (Score >= 40) return 'E Grade';
    else return 'F Grade - you failed Try Harder!';
}
Grades()