// script.js
document.querySelectorAll('.buy-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    alert('Thank you for purchasing!');
  });
});
function buy(){
  alert("we are redirecting you to our whats app number. Please send your username+plan name i.e. example@socioai gold.make sure you have a whats app downloaded on your phone. Once this procedure is completed you will receive a upi id or qr code, scan it and pay your amount. NOTE:: It may take atleast 30 min to show your current plan on the website. ")
  location.href="https://wa.me/918377887193"
}
