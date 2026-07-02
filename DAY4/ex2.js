let student={
    name: "Subha",
    course:["HTML","CSS","JS"],
    addCourse:function(coursename){
        this.course.push(coursename);
    }
}
student.addCourse("React");
console.log(student);

