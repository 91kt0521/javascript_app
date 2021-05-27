myInput = "";
myTotal = 0;
myFlag = 1;
myOperator = '+';

// 値処理
function myValue($v) {
    myFlag = 0;
    myInput += $v;
    document.getElementById('result').value = myInput;
}

// 演算子処理
function myCalculate(operator) {
    if (myFlag == 0) {
        myFlag = 1;
        myCal = myTotal + myOperator + myInput;
        myTotal = eval(myCal);
        myInput = "";
        document.getElementById('result').value = myTotal;
    }

    if (operator == "=") {
        if (myFlag == 1) {
            resultOutput = myCal + operator + myTotal
            document.getElementById('output').textContent = resultOutput;
        }
        myTotal = 0;
        myOperator = '+';
    } else {
        // 入力された演算子を退避
        myOperator = operator;
    }
}

// キャンセル処理
function myC() {
    myTotal = 0;
    myInput = "";
    myOperator = '+';
    document.getElementById('result').value = 0;
}