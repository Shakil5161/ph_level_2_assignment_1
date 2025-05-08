I have chossen these two topic for my blog 1.enums and 2.Interfaces and types?. First of all I want talk about the enums

enums: Why I chose this topic? To be honest, today I learned about the enums during one of my assignments and I searched it in online. I got some various results there. So, what I learn about the enums today, I will write it in this blog. 

enums is a featurs of the TypeScript. It's a short name for enumerations. This feature allows a set of named constants for our code to be more readable and maintainable. There are two types of enums: numeric and string. 

Numeric enum: This enum assigns numbers to the enum members. Such as I have tried to show in my monthly expenses

enum MonthlyExpanse {
    Houserent = 20000,
    Internet = 1500,
    Laundry = 2000,
}

[Note: With the first member defaulting set to 0 and it auto-incrementing. if I don't assign any value]

String enum: On the other hand it assign string values to the enum members and it requirs spacific initilization. 

enum Seasons {
    Summer = "summer",
    Autumn = "autumn",
    Winter = "winter"
}



Interfaces and types: 
Interface is the structure of an object. It helps us to specify the required properties, methods, and their types. Interfaces make it easier to how objects should look and behave in our code. A example below

interface User {
  name: string;
  email: string;
  age: number;
}

const user: User = {
  name: 'Shakil Ahmed',
  email: 'shakiahmed5161@gmail.com',
  age: 27
};

In this example, we define an interface called User that describes the strcuture of a user object. The User interface requires that any object that implements it must have propertie called name, email, and age, and it would be of type string, string, and number.

Types: It is similar to a interface in that it defines the strcuture of an object or a value also the strcuture of a primitive value. such as a number or a string. A example below.

type UserId = string | number;

const userId: UserId = 123;

Now the Differences between Interfaces and Types:

1. Interfaces can extend other interfaces, but types can't.
2. Interfaces can describe objects, but types cannot. 
3. Types can describe primitives, but interfaces cannot.
4. Types can be used to define unions, intersections, and type aliases, while interfaces cannot.