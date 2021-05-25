const quiz = [
    {
        question: 'ゲーム市場、最も売れたゲーム機は次の内どれ?',
        answers: ['スーパーファミコン', 'プレーステーション', 'ニンテンドースイッチ', 'ニンテンドーDS'],
        correct: 'ニンテンドーDS'
    },
    {
        question: '糸井重里が企画に関わった、任天堂の看板ゲームはどれ？',
        answers: ['MOTHER2', 'スーパーマリオブラザーズ2', 'スーパードンキーコング', '星のカービィー'],
        correct: 'MOTHER2'
    },
    {
        question: 'ファイナルファンタジーⅣの主人公の名前はどれ？',
        answers: ['フリオニール', 'クラウド', 'ティーダ', 'セシル'],
        correct: 'セシル'
    }
];

const $window = window;
const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;


// HTMLのオブジェクトを変数に代入する際は変数に$をつける
const setupQuiz = () => {
    document.getElementById('js-question').textContent = quiz[quizIndex].question;

    let buttonIndex = 0;
    while (buttonIndex < buttonLength) {
        $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
        buttonIndex++;
    }
}

setupQuiz();

const clickHandler = (e) => {
    // eはEventのオブジェクト
    if (quiz[quizIndex].correct === e.target.textContent) {
        $window.alert('正解');
        score++;
    } else {
        $window.alert('不正解');
    }

    quizIndex++;
    if (quizLength > quizIndex) {
        setupQuiz();
    } else {
        $window.alert('終了!あなたの正解数は' + score + '/' + quizLength + 'です。');
    }
}

let handlerIndex = 0;
while (handlerIndex < buttonLength) {
        // ボタンがクリックされたら正誤判定
    $button[handlerIndex].addEventListener('click', (e) => {
        clickHandler(e);
    });
    handlerIndex++;
}