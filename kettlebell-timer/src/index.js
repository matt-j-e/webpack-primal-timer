import { workouts } from './workouts'
import '../styles.css'

const workoutSelect = document.getElementById('workout-select');
const workoutSelectorButton = document.getElementById('workout-selector-button');

console.log('Kettlebell Timer - Loaded workouts:', workouts.length);
console.log('First workout:', workouts[0]?.name);

workouts.forEach((workout, i) => {
  const option = document.createElement('option');
  option.setAttribute('value', i);
  option.innerText = workout.name;
  workoutSelect.appendChild(option);
});

workoutSelectorButton.addEventListener('click', (e) => {
  console.log('Selected workout index >>>', workoutSelect.value);
  window.location.href = "/kettlebell-timer/timer.html?w=" + workoutSelect.value;
})
