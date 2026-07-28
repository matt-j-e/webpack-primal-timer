export function createSchedule(phases) {
  const result = []

  // Pre-compute all exercise occurrences across phases and sets
  const occurrences = []
  for (const phase of phases) {
    for (let setNum = 1; setNum <= phase.sets; setNum++) {
      for (const exercise of phase.exercises) {
        occurrences.push({ name: exercise.name, phaseName: phase.name, setNum, totalSets: phase.sets })
      }
    }
  }

  // Prep
  for (let i = 0; i < 15; i++) {
    result.push({ state: 'Prep', remainingTime: 15 - i, nextExercise: 'First up: ' + occurrences[0].name })
  }

  let exerciseIndex = 0

  for (const phase of phases) {
    for (let setNum = 1; setNum <= phase.sets; setNum++) {
      const isLastSet = setNum === phase.sets

      phase.exercises.forEach((exercise, exIdx) => {
        const isLastExerciseInSet = exIdx === phase.exercises.length - 1
        const setLabel = phase.sets > 1 ? `Set ${setNum} of ${phase.sets}` : null

        let nextExercise
        if (isLastExerciseInSet && !isLastSet) {
          nextExercise = `Set ${setNum + 1} of ${phase.sets} coming up`
        } else {
          nextExercise = exerciseIndex + 1 < occurrences.length ? occurrences[exerciseIndex + 1].name : null
        }

        for (let i = 0; i < exercise.work; i++) {
          result.push({ state: 'work', remainingTime: exercise.work - i, exercise: exercise.name, nextExercise, setLabel, phase: phase.name, exerciseIndex })
        }

        if (exercise.rest > 0) {
          for (let i = 0; i < exercise.rest; i++) {
            result.push({ state: 'rest', remainingTime: exercise.rest - i, nextExercise, setLabel, phase: phase.name, exerciseIndex })
          }
        }

        exerciseIndex++
      })

      if (!isLastSet && phase.restBetweenSets > 0) {
        for (let i = 0; i < phase.restBetweenSets; i++) {
          result.push({ state: 'set-rest', remainingTime: phase.restBetweenSets - i, nextExercise: `Set ${setNum + 1} of ${phase.sets} coming up`, phase: phase.name })
        }
      }
    }
  }

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
