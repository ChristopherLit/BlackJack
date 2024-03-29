import React from "react";
import DealerContainer from "./Animations/DealerContainer";
import YourContainer from "./Animations/YourContainer";
import ShowScreen from "./showScreen";

function Board() {
  return (
    <div className='board'>
      <img id="GameBoard" src="./src/assets/Table.png" alt="Game board" />

        <DealerContainer>
          <img id="hidden" src="./src/assets/BACK.png" alt="Hidden card" />
        </DealerContainer>

        <YourContainer />
        <ShowScreen />

        <div className='dealer-score'>
          <div id="dealer-value" className='dealer-value'></div>
          <div className='dealer-word'>Dealer</div>
        </div>

        <div className='your-score'>
          <div id="your-value" className='your-value'></div>
          <div className='your-word'>Player</div>
        </div>
    </div>
  );
}

export default Board;
