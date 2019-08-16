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
    return `${student.name} revceives a perfect score on ${subject} `;
  }
}

class Student extends Person {
  constructor(aStudent) {
    super(aStudent);
    this.previousBackground = aStudent.previousBackground;
    this.className = aStudent.className;
    this.favSubjects = aStudent.favSubjects;
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
  favSubjects: ['Beat Shazam', 'Dance', 'Javascript', 'NodeJS']
});

console.log(' ');
console.log(fred.demo('Javascript'));
console.log(fred.grade(theStudent, 'Math'));
console.log(fred.speak());
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

// console.log(theStudent);
// console.log(projectManager);
// console.log(fred);
