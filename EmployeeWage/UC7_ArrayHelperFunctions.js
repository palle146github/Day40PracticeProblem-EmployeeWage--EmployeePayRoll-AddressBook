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
let totEmpWage = 0;
function sum(dailyWage){
    totEmpWage += dailyWage;
}
empDailyWageArr.forEach(sum);
console.log("UC7 - Total Days : " + totalWorkingDays + " Total Hrs : " + totalEmpHrs + " Emp Wage : " + totEmpWage);
function totalWages(totalWage, dailyWage){
    return totalWage + dailyWage;
}
console.log("UC7 - Emp Wage with reduce : " + empDailyWageArr.reduce(totalWages,0));
let dailyCntr = 0;
function mapDayWithWage(dailyWage){
    dailyCntr++;
    return dailyCntr + " = " + dailyWage;
}
let mapDayWithWageArr = empDailyWageArr.map(mapDayWithWage);
console.log("UC7B - Daily Wage Map");
console.log(mapDayWithWageArr);
function fulltimeWage(dailyWage){
    return dailyWage.includes("160");
}

let fullDayWageArr = mapDayWithWageArr.filter(fulltimeWage);
console.log("UC7C - Daily Wage Filter When Fulltime Wage Earned");
console.log(fullDayWageArr);
function findFulltimeWage(dailyWage){
    return dailyWage.includes("160");
}
console.log("UC7D - First time Fulltime Wage was earned on Day : " + mapDayWithWageArr.find(findFulltimeWage));
function isAllFulltimeWage(dailyWage){
    return dailyWage.includes("160");
}
console.log("UC7E - Check All Element have Full Time Wage : " + fullDayWageArr.every(isAllFulltimeWage));
function isAnyPartTimeWage(dailyWage){
    return dailyWage.includes("60");
}
console.log("UC7F - Check If Any Part Time Wage : " + mapDayWithWageArr.some(isAnyPartTimeWage));
function totalDaysWorked(numOfDays, dailyWage){
    if(dailyWage > 0){
        return numOfDays + 1;
    }
    return numOfDays;     
}
console.log("UC7G - Number of Days Emp Worked : " + empDailyWageArr.reduce(totalDaysWorked,0));