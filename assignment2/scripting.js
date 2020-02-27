
function checkFirstName(){
    var num=/[1-9]/;
    var specialChar= /[!@#\$%\^\&*\)\(+=._-]/;
    let firstName = document.forms["form1"]["firstname"].value;

    if(firstName == ""){
        // window.alert("Enter your First Name");
        document.getElementById("fname").style.visibility="visible";
        document.getElementById("fname").innerHTML="Enter fname";
        return false;
    }
     else if(num.test(firstName)){
         
        document.getElementById("fname").style.visibility="visible";
        document.getElementById("fname").innerHTML="numbers are not allowed in name";
        return false;
    }
    else if(specialChar.test(firstName)){
        document.getElementById("fname").style.visibility="visible";
        document.getElementById("fname").innerHTML="special charecters are not allowed";
        return false;
    }
    
    else{
        document.getElementById("fname").style.visibility="hidden";
        return true;
    }
    
}
function checkLastname(){
    var num=/[1-9]/;
    var specialChar= /^[!@#\$%\^\&*\)\(+=._-]$/g;
    let lastName = document.forms["form1"]["lastname"].value;
    if(lastName == ""){
        document.getElementById("lname").style.visibility="visible";
        document.getElementById("lname").innerHTML="Enetr Last name";
        return false;
    }
    else if(num.test(lastName)){
         
        document.getElementById("lname").style.visibility="visible";
        document.getElementById("lname").innerHTML="numbers are not allowed in name";
        return false;
    }
    else if(specialChar.test(lastName)){
        document.getElementById("lname").style.visibility="visible";
        document.getElementById("lname").innerHTML="special charecters are not allowed";
        return false;
    }
    
    else{
        document.getElementById("lname").style.visibility="hidden";
        return true;
    }


}
 function checkPhoneNo(){
     let phoneNo = document.forms["form1"]["phone"].value;
    
     if(phoneNo==""){
        document.getElementById("phone_error").innerHTML="Enetr Phone Number";
     }
 }