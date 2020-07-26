const profilesGrid = document.querySelector('.profiles-grid');
const profileBlock = document.querySelectorAll('.profile-block');
const displayDefault = document.querySelector('.tweets-default');
const loader = document.querySelector('.loader-box');
const name = document.querySelectorAll('.name');//paragraph tag that contains both twitterId and profileName
const searchBar = document.querySelector('.search-input'); // html search-input element
var i;
var twitterId; // profile twitter id
var profileName;// profile Name





const hideCurrentTweet = () => {
  const tweets = document.querySelectorAll('.profile__tweets-display');
  tweets.forEach(t => t.style.display = 'none');
}

const showUserTweet = (id) => {
  const tweetDiv = document.querySelector(`[data-user="${id}"]`);
  if(tweetDiv) tweetDiv.style.display = 'block';
}

// hide loader

function hideLoader(){
  const HideLoader = loader.style.display = 'none';
};

//display tweets on click

 profileBlock.forEach((elem)=>{ 
   //get current profileblock clicked on
   const targetId = elem.id;
   elem.addEventListener('click', (event)=>{
     // hide displayDefault
     displayDefault.style.display = 'none';
     // loader experience
      loader.style.display= 'block';
      setTimeout(hideLoader, 6000); 
      //hide all tweet been displayed
      hideCurrentTweet();
      //show current tweet of profile clicked on
      showUserTweet(targetId);

      
   });
}); 

// implement search function

searchBar.addEventListener('keyup', (e)=>{
  const userInput = e.target.value.toLowerCase(); // user input
  
  for(i=0; i < name.length; i++){
    twitterId = name[i].getElementsByClassName('twitter-username')[0];
    profileName = name[i].getElementsByClassName('profile-name')[0];

    

    /* if no search match
    if (twitterId.innerHTML.toLowerCase().indexOf(userInput) == 0 && 
    profileName.innerHTML.toLowerCase().indexOf(userInput) == 0) {
      const profileGrid = document.querySelector('.profiles-grid'); //profileGrid
      const noSearch = document.createElement('p');// create a p tag to contain error msg
      noSearch.className = 'no-search'; // add class name
      noSearch.appendChild(document.createTextNode('"no search found"')); //create error message
      
      profileGrid.appendChild(noSearch);
      
    } */
    //if user input is found in either name of twitterid
    if(twitterId.innerHTML.toLowerCase().indexOf(userInput) > -1 || 
      profileName.innerHTML.toLowerCase().indexOf(userInput) > -1){
      name[i].parentElement.style.display = '';
     
    } else{
      name[i].parentElement.style.display = 'none';
    }
      

}
})
// logic for notification modal
const noteModal = document.querySelector('.notification-modal-popUp');
// function that displays notification modal 
function displayNoteModal(){
  noteModal.style.display = 'flex'; // set modal to display

}

// call function displayNoteModal on page load
window.onload = function(){
  setTimeout(displayNoteModal, 3500);
  
}

// add event listener to close notification modal
document.querySelector('.close-notification').addEventListener('click',(e)=>{
  noteModal.style.display = 'none';

})
