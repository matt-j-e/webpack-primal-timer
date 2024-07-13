function createSchedule(exercises) {
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
    for (let i = 0; i < exercise.work; i++) {
      result.push({
        exercise: exercise.name,
        state: 'work',
        remainingTime: exercise.work - i,
        phase: exercise.phase
      })
    }
    for (let i = 0; i < exercise.rest; i++) {
      result.push({
        nextExercise: index < exercises.length - 1 ? 'Next up: ' + exercises[index + 1].name : null,
        state: 'rest',
        remainingTime: exercise.rest - i,
        phase: exercise.phase
      })
    }
  })

  return result
}

function secsToString(secs) {
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
