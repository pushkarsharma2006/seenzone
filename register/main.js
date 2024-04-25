var database=firebase.database();
var word="Register to get your own account"
var valid
var dateObj , date , month , year , hour , min , sec , newdate
function create(){
  document.getElementById("info").innerHTML=""
  if(navigator.onLine){
    document.getElementById("btn-create").innerHTML="Creating...."
    var n=document.getElementById("name").value;
    name=n.replace(/\s/g, '')
    var p=document.getElementById("password").value;
    password=p.replace(/\s/g, '')
    var u=document.getElementById("username").value;
    username=u.replace(/\s/g, '')
    var mail=document.getElementById("email").value;
    var mobile=document.getElementById("mobile").value;
    database.ref("users/"+username).on("value",function(data){
       valid=data.val().name
    })
    setTimeout(function(){
      if(typeof valid==="undefined"||valid===null|| valid===""){
       dateObj=new Date()
       date=dateObj.getDate()
       month = dateObj.getMonth() + 1;
       year = dateObj.getFullYear();
       hour=dateObj.getHours();
       min=dateObj.getMinutes();
       sec=dateObj.getSeconds();
       newdate = year + "/" + month + "/" + date+" at "+hour+":"+min+":"+sec;
       database.ref("users/"+username).set({
        'name':name,
        'Email':mail,
        'username':username,
        'Password':password,
        'mobile':mobile,
        'Created':newdate,
        'verified':'yes',
        'ban':'no',
         'plan':'basic'
       })
       setTimeout(function(){location.href="https://sharmapushkar-coder.github.io/socioai/login/?newu="+username},3000)
    }
    else{
      alert("username already taken ")
      location.href="https://sharmapushkar-coder.github.io/socioai/register#UTcode="+Math.random(0,1000)
    }
    },5000)
    
  }
  else{
    document.getElementById("info").innerHTML="Unable to connect with the server."
  }
}
