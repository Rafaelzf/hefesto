<script>
import { defineComponent, ref } from 'vue'
import { RecoverPassWord, SigIn, SignUp } from '../components/'

export default defineComponent({
  components: {
    RecoverPassWord,
    SigIn,
    SignUp
  },
  setup() {
    const step = ref(1)
    const interStep = ref(2)

    const signUp = () => {
      step.value++
      interStep.value = 2
    }

    const interStepPlus = () => (interStep.value = interStep.value + 1)
    const interStepLess = () => (interStep.value = interStep.value - 1)
    const stepLess = () => (step.value = step.value - 1)

    return {
      step,
      interStep,
      signUp,
      interStepPlus,
      interStepLess,
      stepLess
    }
  }
})
</script>

<template>
  <v-container>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="10">
        <v-card class="elevation-6 mt-10">
          <v-window v-model="step">
            <v-window-item :value="1">
              <v-row>
                <v-col cols="12" md="6">
                  <v-card-text class="mt-12">
                    <v-window v-model="interStep">
                      <v-window-item :value="2">
                        <SigIn :interStepLess="interStepLess" />
                      </v-window-item>
                      <v-window-item :value="1">
                        <RecoverPassWord :interStepPlus="interStepPlus" />
                      </v-window-item>
                    </v-window>
                  </v-card-text>
                </v-col>
                <v-col cols="12" md="6" class="bg-blue rounded-bl-xl">
                  <div style="text-align: center; padding: 180px 0">
                    <v-card-text class="text-white">
                      <h2 class="text-center">Não tem uma conta ainda?</h2>
                    </v-card-text>
                    <div class="text-center">
                      <v-btn color="white" variant="outlined" @click="signUp">Criar</v-btn>
                    </div>
                  </div>
                </v-col>
              </v-row>
            </v-window-item>
            <v-window-item :value="2">
              <SignUp :stepLess="stepLess" />
            </v-window-item>
          </v-window>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.rounded-bl-xl {
  border-bottom-left-radius: 300px !important;
}
.rounded-br-xl {
  border-bottom-right-radius: 300px !important;
}
</style>
