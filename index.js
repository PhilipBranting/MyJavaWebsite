// here we create a function called changebg()
function changebg() {
    // this is a if statment that basically checks if the bakground color is default and if it is the next code will change the color to teal
    if (document.body.style.backgroundColor == ''){
        document.body.style.backgroundColor = 'teal'
    }
    // if the condition above wasnt true then this will go and put the backgroundColor back to default
    else{
        document.body.style.backgroundColor = ''
    };
    
}

// here we create another function called goodvibes()
function goodvibes(){
    // this if statement checks if the h1 with the id 'rubrik' is empty and if it is, it changes it to 'You should be vibrating!'
    if (document.getElementById('rubrik').textContent == ''){ 
        document.getElementById('rubrik').textContent = 'You should be vibrating!';
    }
    // if the previous condition wasnt met this will put h1 with id 'rubrik' back to nothing
    else{
        document.getElementById('rubrik').textContent = ''
    };
    
    }

// this creates a function showtime()
function showtime(){
    // this function takes what time it is in your location and then puts it in a variable that we then use to print it on the website
    var timeString = new Date().toLocaleTimeString();
    // this is like unecisary but if you double click you will be able to remove it. It works like all the other if statements. Checks if a condition is met and then changes the content
    if (document.getElementById('showtime').textContent == 'Current Time: ' + timeString){
        document.getElementById('showtime').textContent = '';
    }
    else{
            document.getElementById('showtime').textContent = 'Current Time: ' + timeString;
        };

}

// here we define some variables so that we can use them to change the image src attribute
var image1 = 'Rainmeter_menmOYrbo0.png';
var image2 = 'Squirtle-colored.png';
// here we just gives currentImage a starting value that is image1
var currentImage = image1;

function changepic(){

    // if current image is equal to image1, this is on by default, then it will change src to image2 and switch currentImage to image 2 aswell
    if (currentImage == image1){
        document.getElementById('image').src = image2;
        currentImage = image2;
    } 
    // if currentImage is equal to image2 then this will run and turn src to image1 and currentImage to image1
    else{
        document.getElementById('image').src = image1;
        currentImage = image1;
    }
}

// this creates the function hidepic()
function hidepic(){
    // this if statement checks if currentImage is equal to image1 or image2 and if True, then will make it so that it wont display the image with id 'image'
    if (currentImage == image1 || currentImage == image2){
        document.getElementById('image').style.display = 'none';
    }
}


// this creates the function showpic() and will do the opposite of hidepic()
function showpic(){
    // this checks if the image with id 'image' is not displaying, if that is True it will turn in into a flex object so that it aligns with the other elements
    if (document.getElementById('image').style.display == 'none'){
        document.getElementById('image').style.display = 'flex';
    }
}


// this function is the header() and it will create a header and align everything center that is in it
function header(){
    // if div with id 'placeholder' has the class 'random' then remove the class 'random' and give it the new class 'header'
    if(document.getElementById('placeholder').classList == 'random'){
        document.getElementById('placeholder').classList.remove('random');
        document.getElementById('placeholder').classList.add('header');
    }
    // if that wasnt True then it will check if div with id 'placeholder' has the class header and if thats True then we will remove the class 'header' and give it the class 'random' again
    else if(document.getElementById('placeholder').classList == 'header'){
        document.getElementById('placeholder').classList.remove('header');
        document.getElementById('placeholder').classList.add('random');
    }
}


// this function is for the button to remove the header
function removeheader(){
    // now this will check if the div with id 'placeholder' has class 'header', if thats True it will make the display = 'none' and that hides the element
    if(document.getElementById('placeholder').classList == 'header'){
        document.getElementById('placeholder').style.display ='none'
    }
}


// this is a function opposite of the removeheader() function and will show the header
function showheader(){
    // instead of checking if the div with id 'placeholder' has a class, this checks if the display = 'none' and if thats true, we will turn it into flex and that will show the div
    if(document.getElementById('placeholder').style.display == 'none'){
        document.getElementById('placeholder').style.display = 'flex'
        // this is also to change the id 'note' that we want you to see after pressing every button. It changes the content with .innerHTML
        document.getElementById('note').innerHTML = 'Thank you for using our website! We hope that it was a pleasent experience and that you will be returning.'
    }
}
