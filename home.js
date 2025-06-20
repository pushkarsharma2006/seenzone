
var database=firebase.database();
var authtoken=localStorage.getItem("authid")
var uname,width,height
var device
var ip ,devip
var home_visit=0;
var notification
var d_width=screen.width;
if(d_width<800){
  device="mobile"
  location.href="https://yesiampushkar.github.io/seenzone/mobile.html"
}
else{
 devip="Service removed from page"
  device="pc"
}
setTimeout(function(){
   width=document.getElementById("main").offsetWidth
   height=document.getElementById("main").offsetHeight
},100)

var ban=false;
if(typeof authtoken==="undefined"||authtoken===null || authtoken===""){
  location.href="https://yesiampushkar.github.io/seenzone/login"
}
else{
  database.ref("login/"+authtoken).on("value",function(snap){
    uname=snap.val().user
  })
  setTimeout(function(){
    if(typeof uname==="undefined"||uname===null||uname===""){
      document.getElementById("log_data").innerHTML="Unable to login . Make Sure you have good Internet connection<a href=''style='color:yellow'>Try again?</a> or <a href='sharmapushkar-coder.github.io/Disclosure/logout/'style='color:yellow'>Login again</a>"
    }
    else{
      document.getElementById("load").style.display="none"
      document.getElementById("user-name").innerHTML="Welcome,"+uname
      document.getElementById("noti").src="/noti/?u="+uname
    }
  },5000)
}
setInterval(function(){
  database.ref("users/"+uname).on("value",function(data){
    ban=data.val().ban
  })
  if(ban==="yes"){
    location.href="https://yesiampushkar.github.io/seenzone/terminated.html?from=homepage_landing"
  }
  else{
    
  }
},1000)


function increase(){
  document.getElementById("main").style.width=width+5;
  document.getElementById("main").style.height=height+10;
}
function decrease(){
  document.getElementById("main").style.width=width-5;
  document.getElementById("main").style.height=height-5;
}
function home(){
  location.href=""
}

setInterval(function(){
  database.ref("global").on("value",function(noti){
    notification=noti.val().note
  })
  if(typeof notification==="undefined"||notification===null|| notification===""){
    
  }
  else{
    document.getElementById("info").style.display="block"
    document.getElementById("msg").innerHTML="A Push Notification received ! <br></br><b>"+notification+"</b>"
    
  }
},1000)


function search(){
  var sname=document.getElementById('s').value;
  location.href='https://yesiampushkar.github.io/seenzone/profile/?u='+sname
}
function toggleMenu() {
  var menu = document.getElementById("menu");
  if (menu.style.left === "-250px") {
    menu.style.left = "0";
    document.getElementById("m").innerHTML="CLOSE MENU"
  } 
  else {
    menu.style.left = "-250px";
    document.getElementById("m").innerHTML="MENU"
  }
}




function tokenexp(){
  
}
