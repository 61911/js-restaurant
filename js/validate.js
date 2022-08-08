function onlyAlphabet(fname) {
    console.log(fname);
    var regEx = /^[A-Za-z]+$/;

    if (fname.match(regEx)) {

        return true;
    } else {

        return false;
    }
}

function onlyDigit(number) {
    console.log(number);
    var regEx = /[^0-9]/g;

    if (number.match(regEx)) {

        return true;
    } else {

        return false;
    }
}

function onlyEmail(email) {
    console.log(email);
    var regEx = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (email.match(regEx)) {

        return false;
    } else {

        return true;
    }
}


function validateText(id, validate_name) {
    var x = document.getElementById(id).value.trim();
    console.log("VALUE XX", x);
    isValid = onlyAlphabet(x);
    if (!isValid) {
        document.getElementById(validate_name).innerHTML = "Only alphabet is accepted";
    } else {
        document.getElementById(validate_name).innerHTML = "";
    }

}

function validateNumber(id, validate_name) {
    var x = document.getElementById(id).value;
    console.log("VALUE XX", x);
    isValid = onlyDigit(x);
    if (isValid) {
        document.getElementById(validate_name).innerHTML = "Only Number is accepted";
    } else {
        document.getElementById(validate_name).innerHTML = "";
    }

}



function validateEmail(id, validate_name) {
    var x = document.getElementById(id).value;
    console.log("VALUE XX", x);
    isValid = onlyEmail(x);
    if (isValid) {
        document.getElementById(validate_name).innerHTML = "Only email format is accepted";
    } else {
        document.getElementById(validate_name).innerHTML = "";
    }

}

// function validateemail()  
// {  
// var x=document.getElementById(email).value;  
// var atposition=x.indexOf("@");  
// var dotposition=x.lastIndexOf(".");  
// if (atposition<1 || dotposition<atposition+2 || dotposition+2>=x.length){  
//   alert("Please enter a valid e-mail address \n atpostion:"+atposition+"\n dotposition:"+dotposition);  
//   return false;  
//   }  
// }  





// function onlyAlphabet(First_Name) {
//     console.log(First_Name);
//     var regEx = /^[A-Za-z]+$/;

//     if (First_Name.match(regEx)) {

//         return true;
//     } else {

//         return false;
//     }
// }

// function validateFname() {
//     var x = document.getElementById("fname").value;
//     console.log("VALUE XX", x);
//     isValid = onlyAlphabet(x);
//     if (!isValid) {
//         document.getElementById("demo").innerHTML = "Only alphabet is accepted";
//     }

// }