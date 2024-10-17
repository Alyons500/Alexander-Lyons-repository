





function validateForm() {
    //get the name user entered in the text box an put it in 
    var name = document.getElementById("fname").value;
    var email = document.getElementById("lname").value;
    var age = document.getElementById("zip").value;

    console.log("name=" + name);
    console.log("email=" + email);
    console.log("age=" + age);

    if  (name.trim() == "") {
        alert("Please enter a name.");
    }
     // make sure email was entered
    if  (name.trim() == "") {
        alert("Please enter a email address.");
    }
      //make age is entered 
    if  (age.trim() == "") {
        alert("Please enter a age.");
    }

    // make sure is a number 
    if (isNaN( age)) {
        alert(" Please enter a number for the age.")
    }


    //prevent the form submitting

    return false;
}
