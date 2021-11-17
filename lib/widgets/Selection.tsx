import { SelectionWidgetPropsDefine } from '../types'
import { defineComponent, ref, PropType, watch } from 'vue'

export default defineComponent({
  name: 'SelectionWidget',
  props: SelectionWidgetPropsDefine,
  setup(props) {
    const currentValueRef = ref(props.value)
    watch(currentValueRef, (newv, oldv) => {
      //通过 watch 监听 ref 或 reactive 的变量
      if (newv !== props.value) {
        props.onChange(newv)
      }
    })

    watch(
      () => props.value,
      (v) => {
        if (v !== currentValueRef.value) {
          currentValueRef.value = v
        }
      },
    )
    return () => {
      const { options } = props
      return (
        <select multiple={true} v-model={currentValueRef.value}>
          {options.map((op) => (
            <option value={op.value}>{op.key}</option>
          ))}
        </select>
      )
    }
  },
})
