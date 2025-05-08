{
//

function formatString(input: string, toUpper?: boolean): string {
    if( toUpper == false ){
       return input.toLowerCase();
    } else {
        return input.toUpperCase();
    }
}

const resultInStringFormat = formatString("Shakil Ahmed", false); 
console.log('resultInStringFormat', resultInStringFormat)


type RatingItem = {
    title: string; 
    rating: number
}

function filterByRating(items: RatingItem[]): RatingItem[] {
    
     const filterItems = items.filter( item => {
       return item.rating >= 4
    });

    return filterItems;
}

const books = [
  { title: "Book A", rating: 4.5 },
  { title: "Book B", rating: 3.2 },
  { title: "Book C", rating: 4.0 },
  { title: "Book D", rating: -5.0 },
  { title: "Book E", rating: 0.0 },
  { title: "Book F", rating: 1 },
];
    
const topRatedBook = filterByRating(books); 
console.log('topRatedBook', topRatedBook);


function concatenateArrays<T>(...arrays: T[][]): T[] {
    return arrays.flat();
}

console.log(concatenateArrays(["a", "b"], ["c"], ['s','a','k','i','l']));     
console.log(concatenateArrays([1, 2], [3, 4], [5,5], [30]));     
console.log(concatenateArrays([{ title: "Book A", rating: 4.5 }, { title: "Book B", rating: 3.2 }], [{ title: "Book C", rating: 4.0 }]));     
console.log(concatenateArrays([true, false], [true, false]));     


class Vehicle {
    private _make: string;
    private _year: number;

    constructor( make: string, year: number){
        this._make = make;
        this._year = year;
    }

    getInfo(){
        console.log(`Make: ${this._make}, Year: ${this._year}`);
    }

}

class Car extends Vehicle{
    private _model:string

    constructor(make: string, year: number, model: string){
        super(make, year);
        this._model = model;
    }

    getModel(){
        console.log(`Model: ${this._model}`)
    }
}


const myCar = new Car("Toyota", 2020, "Corolla");
myCar.getInfo();
myCar.getModel();


function processValue(value: string | number): number{
    if(typeof value === 'string'){

        return value.replace(/\s/g, '').length;
    } else {
       return value * 2;
    }
}

const resultwithStr = processValue("Hi, I'm Shakil Ahmed");
const resultWithNum = processValue(3)
console.log('resultwithStr', resultwithStr)
console.log('resultWithNum', resultWithNum)



interface Product{
    name: string;
    price: number;
}

function getMostExpensiveProduct(products: Product[]): Product | null{
 
    if(products.length != 0){
        let mostExpensive = products[0];
        products.map((product) => {
            if( product.price > mostExpensive.price ){
                mostExpensive = product;
            }
            
        })
        return mostExpensive;
    } else {
        return null;
    }

}

const products = [
      { name: "Pen", price: 1000 },
      { name: "Notebook", price: 250 },
      { name: "Bag", price: 50 }
    ];

const expensiveProduct =  getMostExpensiveProduct(products);
console.log('Most Expensive Product', expensiveProduct);



enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}

function getDayType(day: Day): string{
    if( day === Day.Saturday || day === Day.Sunday ){
        return "Weekend"
    } else {
        return "Weekday"
    }
}

console.log(getDayType(Day.Friday)); 
console.log(getDayType(Day.Sunday));


async function squareAsync(n: number): Promise<number>{
   return new Promise((resolve, reject)=>{
    setTimeout(() => {
        if (n < 0) {
            reject(new Error("Negative number not allowed"));
        } else {
            resolve(n * n);
        }
    }, 1000);
})

}

squareAsync(4).then(console.log);
squareAsync(-3).catch(console.error);

//
}