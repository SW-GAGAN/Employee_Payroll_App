//UC-9
class EmployeePayrollData{

    get id(){ return this._id; }
    set id(id){
        this._id=id;
    }

    get name(){ return this._name; }
    set name(name){
        let nameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');
        if( nameRegex.test(name)){
            this._name=name;
        }
        else throw 'Name is Incorrect';  
    }
    
    get profilepic(){ return this._profilepic; }
    set profilepic(profilepic){
        this._profilepic=profilepic;
        console.log(this._profilepic);  
    }

    get gender(){ return this._gender; }
    set gender(gender){
        this._gender=gender;
        console.log(this._gender);
    }
    
    get department(){ return this._department; }
    set department(department){
        this._department=department;
        console.log(this._department);
    }
    
    get salary(){ return this._salary; }
    set salary(salary){
        this._salary=salary;
        console.log(this._salary);
    }

    get note(){ return this._note; }
    set note(note){
        this._note=note;
        console.log(this._note);
    
    }

    get startDate(){ return this._startDate; }
    set startDate(startDate){
        this._startDate=startDate;
        console.log(this._startDate);
    }

    toString(){
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const empDate = !this.startDate ? "undefined" :
                        this.startDate.toLocaleDateString("en-us", options);
        return "id=" +this.id +", name='"+this.name + ", gender='" + this.gender +
                    ", profilepic='" + this.profilepic + ", department='" + this.department +
                    ", salary='" + this.salary + ", startDate='" + empDate + ", note='" + this.note; 
    }
}