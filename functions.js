/*eslint-env browser*/
function fizzBuzz() {
    "use strict";
    var i, output;
    for (i = 1; i <= 100; i += 1) {
        
        output = "";
        
        if (i % 3 === 0) {
            
            output += "Fizz";
            
        }
            
        if (i % 5 === 0) {
            
            output += "Buzz";
            
        }
        
        if (output === "") {
            
            output = i;
            
        }
        
        document.getElementById("mainDiv").innerHTML += "<p>" + output + "</p>";
        
    }
}

document.getElementById("myButton").onclick = function () {
    "use strict";
    fizzBuzz();
};