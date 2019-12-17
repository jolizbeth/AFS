// Saves options to chrome.storage
function save_options() {
  var choice = document.getElementById('a1').value;
  chrome.storage.sync.set({
    favoriteOption: choice
  }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
  chrome.storage.sync.get({
  }, function(items) {
    document.getElementById('a1').value = items.favoriteOption;
  });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',
    save_options);

function dropFunction() {
  // Get the checkbox
  var checkBox = document.getElementById("a1").value;
  // Get the dropdown
  var myDrop = document.getElementById("myDropdown").value;
  
  // If the checkbox is checked, display the output text
  if (myDrop.style.diplay == "none" && checkBox.checked == true) {
    myDrop.style.display = "block";
  }
  else {
    myDrop.style.display = "none";
  }
}