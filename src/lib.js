import fs from 'fs'

export const chooseRandom = (array = [], number) => {
  const randArray = []
  const random = Math.floor(Math.random() * array.length)
  if(array.length === 0 || array.length === 1){
    return array
  }
  if(number > array.length || number < 1){
    number = random
  }
  for(let i = 0; i < number; i ++){
    randArray.push(array[random])
  }
  return randArray
}

export const createPrompt = (promptObject) => {
  let numQuestions = promptObject && promptObject.numQuestions !== undefined ? promptObject.numQuestions : 1;
  let numChoices = promptObject && promptObject.numQuestions !== undefined ? promptObject.numChoices : 2;

  let questionAnswerArray = []

  for(let i = 1; i <= numQuestions; i++){
    questionArray.push({
      type:'input',
      name: `question-${i}`,
      message: `Enter question ${i}`
    })
    for (var j = 0; j < numChoices.length; j++) {
      questionAnswerArray.push({
        type: "input",
        name: `question-${i}-choice-${j}`,
        message: `Enter answer choice ${j} for question ${i}`
      })
    }
  }
  return questionAnswerArray;
}

export const createQuestions = (questionObject) => {
  let questionsArray = []
  //If no object is passed, return the empty array
  if(questionObject === undefined){
    return questionsArray
  }
  let choicesArray = []
  for(let count in questionObject){
    if(count.includes('choice')){
        choicesArray.push(questionObject[count])
    }
    else{
      choicesArray = []
      questionsArray.push({
        type: 'list',
        name: count,
        message: questionObject[count],
        choices: choicesArray
      })
    }
  }
  return questionsArray
}

export const readFile = path =>
  new Promise((resolve, reject) => {
    fs.readFile(path, (err, data) => (err ? reject(err) : resolve(data)))
  })

export const writeFile = (path, data) =>
  new Promise((resolve, reject) => {
    fs.writeFile(path, data, err =>
      err ? reject(err) : resolve('File saved successfully')
    )
  })
