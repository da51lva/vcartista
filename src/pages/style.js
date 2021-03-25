import React from 'react'
import { Themed } from 'theme-ui'
import {
  TypeScale,
  TypeStyle,
  ColorPalette,
} from '@theme-ui/style-guide'
export default function Style() {
  return (
  <>
    <Themed.h1>Style Guide</Themed.h1>
    <ColorPalette />
    <TypeScale />
    <TypeStyle
      fontFamily='heading'
      fontWeight='heading'
      lineHeight='heading'
    />
    <TypeStyle
      fontFamily='body'
      fontWeight='body'
      lineHeight='body'
    />
  </>
  );}