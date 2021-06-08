var panelNum = document.getElementById('panelNum').innerHTML;
var panelNum = 10;


// 連番の配列を作成
let Bingo = Array.from(new Array(75)).map((v, i)=> i + 1);

var timers = [];
var stopCount = 0;
var panel = document.getElementById('panelNum');
var btn0 = document.getElementById('btn0');

// 1〜75まで連番で表示する
var renderBingo = function (){
    var fragment = document.createDocumentFragment();
    var Wrap;
    // 連番の配列から要素を取り出し変数にまとめる(elemだと上手くいかない謎)
    Bingo.forEach(function(elem, index){
        if (index % 15 === 0) {
            Wrap = fragment.appendChild(document.createElement('div'));
            Wrap.className = 'WrapDiv';
        }
        //新しい要素を作成
        var result_num_element = Wrap.appendChild(document.createElement('div'));
        result_num_element.className = 'bingo';
        result_num_element.textContent = elem;
    });

    // ID属性を取得
    var result = document.getElementById('result');
    // 指定した要素の末尾に新要素を挿入する
    result.appendChild(fragment);
}
// 呼び出し
renderBingo();


// SPINボタン押下後要素追加変更
spinButton.addEventListener('click', function() {
    // ボタン無効化
    this.className = 'inactive';
    btn0.className = 'btn';
    panel.className = 'panel';
    runSlot(0, panel);
})

/**
 * SPINボタン押下後の処理
 *
 */
function runSlot(n, panel){
    // BINGOの数の乱数から値を取得
    var num = Bingo[Math.floor(Math.random() * Bingo.length)];
    bingoNum = num;
    panel.innerHTML = num;

    // タイマーをセット(関数を繰り返す)
    timers[n] = setTimeout(function() {
        runSlot(n, panel)
    }, 25);
}

btn0.addEventListener('click', function() {
    stopSlot(0, this);
});


/**
 * ストップボタン押下後の処理
 *
 */
function stopSlot (n, btn) {
    btn.className = 'btn inactive';
    // タイマー解除
    clearTimeout(timers[n]);
    // ランダムで選択されたbingoNumをBingoの配列から選定する
    delArrayNum = Bingo.indexOf(bingoNum);
    if (delArrayNum >= 0) {
        // 配列から選定された数字をBingo配列から削除
        Bingo.splice(delArrayNum, 1);
    }

    stopCount ++ ;
    if(stopCount == 1) {
        stopCount = 0;
        // ボタン有効化
        spinButton.className = '';

        // bingoクラスのセレクタに一致するHTML要素を取得
        var bingoDiv = document.querySelectorAll('.bingo');

        // bingoDiv[bingoNum-1].innerHTML;
        bingoDiv[bingoNum-1].className = 'bingo unmatched';
    }
}