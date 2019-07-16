import { required } from 'vuelidate/lib/validators'

// Form components
import BInput from 'buefy/src/components/input/Input.vue'
import BSelect from 'buefy/src/components/select/Select.vue'

// Provider with fetch/post methods
import BlockProvider from '@/components/BlockProvider.vue'


export default class FormDirector {
  constructor(builder) {
    this.builder = builder
  }

  makeHeaderImageForm() {
    return this.builder
      .withProvider(BlockProvider)
      .addField({
        component: BInput,
        label: 'Title',
        name: 'title',
        options: {
          attrs: {
            placeholder: 'Enter Title',
          },
        },
        validation: {
          required,
        },
      })
      .addField({
        component: BInput,
        label: 'Subtitle',
        name: 'subtitle',
        options: {
          attrs: {
            placeholder: 'Enter Subtitle',
          },
        },
        validation: {
          required,
        },
      })
      .addField({
        component: BSelect,
        label: 'Theme',
        name: 'theme',
        options: {
          attrs: {
            placeholder: 'Select Theme',
          },
        },
        selectOptions: [
          {
            value: 1,
            text: 'Theme 1',
          },
          {
            value: 2,
            text: 'Theme 2',
          },
        ],
      })
      .build()
  }
}
