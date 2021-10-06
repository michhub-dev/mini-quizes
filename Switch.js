/*If winner is equal to 3, then what will be output to the console?*/
let winner =3; 
 let prize = ""; 
 switch(winner) {
     case 1:
          prize+= "a trip for two to the bahamas and";
     case 2:
          prize+= "a four piece furniture set."; 
     break; 
     case 3:
          prize+= "a smartwatch and ";
     default:
          prize+= "tickets to the circus."; 
 }
 console.log("you've won" + prize);
