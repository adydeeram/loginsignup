document.querySelector('#check').addEventListener('click',function(){

    const set = document.getElementById('side-menu')
    const check = set.style.display;

    if(check == 'none'){
        set.style.display = 'block'
    }else if(check == 'block'){
        set.style.display = 'none'
    }

    setTimeout(() => {
       
         set.style.display = 'none'
        
    },5000);

})