function age() {
    let birthDate = document.getElementById('date').value;
    let birthMonth = document.getElementById('month').value;
    let birthYear = document.getElementById('year').value;

    birthDate = parseInt(birthDate);
    birthMonth = parseInt(birthMonth);
    birthYear = parseInt(birthYear);

    if (birthDate > 31 || birthDate < 1 && birthMonth > 12 || birthMonth < 1 && birthYear > 2023) {
        alert('enter valid date')
    } else if (birthDate > 28 && birthMonth === 2) {
        alert('enter valid date')

    } else if (birthDate > 30 && birthMonth === 4 || birthMonth === 6 || birthMonth === 9 || birthMonth === 11) {
        alert('enter valid date')
    } else if (birthDate === '' || birthMonth === '' || birthYear === '') {
        alert('enter valid date')
    } else {
    let date = new Date();

    let currentDate = date.getDate();
    let currentMonth = 1 + date.getMonth();
    let currentYear = date.getFullYear();

    const month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    let ageYear = currentYear - birthYear;


    let ageMonth = '';

    if (currentMonth >= birthMonth) {
        ageMonth = currentMonth - birthMonth
    } else {
        ageMonth = currentMonth - birthMonth + 12
        ageYear = ageYear - 1
    }




    let ageDate = '';


    if (currentDate >= birthDate) {
        ageDate = currentDate - birthDate

    } else {
        ageDate = birthDate - currentDate + month[ageMonth - 1]
        ageMonth = ageMonth - 1
    }

    if (ageYear >= 27) {
        alert('You are too old, nothing for you EJE')
    } else {
        alert('Congratulations, You are elegible')
    }


    document.getElementById('yourAge').innerHTML = `You are ${ageYear} year, ${ageMonth} month, ${ageDate} days old`

}
}
