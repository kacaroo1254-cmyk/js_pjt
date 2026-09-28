// console.log('Hello javascript~');
// console.log('Hello WEB!!');
// alert('추석!');

// 1.변수 정의(선언과 초기화)
// 변수 정의 기본문법 : var 변수
// var myScore까지가 변수선언 단계 
// = 할당연산자 80 데이터, = 80; 변수 초기화 단계
// 전제적인 과정을 변수 정의명 = 데이터;


// var myScore = 80;

// console.log(myScore);

// myScore = 90;
// console.log(myScore);

// myScore = "Hello"
// console.log(myScore);

// myScore = 3.14;
// console.log(myScore);

// myScore = "o"
// console.log(myScore);

// myScore = true;
// console.log(myScore);

// 다이나믹 캐스팅, 오토 캐스팅 > 최적화가 안됨

// 2.변수선언 키워드(var) ES6이후 (let, const)
// var는 쓰면안되지만 보게될 거기때문에 기억하자
// var, let : 일반 변수 선언 키워드
// const: 상수 선언

// let myName = "gildong";
// console.log(myName);

// myName = 50;
// console.log(myName);

// const PI = 3.14;
// console.log(PI);

// PI = 3.13;
// console.log(PI);

// Q1) 변수 myName과 myMajor에 자신의 이름과 전공을 저장하고 출력해보자

let myName = "설재선";
let myMajor = "철도경영학과";
console.log(myName);
console.log(myMajor);
console.log(myName, myMajor)

let intro = 'Hello';
console.log(intro);
intro = '안녕하세요.';
console.log(intro);

// 3. 변수명 규칙
// 3-1. 영문자를 사용한다. 한글로 쓰면 언젠간 크랙이난다 사고발생조심
let gildongAge = 20;
console.log(gildongAge);    // 20

// 3-2. 소문자로 시작한다. 변수는 소문자로 시작하고 나중에 class를 배우는데 class는 대문자로 시작하기 때문
//let money = 100; //권장
//let Money = 100; //권장하지않음

// 3-3. 데이터의 의미를 쉽게 파악할 수 있게 짓는다.
// 길동 플레이어
//let player = "gildong"; //권장
//let p = "gildong";      //권장하지않음
// 점수면 score 위치 location 시간 time 현재시간 current_time
// 이러한 데이터를 변수에 저장하려고 하는데 어떤변수명이 좋을까 (챗지피티)

// 3-4. 두 개 이상의 단어가 조합될 경우 낙타표기법을 따른다.
// 새로운 아이템 new item > newitem //권장하지않음
//                        newItem //권장
// 현재위도값 current location latitude
// currentlocationlatitude  X
// currentLocationLatitude  O

// 3-5. 예약어(키워드)는 변수명으로 사용할 수 없다.
// var, let, const, for, if, else, return 등등등

// 3-6. 언더바(_)를 제외한 특수문자는 사용할 수 없다. 공백 또한 마찬가지
let _score = 100;
let $score = 100;
// _, $ 또한 쓸 일 없다고 생각하자
// let !score = 100;
// let ^^score = 100;
// let -score = 100;

// 3-7. 숫자는 첫 글자는 제외한 나머지 자리에서만 사용한다.
// let 1player = 'gildong'; X
let pla1yer = 'gildong'; // (O)
let player1 = 'gildong'; // (O)


// 4. 데이터 자료형
// 정수형(Integer): 1,100 99, -20, -100, 0
// 실수형(float): 3.14, 0.1, 0.0, -5.129
// 문자열형(String): "Hello", "Hi", "good", ''(비어있는 문자열), " "(공백 문자열)'a'(자바스크립트에서는 문자와 문자열을 구분하지않음)
// 논리형(Boolean): true, false

let currentScore = 100; // 4byte
let currentScore_ = 0.1 // 4byte
let currentScore__ = "100";  //
let currentScore___ = true; //1byte

console.log(typeof(currentScore));
console.log(typeof(currentScore_));
console.log(typeof(currentScore__));
console.log(typeof(currentScore___));