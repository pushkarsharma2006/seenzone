var url=window.location.search;
var u=url.replace('?continue=','')
var token=localStorage.getItem("authid")
if(typeof token==="undefined"||token===null||token===""){
  location.href="https://sharmapushkar-coder.github.io/Disclosure/login/?continue="+u
}
else{
  s()
}
function s(){
  if(u.includes('https://sharmapushkar-coder.github.io/')){
   location.href=u+"?authid="+token
  }
  else{
    window.history.back()
  }
}
