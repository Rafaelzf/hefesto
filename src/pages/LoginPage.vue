<script>
import { ref } from 'vue'

export default {
  setup() {
    const step = ref(1)
    return {
      step
    }
  }
}
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
                    <h2 class="text-center text-deep-purple-darken-2">Faça login na sua conta</h2>

                    <v-text-field
                      label="Email"
                      outlined
                      dense
                      color="blue"
                      autocomplete="false"
                      placeholder="nome@gmail.com"
                      type="email"
                      class="mt-10"
                    />
                    <v-text-field
                      label="Password"
                      outlined
                      dense
                      color="blue"
                      autocomplete="false"
                      type="password"
                    />
                    <v-btn color="blue text-button" size="large" dark block tile>Entre</v-btn>
                  </v-card-text>
                </v-col>
                <v-col cols="12" md="6" class="bg-blue rounded-bl-xl">
                  <div style="text-align: center; padding: 180px 0">
                    <v-card-text class="text-white">
                      <h2 class="text-center">Não tem uma conta ainda?</h2>
                    </v-card-text>
                    <div class="text-center">
                      <v-btn color="white" variant="outlined" @click="step++">Criar</v-btn>
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
                      outlined
                      dense
                      color="blue"
                      autocomplete="false"
                      class="mt-4"
                    />

                    <v-text-field
                      label="Sobrenome"
                      outlined
                      dense
                      color="blue"
                      autocomplete="false"
                    />

                    <v-text-field
                      label="Email"
                      outlined
                      dense
                      color="blue"
                      autocomplete="false"
                      placeholder="nome@gmail.com"
                      type="email"
                    />
                    <v-text-field label="Senha" outlined dense color="blue" type="password" />
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
