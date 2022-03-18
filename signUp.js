// SIgn Up section 

let signUpData;



class Data{
    constructor(firstName,lastName,email,password,confrimPassword){
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.confrimPassword = confrimPassword;
    }

}

class UI{
    clearFeilds(){
        document.querySelector('#firstname').value = '';
        document.querySelector('#lastname').value = '';
        document.querySelector('#email').value = '';
        document.querySelector('#password').value = '';
        document.querySelector('#password-confirm').value = '';


        

        
        
    }

}


class Store{
    static getData(){
        if(localStorage.getItem('signUpData') === null){
            signUpData = []
        }else{
            signUpData = JSON.parse(localStorage.getItem('signUpData'))
        }
        return signUpData
    }
    static addData(data){

        const signUpData = Store.getData();
        
        signUpData.push(data)
        localStorage.setItem('signUpData',JSON.stringify(signUpData))

    }
    
    
}


// event lisnter 

const sumbmitBtn = document.querySelector('#sign-up');
sumbmitBtn.addEventListener('click',signUpBtn);

function signUpBtn(e){ 
    
    // getiing inputs 

    const  fName = document.querySelector('#firstname').value,
            lName = document.querySelector('#lastname').value,
            emailID = document.querySelector('#email').value,
            pswd = document.querySelector('#password').value,
            conPswd = document.querySelector('#password-confirm').value
            

    const data = new Data(fName,lName,emailID,pswd,conPswd);

    // adding to LS 
    const cmd = Store.getData();

    const ui = new UI();


    // CHeaking input feilds

    if(fName === '' || lName === '' || emailID === ''|| pswd === '' || conPswd === ''){
        document.getElementById('alert-text').textContent = 'Please fill up all input feilds';
        document.getElementById('email-error').style.display = 'block';
    }else if (pswd != conPswd) {
        document.getElementById('alert-text').textContent = 'Password Did Not Match';
        document.getElementById('email-error').style.display = 'block';
        // alert('pswd did not match')
    }else if(cmd.some((v)=>{
        return v.email === emailID
    })){
        document.getElementById('alert-text').textContent = 'Email already exist';
        document.getElementById('email-error').style.display = 'block';
    }else{

        Store.addData(data)
        
        document.getElementById('sucess').style.display = 'block';

        setTimeout(() => {
            
        window.location.href = "./index.html";
        }, 3000);


        ui.clearFeilds()

    }


    // set time out for alret 

        setTimeout(() => {
            
            document.getElementById('email-error').style.display = 'none';
            document.getElementById('sucess').style.display = 'none';


        }, 3000);





    // if(cmd.some((v)=>{
    //     return v.email === emailID
    // })){
    //     alert('dp')
    // }

       e.preventDefault()

    
}   


// Animation on load 


window.onload = function(){
    document.getElementById('signUpmain').style.opacity = '1'
}