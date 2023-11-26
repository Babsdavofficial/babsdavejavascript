let hrs=document.getElementById("hrs");
let min=document.getElementById("min");
let sec=document.getElementById("sec");
setInterval(function(){
    let currentTime=new Date();
    hrs.innerHTML=currentTime.getHours();
    min.innerHTML=currentTime.getMinutes();
    sec.innerHTML=currentTime.getSeconds();
},1000);

let date=document.getElementById("date");
let date2=document.getElementById("date2");
let e= new Date().getMonth()+1;
if (e==1) {
    e=" January"
}else if(e==2){
    e="Febuary"
}else if(e==3){
    e="March"
}else if(e==4){
    e="April"
}else if(e==5){
    e="May"
}else if(e==6){
    e="June"
}else if(e==7){
    e="July"
}else if(e==8){
    e="August"
}else if(e==9){
    e="September"
}else if(e==10){
    e="October"
}else if(e==11){
    e="November"
}else{
    e="December"
}
date.innerHTML='<br>'+ new Date().getDate() +'<br><br>'+ e +'<br><br>'+ new Date().getFullYear();
let f= new Date().getDay();
if(f=="1"){
f="Monday"
}else if(f=="2"){
f="Tuesday"
}else if(f=="2"){
    f="Tuesday"
}else if(f=="3"){
    f="Wednesday"
}else if(f=="4"){
    f="Thursday"
}else if(f=="5"){
    f="Friday"
}else if(f=="6"){
    f="Saturday"
}else if(f=="0"){
    f="Sunday"
}
date2.innerHTML=f;