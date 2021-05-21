import readline from 'readline-sync';
import * as model from './Model.js';
import { printTweets } from './View';

export function runSearch() {
    console.log('Here are some tweets by @UW_iSchool');
    console.log(printTweets(model.getRecentTweets()));
    console.log(printTweets(model.searchTweets('poison')));
    let answer = readline.question('Search tweets, or EXIT to quit: ');
    if (answer != 'EXIT') {
        printTweets(model.searchTweets(answer));
    }
}
