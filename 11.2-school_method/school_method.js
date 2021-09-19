const school = {
    teachers: [
        {
            id: 1,
            name: "Pinchas",
            subjects: ["chemistry", "biology", "physics"],
            students: [],
            capacityLeft: 3,
        },
        {
            id: 2,
            name: "Williams",
            subjects: ["history", "ethics"],
            students: [],
            capacityLeft: 2,
        },
    ],
    students: [
        {
            id: 10,
            name: "Jennifer",
            age: 20,
        },
        {
            id: 11,
            name: "Howard",
            age: 23,
        },
        {
            id: 12,
            name: "Old-Timmy",
            age: 86,
        },
        {
            id: 13,
            name: "Houston",
            age: 21,
        },
    ],
};

function findPerson(sch , id){
    return sch.students.find(n => n.id == id) || sch.teachers.find(n => n.id == id)
}

// console.log(findPerson(school , 13));

function assignStudent(stdId , sub){
  let teacherSubject = school.teachers.find(k => k.subjects.includes(sub))
    if(teacherSubject.capacityLeft > 0){
        teacherSubject.capacityLeft--;
        teacherSubject.students.push(stdId)
        return teacherSubject
    }else{
        return 'Sorry, no available teachers left'
    }
}
// console.log(assignStudent(11 , 'history'));
// console.log(assignStudent(12 , 'history'));
// console.log(assignStudent(13 , 'history'));

function assignTeachersSubject(teacherId , newSub){
    let teacherSubject = school.teachers.find(k => k.id == teacherId)
      if(!teacherSubject.subjects.includes(newSub)){
          teacherSubject.subjects.push(newSub)
          return teacherSubject
      }else{
          return 'Sorry, Already Exist subject'
      }
  }

  console.log(assignTeachersSubject(2 , 'history'));
  console.log(assignTeachersSubject(2 , 'math'));
