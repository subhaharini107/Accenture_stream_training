class Book{
  
    constructor(title,author,year){
        this.title=title;
        this.author=author;
        this.year=year;
    }

    getInfo(){
        console.log(this.title+" by "+this.author+" ("+this.year+")");
    }

}

let book=new Book("The Spy","John",2035);
book.getInfo();
let book1=new Book("The Flower","Peter",2025);
book1.getInfo();

