const getImage = async () => {
  const apiKey = "sjRREAjUCxxEQXAQ3KC8bHNa5JXy1h1S";
  const response = await fetch(
    `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
  );
  const { data } = await response.json();

  const { url } = data.images.original;
  console.log(url);
  const img = document.createElement("img");
  img.src = url;

  document.body.append(img);
};

console.log(getImage());
