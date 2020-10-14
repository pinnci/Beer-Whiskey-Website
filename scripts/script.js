//DRINK MENU
var sety = document.querySelectorAll('.menu-set');
var navItems = document.querySelectorAll('.nav-item');

sety.forEach(item => {
    item.classList.add('displayNone');
});

function showCurrent(id){
    navItems.forEach(item => {  
        item.classList.remove('selected');
        if(item.id == id){     
            item.classList.add('selected');
        }
    });

    sety.forEach(item => {     
        if(item.id == id){      
            item.classList.remove('displayNone');
            item.style.opacity = '1';
        }else{                 
            item.classList.add('displayNone');
            item.style.opacity = '0';
        }
    });
}

navItems.forEach(item => {      
    item.addEventListener('click',event => {
        event.preventDefault();
        showCurrent(item.id);   
    });
});

showCurrent('scotch');         

//BACK TO TOP
var backToTop = document.querySelector('.backtotop');
backToTop.style.opacity = '0';   

window.addEventListener('scroll',scrollToTop);  

function scrollToTop(){
    var y = window.scrollY; 
    if (y >= 300) {        
        backToTop.style.opacity = '1';
        backToTop.style.transform = 'translateX(0px)';  
        backToTop.style.transition = '0.3s ease-in-out'; 
    }else{
        backToTop.style.opacity = '0';
        backToTop.style.transform = 'translateX(50px)'; 
    }
}

backToTop.addEventListener('click',function(){  
    window.scrollTo({top:0});
});

//Happy hours slide
var happyHoursSlide = document.querySelector('#happyhoursslide');
happyHoursSlide.style.opacity = '0';       
happyHoursSlide.style.transform = 'translateY(70px)';  

window.addEventListener("scroll", function() {   
    var scroll = this.scrollY;                    
    if(scroll >= 1750){                       
        happyHoursSlide.style.opacity = '1';
        happyHoursSlide.style.transform = 'translateY(0px)';
        happyHoursSlide.style.transition = '0.3s ease-in-out';
    }
});

//Lightbox
let gallery = document.querySelector('#gallery');
let images = gallery.querySelectorAll('img');

let lightbox = document.querySelector('#lightbox');
let closeLightbox = document.querySelector('#close_lightbox');

//close lightbox
closeLightbox.addEventListener('click',function(){
    lightbox.style.display = 'none';
});

document.addEventListener('keyup',function(e){
    if(e.which == '27'){
        lightbox.style.display = 'none';
    }
});

//open lightbox
images.forEach(image => {
    image.addEventListener('click',function(){
        lightbox.style.display = 'block';
        showSlides(image.id);
    });
});

function showSlides(id){
    id = Number(id);
    let slides = document.querySelectorAll('.slides');
    

    for(let i=0;i<slides.length;i++){
        slides[i].style.display = 'none';
    }

    slides[id-1].style.display = 'block';

    let next = document.querySelector('.next');
    next.addEventListener('click',function(){
        slides.forEach(slide =>{
            slide.style.display = 'none';
        });
        id += 1;

        if(id >slides.length){
            id = 1;
        }
        slides[id-1].style.display = 'block';
    });

    let prev = document.querySelector('.prev');
    prev.addEventListener('click',function(){
       slides.forEach(slide =>{
            slide.style.display = 'none';
       }) ;
       id -= 1;

        if(id < 1){
            id = slides.length;
        }
        slides[id-1].style.display = 'block';
    });

    document.addEventListener('keyup',function(e){
        if(e.which == '37'){
            slides.forEach(slide =>{
                slide.style.display = 'none';
           }) ;
           id -= 1;
    
            if(id < 1){
                id = slides.length;
            }
            slides[id-1].style.display = 'block';
        }

        if(e.which == '39'){
            slides.forEach(slide =>{
                slide.style.display = 'none';
            });
            id += 1;
    
            if(id >slides.length){
                id = 1;
            }
            slides[id-1].style.display = 'block';
        }
    });
}

//Hamburger menu
function hamburgerMenu(){
   let hamburger = document.querySelector('#hamburger');
    let menu = document.querySelector('#mobile_menu');
    let x = document.querySelector('#x');

    let moved = false;

    hamburger.addEventListener('click',function(){
        if(moved == false){
            menu.classList.remove('hide');
            menu.classList.add('show');
            hamburger.style.display = 'none';
            x.style.display = 'block';
            moved = true; 
        }
    });

    x.addEventListener('click',function(){
        if(moved == true){
            menu.classList.remove('show');
            menu.classList.add('hide');
            x.style.display = 'none';
            hamburger.style.display = 'block';
            moved = false;
        }
    });

    let menuAnchor = menu.querySelectorAll('a');
    menuAnchor.forEach(link => {
        link.addEventListener('click',function(){
            menu.classList.remove('show');
            menu.classList.add('hide');
            x.style.display = 'none';
            hamburger.style.display = 'block';
            moved = false;
        });
    }); 
}
hamburgerMenu();





