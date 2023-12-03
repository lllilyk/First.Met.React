// tagged template literal
// 문자열과 expression을 tag function의 파라미터로 넣어 호출한 결과를 받게 됨

const name = '부산';
const region = '서울';

function myTagFunction(strings, nameExp, regionExp){
    let str0 = strings[0];
    let str1 = strings[1];
    let str2 = strings[2];

    //template literal을 사용하여 리턴
    return `${str0}${nameExp}${str1}${regionExp}${str2}`;
}

const output = myTagFunction `제 이름은 ${name}이고, 사는 곳은 ${region}입니다.`;

console.log(output);