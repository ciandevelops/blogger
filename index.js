let postsArray = [];

fetch("https://apis.scrimba.com/jsonplaceholder/posts")
  .then((response) => response.json())
  .then((data) => {
    postsArray = data.slice(0, 5);
    console.log(postsArray);
  });
