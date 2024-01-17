<script lang="ts">
export default {
  props: {
    interStepPlus: Function
  }
}
</script>

<template>
  <h2 class="text-center text-deep-purple-darken-2">Recupere sua senha</h2>
  <h4 class="text-left font-weight-medium text-blue-grey-darken-2 mt-5">
    Uma mensagem de recuperação de senha será enviado ao seu email de cadastro.
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

  <v-btn color="blue text-button" @click="interStepPlus" class="mb-5" size="large" dark block tile
    >Recuperar</v-btn
  >
</template>
