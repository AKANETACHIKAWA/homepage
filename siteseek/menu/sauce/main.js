function check() {
  if (code_form.code.value != "バクガイ" &&
    code_form.code.value != "ばくがい" &&
    code_form.code.value != "爆買い"
  ){
    //条件に一致する場合(コードが間違っている場合)
    alert("クーポンコードが間違っています"); //エラーメッセージを出力
    return false;    //送信ボタン本来の動作をキャンセルします
  }else{
    //条件に一致しない場合(バクガイが入力されている場合)
    window.location.href = '../dessert/index.html';
    return false;
  }
}