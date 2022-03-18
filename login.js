// getting data from LS 
class Store{
        
        static getData(){  
            
           const loginData = JSON.parse(localStorage.getItem('signUpData'));
            
           return loginData


        } 
}

class UI{

    clearfeild(){
        document.querySelector('#email').value = '';
        document.querySelector('#password').value = '';
    }

}

const ady = JSON.parse(localStorage.getItem('signUpData'))

console.log(ady)







// event listner
document.getElementById('loginBtn').addEventListener('click',loginSub)

function loginSub(){
    const email = document.querySelector('#email').value;
    const password  = document.querySelector('#password').value;
    const ui = new UI()


    const storeData = Store.getData();
    if(storeData.some((v)=>{
        return v.email === email
    })&&storeData.some((v)=>{
        return v.password === password
    })){
        document.getElementById('alert-massage').textContent = 'login Succed.!';
        document.getElementById('alert-div').style.background = 'rgb(97, 190, 97)   '
        document.getElementById('error-alert').style.opacity = '1';
        setTimeout(() => {
            window.location.href = "./home.html";
            
        }, 4000);

        ui.clearfeild()

    }else if(storeData.some((v)=>{
        return v.email != email
    })||storeData.some((v)=>{
        return v.password != password
    })){
        document.getElementById('alert-massage').textContent = 'Check your email or password';
        document.getElementById('alert-div').style.background = 'rgb(226, 70, 70)'
        document.getElementById('error-alert').style.opacity = '1'
        
    }

    setTimeout(() => {
        document.getElementById('error-alert').style.opacity = '0'
        
    }, 3000);




}