
let userName= getFirstName("Igor-Coutinho-da-silva", "-")
console.log("Seja bem-vindo(a) " + userName)
userName= getFirstName("maria Alcilania Batista de lima", " ")
console.log("Seja bem-vindo(a) " + userName)

function getFirstName(name, splitChar){
  let firstName = name.split(splitChar)[0]
  return firstName
}