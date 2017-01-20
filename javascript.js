/*jslint browser: true*/
/*global $, jQuery*/
/*jslint devel: true */

$(document).ready(function main() {
    "use strict";
    var lblspecialInstructions = document.getElementById('ctl00_cphMainContent_ctl11_Duc20635_LblDial'),
        txtspecialInstructions = document.getElementById('ctl00_cphMainContent_ctl11_Duc20635_ducTextBox'),
        mainDiv = document.getElementById('ctl00_cphMainContent_ctl11_Duc20635_ducWrapper'),
        addToCart = document.getElementById('ctl00_cphMainContentFooter_WizardStepsNextPrev1_ButtonFinish'),
        newdiv1 = document.createElement('div'),
        newdiv2 = document.createElement('div'),
        newdiv3 = document.createElement('div');
    //lblspecialInstructions.style.display = 'none';
    //txtspecialInstructions.style.display = 'none';
    newdiv2.setAttribute("display", "inline-block");
    addToCart.setAttribute("onclick", "f1();");
    newdiv1.innerHTML = '<br><br><br><br><br><br>Please select your cost center: <select id="costCenterSelect"><option></option><option>test1</option><option>ShiggityShwoah</option></select>';
    newdiv2.innerHTML = '<br>Special Instructions: <textarea id="specialInstructionsNew" class="formfield"  rows="7" cols="33" style="display:inline-block; float:right; margin-left:10px;">';
    //newdiv3.innerHTML = '<button type="button" id="confirmInstruction" onclick="f1();" class="btn" style="float:left;">Click here to Confirm Cost Center and/or Instructions</button>';
    mainDiv.append(newdiv1);
    mainDiv.append(newdiv2);
    mainDiv.append(newdiv3);
});

function f1() {
    "use strict";
    var ccResult = document.getElementById('costCenterSelect'),
        instructResult = document.getElementById('specialInstructionsNew');
    
    if (instructResult.value > -1) {    $('#ctl00_cphMainContent_ctl11_Duc20635_StringLongTextBox').val($('#ctl00_cphMainContent_ctl11_Duc20635_StringLongTextBox')).val(ccResult.value);
        } else {
        $('#ctl00_cphMainContent_ctl11_Duc20635_StringLongTextBox').val($('#ctl00_cphMainContent_ctl11_Duc20635_StringLongTextBox')).val(ccResult.value + " | " + instructResult.value);
    }
}