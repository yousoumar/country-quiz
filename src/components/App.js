import { useEffect } from "react";
import adventure from "../assets/adventure.svg";
import resultsImg from "../assets/winners.svg";
import Loader from "./Loader";
import useFetch from "./useFetch";
import useGame from "./useGame";

function App() {
  const data = useFetch("https://restcountries.com/v2/all");

  const game = useGame(data);

  useEffect(() => {
    if (data.countriesState.length !== 0) {
      game.newQuestion();
    }

    // eslint-disable-next-line
  }, [data.countriesState]);

  return (
    <>
      {data.loaderState === "loading" ? (
        <Loader />
      ) : (
        <>
          {data.apiErrorState ? (
            <p className="apiError">
              We have issues with our database. Please come back later :)
            </p>
          ) : (
            <div id="app">
              <h1>Country quiz</h1>
              <div className="container">
                {game.gameOver ? (
                  <div className="results">
                    <div className="img">
                      <img src={resultsImg} alt="" />
                    </div>
                    <h2>Results</h2>
                    <p>
                      You got <span>{game.displayScore()}</span> correct
                      answers.
                    </p>
                    <button className="button" onClick={(e) => game.newRound()}>
                      Try again
                    </button>
                  </div>
                ) : (
                  <>
                    <div className="logo">
                      <img src={adventure} alt="" />
                    </div>
                    <div className="tour-number">
                      {" "}
                      {game.displayRemainingQuestions()}
                    </div>
                    {game.displayQuestion()}

                    <ul className="responses">
                      {game.displayPossibleResponses()}
                    </ul>
                  </>
                )}
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
}

export default App;
