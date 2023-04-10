function age() {
    let birthDate = document.getElementById("date").value;
    let birthMonth = document.getElementById("month").value;
    let birthYear = document.getElementById("year").value;

    let date = new Date()
    let currentDate = date.getDate();
    let currentMonth = 1 + date.getMonth();
    let currentYear = date.getFullYear();
    const month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

    // year calculation

    let yearAge = currentYear - birthYear;

    // month calculation

    let monthAge = "";

    if (currentMonth >= birthMonth) {
        monthAge = currentMonth - birthMonth
    } else {
        monthAge = 12 + currentMonth - birthMonth
        yearAge = yearAge - 1
    }

    // date calculation

    let dateAge = "";

    if (currentDate >= birthDate) {
        dateAge = currentDate - birthDate;
    } else {
        dateAge = month[monthAge - 1] + currentDate - birthDate;
        monthAge = monthAge - 1;
    }
    
    // alert


    if ((birthDate == "") || (birthMonth == "") || (birthYear == "")) {
        alert("please enter all input fields")
    } else {
        document.getElementById("age").innerHTML = "";
    }

    if (yearAge >= 30) {
        alert ("Sorry! You are ineligible as you are above 30 years old")
    } else {
        alert ("Congratulations! You are eligible")
    }

    document.getElementById("age").innerHTML = `You are ${dateAge} days, ${monthAge} months and ${yearAge} years old`
    
}