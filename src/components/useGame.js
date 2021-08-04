import {useState, useRef} from 'react';
import Response from './Response';

export default function useGame(storageData, countriesSetState, countriesState) {

    // allows to alternate questions between flag and capital
    const [toggleFlagCapitalState, toggleFlagCapitalSetState] = useState(false);

    // play and end game
    const [gameOverState, gameOverSetState] = useState(false);

    // prevents user from trying the same question multiple times
    const [firstTestState, firstTestSetState] = useState(true);

    // current question response
    const [correctResponseState, correctResponseSetState] = useState({});

    // current question possible responses
    const [possibleResponsesState, possibleResponsesSetState] = useState([]);

    // stores possible responses reference
    const possibleShownResponsesRef = useRef([]);

    // stores score
    const score = useRef(10);

    // counts remaining questions number 
    const tourNumber = useRef(0);
 

    function addToPossibleShownResponsesRef(element) {
      
        if (element && !(possibleShownResponsesRef.current.includes(element))){
            possibleShownResponsesRef.current.push(element);
        }  
        
    }
    
    function newQuestion() {
        possibleShownResponsesRef.current = [];   
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


    function displayQuestion(){

        return toggleFlagCapitalState ? 
                <div>
                    <div className="flag"><img src={correctResponseState.flag} alt="" /></div>
                    <div className="question">Which country does this flag belong to? </div>
                </div>
                        :
                <div className="question">{correctResponseState.capital} is the capital of ?</div>
        
    }

    function displayPossibleResponses(){

        return possibleResponsesState.map((possibleResponse, index) => 
                                                    <Response
                                                      name = {possibleResponse.name}
                                                      key = {possibleResponse.name} 
                                                      index ={index}
                                                      correctResponse = {correctResponseState}
                                                      addToPossibleShownResponsesRef= {addToPossibleShownResponsesRef}
                                                      possibleShownResponsesRef = {possibleShownResponsesRef.current}
                                                      firstTestState = {firstTestState}
                                                      firstTestSetState ={ firstTestSetState}
                                                      score = {score}
                                                      newQuestion = {newQuestion}
                                                    />
                                                    );
       
    }

    function displayScore(){
        return score.current+ "/10";
    }
    function displayRemainingQuestions(){
        return tourNumber.current + "/10";
    }
    return {
                newQuestion, 
                newRound, 
                displayQuestion, 
                displayPossibleResponses,
                displayScore,
                displayRemainingQuestions,
                gameOver : gameOverState,
            };
}
