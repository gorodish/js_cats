var createUl = function(){
  var catUl = document.createElement('ul');
  catUl.classList.add('cat');
  return catUl;
}

var createName = function(name){
  var catName = document.createElement('li');
  catName.innerText = 'name: ' + name;
  return catName;
}

var createFood = function(favFood){
  var food = document.createElement('li');
  food.innerText = 'Favourite food: ' + favFood;
  return food;
}

var createImage = function(img){
  var image = document.createElement('li');
  image.innerHTML = '<img width="500" src=' + img + '>';
  '<img src="images/test2.png" />'
  return image;
}


var appendElements = function(cats, catUl, name, food, image){
  catUl.appendChild(name);
  catUl.appendChild(food);
  catUl.appendChild(image);
  cats.appendChild(catUl);
}

var addCat = function(name, favFood, img){
  var catUl = createUl();
  var name = createName(name);
  var food = createFood(favFood);
  var image = createImage(img);

  var cats = document.querySelector('#cats');
  appendElements(cats, catUl, name, food, image);
}



var catArray = [
{name: "Bart", favFood: "Beans", img:"https://i.ytimg.com/vi/hWR5zrji7LQ/maxresdefault.jpg"}
];

var app = function(){
  for (var cat of catArray){
    addCat(cat.name, cat.favFood, cat.img);
  }
}


window.onload = app;

// Add JS code to allow a new cat to be added programmatically. Do it rough and ready at first!
// Refactor the code to make it easy to add a new cat, just like we did with the quotes.
// OPTIONAL: Remove the cat data in the HTML and add them via your javascript. If you want to be fancy, put the cat data into an array.
// OPTIONAL: Style the site!
// Hint: Be careful with the order you append your elements to each other! Also be careful with what you need to pass when setting an image's width via the DOM.