const Twit = require('twit');
const config = require('./config');

const bot = new Twit(config);

// bot.post('statuses/update', {
//   status: 'hello world!'
// }, (err, data, response) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(`"${data.text}" tweeted!`);
//   }
// });

// bot.get('followers/list', {
//   screen_name: 'DroidScott',
//   count: 20
// }, (err, data, response) => {
//   if (err) {
//     console.log(err);
//   } else {
//     data.users.forEach(user => {
//       console.log(user.screen_name);
//     });
//   }
// });

// bot.get('friendships/lookup', {
//   screen_name: 'nytimes'
// }, (err, data, response) => {
//   if (err) {
//     console.log(err);
//   } else {
//     let connections = data[0].connections[0];
//     console.log(connections);
//   }
// });

// bot.post('direct_messages/new', {
//   screen_name: 'ScottDevTweets',
//   text: 'Hello from bot!'
// }, (err, data, response) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(data);
//   }
// });

// const getTweets = (screeName, count) => bot.get('statuses/user_timeline', {
//   screen_name: screeName,
//   count: count
// }, (err, data, response) => {
//   if (err) {
//     console.log(err);
//   } else {
//     let num = 1;
//     data.forEach(tweet => {
//       console.log(`${num}. ${tweet.text}`);
//       console.log(" ");
//       num++;
//     });
//   }
// });
//
// getTweets('svangel', 10);

// bot.get('search/tweets', {
//   q: 'drrolfes',
//   count: 5
// }, (err, data, response) => {
//   if (err) {
//     console.log(err);
//   } else {
//     data.statuses.forEach(s => {
//       console.log(s.text);
//       console.log(s.user.screen_name);
//       console.log('\n');
//     });
//   }
// });

// const keyWords = "venture capital";
//
// const stream = bot.stream('statuses/filter', {
//   track: keyWords
// });
//
// stream.on('tweet', t => {
//   console.log(`${t.text}\n`);
// });
