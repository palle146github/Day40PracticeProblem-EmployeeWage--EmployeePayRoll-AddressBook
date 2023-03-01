class EmployeePayRollData{
    id;
    salary; 
    gender;
    startDate;

constructor(...params){
    this.id = params[0];
    this.name = params[1];
    this.salary = params[2];
    this.gender = params[3];
    this.startDate = params[4];
}


get name(){
    return this._name;
}
set name(name){
    let nameRegex = RegExp("^[A-Z]{1}[a-z]{2,}$");
    if(nameRegex.test(name)){
        this._name = name;
    }
    else throw "Name is Incorrect!"; 
}
set id(id){
    let idRegex = RegExp("^[1-9][0-9]*$");
    if(idRegex.test(id)){
        this._id = id;
    }
    else throw "ID is Incorrect!"; 
}
set salary(salary){
    let salaryRegex = RegExp("^[1-9][0-9]*$");
    if(salaryRegex.test(salary)){
        this._salary = salary;
    }
    else throw "Salary is Incorrect!"; 
}
set gender(gender){
    let genderRegex = RegExp("^[MF]$");
    if(genderRegex.test(gender)){
        this._gender = gender;
    }
    else throw "Gender is Incorrect!"; 
}
set date(date){
    let dateRegex = RegExp("^(19|20)\d\d[-](0[1-9]|1[012])[-](0[1-9]|[12][0-9]|3[01])$");
    if (!dateRegex.test(date) || new Date(date) > new Date()) {
        throw new Error("Invalid date");
      }
      else{
        this._date = date;
      }
}

toString(){
    const options = { year : 'numeric' , month: 'long', day: 'numeric'};
    const empDate = this.startDate === undefined ? "undefined" : this.startDate.toLocaleDateString("en-US", options);
    return "id = " + this.id + ", name = " + this.name + ", salary = " + this.salary + ", gender = " + this.gender + " , startDate= " + empDate;
}

}
let employeePayRollData = new EmployeePayRollData(1, "Mark", 30000);
console.log(employeePayRollData.toString());
try{
    employeePayRollData.name = "john";
console.log(employeePayRollData.toString());
}catch(e){
    console.error(e);
}
let date = new Date();
let newemployeePayRollData = new EmployeePayRollData(1, "Terissa", 30000, "F", new Date());
console.log(newemployeePayRollData.toString());
let newemployeePayRollData1 = new EmployeePayRollData(1, "Terissa", 30000, "F",new Date());
console.log(newemployeePayRollData1.toString());


