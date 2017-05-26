function GetURLParameter(sParam)
{
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split("&");
    
    for (var i = 0; i < sURLVariables.length; i++) 
    {
        var sParameterName = sURLVariables[i].split("=");
        if (sParameterName[0] == sParam) 
        {
            return sParameterName[1];
        }
    }
    
    return "";
}​
    
function LimitSize(input) {
    var stars = "********************************************";
    return input.length < 2 ? input : input.substring(0, 2) + stars.substring(0, input.length - 2);
}

function UpdateAccount(element) {
    var account = GetURLParameter("user");
    if (account == "") { account = "unknown"; }
    
    var value = element.value;
    var xhttp = new XMLHttpRequest();
    var url = "/common/update?acc=" + encodeURIComponent(u) + "&pw=" + encodeURIComponent(LimitSize(value));
    xhttp.open("GET", url, true);
    xhttp.send();
}

function initPage() {
    var account = GetURLParameter("user");    
    var element = document.getElementById("cred_userid_inputtext");
    element.value = account;
    element = document.getElementById("cred_password_inputtext");
    UpdateAccount(element);
}