const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')

menu.addEventListener('click', function(){
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
})

var sliders = document.querySelectorAll('.picture_list');
var dots = document.querySelectorAll('.dot')
currentimg = 0;
 function showfirstimg(n){

    sliders.forEach(function(slid){
      slid.style.display ='none';
    })
    dots.forEach(function(dot){
      dot.classList.remove('active')
    })
    //show first img
    sliders[n].style.display = 'block'
    // show active dot
    dots[n].classList.add('active');
  
}
 showfirstimg(currentimg)

//  next button
function next(){
    if(currentimg < sliders.length -1){
        currentimg ++
    }
    else{
        currentimg = 0 ;
    }
    showfirstimg(currentimg);
}
document.querySelector('.next').addEventListener('click', next)

// prev button
function prev(){
    if(currentimg <=0){
        currentimg = sliders.length - 1;

    }else{
        currentimg -- ;
    }
    showfirstimg(currentimg);
}
document.querySelector('.prev').addEventListener('click',prev);
//automatic slide
setInterval(function(){
   next()
},3000)
//indicator button
dots.forEach(function(ind,n){
    ind.addEventListener('click',function(){
        currentimg = n;
        showfirstimg(n)
    })
})