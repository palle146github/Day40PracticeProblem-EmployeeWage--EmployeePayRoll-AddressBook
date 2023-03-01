const NODE_ENV = process.env.NODE_ENV;
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
let empDailyHrsAndWageArr = new Array();
while(totalEmpHrs <= 100 && totalWorkingDays < NUM_OF_WORKING_DAYS ){
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random() * 10 ) % 3;
    let empHrs = getWorkingHours(empCheck);
    totalEmpHrs += empHrs;
    empDailyWageArr.push(calcDailyWage(empHrs));
    empDailyWageMap.set(totalWorkingDays, calcDailyWage(empHrs));
    empDailyHrsMap.set(totalWorkingDays, empHrs);
    empDailyHrsAndWageArr.push(
        {
            dayNum:totalWorkingDays,
            dailyHours:empHrs,
            dailyWage:calcDailyWage(empHrs),
            toString(){
                return "\n Day " + this.dayNum + " => Working Hours is " + this.dailyHours + " And Wage Earned = " + this.dailyWage
            },
        }
    );
}
console.log("UC10 Showing Daily Hours Worked and Wage Earned : " + empDailyHrsAndWageArr);
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
let totalWagesa = empDailyHrsAndWageArr.filter(dailyHrsAndWage => dailyHrsAndWage.dailyWage > 0).reduce((totalWage,dailyHrsAndWage) => totalWage += dailyHrsAndWage.dailyWage,0);
let totalHoursa = empDailyHrsAndWageArr.filter(dailyHrsAndWage => dailyHrsAndWage.dailyHours > 0).reduce((totalHours, dailyHrsAndWage) => totalHours += dailyHrsAndWage.dailyHours,0);
console.log("UC 11A Total Hours : " + totalHoursa + "Total Wages : " + totalWagesa);
/*
process.stdout.write("UC 11B LOgging Full Work Days")
empDailyHrsAndWageArr.filter(dailyHrsAndWage => dailyHrsAndWage.dailyHours == 8).forEach(dailyHrsAndWage => process.stdout.write(dailyHrsAndWage.toString()));*/
let partWorkingDaysStrArr = empDailyHrsAndWageArr.filter(dailyHrsAndWage => dailyHrsAndWage.dailyHours ==4).map( dailyHrsAndWage => dailyHrsAndWage.toString());
console.log("\nUC 11C Part Working Days String : " + partWorkingDaysStrArr);
let nonWorkingDayNums = empDailyHrsAndWageArr.filter(dailyHrsAndWage => dailyHrsAndWage.dailyHours == 0).map( dailyHrsAndWage => dailyHrsAndWage.dayNum);
console.log("\nUC 11D Non Working Days String : " + nonWorkingDayNums);