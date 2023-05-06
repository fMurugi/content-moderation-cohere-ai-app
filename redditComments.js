const Snoowrap = require('snoowrap');
const { CommentStream } = require('snoostorm');
const classifyComment = require('./trial.js');

const redditComments=[];
// Create a Snoowrap instance with OAuth credentials
const r = new Snoowrap({
  userAgent: 'MyBot/0.0.1',
  clientId: 'e_5AeTHOUR9eyxo-FtgN8A',
  clientSecret: 'm9syyWpKQkC7NmnsxM7GCy7XqTiyRg',
  username: 'Pure-Astronaut9659',
  password: '5cPM698Fk9SfnLc'
});
console.log("______________________________________________");

// Create a CommentStream to stream new posts containing a certain keyword from a subreddit
const streamOpts = {
  subreddit: 'testYourApi',
  results: 1,
  pollTime: 5000
};
const comments = new CommentStream(r, streamOpts);
// console.log(comments);

// Process each new post
comments.on('item', (comment) => {
    // process the post here
    console.log("new comment");
    console.log(comment.body);
    redditComments.push(comment.body);
    //call the cohere Ai
    classifyComment(redditComments);

    

 
});
