'use strict';

import {tweets} from './Model.js';

// console.log(tweets);

export function printTweets(tweetArr) {
    if (tweetArr.length == 0) {
        console.log('No tweets found');
    } else {
        tweetArr.forEach( (item) => {
            let d = new Date(item.timestamp);
            d = d.toLocaleString('en-US');
            let str = '- "' + item.text + '" (' + d + ')';
            console.log(str);
        })
    }
}

printTweets(tweets);
