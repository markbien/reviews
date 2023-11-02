const container = document.querySelector(".container");
const leftButton = document.querySelector(".left");
const rightButton = document.querySelector(".right");
const randomButton = document.querySelector(".page-controls button");
const cardArray = [];

function Employee(name, position, info, imagePath) {
  this.name = name;
  this.position = position;
  this.info = info;
  this.imagePath = imagePath;
  this.createOwnCardAndPushToArray = function(){
    const currentCard = createCard(this.name, this.position, this.info, this.imagePath);
    cardArray.push(currentCard);
  }
}

function createCard(
  newEmployeeName,
  newEmployeePosition,
  newEmployeeInformation,
  imagePath
) {
  const imageContainer = document.createElement("div");
  imageContainer.classList.add("image-container");

  const profilePicture = document.createElement("img");
  profilePicture.src = imagePath;
  profilePicture.classList.add("employee-image");

  const background = document.createElement("div");
  background.classList.add("background");

  imageContainer.appendChild(profilePicture);
  imageContainer.appendChild(background);

  const employeeName = document.createElement("h4");
  employeeName.classList.add("employee-name");
  employeeName.textContent = newEmployeeName;

  let employeePosition = document.createElement("h4");
  employeePosition.classList.add("employee-position");
  employeePosition.textContent = newEmployeePosition;

  let employeeInformation = document.createElement("employee-information");
  employeeInformation.classList.add("employee-information");
  employeeInformation.textContent = newEmployeeInformation;

  const card = document.createElement("div");
  card.classList.add("card");

  card.appendChild(imageContainer);
  card.appendChild(employeeName);
  card.appendChild(employeePosition);
  card.appendChild(employeeInformation);

  return card;
}

const spongebob = new Employee(
  "Spongebob",
  "Wev Developer",
  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis incidunt atque ea sunt iusto quae recusandae, asperiores alias nobis laborum dolore, quia aliquid in officiis perferendis et harum, saepe nostrum.",
  "images/spongebob.jpeg"
);
const patrick = new Employee(
  "Patrick",
  "Designer",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, rerum sapiente praesentium atque dignissimos incidunt consequuntur illum expedita recusandae explicabo dolorem suscipit culpa tempore libero corrupti eligendi sit ut a!",
  "images/patrick.jpeg"
);
const krab = new Employee(
  "Mister Krabs",
  "Lead Programmer",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea autem vitae, eligendi possimus dignissimos nostrum, sit, cum facere id aut maiores odio natus obcaecati nulla! Aspernatur nemo distinctio cum eveniet!",
  "images/krab.jpeg"
);

spongebob.createOwnCardAndPushToArray();
patrick.createOwnCardAndPushToArray();
krab.createOwnCardAndPushToArray();

for (let i = 0; i < cardArray.length; i++) {
  cardArray[i].setAttribute("id", `card_${i}`);
  container.appendChild(cardArray[i]);
}

let currentCardShown = 0;

function toggleShowClass(currentCardShown) {
  for (let i = 0; i < cardArray.length; i++) {
    const current_id = cardArray[i].getAttribute("id");
    if (current_id === `card_${currentCardShown}`) {
      cardArray[i].classList.add("show");
    } else {
      cardArray[i].classList.remove("show");
    }
  }
}

toggleShowClass(0);

function previousCard(){
  currentCardShown--;
  if (currentCardShown < 0) currentCardShown = 2;
  toggleShowClass(currentCardShown);
}

function nextCard(){
  currentCardShown++;
  if (currentCardShown > 2) currentCardShown = 0;
  toggleShowClass(currentCardShown);
}

function randomizeCard(){
  const randomVal = Math.floor(Math.random() * cardArray.length);
  toggleShowClass(randomVal);
}

leftButton.addEventListener('click', previousCard);
rightButton.addEventListener('click', nextCard);
randomButton.addEventListener('click', randomizeCard);