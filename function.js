function validate(){
    
    let email = document.querySelector("#email");
    
    let sendBtn = document.querySelector("#send");

    sendBtn.addEventListener('click', (e) => {
        e.preventDefault();
        if(email.value ==""){
            emptyerror();
        } else{
            sendmail(email.value);
            success();
        }
    });
}
validate();

function sendmail(email){
    emailjs.send("service_p9palkd","template_9vhw2yb",{
        
        from_name: email,
        
        });
}

function emptyerror(){
    swal({
        title: "OOPS!",
        text: "Fields cannot be empty!",
        icon: "error",
      });
}
function success(){
    swal({
        title: "Email sent successfully",
        text: "You will recieve reply shortly.",
        icon: "success",
      });
}