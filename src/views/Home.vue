<template>
  <div class="columns is-centered">
    <div class="column is-half">
      <HeaderImageForm />

      <HeaderImageForm :id="1" />
    </div>
  </div>
</template>

<script>
import FormBuilder from '@/components/FormFactory/FormBuilder'
import FormDirector from '@/components/FormFactory/FormDirector'

export default {
  name: 'Home',
  components: {
    HeaderImageForm: new FormDirector(new FormBuilder()).makeHeaderImageForm(),
  },
}
</script>
