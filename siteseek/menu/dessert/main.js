//1.全選択チェックボックスを押下した際に呼ばれるcheckAll()
function checkAll() {
	//1-1.カレーライス、餃子、チキン南蛮を取得
	let boxes = document.getElementsByName("cookie");
	//1-2.全選択を取得
	let checkBoxAll = document.getElementById("all");
	//1-3.カレーライス、餃子、チキン南蛮のチェックを全選択チェックボックスと同じ状態にする
	for (var i = 0; i < boxes.length; i++) {
		boxes[i].checked = checkBoxAll.checked;
	}

  change();
}

//2.カレーライス、餃子、チキン南蛮のチェックボックスを押下した際に呼ばれる
function checkControl() {
	//2-1.カレーライス、餃子、チキン南蛮を取得
	let boxes = document.getElementsByName("cookie");
	//2-2.全選択を取得
	let checkBoxAll = document.getElementById("all");
	//2-3.カレーライス、餃子、チキン南蛮のチェックが入っている時、全選択のチェックを入れ、
	//    逆にカレーライス、餃子、チキン南蛮のどれかしらのチェックが外れている場合は全選択のチェックを外す。
	if (checkBoxAll.checked) {
		//2-3-1.全選択チェックボックスにチェックが入っている場合
		//      全選択チェックボックスのチェックを外す
		checkBoxAll.checked = false;
	} else if (!checkBoxAll.checked) {
		//2-3-2.全選択チェックボックスにチェックが入っていない場合
		//      一旦全選択チェックボックスのチェックを入れる
		checkBoxAll.checked = true;
		for (var i = 0; i < boxes.length; i++) {
			if (!boxes[i].checked) {
				//2-3-3.「カレーライス」、「餃子」、「チキン南蛮」のどれかしらのチェックが入っていなければ
				//      2-3-2で入れた全選択チェックボックスのチェックを外す
				checkBoxAll.checked = false;
			}
		}
	}

  change();
}


function change() {
  if  ((document.getElementById("check1").checked)
    && (document.getElementById("check2").checked) 
    && (document.getElementById("check3").checked) 
    && (document.getElementById("check4").checked) 
    && (document.getElementById("check5").checked)) 
  {
    document.getElementById("check-btn").disabled = false;
  } else {
    document.getElementById("check-btn").disabled = true;
  }
}