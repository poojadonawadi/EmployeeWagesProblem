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

// Calculating daily, part-time, and monthly wages
function calculateWages(wagesPerHour) {
    const MAX_WORK_DAYS = 20;
    let totalWages = 0;
    let totalDaysWorked = 0;

    for (let day = 1; day <= MAX_WORK_DAYS; day++) {
        const attendance = checkAttendance(); // Check if employee is present
        if (attendance === 1) {
            const employeeType = Math.floor(Math.random() * 3); // Randomly assign type: 0 (absent), 1 (part-time), 2 (full-time)
            const workHours = getWorkHours(employeeType);

            if (workHours > 0) { // Ensure employee worked
                const dailyWage = dailyWages(wagesPerHour, workHours);
                totalWages += dailyWage;
                totalDaysWorked++;

                //console.log(`Day ${day}: Employee is present, Type: ${employeeType === 1 ? "Part-Time" : "Full-Time"}, Worked ${workHours} hours, Earned ${dailyWage}`);
                console.log(`Day ${day}: Employee is present`);
                console.log(`Type: ${employeeType === 1 ? "Part-Time" : "Full-Time"}`);
                console.log(`Worked ${workHours} hours, Earned ${dailyWage}`)
            } else {
                console.log(`Day ${day}: Employee is absent`);
            }
        } else {
            console.log(`Day ${day}: Employee is absent`);
        }
        console.log("----------------------------------------------");
    }

    //console.log(`\nSummary for the Month:`);
    console.log(`Total days worked: ${totalDaysWorked}`);
    console.log(`Total wages for the month: ${totalWages}`);
}