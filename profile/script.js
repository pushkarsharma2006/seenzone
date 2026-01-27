var database=firebase.database();
var user_bar_name=window.location.search
var user_bar=user_bar_name.replace('?u=','');
var active,chat_token
var name ="Error occured while looking for this user <a href=''>Try Again</a>"
var clas,reserved
var p1=localStorage.getItem("username");
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

function msgtkn(){
  document.getElementById("msg-btn").innerHTML="Setting things up...";
  Token(50);
  database.ref("msgtkn/"+chat_token).on("value",function(joint){
    reserved=joint.val().exist
  })
  setTimeout(function(){
    document.getElementById("msg-btn").innerHTML="Almost Done";
    if(typeof reserved===null || reserved===""){
      alert('Unable to create chat room.');
      location.href='';
    }
    else{
      //create special chat token
      database.ref("msgtkn/"+chat_token).set({
        'p1':p1,
        'p2':user_bar
      })
      //pushing chat into users pc bar
      database.ref("users/"+user_bar+"chats").push().set({
        'User':p1
      })
    }
  },3000)
  
}


function Token(length) {

  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    chat_token += characters.charAt(Math.floor(Math.random() *
      charactersLength));
  }

}
function a(){
  location.href=url+"?authid="+auth_token
}
function b(){
  location.href="https://pushkarsharma2006.github.io/seenzone/"
}
