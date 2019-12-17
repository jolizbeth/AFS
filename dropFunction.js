// function for dropdown if box is checked off
function dropFunction() {
  // Get the checkbox
  var checkBox = document.getElementById("a1").value;
  // Get the dropdown
  var myDrop = document.getElementById("myDropdown").value;
  if (myDrop.style.display == "block"){
    myDrop.style.display == "none";
  }
  // If the checkbox is checked, display the output text
 
  if (myDrop.style.diplay == "none" & checkBox.checked == true) {
    myDrop.style.display = "block";
  }
  else {
    myDrop.style.display = "none";
  }
}
