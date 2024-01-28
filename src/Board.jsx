import Buttons from './Buttons';

function Board() {

    return (

        <div className='board'>

<img id="GameBoard" src="./src/assets/Table.png" alt="Game board" />

  <div id="dealer-cards">
    <img id="hidden" src="./src/assets/BACK.png"/>
  
  </div>

  <div id="your-cards">
    

  </div>

  <div className='dealer-score'>

<div id ="dealer-value" className='dealer-value'></div>
<div className='dealer-word'>Dealer</div>


</div>

  <div className='your-score'>

  <div id ="your-value" className='your-value'></div>
  <div className='your-word'>Player</div>


  </div>

  


 
  </div>


    );

}

export default Board