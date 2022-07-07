

let email = document.getElementsByClassName('email');

let error = document.createElement("p");
error.textContent = "Please enter a valid email address or phone number.";


let error2 = document.createElement("p");
error.textContent = "Your password must contain between 4 and 60 characters.";

$(".btn").click(function(){
      
    
    if(email.innerHTML == ""){
        $(".email").toggleClass('.input-error');
        email.appendChild(error);
        email.appendChild(error2);

    }

});