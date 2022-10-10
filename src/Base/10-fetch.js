const apiKey = "sjRREAjUCxxEQXAQ3KC8bHNa5JXy1h1S";

const call = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

call
  .then((resp) => resp.json())
  .then(({data}) => {
    const { url } = data.images.original;

    const img = document.createElement('img');
    img.src = url;

    document.body.append(img);
  })
  .catch(console.warn);
