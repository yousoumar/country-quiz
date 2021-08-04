import {useState, useRef} from 'react';

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

    return {
                newQuestion, 
                newRound, 
                toggleFlagCapitalState, 
                gameOverState, 
                correctResponseState, 
                possibleResponsesState, 
                score, 
                firstTestSetState, 
                firstTestState, 
                tourNumber, 
                possibleShownResponsesRef : possibleShownResponsesRef.current,
                addToPossibleShownResponsesRef
            };
}
