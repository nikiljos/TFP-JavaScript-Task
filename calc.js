function clr() 
    { 
    document.getElementById("val").value = "" 
    } 


//function that display value 
function dis(val) 
    { 
    document.getElementById("val").value+=val 
    }


function doCalc(n)
{
    var num1,num2,result;
    num1=document.getElementById('val').value ;
    n1=Number(num1);
    result=eval(num1);
    RNum=Number(result);
    switch(n){
        case 5: result= Math.log10(n1);
        break;
        case 6: result=Math.sqrt(n1);
        break;
        case 7: result= RNum*100;
        break;
        case 8: result= n1*n1;
        break;
    }

    document.getElementById('exp').innerHTML=num1;
    document.getElementById('val').value =result;
}

//Listening for enter key///////////////////////////////
// Get the input field
var tfield = document.getElementById("val");

// Execute a function when the user releases a key on the keyboard
tfield.addEventListener("keyup", function(event) {
// Number 13 is the "Enter" key on the keyboard
if (event.keyCode === 13) {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("evaluate").click();
}
});
/////////////////////////////////////////////////////////
