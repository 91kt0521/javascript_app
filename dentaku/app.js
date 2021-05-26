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
function myCalculate($operator) {
    if (myFlag == 0) {
        myFlag = 1;
        myCal = myTotal + myOperator + myInput;
        myTotal = eval(myCal);
        document.getElementById('result').value = myTotal;
        myInput = "";
    }

    if ($operator == "=") {
        myTotal = 0;
        operator = '+';
    } else {
        myOperator = $operator;
    }
}

// キャンセル処理
function myC() {
    myTotal = 0;
    myInput = "";
    myCalc = '+';
    document.getElementById('result').value = 0;
}