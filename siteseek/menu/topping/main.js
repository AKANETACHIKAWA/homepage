function check() {
  const IDx = document.getElementById('IDx');
  console.log(IDx);
  if (IDx.checked)
    {
    console.log(IDx.checked);
    window.location.href = '../sauce/index.html';
    return false;
  } else {
    return false;  //送信ボタン本来の動作をキャンセルします
  }
}
