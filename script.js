const btn = document.getElementById("button");
const nameInput = document.getElementById("name");
const yearInput = document.getElementById("year");
const urlElement = document.getElementById("url");

btn.addEventListener("click", (e) => {
  // Prevents page reload if the button is inside a <form> tag
  e.preventDefault(); 

  const baseUrl = "https://localhost:8080/";
  const params = new URLSearchParams();

  if (nameInput.value) {
    params.append("name", nameInput.value);
  }
  
  if (yearInput.value) {
    params.append("year", yearInput.value);
  }

  // Only add '?' if at least one input has a value
  const queryString = params.toString();
  urlElement.textContent = queryString ? `${baseUrl}?${queryString}` : baseUrl;
});
