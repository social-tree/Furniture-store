import { Path, Svg, SvgProps } from 'react-native-svg'

import React from 'react'

export const Truck = (props: SvgProps) => {
  return (
    <Svg width="28" height="28" viewBox="0 0 28 28" fill="none" {...props}>
      <Path
        d="M6.99935 23.3334C6.02713 23.3334 5.20074 22.9931 4.52018 22.3126C3.83963 21.632 3.49935 20.8056 3.49935 19.8334H1.16602V7.00008C1.16602 6.35841 1.39468 5.8093 1.85202 5.35275C2.30857 4.89541 2.85768 4.66675 3.49935 4.66675H19.8327V9.33342H23.3327L26.8327 14.0001V19.8334H24.4994C24.4994 20.8056 24.1591 21.632 23.4785 22.3126C22.798 22.9931 21.9716 23.3334 20.9994 23.3334C20.0271 23.3334 19.2007 22.9931 18.5202 22.3126C17.8396 21.632 17.4994 20.8056 17.4994 19.8334H10.4994C10.4994 20.8056 10.1591 21.632 9.47852 22.3126C8.79796 22.9931 7.97157 23.3334 6.99935 23.3334ZM6.99935 21.0001C7.32991 21.0001 7.60718 20.8881 7.83118 20.6641C8.05441 20.4409 8.16602 20.164 8.16602 19.8334C8.16602 19.5029 8.05441 19.226 7.83118 19.0028C7.60718 18.7788 7.32991 18.6668 6.99935 18.6668C6.66879 18.6668 6.39152 18.7788 6.16752 19.0028C5.94429 19.226 5.83268 19.5029 5.83268 19.8334C5.83268 20.164 5.94429 20.4409 6.16752 20.6641C6.39152 20.8881 6.66879 21.0001 6.99935 21.0001ZM20.9994 21.0001C21.3299 21.0001 21.6068 20.8881 21.83 20.6641C22.054 20.4409 22.166 20.164 22.166 19.8334C22.166 19.5029 22.054 19.226 21.83 19.0028C21.6068 18.7788 21.3299 18.6668 20.9994 18.6668C20.6688 18.6668 20.3919 18.7788 20.1687 19.0028C19.9447 19.226 19.8327 19.5029 19.8327 19.8334C19.8327 20.164 19.9447 20.4409 20.1687 20.6641C20.3919 20.8881 20.6688 21.0001 20.9994 21.0001ZM19.8327 15.1667H24.791L22.166 11.6667H19.8327V15.1667Z"
        fill="#01B763"
      />
    </Svg>
  )
}
