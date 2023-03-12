import { Svg, Path, Defs, LinearGradient, Stop } from 'react-native-svg'

export const Logo = (props) => {
  return (
    <Svg {...props} width="118" height="139" viewBox="0 0 118 139" fill="red">
      <Path
        d="M117.399 6.99372L117.172 4.60686C116.907 1.82158 114.12 0.00712804 111.465 0.891897L109.195 1.64855C96.4129 6.08967 82.7632 7.45252 69.3551 5.62635C55.2659 3.43987 40.8449 5.38282 27.8368 11.2201C20.9407 14.1565 14.8887 18.7712 10.2317 24.644C5.57471 30.5169 2.46065 37.4613 1.17304 44.845C0.13227 50.7912 0.064867 56.8423 0.951037 62.7658C1.53237 66.6517 6.56346 67.0109 8.52459 63.6062C9.29667 62.2658 10.099 60.9426 10.9311 59.6375C17.2471 50.3446 25.9987 42.9691 36.2274 38.3189C36.588 38.1543 36.9499 37.9928 37.3129 37.8345C40.6094 36.3971 41.7476 41.0496 38.7136 42.9804C34.4714 45.6459 30.5866 48.8415 27.1531 52.4899C23.8693 56.1365 20.9739 60.115 18.5138 64.3611C13.8929 73.2367 8.27324 82.714 6.42409 92.548C3.49076 104.281 5.0918 137.246 8.75573 138.003C12.6844 137.246 12.2908 124.815 13.8918 116.713C15.6235 107.95 18.4826 102.585 22.6918 101.033C24.6489 100.311 31.4485 100.205 33.2177 101.033C42.0177 102.585 41.0187 102.703 49.7147 102.585C58.8542 102.579 67.8996 100.74 76.3162 97.178C123.615 76.9782 117.399 9.79062 117.399 6.99372Z"
        fill="#01B763"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_1443_725"
          x1="117.667"
          y1="138.003"
          x2="-24.9356"
          y2="102.679"
          gradientUnits="userSpaceOnUse"
        >
          <Stop stop-color="#01B763" />
          <Stop offset="1" stop-color="#14E685" />
        </LinearGradient>
      </Defs>
    </Svg>
  )
}
