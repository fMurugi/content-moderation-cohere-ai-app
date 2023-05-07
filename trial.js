const fs = require('fs');
const csv = require('csv-parser');
const cohere = require('cohere-ai');
const e = require('express');
const exp = require('constants');
cohere.init('55eAQlsqhW5o36ouGgRlHadOBM1ZSnry6StANmpN')

function classifyComment(inputs,callback){
    const examples = [];
    let examplesSliced=[];
    let predictionsArray = [];
// Load data from CSV file

fs.createReadStream('./HateSpeechDetection.csv')
  .pipe(csv())
  .on('data', (row) => {
    
    // Extract text and label from row
    const text = row.Comment;
    const label = row.Hateful =="0" ? "benign" : "toxic";
    // Add to examples array
    examples.push({ text: text, label: label });
  })
  .on('end', async () => {
    //get input from reddit or social media platform feed here 
    //if toxic remove the post automatically
    // const inputs = [
    //   'this game sucks, you suck',
    //   'stop being a dumbass',
    //   "Let's do this once and for all",
    //   'This is coming along nicely',
    //   'wachana na hiy takataka',
    //   'nimeshiba leo',
    //   'pusy fuck you',
    // ];
   examplesSliced= examples.slice(0,500);
    // console.log(examplesSliced);
    console.log("****************************************************");

   
      const response = await cohere.classify({
        // model:'large',
        inputs: inputs,
        examples: examplesSliced,
      }).catch(error=>{console.log(error.message)});
      console.log(response);
      console.log("++++++++++++++++++++++++++++++++");
      console.log(response.body.classifications);
    //   console.log(response.body.classifications[0].prediction);
      response.body.classifications.forEach((classification) => {
        // console.log(classification.prediction);
        predictionsArray.push(classification.prediction);
        console.log(predictionsArray);
      });
      
      //how do i get the prediction for evrything?

      //delete the comment


  
    callback(predictionsArray) ;

  });

}

module.exports= classifyComment;

