//an abstract class is a class that cannot be instantiated and serves as a blueprint for other classes.
//It can contain both fully implemented methods and abstract methods (methods without implementation).
// Abstract methods must be implemented in any subclass that extends the abstract class.

type Holidays = {
  date: Date;
  reason: string;
}[];

abstract class Department {
  protected abstract holidays: Holidays; // every class should have implementation of this because it is abstract

  protected constructor(protected name: string) {}

  public addHolidays(holidays: Holidays) { 
    if (Array.isArray(holidays)) {
      for (const holiday of holidays) {
        this.holidays.push(holiday);
      }
    }
  }
  // now this is the defination of printholiday methhod which is abstarct, and must be implemented in child class
  public abstract printHolidays(): void;

}

class ItDepartment extends Department {
  protected holidays: Holidays = [];
  constructor() {
    super("IT Department");
  }
  public printHolidays(){  // method overriding, same method from parent class with same signature but diff implementation
    if (this.holidays.length === 0){
        return console.log('No Holidays')
    }
    
        console.log(`Here is list of holidays for ${this.name} `)
        this.holidays.forEach((holiday, index)=>{
            console.log(`${index + 1}. ${holiday.reason}, ${holiday.date}`)
        })
    
  }
}

class AdminDepartment extends Department {
  protected holidays: Holidays = [];
  constructor() {
    super("Admin Department");
  }
  public printHolidays(){  // method overriding, same method from parent class with same signature but diff implementation
    if (this.holidays.length === 0){
        return console.log('No Holidays')
    }
    
        console.log(`Here is list of holidays for ${this.name} `)
        this.holidays.forEach((holiday, index)=>{
            console.log(`${index + 1}. ${holiday.reason}, ${holiday.date}`)
        })
    
  }
}

// const test: ItDepartment = new ItDepartment( 'test') // if constrcuot in base class is public then we can instantiate the child class we dont want that

const itHolidays: Holidays = [
  { date: new Date(2022, 12, 25), reason: "IT Department day" },
  { date: new Date(2022, 1, 12), reason: "Chrismas" }
];

const adminHolidays: Holidays = [
    { date: new Date(2022, 5, 5), reason: "admin Department day" },
    { date: new Date(2022, 1, 12), reason: "Chrismassss" }
];
  
const itDepartment: ItDepartment = new ItDepartment() // name is given by consturie super
const adminDepartment: AdminDepartment = new AdminDepartment()
itDepartment.addHolidays(itHolidays)
adminDepartment.addHolidays(adminHolidays)
itDepartment.printHolidays()
adminDepartment.printHolidays()

// console.log(itDepartment) // we are using printholiday method now
// console.log(adminDepartment)