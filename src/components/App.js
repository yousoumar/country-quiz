import {useState, useRef, useEffect} from 'react';
import adventure from '../assets/adventure.svg';
import Response from './Response';
import resultsImg from '../assets/winners.svg';
import Loader from './Loader';
import useFetch from './useFetch';

function App() {

  const {countriesState, countriesSetState, storageData, apiErrorState, loaderState} = useFetch("https://restcountries.eu/rest/v2/all");

  // current question response
  const [correctResponseState, correctResponseSetState] = useState({});

  // current question possible responses
  const [possibleResponsesState, possibleResponsesSetState] = useState([]);

  // prevents user from trying the same question multiple times
  const [firstTestState, firstTestSetState] = useState(true);

  // play and end game
  const [gameOverState, gameOverSetState] = useState(false);

  // allows to alternate questions between flag and capital
  const [toggleFlagCapitalState, toggleFlagCapitalSetState] = useState(false);

  // to store possible responses reference
  const ref = useRef([]);

  // to store score
  const score = useRef(10);

  // counts remaining questions number 
  const tourNumber = useRef(0);
  

  function addToRef(element) {
      
    if (element && !(ref.current.includes(element))){
      ref.current.push(element);
    }  
    
  }
  
  function newQuestion() {
    ref.current = [];   
    tourNumber.current ++;
    
    if(tourNumber.current > 10){
      gameOverSetState(true);
      
    }
     

    let country, newPossibleResponses;
    country =  countriesState.splice(Math.floor(Math.random()*(countriesState.length)), 1)[0];
    countriesState.sort((country1, country2)=> (parseInt(country2.numericCode)*Math.random()- parseInt(country1.numericCode)*Math.random()));

    newPossibleResponses = countriesState.splice(0, 3);
    newPossibleResponses = [country, ...newPossibleResponses].sort((country1, country2)=> (parseInt(country2.numericCode)*Math.random()- parseInt(country1.numericCode)*Math.random()));
  
    correctResponseSetState(country);
    possibleResponsesSetState(newPossibleResponses);
    toggleFlagCapitalSetState(!toggleFlagCapitalState);
    firstTestSetState(true);
  }
  
  function newRound(){
    tourNumber.current = 0;
    score.current = 10;
    countriesSetState(storageData.slice());
    gameOverSetState(false);

  }
  
  useEffect(()=>{

    if (countriesState.length !== 0 ){
      newQuestion();
    }
   
    // eslint-disable-next-line
  }, [countriesState]);
  
  return (
    <>
      {
        loaderState === 'loading' ? <Loader /> : 
        <>
          {
            apiErrorState ? <p className = "apiError">We have issues with our database. Please come back later :)</p> : 
              <div id="app">
                <h1>Country quiz</h1>
                <div className="container">
                  {
                    gameOverState ? 
                    
                    <div className = "results">
                      <div className="img"><img src={resultsImg} alt="" /></div>
                      <h2>Results</h2>
                      <p>You got <span>{score.current}/10</span> correct answers.</p>
                      <button className="button" onClick = { e => newRound()}>
                        Try again
                      </button>
                    </div> 
                    : 
                    <>
                      <div className="logo">
                        <img src={adventure}alt="" /> 
                      </div>
                      <div className = "tour-number">{tourNumber.current}/10</div>
                      {
                        toggleFlagCapitalState ? 
                        <div>
                          <div className="flag"><img src={correctResponseState.flag} alt="" /></div>
                          <div className="question">Which country does this flag belong to? </div>
                        </div>
                        :
                        <div className="question">{correctResponseState.capital} is the capital of ?</div>
                      }
                      
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
                                                      firstTestState = {firstTestState}
                                                      firstTestSetState ={ firstTestSetState}
                                                      score = {score}
                                                      newQuestion = {newQuestion}
                                                    />
                                                    )
                                                    
                      }
                      </ul> 
                    </>
                
                    
                  }
                </div>

              </div>
          }
        </>
      }
    </>
  );
}

export default App;
