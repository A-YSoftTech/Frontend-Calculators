let scrollable_box = document.querySelector(".scroll-container");
let previous = document.getElementById("previous");
let next = document.getElementById("next");

next.addEventListener("click", () => {
    scrollable_box.scrollBy({ top: 0, left: 500, behavior: "smooth" })
})
previous.addEventListener("click", () => {
    scrollable_box.scrollBy({ top: 0, left: -500, behavior: "smooth" })
});

let footer = document.querySelector("#footer");
let contact = document.querySelector("#contact");

contact.addEventListener("click", () => {
    footer.style.backgroundColor = "white";
    setTimeout(function () {
        footer.style.backgroundColor = "transparent";
    }, 200);
});

function calculateBMI() {
    let weight = document.getElementById("weight").value;
    let heightInCm = document.getElementById("height").value;

    if (weight > 0 && heightInCm > 0) {
        let heightInMeters = heightInCm / 100;

        let bmi = weight / (heightInMeters * heightInMeters);

        let category = "";

        if (bmi < 18.5) {
            category = "Underweight";
        } else if (bmi >= 18.5 && bmi < 24.9) {
            category = "Normal weight";
        } else if (bmi >= 25 && bmi < 29.9) {
            category = "Overweight";
        } else {
            category = "Obesity";
        }

        document.getElementById("BMI-result").textContent = bmi.toFixed(2) + " kg/m2";
        document.getElementById("category").textContent = ` Category:  ${category}`;
        document.getElementById("weight").value = "";
        document.getElementById("height").value = "";
    } else {
        document.getElementById("category").textContent = "Please enter valid weight and height values.";
    }
}
function calculateAgeDifference() {
    let birthdate1 = document.getElementById("birthdate1").value;
    let birthdate2 = document.getElementById("birthdate2").value;

    if (!birthdate1 || !birthdate2) {
        document.getElementById("age-difference-result").innerHTML = "Please enter both birthdates.";
        return;
    }
    let date1 = new Date(birthdate1);
    let date2 = new Date(birthdate2);

    let ageDifferenceMillis = Math.abs(date1 - date2);
    let ageDifferenceYears = ageDifferenceMillis / (1000 * 60 * 60 * 24 * 365.25);

    let ageMessage = "";
    if (date1 < date2) {
        ageMessage = "Person A is " + ageDifferenceYears.toFixed(2) + " years younger than Person B.";
    } else if (date1 > date2) {
        ageMessage = "Person A is " + ageDifferenceYears.toFixed(2) + " years older than Person B.";
    } else {
        ageMessage = "Both persons are the same age.";
    }
    document.getElementById("difference").innerHTML = ageDifferenceYears.toFixed(2) + " years";
    document.getElementById("age-difference-result").innerHTML = ageMessage;
    document.getElementById("birthdate1").value = "";
    document.getElementById("birthdate2").value = "";
}
function calculateBodyFat() {
    let waist = document.getElementById("%waist").value;
    let neck = document.getElementById("%neck").value;
    let height = document.getElementById("%height").value;

    if (waist && neck && height) {
        let heightInMeters = height / 100;
        let bodyFatPercentage = (waist - neck) / heightInMeters;

        document.getElementById("body-fat-result").innerHTML =
            "Your Body Fat Percentage is approximately " + bodyFatPercentage.toFixed(2) + "%.";
        document.getElementById("body-percentage").innerHTML = bodyFatPercentage.toFixed(2) + "%";
    } else {
        document.getElementById("body-fat-result").innerHTML = "Please enter all the required values!";
    }
    document.getElementById("%waist").value = "";
    document.getElementById("%neck").value = "";
    document.getElementById("%height").value = "";
}
function calculateCalories() {

    const weight = parseFloat(document.getElementById("calorie-weight").value);
    const height = parseFloat(document.getElementById("calorie-height").value);
    const age = parseInt(document.getElementById("calorie-age").value);
    const gender = document.getElementById("gender").value;
    const activityLevel = parseFloat(document.getElementById("activity").value);

    if (isNaN(weight) || isNaN(height) || isNaN(age) || !gender || isNaN(activityLevel)) {
        document.getElementById("calorie-result").textContent = "Please fill all the fields.";
        return;
    }
    let bmr;

    if (gender === "male") {
        bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    }
    else if (gender === "female") {
        bmr = 10 * weight + 6.25 * height - 5 * age - 161;
    }
    const tdee = bmr * activityLevel;

    document.getElementById("calorie-result").textContent = "Your daily calorie needs approx " + tdee.toFixed(2) + " calories.";
    document.getElementById("calorie-value").textContent = tdee.toFixed(2) + " calories";
    document.getElementById("calorie-weight").value = "";
    document.getElementById("calorie-height").value = "";
    document.getElementById("calorie-age").value = "";
}
function calculateGrowth() {
    let age = parseInt(document.getElementById("child-age").value);
    let height = parseInt(document.getElementById("child-height").value);
    let weight = parseInt(document.getElementById("child-weight").value);

    if (isNaN(age) || isNaN(height) || isNaN(weight) || age <= 0 || height <= 0 || weight <= 0) {
        document.getElementById("child-result").innerHTML = "Please enter valid values for age, height, and weight!";
        return;
    }
    let bmi = weight / ((height / 100) * (height / 100));

    let bmiCategory = "";
    if (bmi < 18.5) {
        bmiCategory = "Underweight";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        bmiCategory = "Healthy Weight";
    } else if (bmi >= 25 && bmi < 29.9) {
        bmiCategory = "Overweight";
    } else {
        bmiCategory = "Obese";
    }

    document.getElementById("child-value").innerHTML = bmi.toFixed(2) + " kg/m2";
    document.getElementById("child-result").innerHTML = "Growth Category : " + bmiCategory + ".";

    document.getElementById("child-age").value = "";
    document.getElementById("child-height").value = "";
    document.getElementById("child-weight").value = "";
}
function calculateDiscount() {
    let originalPrice = document.getElementById("original-price").value;
    let discountPercentage = document.getElementById("discount-percentage").value;

    if (originalPrice && discountPercentage) {
        var discountAmount = (originalPrice * discountPercentage) / 100;
        var discountedPrice = originalPrice - discountAmount;

        document.getElementById("discount-value").innerHTML = "₹ " + discountedPrice.toFixed(2);
        document.getElementById("discount-result").innerHTML = "You save ₹ " + discountAmount.toFixed(2) + " from your original price.";
    } else {
        document.getElementById("discount-result").innerHTML = "Please enter valid values!";
    }
    document.getElementById("original-price").value = "";
    document.getElementById("discount-percentage").value = "";
}
function calculateFuelCost() {

    let distance = parseFloat(document.getElementById("distance").value);
    let efficiency = parseFloat(document.getElementById("efficiency").value);
    let fuelPrice = parseFloat(document.getElementById("fuelPrice").value);

    if (isNaN(distance) || isNaN(efficiency) || isNaN(fuelPrice) || distance <= 0 || efficiency <= 0 || fuelPrice <= 0) {
        document.getElementById("fuel-result").innerHTML = "Please enter valid values for distance, fuel efficiency, and fuel price!";
        return;
    }

    let fuelNeeded = distance / efficiency;
    let totalCost = fuelNeeded * fuelPrice;

    document.getElementById("fuel-value").innerHTML = "₹ " + totalCost.toFixed(2);
    document.getElementById("fuel-result").innerHTML = "Your total cost of fuel for a road trip will be approx ₹ " + totalCost.toFixed(2) + ".";

    document.getElementById("distance").value = "";
    document.getElementById("efficiency").value = "";
    document.getElementById("fuelPrice").value = "";
}
function calculateDateGap() {
    const date1 = document.getElementById("date1").value;
    const date2 = document.getElementById("date2").value;
    if (date1 === "" || date2 === "") {
        document.getElementById("date-difference-result").textContent = "Please select both dates.";
        return;
    }
    const dateObj1 = new Date(date1);
    const dateObj2 = new Date(date2);
    const diffInTime = Math.abs(dateObj2 - dateObj1);
    const diffInDays = Math.floor(diffInTime / (1000 * 3600 * 24));

    document.getElementById("date-difference").textContent = diffInDays + " days";
    document.getElementById("date-difference-result").textContent = `The gap difference between this two dates is ${diffInDays} day(s).`;
    document.getElementById("date1").value = "";
    document.getElementById("date2").value = "";
}
function calculateLoan() {
    let loanAmount = parseFloat(document.getElementById("loanAmount").value);
    let interestRate = parseFloat(document.getElementById("interestRate").value) / 100;
    let loanTerm = parseInt(document.getElementById("loanTerm").value);

    if (loanAmount > 0 && interestRate > 0 && loanTerm > 0) {

        let monthlyRate = interestRate / 12;
        let totalPayments = loanTerm * 12;
        let monthlyPayment = (loanAmount * monthlyRate) / (1 - Math.pow(1 + monthlyRate, - totalPayments));
        let totalRepayment = monthlyPayment * totalPayments;
        let totalInterest = totalRepayment - loanAmount;

        document.getElementById("loan-value").textContent = "₹" + monthlyPayment.toFixed(2);
        document.getElementById("monthlyPayment").textContent = "Monthly Payment: ₹" + monthlyPayment.toFixed(2);
        document.getElementById("totalRepayment").textContent = "Total Repayment: ₹" + totalRepayment.toFixed(2);
        document.getElementById("totalInterest").textContent = "Total Interest: ₹" + totalInterest.toFixed(2);
        document.getElementById("empty").textContent = "";
    } else {
        document.getElementById("monthlyPayment").textContent = "";
        document.getElementById("totalRepayment").textContent = "";
        document.getElementById("totalInterest").textContent = "";
        document.getElementById("empty").textContent = "Please enter all the required fields.";
    }
    document.getElementById("loanAmount").value = "";
    document.getElementById("interestRate").value = "";
    document.getElementById("loanTerm").value = "";
}
function calculateLove() {
    let name1 = document.getElementById("name1").value;
    let name2 = document.getElementById("name2").value;

    if (name1 === "" || name2 === "") {
        document.getElementById("love-message").textContent = "Please enter both names.";
        return;
    }

    name1 = name1.toLowerCase();
    name2 = name2.toLowerCase();

    let lovePercentage = Math.floor(Math.random() * 50) + 50;
    document.getElementById("love-value").textContent = lovePercentage + "%";

    let message = "";
    if (lovePercentage > 80) {
        message = "Wow! You're a perfect match!";
    } else if (lovePercentage > 60) {
        message = "Looking good, lovebirds!";
    } else {
        message = "There's always room for love to grow!";
    }
    document.getElementById("love-message").textContent = message;

    document.getElementById("name1").value = "";
    document.getElementById("name2").value = "";
}
function calculateDueDate() {

    const lmpInput = document.getElementById('lmp').value;

    if (!lmpInput) {
        document.getElementById('dueDate').innerText = 'Please enter the first day of your last menstrual period (LMP).';
        return;
    }

    const lmpDate = new Date(lmpInput);

    const dueDate = new Date(lmpDate);
    dueDate.setDate(lmpDate.getDate() + 280);

    const dueDateString = dueDate.toISOString().split('T')[0];
    document.getElementById('date-value').innerText = dueDateString;
    document.getElementById('dueDate').innerText = `Your estimated due date may be ${dueDateString}`;

    document.getElementById('lmp').value = "";
}
function calculatePercentageChange() {
    let oldNumber = parseFloat(document.getElementById("oldNumber").value);
    let newNumber = parseFloat(document.getElementById("newNumber").value);

    if (isNaN(oldNumber) || isNaN(newNumber) || oldNumber <= 0 || newNumber <= 0) {
        document.getElementById("percentage-result").innerHTML = "Please enter valid values!";
        return;
    }

    let change = newNumber - oldNumber;
    let percentageChange = (change / oldNumber) * 100;

    if (percentageChange > 0) {
        document.getElementById("precent-value").innerHTML = percentageChange.toFixed(2) + "%";
        document.getElementById("percentage-result").innerHTML =
            "Percentage Increase: " + percentageChange.toFixed(2) + "%";
    } else if (percentageChange < 0) {
        document.getElementById("precent-value").innerHTML = Math.abs(percentageChange).toFixed(2) + "%";
        document.getElementById("percentage-result").innerHTML =
            "Percentage Decrease: " + Math.abs(percentageChange).toFixed(2) + "%";
    } else {
        document.getElementById("precent-value").innerHTML = "0%"
        document.getElementById("percentage-result").innerHTML = "No change (0%)";
    }
    document.getElementById("oldNumber").value = "";
    document.getElementById("newNumber").value = "";
}
function calculateTax() {

    const income = parseFloat(document.getElementById("income").value);

    if (isNaN(income) || income <= 0) {
        document.getElementById("tax-result").textContent = "Please enter the valid value!";
        return;
    }

    const taxSlabs = [
        { limit: 250000, rate: 0, rebate: 12500 },
        { limit: 500000, rate: 0.05, rebate: 0 },
        { limit: 1000000, rate: 0.20, rebate: 0 },
        { limit: Infinity, rate: 0.30, rebate: 0 }
    ];

    let taxOwed = 0;
    let previousLimit = 0;

    for (let i = 0; i < taxSlabs.length; i++) {
        const slab = taxSlabs[i];

        if (income > slab.limit) {
            taxOwed += (slab.limit - previousLimit) * slab.rate;
        } else {
            taxOwed += (income - previousLimit) * slab.rate;
            break;
        }
        previousLimit = slab.limit;
    }
    if (income <= 500000) {
        taxOwed = Math.max(taxOwed - 12500, 0);
    }

    let resultMessage = "";
    if (income <= 250000) {
        resultMessage = "You are eligible for no income tax as your income is below ₹2.5 lakh.";
    } else {
        resultMessage = `Your income tax based on your income of ₹${income.toFixed(2)} is ₹${taxOwed.toFixed(2)}.`;
    }

    document.getElementById("tax-value").textContent = taxOwed.toFixed(2);
    document.getElementById("tax-result").textContent = resultMessage;
    document.getElementById("income").value = "";
}
function calculateTip() {
    let billAmount = document.getElementById("bill-amount").value;
    let tipPercentage = document.getElementById("tip-percentage").value;

    if (billAmount && tipPercentage) {
        let tipAmount = (billAmount * tipPercentage) / 100;
        let totalAmount = parseFloat(billAmount) + tipAmount;

        document.getElementById("tip-value").innerHTML = "₹" + tipAmount.toFixed(2);
        document.getElementById("tip-result").innerHTML = "Total Amount (Bill + Tip) : ₹" + totalAmount.toFixed(2) + ".";
    } else {
        document.getElementById("tip-result").innerHTML = "Please enter valid values!";
    }
    document.getElementById("bill-amount").value = "";
    document.getElementById("tip-percentage").value = "";
}
let countdownInterval;
let ageInterval;

