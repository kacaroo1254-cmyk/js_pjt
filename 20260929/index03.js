// // Q) 사용자가 입력한 숫자가 10보다 큰지 아닌지 출력해보자!
// let userNumber = Number(prompt('숫자를 입력하세요'));
// if (userNumber > 10) {
//     console.log('크네요.')
// } else if (userNumber === 10) {
//     console.log('같네요.')
// } else {
//     console.log('작네요.')
// }

// Q) 속도위반 경고하기
/*
    제한 속도가 50km/h인 도로에서 속도위반을 하는 자동차에 경고를 하는
    프로그램을 만들자
    사용자한테 자동차 속도를 입력받는다.
    자동차 속도가 50km/h를 초과하면 '경고'를 출력한다.
*/

// let speed = Number(prompt('자동차 속도를 입력하세요.'));
// if (speed > 50) {
//     console.log('경고!')
// }

// Q) '합격' or '불합격'
/*
   사용자가 입력한 점수가 80점 이상이면 '합격입니다.'를 출력하고.
   80점 미만이면 '아쉽습니다. 다시 도전해 주세요.'를 출력한다.
*/

// let score = Number(prompt('점수를 입력하세요.'));
// if (score >= 80) {
//     console.log('합격입니다.');
// } else {
//     console.log('아쉽습니다. 다시 도전해 주세요.');
// }


// Q) 자동 주문 시스템 만들기
/*
    다국어를 지원하는 식당에서 사용할 자동 주문 시스템을 만들고자 한다.
    1번을 누르면 한국어로, 2번을 누르면 영어로, 3번을누르면 중국어로,
    그 외 번호는 영오로 주문을 받는 프로그램을 만들어봅시다.
    1번: 주문하시겠어요?
    2번: Would you like to order?
    3번: 수세ㅜ세
*/

// let userLanguageNumber = Number(prompt('1.한국어 2.English 3.中文'))
// switch (userLanguageNumber) {
//     case 1:
//         console.log('주문하시겠어요?');
//         break;
//     case 2:
//         console.log('Would you like to order??');
//         break;
//     case 3:
//         console.log('您要点菜吗？');
//         break;
//     default:
//         console.log('The number was entered incorrectly.');
//         break;
// }

// Q) 국가재난지원금 수령액 조회하기
/*
    다음은 가구 인원수에 따른 국가재난지원금 수령액을 안내하는 프로그램입니다.
    표를 참고하여 프로그램을 만들어봅시다.
    1인가구: 400,000원
    2인가구: 600,000원
    3인가구: 800,000원
    4인가구 이상: 1,000,000원
*/

// let userFamilyNumber = Number(prompt('가구인원 수를 적어주세요.'));
// if (userFamilyNumber >= 4) {
//     console.log('1,000,000원');
// } else if (userFamilyNumber ===3) {
//     console.log('800,000원');
// } else if (userFamilyNumber ===2) {
//     console.log('600,000원');
// } else if (userFamilyNumber ===1) {
//     console.log('400,000원');
// } else {
//     console.log('잘못 입력했습니다.');
// }

// Q) BMI 지수 출력하기
/*
    사용자가 몸무게와 신장을 입력하면 BMI지수와 비만 상태를 출력하는
    프로그램을 만들자

    BMI = 몸무게 / 키의제곱
    18.5미만: 저체중
    18.5 ~ 22.9: 정상
    23 ~ 29.9: 비만 1단계
    30 ~ 34.9: 비만 2단계
    35.0 ` : 비만 3단계
*/

// let userWeight = Number(prompt('몸무게를 입력하세요.(kg)'));
// let userHeight = Number(prompt('키를 입력하세요.(cm)'));
// let bmi = userWeight / (userHeight/100) ** 2;
// console.log(bmi);
// if (bmi < 18.5) {
//     console.log('저체중입니다.');
// } else if (bmi < 23) {
//     console.log('정상입니다.');
// } else if (bmi < 30) {
//     console.log('비만 1단계입니다.');
// } else if (bmi < 35) {
//     console.log('비만 2단계입니다.');
// } else {
//     console.log('비만 3단계입니다.');
// }


// Q) 정수 판별하기
/*
    사용자가 입력한 정수에 대해서 '음수, 0, 양수'를 판단하고 출력한 후 양수라면 홀수
    인지 짝인지 출력하자
*/
// let usrerInputInteger = Number(prompt('숫자를 입력해주세요'));
// if (usrerInputInteger > 0) {
//     console.log('양수입니다');
//     if (usrerInputInteger % 2 ===0) {
//         console.log('짝수입니다.');
//     } else {
//         console.log('홀수입니다.');
//     }
// } else if(usrerInputInteger < 0) {
//     console.log('음수입니다');
// } else {
//     console.log('0입니다.');
// }


// Q) 버스 전용차로 단속 프로그램
/*
    다음 요구사항을 참고하여 버스 전용차로 단속 프로그램을 만들어봅시다.
    -버스 전용차로에 버스가 아닌 승용차가 주행할 경우 단속한다.
    -단 토요일 및 공휴일은 단속하지 않는다.

    요일을 입력 받자!
    평일이라면 차종(버스, 승용차) 입력!
    차종이 승용차라면 단속! 그렇지 않으면 통과
*/

// let day = Number(prompt('요일을 입력하세요. 1.월 2.화 3.수 4.목. 5.금 6.토 7.일'));
// if (day < 6) {
//     console.log(day);
//     let car = Number(prompt('차종을 입력하세요 1.버스 2.승용차'));
//         if (car === 1) {
//             console.log('단속 대상이 아닙니다.');
//         } else {
//             console.log('단속 대상입니다.');
//         }
// } else {
//     console.log('단속 대상이 아닙니다.');
// }


// Q) 공적마스크 구매 프로그램
/*
출생연도 끝자리(endBirthYear)와 나이(age)를 입력하면
다음 요구사항에 맞춰 마스크 구매 가능한 요일을 출력하는 프로그램을 만드시오.
 - 공적마스크 판매 관련해서 출생연도 끝자리를 이용한 5부제를 다음과 같이 실시한다.
    1,6: 월요일 구매 가능
    2,7: 화요일 구매 가능
    3,8: 수요일 구매 가능
    4,9: 목요일 구매 가능
    5,0: 금요일 구매 가능
 - 만 65이상 어르신은 언제든지 구매 가능하다.
*/

// let endBirthYear = Number(prompt('출생연도 끝자리 입력: '));
// let age = Number(prompt('나이 입력: '))

// if (age < 65) {
//     // 출생연도
//     if (endBirthYear === 1 || endBirthYear === 6) {
//         console.log('월요일 구매 가능!!');
//     } else if (endBirthYear === 2 || endBirthYear === 7) {
//         console.log('화요일 구매 가능!!');
//     } else if (endBirthYear === 3 || endBirthYear === 8) {
//         console.log('수요일 구매 가능!!');
//     } else if (endBirthYear === 4 || endBirthYear === 9) {
//         console.log('목요일 구매 가능!!');
//     } else if (endBirthYear === 5 || endBirthYear === 0) {
//         console.log('금요일 구매 가능!!');
//     }
// } else {
//     alert('언제든지 구매 가능합니다.')
// }