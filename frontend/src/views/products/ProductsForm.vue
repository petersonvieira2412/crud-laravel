<template>
  <GenerateForm :schema="formSchema" @submit="handleSubmit" />
</template>

<script setup>
  import GenerateForm from '@/components/GenerateForm.vue'
  import { required } from '@vuelidate/validators'
  import { productService } from '@/services/ProductService'

  const formSchema = [
    {
      name: 'name',
      label: 'Name',
      type: 'text',
      value: '',
      validations: { required },
      props: { counter: 10 },
      cols: 12,
      md: 12
    },
    {
      name: 'description',
      label: 'Description',
      type: 'text',
      value: '',
      validations: { required },
      cols: 12,
      md: 12
    },
    {
      name: 'price',
      label: 'Price',
      type: 'text',
      value: null,
      validations: { required },
      cols: 12,
      md: 4
    },
    {
      name: 'image',
      label: 'Image',
      type: 'text',
      value: null,
      validations: { required },
      cols: 12,
      md: 4
    },
    {
      name: 'stock',
      label: 'Stock',
      type: 'text',
      value: false,
      validations: { required },
      cols: 12,
      md: 4
    }
  ]

  async function handleSubmit (formData) {
    try {
      const response = await productService.addProduct(formData)

      if (response.status === 200) {
        alert('Formulário enviado com sucesso!')
      } else {
        alert('Erro ao enviar os dados!')
      }
    } catch (error) {
      console.error('Erro ao enviar formulário:', error)
      alert('Ocorreu um erro, tente novamente!')
    }
  }
</script>
