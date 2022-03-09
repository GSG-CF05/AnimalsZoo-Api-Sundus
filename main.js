// let title = document.createElement("h1");
// title.textContent = "Animals Zoo";
// title.style.fontWeight = "bold";
// title.style.color = "black";
// title.style.textAlign = "center";
// mainDiv.appendChild(title);
let mainDiv = document.querySelector("div");

fetch("https://zoo-animal-api.herokuapp.com/animals/rand/10")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
 
    // Here's a list of repos!
    data.forEach((item) => {
      let div = document.createElement("div");

      mainDiv.appendChild(div);
      let img = document.createElement("img");
      img.src = item.image_link;

      let h2 = document.createElement("h2");
      h2.textContent = item.name;
      div.appendChild(img);
      div.appendChild(h2);
    });
  })
  .catch((error) => {
    console.log("Something went wrong", error);
  });
