function result(){
    var input =parseInt(document.getElementById('inside').value)
    var result = document.getElementById("result");
    if(input>=5000 && input<10000){
        var roi=0.08
        result.innerHTML=(roi*input)+input;
        
    }
    else if(input>=10000 && input<50000){
        var roi=0.12
        result.innerHTML=(roi*input)+input;
    }
    else{
        var roi=0.18
        result.innerHTML=(roi*input)+input;
    }

}