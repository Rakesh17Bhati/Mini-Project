let form=document.querySelector('form');
form.addEventListener('submit', function(e){
    e.preventDefault();

    let height=parseInt(document.querySelector("#height").value);
    let weight=parseInt(document.querySelector("#weight").value);
    let response=document.querySelector("#error");
    let result=document.querySelector("#result");
    let val=document.querySelector("#value");
    let BMI=(weight/((height*height)/10000)).toFixed(2);
    if(height==='' || height<0 || isNaN(height)){
        response.innerHTML="Enter valid height";
    }
    else if(weight==='' || weight<0 || isNaN(weight)){
        response.innerHTML="Enter valid weight";
    }
    else{
       result.innerHTML=`${BMI}`
    }

    if(BMI<18.6){
        val.innerHTML="Under Weight"
        val.style.color="orange";
        result.style.color="orange";
        
    }
    else if(BMI>=18.6 && BMI<=24.9){
        val.innerHTML="Normal"
        val.style.color="green";
        result.style.color="green";
    }
    else if(BMI>24.9){
        val.innerHTML="Over Weight"
        val.style.color="red";
        result.style.color="red";
    }
})