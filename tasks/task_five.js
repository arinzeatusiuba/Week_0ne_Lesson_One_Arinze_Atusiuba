const individual = {
    name: 'Arinze',
    age: 25,
    location: 'Awka'
  }
  
  console.log(individual.name); //  returns "Arinze"
  console.log(individual.age); //  returns 25
  console.log(individual.location); //  returns "Awka"
  
  individual.gender = 'male';
  console.log(individual); //  returns { name: 'Arinze', age: 25, location: 'Awka', gender: 'male' } (added gender)
  
  individual.location = 'Enugu';
  console.log(individual); //  returns { name: 'Arinze', age: 25, location: 'Enugu', gender: 'male' } (updated location)
  