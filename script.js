
// tags.onchange = function () {
//   const included_tags = tags.value;
//   console.log(included_tags);
let imgsrc = document.getElementById("imgs")
const apiUrl = 'https://api.waifu.im/search';  // Replace with the actual API endpoint URL
let btn = document.getElementById("btn");
let tags = document.getElementById("tag");

btn.onclick = function () {
  const included_tags = tags.value;
  console.log("Selected tag:", included_tags);

  const queryParams = new URLSearchParams({ included_tags });
  const requestUrl = `${apiUrl}?${queryParams}`;

  fetch(requestUrl)
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Request failed with status code: ' + response.status);
      }
    })
    .then(data => {
      // Process the response data as needed
      console.log("API response:", data);
      imageurl =  data.images[0].url;
      imgsrc.src = imageurl


    })
    .catch(error => {
      console.error('An error occurred:', error.message);
    });
};
