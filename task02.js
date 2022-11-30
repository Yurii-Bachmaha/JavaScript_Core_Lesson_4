let student1 = { yearOfStudying: 5, facultyName: 'Art' };
let student2 = { yearOfStudying: 4, facultyName: 'Music' };
let student3 = { yearOfStudying: 3, facultyName: 'Economics' };
let student4 = { yearOfStudying: 2, facultyName: 'Education' };
let student5 = { yearOfStudying: 6, facultyName: 'Engineering' };
let student6 = { yearOfStudying: 3, facultyName: 'Humanities' };
let student7 = { yearOfStudying: 7, facultyName: 'Information Technology' };
let student8 = { yearOfStudying: 1, facultyName: 'Law' };
let student9 = { yearOfStudying: 4, facultyName: 'Philosophy' };
let student10 = { yearOfStudying: 6, facultyName: 'Political Science' };

let students = [];
students.push(student1, student2, student3, student4, student5, student6, student7, student8, student9, student10);
console.log(students);

function getName(student) {
    return student.facultyName;
}

let listOfFaculties = students.map(getName);
console.log(listOfFaculties);

function sumYearOfStudying(sumOfYears, currentStudent) {
    return sumOfYears + currentStudent.yearOfStudying;
}

let sumOfYears = students.reduce(sumYearOfStudying, 0);
console.log('Sum of all years of studying = ' + sumOfYears);