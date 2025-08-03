
import fs from 'fs'

// Read the workouts file as text
const workoutFileContent = fs.readFileSync('./src/workouts.js', 'utf8')

// Split by workout objects and extract names
// Look for the pattern that indicates a workout object (with exercises array)
const workoutMatches = workoutFileContent.match(/\{\s*name:\s*['"`]([^'"`]+)['"`][^}]*exercises:\s*\[/g)

if (workoutMatches) {
  console.log('Available Workouts:')
  console.log('==================')
  
  workoutMatches.forEach((match, index) => {
    const name = match.replace(/\{\s*name:\s*['"`]([^'"`]+)['"`][^}]*exercises:\s*\[/, '$1')
    console.log(`${index + 1}. ${name}`)
  })
  
  console.log(`\nTotal workouts: ${workoutMatches.length}`)
} else {
  console.log('No workouts found!')
}
