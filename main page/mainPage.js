// selecting profiles

const topProfiles = document.querySelector('.top-profile');
const defiProfiles = document.querySelector('.Defi-profile');
const eth2Profiles = document. querySelector('.eth2-profile');


// selecting tweet-display div for each section

const topProfilesTweets = document.querySelector('.profile-fetched-tweet');
const defiTweets = document.querySelector('.Defi-fetched-tweet');
const eth2Tweets = document.querySelector('.eth2-fetched-tweet');

// selecting the close icon for each tweet-display div

const closeTopProfileTweets = document.querySelector('.profile-tweets-close');
const closeDefiTweets = document.querySelector('.defi-tweets-close');
const closeEth2Tweets = document.querySelector('.eth2-tweets-close');

// add event Listener for profile-clicking to display tweets 

topProfiles.addEventListener('click', ()=>{
  topProfilesTweets.style.display = 'flex';
});

defiProfiles.addEventListener('click', ()=>{
  defiTweets.style.display = 'flex';
});

eth2Profiles.addEventListener('click', ()=>{
  eth2Tweets.style.display = 'flex';
});

// add event Listener to close fetched tweets display
closeTopProfileTweets.addEventListener('click', ()=>{
  topProfilesTweets.style.display = 'none';
});

closeDefiTweets.addEventListener('click', ()=>{
  defiTweets.style.display = 'none';
});

closeEth2Tweets.addEventListener('click', ()=>{
  eth2Tweets.style.display = 'none';
})
