// add eventListener to set tweet display for each profile upon click on profile block
//for Token brice
const profileBlock = document.querySelectorAll('.profile-block');
const displayDefault = document.querySelector('.tweets-default');
const loader = document.querySelector('.loader-box');



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
