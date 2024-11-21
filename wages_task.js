//Welcome Employee
console.log("Welcome to employee wage computation program");

// Attendance checking
function checkAttendance() {
    const attendance = Math.random();
    return attendance > 0.2 ? 1 : 0; // 1 indicates present, 0 indicates absent
}

// Calculation of daily wages
function dailyWages(wagesPerHour, numberOfHours) {
    return wagesPerHour * numberOfHours;
}
