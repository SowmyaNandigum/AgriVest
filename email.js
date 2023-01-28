
function validate(){
    let name = document.querySelector(".name");
    let email = document.querySelector(".email");
    let msg = document.querySelector(".message");
    let sendBtn = document.querySelector(".send-btn");

    sendBtn.addEventListener('click', (e) => {
        e.preventDefault();
        if(name.value == "" || email.value =="" || msg.value == ""){
            emptyerror();
        } else{
            sendmail(name.value, email.value, msg.value);
            success();
        }
    });
}
validate();

function sendmail(name,email,msg){
    emailjs.send("service_p9palkd","template_6qc2mms",{
        to_name: name,
        from_name: email,
        message: msg,
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

