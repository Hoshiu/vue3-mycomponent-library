import { CommonWidgetDefine } from 'lib'
import { inject, Ref } from 'vue'
import { CommonFieldType, Schema } from './types'

export const SchemaFormContextKey = Symbol()

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function useVJSFContext() {
  const context:
    | {
        SchemaItems: CommonFieldType
        formatMapRef: Ref<{ [key: string]: CommonWidgetDefine }>
        transformSchemaRef: Ref<(schema: Schema) => Schema>
      }
    | undefined = inject(SchemaFormContextKey)
  if (!context) {
    throw Error('SchemaForm should be used')
  }
  return context
}
