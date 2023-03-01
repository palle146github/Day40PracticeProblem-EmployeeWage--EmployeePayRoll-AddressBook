const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const NUM_OF_WORKING_DAYS = 20;
const MAX_HRS_IN_MONTH = 100;
let empHrs = 0;
let empDailyWageArr = new Array();
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
}

let empWage = calcDailyWage(totalEmpHrs);
console.log("Daily Wages : " + empDailyWageArr.toString());
console.log("UC5 - Total Days : " + totalWorkingDays + " Total Hrs : " + totalEmpHrs + " Emp Wage : " + empWage);