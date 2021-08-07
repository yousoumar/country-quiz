
export default function Response(props) {
    
    function checkResponse(element) {

        if(props.firstTestState){
            props.firstTestSetState(false);
            let userResponse = element.children[1].innerText;
            if (userResponse ===  props.correctResponse.name){
                element.classList.add('correct');
                element.querySelector('img').src = process.env.PUBLIC_URL + '/images/correct.svg';
                
            }else{
                props.score.current --;
                element.classList.add('incorrect');
                element.querySelector('img').src = process.env.PUBLIC_URL + '/images/incorrect.svg';
                props.possibleShownResponsesRef.forEach(element => {
                    if (element.children[1].innerText ===  props.correctResponse.name){
                        element.classList.add('correct');
                        element.querySelector('img').src = process.env.PUBLIC_URL + '/images/correct.svg';
                    }
                });
            }
        }else{
            return;
        }

        setTimeout(()=>{
            
            props.newQuestion();
            
        }, 1500);

    }

    return (
        <li
            key = {props.name} 
            onClick = {(e) => checkResponse(e.currentTarget)}
            ref = {props.addToPossibleShownResponsesRef}
            
        >
            <span>{String.fromCharCode(65 + props.index)}</span>
            <span>{props.name}</span>
            <span className = "icon"><img src="" alt="" /></span>
        </li>
    )
}
