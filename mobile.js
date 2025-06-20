var database=firebase.database();
var authtoken=localStorage.getItem("authid")
var uname,width,height
var device
var home_visit=0;
var code=window.location.search;
setInterval(function(){
  changeWallpaper()
},6000)
setTimeout(function(){
   width=document.getElementById("main").offsetWidth
   height=document.getElementById("main").offsetHeight
},1000)

var ban=false;
if(typeof authtoken==="undefined"||authtoken===null || authtoken===""){
  location.href="login"
}
else{
  database.ref("login/"+authtoken).on("value",function(snap){
    uname=snap.val().user
  })
  setTimeout(function(){
    if(typeof uname==="undefined"||uname===null||uname===""){
      document.getElementById("log_data").innerHTML="Server didn't respond . This can be due to <br>1.Your Session expired </br><br>2. Slow internet connection </br><br></br><a href=''style='color:yellow'>Try again?</a> or <a href='https://sharmapushkar-coder.github.io/Disclosure/login'style='color:yellow'>Login again</a>"
    }
    else{
      document.getElementById("load").style.display="none"
      document.getElementById("user-name").innerHTML="Welcome,"+uname
    }
  },5000)
}
setInterval(function(){

  database.ref("users/"+uname).on("value",function(data){
    ban=data.val().ban
  })
  if(ban==="yes"){
    alert('We notices something wrong with your Account . Please Refresh this page to continue')
    location.href="https://yesiampushkar.github.io/terminated.html?from=m.homepage_landing"
  }
  else{
    
  }
},1000)
function home(){
  location.href="https://yesiampushkar.github.io/"
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

function toggleMenu() {
  var menu = document.getElementById("menu");
  if (menu.style.left === "-300px") {
    menu.style.left = "0";
    document.getElementById("m").innerHTML="CLOSE MENU"
  } 
  else {
    menu.style.left = "-300px";
    document.getElementById("m").innerHTML="MENU"
  }
}

        function profile(){
          location.href='https://yesiampushkar.github.io/profile/?u='+uname
        }
 function changeWallpaper() {
  var background = document.getElementById("background-image");
  var images = ["https://yesiampushkar.github.io/wallpaper1.jpg", "https://yesiampushkar.github.io/wallpaper2.jpg", "https://yesiampushkar.github.io/wallapaper3.jpg", "https://yesiampushkar.github.io/wallapaper4.jpg","https://yesiampushkar.github.io/wallpaper5.jpg","https://yesiampushkar.github.io/wallpaper6.jpg","https://yesiampushkar.github.io/wallpaper7.jpg","https://yesiampushkar.github.io/wallpaper8.jpg","https://yesiampushkar.github.io/wallpaper9.jpg","https://yesiampushkar.github.io/img12.png","https://yesiampushkar.github.io/img13.png","https://yesiampushkar.github.io/img14.png","https://yesiampushkar.github.io/img15.png","https://yesiampushkar.github.io/img16.png","https://yesiampushkar.github.io/img17.png","https://yesiampushkar.github.io/img18.png"]; 
  var randomIndex = Math.floor(Math.random() * images.length);
  var imageUrl = images[randomIndex];
  background.style.backgroundImage = "url('" + imageUrl + "')";
}


    function Search(){
      var usearch=document.getElementById("unsearch").value;
      if(usearch===""){

      }
      else{
       location.href="https://yesiampushkar.github.io/profile/?u="+usearch
      }
      
    }
