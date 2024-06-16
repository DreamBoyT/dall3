document.addEventListener('DOMContentLoaded', function () {
    const themeToggle = document.getElementById('themeToggle');
  
    themeToggle.addEventListener('change', function () {
      document.body.classList.toggle('dark', themeToggle.checked);
    });
  
    const url = "https://source.unsplash.com/random";
    const sizeSelect = document.getElementById("sizeSelect");
    const numImagesSelect = document.getElementById("numImagesSelect");
  
    ["small", "medium", "large"].forEach(size => {
      let option = document.createElement("option");
      option.value = size;
      option.text = size.charAt(0).toUpperCase() + size.slice(1);
      sizeSelect.appendChild(option);
    });
  
    [1, 2, 3, 4, 5].forEach(num => {
      let option = document.createElement("option");
      option.value = num;
      option.text = num;
      numImagesSelect.appendChild(option);
    });
  
    document.getElementById("btn").onclick = async function () {
      const description = document.getElementById("text").value;
      const size = sizeSelect.value;
      const numImages = numImagesSelect.value;
      const style = document.getElementById("styleSelect").value;
      const quality = document.getElementById("qualitySelect").value;
  
      document.getElementById("loading").classList.remove("hidden");
      document.getElementById("image").innerHTML = "";
  
      for (let i = 0; i < numImages; i++) {
        let image = document.createElement("img");
        image.src = url;
        image.alt = description;
        image.classList.add("rounded-lg", "shadow-lg", "hover:shadow-2xl");
        document.getElementById("image").appendChild(image);
      }
  
      document.getElementById("loading").classList.add("hidden");
    };
  });
  