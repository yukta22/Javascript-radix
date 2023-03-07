function validate() {
    let id = document.getElementById('eId').value;
    let name = document.getElementById('name').value;
    let desi = document.getElementById('desi').value;
    let age = document.getElementById('age').value;
    let email = document.getElementById('email').value;
    let salary = document.getElementById("salary").value;
    let cn = document.getElementById("cn").value;
    let location = document.getElementById("location").value;
    let def = document.getElementById("def").value;
    let idReg = /^[0-9]{5,}$/.test(id);

    if(id.length == 0){
        document.getElementById('one').innerHTML = "Id should not be empty";
        document.getElementById('one').style.color = "red";
    }
    else if(!idReg){
        document.getElementById('one').innerHTML = "Id cannot be less than 5";
        document.getElementById('one').style.color = "red";
    }
    
    
    if(name.length == 0){
        document.getElementById('five').innerHTML = "Name should not be empty";
        document.getElementById('five').style.color = "red";
    }

    else if(!isNaN(salary)){
        document.getElementById('five').innerHTML = "Name should be number";
        document.getElementById('five').style.color = "red";
    }

    if(desi.length == 0){
        document.getElementById('six').innerHTML = "Designation should not be empty";
        document.getElementById('six').style.color = "red";
    }

    if(location == def){
        document.getElementById('loc').innerHTML = "Choose a valid location";
        document.getElementById('loc').style.color = "red";
    }

    
    let ageReg = /^[0-9][0-9]$/.test(age);

    if(age.length == 0){
        document.getElementById('two').innerHTML = "Age should not be empty";
        document.getElementById('two').style.color = "red";
    }
    else if(!ageReg){
        document.getElementById('two').innerHTML = "Age should be in between 11 to 99";
        document.getElementById('two').style.color = "red";
    }
    

    if(isNaN(salary)){
        document.getElementById('four').innerHTML = "Salary should be a number";
        document.getElementById('four').style.color = "red";
    }
    if(salary.length == 0){
        document.getElementById('four').innerHTML = "Salary should not be empty";
        document.getElementById('four').style.color = "red";
    }

    let emailReg = /^([a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$)/.test(email);

    if(email.length == 0){
        document.getElementById('three').innerHTML = "Email should not be empty";
        document.getElementById('three').style.color = "red";
    }
    else if(!emailReg){
        document.getElementById('three').innerHTML = "Email should be in proper format";
        document.getElementById('three').style.color = "red";
    }

    if(cn.length == 0){
        document.getElementById('info').innerHTML = "Contact Number should not be empty";
        document.getElementById('info').style.color = "red";
    }
    else if(isNaN(cn)){
        document.getElementById('info').innerHTML = "Contact Number should be a number";
        document.getElementById('info').style.color = "red";
    }
    else if (cn.length < 10) {
        document.getElementById('info').innerHTML = "Contact Number should be at least 10 numbers";
        document.getElementById('info').style.color = "red";
    }
    else if (cn.length > 10) {
        document.getElementById('info').innerHTML = "Contact Number should be at least 10 numbers";
        document.getElementById('info').style.color = "red";
    }

}
