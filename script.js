const btn = document.getElementById('button');
const contactForm = document.getElementById('form');

//Setting variables for serviceID and templateID
const serviceID = 'default_service';
const templateID = 'template_tngtc2q';

//Code from emailJS to set up the initial function

contactForm.addEventListener('submit', function (event) {
  event.preventDefault(); //preventing default submit 

  btn.value = 'Sending...'; //displaying new button value when sending 

  $('#modalContactForm').modal('hide')
 
  emailjs.sendForm(serviceID, templateID, this) //sending the form
    .then(() => {

      btn.value = 'Submit';

      //get the name of the user from input field
      let userName = document.getElementById('name');

      

      //alert shows to the user when the message has been sent 
      
      //reset the form on submit 
      contactForm.reset();
      alert(`Thank you for getting in touch ${userName.value}. Your message has been sent! We will be in touch soon!`);
      

    }, (err) => {
      //error message if the email is not being sent
      btn.value = 'Submit';
      alert(alert(JSON.stringify(err)`Sorry ${userName.value} something went wrong, please try again`));
    });



});
