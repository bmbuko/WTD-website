function validateForm() {
    var formInputs = document.forms["application-form"]["full name"]["Email address"].value;
    if (formInputs == "") {
      alert("all fields must be filled out");
      return false;
    }
  }