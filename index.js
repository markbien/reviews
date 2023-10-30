const imagePlaceholder = document.querySelector(".employee-image");
const employeeName = document.querySelector(".employee-name");
const employeePosition = document.querySelector(".employee-position");
const employeeInfo = document.querySelector(".employee-information");

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