<script>
import { mapGetters } from 'vuex'
import ThrivalingImage from '@/assets/images/thrivaling.png'
import ThvButton from '@/components/Shared/Button'

export default {
  name: 'Success',
  components: {
    ThvButton
  },
  computed: {
    ...mapGetters({
      name: 'survey/name',
      diet: 'survey/diet',
      goals: 'survey/goals',
      dob: 'survey/dob'
    }),

    surveyData () {
      return {
        Name: this.name,
        Goals: this.goals.join(', '),
        Diet: this.diet,
        DOB: this.dob
      }
    },

    thrivaImageSrc () {
      return ThrivalingImage
    }
  },
  methods: {
    reset () {
      this.$store.dispatch('survey/reset')
      this.$router.push('/name')
    }
  }
}
</script>

<template>
    <div class="grid-x grid-x-margin">
    <div class="cell small-12 medium-4 medium-offset-4">
        <div class="align-center"> 
            <img :src="thrivaImageSrc" alt="Happy Thriva icon" height="150" />
            <h1 class="text--body">All done!</h1>

            <div class="spacer sp__top--xs"></div>
            <p>Thank you for completing the survey. The following results have been submitted:</p>

            <div class="spacer sp__top--sm"></div>
            <div class="results-card">

                <div class="results-card__body">
                    <p class="result-elem__title text--grey">Name</p>
                    <p class="result-elem__body text--xx-dark-grey">{{name}}</p>

                    <div class="spacer sp__top--xs"></div>
                    <p class="result-elem__title text--grey">Goals</p>
                    <p class="result-elem__body text--xx-dark-grey">{{goals.join(", ")}}</p>

                    <div class="spacer sp__top--xs"></div>
                    <p class="result-elem__title text--grey">Diet</p>
                    <p class="result-elem__body text--xx-dark-grey">{{diet}}</p>

                    <div class="spacer sp__top--xs"></div>
                    <p class="result-elem__title text--grey">DOB</p>
                    <p class="result-elem__body text--xx-dark-grey">{{dob}}</p>
                </div>

                <div class="spacer sp__bottom--sm" />
                <thv-button element="button" size="large" @click="reset">Start over</thv-button>
            </div>
        </div>
    </div>
  </div>
</template>

<style lang='css'>
.results-card {
    padding: 30px 0px 30px 30px;
    background-color: white;
    box-shadow: 0px 6px 20px 0px #d9dbe2;
    border-radius: .5rem;
}

.results-card__body {
    text-align: left;
}

.result-elem__title {
    line-height: 21px;
    font-size: 14px;
    text-transform: capitalize;
    margin: 0;
}

.result-elem__body {
  line-height: 24px;
  font-size: 16px;
  text-transform: capitalize;
}
</style>
