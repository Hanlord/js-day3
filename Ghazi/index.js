//intermediat ex1

 var y ;
  function stud(x ,y){
    





if (y< 60) {

    console.log('their average grade will be f');
    
    } 
    else if(y< 70) {
        console.log('their average grade will be d');


    }
    else if(y< 80) {
        console.log('their average grade will be c');


    }
    else if(y< 90) {
        console.log('their average grade will be b');


    }
    else if (y< 100) {
        console.log('their average grade will be a');


    }

}stud();
console.log(stud('sd',99));

//ex2

let tex = "";


for (let i = 0; i < 101 ; i++) {
    
     if ( i % 15 == 0 ){tex += 'FizzBuzz' + "<br>";

}
  
 else  if ( i % 5 == 0 ){

    tex += "Buzz " + "<br>";    
        }
     

        else if ( i % 3 == 0 ) {tex += "fizz" + "<br>";

    }
       
       
        else{tex +=  + i + "<br>";

    }
        
}

document.getElementById("x").innerHTML = tex;
//ex3

let te = "*";
let i = 0;
while (i < 7) {
    
    document.getElementById("j").innerHTML += te + "<br>";

    te = te + "*";    

    
  i++;
}












