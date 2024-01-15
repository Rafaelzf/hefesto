<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const step = ref(1)
    const interStep = ref(2)
    const passwordShow = ref(false)
    const newPasswordShow = ref(false)
    const checkNewPasswordShow = ref(false)

    const signUp = () => {
      step.value++
      interStep.value = 2
    }

    return {
      step,
      interStep,
      signUp,
      passwordShow,
      newPasswordShow,
      checkNewPasswordShow
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
                        <h2 class="text-center text-deep-purple-darken-2">
                          Faça login na sua conta
                        </h2>
                        <v-text-field
                          label="Email"
                          variant="outlined"
                          color="primary"
                          autocomplete="false"
                          placeholder="nome@gmail.com"
                          type="email"
                          class="mt-10"
                          hint="Entre com seu login/email"
                          prepend-inner-icon="fas fa-light fa-envelope"
                        />
                        <v-text-field
                          label="Senha"
                          variant="outlined"
                          color="blue"
                          autocomplete="false"
                          :type="passwordShow ? 'text' : 'password'"
                          hint="Digite sua senha"
                          class="mt-2 mb-5"
                          prepend-inner-icon="fas fa-regular fa-key"
                          :append-inner-icon="passwordShow ? 'fas fa-eye' : 'fas fa-eye-slash'"
                          @click:append-inner="passwordShow = !passwordShow"
                        />

                        <v-btn color="blue text-button" class="mb-5" size="large" dark block tile
                          >Entre</v-btn
                        >
                        <div class="text-center">
                          <a
                            href="#"
                            class="text-decoration-none text-blue font-weight-bold text-center"
                            @click="interStep--"
                            >Esqueci a senha</a
                          >
                        </div>
                      </v-window-item>
                      <v-window-item :value="1">
                        <h2 class="text-center text-deep-purple-darken-2">Recupere sua senha</h2>
                        <h4 class="text-left font-weight-medium text-blue-grey-darken-2 mt-5">
                          Uma mensagem de recuperação de senha será enviado ao seu email de
                          cadastro.
                        </h4>
                        <v-text-field
                          label="Email"
                          variant="outlined"
                          color="blue"
                          autocomplete="false"
                          placeholder="nome@gmail.com"
                          type="email"
                          class="mt-10"
                          prepend-inner-icon="fas fa-light fa-envelope"
                        />

                        <v-btn
                          color="blue text-button"
                          @click="interStep++"
                          class="mb-5"
                          size="large"
                          dark
                          block
                          tile
                          >Recuperar</v-btn
                        >
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
              <v-row>
                <v-col cols="12" md="6" class="bg-blue rounded-br-xl">
                  <div style="text-align: center; padding: 180px 0">
                    <v-card-text class="text-white">
                      <h2 class="text-center">Já possuí uma conta?</h2>
                    </v-card-text>
                    <div class="text-center">
                      <v-btn color="white" variant="outlined" @click="step--">Log in</v-btn>
                    </div>
                  </div>
                </v-col>

                <v-col cols="12" md="6">
                  <v-card-text class="mt-3">
                    <h2 class="text-center text-deep-purple-darken-2">Criar uma conta</h2>
                    <v-text-field
                      label="Nome"
                      variant="outlined"
                      color="blue"
                      autocomplete="false"
                      class="mt-4"
                      prepend-inner-icon="fas fa-user"
                    />

                    <v-text-field
                      label="Sobrenome"
                      variant="outlined"
                      color="blue"
                      autocomplete="false"
                      prepend-inner-icon="fas fa-user"
                    />

                    <v-text-field
                      label="Email"
                      variant="outlined"
                      color="blue"
                      autocomplete="false"
                      placeholder="nome@gmail.com"
                      type="email"
                      prepend-inner-icon="fas fa-light fa-envelope"
                      required
                    />
                    <v-text-field
                      label="Senha"
                      variant="outlined"
                      color="blue"
                      :type="newPasswordShow ? 'text' : 'password'"
                      prepend-inner-icon="fas fa-regular fa-key"
                      :append-inner-icon="newPasswordShow ? 'fas fa-eye' : 'fas fa-eye-slash'"
                      @click:append-inner="newPasswordShow = !newPasswordShow"
                      required
                    />
                    <v-text-field
                      label="Confirme a Senha"
                      variant="outlined"
                      color="blue"
                      :type="checkNewPasswordShow ? 'text' : 'password'"
                      prepend-inner-icon="fas fa-regular fa-check"
                      :append-inner-icon="checkNewPasswordShow ? 'fas fa-eye' : 'fas fa-eye-slash'"
                      @click:append-inner="checkNewPasswordShow = !checkNewPasswordShow"
                    />
                    <v-btn color="blue" size="large" dark block tile>Criar</v-btn>
                  </v-card-text>
                </v-col>
              </v-row>
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
