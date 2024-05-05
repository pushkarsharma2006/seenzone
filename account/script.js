console.log("Donot send any info shown in the delevoper tools, Your account might be at the risk of being hacked if you do so.")
var database=firebase.database();
var token=localStorage.getItem("authid")

if(typeof token==="undefined"||token===""||token===null){
  location.href="https://sharmapushkar-coder.github.io/socioai/login/?continue=https://sharmapushkar-coder.github.io/socioai/account"
}
else{
  console.log("Connecting to the auth id ::::: "+token+" (Donot copy this!!!!!)")
  var user="Not found <a href=''>Try Again</a>"
  setTimeout(function(){
    database.ref("login/"+token).on("value",function(snap){
      user=snap.val().user
    })
    document.getElementById("name").innerHTML="<span class='label'>NAME:</span>"+user
  },6000)
}





setTimeout(function() {
    var loadingDiv = document.getElementById('loading-div');
    loadingDiv.style.display = 'none';
}, 6000);
