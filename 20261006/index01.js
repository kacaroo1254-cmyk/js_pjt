document.addEventListener('DOMContentLoaded', function(){
    console.log('DOCUMENT READY!!');

    let inputEle = document.querySelector('#colorPicker');
    let inputEleValue = inputEle.value;

    let colorTextEle = document.querySelector('#colorText');
    let colorTextEleText = colorTextEle.textContent;

    colorTextEle.textContent = `${colorTextEleText}: ${inputEleValue}`;

    // inputEle.addEventListener('input', function(event) {

    //     console.log(event.target);

    //     let changedColorValue = event.target.value;

    //     colorTextEle.textContent = `${colorTextEleText}: ${changedColorValue}`;

    //     let bodyEle = document.querySelector('body');
    //     bodyEle.style.backgroundColor = changedColorValue

    // })

    document.addEventListener('input', function(e) {
        if (e.target === inputEle) {
            let changedColorValue = e.target.value;
            colorTextEle.textContent = `${colorTextEleText}: ${changedColorValue}`;

            let bodyEle = document.querySelector('body');
            bodyEle.style.backgroundColor = changedColorValue;
        }
    })

})