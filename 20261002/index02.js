// 매개변수
// function printHello(name, age, addr) {         // name = '길동'; age = 20;
//     console.log(`${name}(${age})님 안녕하세요. 주소: ${addr}`);
// }

// printHello('찬호', 20, '대전');

// 매개변수 - 가변인자
/*
    학교에서 선생님의 요구: 우리반 총 학생 3명의 시험점수 총합과 평균을 구하는 프로그램을 개발해주세요.
*/

// function printTotalAndAverageScore(student1, student2, student3) {
//     let totalScore = student1 + student2 + student3;
//     let averageScore = totalScore / 3;
//     console.log(`총점: ${totalScore}`);
//     console.log(`평점: ${averageScore}`);
// }

// printTotalAndAverageScore(80, 90, 100);

// // 4명으로 늘어나면
// function printTotalAndAverageScore(student1, student2, student3 + student4) {
//     let totalScore = student1 + student2 + student3 + student4; 
//     let averageScore = totalScore / 4;
//     console.log(`총점: ${totalScore}`);
//     console.log(`평점: ${averageScore}`);
// }

// printTotalAndAverageScore(80, 90, 100, 80);

// 그래서 이렇게함

// function printTotalAndAverageScore(className, ...student) {        // let student = [80, 90, 100, 70]
//     console.log(`student; ${student}`);
//     console.log(`학급번호: ${className}`);
//     let totalScore = '';
//     for (let i = 0; i < student.length; i++) {
//         console.log(student[i]);
//         totalScore += student[i];
//     }
//     let averageScore = totalScore / student.length;

//     /*
//     let totalScore = student1 + student2 + student3;
//     let averageScore = totalScore / 3;
//     console.log(`총점: ${totalScore}`);
//     console.log(`평점: ${averageScore}`);
//     */
// }
// // 가변인자는 무조건 매개변수 맨뒤에 위치해 있어야함

// printTotalAndAverageScore('3학년 3반', 80, 90, 100);

// function setDates() {
//     className
// }

