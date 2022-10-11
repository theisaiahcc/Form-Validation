window.onload = function(){
    let formBtn = <HTMLElement>document.querySelector("form > button");
    formBtn.onclick = main;
}

function main():void{
    inputValid("first-name", "First name is required");
    inputValid("last-name","Last name is required");
}

/**
 * 
 * @param id id of input text box
 * @param errMsg errMsg to display in sibling span of input text box if false
 * @returns true if string isn't empty
 */
function inputValid(id:string, errMsg:string):boolean {
    let txtBox = <HTMLInputElement>document.getElementById(id);
    let txtBoxValue = txtBox.value;

    if (txtBoxValue == "") {
        let errSpan = <HTMLSpanElement>txtBox.nextElementSibling;
        errSpan.innerText = errMsg;
        return false;
    }
    return true;
}