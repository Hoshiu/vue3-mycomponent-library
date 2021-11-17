import { mount } from '@vue/test-utils'
import SchemaForm, { NumberField, StringField } from '../../lib'

describe('ObjectField', () => {
  let schema: any
  beforeEach(() => {
    schema = {
      type: 'object',
      properties: {
        name: {
          type: 'string',
        },
        age: {
          type: 'number',
        },
      },
    }
  }),
    it('should render properties to correct fields', async () => {
      const wrapper = mount(SchemaForm, {
        props: {
          schema,
          value: {},
          onChange: (v: any) => v,
        },
      })
      const strField = wrapper.findComponent(StringField)
      const numField = wrapper.findComponent(NumberField)

      expect(strField.exists()).toBeTruthy()
      expect(numField.exists()).toBeTruthy()
    })

  it('should change value when sub fields trigger onChange', async () => {
    let value: any = {}
    const wrapper = mount(SchemaForm, {
      props: {
        schema,
        value: value,
        onChange: (v: any) => {
          value = v
        },
      },
    })
    const strField = wrapper.findComponent(StringField)
    const numberField = wrapper.findComponent(NumberField)

    await strField.props('onChange')('1')
    expect(value.name).toEqual('1')

    await numberField.props('onChange')(1)
    expect(value.age).toEqual(1)
  })

  it('should render properties to correct fields', async () => {
    let value: any = {
      name: '123',
      age: 21,
    }
    const wrapper = mount(SchemaForm, {
      props: {
        schema,
        value: value,
        onChange: (v: any) => {
          value = v
        },
      },
    })
    const strField = wrapper.findComponent(StringField)
    const numField = wrapper.findComponent(NumberField)

    await strField.props('onChange')(undefined)
    expect(value.name).toBeUndefined()

    await numField.props('onChange')(undefined)
    expect(value.name).toBeUndefined()
  })
})
