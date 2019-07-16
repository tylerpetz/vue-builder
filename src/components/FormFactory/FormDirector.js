import { required } from 'vuelidate/lib/validators';

import UserProvider from '@/components/UserProvider.vue';

import BInput from 'buefy/src/components/input/Input.vue';

export default class FormDirector {
  constructor (builder) {
    this.builder = builder
    console.log(builder)
  }

  makeUserForm () {
    return this.builder
      .withProvider(UserProvider)
      .addField({
        component: BInput,
        label: 'Title',
        name: 'title',
        options: {
          attrs: {
            placeholder: 'Enter Title'
          }
        },
        validation: {
          required
        }
      })
      .addField({
        component: BInput,
        label: 'Description',
        name: 'description',
        options: {
          attrs: {
            type: 'textarea',
            placeholder: 'Enter short description'
          }
        },
        validation: {
          required
        }
      })
      .build()
  }
}
