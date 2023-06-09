   document.getElementById('calculator').addEventListener('submit', function(e) {
    e.preventDefault(); // dude that prevent default made me cry

  var weightInput = document.getElementById('weight');
  var weight = parseFloat(weightInput.value);
  var week = document.getElementById('week').value;
    // this part took me 3h to make :(
// its tooks me 5 videos with indian guys in it, to get it done, and i still dont know if this is going to work. never used this case, switch and break before 
   var protein,carbs, fat;
   
if (week === 'maintenace') {
  protein = 2.6 * weight;
  carbs = 2.6 * weight;
  fat = weight;
} else if (week === 'week1') {
  protein = 2.6 * weight;
  carbs = 2.4 * weight;
  fat = 0.8 * weight;
} else if (week === 'week3') {
  protein = 2.6 * weight;
  carbs = 2.2 * weight;
  fat = 0.7 * weight;
} else if (week === 'week5') {
  protein = 2.6 * weight;
  carbs = 2.0 * weight;
  fat = 0.6 * weight;
} else if (week === 'week7') {
  protein = 2.6 * weight;
  carbs = 1.8 * weight;
  fat = 0.6 * weight;
} else if (week === 'week9') {
  protein = 2.6 * weight;
  carbs = 1.6 * weight;
  fat = 0.4 * weight;
} else if (week === 'week11') {
  protein = 2.6 * weight;
  carbs = 1.6 * weight;
  fat = 0.4 * weight;
} else if (week === 'week12') {
  protein = 2.6 * weight;
  carbs = 1.4 * weight;
  fat = 0.3 * weight;
}
  //  Thats is going to be my final calculation
   var proteinCal = protein * 4 ;
   var carbsCal = carbs * 4 ;
   var fatCal = fat * 9;
   var totalCal = proteinCal + carbsCal + fatCal;

   var resultContainer = document.getElementById('results');
   var caloriesContainer = document.getElementById('calories');
   var pcfContainer = document.getElementById('pcf');

   caloriesContainer.innerHTML = 'Total Calories: '+totalCal.toFixed(2)+'calories';
   pcfContainer.innerHTML = 'Protein:' + protein.toFixed(2) + 'g, Carbs:' + carbs.toFixed(2) +'g, Fat:'+ fat.toFixed(2)+'g'; // chat gpt helpt me on that one

   resultContainer.classList.remove('hidden');
  });