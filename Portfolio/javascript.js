window.addEventListener('scroll', function () {
    if (window.scrollY > 150)
    {
        document.querySelector('#main-nav').style.opacity = 0.8;
    } else
    {
        document.querySelector('#main-nav').style.opacity = 1;
    }
});

let home = document.querySelector('#home');
let about = document.querySelector('#about');
let skills = document.querySelector('#skills')
let work = document.querySelector('#work');
let contact = document.querySelector('#contact');
let btn = document.querySelector('.btn-light');

window.addEventListener('scroll', function () {
    if (window.scrollY <= 450)
    {
        ho();
    } else if (window.scrollY > 450 && window.scrollY <= 1400)
    {
        ab();
    } else if (window.scrollY > 1400 && window.scrollY <= 2100)
    {
        sk();
    } else if (window.scrollY > 2100 && window.scrollY <= 3200)
    {
        wo();
    } else
    {
        co();
    }

});

function ho() {
    home.classList.add('current');
    about.classList.remove('current');
    skills.classList.remove('current');
    work.classList.remove('current');
    contact.classList.remove('current');
}

function ab() {
    home.classList.remove('current');
    about.classList.add('current');
    skills.classList.remove('current');
    work.classList.remove('current');
    contact.classList.remove('current');
}

function sk() {
    home.classList.remove('current');
    about.classList.remove('current');
    skills.classList.add('current');
    work.classList.remove('current');
    contact.classList.remove('current');
}
function wo() {
    home.classList.remove('current');
    about.classList.remove('current');
    skills.classList.remove('current');
    work.classList.add('current');
    contact.classList.remove('current');
}
function co() {
    home.classList.remove('current');
    about.classList.remove('current');
    skills.classList.remove('current');
    work.classList.remove('current');
    contact.classList.add('current');
}


function progress() {
    document.getElementById('inner-progress1').style.width = '90%';
    document.getElementById('inner-progress2').style.width = '85%';
    document.getElementById('inner-progress3').style.width = '65%';
    document.getElementById('inner-progress4').style.width = '80%';
    document.getElementById('inner-progress5').style.width = '70%';
    document.getElementById('inner-progress6').style.width = '95%';

}






