console.log('JavaScript is running!');

/* 
this is a JS black comment the let statemtn creates a variable - a chunk of computer memory that can hold references to data that you want to save. we're  storing an element with the ID we specify inside of the round brackets (the image tag with the ID of bitmapgraphic
    
    document refers to the index.html pafe; querySelector is how JS uses CSS to select elements on the page (called a method)*/ 

    // step1 select the elements you want the user to interact with 

let bitmapgraphic = document.querySelectorAll ("#bitmapgraphic")

//step 3 - wht happens when events are triggered?
function logID() {
    console.log(this.ID);
}


// step2 how do you want the user to interact with the element?
bitmapgraphic.addEventListener('click', logID);