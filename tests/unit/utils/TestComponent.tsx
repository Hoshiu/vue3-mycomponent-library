import { defineComponent, PropType } from 'vue'
import SchemaForm, { Schema, ThemeProvider } from '../../../lib'
import defaultTheme from '../../../lib/theme-default'

export const ThemeDfaultProvider = defineComponent({
  setup(p, { slots }) {
    return (
      <ThemeProvider theme={defaultTheme}>
        {slots.default && slots.default()}
      </ThemeProvider>
    )
  },
})

export default defineComponent({
  name: 'TestComponent',
  props: {
    schema: {
      type: Object as PropType<Schema>, //JSON schema 必须要传，与生成的表单有关
      required: true,
    },
    value: {
      required: true,
    },
    onChange: {
      type: Function as PropType<(v: any) => void>,
      required: true,
    },
  },
  setup(props) {
    return () => (
      <ThemeDfaultProvider>
        <SchemaForm {...props} />
      </ThemeDfaultProvider>
    )
  },
})
