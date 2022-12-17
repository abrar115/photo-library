const image__container=document.getElementById("img_container");

let photoArrays=[];

//function to show image in html
function photoDisplay() {
  //creating anchor tag
  photoArrays.forEach((photo) => {
    const item = document.createElement("a");
    item.setAttribute("href", photo.links.html);
    item.setAttribute("target", "_blank");

    const img = document.createElement("img");
    img.setAttribute("src", photo.urls.regular);
    img.setAttribute("alt", "Photo-unvailable");
    item.appendChild(img);
    image__container.appendChild(item);
  });
}

async function getPhotos() {
  const apiKey = "076BY8drmka97MHZEoLWNhirW-Oja9a2D1IsAvHIvZg";
  const count = 60;
  const imageUrlApi = `https://api.unsplash.com/photos/?client_id=${apiKey}&${count}`;
  const response = await fetch(imageUrlApi);
  photoArrays = await response.json();
  photoDisplay();
  // console.log(photoArrays);
  try {
  } catch (error) {
    console.log(error);
  }
}
// on load
getPhotos();