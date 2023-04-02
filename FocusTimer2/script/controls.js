// funções de start, play, plus, minus
import { 
  countdown,

} from "./timer.js";

import {
  buttonPlay,
  buttonPause,
  buttonReset,
  minutesDisplay,
  secondsDisplay,
  buttonDarkMode,
  buttonLightMode,
  clock,
  controls
} from './elements.js'

import { timerTimeOut } from './timer.js'

export function darkMode() {
  buttonLightMode.classList.add('hide');
  buttonDarkMode.classList.remove('hide');
  document.body.style.backgroundColor = "black";
  clock.style.color = "white";
  controls.style = "white";
}

export function lightMode() {
  buttonDarkMode.classList.add('hide');
  buttonLightMode.classList.remove('hide');
  document.body.style.backgroundColor = "white";
  clock.style.color = "black";
}

export function startTimer() {
  buttonPlay.classList.add('hide');
  buttonPause.classList.remove('hide');
  buttonReset.classList.remove('playOn');
  countdown();
}

export function pauseTimer (){
  timerTimeOut
  clearTimeout(timerTimeOut)
  buttonPause.classList.add('hide')
  buttonPlay.classList.remove('hide')
}


export function resetTimer(){
  minutesDisplay.textContent ="25"
  secondsDisplay.textContent = "00"
  buttonReset.classList.toggle('playOn')
  clearTimeout(timerTimeOut)
  pauseTimer()
  }  

