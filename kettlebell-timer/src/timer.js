export class Timer {
  constructor(schedule) {
    this.schedule = schedule
    this.current = 0
    this.currentExerciseIndex = -1
    this.startBtn = document.getElementById('start-button')
    this.pauseResumeBtn = document.getElementById('pause-resume-button')
    this.currentExerciseElement = document.getElementById('current-exercise')
    this.targetRepsElement = document.getElementById('target-reps')
    this.nextExerciseElement = document.getElementById('next-exercise')
    this.stateElement = document.getElementById('state')
    this.timerElement = document.getElementById('countdown')
    this.countdownId = null
    this.isPaused = false
    this.beep = new Audio("https://www.fesliyanstudios.com/play-mp3/5464")
    this.audioUnlocked = false
  }

  updateProgress(exerciseIndex) {
    if (exerciseIndex === this.currentExerciseIndex) return

    this.currentExerciseIndex = exerciseIndex

    // Select all list items with exercise IDs from all sections
    const allExerciseItems = document.querySelectorAll('li[id^="exercise-"]')
    allExerciseItems.forEach((item, index) => {
      if (index < exerciseIndex) {
        item.className = 'completed'
      } else if (index === exerciseIndex) {
        item.className = 'current'
      } else {
        item.className = 'upcoming'
      }
    })
  }

  formatTime(totalSecs) {
    let mins = Math.floor(totalSecs / 60)
    let secs = totalSecs % 60
    mins = mins < 10 ? '0'+mins : mins
    secs = secs < 10 ? '0'+secs : secs
    return `${mins}:${secs}`
  }

  start() {
    if (this.countdownId) return

    // Setup pause/resume toggle button
    if (!this.pauseResumeBtn.dataset.listenerAdded) {
      this.pauseResumeBtn.addEventListener('click', () => this.togglePause())
      this.pauseResumeBtn.dataset.listenerAdded = 'true'
    }

    this.startBtn.style.display = 'none'
    this.pauseResumeBtn.style.display = 'block'
    this.pauseResumeBtn.innerHTML = 'Pause'

    // Unlock audio for iOS on first user interaction
    if (!this.audioUnlocked) {
      this.beep.play().then(() => {
        this.beep.pause()
        this.beep.currentTime = 0
      }).catch(() => {
        // Ignore errors - audio will be unlocked on next play attempt
      })
      this.audioUnlocked = true
    }

    this.countdownId = setInterval(() => {
      this.step = this.schedule[this.current]
      this.currentExerciseElement.innerHTML = this.step.exercise ? this.step.exercise : this.step.nextExercise
      this.stateElement.innerHTML = this.step.state.toUpperCase()
      this.timerElement.innerHTML = this.formatTime(this.step.remainingTime)

      // Display target reps with weight
      if (this.step.targetReps && this.step.weight) {
        this.targetRepsElement.innerHTML = `${this.step.targetReps} x ${this.step.weight}kg`
      } else if (this.step.targetReps) {
        this.targetRepsElement.innerHTML = `${this.step.targetReps} reps`
      } else {
        this.targetRepsElement.innerHTML = ''
      }

      // Show "Next up" throughout the entire exercise, but NOT during Prep
      if (this.step.nextExercise && this.step.state !== 'Prep') {
        let nextText = `Next: ${this.step.nextExercise}`
        if (this.step.nextReps && this.step.nextWeight) {
          nextText += ` (${this.step.nextReps} x ${this.step.nextWeight}kg)`
        } else if (this.step.nextReps) {
          nextText += ` (${this.step.nextReps})`
        }
        this.nextExerciseElement.innerHTML = nextText
      } else {
        this.nextExerciseElement.innerHTML = ''
      }

      // Update progress list
      if (this.step.exerciseIndex !== undefined) {
        this.updateProgress(this.step.exerciseIndex)
      }

      if (this.step.remainingTime < 6 || this.step.remainingTime === 10) {
        this.beep.play().catch(() => {
          // Ignore audio play errors (iOS restrictions)
        })
      }
      this.current++
      if (this.current > this.schedule.length - 1) {
        clearInterval(this.countdownId)
        this.currentExerciseElement.style.display = 'none'
        this.stateElement.style.display = 'none'
        this.timerElement.innerHTML = 'COMPLETE'
        this.pauseResumeBtn.style.display = 'none'
      }
    }, 1000)
  }

  togglePause() {
    if (this.isPaused) {
      this.start()
      this.isPaused = false
      this.pauseResumeBtn.innerHTML = 'Pause'
    } else {
      clearInterval(this.countdownId)
      this.countdownId = null
      this.isPaused = true
      this.pauseResumeBtn.innerHTML = 'Resume'
    }
  }
}
