// CODE here for your Lambda Classes
class Person {
  constructor(aPerson) {
    this.name = aPerson.name;
    this.age = aPerson.age;
    this.location = aPerson.location;
  }

  speak() {
    return `Hello my name is ${this.name}, I am from ${this.location}`;
  }
}

class Instructor extends Person {
  constructor(anInstructor) {
    super(anInstructor);
    this.specialty = anInstructor.specialty;
    this.favLanguage = anInstructor.favLanguage;
    this.catchPhrase = anInstructor.catchPhrase;
  }

  demo(subject) {
    return `Today we are learning about ${subject}`;
  }

  grade(student, subject) {
    return `${student.name} receives a perfect score on ${subject} `;
  }

  randomGrade(student) {
    console.log(student.grade);
    var num = Math.floor(Math.random() * 10) + 1; // this will get a number between 1 and 10; floor just rounds down to nearest whole number
    num *= Math.floor(Math.random() * 2) == 1 ? 1 : -1; //produce a negative number 50% of time
    student.grade = student.grade + num;
    console.log(student.grade);
  }
}

class Student extends Person {
  constructor(aStudent) {
    super(aStudent);
    this.previousBackground = aStudent.previousBackground;
    this.className = aStudent.className;
    this.favSubjects = aStudent.favSubjects;
    this.grade = aStudent.grade;
    this.status = aStudent.status;
  }

  listSubjects(student) {
    console.log(`${this.name}'s favorite subjects are: `);
    student.favSubjects.forEach(element => {
      console.log(element);
    });
  }

  listSubjects() {
    console.log(`${this.name}'s favorite subjects are: `);
    let arr = this.favSubjects;
    arr.forEach(element => {
      console.log(element);
    });
  }
  prAssignment(subject) {
    return `${this.name} has submitted a PR for ${subject}`;
  }

  sprintChallenge(subject) {
    return `${this.name} has begun a sprint challenge on ${subject}`;
  }

  graduate() {
    if (this.grade > 70) {
      console.log(`${this.name} is ready to graduate`);
      //potentially have a status key which could be turned to graduate vs current student
      this.status = 'Graduated';
    } else {
      console.log(`${this.name} needs to continue their studies...`);
      this.status = this.status;
    }
  }
}

class ProjectManager extends Instructor {
  constructor(aPM) {
    super(aPM);
    this.gradClassName = aPM.gradClassName;
    this.favInstructor = aPM.favInstructor;
  }

  standUp(channel) {
    return `${this.name} announces to ${channel}, @${channel} standy times!`;
  }

  debugsCode(student, subject) {
    return `${this.name} debugs ${student.name}'s code on ${subject}`;
  }
}

const fred = new Instructor({
  name: 'Fred',
  location: 'Bedrock',
  age: 37,
  favLanguage: 'JavaScript',
  specialty: 'Front-end',
  catchPhrase: `Don't forget the homies`
});

const projectManager = new ProjectManager({
  name: 'Shredder',
  location: 'Bedrock',
  age: 370,
  favLanguage: 'NodeJS',
  specialty: 'Back-end',
  catchPhrase: `Don't forget the homies`,
  gradClassName: `Classof2019`,
  favInstructor: `Freddie Thompson`
});

const theStudent = new Student({
  name: 'Brittany',
  location: 'Savannah, Ga',
  age: 27,
  previousBackground: 'Bar Tender',
  className: 'WebPT9',
  favSubjects: ['Beat Shazam', 'Dance', 'Javascript', 'NodeJS'],
  grade: 90,
  status: 'current student'
});

console.log(' ');
console.log(fred.demo('Javascript'));
console.log(fred.grade(theStudent, 'Math'));
console.log(fred.speak());
fred.randomGrade(theStudent);
console.log(' ');

theStudent.listSubjects();
console.log(' ');
theStudent.listSubjects(theStudent);
console.log(' ');
console.log(theStudent.prAssignment('math'));
console.log(theStudent.sprintChallenge('Javascript'));
console.log(' ');
console.log(projectManager.standUp('WebPT9'));
console.log(projectManager.debugsCode(theStudent, 'Javascript'));
console.log(' ');
// console.log(theStudent);
// console.log(projectManager);
// console.log(fred);

console.log(theStudent);
console.log(' ');
theStudent.graduate();
console.log(' ');
console.log(theStudent);
