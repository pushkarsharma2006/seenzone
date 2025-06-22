var database=firebase.database();
var ul=localStorage.getItem("authid")
if(typeof ul==="undefined"||ul===null||ul===""){
  
}
else{
  location.href="https://pushkarsharma2006.github.io/seenzone/logout/?f=login-authfound"
}
var auth_pass
var auth_token=""
var f
var login_ip
var redirect=window.location.search
var url=redirect.replace('?continue=','')
console.log("user will be redirected to url--->"+url)
document.title="Login to continue on SeenZone"
var user_pass
var user_ban
var user_name
var name="SeenZone User"
var rep=""


function Submit(){
  document.getElementById("btn").disabled=true;
  document.getElementById("btn").innerHTML="Please Wait.."
  var auth_pass
  username=document.body.getElementById("email").value;
  user_pass=document.body.getElementById("password").value;
    database.ref("users/"+username).on("value",function(snap){
    auth_pass=snap.val().Password,
    user_ban=snap.val().ban,
    name=snap.val().name
  })
  setTimeout(function(){
    localStorage.name=name
    if(user_pass!=auth_pass){
      alert("INVALID CREDENTIALS")
      location.href=""
    }
    else if(user_pass==auth_pass){
      Token(76)
      database.ref("login/"+auth_token).set({
        'user':username
      })
      localStorage.authid=auth_token;
      setTimeout(function(){
        location.href="https://pushkarsharma2006.github.io/seenzone/";
      },4000)
    }
  ),5000}
  



  
}
































// function login(){
//   if(navigator.onLine){
    
//   }
//   else{
//     alert("Unable to connect")
    
//   }
  // document.getElementById("btn-create").disabled=true;
  // document.getElementById("btn-create").innerHTML="Please Wait.."
//   f=document.getElementById("username").value;
//   user_name=f.replace(/\s/g, '')
//   user_pass=document.getElementById("password").value;
  // database.ref("users/"+user_name).on("value",function(snap){
  //   auth_pass=snap.val().Password,
  //   user_ban=snap.val().ban
  // })
//   setTimeout(function(){
//     if(auth_pass==user_pass&&user_ban==="no"){
      // Token(76)
      // database.ref("login/"+auth_token).set({
      //   'user':user_name
      // })
      // localStorage.authid=auth_token;
//       setTimeout(function(){
//         if(typeof url==="undefined"||url===null||url===""){
//           location.href="https://pushkarsharma2006.github.io/seenzone/"
//           document.getElementById("info").innerHTML="Login success <button onclick='window.history.back()'>Click here</button>"
//         }
//         else if(url.includes("https://pushkarsharma2006.github.io/seenzone/")){
//           a();
//         }
//         else{
//            document.getElementById("login_pack").style.display="none";
//            document.getElementById("information").style.display="block";
//            document.getElementById("greet").innerHTML="Alert ! ,"+user_name
//           document.getElementById("url_bar").innerHTML="The website which is requesting your details is not register please click on move to safety to save your account"
          
//         }
        
      
//       },8000)
//     }
//     else if(auth_pass==user_pass&&user_ban==="yes"){
//         alert("This account has been suspended . Please login with another account")
//         location.href="#accblock=67238476&request=authid_userauth&muth"
//       }
//     else{
//       alert("Wrong Password ! Please try again .")
//       location.href=""
//     }
//   },5000)
// }

function Token(length) {

  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    auth_token += characters.charAt(Math.floor(Math.random() *
      charactersLength));
  }

}
function a(){
  location.href=url+"?authid="+auth_token
}
function b(){
  location.href="https://pushkarsharma2006.github.io/seenzone/"
}


