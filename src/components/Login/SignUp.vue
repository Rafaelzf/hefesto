<script lang="ts">
import { ref, computed } from 'vue'
import { useVuelidate } from '@vuelidate/core'
import { required, helpers, minLength, email, alpha, sameAs } from '@vuelidate/validators'

export default {
  props: {
    stepLess: {
      type: Function,
      required: true
    }
  },

  setup(props) {
    const newPasswordShow = ref(false)
    const checkNewPasswordShow = ref(false)

    const formData = ref({
      name: '',
      surname: '',
      email: '',
      password: '',
      confirmPassword: ''
    })

    const rules = computed(() => {
      return {
        name: {
          required: helpers.withMessage('Preencha o campo com o seu nome', required),
          minLength: helpers.withMessage('O campo deve no mínimo 3 letras', minLength(3)),
          alpha: helpers.withMessage('O campo não deve conter números', alpha)
        },
        surname: {
          required: helpers.withMessage('Preencha o campo com o seu sobrenome', required),
          minLength: helpers.withMessage('O campo deve no mínimo 3 letras', minLength(3)),
          alpha: helpers.withMessage('O campo não deve conter números', alpha)
        },
        email: {
          required: helpers.withMessage('Preencha o campo com seu e-mail', required),
          email: helpers.withMessage('O campo deve ser um email válido', email)
        },

        password: {
          required: helpers.withMessage('Digite um senha', required),
          minLength: helpers.withMessage('O campo deve ter no mínimo 6 caracteres', minLength(6))
        },
        confirmPassword: {
          required: helpers.withMessage('Confirme sua senha', required),
          sameAs: helpers.withMessage('As senhas estão diferentes', sameAs(formData.value.password))
        }
      }
    })

    const v$ = useVuelidate(rules, formData)

    const submitForm = async () => {
      const result = await v$.value.$validate()

      if (result) {
        alert('Conta criada')
      } else {
        alert('Dados inválidos')
      }
    }

    const hasAccount = () => {
      props.stepLess()
      v$.value.$reset()
    }

    return {
      newPasswordShow,
      checkNewPasswordShow,
      formData,
      submitForm,
      v$,
      hasAccount
    }
  }
}
</script>

<template>
  <form @submit.prevent="submitForm">
    <v-row>
      <v-col cols="12" md="6" class="bg-blue rounded-br-xl">
        <div style="text-align: center; padding: 180px 0">
          <v-card-text class="text-white">
            <h2 class="text-center">Já possuí uma conta?</h2>
          </v-card-text>
          <div class="text-center">
            <v-btn color="white" variant="outlined" @click="hasAccount">Log in</v-btn>
          </div>
        </div>
      </v-col>

      <v-col cols="12" md="6">
        <v-card-text class="mt-3">
          <h2 class="text-center text-deep-purple-darken-2 mb-4">Criar uma conta</h2>
          <span
            v-for="error in v$.name.$errors"
            :key="error.$uid"
            class="text-caption font-weight-bold text-red-darken-4"
            >{{ error.$message }}</span
          >
          <v-text-field
            label="Nome"
            variant="outlined"
            color="blue"
            autocomplete="false"
            prepend-inner-icon="fas fa-user"
            v-model="formData.name"
            :error="v$.name.$error"
          />

          <span
            v-for="error in v$.surname.$errors"
            :key="error.$uid"
            class="text-caption font-weight-bold text-red-darken-4"
            >{{ error.$message }}</span
          >
          <v-text-field
            label="Sobrenome"
            variant="outlined"
            color="blue"
            autocomplete="false"
            prepend-inner-icon="fas fa-user"
            v-model="formData.surname"
            :error="v$.surname.$error"
          />

          <span
            v-for="error in v$.email.$errors"
            :key="error.$uid"
            class="text-caption font-weight-bold text-red-darken-4"
            >{{ error.$message }}</span
          >
          <v-text-field
            label="Email"
            variant="outlined"
            color="blue"
            autocomplete="false"
            placeholder="nome@gmail.com"
            type="email"
            prepend-inner-icon="fas fa-light fa-envelope"
            v-model="formData.email"
            :error="v$.email.$error"
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
            :type="newPasswordShow ? 'text' : 'password'"
            prepend-inner-icon="fas fa-regular fa-key"
            :append-inner-icon="newPasswordShow ? 'fas fa-eye' : 'fas fa-eye-slash'"
            @click:append-inner="newPasswordShow = !newPasswordShow"
            v-model="formData.password"
            :error="v$.password.$error"
          />

          <span
            v-for="error in v$.confirmPassword.$errors"
            :key="error.$uid"
            class="text-caption font-weight-bold text-red-darken-4"
            >{{ error.$message }}</span
          >
          <v-text-field
            label="Confirme a Senha"
            variant="outlined"
            color="blue"
            :type="checkNewPasswordShow ? 'text' : 'password'"
            prepend-inner-icon="fas fa-regular fa-check"
            :append-inner-icon="checkNewPasswordShow ? 'fas fa-eye' : 'fas fa-eye-slash'"
            @click:append-inner="checkNewPasswordShow = !checkNewPasswordShow"
            v-model="formData.confirmPassword"
            :error="v$.confirmPassword.$error"
          />
          <v-btn type="submit" color="blue" size="large" dark block tile>Criar</v-btn>
        </v-card-text>
      </v-col>
    </v-row>
  </form>
</template>
