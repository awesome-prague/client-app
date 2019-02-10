/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import React from 'react'
import GlobeIcon from 'mdi-react/EarthIcon'

import { itemsCenterStyle } from './ItemsCenter'
import { FONT_SIZE_4, MAIN_THEME_COLOR } from '../lib/constants'

const style = css({
  flexDirection: 'column',
  fontSize: FONT_SIZE_4,
  color: `rgb(${MAIN_THEME_COLOR})`,
})

const ShowMapButton: React.FunctionComponent = () => {
  return (
    <button css={[itemsCenterStyle, style]}>
      <GlobeIcon size={18} color={`rgb(${MAIN_THEME_COLOR})`} />
      <span>Map</span>
    </button>
  )
}

export default ShowMapButton
