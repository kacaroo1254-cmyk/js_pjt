// alert('Hello~');

// Object
/* 
JavaScript에서 Object(객체)는 여러 값을 키(key)와 값(value)의 쌍으로 묶어 표현하는
구조입니다.
쉽게 말하면 "관련된 데이터를 하나로 묶어 놓은 것"이라고 생각하면 됩니다.
*/

/*
number(10, 50, 80, 3.14), string("Hello", 'Hi'), boolean(true, false)

기초데이터 타입 vs 레퍼런스 타입 (데이터)
Primitive type vs Reference type
*/

let height  = 188;
let weight = 85;
let name = "gildong";
let age = 50;



console.log('height: ', height); // height: 188
height = 190;
console.log('height: ', height); // height: 190

let friendHeight = height; //깊은 복사
console.log('friendHeight: ', friendHeight); // friendHeight: 190

friendHeight = 200;
console.log('height: ', height); // height: 190
console.log('friendHeight: ', friendHeight); // friendHeight: 200

let man = {
    height: 188,
    weight: 85,
    myName: "gildong",
    age: 50
}

console.log("man: ", man);
/*
    man = {
    height: 188,
    weight: 85,
    myName: "gildong",
    age: 50
    }
*/

let friendMan = man; //얕은 복사
console.log("friendMan: ", friendMan);
/*
    friendMan = {
    height: 188,
    weight: 85,
    myName: "gildong",
    age: 50
    }
*/

friendMan.myName = 'chanho';
console.log("man: ", man);
console.log("friendMan: ", friendMan);
/*
    man = {
    height: 188,
    weight: 85,
    myName: "chanho",
    age: 50
    }
    friendMan = {
    height: 188,
    weight: 85,
    myName: "chanho",
    age: 50
    }
    주소값을 공유하기때문에 같이 변한다. 
    Object 특징: 
        Reference type은 값을 직접가지고 있지 않고 주소값만 가지고 있기 때문에
    https://hoazzinews.tistory.com/113
*/

// 참조 타입을 깊은 복사 방법?
let obj1 = {
    myName: 'gildong'
}

// let obj2 = obj1; //얕은 복사

// 깊은복사 방법
let obj2 = { ...obj1 } //스프레드 연산, 전개연산

obj1.myName = 'chanho'

console.log('obj1:', obj1);     // chanho
console.log('obj2:', obj2);     // gildong


//---------------------------------------------------------------------------------

// Object 사용방법
// 1. Object 선언 방법
let ourClass = {
    className: "1학년 1반",
    classLocation: "4층",
    classStudentConut: 20,
    classTeacherName: "홍길동"
}

// 2. Object 데이터 조회 방법: .(도트접근 연산자) 이용
console.log('classLocation: ', ourClass.classLocation);

// 3. Object 데이터 변경 방법: .(도트접근 연산자) 이용
ourClass.classLocation = "5층";
console.log('classLocation: ', ourClass.classLocation);

// 4. Object 데이터 삭제 방법: delete & .(도트접근 연산자) 이용
delete ourClass.classLocation;
console.log('ourClass: ', ourClass);

// 5. Object의 value에는 모든 데이터 타입이 들어갈 수 있다.*****
let object01 = {
    key1: "abc",
    key2: 100,
    key3: 3.14,
    key4: true,
    key5: {
        key6: 100,
        key7: 3.141592,
        key8: "Hello",
        key9: false,
        key10: [10, 20, 5, {
            key11: "abc"
        }]
    }
}

// Q1 number01과  number02의 값을 바꾸자!(swapping)
let number01 = 10;
let number02 = 20;

console.log('number01: ', number01);        // number01: 10
console.log('number02: ', number02);        // number02: 20

let temp = number01;
number01 = number02;
number02 = temp;

console.log('number01: ', number01);        // number01: 20
console.log('number02: ', number02);        // number02: 10

// 
