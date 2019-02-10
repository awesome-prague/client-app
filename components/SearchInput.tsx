/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import React from 'react'
import SearchIcon from 'mdi-react/MagnifyIcon'

import ItemsCenter from './ItemsCenter'
import { MAIN_THEME_COLOR, FONT_SIZE_4 } from '../lib/constants'

const style = css({
  justifyContent: 'flex-start',
  position: 'relative',
  flex: 7,
})

const inputStyle = css({
  display: 'flexbox',
  flex: '1',
  width: '100%',
  padding: '8px',
  paddingLeft: '35px',
  border: '1px solid transparent',
  fontSize: FONT_SIZE_4,
  backgroundColor: `rgba(${MAIN_THEME_COLOR}, 0.2)`,
  borderRadius: '5px',
  '&:focus': {
    border: `1px solid rgba(${MAIN_THEME_COLOR}, 0.5)`,
  },
})

const searchIconStyle = css({
  position: 'absolute',
  left: '10px',
  top: '50%',
  transform: 'translateY(-50%)',
  opacity: 0.5,
})

const SearchInput: React.FunctionComponent = () => {
  return (
    <ItemsCenter style={style}>
      <SearchIcon css={searchIconStyle} size={22} />
      <input
        css={inputStyle}
        className="flexbox flex"
        placeholder="Search an awesome place"
        type="text"
      />
    </ItemsCenter>
  )
}

export default SearchInput
