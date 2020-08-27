const fullname = document.getElementById("fullname");
console.log("CONTENT NOT YET LOADED!", fullname); //what will fullname evaluate to?

document.addEventListener("DOMContentLoaded", () => {
  console.log("CONTENT LOADED!");
  retriveDataWhenClick();
});
function retriveDataWhenClick() {
  const pressMeButton = document.querySelector("button");
  pressMeButton.addEventListener("click", function (event) {
    console.log("hi");
    fetchData();
  });
}

function fetchData() {
  let data = fetch("https://randomuser.me/api/")
    .then((res) => res.json())
    .then((json) => fillFormFields(json.results[0]));
  console.log("checking");
}

function fillFormFields(person) {
  // debugger;
  addFullName(person);
  addEmail(person);
  addAdress(person);
  AddPhoneNumbers(person);
  addImage(person);
  addDateOfBirth(person);
  // console.log(`${person.text}`);
}

function addFullName(person) {
  const name = document.getElementById("fullname");
  name.textContent = `${person.name.first}` + ` ${person.name.last}`;
}
function addEmail(person) {
  const email = document.getElementById("email");
  email.textContent = `${person.email}`;
}
function addAdress(person) {
  const street = document.getElementById("street");
  street.textContent =
    `${person.location.street.number}` + ` ${person.location.street.name}`;

  const city = document.getElementById("city");
  city.textContent = `${person.location.city}`;

  const state = document.getElementById("state");
  state.textContent = `${person.location.state}`;

  const postcode = document.getElementById("postcode");
  postcode.textContent = `${person.location.postcode}`;
}

function AddPhoneNumbers(person) {
  const phone = document.getElementById("phone");
  phone.textContent = `${person.phone}`;

  const cell = document.getElementById("cell");
  cell.textContent = `${person.cell}`;
}

function addImage(person) {
  const image = document.getElementById("profile_picture");
  image.src = person.picture.thumbnail;
}

function addDateOfBirth(person) {
  const dob = document.getElementById("date_of_birth");
  dob.textContent = person.dob.date;
}
