// 조건문(if, switch)
// if문, if ~ else문, if ~ else if문

// if문
// if (조건식) {
//      실행문
// }

// if (10 > 5) {
//     console.log(`10은 5보다 크다!`);
// }

// if ~ else문: 양자 택일
// 만약 시험 점수가 80이상이면 '합격'을 출력
// 그렇지 않으면 '불합격'을 출력

// let score = 70;
// if (score >=80) {
//     console.log('합격');
// }

// if (score < 80) {
//     console.log('불합격');
// }

// if (score >=80) {
//     console.log('합격');
// } else {
//     console.log('불합격');
// }

// if ~ else if문: 다중 선택
// 점수가 
// 90이상이면 'A',
// 80이상 90미만 'B',
// 70이상 80미만 'C',
// 60이상 70미만 'D' 라면

// let score = 90;
// 90이상
// if (score >= 90) {
//     console.log('A');
// }
// // 80이상
// if (score >= 80 && score < 90) {
//     console.log('B');
// } 
// // 70이상
// if (score >= 70 && score < 80) {
//     console.log('C');
// } 
// // 60이상 
// if (score >= 60 && score < 70) {
//     console.log('D');
// } 

// let score = 40;
// if (score >= 90) {
//     console.log('A');
// } else if (score >= 80) {
//     console.log('B');
// } else if (score >= 70) {
//     console.log('C');
// } else if (score >= 60) {
//     console.log('D');
// } else {
//     console.log('F');
// }
// // 순서가 바뀌면 논리적인 오류가 발생할 수 있음 주의!


// switch문
// switch(값) {
//     case 경우1:
//         break;
//     case 경우2:
//         break;
//     case 경우3:
//         break;
// }

let now = new Date();
console.log(`now: ${now}`);

let year = now.getFullYear();   // 2026
let month = now.getMonth();     // 8(0월부터시작 11월끝)
let date = now.getDate();
let day = now.getDay();         // 0(일요일), 1(월요일), ... , 6(토요일)

console.log(`year: ${year}`);
console.log(`month: ${month}`);
console.log(`date: ${date}`);
console.log(`day: ${day}`);

let dayString = '';
switch (day) {
    case 1:
        console.log('월');
        dayString = '월';
        break;
    case 2:
        console.log('화');
        dayString = '화';
        break;
    case 3:
        console.log('수');
        dayString = '수';
        break;
    case 4:
        console.log('목');
        dayString = '목';
        break;
    case 5:
        console.log('금');
        dayString = '금';
        break;
    case 6:
        console.log('토');
        dayString = '토';
        break;
    case 0:
        console.log('일');
        dayString = '일';
        break;

    default:
        console.log('모르겠어요.');
        break;
}

// 오늘 날짜 출력
console.log(`${year}년 ${month+1}월 ${date}일 ${dayString}요일`);

