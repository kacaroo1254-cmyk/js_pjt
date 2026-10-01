// Q) 전기 요금 계산기
/*
전기를 많이 사용하면 누진세가 붙어 단가와 기본요금이 올라갑니다.
다음 누진제가 적용된 단가표를 참고하여 전기 사용량을 입력하면 
전기료가 출력되는 프로그램을 만들어봅시다.

-------------------------------------------------------
사용량(kwh)   200이하     201초과 ~ 400이하      400초과
단가(원)        99.3                187.9       280.6
기본요금         910                 1600        7300
-------------------------------------------------------

전기 사용량을 입력하세요. 190
사용량 : 190.0 kwh
기본요금 : 910 원
단가 : 99.3 원
전기 요금 : 19777.0 

*/


// let usingElc = Number(prompt('전기 사용량을 입력하세요'));

// if (usingElc <= 200) {
//     console.log(`사용량: ${usingElc}`);
//     console.log(`기본요금: 910원`);
//     console.log(`단가: 99.3원`);
//     console.log(`전기요금: ${910 + (99.3 * usingElc)}`);
// } else if (usingElc <= 400) {
//     console.log(`사용량: ${usingElc}`);
//     console.log(`기본요금: 1600원`);
//     console.log(`단가: 187.9원`);
//     console.log(`전기요금: ${1600 + (187.9* usingElc)}`);
// } else {
//     console.log(`사용량: ${usingElc}`);
//     console.log(`기본요금: 7300원`);
//     console.log(`단가: 280.6원`);
//     console.log(`전기요금: ${7300 + (280.6 * usingElc)}`);
// }



let usingElc = Number(prompt('전기 사용량을 입력하세요'));

let basicPrice = 0;     // 기본요금
let unitPrice = 0;      // 단가
let totalPrice = 0;     // 전기요금

if (usingElc <= 200) {
    basicPrice = 910;
    unitPrice = 99.3;
    console.log(`사용량: ${usingElc}`);
    console.log(`기본요금: ${basicPrice}원`);
    console.log(`단가: ${unitPrice}원`);
    console.log(`전기요금: ${basicPrice + (unitPrice * usingElc)}`);
} else if (usingElc <= 400) {
    basicPrice = 1600;
    unitPrice = 187.9;
    console.log(`사용량: ${usingElc}`);
    console.log(`기본요금: ${basicPrice}원`);
    console.log(`단가: ${unitPrice}원`);
    console.log(`전기요금: ${basicPrice + (unitPrice * usingElc)}`);
} else {
    basicPrice = 7300;
    unitPrice = 280.6;
    console.log(`사용량: ${usingElc}`);
    console.log(`기본요금: ${basicPrice}원`);
    console.log(`단가: ${unitPrice}원`);
    console.log(`전기요금: ${basicPrice + (unitPrice * usingElc)}`);
}