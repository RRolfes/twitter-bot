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

bot.get('statuses/home_timeline', {
  count: 10
}, (err, data, response) => {
  if (err) {
    console.log(err);
  } else {
    let cnt = 1;
    data.forEach(item => {
      console.log(`${cnt}. ${item.text}`);
      console.log(" ");
      cnt++;
    });
    // console.log(data);
  }
});
