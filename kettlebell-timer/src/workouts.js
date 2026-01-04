export const workouts = [
  // ===== EMOM WORKOUTS =====
  {
    name: 'Beginner 16 minute EMOM',
    workoutType: 'emom',
    exercises: [
      {name: 'Hinge', targetReps: 6, weight: 0, work: 60, rest: 0, phase: 'Warmup'},
      {name: 'Hinge', targetReps: 8, weight: 0, work: 60, rest: 0, phase: 'Warmup'},
      {name: 'Hinge', targetReps: 6, weight: 12, work: 60, rest: 0, phase: 'Warmup'},
      {name: 'Hinge', targetReps: 8, weight: 12, work: 60, rest: 0, phase: 'Warmup'},
      {name: 'Swing', targetReps: 6, weight: 16, work: 60, rest: 0, phase: 'Round 1'},
      {name: 'Goblet Squat', targetReps: 6, weight: 16, work: 60, rest: 0, phase: 'Round 1'},
      {name: 'Press', targetReps: 6, weight: 12, work: 60, rest: 0, phase: 'Round 1'},
      {name: 'Swing', targetReps: 8, weight: 16, work: 60, rest: 0, phase: 'Round 2'},
      {name: 'Goblet Squat', targetReps: 8, weight: 16, work: 60, rest: 0, phase: 'Round 2'},
      {name: 'Press', targetReps: 8, weight: 12, work: 60, rest: 0, phase: 'Round 2'},
      {name: 'Swing', targetReps: 10, weight: 16, work: 60, rest: 0, phase: 'Round 3'},
      {name: 'Goblet Squat', targetReps: 10, weight: 16, work: 60, rest: 0, phase: 'Round 3'},
      {name: 'Press', targetReps: 10, weight: 12, work: 60, rest: 0, phase: 'Round 3'},
      {name: 'Suitcase Walk', targetReps: 1, weight: 16, work: 120, rest: 0, phase: 'Finisher'},
    ]
  },
  {
    name: 'KB EMOM - Full Body A',
    workoutType: 'emom',
    exercises: [
      // Round 1 (10 minutes)
      {name: 'KB Swing (2-hand)', targetReps: 10, weight: 24, work: 60, rest: 0, phase: 'round1'},
      {name: 'Goblet Squat', targetReps: 8, weight: 24, work: 60, rest: 0, phase: 'round1'},
      {name: 'KB Row (R)', targetReps: 6, weight: 24, work: 60, rest: 0, phase: 'round1'},
      {name: 'KB Row (L)', targetReps: 6, weight: 24, work: 60, rest: 0, phase: 'round1'},
      {name: 'Turkish Get-Up (R)', targetReps: 2, weight: 16, work: 60, rest: 0, phase: 'round1'},
      {name: 'Turkish Get-Up (L)', targetReps: 2, weight: 16, work: 60, rest: 0, phase: 'round1'},
      {name: 'KB Swing (2-hand)', targetReps: 10, weight: 24, work: 60, rest: 0, phase: 'round1'},
      {name: 'Goblet Squat', targetReps: 8, weight: 24, work: 60, rest: 0, phase: 'round1'},
      {name: 'KB Row (R)', targetReps: 6, weight: 24, work: 60, rest: 0, phase: 'round1'},
      {name: 'KB Row (L)', targetReps: 6, weight: 24, work: 60, rest: 0, phase: 'round1'},
      // Round 2 (10 minutes - increased reps)
      {name: 'KB Swing (2-hand)', targetReps: 12, weight: 24, work: 60, rest: 0, phase: 'round2'},
      {name: 'Goblet Squat', targetReps: 10, weight: 24, work: 60, rest: 0, phase: 'round2'},
      {name: 'KB Row (R)', targetReps: 8, weight: 24, work: 60, rest: 0, phase: 'round2'},
      {name: 'KB Row (L)', targetReps: 8, weight: 24, work: 60, rest: 0, phase: 'round2'},
      {name: 'Turkish Get-Up (R)', targetReps: 3, weight: 16, work: 60, rest: 0, phase: 'round2'},
      {name: 'Turkish Get-Up (L)', targetReps: 3, weight: 16, work: 60, rest: 0, phase: 'round2'},
      {name: 'KB Swing (2-hand)', targetReps: 12, weight: 24, work: 60, rest: 0, phase: 'round2'},
      {name: 'Goblet Squat', targetReps: 10, weight: 24, work: 60, rest: 0, phase: 'round2'},
      {name: 'KB Row (R)', targetReps: 8, weight: 24, work: 60, rest: 0, phase: 'round2'},
      {name: 'KB Row (L)', targetReps: 8, weight: 24, work: 60, rest: 0, phase: 'round2'},
      // Round 3 (10 minutes - further increased reps)
      {name: 'KB Swing (2-hand)', targetReps: 14, weight: 24, work: 60, rest: 0, phase: 'round3'},
      {name: 'Goblet Squat', targetReps: 12, weight: 24, work: 60, rest: 0, phase: 'round3'},
      {name: 'KB Row (R)', targetReps: 10, weight: 24, work: 60, rest: 0, phase: 'round3'},
      {name: 'KB Row (L)', targetReps: 10, weight: 24, work: 60, rest: 0, phase: 'round3'},
      {name: 'Turkish Get-Up (R)', targetReps: 4, weight: 16, work: 60, rest: 0, phase: 'round3'},
      {name: 'Turkish Get-Up (L)', targetReps: 4, weight: 16, work: 60, rest: 0, phase: 'round3'},
      {name: 'KB Swing (2-hand)', targetReps: 14, weight: 24, work: 60, rest: 0, phase: 'round3'},
      {name: 'Goblet Squat', targetReps: 12, weight: 24, work: 60, rest: 0, phase: 'round3'},
      {name: 'KB Row (R)', targetReps: 10, weight: 24, work: 60, rest: 0, phase: 'round3'},
      {name: 'KB Row (L)', targetReps: 10, weight: 24, work: 60, rest: 0, phase: 'round3'},
    ]
  },
  {
    name: 'KB EMOM - Lower Body Focus',
    workoutType: 'emom',
    exercises: [
      // Round 1 (12 minutes)
      {name: 'KB Swing (2-hand)', targetReps: 15, weight: 28, work: 60, rest: 0, phase: 'round1'},
      {name: 'Goblet Squat', targetReps: 10, weight: 28, work: 60, rest: 0, phase: 'round1'},
      {name: 'Reverse Lunge (R)', targetReps: 6, weight: 24, work: 60, rest: 0, phase: 'round1'},
      {name: 'Reverse Lunge (L)', targetReps: 6, weight: 24, work: 60, rest: 0, phase: 'round1'},
      {name: 'KB Swing (2-hand)', targetReps: 15, weight: 28, work: 60, rest: 0, phase: 'round1'},
      {name: 'Goblet Squat', targetReps: 10, weight: 28, work: 60, rest: 0, phase: 'round1'},
      {name: 'Reverse Lunge (R)', targetReps: 6, weight: 24, work: 60, rest: 0, phase: 'round1'},
      {name: 'Reverse Lunge (L)', targetReps: 6, weight: 24, work: 60, rest: 0, phase: 'round1'},
      {name: 'KB Swing (2-hand)', targetReps: 15, weight: 28, work: 60, rest: 0, phase: 'round1'},
      {name: 'Goblet Squat', targetReps: 10, weight: 28, work: 60, rest: 0, phase: 'round1'},
      {name: 'Reverse Lunge (R)', targetReps: 6, weight: 24, work: 60, rest: 0, phase: 'round1'},
      {name: 'Reverse Lunge (L)', targetReps: 6, weight: 24, work: 60, rest: 0, phase: 'round1'},
      // Round 2 (12 minutes)
      {name: 'KB Swing (2-hand)', targetReps: 18, weight: 28, work: 60, rest: 0, phase: 'round2'},
      {name: 'Goblet Squat', targetReps: 12, weight: 28, work: 60, rest: 0, phase: 'round2'},
      {name: 'Reverse Lunge (R)', targetReps: 8, weight: 24, work: 60, rest: 0, phase: 'round2'},
      {name: 'Reverse Lunge (L)', targetReps: 8, weight: 24, work: 60, rest: 0, phase: 'round2'},
      {name: 'KB Swing (2-hand)', targetReps: 18, weight: 28, work: 60, rest: 0, phase: 'round2'},
      {name: 'Goblet Squat', targetReps: 12, weight: 28, work: 60, rest: 0, phase: 'round2'},
      {name: 'Reverse Lunge (R)', targetReps: 8, weight: 24, work: 60, rest: 0, phase: 'round2'},
      {name: 'Reverse Lunge (L)', targetReps: 8, weight: 24, work: 60, rest: 0, phase: 'round2'},
      {name: 'KB Swing (2-hand)', targetReps: 18, weight: 28, work: 60, rest: 0, phase: 'round2'},
      {name: 'Goblet Squat', targetReps: 12, weight: 28, work: 60, rest: 0, phase: 'round2'},
      {name: 'Reverse Lunge (R)', targetReps: 8, weight: 24, work: 60, rest: 0, phase: 'round2'},
      {name: 'Reverse Lunge (L)', targetReps: 8, weight: 24, work: 60, rest: 0, phase: 'round2'},
      // Round 3 (12 minutes)
      {name: 'KB Swing (2-hand)', targetReps: 20, weight: 28, work: 60, rest: 0, phase: 'round3'},
      {name: 'Goblet Squat', targetReps: 15, weight: 28, work: 60, rest: 0, phase: 'round3'},
      {name: 'Reverse Lunge (R)', targetReps: 10, weight: 24, work: 60, rest: 0, phase: 'round3'},
      {name: 'Reverse Lunge (L)', targetReps: 10, weight: 24, work: 60, rest: 0, phase: 'round3'},
      {name: 'KB Swing (2-hand)', targetReps: 20, weight: 28, work: 60, rest: 0, phase: 'round3'},
      {name: 'Goblet Squat', targetReps: 15, weight: 28, work: 60, rest: 0, phase: 'round3'},
      {name: 'Reverse Lunge (R)', targetReps: 10, weight: 24, work: 60, rest: 0, phase: 'round3'},
      {name: 'Reverse Lunge (L)', targetReps: 10, weight: 24, work: 60, rest: 0, phase: 'round3'},
      {name: 'KB Swing (2-hand)', targetReps: 20, weight: 28, work: 60, rest: 0, phase: 'round3'},
      {name: 'Goblet Squat', targetReps: 15, weight: 28, work: 60, rest: 0, phase: 'round3'},
      {name: 'Reverse Lunge (R)', targetReps: 10, weight: 24, work: 60, rest: 0, phase: 'round3'},
      {name: 'Reverse Lunge (L)', targetReps: 10, weight: 24, work: 60, rest: 0, phase: 'round3'},
    ]
  },
  {
    name: 'KB EMOM - Upper Body Focus',
    workoutType: 'emom',
    exercises: [
      // Round 1 (8 minutes)
      {name: 'KB Press (R)', targetReps: 6, weight: 20, work: 60, rest: 0, phase: 'round1'},
      {name: 'KB Press (L)', targetReps: 6, weight: 20, work: 60, rest: 0, phase: 'round1'},
      {name: 'KB Row (R)', targetReps: 8, weight: 24, work: 60, rest: 0, phase: 'round1'},
      {name: 'KB Row (L)', targetReps: 8, weight: 24, work: 60, rest: 0, phase: 'round1'},
      {name: 'KB Press (R)', targetReps: 6, weight: 20, work: 60, rest: 0, phase: 'round1'},
      {name: 'KB Press (L)', targetReps: 6, weight: 20, work: 60, rest: 0, phase: 'round1'},
      {name: 'KB Row (R)', targetReps: 8, weight: 24, work: 60, rest: 0, phase: 'round1'},
      {name: 'KB Row (L)', targetReps: 8, weight: 24, work: 60, rest: 0, phase: 'round1'},
      // Round 2 (8 minutes)
      {name: 'KB Press (R)', targetReps: 8, weight: 20, work: 60, rest: 0, phase: 'round2'},
      {name: 'KB Press (L)', targetReps: 8, weight: 20, work: 60, rest: 0, phase: 'round2'},
      {name: 'KB Row (R)', targetReps: 10, weight: 24, work: 60, rest: 0, phase: 'round2'},
      {name: 'KB Row (L)', targetReps: 10, weight: 24, work: 60, rest: 0, phase: 'round2'},
      {name: 'KB Press (R)', targetReps: 8, weight: 20, work: 60, rest: 0, phase: 'round2'},
      {name: 'KB Press (L)', targetReps: 8, weight: 20, work: 60, rest: 0, phase: 'round2'},
      {name: 'KB Row (R)', targetReps: 10, weight: 24, work: 60, rest: 0, phase: 'round2'},
      {name: 'KB Row (L)', targetReps: 10, weight: 24, work: 60, rest: 0, phase: 'round2'},
      // Round 3 (8 minutes)
      {name: 'KB Press (R)', targetReps: 10, weight: 20, work: 60, rest: 0, phase: 'round3'},
      {name: 'KB Press (L)', targetReps: 10, weight: 20, work: 60, rest: 0, phase: 'round3'},
      {name: 'KB Row (R)', targetReps: 12, weight: 24, work: 60, rest: 0, phase: 'round3'},
      {name: 'KB Row (L)', targetReps: 12, weight: 24, work: 60, rest: 0, phase: 'round3'},
      {name: 'KB Press (R)', targetReps: 10, weight: 20, work: 60, rest: 0, phase: 'round3'},
      {name: 'KB Press (L)', targetReps: 10, weight: 20, work: 60, rest: 0, phase: 'round3'},
      {name: 'KB Row (R)', targetReps: 12, weight: 24, work: 60, rest: 0, phase: 'round3'},
      {name: 'KB Row (L)', targetReps: 12, weight: 24, work: 60, rest: 0, phase: 'round3'},
    ]
  },

  // ===== TRADITIONAL WORKOUTS =====
  {
    name: 'KB Strength - Heavy Day',
    workoutType: 'traditional',
    exercises: [
      // Warmup
      {name: 'KB Halo', targetReps: 10, weight: 12, work: 45, rest: 30, phase: 'warmup'},
      {name: 'Goblet Squat', targetReps: 10, weight: 16, work: 45, rest: 30, phase: 'warmup'},
      {name: 'KB Swing (light)', targetReps: 15, weight: 16, work: 45, rest: 30, phase: 'warmup'},

      // Main work - Double KB Front Squat (3 sets)
      {name: 'Double KB Front Squat', targetReps: 5, weight: 48, work: 90, rest: 120, phase: 'workset'},
      {name: 'Double KB Front Squat', targetReps: 5, weight: 48, work: 90, rest: 120, phase: 'workset'},
      {name: 'Double KB Front Squat', targetReps: 5, weight: 48, work: 90, rest: 180, phase: 'workset'},

      // Single KB Press (3 sets each arm)
      {name: 'KB Press (R)', targetReps: 5, weight: 24, work: 60, rest: 60, phase: 'workset'},
      {name: 'KB Press (L)', targetReps: 5, weight: 24, work: 60, rest: 90, phase: 'workset'},
      {name: 'KB Press (R)', targetReps: 5, weight: 24, work: 60, rest: 60, phase: 'workset'},
      {name: 'KB Press (L)', targetReps: 5, weight: 24, work: 60, rest: 90, phase: 'workset'},
      {name: 'KB Press (R)', targetReps: 5, weight: 24, work: 60, rest: 60, phase: 'workset'},
      {name: 'KB Press (L)', targetReps: 5, weight: 24, work: 60, rest: 120, phase: 'workset'},

      // KB Rows (3 sets each arm)
      {name: 'KB Row (R)', targetReps: 8, weight: 28, work: 60, rest: 60, phase: 'workset'},
      {name: 'KB Row (L)', targetReps: 8, weight: 28, work: 60, rest: 90, phase: 'workset'},
      {name: 'KB Row (R)', targetReps: 8, weight: 28, work: 60, rest: 60, phase: 'workset'},
      {name: 'KB Row (L)', targetReps: 8, weight: 28, work: 60, rest: 90, phase: 'workset'},
      {name: 'KB Row (R)', targetReps: 8, weight: 28, work: 60, rest: 60, phase: 'workset'},
      {name: 'KB Row (L)', targetReps: 8, weight: 28, work: 60, rest: 120, phase: 'workset'},

      // Finisher
      {name: 'KB Swing (heavy)', targetReps: 20, weight: 32, work: 60, rest: 60, phase: 'finisher'},
      {name: 'KB Swing (heavy)', targetReps: 20, weight: 32, work: 60, rest: 0, phase: 'finisher'},
    ]
  },
  {
    name: 'KB Conditioning - High Volume',
    workoutType: 'traditional',
    exercises: [
      // Warmup
      {name: 'KB Swing (light)', targetReps: 15, weight: 16, work: 45, rest: 30, phase: 'warmup'},
      {name: 'Goblet Squat', targetReps: 10, weight: 16, work: 45, rest: 30, phase: 'warmup'},

      // Circuit 1 (3 rounds)
      {name: 'KB Swing', targetReps: 15, weight: 24, work: 60, rest: 30, phase: 'workset'},
      {name: 'Goblet Squat', targetReps: 12, weight: 24, work: 60, rest: 30, phase: 'workset'},
      {name: 'KB Push Press (R)', targetReps: 8, weight: 20, work: 60, rest: 30, phase: 'workset'},
      {name: 'KB Push Press (L)', targetReps: 8, weight: 20, work: 60, rest: 60, phase: 'workset'},

      {name: 'KB Swing', targetReps: 15, weight: 24, work: 60, rest: 30, phase: 'workset'},
      {name: 'Goblet Squat', targetReps: 12, weight: 24, work: 60, rest: 30, phase: 'workset'},
      {name: 'KB Push Press (R)', targetReps: 8, weight: 20, work: 60, rest: 30, phase: 'workset'},
      {name: 'KB Push Press (L)', targetReps: 8, weight: 20, work: 60, rest: 60, phase: 'workset'},

      {name: 'KB Swing', targetReps: 15, weight: 24, work: 60, rest: 30, phase: 'workset'},
      {name: 'Goblet Squat', targetReps: 12, weight: 24, work: 60, rest: 30, phase: 'workset'},
      {name: 'KB Push Press (R)', targetReps: 8, weight: 20, work: 60, rest: 30, phase: 'workset'},
      {name: 'KB Push Press (L)', targetReps: 8, weight: 20, work: 60, rest: 90, phase: 'workset'},

      // Circuit 2 (3 rounds)
      {name: 'KB Snatch (R)', targetReps: 6, weight: 20, work: 60, rest: 30, phase: 'workset'},
      {name: 'KB Snatch (L)', targetReps: 6, weight: 20, work: 60, rest: 30, phase: 'workset'},
      {name: 'Reverse Lunge (R)', targetReps: 8, weight: 24, work: 60, rest: 30, phase: 'workset'},
      {name: 'Reverse Lunge (L)', targetReps: 8, weight: 24, work: 60, rest: 60, phase: 'workset'},

      {name: 'KB Snatch (R)', targetReps: 6, weight: 20, work: 60, rest: 30, phase: 'workset'},
      {name: 'KB Snatch (L)', targetReps: 6, weight: 20, work: 60, rest: 30, phase: 'workset'},
      {name: 'Reverse Lunge (R)', targetReps: 8, weight: 24, work: 60, rest: 30, phase: 'workset'},
      {name: 'Reverse Lunge (L)', targetReps: 8, weight: 24, work: 60, rest: 60, phase: 'workset'},

      {name: 'KB Snatch (R)', targetReps: 6, weight: 20, work: 60, rest: 30, phase: 'workset'},
      {name: 'KB Snatch (L)', targetReps: 6, weight: 20, work: 60, rest: 30, phase: 'workset'},
      {name: 'Reverse Lunge (R)', targetReps: 8, weight: 24, work: 60, rest: 30, phase: 'workset'},
      {name: 'Reverse Lunge (L)', targetReps: 8, weight: 24, work: 60, rest: 90, phase: 'workset'},

      // Finisher
      {name: 'KB Swing (heavy)', targetReps: 25, weight: 28, work: 90, rest: 60, phase: 'finisher'},
      {name: 'KB Swing (heavy)', targetReps: 25, weight: 28, work: 90, rest: 60, phase: 'finisher'},
      {name: 'KB Swing (heavy)', targetReps: 25, weight: 28, work: 90, rest: 0, phase: 'finisher'},
    ]
  }
]
