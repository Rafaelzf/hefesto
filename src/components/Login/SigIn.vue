<script lang="ts">
import { ref } from 'vue'
import { useVuelidate } from '@vuelidate/core'
import { required } from '@vuelidate/validators'

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

    const formData = ref({
      name: '',
      password: ''
    })

    const rules = {
      name: { required },
      password: { required }
    }

    const v$ = useVuelidate(rules, formData)

    const submitForm = async () => {
      const result = await v$.value.$validate()

      if (result) {
        alert('Conta criada')
      } else {
        alert('Dados inválidos')
      }
    }

    return {
      passwordShow,
      invokeChildMethod,
      formData,
      v$,
      submitForm
    }
  }
}
</script>

<template>
  <h2 class="text-center text-deep-purple-darken-2 mb-10">Faça login na sua conta</h2>
  <form @submit.prevent="submitForm">
    <span
      v-for="error in v$.name.$errors"
      :key="error.$uid"
      class="text-caption font-weight-bold text-red-darken-4"
      >{{ error.$message }}</span
    >
    <v-text-field
      label="Email"
      variant="outlined"
      color="primary"
      autocomplete="false"
      placeholder="nome@gmail.com"
      type="email"
      hint="Entre com seu login/email"
      prepend-inner-icon="fas fa-light fa-envelope"
      v-model="formData.name"
      :error="v$.name.$error"
    />

    <span
      v-for="error in v$.password.$errors"
      :key="error.$uid"
      class="text-caption font-weight-bold text-red-darken-4"
      >{{ error.$message }}</span
    >
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
      v-model="formData.password"
      :error="v$.password.$error"
    />

    <v-btn type="submit" color="blue text-button" class="mb-5" size="large" dark block tile
      >Entre</v-btn
    >
    <div class="text-center">
      <a
        href="#"
        class="text-decoration-none text-blue font-weight-bold text-center"
        @click="invokeChildMethod"
        >Esqueci a senha</a
      >
    </div>
  </form>
</template>
