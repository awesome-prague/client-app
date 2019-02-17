import { css } from '@emotion/core'

export default css`
  @font-face {
    font-family: 'Open Sans';
    src: url('/static/fonts/opensans-regular.eot?v=1.1.0');
    src: url('/static/fonts/opensans-regular.eot?#iefix&v=1.1.0')
        format('embedded-opentype'),
      url('/static/fonts/opensans-regular.woff?v=1.1.0') format('woff'),
      url('/static/fonts/opensans-regular.ttf?v=1.1.0') format('truetype'),
      url('/static/fonts/opensans-regular.svg?v=1.1.0#Regular') format('svg');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'Open Sans';
    src: url('/static/fonts/opensans-semibold.eot?v=1.1.0');
    src: url('/static/fonts/opensans-semibold.eot?#iefix&v=1.1.0')
        format('embedded-opentype'),
      url('/static/fonts/opensans-semibold.woff?v=1.1.0') format('woff'),
      url('/static/fonts/opensans-semibold.ttf?v=1.1.0') format('truetype'),
      url('/static/fonts/opensans-semibold.svg?v=1.1.0#Semibold') format('svg');
    font-weight: 600;
    font-style: normal;
  }

  @font-face {
    font-family: 'Open Sans';
    src: url('/static/fonts/opensans-bold.eot?v=1.1.0');
    src: url('/static/fonts/opensans-bold.eot?#iefix&v=1.1.0')
        format('embedded-opentype'),
      url('/static/fonts/opensans-bold.woff?v=1.1.0') format('woff'),
      url('/static/fonts/opensans-bold.ttf?v=1.1.0') format('truetype'),
      url('/static/fonts/opensans-bold.svg?v=1.1.0#Bold') format('svg');
    font-weight: bold;
    font-style: normal;
  }
`
