function showImg(type,idName){
  const randomUrl = getRandomData(type);
const container = document.querySelector(idName);//selects div with class attribute photo-content
const imgtag = document.createElement('img');//it creates html tag <img>
imgtag.setAttribute('src', randomUrl );//adds attribute to that <img> tag

/* const isImg = container.querySelector('img');//to check wether 'container' node has <img> child or not.
if(isImg){
    //container.innerHTML = '';//deletes all child i.e elements of parent 'container'
   container.removeChild(isImg);//remove <img> element.
} */

deleteAll();
//container.innerHTML = '<h2> Told you photo will appear here </h2>'
container.appendChild(imgtag);
  
}

function showPhoto(){
  showImg('photos','.photo-container');

}
function showMeme(){
 showImg('meme','.meme-container');
}

function showQuote(){
  const randomUrl = getRandomData('quotes');

  const container = document.querySelector('.quote-content');

  const quoteEl = document.createElement('h3');
  const authorEl= document.createElement('h3');

  const {quote,author}  = randomUrl;
  quoteEl.textContent = quote;
  authorEl.textContent = author;

  deleteAll();

  container.appendChild(quoteEl);
  container.appendChild(authorEl);

}
function showRiddle(){
  const randomRiddle = getRandomData('riddle');
const {question,answer} = randomRiddle; 
/* equivalent to const question = randomRiddle.question;
 const author = randomRiddle.author; in es6
*/

const questEl = document.createElement('h3');
questEl.textContent = question;

const answerEl = document.createElement('h3');
answerEl.textContent = answer;
answerEl.setAttribute('id' , 'riddle-answer');
answerEl.hidden = true;

const container = document.querySelector('.riddle-content');

deleteAll();

container.appendChild(questEl);
container.appendChild(answerEl);

}

function revealAns(){
  const riddleContainer = document.querySelector('.riddle-content');
  const riddle = riddleContainer.querySelector('h3');
  const ans = document.querySelector('#riddle-answer');

  if(riddle && ans.hidden)
    ans.hidden = false;
  
  else if(riddle)
    alert('The answer is already provided');
  
  else
    alert('There is no riddle');
  
}

function getRandomData(type) {
  const dataArray = data[type];
  const index = Math.floor(Math.random()* dataArray.length);
  return dataArray[index];
 }
 
