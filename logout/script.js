var server= firebase.database();
var token=localStorage.getItem('authid')
function logout(){
  if(token===""){
    location.href='https://sharmapushkar-coder.github.io/socioai/?F=lgo&response=100'
  }
  else{
    server.ref('login/'+token).set({
      'user':null
    })
    setTimeout(function(){
      alert("Logged Out successfully")
      localStorage.removeItem("authid")
      location.href="https://sharmapushkar-coder.github.io/socioai/?from=logout&&result=khudcheckkarlo"
    },5000)
  }
}
