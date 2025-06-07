var mobile_number_input = document.querySelector("#phone");

mobile_number = window.intlTelInput(mobile_number_input, {
    separateDialCode: true,
    utilsScript: "./js/utils.js",

});
jQuery('#country_code').val(mobile_number.getSelectedCountryData().dialCode);
mobile_number_input.addEventListener("countrychange", function () {
    jQuery('#country_code').val(mobile_number.getSelectedCountryData().dialCode);
});
// bank info
// Get references to the dropdown and the online details section
const paymentMethod = document.getElementById("payment-method");
const onlineDetails = document.querySelector(".online-details");
onlineDetails.style.display = "block";
paymentMethod.addEventListener("change", function () {
  if (this.value === "cash") {
    onlineDetails.style.display = "none";
  } else {
    onlineDetails.style.display = "block";
  }
});