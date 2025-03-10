// Example if function overloading
// JavaScritp functions as Dynamic in natrue they can accept different arguments and based on that return results
// Here is an example of the same
// Show the slice method signature to show optional params
const str = "Hello, World!";
const part1 = str.slice(7);
const part2 = str.slice(7, 10);
// See this returns a different result and its up to you how you invoke the function
// Whether you use single argument or two JS functions are Dynamic to return results
// based on the arguments passed to the function
console.log(part1);
console.log(part2);

// What if we hd to struictly type such function overloads?
// Hypothtical AirTicket Reservation System
type Reservation = {
  departureDate: Date;
  returnDate?: Date;
  departingFrom: string;
  destination: string;
};

// Declare a call signature
// type Reserve = (
//   departureDate: Date,
//   returnDate: Date,
//   departingFrom: string,
//   destination: string
// ) => Reservation;

// Using a more explicit syntax for call signatures
// This is considered as an object with keys as function params
type Reserve = {
  (departureDate: Date, returnDate: Date, departingFrom: string, destination: string):
    | Reservation
    | never;
  (departureDate: Date, departingFrom: string, destination: string): Reservation | never;
};

const reserve: Reserve = (
  departureDate: Date,
  returnDateOrDepartingFrom: Date | string,
  departingFromOrDestination: string,
  destination?: string
) => {
  if (returnDateOrDepartingFrom instanceof Date && destination) {
    return {
      departureDate: departureDate,
      returnDate: returnDateOrDepartingFrom,
      departingFrom: departingFromOrDestination,
      destination: destination,
    };
  } else if (typeof returnDateOrDepartingFrom === "string") {
    return {
      departureDate: departureDate,
      departingFrom: returnDateOrDepartingFrom,
      destination: departingFromOrDestination,
    };
  }
  throw new Error("Please provide valid details to reserve a ticket");
};

// Try making a reservation
console.log(reserve(new Date(), new Date(), "New York", "Washington"));
console.log(reserve(new Date(), "New York", "Washington"));