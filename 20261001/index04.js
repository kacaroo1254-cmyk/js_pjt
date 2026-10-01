// Q) 다음의 요구사항을 삼항 연산자(조건식)와 if ~ else문을 이용해서 
// 각각의 프로그램으로 만드시오.
/*
 - 시험 점수를 입력한다.
 - 점수가 85점 이상이면 'success'를 출력하고, 85점 미만이면 'fail'을 출력한다.
*/

// let score = Number(prompt('점수를 입력하세요.'));


// if (score >= 85) {
//     console.log('success');
// } else {
//     console.log('fail');
// }


// score >= 85 
// ? 
// console.log('success') 
// : 
// console.log('fail');

// Q) 어린이의 신장을 입력하면 놀이기구 탑승 여부가 출력되는 프로그램
//  놀이기구 탑승은 신장이 최소 120cm부터 최대 160cm까지 가능

// let height = Number(prompt('신장을 입력하세요.'));
// if (height >= 120 && height <= 160) {
//     console.log('탑승 가능');
// } else {
//     console.log('탑승 불가능');
// }

// Q) 다음의 요구사항을 충족시키는 프로그램을 만드시오.
/*
 - 아침 최저 기온을 입력한다.
 - 오후 최고 기온을 입력한다.
 - 일교차가 10도 이상이면 '감기 조심하세요.'를 출력한다.
 - 오후 최고 기온이 28도 이상이고 일교차가 10도 미만이면 
 '초여름 날씨입니다.'를 출력한다.
*/

// let morningTemperature = Number(prompt('아침 최저 기온'));
// let afternoonTemperature = Number(prompt('오후 최고 기온'));
// let dailyTemperatureRange  = afternoonTemperature - morningTemperature

// if (dailyTemperatureRange >= 10) {
//     console.log('감기 조심하세요.');
// } else if (afternoonTemperature >= 28 && dailyTemperatureRange <10) {
//     console.log('초여름 날씨입니다.');
// }

// Q) 사용자가 입력한 문자 메시지 길이에 따라서 SMS 또는 MMS의 발송을 결정하는 
// 프로그램을 완성하시오
// (단, 메시지 길이가 50 이하면 SMS 발송, 그렇지 않으면 MMS를 발송한다).
// 문자의 길이는 string.length를 이용합니다. ('hello'.length -> 5)

// let text = prompt('문자를 입력하세요.');
// console.log(text.length);

// if (text.length <= 50) {
//     console.log('SMS발송');
// } else {
//     console.log('MMS발송');
// }


// Q) 2~8 사이의 짝수 출력하자!

// for (i = 2; i <= 8; i += 2) {
//     console.log(i);
// }


// Q) 1~10 사이의 정수를 출력하되, 정수가 3의 배수이면 '3의 배수!' 출력하기

// for (i = 1; i <= 10; i++) {
//     if (i % 3 ===0) {
//         console.log(`${i}, 3의 배수!`);
//     } else {
//         console.log(i);
//     }  
// }


// Q)  for문을 이용해서 1~100까지 정수 중에서 3과 7의 공배수와 
// 최소공배수를 출력하시오


// let minNum = 0;
// for (i = 1; i <= 100; i++) {
//     if (i % 3 === 0 && i % 7 === 0) {
//         console.log(i);
//         if (minNum === 0) {
//             minNum = i;
//         }
//     }
// }
// console.log(`최소공배수: ${minNum}`);


// Q) 0~100까지 정수 중 3과 8의 공배수와 최소공배수 출력하기

// let minNum = 0;
// for (i = 0; i <= 100; i++) {
//     if (i % 3 === 0 && i % 8 === 0) {
//         console.log(i);
//         if (minNum === 0) {
//             minNum = i;
//         }
//     }
// }
// console.log(`최소공배수: ${minNum}`);


// Q)369 게임 만들기
/*
친구들끼리 많이 하는 369 게임을 만들어 봅시다.
1부터 99까지 1씩 증가하면서 숫자에 3, 6, 9가 들어 있을 때마다
숫자와 함께 '짝!' 을 출력합니다. 
*/

// for (i = 1; i <= 99; i++) {
//     if (i < 10) {
//         let str = ''; 
//         if (i % 3 === 0)
//             str = '짝!';
//         console.log(`일의자리수: ${i} :: ${str}`);
//     } else {
//         let firstNum = parseInt(i/10);  // 십의자리수
//         let secondNum = i % 10; // 일의자리수
//         str = '';
//         if (firstNum % 3 === 0)
//             str += '짝!';
//         if (secondNum % 3 === 0 && secondNum !== 0)
//             str += '짝!';
//         console.log(`십의자리수: ${firstNum}, 일의자리수: ${secondNum}  :: ${str}`);
//     }
// }


// Q) 열차 교차 시간 알아내기
/*
대전역에는 3개 노선의 열차가 오전 9시부터 오후 6시까지 교차 운행한다.
3대의 열차가 교차하는 시간을 구해 열차 충돌 사고를 막으세요.
(단 매일 오전 9시에 대전역에서 모든 열차가 출발한다.)
A열차 첫차(오전 9시) 막차(오후 6시)    운행간격(10분)
B열차 첫차(오전 9시) 막차(오후 6시)  운행간격(25분)
C열라 첫차(오전 9시) 막차(오후 6시)  운행간격(30분)
*/

// let aTrain = 10;
// let bTrain = 25;
// let cTrain = 30;

// for (i = 1; i <= 540; i++) {
//     let clashTime = `${9 + parseInt(i/60)}시 ${i % 60}분`;

//     if (i % aTrain === 0 && i % bTrain === 0 && i %cTrain === 0) {
//         console.log(`ABC 충돌 시간 ${clashTime}`)
//     } else if (i % aTrain === 0 && i % bTrain === 0) {
//         console.log(`AB 충돌 시간 ${clashTime}`)
//     } else if (i % aTrain === 0 && i % cTrain === 0) {
//         console.log(`AC 충돌 시간 ${clashTime}`)
//     } else if (i % bTrain === 0 && i % cTrain === 0) {
//         console.log(`BC 충돌 시간 ${clashTime}`)
//     }
// }