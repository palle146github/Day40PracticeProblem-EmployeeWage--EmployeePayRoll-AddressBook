class EmployeePayRollData{
    id;
    salary; 

constructor(id, name, salary){
    this.id = id;
    this.name = name;
    this.salary = salary;
}

get name(){
    return this._name;
}
set name(name){
    return this._name = name;
}

toString(){
    return "id = " + this.id + ", name = " + this.name + ", salary = " + this.salary;
}
}
let employeePayRollData = new EmployeePayRollData(1, "Mark", 30000);
console.log(employeePayRollData.toString());
employeePayRollData.name = "John";
console.log(employeePayRollData.toString());
