export class Cart{
    constructor(){
        this.arr=[];
    }
    add(course){
        this.arr.push(course);
    }
    remove(course){
        this.arr=this.arr.filter((item)=>{
            return item!==course;
        })
    }
    display(){
        this.arr.forEach((item)=>{
            console.log(item);
        })
    }
}