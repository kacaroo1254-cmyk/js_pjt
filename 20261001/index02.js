// Q) 생존율 출력 프로그램
/*
다음 표는 심장 정지 환자에게 자동 심장 충격기를 사용했을 때 
최초로 시행한 시간에 따른 환자의 생존율을 나타냅니다.
표를 보고 장비를 사용하기까지 걸린 시간을 입력하면 
생존율이 출력되는 프로그램을 만들어봅시다.

--------------------------------------------------------------------
시간    |  60초  |  120초  |  180초  |  240초  |  300초  |  300초 초과
생존율  |   85%  |   76%   |    66%  |   57%  |    47%  |   25% 미만
--------------------------------------------------------------------
*/

let aedTime = Number(prompt('시간을 입력'));
if (aedTime < 60) {
    console.log('생존율 85%');
} else if (aedTime < 120) {
    console.log('생존율 76%');
} else if (aedTime < 180) {
    console.log('생존율 66%');
} else if (aedTime < 240) {
    console.log('생존율 57%');
} else if (aedTime < 300) {
    console.log('생존율 47%');
} else {
    console.log('생존율 25% 미만');
}

// switch (aedTime) {
//     case (aedTime < 60):
//         console.log('생존율 85%');
//         break;
//     case (aedTime < 120 && aedTime <= 60):
//         console.log('생존율 85%');
//         break;
//     case (aedTime < 180 && aedTime <= 120):
//         console.log('생존율 85%');
//         break;
//     case (aedTime < 240 && aedTime <= 180):
//         console.log('생존율 85%');
//         break;
//     case (aedTime < 300 && aedTime <= 240):
//         console.log('생존율 85%');
//         break;
//     case (aedTime > 300):
//         console.log('생존율 85%');
//         break;
// }