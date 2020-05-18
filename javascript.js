//関数
//いくつかの処理をまとめたもの。
//{ }の中にまとめたい処理を書く。「関数を定義する」と呼ぶ。
const greet = function() {
    console.log("こんにちは！");
    console.log("関数を学習していきましょう！");
  };
//上記だけでは関数を呼び出せない。
greet();
//とすると、こんにちは！関数を学習していきましょう！という結果がでる。

//アロー関数
//「function()」の部分を「() =>」と書く。それ以外は変わらない。
// 定数greetにアロー関数を代入してください
const greet = ()=>{
    console.log("こんにちは！");
    
  }
  
  // 定数greetを呼び出してください
  greet();
  
//引数
//関数に与える追加情報.
//引数を受け取る関数を呼び出すには、「定数名(値)」と書く。
const greet = (name) => {
    console.log(`こんにちは、${name}さん`);
  };
  // greetの引数に「ひつじ仙人」を渡して呼び出してください
  greet("ひつじ仙人");

//()の中に受け取る引数をコンマ(,)で区切って並べることで、関数は引数を複数受け取ることもできます。
const add = (number1,number2) => {
    console.log(number1+number2);
  };
  // 引数に5と7を渡して関数を呼び出してください
  add(5,7);


//戻り値
const half = (number) => {
    // numberを2で割った値を戻り値として返してください
    return number/2;
  };
  // 定数resultを定義してください
  const result=half(130);　//=の右が呼び出し部分で、resultに代入される。
  // 「130の半分は〇〇です」となるように出力してください
  console.log(`130の半分は${result}です`);


//if文で使うような条件式をreturnすると、その条件式の結果として得られる真偽値（trueまたはfalse）を返すことができます。
//returnは、戻り値を返すだけでなく、関数の処理を終了させる性質も持っています。よって、returnの後にある関数内の処理は実行されませんので注意しましょう。
const check = (number) => {
    // numberが3の倍数かどうかを戻り値として返してください
    return number%3===0;
  };
  // if文の条件式で、checkを呼び出してください
  if (check(123)) {
    console.log("3の倍数です");
  } else {
    console.log("3の倍数ではありません");
  }

  //関数の引数や、関数内で定義した定数や変数は、その関数の中でしか使うことができません。使用できる範囲のことをスコープと呼びます。
  const name="にんじゃわんこ";

const introduce = (name) => {
  console.log(`わたしは${name}です`);　//→わたしはひつじ仙人です　　スコープ内
};
// 関数introduceを呼び出してください　　　　　　　　　　　　　　　　　
introduce("ひつじ仙人");
// 定数nameの値を出力してください
console.log(name);                    //→にんじゃわんこ　　　　スコープ外


//最大値を求める。まじうざい
//getMax関数は3つの整数を引数に取り、最大値を戻り値とします。
const number1 = 103;
const number2 = 72;
const number3 = 189;
// getMax関数を定義してください
const getMax=(a,b,c)=>{
let max=a;
if(b>max){
  max=b;
}
if(c>max){
  max=c;
}
return max;
};
// 「最大値は○○です」と出力してください
const max=getMax(number1,number2,number3);
console.log(`最大値は${max}です`);


