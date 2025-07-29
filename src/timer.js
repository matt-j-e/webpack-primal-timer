export class Timer {
  constructor(schedule) {
    this.schedule = schedule
    this.current = 0
    this.startBtn = document.getElementById('start-button')
    this.pauseResumeBtn = document.getElementById('pause-resume-button')
    this.currentExerciseElement = document.getElementById('current-exercise')
    this.stateElement = document.getElementById('state')
    this.timerElement = document.getElementById('countdown')
    this.countdownId = null
    this.isPaused = false
    this.beep = new Audio("https://www.fesliyanstudios.com/play-mp3/5464")
    this.beep.preload = 'auto'
    this.audioInitialized = false
    this.pauseResumeBtn.addEventListener('click', () => this.togglePauseResume())
  }

  formatTime(totalSecs) {
    let mins = Math.floor(totalSecs / 60)
    let secs = totalSecs % 60
    mins = mins < 10 ? '0'+mins : mins
    secs = secs < 10 ? '0'+secs : secs
    return `${mins}:${secs}`
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

  start() {
    if (this.countdownId) return
    this.initializeAudio()
    this.startBtn.style.display = 'none'
    this.countdownId = setInterval(() => {
      this.step = this.schedule[this.current]
      this.currentExerciseElement.innerHTML = this.step.exercise ? this.step.exercise : this.step.nextExercise
      this.stateElement.innerHTML = this.step.state
      this.timerElement.innerHTML = this.formatTime(this.step.remainingTime)
      if (this.step.remainingTime < 6 || this.step.remainingTime === 10) {
        this.playBeep()
      }
      this.current++
      if (this.current > this.schedule.length - 1) {
        clearInterval(this.countdownId)
        this.currentExerciseElement.style.display = 'none'
        this.stateElement.style.display = 'none'
        this.timerElement.innerHTML = 'COMPLETE'
      }
    }, 1000)
  }

  togglePauseResume() {
    if (this.isPaused) {
      this.resume()
    } else {
      this.pause()
    }
  }

  pause() {
    if (!this.isPaused) {
      clearInterval(this.countdownId)
      this.countdownId = null
      this.isPaused = true
      this.pauseResumeBtn.innerHTML = 'Resume'
    }
  }

  resume() {
    if (this.isPaused) {
      this.start()
      this.isPaused = false
      this.pauseResumeBtn.innerHTML = 'Pause'
    }
  }
}