function deleteAll() {
    const photoContainer = document.querySelector('.photo-container');
    const memeContainer = document.querySelector('.meme-container');
    const quoteContainer = document.querySelector('.quote-content');
    const riddleContainer = document.querySelector('.riddle-content');
  
    const isImg = photoContainer.querySelector('img');
    if (isImg) {
  photoContainer.removeChild(isImg);//in this there is only one div tag in html document
      //so this selects specify element to delete.
    }
  
    const isImg2 = memeContainer.querySelector('img');
    if (isImg2) {
      memeContainer.removeChild(isImg2);
    }
  

    // this removes all the elements inside of the parent node.
      quoteContainer.innerHTML = '';
      riddleContainer.innerHTML = '';
    
  }
  const data = {
    photos: [ 'https://static01.nyt.com/images/2022/12/30/multimedia/30soccer-ronaldo-1-76fd/30soccer-ronaldo-1-76fd-mediumSquareAt3X.jpg',
     'https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGhvdG98ZW58MHx8MHx8fDA%3D&w=1000&q=80',
     'https://www.discoveryworldtrekking.com/media/3064/Screen-Shot-2022-09-22-at-14.55.07.png',
     'https://i.imgur.com/4LMd7fL.jpg',
     'https://miro.medium.com/v2/resize:fit:1081/1*WWkUziCc9vBMtzkKOyYoJQ.png'
 ],
   meme :[  'https://assets-global.website-files.com/5f3c19f18169b62a0d0bf387/60d33bf3a2121cc74f72a286_0AEnnZYBAYzmSXzyGaopjvEGKKO1yFqf_zMXqFTAT6vUDfXVPRifI3J8oBjZUl51PnRQqf2tqpjiRt33IKgg4sTiJi2YShGTN5iNUIoYbNj2HXobiQg4-k7yBiNT54EKOGYyZOR2.png',
     'https://i.redd.it/gc2m1tdq22w81.jpg',
     'https://i.pinimg.com/736x/8c/36/50/8c3650e5343c3289b353125155640fcd.jpg',
     'https://gitpiper.com/assets/memes/programming-meme-ff7166d5-d272-4fce-8e30-cef42a514420.webp',
     'https://assets-global.website-files.com/5f3c19f18169b62a0d0bf387/60d33be6ace19c29d4e0cec7_LuyYKvSMNsoK3_Kgkfbw9Cwf-vF7gFtOyUnT6TogZ8vuN81S8hQWSTUh4_TpjkdUlQjr_0cOXJL2SyPT4KjX-RAVudOV7AH4JyP3K-zzaYIVCrvIpA31aoqB7dBjwSglYaJuFR4R.png',
     'https://i.redd.it/a0v87gwzoge61.jpg',
     'https://i.redd.it/q29egav34ee61.jpg',
     'https://i.redd.it/iij16swxjie61.jpg', 
     'https://i.redd.it/vek7dm2hrge61.jpg', 
     'https://www.testbytes.net/wp-content/uploads/2019/06/Untitled-8.png',
     'https://miro.medium.com/max/1000/0*Ua695vjzFHV6VNOX.png', 
     'https://pbs.twimg.com/media/EKkPagPXkAA__Qo.jpg', 
     'https://code-love.com/wp-content/uploads/2019/03/download.jpeg', 
     'https://www.thecoderpedia.com/wp-content/uploads/2020/06/Programming-Memes-Programmer-while-sleeping.jpg', 
     'https://www.thecoderpedia.com/wp-content/uploads/2020/06/Programming-Memes-Evolution-of-Memory-Storage-1024x996.jpg', 
     'https://www.thecoderpedia.com/wp-content/uploads/2020/06/Programming-Memes-Error-in-Code-896x1024.jpg', 
     'https://www.thecoderpedia.com/wp-content/uploads/2020/06/Coding-Meme-Code-Comments-be-Like-925x1024.jpg', 
     'https://www.thecoderpedia.com/wp-content/uploads/2020/06/Internet-Explorer-Joke-915x1024.jpg'
 
 ],
 quotes:[
 {quote: 'The greatest glory in living lies not in never falling, but in rising every time we fall.', 
  author: '-Nelson Mandela'},

  {quote:'If life were predictable it would cease to be life, and be without flavor.',
   author:' -Eleanor Roosevel'},

 {quote: 'If you look at what you have in life, you\'ll always have more. If you look at what you don\'t have in life, you\'ll never have enough.',
 author: '-Oprah Winfrey'},
 {quote:' If you set your goals ridiculously high and it\'s a failure, you will fail above everyone else\'s success.',
 author: '-James Cameron'},
  {quote:'Life is what happens when you\'re busy making other plans.',
  author:' -John Lennon'}
 ],
 riddle:[
 { question: ' I\'m tall when I\'m young, and I\'m short when I\'m old. What am I?',
   answer: 'a candle'},
 { question : 'What can fill a room but takes up no space?',
   answer: 'light'
  },
  {
    question: 'If you drop me I\'m sure to crack, but give me a smile and I\'ll always smile back. What am I?',
    answer: 'a mirror'
  },
  {
    question: 'People make me, save me, change me, raise me. What am I?',
    answer: 'money'
  },
  {
    question: 'What goes up but never comes down?',
    answer : 'Your age'
  },
  {
   question: 'I speak without a mouth and hear without ears. I have no body, but I come alive with wind. What am I?',
     answer: 'An echo'
  },
  {
    question: 'What four-letter word begins with “f” and ends with “k,” and if you can\'t get it you can always just use your hands?',
    answer: 'fork'
  }

 ]
 };
  
