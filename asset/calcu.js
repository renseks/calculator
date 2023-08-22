/* eslint-disable no-unused-vars */
function clk(val) {

    document.getElementById ("screen").value = document.getElementById ("screen").value+val;
}


function clrDisplay() {
    document.getElementById ("screen").value=""
}

function eql() {
    var text = document.getElementById("screen").value;
    var result = eval(text);
    document.getElementById("screen").value = result

}