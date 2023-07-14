const name = 'Arinze'
let result = name
console.log(result) // Output: "Arinze"

const fullName = 'Arinze ' + 'Atusiuba'
result = fullName
console.log(result) // Output: 'Arinze Atusiuba'

const uppercaseFullName = fullName.toUpperCase()
result = uppercaseFullName
console.log(result) // Output: "ARINZE ATUSIUBA"

const lowercaseFullName = fullName.toLowerCase()
result = lowercaseFullName
console.log(result) // Output: "arinze atusiuba"

const slicedFullName = fullName.slice(7, 16)
result = slicedFullName
console.log(result) // Output: "Atusiuba"
