var database=firebase.database();
var user_bar_name=window.location.search
var user_bar=user_bar_name.replace('?u=','');
var active
var name ="Error occured while looking for this user <a href=''>Try Again</a>"
var clas
var insta
var made
var page
var plan
database.ref('users/'+user_bar).on("value",function(snap){
  plan=snap.val().plan
})
setTimeout(function(){
  if(typeof plan==="undefined"||plan===null||plan===""){
    document.getElementById("premium").innerHTML="Basic User"
  }
  else if(plan==="gold"){
    document.body.style.backgroundImage = "url('gold.jpg')";
    document.getElementById("premium").innerHTML="Golden Member"
  }
  else if(plan==="diamond"){
    document.body.style.backgroundImage = "url('diamond.jpg')";
    document.getElementById("premium").innerHTML="Diamond Member"
  }
},5000)
console.log("Fetching details of "+user_bar)
setTimeout(function(){document.getElementById("username").innerHTML=user_bar},2000)

document.title=user_bar+"-Profile"

database.ref("users/"+user_bar).on("value",function(snap){
  name=snap.val().name,
  made=snap.val().Created
})
setTimeout(function(){
  if(typeof name==="undefined"||name===null||name===""){
   alert("User not found")
   window.history.back();
  }
 else{
   document.getElementById("name").innerHTML="Name - "+name
   document.getElementById("since").innerHTML="Joined : "+made
  }
},5000)
database.ref("users/"+user_bar+"/social").on("value",function(soop){
  insta=soop.val().instagram
})
setTimeout(function(){
  if(typeof insta==="undefined"||insta===null||insta===""){
    
  }
  else{
    document.getElementById("social").innerHTML+="<a href='"+insta+"'> Follow "+user_bar+" on Instagram</a>"
  }
},5000)
function search(){
  var user=document.getElementById("inputuser").value;
  location.href="https://pushkarsharma2006.github.io/seenzone/profile/?u="+user
}


setInterval(function(){
  database.ref("users/"+user_bar+"/online").on("value",function(shot){
    active=shot.val().last,
    page=shot.val().page
  })
  document.getElementById("laston").innerHTML="Last active  : "+active+" On :"+page
})
