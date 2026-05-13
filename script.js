function rentCamera(cameraName){
  alert("You selected to rent: " + cameraName);
}

document
  .getElementById("contactForm")
  .addEventListener("submit", function(e){

    e.preventDefault();

    alert("Thank you! Your message has been sent.");
});