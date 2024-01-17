<script lang="ts">
import { ref } from 'vue'

export default {
  props: {
    stepLess: Function
  },

  setup() {
    const newPasswordShow = ref(false)
    const checkNewPasswordShow = ref(false)
    return {
      newPasswordShow,
      checkNewPasswordShow
    }
  }
}
</script>

<template>
  <v-row>
    <v-col cols="12" md="6" class="bg-blue rounded-br-xl">
      <div style="text-align: center; padding: 180px 0">
        <v-card-text class="text-white">
          <h2 class="text-center">Já possuí uma conta?</h2>
        </v-card-text>
        <div class="text-center">
          <v-btn color="white" variant="outlined" @click="stepLess">Log in</v-btn>
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
</template>
