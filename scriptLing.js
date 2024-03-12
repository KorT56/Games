const btnLing = document.querySelector('#ling');
const content = document.querySelector('#er');
    console.log(btnLing);
    console.log(content);
   
    /*btnLing.addEventListener("click", function(){
       btnLing.textContent = 'RU';
    }*/
    btnLing.addEventListener("click", function(){
        console.log('click');
        content.classList.toggle('hidden');
        if(content.classList.contains('hidden')) {
            btnLing.textContent = 'EN' 
        }else {
            btnLing.textContent = 'Ru' 
        }
    });