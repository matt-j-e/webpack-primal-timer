import { workouts } from "./workouts"
import { Timer } from "./timer"
import { createSchedule, secsToString } from "./utils"
import '../styles.css'

const qs = window.location.search
const workoutIndex = qs.split('=')[1]
const workout = workouts[workoutIndex]

// define workout title
const workoutNameElement = document.getElementById('workout-name')
workoutNameElement.innerHTML = workout.name

// Group exercises by phase dynamically
const phases = {}
const phaseOrder = []

workout.exercises.forEach((exercise, index) => {
  const phaseName = exercise.phase
  if (!phases[phaseName]) {
    phases[phaseName] = []
    phaseOrder.push(phaseName)
  }
  phases[phaseName].push({ ...exercise, globalIndex: index })
})

// Create sections dynamically for each phase
const warmupContainer = document.getElementById('warmup')
let globalExerciseIndex = 0

phaseOrder.forEach(phaseName => {
  const section = document.createElement('section')
  section.className = 'phase-section'

  const header = document.createElement('h2')
  header.innerHTML = phaseName.charAt(0).toUpperCase() + phaseName.slice(1)
  section.appendChild(header)

  const exerciseList = document.createElement('ul')
  phases[phaseName].forEach((exercise) => {
    const listitem = document.createElement('li')
    listitem.id = `exercise-${globalExerciseIndex}`
    listitem.className = globalExerciseIndex === 0 ? 'current' : 'upcoming'
    const repsWeight = exercise.targetReps && exercise.weight ? `${exercise.targetReps}x${exercise.weight}kg` : ''
    listitem.innerHTML = `<span class="status-icon"></span>${exercise.name}${repsWeight ? ' (' + repsWeight + ')' : ''}`
    exerciseList.appendChild(listitem)
    globalExerciseIndex++
  })
  section.appendChild(exerciseList)
  warmupContainer.appendChild(section)
})

// calculate total workout time
const duration = workout.exercises.reduce((total, exercise) => {
  return total += (exercise.work + exercise.rest)
}, 0)

// insert duration in UI
const durationElement = document.getElementById('duration')
const durationText = document.createElement('p')
durationText.innerHTML = 'Duration: ' + secsToString(duration)
durationElement.appendChild(durationText)

// define start and pause/resume button
const startBtn = document.getElementById('start-button')
const timer = new Timer(createSchedule(workout.exercises))
startBtn.addEventListener('click', () => {
  timer.start()
})
