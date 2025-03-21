// @ts-expect-error
import type React from 'react'
import {render} from '@testing-library/react-native'
import {UITextView} from '../index'
import {StyleSheet} from 'react-native'

describe('UITextView', () => {
  it('should pass textAlign style props correctly', () => {
    // Mock implementation or shallow render since we can't test the native module directly
    const {getByTestId} = render(
      <>
        <UITextView testID="left-aligned" style={{textAlign: 'left'}}>
          Left aligned text
        </UITextView>
        <UITextView testID="center-aligned" style={{textAlign: 'center'}}>
          Center aligned text
        </UITextView>
        <UITextView testID="right-aligned" style={{textAlign: 'right'}}>
          Right aligned text
        </UITextView>
        <UITextView testID="justified" style={{textAlign: 'justify'}}>
          Justified text
        </UITextView>
      </>
    )

    // Verify components were rendered with correct props
    const leftAligned = getByTestId('left-aligned')
    const centerAligned = getByTestId('center-aligned')
    const rightAligned = getByTestId('right-aligned')
    const justified = getByTestId('justified')

    // Check style props were passed correctly
    expect(StyleSheet.flatten(leftAligned.props.style).textAlign).toBe('left')
    expect(StyleSheet.flatten(centerAligned.props.style).textAlign).toBe(
      'center'
    )
    expect(StyleSheet.flatten(rightAligned.props.style).textAlign).toBe('right')
    expect(StyleSheet.flatten(justified.props.style).textAlign).toBe('justify')
  })
})
