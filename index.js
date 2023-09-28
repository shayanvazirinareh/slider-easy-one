let $=document;
let sliderimg=$.querySelector('.slider-img');
let images=['a.jpg','d.jpg','c.jpg','b.jpg'];
var i=0;
function prev(){
if(i<=0)i=images.length;
i--;
return setimg()
}
function next(){
 if(i>=images.length-1)i=-1;
 i++;
 setimg()   
}
function setimg(){
    return sliderimg.setAttribute('src',images[i])
}