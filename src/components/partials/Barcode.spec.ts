import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'

import Barcode from './Barcode.vue'

describe('AppBarcode', () => {
  it('should be render correctly', () => {
    const wrapper = mount(Barcode)
    expect(wrapper.vm).toBeTruthy()
  })
})
