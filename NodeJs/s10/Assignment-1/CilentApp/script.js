function jsonData() {
    fetch("http://localhost:1212/json")
      .then((response) => response.json()) 
      .then((data) => {
        console.log(data);
        document.querySelector("p").innerText = data.message; // Corrected key
      })
      .catch((error) => {
        alert("Something went wrong");
        console.error(error);
      });
}

function htmlData() {
    fetch("http://localhost:1212/html")
      .then((response) => response.text()) 
      .then((data) => {
        console.log(data);
        document.querySelector("p").innerHTML = data; // Use innerHTML for rendering HTML
      })
      .catch((error) => {
        alert("Something went wrong");
        console.error(error);
      });
}

async function textData() {
    try {
        let response = await fetch("http://localhost:1212/text");
        let data = await response.text(); 
        console.log(data);
        document.querySelector("p").innerText = data;
    } catch (error) {
        alert("Something went wrong");
        console.error(error);
    }
}
