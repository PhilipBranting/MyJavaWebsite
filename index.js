function changebg() {
    if (document.body.style.backgroundColor == ''){
        document.body.style.backgroundColor = 'teal'
    }
    else{
        document.body.style.backgroundColor = ''
    };
    
}

function goodvibes(){
    if (document.getElementById('rubrik').textContent == ''){ 
        document.getElementById('rubrik').textContent = 'You should be vibrating!';
    }

    else{
        document.getElementById('rubrik').textContent = ''
    };
    
    }

function showtime(){
    var time = new Date();
    var timeString = time.toLocaleTimeString();
    if (document.getElementById('showtime').textContent == 'Current Time: ' + timeString){
        document.getElementById('showtime').textContent = '';
    }

    else{
            document.getElementById('showtime').textContent = 'Current Time: ' + timeString;
        };

}


var image1 = 'Rainmeter_menmOYrbo0.png';
var image2 = 'Squirtle-colored.png';
var currentImage = image1;

function changepic(){
   
        if (currentImage == image1){
            document.getElementById('image').src = image2;
            currentImage = image2;
        } 
        else{
            document.getElementById('image').src = image1;
            currentImage = image1;
        }
}


function hidepic(){
    if (currentImage == image1 || currentImage == image2){
        document.getElementById('image').style.display = 'none';
    }
}

function showpic(){
    if (document.getElementById('image').style.display == 'none'){
        document.getElementById('image').style.display = 'flex';
    }
}


function header(){
    if(document.getElementById('fin').classList == 'random'){
        document.getElementById('fin').classList.remove('random');
        document.getElementById('fin').classList.add('header');
    }
    else if(document.getElementById('fin').classList == 'header'){
        document.getElementById('fin').classList.remove('header');
        document.getElementById('fin').classList.add('random');
    }
}

function removeheader(){
    if(document.getElementById('fin').classList == 'header'){
        document.getElementById('fin').style.display ='none'
    }
}

function showheader(){
    if(document.getElementById('fin').style.display == 'none'){
        document.getElementById('fin').style.display = 'flex'
        document.getElementById('note').innerHTML = 'Thank you for using our website! We hope that it was a pleasent experience and that you will be returning.'
    }

}
