
// Placing images into an array for iteration. Both the Next() and Previous() are using the same array.
var images = ["file:///home/christinaj2/Desktop/BootCampProjects/christina_j/javascriptProjects/Project5/img/1.jpg",
"file:///home/christinaj2/Desktop/BootCampProjects/christina_j/javascriptProjects/Project5/img/2.jpg",
"file:///home/christinaj2/Desktop/BootCampProjects/christina_j/javascriptProjects/Project5/img/3.jpg",
"file:///home/christinaj2/Desktop/BootCampProjects/christina_j/javascriptProjects/Project5/img/4.jpg",
"file:///home/christinaj2/Desktop/BootCampProjects/christina_j/javascriptProjects/Project5/img/5.jpg",
"file:///home/christinaj2/Desktop/BootCampProjects/christina_j/javascriptProjects/Project5/img/6.jpg"
]


// Assigning 0 to i globally.
var i = 0;
// Accessing the id  where the images will display from the document. 
var showImages= document.getElementById("Placeholder");
// displaying the first image which is 0.
showImages.src= images[i];



//  Creating a function to increment the array.
function Next() {
    i++;
    // This statement remains false until i becomes greater than 3 at this time i will reset to index 0.
    // This helps me accomplish the loop around through the next button.
        if (i >= images.length){
         i = 0;          
        }
    showImages.src= images[i];
}

// Creating a function to decrement the array. 
function Previous() {
    i--;
    // i is assigned -1 so this statement is true. There is no -1 index so I assign i to be the 
    // last index on the array and decrement from there.
        if (i < 0){
         i = images.length-1;          
        }
    showImages.src= images[i];
}



// Alternate code 
// var image =  document.getElementById("imageOne");

// function changeColor()
// {
//     if (image.getAttribute('src') == "https://upload.wikimedia.org/wikipedia/commons/b/b9/Chocolate_Chip_Cookies_-_kimberlykv.jpg")
//     {
//        image.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd6uy6YifZlY_Lu3Zq-ceVa87_SY3NM6_JrUWi1XODIHJd-fMwjw";
//    }
//    else
//    {
//        image.src = "https://i.pinimg.com/236x/14/50/47/145047760374ee8c6d99c3bea7a021e8--photography-ideas-food-styling.jpg";
//    }
// }
// var image =  document.getElementById("imageOne");

// function changeColor2()
// {
//     if (image.getAttribute('src') == "https://i.pinimg.com/236x/14/50/47/145047760374ee8c6d99c3bea7a021e8--photography-ideas-food-styling.jpg")
//     {
//        image.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd6uy6YifZlY_Lu3Zq-ceVa87_SY3NM6_JrUWi1XODIHJd-fMwjw";
//    }
//    else
//    {
//        image.src = "https://upload.wikimedia.org/wikipedia/commons/b/b9/Chocolate_Chip_Cookies_-_kimberlykv.jpg";
//    }
// }


