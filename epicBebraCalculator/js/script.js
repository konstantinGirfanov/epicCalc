window.onload = function () {
    var k = document.getElementsByTagName("button");
    for (var i = 0; i < k.length; i++) {
        let num = k[i].innerText;
        if (!isNaN(num) && num != '.' && num != '0') {
            k[i].onclick = function () {
                var input = document.getElementById("input");
                let inputText = input.innerText;
                let inputLength = inputText.length;

                if (inputLength == 1 && inputText == '0') {
                    input.innerText = num;
                    input.style.color = "black";
                    return;
                }

                for (var i = inputLength - 1; i >= 0; i--) {
                    if (inputText[i] == '.') {
                        input.innerText += num;
                        return;
                    }
                    if (IsPreviousSymbolAreSign(inputText[i])) {
                        if ((inputLength - 1 < i) && inputText[i + 1] == '0') {
                            input.innerText[i + 1] = num;
                        }
                        else {
                            input.innerText += num;
                        }
                        input.style.color = "black";
                        return;
                    }
                }

                input.innerText += num;
                input.style.color = "black";
            }
        }
    }
}

function OnClick0() {
    var inputElement = document.getElementById("input");
    var inputText = inputElement.innerText;
    var inputLength = inputText.length;
    for (var i = inputLength - 1; i >= 0; i--) {
        if (IsValidSymbolFor0(inputText[i]) || IsPreviousSymbolAreSign(inputText[i])) {
            inputElement.innerText += "0";
            inputElement.style.color = "black";
            return;
        }

        if (IsPreviousSymbolAreSign(inputText[i])) {
            if (i != inputLength - 1) {
                if (inputText[i + 1] == '0') {
                    inputElement.style.color = "red";
                    return;
                }
                inputElement.innerText += "0";
                inputElement.style.color = "black";
                return;
            }
        }
    }

    inputElement.style.color = "red";
}

function IsValidSymbolFor0(symbol) {
    return symbol == '.' || symbol == '1' || symbol == '2' || symbol == '3' ||
        symbol == '4' || symbol == '5' || symbol == '6' ||
        symbol == '7' || symbol == '8' || symbol == '9';
}

function OnClickPlus() {
    var inputElement = document.getElementById("input");
    if (IsPreviousSymbolAreNotSign(inputElement.innerText[inputElement.innerText.length - 1])) {
        inputElement.innerText += "+";
        inputElement.style.color = "black";
        return;
    }
    inputElement.style.color = "red";
}

function OnClickMinus() {
    var inputElement = document.getElementById("input");
    if (IsPreviousSymbolAreNotSign(inputElement.innerText[inputElement.innerText.length - 1])) {
        inputElement.innerText += "-";
        inputElement.style.color = "black";
        return;
    }
    inputElement.style.color = "red";
}

function OnClickMultiply() {
    var inputElement = document.getElementById("input");
    if (IsPreviousSymbolAreNotSign(inputElement.innerText[inputElement.innerText.length - 1])) {
        inputElement.innerText += "*";
        inputElement.style.color = "black";
        return;
    }
    inputElement.style.color = "red";
}

function OnClickDivide() {
    var inputElement = document.getElementById("input");
    if (IsPreviousSymbolAreNotSign(inputElement.innerText[inputElement.innerText.length - 1])) {
        inputElement.innerText += "/";
        inputElement.style.color = "black";
        return;
    }
    inputElement.style.color = "red";
}

function OnClickRemain() {
    var inputElement = document.getElementById("input");
    if (IsPreviousSymbolAreNotSign(inputElement.innerText[inputElement.innerText.length - 1])) {
        inputElement.innerText += "%";
        inputElement.style.color = "black";
        return;
    }
    inputElement.style.color = "red";
}

function OnClickPower() {
    var inputElement = document.getElementById("input");
    if (IsPreviousSymbolAreNotSign(inputElement.innerText[inputElement.innerText.length - 1])) {
        inputElement.innerText += "^";
        inputElement.style.color = "black";
        return;
    }
    inputElement.style.color = "red";
}

function IsPreviousSymbolAreNotSign(sign) {
    return sign != '+' && sign != '-' && sign != '*'
        && sign != '/' && sign != '.' && sign != '%' && sign != '^';
}

function IsPreviousSymbolAreSign(sign) {
    return sign == '+' || sign == '-' || sign == '*'
        || sign == '/' || sign == '%' || sign == '^';
}

function OnClickDot() {
    var inputElement = document.getElementById("input");
    var inputText = inputElement.innerText;
    var inputLength = inputText.length;

    if (!IsPreviousSymbolAreNotSign(inputText[inputLength - 1])) {
        inputElement.style.color = "red";
        return;
    }

    for (var i = inputLength - 1; i >= 0; i--) {
        if (IsPreviousSymbolAreSign(inputText[i])) {
            break;
        }
        if (inputText[i] == '.') {
            inputElement.style.color = "red";
            return;
        }
    }
    inputElement.innerText += '.';
    inputElement.style.color = "black";
}

function OnClickDelete() {
    var input = document.getElementById("input");
    input.innerText = input.innerText.substring(0, input.innerText.length - 1);
    input.style.color = "black";
}

function OnClickEqual() {
    var input = document.getElementById("input");
    input.remove();

    var div = document.getElementById("divInput");

    input = document.createElement('p');
    input.id = "input";
    input.className = "alignCenter";
    input.innerHTML = "<p>RESULT IS BEBRA</p>";

    div.append(input);

}

function OnClickClear() {
    var input = document.getElementById("input");
    input.innerText = "0";
    input.style.color = "black";
}

