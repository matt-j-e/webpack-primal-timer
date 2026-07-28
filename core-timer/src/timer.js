export class Timer {
  constructor(schedule) {
    this.schedule = schedule
    this.current = 0
    this.currentExerciseIndex = -1
    this.startBtn = document.getElementById('start-button')
    this.pauseResumeBtn = document.getElementById('pause-resume-button')
    this.currentExerciseElement = document.getElementById('current-exercise')
    this.setLabelElement = document.getElementById('set-label')
    this.stateElement = document.getElementById('state')
    this.timerElement = document.getElementById('countdown')
    this.countdownId = null
    this.isPaused = false
    this.beep = new Audio("https://www.fesliyanstudios.com/play-mp3/5464")
    this.beep.preload = 'auto'
    this.audioInitialized = false
    this.wakeLock = null
  }

  async initializeAudio() {
    if (!this.audioInitialized) {
      try {
        await this.beep.play()
        this.beep.pause()
        this.beep.currentTime = 0
        this.audioInitialized = true
      } catch (error) {
        console.log('Audio initialization failed:', error)
      }
    }
  }

  async playBeep() {
    try {
      this.beep.currentTime = 0
      await this.beep.play()
    } catch (error) {
      console.log('Beep playback failed:', error)
    }
  }

  async requestWakeLock() {
    try {
      if ('wakeLock' in navigator) {
        this.wakeLock = await navigator.wakeLock.request('screen')
        console.log('Wake Lock activated')
      }
    } catch (error) {
      console.log('Wake Lock request failed:', error)
    }
  }

  async releaseWakeLock() {
    if (this.wakeLock) {
      try {
        await this.wakeLock.release()
        this.wakeLock = null
        console.log('Wake Lock released')
      } catch (error) {
        console.log('Wake Lock release failed:', error)
      }
    }
  }

  updateProgress(exerciseIndex) {
    if (exerciseIndex === this.currentExerciseIndex) return

    this.currentExerciseIndex = exerciseIndex

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

    if (!this.pauseResumeBtn.dataset.listenerAdded) {
      this.pauseResumeBtn.addEventListener('click', () => this.togglePause())
      this.pauseResumeBtn.dataset.listenerAdded = 'true'
    }

    this.initializeAudio()
    this.requestWakeLock()
    this.startBtn.style.display = 'none'
    this.pauseResumeBtn.style.display = 'block'
    this.pauseResumeBtn.innerHTML = 'Pause'

    this.countdownId = setInterval(() => {
      const step = this.schedule[this.current]

      this.stateElement.innerHTML = step.state === 'set-rest' ? 'SET REST' : step.state.toUpperCase()
      this.timerElement.innerHTML = this.formatTime(step.remainingTime)

      if (step.state === 'work') {
        this.currentExerciseElement.innerHTML = step.exercise
      } else if (step.state === 'rest') {
        this.currentExerciseElement.innerHTML = step.nextExercise ? 'Next: ' + step.nextExercise : ''
      } else {
        this.currentExerciseElement.innerHTML = step.nextExercise || ''
      }

      if ((step.state === 'work' || step.state === 'rest') && step.setLabel) {
        this.setLabelElement.innerHTML = step.setLabel
      } else {
        this.setLabelElement.innerHTML = ''
      }

      if (step.exerciseIndex !== undefined) {
        this.updateProgress(step.exerciseIndex)
      }

      if (step.remainingTime < 6 || step.remainingTime === 10) {
        this.playBeep()
      }

      this.current++
      if (this.current > this.schedule.length - 1) {
        clearInterval(this.countdownId)
        this.releaseWakeLock()
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
      this.releaseWakeLock()
      this.isPaused = true
      this.pauseResumeBtn.innerHTML = 'Resume'
    }
  }
}
