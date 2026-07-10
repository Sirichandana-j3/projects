function calculateAge() {
    let dob = document.getElementById("dob").value;

    if (!dob) {
        document.getElementById("result").innerText = "Please select your date of birth";
        return;
    }

    let birthDate = new Date(dob);
    let today = new Date();

    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    // Adjust if days are negative
    if (days < 0) {
        months--;
        let lastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
        days += lastMonth.getDate();
    }

    // Adjust if months are negative
    if (months < 0) {
        years--;
        months += 12;
    }

    document.getElementById("result").innerText =
        `Age: ${years} Years, ${months} Months, ${days} Days`;
}