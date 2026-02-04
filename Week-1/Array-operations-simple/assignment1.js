/*Assignment 1: Daily Temperature Analyzer
----------------------------------------
Scenario : You are analyzing daily temperatures recorded by a weather app.

Test data:
const temperatures = [32, 35, 28, 40, 38, 30, 42];

Tasks:
    1. filter() temperatures above 35
    2. map() to convert all temperatures from Celsius → Fahrenheit
    3. reduce() to calculate average temperature
    4. find() first temperature above 40
    5. findIndex() of temperature 28
*/


const temperatures = [32, 35, 28, 40, 38, 30, 42];
let res1=temperatures.filter(element=>element>35)
console.log(res1)

let res2=temperatures.map(element=>element*9/5+32)
console.log(res2)

let res3=temperatures.reduce((acc,ele)=>acc+ele)
console.log(res3/temperatures.length)

let res4=temperatures.find(ele=>ele>40)
console.log(res4)

let res5=temperatures.findIndex(ele=>ele===28)
console.log(res5)