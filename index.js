const container = document.querySelector(".container");

function Employee(name, position, info, imagePath) {
  this.name = name;
  this.position = position;
  this.info = info;
  this.imagePath = imagePath;
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

  const pageControls = document.createElement("div");
  pageControls.classList.add("page-controls");

  const leftButton = document.createElement("img");
  leftButton.src = "images/chevron-left-solid.svg";
  leftButton.classList.add("arrows");

  const rightButton = document.createElement("img");
  rightButton.src = "images/chevron-right-solid.svg";
  rightButton.classList.add("arrows");

  pageControls.appendChild(leftButton);
  pageControls.appendChild(rightButton);

  const surpriseMeButton = document.createElement("button");
  surpriseMeButton.textContent = "Surprise me!";

  const card = document.createElement("div");
  card.classList.add("card");

  card.appendChild(imageContainer);
  card.appendChild(employeeName);
  card.appendChild(employeePosition);
  card.appendChild(employeeInformation);
  card.appendChild(pageControls);
  card.appendChild(surpriseMeButton);

  return card;
}

const cardArray = [];

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

const spongebob_card = createCard(
  spongebob.name,
  spongebob.position,
  spongebob.info,
  "images/spongebob.jpeg"
);
const patrick_card = createCard(
  patrick.name,
  patrick.position,
  patrick.info,
  "images/patrick.jpeg"
);
const krab_card = createCard(
  krab.name,
  krab.position,
  krab.info,
  "images/krab.jpeg"
);

cardArray.push(spongebob_card);
cardArray.push(patrick_card);
cardArray.push(krab_card);

for (let i = 0; i < cardArray.length; i++) {
  cardArray[i].setAttribute("id", `card_${i}`);
  container.appendChild(cardArray[i]);
}

let currentCardShown = 2;

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

toggleShowClass(2);