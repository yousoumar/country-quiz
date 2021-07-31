import {useState, useEffect, useRef} from 'react';
import './App.css';
import adventure from '../../assets/adventure.svg';
import Response from '../Response/Response';

function App() {

  // to store data sent by the API
  const [countriesState, countriesSetState] = useState([]);
  console.log(countriesState.length)
  // current question response
  const [correctResponseState, correctResponseSetState] = useState({});
  // current question possible responses
  const [possibleResponsesState, possibleResponsesSetState] = useState([]);


  useEffect(() => {
    fetch("https://restcountries.eu/rest/v2/all")
    .then(response => response.json())
    .then(data =>{
      let country = data[Math.floor(Math.random()*(data.length))];
      let countriesWithoutCurrentQuestionCountry = data.filter(item => item.name !== country.name);
      let possibleResponses = countriesWithoutCurrentQuestionCountry.splice(0, 3);
      possibleResponses = [country, ...possibleResponses]
      correctResponseSetState(country);
      possibleResponsesSetState(possibleResponses);
      countriesSetState(countriesWithoutCurrentQuestionCountry);
    } );
    
    
  }, []);


  // to store possible responses
  const ref = useRef([]);
  console.log(ref.current)
  function addToRef(element) {
      
    if (element && !(ref.current.includes(element))){
      ref.current.push(element);
    }  
    
  }
  
  let [firstTestState, firstTestSetState] = useState(true);
  let sortMethode = useRef(true)

  function newQuestion() {
    console.log(possibleResponsesState)
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
  }

  return (
    <div id="app">
      <h1>Country quiz</h1>
      <div className="container">
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
                                          />
                                          )
                                          
          }
        </ul>
      </div>
    </div>
  );
}

export default App;
