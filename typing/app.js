
var wordlist = ["aaieba<br>kouiu", "waraukadoniha<br>hukukitaru"];
var wordlistJa = ["ああ言えばこう言う", "笑う門には福来たる"];
var time_limit =10;
var readytime = 3;
var score;
var correct;
var mistake;
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
    score = 0.0;
    mistake = 0;
    correct = 0;
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

/**
 * wordlistの0番目の文字を取得
 *
 */
function charInsort() {
    word_char = replacewordlist[random].charAt(char_num);
}

/**
 * 終了処理
 *
 */
function finish() {
    score = Math.floor(Math.pow(correct,2) * Math.pow((correct/(correct+mistake)),5));
    scoredis.innerHTML="スコア:"+score+"点"+"<hr>正タイプ数:"+correct+"<br>ミスタイプ数:"+mistake+"<br>正答率"+(correct/(correct+mistake)*100).toFixed(1)+"%";
    count.innerHTML="";
    word.innerHTML="";
    japanese.innerHTML="";
    start_button.style.visibility ="visible";
    word_char=0;
    random = 0;
    char_num = 0;
}

document.onkeydown = function(e) {
    if(e.key == 189) {
        keyStr = '-';
    } else if(e.key == 188) {
        keyStr = ',';
    } else {
        // 文字コードから文字列に変換し小文字にも変換する
        var keyStr = e.key;
        keyStr = keyStr.toLowerCase();
    }

    // クリックしたキーと画面表示してある一文字目を比較
    if(keyStr == word_char){
        word.innerHTML="<span style='color: red;'>"+wordlist[random].substr(0,char_num+1)+"</span>"+wordlist[random].substr(char_num+1,wordlist[random].length);
        char_num++;
        // 改行文字はプラス4文字する
        if(newline == char_num) {
            char_num = char_num + 4;
        }
        correct++;
        charInsort();
    } else {
        mistake++;
    }

    if(char_num == wordlist[random].length) {
        char_num = 0;
        wordDisplay();
    }
    console.log(e.key)
}