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

// Switch case for work hours
function getWorkHours(employeeType) {
    const hoursWorked = [0, 4, 8]; // Absent (0), Part-Time (4), Full-Time (8)
    let workHours = 0;

    switch (employeeType) {
        case 0: // Absent
            workHours = hoursWorked[0];
            break;
        case 1: // Part-Time
            workHours = hoursWorked[1];
            break;
        case 2: // Full-Time
            workHours = hoursWorked[2];
            break;
        default:
            console.log("Invalid employee type");
            break;
    }
    return workHours;
}