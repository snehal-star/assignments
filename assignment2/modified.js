/**
 *First Name validation
 * 
 */
function checkFirstName(){
    
    var firstNamePattern = /^[A-Za-z]+$/;
    let firstName = document.forms["form1"]["firstname"].value;

    if(firstName == ""){
        // window.alert("Enter your First Name");
        document.getElementById("fname").innerHTML="Enetr fname";
        return false;
    }
     if(!NaN(firstName)){
        document.getElementById("fname").innerHTML="numbers are not allowed in name";
        return false;
    }
    // else if(!firstNamePattern.test(firstName)){

    // }
    // if(!firstNamePattern.test((document.forms["form1"]["firstname"].value)))
    // {
    //     console.log("aa");
    //     alert("numbers are not allowed in First name");
    //     return false;}
    // else{
    //     console.log("in else");
    //     return true;
    // }
    return true;
}

// function testValidation(){
//     if()
// }
// function testValidation()
// {
//     /**
//      * @first name validation
//      */
//     var fname=document.forms["form1"]["firstname"];
//     var lname=document.forms["form1"]["lastname"];
//     var pnumber=document.forms["form1"]["phone"];
//     var officeNo=document.forms["form1"]["office"];
//     var emailId=document.forms["form1"]["email"];
//     var regexp=/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
//     var passRegexp=/^[a-zA-Z]{8,12}$/;
//     var pass=document.forms["form1"]["password"];
//     var cpass=document.forms["form1"]["cpassword"];
//     var bmonth=document.forms["form1"]["month"];
//     var bdate=document.forms["form1"]["day"];
//     var byear=document.forms["form1"]["year"];
//     var yourage=document.forms["form1"]["age"];
    
//     var radio1=document.getElementById('residence1').checked;
//     var radio2=document.getElementById('residence2').checked;
//     var checkbox1=document.getElementById('checkbox_sample18').checked;
//     var checkbox2=document.getElementById('checkbox_sample19').checked;
//     var checkbox3=document.getElementById('checkbox_sample20').checked;
//     var text=document.forms["form1"]["write"].value;
    


   
    
    
//     // if(fname.value=="")
//     // {
        
//     //     document.getElementsByName('firstname').innerHTML="enter your name";
//     //     return false;

//     // }
//       if(lname.value=="") { // lastname validation
//         console.log("ee");
//         alert("please enter your lastname");
//         return false;
//     }
//     /**
//      * @phone_no validation
//      */
//     else if(pnumber.value==""||isNaN(pnumber.value)||pnumber.value.length!=10)
//     {
//         alert("enter valid phone number");
//         return false;
//     }
//     else if(officeNo.value==""){ //office number validation
//         alert("please enter office number");
//         return false;
//     }
    
//     else if(emailId.value==""){//email id validation for null value
//         alert("enter email -id");
//         return false;
//     }
//     else if(!regexp.test(emailId.value)){//email id validation
//         //document.getElementById('alertmessage').innerHTML="*";
//         alert("enter valid email-id");
//         return false;
//     }
//     else if(!passRegexp.test(pass.value)){//email id validation
//         //document.getElementById('alertmessage').innerHTML="*";
//         alert("enter valid password, number and spl char are not allowed");
//         return false;
//     }
//     // else if(pass.value.length < 8||pass.value.length > 12 ){//password validation ,check length
//     //     alert("password length shold between 8 to 12");
//     //     return false;
//     // }
//     // else if(pass.value.search(/[0-9]/)==-1){//password validation, check numeric value
//     //     alert("password contain at least 1 number");
//     //     return false;
//     // }
//     // else if(pass.value.search(/[A-Z]/)==-1)//password validation, check upper case
//     // {
//     //     alert("password should contain at least 1 upper case");
//     //     return false;
//     // }
//     // else if(pass.value.search(/[a-z]/)==-1){//password validation,check lower case
//     //     alert("password should contain at least one lowwer case");
//     //     return false;

//     // }
//     // else if(pass.value.search(/['!\@\#\$\%\^\&\(\)\_\+\,\:\;]/)==-1){//password validation,check spl char
//     //     alert("pass shoud contain at least one spl charecter");
//     //     return false;
//     // }
//     else if(pass.value!=cpass.value){//password validation, confirm password
//         alert("password does not match");
//         return false;
//     }
//     else if(bmonth.value=="months"){//birth month validation
//         alert("please select month");
//         return false;
//     }
//     else if(bdate.value=="date"){//birth date date validation
//         alert("please select date");
//         return false;

//     }
//     else if(byear.value=="years"){//birth year validation
//         alert("please select year");
//         return false;
//     }
//     else if(yourage.value==""){//age validation
//         alert("please enter age");
//         return false;

//     }

//     /*else if(yourage.value.length<18){
//         alert("you are not valid for form submission");
//         return false;

//     }*/
//     else if(radio1==""&&radio2==""){//gender
//        alert("please select one");
//         return false;
//     }
//     else if(checkbox1=="" && checkbox2==""  &&checkbox3==""){// checkbox validation biking
//         alert("please select interest");
//         return false;
//     }
    
    
//     else if(text.length==0){//text area validation
//         alert("please write about yourself");
//         return false;
//     }
//     else{
//         return true;
//     }
// }
// function calculateAge()
// {
//     var bmonth=document.forms["form1"]["month"].value;
//     var bdate=document.forms["form1"]["day"].value;
//     var byear=document.forms["form1"]["year"].value;

//     var birthDate=new Date(byear,bmonth,bdate);
//     var toDay=new Date();
//  console.log(byear+" "+bmonth + "    "+birthDate +"     " +toDay);
    
//         var ageInYear=toDay.getFullYear()-birthDate.getFullYear();
//         document.forms["form1"]["age"].style.visibility="visible";
//         document.forms["form1"]["age"].value=ageInYear;
//         //document.getElementById("age")
//         //$("#calAge").val(ageInYear);
//         //$("#calAge").show();
// }

