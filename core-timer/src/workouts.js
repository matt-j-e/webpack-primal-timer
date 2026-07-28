export const workouts = [
  {
    name: 'Core Foundation 1',
    phases: [
      {
        name: 'Warm Up',
        sets: 1,
        restBetweenSets: 0,
        exercises: [
          {name: 'Cat Cows', work: 30, rest: 15},
          {name: 'Hip Switches', work: 30, rest: 15},
          {name: 'Plank Walkouts', work: 30, rest: 15},
        ],
      },
      {
        name: 'Main Set',
        sets: 2,
        restBetweenSets: 40,
        exercises: [
          {name: 'Dead Bug', work: 40, rest: 20},
          {name: 'Glute Bridge (with march)', work: 40, rest: 20},
          {name: 'Side Plank (with hip dip)', work: 40, rest: 20},
          {name: 'Bird Dog', work: 40, rest: 20},
          {name: 'High Plank Shoulder Taps', work: 40, rest: 20},
          {name: 'Dying Turtles', work: 40, rest: 20},
        ],
      },
      {
        name: 'Cool Down',
        sets: 1,
        restBetweenSets: 0,
        exercises: [
          {name: 'Cat Cow', work: 30, rest: 10},
          {name: "Child's Pose", work: 30, rest: 10},
          {name: 'Downward Dog', work: 30, rest: 10},
          {name: 'Cobra', work: 30, rest: 10},
          {name: "Child's Pose", work: 30, rest: 10},
          {name: 'Hip Flexor Stretches', work: 30, rest: 0},
        ],
      },
    ],
  },
]
