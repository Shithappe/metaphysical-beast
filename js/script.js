let awd = 1;

class Human{
    firstName;
    lastName;
    gender = "%";
    age = 22;
    calories = 500;
    sleep = 1;



constructor(firstName, lastName, gender, age, calories) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.calories = calories;
    this.gender = gender;
    this.age = age;
    this.sleep = this.sleep;


        setTimeout(() => {
            if (this.calories < 500) {
                proc.innerHTML = "I'm hungry"
                console.log("I'm hungry")
            }
        }, 5000)

        setInterval(() => {
            this.calories -= 200
        }, 60000);
    }

    sleepFor() {
        document.getElementById('proc').innerHTML = "I'm sleeping";
        document.getElementsByTagName("img")[0].setAttribute("src","./assets/images/sleep.jpg");
        setTimeout(() => {document.getElementById('proc').innerHTML = 'I\'m awake now';
        if (awd === 1) document.getElementsByTagName("img")[0].setAttribute("src","./assets/images/stay.jpg");
        else document.getElementsByTagName("img")[0].setAttribute("src","./assets/images/super.jpg");
                            }, this.sleep * 1000);
    }

    feed(){
        if (this.calories > 500) {setTimeout("proc.innerHTML = \"I'm not hungry\"" ,1000);}
        else{
        proc.innerHTML = "Nom nom nom";
        document.getElementsByTagName("img")[0].setAttribute("src","./assets/images/eat.jpg");
        if (awd === 1) setTimeout("document.getElementsByTagName(\"img\")[0].setAttribute(\"src\",\"./assets/images/stay.jpg\"), proc.innerHTML = \" \";" ,1000);
        else setTimeout("document.getElementsByTagName(\"img\")[0].setAttribute(\"src\",\"./assets/images/super.jpg\"), proc.innerHTML = \" \";" ,1000);
        this.calories += 200;
        }
        
    }

    show(){
        this.show = setInterval(() => {
            document.getElementById("firstName").innerHTML=this.firstName;
            document.getElementById("lastName").innerHTML=this.lastName;
            document.getElementById("gender").innerHTML=this.gender;
            document.getElementById("age").innerHTML=this.age;
            document.getElementById("calories").innerHTML=this.calories;
            document.getElementById("sleep").innerHTML=this.sleep;
            if (this.calories < 500) {
                proc.innerHTML = "I'm hungry"
                console.log("I'm hungry")
            }
        }, 1000);
        
    }
};

   function stay(){
        if(human.calories >= 500){
        awd = 2;
        document.getElementsByTagName("img")[0].setAttribute("src","./assets/images/super.jpg");
        document.getElementById('proc').innerHTML = "Im superhero!";
        document.getElementById('sec').style.display = "grid";    
        document.getElementById('sec1').style.display = "grid";    
        document.getElementById('text').style.display = "none";  
        }   
    }

   function fly(){
        document.getElementById('proc').innerHTML = "I'm flying!";
        document.getElementsByTagName("img")[0].setAttribute("src","./assets/images/fly.jpg");
        setTimeout("document.getElementsByTagName(\"img\")[0].setAttribute(\"src\",\"./assets/images/super.jpg\"), proc.innerHTML = \" \";" ,10000);
        
    }

   function fight(){
        document.getElementsByTagName("img")[0].setAttribute("src","./assets/images/fight.jpg");
        document.getElementById('proc').innerHTML = 'Khhhh-chh... Bang-g-g-g... Evil is defeated!';
    }


let human = new Human(prompt("First Name", "Nicolai"), prompt("Last Name", "Hartmann"), prompt("Gender", "metaphysical beast"), prompt("Age", 64), 1*prompt("Calories", 500));
human.show();
