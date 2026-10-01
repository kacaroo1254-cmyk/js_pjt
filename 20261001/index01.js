let today = new Date();
let date = today.getDate();
console.log(`오늘 날짜: ${date}`);
// let date = Number(prompt('날짜를 입력'));
let carNumber = Number(prompt('차량 번호 입력'));
if (date % 2 === 0) {
    // if (carNumber % 2 === 0) {
    //     console.log('귀하의 차량은 입차가 가능합니다.')
    // } else {
    //     console.log('귀하의 차량은 입차가 불가능합니다.')
    // }
    // 삼항(조건식) 연산자 (? :)
    // date % 2 === 0 
    // ? 
    // console.log('귀하의 차량은 입차가 가능합니다.') 
    // : 
    // console.log('귀하의 차량은 입차가 불가능합니다.')
    let resultStr = carNumber % 2 === 0
    ?
    '입차가능'
    :
    '입차불가';
    alert(resultStr);
} else {
    if (carNumber % 2 === 0) {
        console.log('귀하의 차량은 입차가 불가능합니다.')
    } else {
        console.log('귀하의 차량은 입차가 가능합니다.')
    }
}

