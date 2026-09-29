// 5. 비교연산자
// !=: 같지않다

// Q) 범퍼카 탑승 가능 판별하기
// 놀이동산에서 범퍼카는 신장이 120cm 이상인 어린이만 탑승할 수 있습니다.
// 신장을 입력하면 범퍼카를 탑승할 수 있는지 여부를 알려주는 프로그램을 만들어보자
// (탑승 가능은 true로, 탑승 불가능은 false로 출력한다.)

// let height = Number(prompt('어린이의 신장을 입력하세요. '));
// console.log(`탑승가능 여부: ${height >= 120}`);

// // 비연산자 && 피연산자: 두 개 다 true여야지 true 하나라도 false면 false
// // 120cm 이상이고 180cm 미만 탑승가능하다면
// console.log(`탑승가능 여부: ${height >= 120 && height < 180}`);


// Q)
// let num1 = 5;
// let num2 = 8;

// console.log(num1 != num2);      // true
// console.log(num1 == num2);      // false
// console.log(num1 > num2);       // false
// console.log(num1 >= num2);      // false
// console.log(num1 < num2);       // true
// console.log(num1 <= num2);      // true

// // ==, != VS ===, !==

// console.log(`${5 == '5'}`)      // true 근본이없어서 데이터 타입비교를안함ㅇㅇ (javascript에서지양해야함)
// console.log(`${5 === '5'}`)     // false 데이터타입까지 비교 (javascript에서지향해야함)

// console.log(`${5 != '6'}`)      // true
// console.log(`${5 !== '6'}`)     // true


// 논리연산자 &&(and), ||(or), !(not)
// &&(and): 둘 다 true 여야지 true
// : true && true = true
// : true && false = false
// : false && true = false
// : false && false = false

// ||(or): 하나라도 true면 true
// : true || true = true
// : true || false = true
// : false || true = true
// : false || false = false

// !(not): 현재 상태를 부정
// : !true => false
// : !false => true
// : !!false => false

// Q) 컴퓨터하고 홀/짝 게임해보자!

// let random = Math.random();     // 난수 발생(0.0 ~ 1.0)
// // console.log(`random ${random}`);

// random = parseInt(random * 100);
// // console.log(`random ${random}`);

// let = userSelectedNumber = Number(prompt('1.짝        2.홀'));

// console.log(`WIN: ${(random % 2 === 0) && userSelectedNumber === 1}`);      // o
// console.log(`WIN: ${(random % 2 !== 0) && userSelectedNumber === 2}`);      // o

// console.log(`LOSE: ${(random % 2 === 0) && userSelectedNumber === 2}`);      // x
// console.log(`LOSE: ${(random % 2 !== 0) && userSelectedNumber === 1}`);      // x

// console.log(`random: ${random}`);
// console.log(`userSelectedNumber: ${userSelectedNumber}`);

// Q) (10 > -10) && (3.14 > 0) ||(-1 === 0)
//      true && true || false
//          true || false
//              true
// console.log(`${(10 > -10) && (3.14 > 0) ||(-1 === 0)}`);    // true

// Q) 다음 지문을 읽고 밑줄 친 부분에 맞는 코드를 완성하시오.
//    사무실 냉/난방기는 실내온도가 16도 이하 또는 28도 초과 시 작동한다.
//    temperature <=(16) (||) temperature > (28)


// (자동)증감 연산자
// let score = 80;
// console.log(`score: ${score}`);     // 80

// // score = score + 1;
// // score += 1;
// score++;
// console.log(`score: ${score}`);     // 81
// score--;
// console.log(`score: ${score}`);     // 80

// let myScore = 90;
// console.log(`myScore: ${myScore}`);     // 90

// let result = ++myScore;
// console.log(`result: ${result}`);       // 91

// let result = myScore++;
// console.log(`result: ${result}`);       // 90
// console.log(`myScore: ${myScore}`);     // 91
// 연산자 우선순위로 = 증감하기전에 할당을 해버리기 때문에 위의 예시는 되지않음
// 앞에 붙이면 전위 연산자 뒤에 붙이면 후위 연산자


// // 삼항(조건식) 연산자: 3개의항을 사용하는 연산자, 조건 ? 값1 : 값2 ****
// let resultVar = (5 > 1) ? '5는 1보다 크다.' : '5는 1보다 크지않다.';
// console.log(`resultVar: ${resultVar}`);      // 5는 1보다 크다.
// // 조건의 결과가 true이면 ? 뒤의 결과가 할당
// // 조건의 결과가 false이면 : 뒤의 결과가 할당 

// Q) 사용자가 시험 점수를 입력하고, 점수가 80이상이면 '합격' 그렇지 않으면 '불합격'을 출력하자!

// let exampleScore = prompt('본인 시험 점수 입력: ');
// let resultMessage = Number(exampleScore) >= 80 ? '합격' : '불합격'
// console.log(`resultMessage: ${resultMessage}`);

// // 120cm 이상이고 180cm 미만 탑승가능하다면
// let childHeight = prompt('어린이 신장 입력: ');
// let msg = Number(childHeight) >= 120 && Number(childHeight) < 180 ? '탑승 가능' : '집에가!' 
// console.log(`msg: ${msg}`);

// // Q) DW 마트는 수입과 지출을 입력하면 흑자인지 적자인지 판별하는 프로그램을 도입하려고 한다.
// //    마트 수익 결과를 알려주는 프로그램을 만들어봅시다.
// let income = Number(prompt('수입을 입력하세요.'));
// let cost = Number(prompt('지출을 입력하세요.'));
// let profit = Number(income) > Number(cost) ? '흑자' : '적자';
// console.log(`profit: ${profit}`);
