var jsonData = require('./studentJson.json');
var studentJson = jsonData.Full;
class Student{
    constructor(id, firstName, lastName,city,state,gender,studentStatus,major,country,age,sat,grade,height){
        let newObj = {
            ID:this.SetId(id), 
            FirstName:this.SetFirstName(firstName) , 
            LastName:this.SetLastName(lastName),
            City:this.SetCity(city),
            State:this.SetState(state),
            Gender:this.SetGender(gender),
            StudentStatus:this.SetStudentStatus(studentStatus),
            Major:this.SetMajor(major),
            Country:this.SetCountry(country),
            Age:this.SetAge(age),
            SAT:this.SetSAT(sat),
            Grade:this.SetGrade(grade),
            Height:this.SetHeight(height)

        }
        studentJson.push(newObj);
    }
    SetId(id){
     if(id !== "0" || id !=="")
     this.ID=id;
    }
    SetFirstName(firstname){
        if(firstname !== "0" || firstname !=="")
        this.FirstName=firstname;
       }
       SetLastName(lastname){
        if(lastname !== "0" || lastname =="")
        this.LastName=lastname;
       }
       SetCity(city){
        if(city !== "0" || city !=="")
        this.City=city;
       }
       SetState(state){
        if(state !== "0" || state !=="")
        this.State=state;
       }
       SetGender(gender){
        if(gender !== "0" || gender!=="")
        this.Gender=gender;
       }
       SetStudentStatus(studentStatus){
        if( studentStatus !== "0" || studentStatus !=="")
        this.StudentStatus=studentStatus;
       }
       SetMajor(major){
        if(major !== "0" || major !=="")
        this.Major=major;
       }
       SetCountry(country){
        if(country !== "0" || country !=="")
        this.Country=country;
       }
       SetAge(age){
        if(age !== "0" || age !=="")
        this.Age=age;
       }
       SetSAT(sat){
        if(sat !== "0" || sat !=="")
        this.SAT=sat;
       }
       SetGrade(grade){
        if(grade !== "0" || grade !=="")
        this.Grade=grade;
       }
       SetHeight(height){
        if(height !== "0" || height !=="")
        this.Height=height;
       }

    addStudent(id, firstName, lastName,city,state,gender,studentStatus,major,country,age,sat,grade,height){
        let newObj = {
            ID:id, 
            FirstName: firstName, 
            LastName: lastName,
            City:city,
            State:state,
            Gender:gender,
            studentStatus:studentStatus,
            major:major,
            Country:country,
            Age:age,
            SAT:sat,
            Grade:grade,
            Height:height
        }
        studentJson.push(newObj);
    }
    updateStudent(currentID, Id, firstName, lastName,city,state,gender,studentStatus,major,country,age,sat,grade,height){
        var currentObj = studentJson.find(x=>x.ID == currentID);
 
        currentObj.ID = Id;
        currentObj.FirstName = firstName;
        currentObj.LastName = lastName;
        currentObj.City=city,
        currentObj.State=state,
        currentObj.Gender=gender,
        currentObj.StudentStatus=studentStatus,
        currentObj.Majormajor=major,
        currentObj.Country=country,
        currentObj.Age=age,
        currentObj.SAT=sat,
        currentObj.Grade=grade,
        currentObj.Height=height
    }
    deleteStudent(stdID){
       // var currentObj = studentJson.filter(object=>{ return object.id !=currentID});
       var deleteobj=studentJson.indexOf(stdID)
        studentJson.splice(deleteobj,1);
        console.log(`${stdID} : Remove From Object`)
    }
    printAllData(){
        for (const obj of studentJson) {
            console.log(obj);
        }
    }
}
let std = new Student("200", "ABC", "XYZ");
//std.printAllData();
//std.updateStudent(1, 100, "First Name", "Last Name");
std.deleteStudent('19');
std.printAllData();
