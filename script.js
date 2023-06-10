   const data = [
    {
      phase: "Maintenance",
      protein: 2.6,
      carb: 2.6,
      fat: 1
    },
    {
      phase: "Week 1 & 2",
      protein: 2.6,
      carb: 2.4,
      fat: 0.9
    },
    {
      phase: "Week 3 & 4",
      protein: 2.6,
      carb: 2.2,
      fat: 0.8
    },
    {
      phase: "Week 5 & 6",
      protein: 2.6,
      carb: 2.0,
      fat: 0.7
    },
    {
      phase: "Week 7 & 8",
      protein: 2.6,
      carb: 1.8,
      fat: 0.6
    },
    {
      phase: "Week 9 & 10",
      protein: 2.6,
      carb: 1.8,
      fat: 0.6
    },
    {
      phase: "Week 11",
      protein: 2.6,
      carb: 1.6,
      fat: 0.4
    },
    {
      phase: "Week 12",
      protein: 2.6,
      carb: 1.4,
      fat: 0.3
    }
   ]

const phaseInput = document.getElementById("phase")
phaseInput.innerHTML = getPhaseElements()

function getPhaseElements() {
  let elements = ""
  data.forEach((index) => {
    elements += `<option value="${index.phase}">${index.phase}</option>`
  })
  return elements
}

document.getElementById('calculator').addEventListener('submit', function(e) {
    e.preventDefault();

  let weightInput = document.getElementById('weight');
  let weight = parseFloat(weightInput.value);
  let phase = document.getElementById('phase').value;

   const macros = {
    protein: 0,
    carbs: 0,
    fat: 0
  }

  calculateMacros(macros, phase, weight)
  const totalCal = calculateCalories(macros)
  const { protein, carbs, fat } = macros
  
   const resultContainer = document.getElementById('results');
   const caloriesContainer = document.getElementById('calories');
   const pcfContainer = document.getElementById('pcf');
   caloriesContainer.innerHTML = 'Total Calories: '+totalCal.toFixed(2)+'calories';
   pcfContainer.innerHTML = 'Protein:' + protein.toFixed(2) + 'g<br>Carbs:' + carbs.toFixed(2) +'g<br>Fat:'+ fat.toFixed(2)+'g';
   resultContainer.classList.remove('hidden');
  });

function calculateMacros(macros, phase, weight) {
  const foundPhase = data.find(object => object.phase === phase)
  macros.protein = foundPhase.protein * weight
  macros.carbs = foundPhase.carb * weight
  macros.fat = foundPhase.fat * weight
}

function calculateCalories(macros) {
  return (macros.protein * 4) + (macros.carbs * 4) + (macros.fat * 9)
}