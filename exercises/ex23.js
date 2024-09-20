/*
const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

Write a loop under each comment in the file.
Under the first, write a while loop that prints out each item of ingredients.
Under the second, write a for loop that does the same thing.
And under the third, write any loop, while or for that prints out each item of ingredients but backwards (that is, the first should be "bananas" and the last "eggs").
*/
const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];
//write a while loop that prints out each item of ingredients.
i = 0;
while(i < ingredients.length){
    console.log(ingredients[i])
    i+=1
}
console.log("List-1")
//write a for loop that does the same thing.
for(let i = 0; i < ingredients.length; i++){
    console.log(ingredients[i])
}
console.log("List-2")
//the third, write any loop, while or for that prints out each item of ingredients but backwards 
//(that is, the first should be "bananas" and the last "eggs").
for(i = ingredients.length-1;  0 <= i; i--){
    console.log(ingredients[i])
}