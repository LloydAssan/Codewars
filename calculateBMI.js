//8 kyu
//Calculate BMI

function bmi (weight, height){

let bmi = (weight/height**2)

  if (bmi <= 18.5) return 'Underweight'
  if (bmi <= 25) return 'Normal'
  if (bmi <= 30) return 'Overweight'

  return 'Obese'

  }
