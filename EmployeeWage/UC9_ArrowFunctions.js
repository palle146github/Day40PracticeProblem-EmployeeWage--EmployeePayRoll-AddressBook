const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const NUM_OF_WORKING_DAYS = 20;
const MAX_HRS_IN_MONTH = 100;
let empHrs = 0;
let empDailyWageArr = new Array();
let empDailyWageMap = new Map();
let empDailyHrsMap = new Map();
function getWorkingHours(empCheck){
    let workHrs;
    switch(empCheck){
        case IS_PART_TIME:
            workHrs = PART_TIME_HOURS;
            break;
        case IS_FULL_TIME:
            workHrs = FULL_TIME_HOURS;
            break;
            default:
                workHrs = 0;
                break;         
    }
    return workHrs;
}
let totalEmpHrs = 0;
let totalWorkingDays = 0;
function calcDailyWage(empHrs){
    return empHrs * WAGE_PER_HOUR;
}
while(totalEmpHrs <= 100 && totalWorkingDays < NUM_OF_WORKING_DAYS ){
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random() * 10 ) % 3;
    let empHrs = getWorkingHours(empCheck);
    totalEmpHrs += empHrs;
    empDailyWageArr.push(calcDailyWage(empHrs));
    empDailyWageMap.set(totalWorkingDays, calcDailyWage(empHrs));
    empDailyHrsMap.set(totalWorkingDays, empHrs);
}
console.log(empDailyWageMap);
let empWage = calcDailyWage(totalEmpHrs);
console.log("Daily Wages : " + empDailyWageArr.toString());
console.log("UC5 - Total Days : " + totalWorkingDays + " Total Hrs : " + totalEmpHrs + " Emp Wage : " + empWage);
function totalWages(totalWage, dailyWage){
    return totalWage + dailyWage;
}
console.log("UC7 - Emp Wage Map totalHrs : " + Array.from(empDailyWageMap.values()).reduce(totalWages,0));
function findTotal(totalVal, dailyval){
    return totalVal + dailyval;
}
let count = 0;
let totalHours = Array.from(empDailyHrsMap.values()).reduce(findTotal,0);
let totalSalary = empDailyWageArr.filter(dailyWage => dailyWage > 0).reduce(findTotal,0);
console.log("UC9 - Emp Wage with Arrow : " + " Total Hours: " + totalHours + " Total Wages : " + totalSalary);
let nonWorkingDays = new Array();
let partWorkingDays = new Array();
let fullWorkingDays = new Array();
empDailyHrsMap.forEach((value,key) => {
    if ( value == 8) fullWorkingDays.push(key);
    else if( value == 4) partWorkingDays.push(key);
    else nonWorkingDays.push(key);
});
console.log("Full Working Days : " + fullWorkingDays);
console.log("Part Working Days : " + partWorkingDays);
console.log("Non Working Days : " + nonWorkingDays);