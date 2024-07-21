function handleSearchSubmit(event) {
    event.preventDefault();
    let searchIput = document.querySelector("#search-form-input");
    let cityElement = document.querySelector("#city");
    cityElement.innerHTML = searchIput.value;
  }
  let searchFormElement =document.querySelector("#search-form");
  searchFormElement.addEventListener("submit", handleSearchSubmit);