const workoutSelect = document.getElementById('workout-select');
const workoutSelectorButton = document.getElementById('workout-selector-button');

workouts.forEach((workout, i) => {
  const option = document.createElement('option');
  option.setAttribute('value', i);
  option.innerText = workout.name;
  workoutSelect.appendChild(option);
});

workoutSelectorButton.addEventListener('click', (e) => {
  console.log('Selected workout index >>>', workoutSelect.value);
  window.location.href = "timer.html?w=" + workoutSelect.value;
})
