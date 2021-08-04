import {useEffect} from 'react';
import adventure from '../assets/adventure.svg';
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
          displayQuestion, 
          displayPossibleResponses,
          displayScore,
          displayRemainingQuestions, 
          gameOver, 
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
                    gameOver ? 
                    
                    <div className = "results">
                      <div className="img"><img src={resultsImg} alt="" /></div>
                      <h2>Results</h2>
                      <p>You got <span>{displayScore()}</span> correct answers.</p>
                      <button className="button" onClick = { e => newRound()}>
                        Try again
                      </button>
                    </div> 
                    : 
                    <>
                      <div className="logo">
                        <img src={adventure}alt="" /> 
                      </div>
                      <div className = "tour-number"> {displayRemainingQuestions()}</div>
                      {
                        displayQuestion()
                      }
                      
                      <ul className="responses">
                        {
                          
                          displayPossibleResponses()
                                                    
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
