
export default function Response({name, index, correctResponse, possibleShownResponsesRef, addToPossibleShownResponsesRef, firstTestState, firstTestSetState, score, newQuestion}) {
    
    function checkResponse(element) {

        if(firstTestState){
            firstTestSetState(false);
            let userResponse = element.children[1].innerText;
            if (userResponse === correctResponse.name){
                element.classList.add('correct');
                element.querySelector('img').src = process.env.PUBLIC_URL + '/images/correct.svg';
                
            }else{
                score.current --;
                element.classList.add('incorrect');
                element.querySelector('img').src = process.env.PUBLIC_URL + '/images/incorrect.svg';
                possibleShownResponsesRef.forEach(element => {
                    if (element.children[1].innerText === correctResponse.name){
                        element.classList.add('correct');
                        element.querySelector('img').src = process.env.PUBLIC_URL + '/images/correct.svg';
                    }
                });
            }
        }else{
            return;
        }

        setTimeout(()=>{
            
            newQuestion();
            
        }, 1500);

    }

    return (
        <li
            key = {name} 
            onClick = {(e) => checkResponse(e.currentTarget)}
            ref = {addToPossibleShownResponsesRef}
            
        >
            <span>{String.fromCharCode(65 + index)}</span>
            <span>{name}</span>
            <span className = "icon"><img src="" alt="" /></span>
        </li>
    )
}
