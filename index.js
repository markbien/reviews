// const imagePlaceholder = document.querySelector(".employee-image");
// const employeeName = document.querySelector(".employee-name");
// const employeePosition = document.querySelector(".employee-position");
// const employeeInfo = document.querySelector(".employee-information");
const container = document.querySelector('.container');

function Employee(name, position, info, imagePath) {
  this.name = name;
  this.position = position;
  this.info = info;
  this.imagePath = imagePath;
}

const spongebob = new Employee(
  "Spongebob",
  "Wev Developer",
  "asdfasdfasdf",
  "images/spongebob.jpeg"
);
const patrick = new Employee(
  "Patrick",
  "Designer",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, rerum sapiente praesentium atque dignissimos incidunt consequuntur illum expedita recusandae explicabo dolorem suscipit culpa tempore libero corrupti eligendi sit ut a!",
  "images/patrick.jpeg"
);

function createCard(employeeName, employeePosition, employeeInformation, imagePath){
  const imageContainer = document.createElement("div");
  imageContainer.classList.add("image-container");

  const profilePicture = document.createElement("img");
  profilePicture.src(imagePath);
  profilePicture.classList.add("employee-image");

  const background = document.createElement("div");
  background.classList.add("background");

  imageContainer.appendChild(profilePicture);
  imageContainer.appendChild(background);

  const employeeName = document.createElement("h4");
  employeeName.classList.add("employee-name");
  employeeName.textContent = employeeName;

  const employeePosition = document.createElement("h4");
  employeePosition.classList.add("employeee-position");
  employeePosition.textContent = employeePosition;

  const employeeInformation = document.createElement("employee-information");
  employeeInformation.classList.add("employee-information");
  employeeInformation.textContent = employeeInformation;

  const pageControls = document.createElement("div");
  pageControls.classList.add("page-controls");

  const leftButton = document.createElement("img");
  leftButton.src("images/chevron-left-solid.svg");
  leftButton.classList.add("arrows");

  const rightButton = document.createElement("img");
  rightButton.src("images/chevron-right-solid.svg")
  rightButton.classList.add("arrows");

  pageControls.appendChild(leftButton);
  pageControls.appendChild(rightButton);

  const surpriseMeButton = document.createElement("button");
  surpriseMeButton.textContent = "Surprise me!";

  container.appendChild(imageContainer);
  container.appendChild(employeeName);
  container.appendChild(employeePosition);
  container.appendChild(employeeInformation);
  container.appendChild(pageControls);
  container.appendChild(surpriseMeButton);
}