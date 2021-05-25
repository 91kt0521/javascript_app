
let test = ' Hello World!'

let inoki = ['イーチ','にーい','さーん','だー'];

// ループ文
let index = 0;
while(index < inoki.length) {
    // 繰り返し処理
    console.log(inoki[index])
    index++;
}

// if/else
if (inoki.length > 5) {
    console.log('ぼんばいえ!')
} else {
    console.log('iiiiiiii')
}


// 関数
const t = (arg) => {

    if (inoki.length > arg) {
            console.log('ぼんばいえ!')
    } else {
        console.log('iiiiiiii')
    }
}

// オブジェクト(データの塊)
const test2 = {
    color: 'pink',
    size: 'large',
    purfume: 'mint',
    go :() => {
    console.log('Hello World!!')
}
}
// window.alert('test')
console.log(document.getElementsByTagName('button')[0].addEventListener('click', ()=> {
    // 命令を書く
    window.alert('押されたのでアラート')
}))