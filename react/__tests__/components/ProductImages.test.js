import React from 'react'
import { render } from 'intl-helper'
import ProductImages from './../../ProductImages'

describe('<ProductImages />', () => {
  const renderComponent = customProps => {
    return render(<ProductImages {...customProps} />)
  }

  it('should be mounted', () => {
    const { asFragment } = renderComponent()
    expect(asFragment()).toBeDefined()
  })

  it('should match the snapshot with images', () => {
    const props = {
      images: [
        {
          imageUrls: ['url'],
          thresholds: [1],
          thumbnailUrl: 'url',
          imageText: 'imageText',
        },
      ],
    }
    const { asFragment } = renderComponent(props)
    expect(asFragment()).toMatchSnapshot()
  })

  it('should match the snapshot with no images', () => {
    const { asFragment } = renderComponent()
    expect(asFragment()).toMatchSnapshot()
  })
})
