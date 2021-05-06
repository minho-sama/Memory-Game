import {useState, useEffect} from 'react';
import GameBoard from './components/Gameboard/GameBoard';
import Header from './components/Header/Header';
import {charData} from './charData';
import GameOver from './components/GameOver/GameOver'


function App() {
  //score
  const [score, setScore] = useState(0);
  const [record, setRecord] = useState(localStorage.getItem('record'));
  
  //initial record setup
  if(localStorage.length === 0){
    localStorage.setItem('record', 0)
  }

  const setNewRecord = (newRecord) => {
    localStorage.setItem('record', newRecord)
    setRecord(localStorage.getItem('record'))
  }

  const checkRecord = () => {
    if (score >= record){
      setNewRecord(score)
    }
  }

  useEffect(() => {
    checkRecord()
  }, [score])

  //game
  const [characterArr, setCharacterArr] = useState([]);
  const [clickedCharArr, setClickedCharArr] = useState([]);
  const [isGameOver, setIsGameOver] = useState(false);

  useEffect(() => {
    shuffle(charData)
    setCharacterArr(charData)
  }, []);

  const shuffle = (array) => {
    for (let i = array.length - 1; i >= 0; i--){
      let j = Math.floor(Math.random() * array.length);
      // let temp = array[i];
      // array[i] = array[j];
      // array[j] = temp;
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  const playRound = (id) => {
    setClickedCharArr([...clickedCharArr, id])
    const isAlreadyClicked = clickedCharArr.includes(id)

    if(isAlreadyClicked) {
      gameOver()
    }
    else if(clickedCharArr.length === 11){
      setScore((prevScore) => prevScore + 1)
      gameOver()
    }
    else{
      setScore((prevScore) => prevScore + 1);
      shuffle(charData)
    }
  }

  const gameOver = () => {
    setClickedCharArr([])
    setIsGameOver(true)
    shuffle(charData)
    setCharacterArr(charData)
  }

  return (
    <>
    <Header score = {score} record = {record}/>
    {isGameOver ? <GameOver setIsGameOver = {setIsGameOver} score = {score} setScore = {setScore} clickedCharArr = {clickedCharArr}/> :
    <GameBoard characterArr = {characterArr} playRound = {playRound} isGameOver = {isGameOver}/>
    }
    </>
  );
}

export default App;
