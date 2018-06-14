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
