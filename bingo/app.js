var panelNum = document.getElementById('panelNum').innerHTML;
// console.log(panelNum);
var panelNum = 10;
// console.log(panelNum);


//とりあえず、view側に20個くらいベタが書きで番号を表示してそこからループに置き換えるようにしよう

// 連番の配列を作成
let Bingo = Array.from(new Array(75)).map((v, i)=> i + 1);

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


