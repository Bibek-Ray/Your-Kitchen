function sendMail(){
  var params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    subject: document.getElementById("subject").value,
    message: document.getElementById("message").value,
  };
  const serviceID = "service_xmsfxoy";
  const templateID = "template_esiyvsn";

  emailjs.send(serviceID, templateID, params)
  .then(
    res =>{
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("subject").value = "";
      document.getElementById("message").value = "";
      console.log(res);
      alert("Sent Successfully!!");
    }
  )
  .catch((err) => console.log(err));
}
window.addEventListener('load', function() {
  const elements = document.querySelectorAll('.fade-in');
  elements.forEach(function(element) {
    element.classList.add('visible');
  });
});
