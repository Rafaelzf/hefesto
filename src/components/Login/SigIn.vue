<script lang="ts">
import { ref } from 'vue'

export default {
  props: {
    interStepLess: {
      type: Function,
      required: true
    }
  },

  setup(props) {
    const passwordShow = ref(false)
    const invokeChildMethod = () => {
      props.interStepLess()
    }

    return {
      passwordShow,
      invokeChildMethod
    }
  }
}
</script>

<template>
  <h2 class="text-center text-deep-purple-darken-2">Faça login na sua conta</h2>
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

  <v-btn color="blue text-button" class="mb-5" size="large" dark block tile>Entre</v-btn>
  <div class="text-center">
    <a
      href="#"
      class="text-decoration-none text-blue font-weight-bold text-center"
      @click="invokeChildMethod"
      >Esqueci a senha</a
    >
  </div>
</template>
