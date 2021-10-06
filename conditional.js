let toppings ="sprinkles";
let vessel = "cone";
let flavour ="strawberry"; 
let message;

if (flavour ==="strawberry" && vessel ==="cone" && toppings ==="sprinkles") {
    message = "I'd like two scope of" + " " + flavour + " " + "ice cream in a " + " " + vessel + " " + "with" + " " + toppings;
} else if (flavour ==="strawberry" || toppings ==="peanuts") {
    message = "not bad!"
} else {
    message = "never mind. i don't want";
}
