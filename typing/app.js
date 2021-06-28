
var wordlist = ["aaieba<br>kouiu", "waraukadoniha<br>hukukitaru"];
var wordlistJa = ["ああ言えばこう言う", "笑う門には福来たる"];
var readytime = 3;
var random;

/**
 * startボタンを押下後の数字カウント処理
 *
 */
function ready() {
    var readytime = 3;
    scoredis.innerHTML = "";
    start_button.style.visibility = "hidden";
    var redytimer = setInterval(function() {
        count.innerHTML = readytime;
        readytime--;
        if(readytime < 0) {
            clearInterval(redytimer);
            gameStart();
        }
    }, 1000);
}

/**
 * ゲーム開始処理
 *
 */
function gameStart() {
    console.log(11111);
    count.innerHTML = "";
    start_button.style.visibility = "visibile";
}

/**
 *
 *
 */
function wordDisplay() {
    random = Math.floor(Math.random() * wordlist.length);
}
wordDisplay();