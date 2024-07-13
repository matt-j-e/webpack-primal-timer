const qs = window.location.search
const workoutIndex = qs.split('=')[1]
// define the current workout
// this will become the result of a dropdown selection
// const workout = workouts.filter(workout => workout.name === '1B Recovery')[0]
const workout = workouts[workoutIndex]

// define timer UI elements
const workoutNameElement = document.getElementById('workout-name')
const warmupElement = document.getElementById('warmup')
const worksetElement = document.getElementById('workset')
const finisherElement = document.getElementById('finisher')
const cooldownElement = document.getElementById('cooldown')
const durationElement = document.getElementById('duration')

// create separate workout phase objects
const warmupExercises = workout.exercises.filter(exercise => exercise.phase === 'warmup')
const worksetExercises = workout.exercises.filter(exercise => exercise.phase === 'workset')
const finisherExercises = workout.exercises.filter(exercise => exercise.phase === 'finisher')
const cooldownExercises = workout.exercises.filter(exercise => exercise.phase === 'cooldown')

// define workout title
workoutNameElement.innerHTML = workout.name

// define section headers
const warmupHeader = document.createElement('h2')
warmupHeader.innerHTML = 'Warmup'
warmupElement.appendChild(warmupHeader)

const worksetHeader = document.createElement('h2')
worksetHeader.innerHTML = 'Workset'
worksetElement.appendChild(worksetHeader)

const finisherHeader = document.createElement('h2')
finisherHeader.innerHTML = 'Finisher'
if (finisherExercises.length > 0) {
  finisherElement.appendChild(finisherHeader)
}

const cooldownHeader = document.createElement('h2')
cooldownHeader.innerHTML = 'Cooldown'
if (cooldownExercises.length > 0) {
  cooldownElement.appendChild(cooldownHeader)
}

// define exercise lists for each phase
const warmupExercisesList = document.createElement('ul')
warmupElement.appendChild(warmupExercisesList)
warmupExercises.forEach(exercise => {
  const listitem = document.createElement('li')
  listitem.innerHTML = exercise.name
  warmupExercisesList.appendChild(listitem)
})

const worksetExercisesList = document.createElement('ul')
worksetElement.appendChild(worksetExercisesList)
worksetExercises.forEach(exercise => {
  const listitem = document.createElement('li')
  listitem.innerHTML = exercise.name
  worksetExercisesList.appendChild(listitem)
})

const finisherExercisesList = document.createElement('ul')
finisherElement.appendChild(finisherExercisesList)
finisherExercises.forEach(exercise => {
  const listitem = document.createElement('li')
  listitem.innerHTML = exercise.name
  finisherExercisesList.appendChild(listitem)
})

const cooldownExercisesList = document.createElement('ul')
cooldownElement.appendChild(cooldownExercisesList)
cooldownExercises.forEach(exercise => {
  const listitem = document.createElement('li')
  listitem.innerHTML = exercise.name
  cooldownExercisesList.appendChild(listitem)
})

// calculate total workout time
const duration = workout.exercises.reduce((total, exercise) => {
  return total += (exercise.work + exercise.rest)
}, 0)

// insert duration in UI
const durationText = document.createElement('p')
durationText.innerHTML = 'Workout duration: ' + secsToString(duration)
durationElement.appendChild(durationText)

// define start, pause & resume buttons
const startBtn = document.getElementById('start-button')
const timer = new Timer(createSchedule(workout.exercises))
startBtn.addEventListener('click', () => {
  timer.start()
})
