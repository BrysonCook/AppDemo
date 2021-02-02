function consoleButton(event){
    console.log("Hello.")
}

let myButton1 = $("#button1");
myButton1.on("click", consoleButton);

function formFieldCalc(event){
    let fieldValue1 = $("#field1").val();
    let fieldValue2 = $("#field2").val();
    let result = Number(fieldValue1) + Number(fieldValue2);
    $("#field3").val(result);
}

let myButton2 = $("#button2");
myButton2.on("click", formFieldCalc);

function hideText(event){
    if($("#paragraphToHide").is(":visible")){
        $("#paragraphToHide").hide(500);
    }else{
        $("#paragraphToHide").show(500);
    }
}

let myButton3 = $("#button3");
myButton3.on("click", hideText);

function validatePhoneNum(event){
    let phoneField = $("#phoneField").val();
    let regularExpression = /^\d{3}-\d{3}-\d{4}$/;
    if(regularExpression.test(phoneField)) {
        console.log("Good");
    } else {
        console.log("Bad");
    }
}

let myButton4 = $("#button4");
myButton4.on("click", validatePhoneNum);

function jsonOutput(event){
    let formJsonObject = {};
    let fName = $("#firstName").val();
    let lName = $("#lastName").val();
    let email = $("#email").val();
    formJsonObject.firstName = fName;
    formJsonObject.lastName = lName;
    formJsonObject.email = email;

    let jsonString = JSON.stringify(formJsonObject);
    console.log(jsonString);
    $("#jsonResult").text(jsonString);
}

let myButton5 = $("#button5");
myButton5.on("click", jsonOutput);