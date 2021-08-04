import {useEffect} from 'react';
import adventure from '../assets/adventure.svg';
import Response from './Response';
import resultsImg from '../assets/winners.svg';
import Loader from './Loader';
import useFetch from './useFetch';
import useGame from './useGame';

function App() {

  const {
          countriesState, 
          countriesSetState, 
          storageData, 
          apiErrorState, 
          loaderState
        } = useFetch("https://restcountries.eu/rest/v2/all");

  const {
          newRound, 
          newQuestion, 
          addToPossibleShownResponsesRef,
          firstTestSetState,
          firstTestState,
          gameOverState, 
          correctResponseState, 
          possibleResponsesState,
          possibleShownResponsesRef, 
          toggleFlagCapitalState, 
          tourNumber, 
          score, 
        } = useGame (storageData, countriesSetState, countriesState);

  
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
                                                      addToPossibleShownResponsesRef= {addToPossibleShownResponsesRef}
                                                      possibleShownResponsesRef = {possibleShownResponsesRef}
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
