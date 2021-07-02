
var wordlist = ["aaieba<br>kouiu", "waraukadoniha<br>hukukitaru"];
var wordlistJa = ["ああ言えばこう言う", "笑う門には福来たる"];
var time_limit =10;
var readytime = 3;
var char_num = 0;
var word_char;
var random;
var newline;
var replacewordlist = [];

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
    wordDisplay();
    count.innerHTML = "";
    start_button.style.visibility = "visibile";
    var time_remaining = time_limit;
    var gametimer = setInterval(function(){
        count.innerHTML = "残り時間：" + time_remaining;
        time_remaining--;
        if (time_remaining <= 0) {
            clearInterval(gametimer);
            finish();
        }

    }, 1000);
}

/**
 * 画面にテキスト表示処理
 *
 */
function wordDisplay() {
    random = Math.floor(Math.random() * wordlist.length);
    replacewordlist[random] = wordlist[random].replace("<br>/g","");
    newline = wordlist[random].indexOf("<");
    word.innerHTML = wordlist[random];
    japanese.innerHTML = wordlistJa[random];
    charInsort();
}

function charInsort() {
    word_char = replacewordlist[random].charAt(char_num);
    console.log(word_char);
}

/**
 * 終了処理
 *
 */
function finish() {
    console.log("終了です");
}