console.log("Donot send any info shown in the delevoper tools, Your account might be at the risk of being hacked if you do so.")
var database=firebase.database();
var token=localStorage.getItem("authid")
console.log("Connecting to the auth id ::::: "+token+" (Donot copy this!!!!!)")
var user="Not found <a href=''>Try Again</a>"
var name=document.getElementById("name")
var username=document.getElementById("username")
var dob=document.getElementById("dob")
var join=document.getElementById("join")
var mail=document.getElementById("email")
setTimeout(function(){
  database.ref("login/"+token).on("value",function(snap){
    user=snap.val().user
  })
  name.innerHTML=user
},3000)
