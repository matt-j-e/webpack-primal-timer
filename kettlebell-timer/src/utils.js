export function createSchedule(exercises) {
  const result = []

  // add prep time of 15 secs
  for (let i = 0; i < 15; i++) {
    result.push({
      nextExercise: 'First up: ' + exercises[0].name,
      state: 'Prep',
      remainingTime: 15 - i
    })
  }

  exercises.forEach((exercise, index) => {
    // Determine state based on whether this is EMOM (rest = 0) or traditional
    const workState = exercise.rest === 0 ? 'emom' : 'work'

    for (let i = 0; i < exercise.work; i++) {
      result.push({
        exercise: exercise.name,
        exerciseIndex: index,
        targetReps: exercise.targetReps,
        weight: exercise.weight,
        nextExercise: index < exercises.length - 1 ? exercises[index + 1].name : null,
        nextReps: index < exercises.length - 1 ? exercises[index + 1].targetReps : null,
        nextWeight: index < exercises.length - 1 ? exercises[index + 1].weight : null,
        state: workState,
        remainingTime: exercise.work - i,
        phase: exercise.phase
      })
    }
    for (let i = 0; i < exercise.rest; i++) {
      result.push({
        exerciseIndex: index,
        nextExercise: index < exercises.length - 1 ? exercises[index + 1].name : null,
        nextReps: index < exercises.length - 1 ? exercises[index + 1].targetReps : null,
        nextWeight: index < exercises.length - 1 ? exercises[index + 1].weight : null,
        state: 'rest',
        remainingTime: exercise.rest - i,
        phase: exercise.phase
      })
    }
  })

  return result
}

export function secsToString(secs) {
  const mins = Math.floor(secs / 60)
  const remainingSecs = Math.round(secs - (mins * 60))
  const finalSecs = remainingSecs < 10 ? '0' + remainingSecs : String(remainingSecs)
  const hours = Math.floor(mins / 60)
  const remainingMins = Math.round(mins - (hours * 60))
  const finalMins = remainingMins < 10 ? '0' + remainingMins : String(remainingMins)
  if (hours > 0) {
    return String(hours + ':' + finalMins + ':' + finalSecs)
  } else {
    return String(mins) + ':' + finalSecs
  }
}
