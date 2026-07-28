import { workouts } from "./workouts"
import { Timer } from "./timer"
import { createSchedule, secsToString } from "./utils"
import '../styles.css'

const qs = window.location.search
const workoutIndex = qs.split('=')[1]
const workout = workouts[workoutIndex]

console.log('Core Timer - Total workouts:', workouts.length);
console.log('Loading workout index:', workoutIndex);
console.log('Workout name:', workout?.name);
console.log('First phase:', workout?.phases[0]?.name)

const workoutNameElement = document.getElementById('workout-name')
workoutNameElement.innerHTML = workout.name

const warmupContainer = document.getElementById('warmup')
let globalExerciseIndex = 0

workout.phases.forEach(phase => {
  const section = document.createElement('section')
  section.className = 'phase-section'

  const header = document.createElement('h2')
  header.innerHTML = phase.name
  section.appendChild(header)

  const exerciseList = document.createElement('ul')

  for (let setNum = 1; setNum <= phase.sets; setNum++) {
    phase.exercises.forEach(exercise => {
      const listitem = document.createElement('li')
      listitem.id = `exercise-${globalExerciseIndex}`
      listitem.className = globalExerciseIndex === 0 ? 'current' : 'upcoming'
      const setLabel = phase.sets > 1 ? ` (Set ${setNum}/${phase.sets})` : ''
      listitem.innerHTML = `<span class="status-icon"></span>${exercise.name}${setLabel}`
      exerciseList.appendChild(listitem)
      globalExerciseIndex++
    })
  }

  section.appendChild(exerciseList)
  warmupContainer.appendChild(section)
})

const duration = 15 + workout.phases.reduce((total, phase) => {
  return total + phase.sets * phase.exercises.reduce((s, ex) => s + ex.work + ex.rest, 0) + (phase.sets - 1) * phase.restBetweenSets
}, 0)

const durationElement = document.getElementById('duration')
const durationText = document.createElement('p')
durationText.innerHTML = 'Duration: ' + secsToString(duration)
durationElement.appendChild(durationText)

const startBtn = document.getElementById('start-button')
const timer = new Timer(createSchedule(workout.phases))
startBtn.addEventListener('click', () => {
  timer.start()
})
