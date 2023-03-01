const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const NUM_OF_WORKING_DAYS = 20;
const MAX_HRS_IN_MONTH = 100;
let empHrs = 0;
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
for( let day = 0; day < NUM_OF_WORKING_DAYS; day++){
    let empCheck = Math.floor(Math.random()*10)%3;
    empHrs+=getWorkingHours(empCheck);
}
let empWage = empHrs * WAGE_PER_HOUR;
console.log("Emp Wage : " + empWage)