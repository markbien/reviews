const employees = [
  {
    name: "Sponge Bob Square Pants",
    position: "Web Developer",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, vero voluptatibus dignissimos assumenda omnis suscipit voluptas dolores, ab quasi architecto nihil consequuntur voluptates nulla excepturi dicta ipsa,",
    image: "images/spongebob.jpeg",
  },
  {
    name: "Patrick Starfish",
    position: "Backend Developer",
    info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi possimus quia sed, reiciendis animi corporis dicta libero distinctio modi laborum ipsam magnam illum ipsum saepe consequuntur quibusdam, dignissimos cupiditate natus.",
    image: "images/patrick.jpeg",
  },
  {
    name: "Mister Krabs",
    position: "CEO",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore nulla debitis, distinctio itaque deleniti delectus corrupti voluptatum eaque necessitatibus expedita sunt rerum animi cupiditate quaerat. Iste repellat eligendi doloremque veniam.",
    image: "images/krab.jpeg",
  },
  {
    name: "Squidward Q. Tentacles",
    position: "Frontend Developer",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ad temporibus nemo hic repudiandae eligendi provident rerum neque sint incidunt voluptatum, reiciendis reprehenderit, deserunt iusto debitis similique iure, sapiente dolor?",
    image: "images/squidward.jpeg",
  },
  {
    name: "Sandra Jennifer Cheeks",
    position: "DevOps",
    info: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur perspiciatis quos quisquam nesciunt? Consectetur quam modi tempore voluptatibus praesentium minus fuga, dolorem odio suscipit. Earum sequi eligendi eos? Tenetur, debitis.",
    image: "images/sandy.png",
  },
];

const image = document.querySelector("#employee-image");
const name = document.querySelector("#employee-name");
const position = document.querySelector("#employee-position");
const info = document.querySelector("#employee-info");
const leftBtn = document.querySelector("#left-button");
const rightBtn = document.querySelector("#right-button");
const randomizeBtn = document.querySelector("#randomize-button");
let currentIndex = 0;

function changeDisplayedEmployee(index) {
  image.src = employees[index].image;
  name.textContent = employees[index].name;
  position.textContent = employees[index].position;
  info.textContent = employees[index].info;
}

window.addEventListener("DOMContentLoaded", function () {
  changeDisplayedEmployee(currentIndex);
});

rightBtn.addEventListener("click", function () {
  currentIndex++;
  if (currentIndex > employees.length - 1) {
    currentIndex = 0;
  }
  changeDisplayedEmployee(currentIndex);
});

leftBtn.addEventListener("click", function () {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = employees.length - 1;
  }
  changeDisplayedEmployee(currentIndex);
});

randomizeBtn.addEventListener("click", function () {
  const randNum = Math.floor(Math.random() * employees.length);
  changeDisplayedEmployee(randNum);
});