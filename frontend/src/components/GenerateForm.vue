<template>
  <form @submit.prevent="onSubmit">
    <v-row>
      <v-col v-for="field in schema" :key="field.name" :cols="field.cols" :md="field.md">
        <v-text-field
          v-if="field.type === 'text'"
          v-model="state[field.name]"
          :counter="field.props?.counter"
          :error-messages="getErrorMessages(field.name)"
          :label="field.label"
          required
          @blur="touchField(field.name)"
          @input="touchField(field.name)"
        />

        <v-select
          v-if="field.type === 'select'"
          v-model="state[field.name]"
          :error-messages="getErrorMessages(field.name)"
          :items="field.props?.items"
          :label="field.label"
          required
          @blur="touchField(field.name)"
          @change="touchField(field.name)"
        />

        <v-checkbox
          v-if="field.type === 'checkbox'"
          v-model="state[field.name]"
          :error-messages="getErrorMessages(field.name)"
          :label="field.label"
          required
          @blur="touchField(field.name)"
          @change="touchField(field.name)"
        />
      </v-col>
    </v-row>

    <v-row>
      <v-col class="text-right" cols="12">
        <v-btn class="me-4" @click="onSubmit">Submit</v-btn>
        <v-btn @click="clear">Clear</v-btn>
      </v-col>
    </v-row>
  </form>
</template>

<script setup>
  import { defineEmits, defineProps, reactive } from 'vue'
  import { useVuelidate } from '@vuelidate/core'

  const props = defineProps({
    schema: {
      type: Array,
      default: () => []
    }
  })

  const emit = defineEmits()

  const initialState = props.schema.reduce((acc, field) => {
    acc[field.name] = field.value || (field.type === 'checkbox' ? false : null)
    return acc
  }, {})

  const state = reactive({ ...initialState })

  const rules = props.schema.reduce((acc, field) => {
    acc[field.name] = field.validations
    return acc
  }, {})

  const v$ = useVuelidate(rules, state)

  function getErrorMessages (fieldName) {
    const fieldValidation = v$.value[fieldName]
    if (fieldValidation && fieldValidation.$errors) {
      return fieldValidation.$errors.map(e => e.$message)
    }
    return []
  }

  function touchField (fieldName) {
    const fieldValidation = v$.value[fieldName]
    if (fieldValidation) {
      fieldValidation.$touch()
    }
  }

  function clear () {
    v$.value.$reset()
    Object.assign(state, initialState)
  }

  function onSubmit () {
    v$.value.$touch()
    if (!v$.value.$invalid) {
      emit('submit', state)
    }
  }
</script>

<style scoped>
.text-right {
  text-align: right;
}
</style>
