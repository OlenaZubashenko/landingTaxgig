let loginClose = document.getElementById('login-close');
let formClose = document.getElementById('form-close');
let burger = document.getElementById('burger');
let login = document.getElementById('login');
let loginTopNav = document.getElementById('login-nav');
let form = document.getElementById('form');
let signIn = document.getElementById('signIn');
let loginForm = document.getElementById('login-form');
let getInTouch = document.getElementById('getInTouch');
let testMe = document.getElementById('testMe');

burger.onclick = function() {
form.style.display = 'flex',
form.style.transition = '2s';

login.onclick =  function() {
    form.style.display = 'none', 
    loginForm.style.display = 'block';
    }
    signIn.onclick = function(){
        loginForm.style.display = 'none'; 
    };
}

loginTopNav.onclick = function(){
    loginForm.style.display = 'flex';
}

loginClose.onclick = function(){
    loginForm.style.display = 'none'; 
};

formClose.onclick = function() {
    form.style.display = 'none';  
};

getInTouch.onclick = function() {
    loginForm.style.display = 'block';  
    
}
signIn.onclick = function(){
    loginForm.style.display = 'none'; 
};

testMe.onclick = function() {
    loginForm.style.display = 'block';  
    
}

