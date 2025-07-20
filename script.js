document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("sign-upForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;

    alert(
      "Form Has Been Submitted!\n\n" +
      "First Name: " + firstName + "\n" +
      "Last Name: " + lastName + "\n" +
      "Email: " + email + "\n" +
      "Phone: " + phone
    );
  });
});
