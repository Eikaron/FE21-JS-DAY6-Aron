const swich = JSON.parse(sandwiches);
const fry = JSON.parse(fries);

console.log(swich);

document.getElementById("result").innerHTML = `My favourite sandwich is a ${swich.sandwich} which has approx. ${swich.calories} calories, along with it I enjoy eating ${fry.fries_size}, which have about ${fry.calories} calories.`;