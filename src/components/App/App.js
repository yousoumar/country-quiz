import {useState, useEffect, useRef} from 'react';
import adventure from '../../assets/adventure.svg';
import Response from '../Response/Response';
import resultsImg from '../../assets/winners.svg';

function App() {

  // store data sent by the API
  const storageCountries = JSON.parse(localStorage.getItem('countries')) ;
  const [countriesState, countriesSetState] = useState([]);

  // current question response
  const [correctResponseState, correctResponseSetState] = useState({});

  // current question possible responses
  const [possibleResponsesState, possibleResponsesSetState] = useState([]);

  // to store score
  const score = useRef(5);

  // count the number of game turns
  let tourNumber = useRef(0);

  const [gameOverState, gameOverSetState] = useState(false);
  useEffect(() => {
    
    if (!storageCountries){
      fetch("https://restcountries.eu/rest/v2/all")
      .then(response => response.json())
      .then(data =>{
        localStorage.setItem('countries', JSON.stringify(data));

        let country = data[Math.floor(Math.random()*(data.length))];
        let countriesWithoutCurrentQuestionCountry = data.filter(item => item.name !== country.name);
        let possibleResponses = countriesWithoutCurrentQuestionCountry.splice(0, 3);
        possibleResponses = [country, ...possibleResponses];

        correctResponseSetState(country);
        possibleResponsesSetState(possibleResponses);
        countriesSetState(countriesWithoutCurrentQuestionCountry);
      } );
    }else{

        play();

    }
   
    
    
  }, []);


  // to store possible responses reference
  const ref = useRef([]);

  function addToRef(element) {
      
    if (element && !(ref.current.includes(element))){
      ref.current.push(element);
    }  
    
  }
  
  let [firstTestState, firstTestSetState] = useState(true);
  let sortMethode = useRef(true)

  function newQuestion() {
    tourNumber.current ++;
    if(tourNumber.current >= 5){
      gameOverSetState(true)
    }
    ref.current = [];
    countriesSetState(countriesState.filter(item => item.name !== correctResponseState.name));
    

    let country,countriesWithoutCurrentQuestionCountry ,newPossibleResponses;
    country = countriesState[Math.floor(Math.random()*(countriesState.length))];
    if(!sortMethode.current){
      sortMethode.current = !sortMethode.current
      countriesWithoutCurrentQuestionCountry = countriesState.filter(item => item.name !== country.name).sort((country1, country2)=> (country2.population*Math.random()- country1.population*Math.random()));
      newPossibleResponses = countriesWithoutCurrentQuestionCountry.splice(0, 3);
      newPossibleResponses = [country, ...newPossibleResponses];
      newPossibleResponses.sort((country1, country2)=> (country2.population*Math.random()- country1.population*Math.random()));
    }else{
      sortMethode.current = !sortMethode.current
      countriesWithoutCurrentQuestionCountry = countriesState.filter(item => item.name !== country.name);
      newPossibleResponses = countriesWithoutCurrentQuestionCountry.splice(0, 3);
      newPossibleResponses.push(country);
      newPossibleResponses.sort((country1, country2)=> (country2.area*Math.random() - country1.area*Math.random()))
    }
    countriesSetState(countriesWithoutCurrentQuestionCountry);
    correctResponseSetState(country);
    possibleResponsesSetState(newPossibleResponses);
    firstTestSetState(true);
  }
  
  function play(){
    let country = storageCountries[Math.floor(Math.random()*(storageCountries.length))];
    let countriesWithoutCurrentQuestionCountry = storageCountries.filter(item => item.name !== country.name);
    let possibleResponses = countriesWithoutCurrentQuestionCountry.splice(0, 3);
    possibleResponses = [country, ...possibleResponses];

    correctResponseSetState(country);
    possibleResponsesSetState(possibleResponses);
    countriesSetState(countriesWithoutCurrentQuestionCountry);
    gameOverSetState(false)
  }
  return (
    <div id="app">
      <h1>Country quiz</h1>
      <div className="container">
        {
          gameOverState ? 
          
          <div className = "results">
            <div className="img"><img src={resultsImg} alt="" /></div>
            <h2>Results</h2>
            <p>You got <span>{score.current}</span> correct answers</p>
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
                
                possibleResponsesState.map((response, index) => 
                                          <Response
                                            name = {response.name}
                                            key = {response.name} 
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
  );
}

export default App;
