import {useState, useEffect, useRef} from 'react';
import adventure from '../assets/adventure.svg';
import Response from './Response';
import resultsImg from '../assets/winners.svg';

function App() {

  // store data sent by the API
  const [countriesState, countriesSetState] = useState([]);
  const storageCountries = JSON.parse(localStorage.getItem('countries')) ;

  // current question response
  const [correctResponseState, correctResponseSetState] = useState({});

  // current question possible responses
  const [possibleResponsesState, possibleResponsesSetState] = useState([]);

  // prevents user from trying the same question multiple times
  let [firstTestState, firstTestSetState] = useState(true);

  // play and end game
  const [gameOverState, gameOverSetState] = useState(false);

  // to store possible responses reference
  const ref = useRef([]);

  // to store score
  const score = useRef(5);

  // count the number of game turns
  let tourNumber = useRef(0);

  // to sort countries list differently for each new question
  let sortMethode = useRef(true)

  useEffect(() => {
    
    if (!storageCountries){
      fetch("https://restcountries.eu/rest/v2/all")
      .then(response => response.json())
      .then(data =>{
        data = data.filter(item => item.name && item.capital && item.flag);
       
        localStorage.setItem('countries', JSON.stringify(data));

        let country = data.splice(Math.floor(Math.random()*(data.length)), 1)[0];
        let possibleResponses = data.splice(0, 3);
        possibleResponses = [country, ...possibleResponses];

        correctResponseSetState(country);
        possibleResponsesSetState(possibleResponses);
        countriesSetState(data);
      } );
    }else{

        play();

    }
   
    
    
  }, []);

  function addToRef(element) {
      
    if (element && !(ref.current.includes(element))){
      ref.current.push(element);
    }  
    
  }
  
  function newQuestion() {
    ref.current = [];   
    tourNumber.current ++;
    
    if(tourNumber.current >= 5){
      gameOverSetState(true);
      
    }
     

    let country, newPossibleResponses;
    country =  countriesState.splice(Math.floor(Math.random()*(countriesState.length)), 1)[0];
    
    if(!sortMethode.current){
   
      countriesState.sort((country1, country2)=> (country2.population*Math.random()- country1.population*Math.random()));

      newPossibleResponses = countriesState.splice(0, 3);
      newPossibleResponses = [country, ...newPossibleResponses];
      newPossibleResponses.sort((country1, country2)=> (country2.population*Math.random()- country1.population*Math.random()));
    }else{
      
      countriesState.sort((country1, country2)=> (country2.area*Math.random()- country1.area*Math.random()));

      newPossibleResponses = countriesState.splice(0, 3);
      newPossibleResponses = [...newPossibleResponses, country];
      newPossibleResponses.sort((country1, country2)=> (country2.area*Math.random()- country1.area*Math.random()));
    }

    sortMethode.current = !sortMethode.current
    correctResponseSetState(country);
    possibleResponsesSetState(newPossibleResponses);
    firstTestSetState(true);
  }
  
  function play(){
    let country = storageCountries.splice(Math.floor(Math.random()*(storageCountries.length)), 1)[0];
    let possibleResponses = storageCountries.splice(0, 3);
    possibleResponses = [...possibleResponses, country];

    tourNumber.current = 0;
    score.current = 5;
    

    correctResponseSetState(country);
    possibleResponsesSetState(possibleResponses);
    countriesSetState(storageCountries);
    gameOverSetState(false)
  }
  return (
    <>
    <div id="app">
      <h1>Country quiz</h1>
      <div className="container">
        {
          gameOverState ? 
          
          <div className = "results">
            <div className="img"><img src={resultsImg} alt="" /></div>
            <h2>Results</h2>
            <p>You got <span>{score.current}/5</span> correct answers</p>
            <button className="button" onClick = { e => play()}>
              Try again
            </button>
          </div> 
          : 
          <>
            <div className="logo">
            <img src={adventure}alt="" /> 
            </div>
            <div className="question">{correctResponseState.capital} is the capital of ?</div>
            <ul className="responses">
              {
                
                possibleResponsesState.map((possibleResponse, index) => 
                                          <Response
                                            name = {possibleResponse.name}
                                            key = {possibleResponse.name} 
                                            index ={index}
                                            correctResponse = {correctResponseState}
                                            addToRef= {addToRef}
                                            possibleShownResponses = {ref.current}
                                            countriesSetState = {countriesSetState}
                                            countriesState = {countriesState}
                                            newQuestion = {newQuestion}
                                            possibleResponsesSetState = {possibleResponsesSetState}
                                            possibleResponsesState = {possibleResponsesState}
                                            firstTestState = {firstTestState}
                                            firstTestSetState ={ firstTestSetState}
                                            gameOverSetState = {gameOverSetState}
                                            score = {score}
                                            tourNumber = {tourNumber}
                                  
                                          />
                                          )
                                          
             }
            </ul>
          </>
      
          
        }
      </div>

    </div>
    <footer><p>created by <a target="_blank" href="https://github.com/yousoumar" rel="noreferrer">yousoumar</a> - devchallenges.io</p></footer>
    </>
  );
}

export default App;
