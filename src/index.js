const fullname = document.getElementById("fullname");
console.log("CONTENT NOT YET LOADED!", fullname); //what will fullname evaluate to?

document.addEventListener("DOMContentLoaded", () => {
  console.log("CONTENT LOADED!");
});

function fetchRandomUser() {
  fetch("https://randomuser.me/api/")
    .then((res) => res.json())
    .then((json) => displayRandomUser(json.results[0]));
}

function displayRandomUser(user) {
  displayProfileImage(user.picture.medium);
  displayFullName(user.name);
  displayEmail(user.email);
  displayLocation(user.location);
  displayPhone(user.phone);
  displayCell(user.cell);
  displayDateOfBirth(user.dob.date);
}

function displayProfileImage(src) {
  const img = document.getElementById("profile_picture");
  img.src = src;
}

function displayFullName(name) {
  const fullname = document.getElementById("fullname");
  fullname.textContent = `${name.title} ${name.first} ${name.last}`;
}

function displayEmail(emailAddress) {
  const email = document.getElementById("email");
  email.textContent = emailAddress;
}

function displayLocation(location) {
  const street = document.getElementById("street");
  const city = document.getElementById("city");
  const state = document.getElementById("state");
  const postcode = document.getElementById("postcode");

  street.textContent = `${location.street.number} ${location.street.name}`;
  city.textContent = location.city;
  state.textContent = location.state;
  postcode.textContent = location.postcode;
}

function displayPhone(phoneNumber) {
  const phone = document.getElementById("phone");
  phone.textContent = phoneNumber;
}

function displayCell(cellNumber) {
  const cell = document.getElementById("cell");
  cell.textContent = cellNumber;
}

function displayDateOfBirth(dateOfBirth) {
  const dob = document.getElementById("date_of_birth");
  dob.textContent = dateOfBirth;
}

function initDisplayRandomUserButton() {
  const button = document.getElementsByTagName("button")[0];
  button.addEventListener("click", fetchRandomUser);
}

initDisplayRandomUserButton();
