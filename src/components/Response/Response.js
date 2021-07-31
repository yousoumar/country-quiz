import {useRef, useState} from 'react';
export default function Response({name, index, correctResponse, possibleShownResponses, addToRef, newQuestion, firstTestState, firstTestSetState, score }) {
    
    function checkResponse(element) {

        if(firstTestState){
            firstTestSetState(false);
            let userResponse = element.children[1].innerText;
            if (userResponse === correctResponse.name){
                element.classList.add('correct');
                element.querySelector('img').src = process.env.PUBLIC_URL + '/images/correct.svg'
                
            }else{
                score.current --;
                element.classList.add('incorrect');
                element.querySelector('img').src = process.env.PUBLIC_URL + '/images/incorrect.svg';
                possibleShownResponses.forEach(element => {
                    if (element.children[1].innerText === correctResponse.name){
                        element.classList.add('correct');
                        element.querySelector('img').src = process.env.PUBLIC_URL + '/images/correct.svg'
                    }
                });
            }
        }else{
            return
        }
        
        
        setTimeout(()=>{
            
            firstTestSetState(true);
            newQuestion();
            
        }, 1000)

    }

    return (
        <li
            key = {name} 
            onClick = {(e) => checkResponse(e.currentTarget)}
            ref = {addToRef}
            
        >
            <span>{String.fromCharCode(65 + index)}</span>
            <span>{name}</span>
            <span className = "icon"><img src="" alt="" /></span>
        </li>
    )
}
