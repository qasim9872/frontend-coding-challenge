<script>
  import CheckButton from '@/components/Survey/components/CheckButton'
  import ThvButton from '@/components/Shared/Button'

  const MAX_GOALS_ALLOWED = 4

  export default {
    name: 'Goals',
    components: {
      ThvButton,
      CheckButton
    },
    computed: {
      name () {
        return this.$store.getters['survey/name']
      },
      isSelectionLengthValid () {
        return this.selectedGoals.length <= MAX_GOALS_ALLOWED
      }
    },
    data () {
      return {
        selectedGoals: [],
        goals: {
          improveEnergy: {
            name: 'Energy'
          },
          improveFitness: {
            name: 'Fitness'
          },
          improveLongTermHealth: {
            name: 'Long-term health'
          },
          improveMood: {
            name: 'Mood'
          },
          improveSleep: {
            name: 'Sleep'
          },
          improveWeight: {
            name: 'Weight'
          }
        }
      }
    },
    methods: {
      submit () {
        this.$store.commit('survey/setGoals', this.selectedGoals)
        this.$router.push('/diet')
      },
      back () {
        this.$router.push('/name')
      },
      toggleGoal (goal) {
        const lowerCaseGoalName = goal.name.toLowerCase()
        console.log('goal clicked: ', lowerCaseGoalName)

        const goalIndex = this.selectedGoals.indexOf(lowerCaseGoalName)
        const isGoalAlreadySelected = goalIndex > -1

        if (isGoalAlreadySelected) {
          // remove goal from selected goals array
          this.selectedGoals.splice(goalIndex, 1)
        } else {
          // add goal to selected goals array
          this.selectedGoals.push(lowerCaseGoalName)
        }
      }
    }
  }
</script>

<template>
  <div class="grid-x grid-x-margin">
    <div class="cell small-12 medium-6 medium-offset-3">
      <div class="survey-questions__goals align-center">
        <h1>Nice to meet you {{ name }}. What would you like to focus on?</h1>
        <p class="body--large question-description">Choose up to four</p>
        <div class="spacer sp__top--sm"></div>
        <check-button v-for="(goal, key) in goals" :key="key" :value="goal.name" :selected="selectedGoals.includes(goal.name.toLowerCase())" :text="goal.name" @click="toggleGoal(goal)"></check-button>
        <div class="grid-x button-container">
          <div class="cell auto">
            <div class="back-button-container">
              <div class="back-button" @click="back">BACK</div>
            </div>
          </div>
          <div class="cell auto align-right">
            <thv-button element="button" size="large" :disabled="!isSelectionLengthValid" @click="submit">Next</thv-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
