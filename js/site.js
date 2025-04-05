document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  const nameInput = document.getElementById("name");
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const userName = nameInput.value.trim();

    if (userName) {
      alert(`Thanks for subscribing, ${userName}!`); 
    } else {
      alert("Thanks for subscribing!");
    }

    form.reset();
  });
});