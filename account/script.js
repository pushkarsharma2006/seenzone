console.log("Donot send any info shown in the delevoper tools, Your account might be at the risk of being hacked if you do so.")
var database=firebase.database();
var token=localStorage.getItem("authid")
console.log("Connecting to the auth id ::::: "+token+" (Donot copy this!!!!!)")
var user="Not found <a href=''>Try Again</a>"
setTimeout(function(){
  database.ref("login/"+token).on("value",function(snap){
    user=snap.val().user
  })
  document.getElementById("name").innerHTML="<span class='label'>NAME:</span>"+user
},3000)
