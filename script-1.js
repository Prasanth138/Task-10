//------Day 06 :OOPS TASK-------//
console.log("Day 06 : OOPS TASK")
//1.Class - Movie
// a)Write a constructor for the class Movie, which takes a String representing the title of the movie, a String representing the studio, and a String representing the rating as its arguments, and sets the respective class properties to these values
class Movie{
    constructor(title, studio, rating){
        this.title=title;
        this.studio=studio;
        this.rating=rating;
    }
}
var movie = new Movie('KGF', 'Hombale Flims', "S");
console.log(movie);

// b)The constructor for the class Movie will set the class property rating to "PG" as default when no rating is provided.
class Movie2{
    constructor(title, studio, rating='PG'){
        this.title=title;
        this.studio=studio;
        this.rating=rating;
    }
}
var movie1 = new Movie2('Kaithi', 'Dream Warrier Picture');
console.log(movie1);

//c)Write a method getPG, which takes an array of base type Movie as its argument, and returns a new array of only those movies in the input array with a rating of "PG". You may assume the input array is full of Movie instances. The returned array need not be full.

let mov=[{ title: "KGF", studio: "Hombale Flims", rating: "S" },{ title: "Kaithi", studio: "Dream Warrier Picture", rating: "PG" }, { title: "casino royale", studio: "eon productions", rating: "pg13" }, { title: "Maanagaram", studio: "eon productions", rating: "PG" }];
let pgMov=[];

const getPG = mov.filter( x => 
    x.rating == "PG"
  );
console.log(getPG); 

// d)Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”, the studio “Eon Productions”, and the rating “PG­13”
class Movies {
    constructor(title, studio, rating){
        this.title=title;
        this.studio=studio;
        this.rating=rating;
    }
}
var moviee =new Movies('casino royale','eon productions','pg13');
console.log(moviee);

//---------------------------------------------------------------------------------------------------------------------------//

//2.Convert the UML diagram to Typescript class
class Circle{
    constructor(Radius,Color){
        this.radius=Radius;
        this.color=Color;
    }
    Circle(Radius,Color){
        this.radius=Radius;
        this.color=Color;
        console.log("The Radius of Circle is "+this.radius);
        console.log("The Color of the Circle is "+this.color);
        newcircle.getArea();
        newcircle.getCircumference();
    }
    getRadius(){
        console.log("The Radius of Circle is "+this.radius)
    }
    setRadius(Radius){
        this.radius=Radius;
    }
    getColor(){
        console.log("The Color of the Circle is "+this.color);
    }
    setColor(Color){
        this.color=Color;
    }
    getArea(){
        console.log('The Area of Circle is '+(Math.PI*(this.radius*this.radius)))
    }
    getCircumference(){
        console.log('The Circumference of Circle is '+(2*Math.PI*this.radius))
    }

}

const newcircle = new Circle();
newcircle.Circle(2,"Green");
newcircle.setRadius(1);
newcircle.getRadius();
newcircle.setColor("Red");
newcircle.getColor();
newcircle.getArea();
newcircle.getCircumference();

//---------------------------------------------------------------------------------------------------------------------------//

//3 Write a “person” class to hold all the details.

class Person{
    constructor(name,fatherName,motherName,dob,age,address,emailId ,mobileNo,qualification){
        this.name=name;
        this.fatherName=fatherName;
        this.motherName=motherName;
        this.dob=dob;
        this.age=age;
        this.address=address;
        this.emailId=emailId;
        this.mobileNo=mobileNo;
        this.qualification=qualification;   
    }
    getName(){
        console.log(`Name : ${this.name}`);
     }
    getFName(){
        console.log(`Father Name :  ${this.fatherName}`);
     }
    getMName(){
        console.log(`Mother Name : ${this.motherName}`);
     }
    getdob(){
        console.log(`DOB : ${this.dob}`);
     }
    getage(){
        console.log(`Age : ${this.age}`);
     }
    getaddress(){
        console.log(`Address : ${this.address}`);
     }
    getemailId(){
        console.log(`MailId : ${this.emailId}`);
     }
    getmobileNo(){
        console.log(`Mobile Number : ${this.mobileNo}`);
     }
    getqualification(){
        console.log(`Qualification : ${this.qualification}`);
     }
    }

    const person = new Person("Prasanth A","Ayyasamy.K.K","Vasanthamani.A","10-06-1997","25","5/23,Koramadai,P.Karattupalyam(po),Gobichettipalayam(tk)","prasanthanbu777@gmail.com","9994141369","B.E-Civil");
    person.getName();
    person.getFName();
    person.getMName();
    person.getdob();
    person.getage();
    person.getaddress();
    person.getemailId();
    person.getmobileNo();
    person.getqualification();

//---------------------------------------------------------------------------------------------------------------------------//


//4. write a class to calculate the uber price
class UberPrice{
    constructor(rideDistance,baseFare,platformCharge,minimumFare){
        this.rideDistance=rideDistance;
        this.baseFare=baseFare;
        this.platformCharge=platformCharge;
        this.minimumFare=minimumFare;
    }
    getprice(){
        console.log("The Cost of UBER Ride is Rs." + (this.baseFare + this.platformCharge + this.minimumFare + (this.rideDistance* (this.rideDistance-1) ))+"/-")
    }
    
     setprice(rideDistance,baseFare,platformCharge,minimumFare){
            
        this.rideDistance=rideDistance;
        this.baseFare=baseFare;
        this.platformCharge=platformCharge;
        this.minimumFare=minimumFare;    
        }    
}
var Cost=new UberPrice();
Cost.setprice(10,35,2.5,40,10.5);
Cost.getprice();