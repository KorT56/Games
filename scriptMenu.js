console.log('dfdf');


const nav = document.querySelector('#nav');
const navBtn = document.querySelector('#nav-btn');
const navBtnImg = document.querySelector('#nav-btn-img');

console.log(nav);
console.log(navBtn);
console.log(navBtnImg);

navBtn.onclick = () => {
    if(nav.classList.toggle('open')) {
       navBtnImg.src = "./Adaptive1920/Menu2.png";
    }else {
        navBtnImg.src = "./Adaptive1920/Menu.png";
    }
}
