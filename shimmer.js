//We grab all of the .stars from the html
const stars = document.querySelectorAll('img.star')

// circles returns us an array so we need to loop through it
// index refers to the item in the array we are working with
stars.forEach((star, index) => {
  //in here we get access to each one as 'circle'
  star.animate(
    [
      //keyframes
      {opacity: 1, transform: 'scale(1)'},
      {opacity: 0.25, transform: 'scale(1.2)'},
      {opacity: 1, transform: 'scale(1)'},
    ],
    {
      // timing options (in milliseconds)
      delay: 450 * index,
      duration: 5000,
      iterations: Infinity,
    }
  )
})
