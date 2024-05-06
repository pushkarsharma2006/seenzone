console.log("Donot send any info shown in the delevoper tools, Your account might be at the risk of being hacked if you do so.")
var database=firebase.database();
var token=localStorage.getItem("authid")

if(typeof token==="undefined"||token===""||token===null){
  location.href="https://sharmapushkar-coder.github.io/socioai/login/?continue=https://sharmapushkar-coder.github.io/socioai/account"
}
else{
  var name=localStorage.getItem("name");
  var email=localStorage.getItem("mail");
  var dateofjoin=localStorage.getItem("DOJ");
  var dob=localStorage.getItem("dob");
  var username=localStorage.getItem("username");
  setTimeout(function(){
    document.getElementById("username").innerHTML="<span class='label'>Username:</span>"+username
    document.getElementById("name").innerHTML="<span class='label'>Name:</span>"+name
    document.getElementById("join").innerHTML="<span class='label'>Date of Joining:</span>"+dateofjoin
    document.getElementById("dob").innerHTML="<span class='label'>Date of Birth:</span>"+dob
    document.getElementById("email").innerHTML="<span class='label'>Email:</span>"+email
  },2000)
}





setTimeout(function() {
    var loadingDiv = document.getElementById('loading-div');
    loadingDiv.style.display = 'none';
}, 6000);
