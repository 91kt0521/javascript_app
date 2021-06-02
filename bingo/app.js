var panelNum = document.getElementById('panelNum').innerHTML;
// console.log(panelNum);
var panelNum = 10;
// console.log(panelNum);


//とりあえず、view側に20個くらいベタが書きで番号を表示してそこからループに置き換えるようにしよう

// 連番の配列を作成
let Bingo = Array.from(new Array(75)).map((v, i)=> i + 1);

var renderBingo = function (){
    // 連番の配列から要素を取り出し変数にまとめる
    Bingo.forEach(function(elem, index){
        // ID属性を取得
        var result_element = document.getElementById('result');

        //新しい要素を作成
        var result_num_element = document.createElement('div');
        result_num_element.className = 'bingo';
        result_num_element.textContent = elem;

        // 指定した要素の末尾に新要素を挿入する
        result_element.appendChild(result_num_element);

        // console.log(elem);
        // console.log(index+=1);
    });
}
// 呼び出し
renderBingo();


