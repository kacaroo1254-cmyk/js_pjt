/*
    input 이벤트를 감지한다.
    선택한 색상을 가져온다.
    <p>에 현재 색상을 표시한다.
    body의 배경색을 선택한 색으로 변경한다.
    초기화 버튼을 누르면 배경색을 흰색으로 돌린다.
    <p>의 글자도 "현재 색상: #ffffff" 같은 형태로 바꾼다.
*/

let colorPickerEle = document.querySelector('#colorPicker');

let colorPickerValue = colorPickerEle.value;

let colorTextEle = document.querySelector('#colorText');

let colorTextEleText = colorTextEle.textContent;

let resetBtnEle = document.querySelector('#resetBtn');

colorTextEle.textContent = `${colorTextEleText}: ${colorPickerValue}`;

document.addEventListener('input', function(e) {
    if (e.target === colorPickerEle) {
        let changedColorValue = e.target.value;
        colorTextEle.textContent = `${colorTextEleText}: ${changedColorValue}`;

        let bodyEle = document.querySelector('body');
        bodyEle.style.backgroundColor = changedColorValue;
    }
})

document.addEventListener('click', function(e) {
    if (e.target === resetBtnEle) {
        
        colorPickerEle.value = '#ffffff';
        colorTextEle.textContent = `${colorTextEleText}: ${colorPickerEle.value}`;

        let bodyEle = document.querySelector('body');
        bodyEle.style.backgroundColor = '#fff';
    }
})