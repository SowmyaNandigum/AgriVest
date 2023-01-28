function validate(){
    let name = document.querySelector(".name");
    let Gender = document.querySelector(".Gender");
    let age = document.querySelector(".age");
    let type = document.querySelector(".type");
    let place = document.querySelector(".place");
    let landsize = document.querySelector(".landsize");
    let des = document.querySelector(".des");
    
    let sendBtn = document.querySelector(".send-btn");

   sendBtn.addEventListener('click', (e) => {
        e.preventDefault();
        if(name.value == "" || Gender.value =="" || age.value == "" || type.value == "" || place.value == "" || landsize.value == "" || des.value == ""  )
        {
            emptyerror();
        } else{
            sendmail(name.value, Gender.value, age.value,type.value,place.value,landsize.value,des.value);
                  
            success();
        }
    });
}

validate();
function sendmail(name,Gender,age,type,place,landsize,des){
    emailjs.send("service_p9palkd","template_6qc2mms",{
        to_name: name,
        from_name: Gender,
        Number: age,
        building:type,
        Area:place,
        Landmark:landsize,
        City:des,
        


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
        title: "Address Saved Successfull",
        text: "Proceed to checkout",
        icon: "success",
      });
}

