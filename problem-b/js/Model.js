'use strict';

import allTweets from './uw_ischool_tweets.js';

export let tweets = [];

// console.log(allTweets[0].text);

allTweets.map( (item) => {
    let newObj = {};
    newObj.text = item.text;
    newObj.timestamp = Date.parse(item.created_at);
    tweets.push(newObj);
});

// console.log(tweets);
 
export function getRecentTweets() {
    tweets.sort((a, b) => {
        return b.timestamp - a.timestamp;
    })
    return tweets.slice(0, 5);
}


export function searchTweets(search) {
    search = search.toLowerCase();
    let filter = tweets.filter( (tweet) => {
        let twtText = tweet.text.toLowerCase();
        if (twtText.includes(search)) {
            return tweet;
        }
    });
    return filter;
}