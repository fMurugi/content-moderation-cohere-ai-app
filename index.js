const cohere = require('cohere-ai');
cohere.init('55eAQlsqhW5o36ouGgRlHadOBM1ZSnry6StANmpN')


const examples = [
  { text: 'you are hot trash', label: 'Toxic' },
  { text: 'go to hell', label: 'Toxic' },
  { text: 'get rekt moron', label: 'Toxic' },
  { text: 'get a brain and use it', label: 'Toxic' },
  { text: 'say what you mean, you jerk.', label: 'Toxic' },
  { text: 'Are you really this stupid', label: 'Toxic' },
  { text: 'I will honestly kill you', label: 'Toxic' },
  { text: 'yo how are you', label: 'Benign' },
  { text: "I'm curious, how did that happen", label: 'Benign' },
  { text: 'Try that again', label: 'Benign' },
  { text: 'Hello everyone, excited to be here', label: 'Benign' },
  { text: 'I think I saw it first', label: 'Benign' },
  { text: 'That is an interesting point', label: 'Benign' },
  { text: 'I love this', label: 'Benign' },
  { text: 'We should try that sometime', label: 'Benign' },
  { text: 'You should go for it', label: 'Benign' },
  {text:'takaka wewe',label:'toxic'},
  {text:'what is wrong with you umbwa',label:'toxic'},
  {text:'shetani wewe unafikiria wewe ni nani',label:'toxic'},
  {text:'chakula kizuri hicho',label:'Benign'},
  {text:'leo ni siku njema ',label:'Benign'},

];

//get input from reddit or social media platform feed here 
//if toxic remove the post automatically
const inputs = [
  'this game sucks, you suck',
  'stop being a dumbass',
  "Let's do this once and for all",
  'This is coming along nicely',
  'wachana na hiy takataka',
  'nimeshiba leo',
];

(async () => {
  const response = await cohere.classify({
    inputs: inputs,
    examples: examples,
  });
  console.log(response);
  console.log("++++++++++++++++++++++++++++++++");
  console.log(response.body.classifications);
})();