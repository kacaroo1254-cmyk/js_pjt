// 제어문(반복문, 조건문)
// 반복문 (for문, while문)
// for문: 횟수에 의한 반복 실행
// while문: 조건에 의한 반복 실행


/*
for(초기화; 조건식; 단계) {
    반복 실행문
}
*/

// for(let i = 1; i < 11; i++) {
//     console.log('hello', i);
// }

// // 1부터 10까지의 정수의 합
// var sum = 0;
// for(let i = 1; i <= 10; i++) {
//     sum += i;
// }
// console.log(`sum: ${sum}`);     //55

// 1부터 n까지의 정수의 합을 구하는 알고리즘을 서술하시오. (코테 시험)
// (n + 1)(n / 2)


// Q) 1~10 까지의 정수의 합을 구하되, 홀수의 합만 구하자!
// var sum = 0;
// for(let i = 1; i <= 10; i += 2) {
//     sum += i
// }
// console.log(`sum: ${sum}`);

// Q) 사용자가 원하는 구구단을 입력하면 해당 구구단이 출력된다. 7 -> 7단 출력
// let userInputNumber = Number(prompt('원하는 구구단 입력'));
// for(let i = 1; i <= 9; i++) {
//     console.log(`${userInputNumber} * ${i} = ${userInputNumber * i}`)
// }

// Q) 1단부터 9단까지 전제 구구단을 출력하는 프로그램을 만들어보자!
// let n = 1;
// for(let i =1; i<= 8; i++) {
//     n += 1
//     for(let i = 1; i <= 9; i++) {
//         console.log(`${n} * ${i} = ${n * i}`)
//     }
// }

// 리팩토링-
// for(let n =1; n<= 9; n++) {
//     for(let i = 1; i <= 9; i++) {
//         console.log(`${n} * ${i} = ${n * i}`)
//     }
// }
// 중첩반복문 주의점 3번만들어가도 cpu부하가 걸리기 쉽다


// 가로로
// for (i = 1; i < 10; i++) {
//     console.log(
//         `1 * ${i} = ${1 * i}\t`, 
//         `2 * ${i} = ${2 * i}\t`, 
//         `3 * ${i} = ${3 * i}\t`, 
//         `4 * ${i} = ${4 * i}\t`, 
//         `5 * ${i} = ${5 * i}\t`,
//         `6 * ${i} = ${6 * i}\t`,
//         `7 * ${i} = ${7 * i}\t`,
//         `8 * ${i} = ${8 * i}\t`,
//         `9 * ${i} = ${9 * i}\t`
//     )
// }


// for (let i = 1; i < 10; i++) {
//     let result = '';
//     for (let j = 2; j < 10; j++) {
//         // result += j + '*' + i + '=' + (j * i);
//         result += `${j} * ${i} = ${j*i} \t`
//     }
//     console.log(result);
// }

// 20260930
// for ... in 문
// let myInfo ={
//     myName: 'gildong',
//     myAge : 20,
//     myAddr : '대전',
//     myPhone : '010-1234-5678'
// }
// for (let info in myInfo) {
//     console.log(`info: ${info}`);
//     console.log(`${myInfo[info]}`);   // myInfo[myAddr]
// }

// for(초기값; 조건식; 단계)

// while문
// while(조건식) {
//  반복실행문
// }

// 무한루프조심!!!!
// let i = 1;
// while(i < 11) {
//     console.log(`i: ${i}`);     // 1 2 3 ... 10
//     i++;
// }

// console.log(`i out: ${i}`);     // 11

// do{ } while(조건식)문 : 최초1회는 무조건 시작하는 반복문
// let j = 1;
// do {
//     console.log(`j: ${j}`);
//     j++;
// } while(j > 100);               // j: 1

