class Timer {
  constructor(schedule) {
    this.schedule = schedule
    this.current = 0
    this.startBtn = document.getElementById('start-button')
    this.pauseBtn = document.getElementById('pause-button')
    this.resumeBtn = document.getElementById('resume-button')
    this.currentExerciseElement = document.getElementById('current-exercise')
    this.stateElement = document.getElementById('state')
    this.timerElement = document.getElementById('countdown')
    this.countdownId = null
    this.isPaused = false
    this.beep = new Audio("https://www.fesliyanstudios.com/play-mp3/5464")
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
    this.pauseBtn.addEventListener('click', () => this.pause())
    this.resumeBtn.addEventListener('click', () => this.resume())
    this.startBtn.style.display = 'none'
    this.countdownId = setInterval(() => {
      this.step = this.schedule[this.current]
      this.currentExerciseElement.innerHTML = this.step.exercise ? this.step.exercise : this.step.nextExercise
      this.stateElement.innerHTML = this.step.state
      this.timerElement.innerHTML = this.formatTime(this.step.remainingTime)
      if (this.step.remainingTime < 6 || this.step.remainingTime === 10) this.beep.play()
      this.current++
      if (this.current > this.schedule.length - 1) {
        clearInterval(this.countdownId)
        this.currentExerciseElement.style.display = 'none'
        this.stateElement.style.display = 'none'
        this.timerElement.innerHTML = 'COMPLETE'
      }
    }, 1000)
  }

  pause() {
    if (!this.isPaused) {
      clearInterval(this.countdownId)
      this.countdownId = null
      this.isPaused = true
    }
  }

  resume() {
    if (this.isPaused) {
      this.start()
      this.isPaused = false
    }
  }
}