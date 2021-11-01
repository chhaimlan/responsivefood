let searchForm = document.querySelector('.searchform-container');

document.querySelector('#sear-btn').onclick = () => {
    searchForm.classList.toggle('display');
    cart.classList.remove('show');
    login.classList.remove('hide');
    navbar.classList.remove('active');
   console.log(searchForm);
}

let cart = document.querySelector('.shopping-cart-container');

document.querySelector('#cart-btn').onclick = () => {
    cart.classList.toggle('show');
    searchForm.classList.remove('display');
    login.classList.remove('hide');
    navbar.classList.remove('active');
   console.log(cart);
}

let login = document.querySelector('.login-form-container');

document.querySelector('#login-btn').onclick = () => {
    login.classList.toggle('hide');
    searchForm.classList.remove('display');
    cart.classList.remove('show');
    navbar.classList.remove('active');
   console.log(login);
}
 
let navbar = document.querySelector('.header .navbar');
document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('display');
    cart.classList.remove('show');
    login.classList.remove('hide');
    console.log(navbar);
}

window.onscroll = () =>{
    navbar.classList.remove('active');
    console.log(navbar);
}

document.querySelector('.home').onmousemove = (e) => {
    let x = (window.innerWidth - e.pageX *2) / 90;
    let y = (window.innerHeight - e.pageY * 2) / 90;
    document.querySelector('.home .home-gmg').style.transform = `translateX(${y}px)
    translateY(${x}px)`;
    console.log(x,y);
   
}

document.querySelector('.home').onmouseleave = (e) => { 
    document.querySelector('.home .home-gmg').style.transform = `translateX(0px)
    translateY(0px)`;
   
}

