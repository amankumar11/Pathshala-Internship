const allbtn = document.getElementById('allbtn');
const todaybtn = document.getElementById('todaybtn');
const tomorrowbtn = document.getElementById('tomorrowbtn');
const weekendbtn = document.getElementById('weekendbtn');
const cardsall = document.getElementById('cardsall');
const cardstoday = document.getElementById('cardstoday');
const cardstomorrow = document.getElementById('cardstomorrow');
const cardsweekend = document.getElementById('cardsweekend');
const alleventsbtn = document.getElementById('alleventsbtn');
const onlinecoursesbtn = document.getElementById('onlinecoursesbtn');
const workshopbtn = document.getElementById('workshopbtn');


allbtn.addEventListener('click', (e) => {
    e.preventDefault();
    //button color change
    allbtn.style.color = "white";
    allbtn.style.backgroundColor = "red";
    todaybtn.style.color = "";
    todaybtn.style.backgroundColor = "";
    tomorrowbtn.style.color = "";
    tomorrowbtn.style.backgroundColor = "";
    weekendbtn.style.color = "";
    weekendbtn.style.backgroundColor = "";
    onlinecoursesbtn.style.color = "";
    onlinecoursesbtn.style.backgroundColor = "";
    alleventsbtn.style.color = "";
    alleventsbtn.style.backgroundColor = "";
    workshopbtn.style.color = "";
    workshopbtn.style.backgroundColor = "";
    //page change
    cardsall.style.display="";
    cardstoday.style.display = "";
    cardstomorrow.style.display = "none";
    cardsweekend.style.display = "none";   

});
todaybtn.addEventListener('click', (e) => {
    e.preventDefault();
    //button color change
    todaybtn.style.color = "white";
    todaybtn.style.backgroundColor = "red";
    allbtn.style.color = "";
    allbtn.style.backgroundColor = "";
    tomorrowbtn.style.color = "";
    tomorrowbtn.style.backgroundColor = "";
    weekendbtn.style.color = "";
    weekendbtn.style.backgroundColor = "";
    onlinecoursesbtn.style.color = "";
    onlinecoursesbtn.style.backgroundColor = "";
    alleventsbtn.style.color = "";
    alleventsbtn.style.backgroundColor = "";
    workshopbtn.style.color = "";
    workshopbtn.style.backgroundColor = "";
    //page change
    cardstoday.style.display = "inline";
    cardsall.style.display="none";
    cardstomorrow.style.display = "none";
    cardsweekend.style.display = "none"; 

});
tomorrowbtn.addEventListener('click', (e) => {
    e.preventDefault();
    // button color change
    tomorrowbtn.style.color = "white";
    tomorrowbtn.style.backgroundColor = "red";
    allbtn.style.color = "";
    allbtn.style.backgroundColor = "";
    todaybtn.style.color = "";
    todaybtn.style.backgroundColor = "";
    weekendbtn.style.color = "";
    weekendbtn.style.backgroundColor = "";
    onlinecoursesbtn.style.color = "";
    onlinecoursesbtn.style.backgroundColor = "";
    alleventsbtn.style.color = "";
    alleventsbtn.style.backgroundColor = "";
    workshopbtn.style.color = "";
    workshopbtn.style.backgroundColor = "";
    // page change
    cardstomorrow.style.display = "inline";
    cardsall.style.display="none";
    cardstoday.style.display = "none";
    cardsweekend.style.display = "none"; 

});
weekendbtn.addEventListener('click', (e) => {
    e.preventDefault();
    //button color change
    weekendbtn.style.color = "white";
    weekendbtn.style.backgroundColor = "red";
    allbtn.style.color = "";
    allbtn.style.backgroundColor = "";
    todaybtn.style.color = "";
    todaybtn.style.backgroundColor = "";
    tomorrowbtn.style.color = "";
    tomorrowbtn.style.backgroundColor = "";
    onlinecoursesbtn.style.color = "";
    onlinecoursesbtn.style.backgroundColor = "";
    alleventsbtn.style.color = "";
    alleventsbtn.style.backgroundColor = "";
    workshopbtn.style.color = "";
    workshopbtn.style.backgroundColor = "";
    //page change
    cardsweekend.style.display = "inline";
    cardsall.style.display="none";
    cardstoday.style.display = "none";
    cardstomorrow.style.display = "none";

});

alleventsbtn.addEventListener('click', (e) => {
    e.preventDefault();
    //button color change
    alleventsbtn.style.color = "white";
    alleventsbtn.style.backgroundColor = "red";
    onlinecoursesbtn.style.color = "";
    onlinecoursesbtn.style.backgroundColor = "";
    workshopbtn.style.color = "";
    workshopbtn.style.backgroundColor = "";
    allbtn.style.color = "";
    allbtn.style.backgroundColor = "";
    todaybtn.style.color = "";
    todaybtn.style.backgroundColor = "";
    tomorrowbtn.style.color = "";
    tomorrowbtn.style.backgroundColor = "";
    weekendbtn.style.backgroundColor = "";
    weekendbtn.style.color = "";
    //page change
    // cardsall.style.display="";
    // cardstoday.style.display = "";
    // cardstomorrow.style.display = "none";
    // cardsweekend.style.display = "none";   

});

onlinecoursesbtn.addEventListener('click', (e) => {
    e.preventDefault();
    //button color change
    onlinecoursesbtn.style.color = "white";
    onlinecoursesbtn.style.backgroundColor = "red";
    alleventsbtn.style.color = "";
    alleventsbtn.style.backgroundColor = "";
    workshopbtn.style.color = "";
    workshopbtn.style.backgroundColor = "";
    allbtn.style.color = "";
    allbtn.style.backgroundColor = "";
    todaybtn.style.color = "";
    todaybtn.style.backgroundColor = "";
    tomorrowbtn.style.color = "";
    tomorrowbtn.style.backgroundColor = "";
    weekendbtn.style.backgroundColor = "";
    weekendbtn.style.color = "";
    //page change
    // cardsall.style.display="";
    // cardstoday.style.display = "";
    // cardstomorrow.style.display = "none";
    // cardsweekend.style.display = "none";   

});

workshopbtn.addEventListener('click', (e) => {
    e.preventDefault();
    //button color change
    workshopbtn.style.color = "white";
    workshopbtn.style.backgroundColor = "red";
    alleventsbtn.style.color = "";
    alleventsbtn.style.backgroundColor = "";
    onlinecoursesbtn.style.color = "";
    onlinecoursesbtn.style.backgroundColor = "";
    allbtn.style.color = "";
    allbtn.style.backgroundColor = "";
    todaybtn.style.color = "";
    todaybtn.style.backgroundColor = "";
    tomorrowbtn.style.color = "";
    tomorrowbtn.style.backgroundColor = "";
    weekendbtn.style.backgroundColor = "";
    weekendbtn.style.color = "";
    //page change
    // cardsall.style.display="";
    // cardstoday.style.display = "";
    // cardstomorrow.style.display = "none";
    // cardsweekend.style.display = "none";   

});

(function ($) {
    "use strict";
    
    // Initiate the wowjs
    new WOW().init();
})(jQuery);
