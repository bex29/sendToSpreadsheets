document.getElementById("date").valueAsDate = new Date();
var myForm = document.getElementById("myForm");
myForm.addEventListener("submit", function (e) {
  e.preventDefault();
});
function SubForm() {
  console.log($("#myForm").serializeArray());
  $.ajax({
    url: "https://api.apispreadsheets.com/data/hYfwXLHef1TnM6cA/",
    type: "post",
    data: $("#myForm").serializeArray(),

    success: function () {
      alert("Form Data Submitted");
    },
    error: function () {
      alert("There was an error");
    },
  });
}
