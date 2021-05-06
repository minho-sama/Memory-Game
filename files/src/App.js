import {useState, useEffect} from 'react';
import './App.css';
import GameBoard from './components/Gameboard/GameBoard';
import Header from './components/Header/Header';
import {charData} from './charData';

function App() {
  //score
  const [score, setScore] = useState(0);
  const [record, setRecord] = useState(localStorage.getItem('record'));
  
  const setNewRecord = (newRecord) => {
    localStorage.setItem('record', newRecord)
    setRecord(localStorage.getItem('record'))
  }

  //game
  const [characterArr, setCharacterArr] = useState([]);

  useEffect(() => {
    setCharacterArr(charData)
  }, []);

  return (
    <>
    <Header score = {score} record = {record}/>
    <GameBoard characterArr = {characterArr}/>
    {/* <button onClick = {() => setNewRecord(69)}>record click</button>
    <button onClick = {() => setScore((prevScore) => prevScore + 1)}>score + 1</button> */}
    </>
  );
}

export default App;
