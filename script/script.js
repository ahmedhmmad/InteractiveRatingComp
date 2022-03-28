let oneElement=document.getElementById("one");
let twoElement=document.getElementById("two");
let threeElement=document.getElementById("three");
let fourElement=document.getElementById("four");
let fiveElement=document.getElementById("five");
let ratingElement=document.querySelector(".rating");

let cardElement=document.querySelector(".card");
let btnElement=document.querySelector("#btn");
let starElement=document.querySelector("#star");
let titleElement=document.getElementById("title");
let thankImg=document.getElementById("thank-img");
let paraElement=document.getElementById("para");


oneElement.addEventListener("click",function(){
   
ratingElement.style.display="none";
titleElement.innerHTML =""
starElement.setAttribute("style","display:none");

titleElement.setAttribute("style","color:green");
thankImg.setAttribute("style","display: flex; justify-content: center;");
btnElement.innerHTML =`You selected 1 out of 5`
btnElement.setAttribute("style","background-color:black;color:#fc7613;");
thankImg.appendChild(btnElement);
titleElement.textContent="Thank you!";
// btnElement.appendChild(titleElement);

paraElement.textContent="We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!"
 
});
