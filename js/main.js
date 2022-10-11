window.onload = function () {
    var formBtn = document.querySelector("form > button");
    formBtn.onclick = main;
};
function main() {
    inputValid("first-name", "First name is required");
    inputValid("last-name", "Last name is required");
}
function inputValid(id, errMsg) {
    var txtBox = document.getElementById(id);
    var txtBoxValue = txtBox.value;
    if (txtBoxValue == "") {
        var errSpan = txtBox.nextElementSibling;
        errSpan.innerText = errMsg;
        return false;
    }
    return true;
}
