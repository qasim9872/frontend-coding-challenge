import { shallowMount } from '@vue/test-utils'
import CheckButton from '@/components/Survey/components/CheckButton'

describe('CheckButton', () => {
  let props
  let wrapper

  beforeEach(() => {
    props = {
      text: 'Lorem ipsum',
      value: 'dummy-value',
      selected: false
    }

    wrapper = shallowMount(CheckButton, {
      propsData: props
    })
  })

  // Complete the following statements by implementing tests for the described behaviors

  it('should exist as a component', () => {
    expect(wrapper.find(CheckButton)).toBeTruthy()
  })

  it('should render the text value passed as prop correctly', () => {
    expect(wrapper.text()).toBe(props.text)
  })

  it('should not attach the dynamic "check-button--selected" class when the selected prop is set to false', () => {
    expect(wrapper.classes('check-button--selected')).toBeFalsy()
  })

  it('should attach the dynamic "check-button--selected" class when the selected prop is set to true', () => {
    wrapper.setProps({ selected: true })
    expect(wrapper.classes('check-button--selected')).toBeTruthy()
  })

  // Write additional tests based on the new logic added to the CheckButton component as part of the challenge
  it('should emit value property when clicked', async () => {
    await wrapper.trigger('click')

    expect(wrapper.emitted('click')).toBeTruthy()
    expect(wrapper.emitted('click')[0][0]).toEqual(props.value)
  })
})
