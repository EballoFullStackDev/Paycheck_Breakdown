const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let currentPage = 1;
const itemsPerPage = 3;
const totalAmountOfPage = Math.ceil(items.length / itemsPerPage);
const pageTabs = [];

//Event Handlers-----------
const displayPages = (currentPage, itemsPerPage) => {
  const itemsOnPage = document.getElementById("itemsOnPage");
  const startingIndex = (currentPage - 1) * itemsPerPage;
  const endingIndex = startingIndex + itemsPerPage;
  itemsOnPage.innerHTML = items
    .slice(startingIndex, endingIndex)
    .map(item => `<div>item: ${item}</div>`)
    .join("");
};

const displayPageNumber = currentPage => {
  const pageNumber = document.getElementById("pageNumber");
  pageNumber.textContent = currentPage;
};

const displayPageTabs = totalAmountOfPage => {
  for (i = 0; i < totalAmountOfPage; i++) {
    const button = document.createElement("button");
    button.innerHTML = i + 1;
    button.setAttribute("id", i + 1);
    button.setAttribute("onClick", "pageSelection('" + (+i + 1) + "')");
    document.getElementById("pageTabButtons").appendChild(button);
  }
};

const pageSelection = pageNumber => {
  currentPage = parseInt(pageNumber);
  displayPageNumber(currentPage);
  displayPages(currentPage, itemsPerPage);
};

const printToScreen = value => {
  const paragraph = document.getElementById("inputDisplay");
  if (value != "") {
    paragraph.textContent = value;
  } else {
    paragraph.textContent = "Please Enter Something";
  }
};

const displayReducedArray = (operator, result) => {
  //const paragraph = document.createElement('p');
  const join = items.join(operator);
  const displayedResults = `${join} = ${result}`;
  document.getElementById("itemsList").innerHTML = displayedResults;
};
//Event Listeners
document.getElementById("nextPage").addEventListener("click", () => {
  if (currentPage < totalAmountOfPage) {
    currentPage += 1;
    displayPageNumber(currentPage);
    displayPages(currentPage, itemsPerPage);
  }
});

document.getElementById("prevPage").addEventListener("click", () => {
  if (currentPage > 1) {
    currentPage -= 1;
    displayPageNumber(currentPage);
    displayPages(currentPage, itemsPerPage);
  }
});

document.getElementById("firstPage").addEventListener("click", () => {
  currentPage = 1;
  displayPageNumber(currentPage);
  displayPages(currentPage, itemsPerPage);
});

document.getElementById("lastPage").addEventListener("click", () => {
  currentPage = totalAmountOfPage;
  displayPageNumber(currentPage);
  displayPages(currentPage, itemsPerPage);
});

document.addEventListener("DOMContentLoaded", () => {
  displayPageNumber(currentPage);
  displayPages(currentPage, itemsPerPage);
  displayPageTabs(totalAmountOfPage);
  const paragraph = document.querySelectorAll(".red");
  paragraph.forEach(p => {
    p.className += " hello"
  });
});

document.getElementById("addArray").addEventListener("click", () => {
  const result = items.reduce(
    (accumulator, reducer) => accumulator + reducer
  );
  const operator = " + ";
  displayReducedArray(operator, result);
});

document.getElementById("multiplyArray").addEventListener("click", () => {
  const result = items.reduce(
    (accumulator, reducer) => accumulator * reducer
  );
  const operator = " * ";
  displayReducedArray(operator, result);
});