function startCalculation() {
    const dob = document.getElementById("dob").value;
    const time = document.getElementById("time").value;

    clearInterval(countdownInterval);
    clearInterval(ageInterval);

    if (!dob || !time) {
        document.getElementById("age-date").innerHTML = "";
        document.getElementById("age-time").innerHTML = "";

        document.getElementById("error-message").innerHTML = `<br>Please select your date and time of birth.`;

        document.getElementById("countdown-date").innerHTML = "";
        document.getElementById("countdown-time").innerHTML = "";
        return;
    }
    document.getElementById("error-message").innerHTML = "";
    const dobParts = dob.split("-");
    const dobYear = parseInt(dobParts[0]);
    const dobMonth = parseInt(dobParts[1]) - 1;
    const dobDay = parseInt(dobParts[2]);

    let dobHour = 0, dobMinute = 0, dobSecond = 0;
    if (time) {
        const timeParts = time.split(":");
        dobHour = parseInt(timeParts[0]);
        dobMinute = parseInt(timeParts[1]);
    }

    ageInterval = setInterval(() => updateRealTimeAge(dobYear, dobMonth, dobDay, dobHour, dobMinute), 1000);

    countdownInterval = setInterval(() => calculateCountdown(dobYear, dobMonth, dobDay, dobHour, dobMinute), 1000);
    document.getElementById("dob").value = "";
    document.getElementById("time").value = "";
}
function updateRealTimeAge(dobYear, dobMonth, dobDay, dobHour, dobMinute) {
    const today = new Date();
    const todayYear = today.getFullYear();
    const todayMonth = today.getMonth();
    const todayDay = today.getDate();
    const todayHour = today.getHours();
    const todayMinute = today.getMinutes();
    const todaySecond = today.getSeconds();

    let ageYear = todayYear - dobYear;
    let ageMonth = todayMonth - dobMonth;
    let ageDay = todayDay - dobDay;
    let ageHour = todayHour - dobHour;
    let ageMinute = todayMinute - dobMinute;
    let ageSecond = todaySecond;

    if (ageMonth < 0) {
        ageMonth += 12;
        ageYear--;
    }
    if (ageDay < 0) {
        const daysInPreviousMonth = new Date(todayYear, todayMonth, 0).getDate();
        ageDay += daysInPreviousMonth;
        ageMonth--;
    }
    if (ageHour < 0) {
        ageHour += 24;
        ageDay--;
    }
    if (ageMinute < 0) {
        ageMinute += 60;
        ageHour--;
    }
    if (ageSecond < 0) {
        ageSecond += 60;
        ageMinute--;
    }

    document.getElementById("age-date").innerHTML = `${ageYear} years, ${ageMonth} months, ${ageDay} days`;
    document.getElementById("age-time").innerHTML = `${ageHour} hours, ${ageMinute} minutes, ${ageSecond} seconds`;
}
function calculateCountdown(dobYear, dobMonth, dobDay, dobHour, dobMinute) {
    const today = new Date();
    let currentYear = today.getFullYear();
    let nextBirthdayYear = currentYear;

    if (today.getMonth() > dobMonth || (today.getMonth() === dobMonth && today.getDate() > dobDay)) {
        nextBirthdayYear++;
    }
    const nextBirthday = new Date(nextBirthdayYear, dobMonth, dobDay, dobHour, dobMinute);
    const diff = nextBirthday - today;

    if (diff <= 0) {
        document.getElementById("countdown-date").innerHTML = "";
        document.getElementById("countdown-time").innerHTML = "";
        clearInterval(countdownInterval);
        return;
    }

    const totalSeconds = Math.floor(diff / 1000);
    const totalMinutes = Math.floor(totalSeconds / 60);
    const totalHours = Math.floor(totalMinutes / 60);
    const totalDays = Math.floor(totalHours / 24);

    const countdownSeconds = totalSeconds % 60;
    const countdownMinutes = totalMinutes % 60;
    const countdownHours = totalHours % 24;

    const countdownYears = Math.floor(totalDays / 365);
    const remainingDaysAfterYears = totalDays % 365;
    const countdownMonths = Math.floor(remainingDaysAfterYears / 30);
    const countdownDays = remainingDaysAfterYears % 30;

    document.getElementById("countdown-date").innerHTML = `${countdownYears} years, ${countdownMonths} months, ${countdownDays} days`;
    document.getElementById("countdown-time").innerHTML = `${countdownHours} hours, ${countdownMinutes} minutes, ${countdownSeconds} seconds`;
}