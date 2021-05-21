'use strict';

// import {tweets} from './Model.js';

// console.log(tweets);

export function printTweets(tweetArr) {
    let str = '';
    if (tweetArr.length == 0) {
        str = 'No tweets found';
        console.log(str);
    } else {
        tweetArr.forEach( (item) => {
            let d = new Date(item.timestamp);
            d = d.toLocaleString('en-US');
            let post = '- "' + item.text + '" (' + d + ')';
            console.log(post);
            str = str + post + '\n';
        })
    }
    return str;
}

// console.log(printTweets(tweets));
