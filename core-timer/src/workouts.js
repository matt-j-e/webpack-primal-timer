export const workouts = [
  {
    name: 'Core Foundation',
    phases: [
      {
        name: 'Warm Up',
        sets: 1,
        restBetweenSets: 0,
        exercises: [
          {name: 'Dead Bug', work: 30, rest: 15},
          {name: 'Bird Dog', work: 30, rest: 15},
          {name: 'Cat Cow', work: 30, rest: 15},
        ],
      },
      {
        name: 'Main Set',
        sets: 3,
        restBetweenSets: 90,
        exercises: [
          {name: 'Plank', work: 40, rest: 20},
          {name: 'Side Plank Left', work: 40, rest: 20},
          {name: 'Side Plank Right', work: 40, rest: 20},
        ],
      },
      {
        name: 'Cool Down',
        sets: 1,
        restBetweenSets: 0,
        exercises: [
          {name: "Child's Pose", work: 40, rest: 20},
          {name: 'Supine Twist', work: 30, rest: 0},
        ],
      },
    ],
  },
]
