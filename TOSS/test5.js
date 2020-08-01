function getAge(birthDate, nowDate) {
    const day = nowDate.toString().replace(/-/g, '').replace(/:/g, '').replace(/ /g, '')
    const birth = birthDate.toString().replace(/-/g, '').replace(/:/g, '').replace(/ /g, '')

    const dayy = day.substr(0, 4);
    const daymd = day.substr(4, 4);
    const daytime = day.substr(8, 4);

    const birthdayy = birth.substr(0, 4);
    const birthdaymd = birth.substr(4, 4);
    const birthdaytime = birth.substr(8, 4);

    const age = Number(daymd < birthdaymd ? dayy - birthdayy - 1 : dayy - birthdayy)
    const koreaAge = Number(dayy - birthdayy + 1)
    return `만 ${age}세, 한국나이 ${koreaAge}세`;
}
function calcAge(birth) {                 

    var date = new Date();
    console.log(date)
    var year = date.getFullYear();
    var month = (date.getMonth() + 1);

    var day = '20200831'

    if (month < 10) month = '0' + month;
    if (day < 10) day = '0' + day;
    var monthDay = month + day;

    console.log(birth)
    birth = birth.replace('-', '').replace('-', '');
    var birthdayy = birth.substr(0, 4);
    var birthdaymd = birth.substr(4, 4);
 
    var age = monthDay < birthdaymd ? year - birthdayy - 1 : year - birthdayy;
    return age;

}
const birthDate = '1993-12-27 00:00:00'
const nowDate = '2020-08-31 00:00:00'

// console.log(calcAge('19930801'))
console.log(getAge(birthDate,nowDate))
console.log(getAge(birthDate,nowDate).length)