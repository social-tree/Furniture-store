import { Path, Svg, SvgProps } from 'react-native-svg'

interface Props extends SvgProps {
  hidden?: boolean
  onPress?: () => void
  fill?: string
}

export const Eye = ({ hidden = true, fill, onPress, ...props }: Props) => {
  return hidden ? (
    <Svg
      onPress={onPress}
      {...props}
      width="20"
      height="18"
      viewBox="0 0 20 18"
      fill="none"
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.80327 12.2526C8.42774 12.6759 9.18882 12.9319 9.99868 12.9319C12.1453 12.9319 13.8919 11.1696 13.8919 9.00369C13.8919 8.18655 13.6382 7.41863 13.2186 6.78855L12.1551 7.86166C12.3307 8.1964 12.4283 8.5902 12.4283 9.00369C12.4283 10.3525 11.3354 11.4551 9.99868 11.4551C9.58887 11.4551 9.19858 11.3567 8.86683 11.1795L7.80327 12.2526ZM16.4288 3.54952C17.8436 4.84907 19.0438 6.60149 19.9415 8.70834C20.0195 8.8954 20.0195 9.11199 19.9415 9.2892C17.8534 14.1921 14.1358 17.1259 9.99868 17.1259H9.98893C8.10575 17.1259 6.30063 16.5056 4.71018 15.3735L2.81725 17.2834C2.67089 17.4311 2.4855 17.5 2.30011 17.5C2.11472 17.5 1.91957 17.4311 1.78297 17.2834C1.53903 17.0373 1.5 16.6435 1.69515 16.358L1.72442 16.3186L16.1556 1.75771C16.1751 1.73802 16.1946 1.71833 16.2044 1.69864L16.2044 1.69863C16.2239 1.67894 16.2434 1.65925 16.2532 1.63957L17.1704 0.714131C17.4631 0.428623 17.9217 0.428623 18.2046 0.714131C18.4974 0.999638 18.4974 1.4722 18.2046 1.75771L16.4288 3.54952ZM6.09836 9.00753C6.09836 9.2635 6.12764 9.51948 6.16667 9.75576L2.55643 13.3984C1.5807 12.2564 0.731804 10.8781 0.0585443 9.29304C-0.0195148 9.11583 -0.0195148 8.89924 0.0585443 8.71218C2.14662 3.80933 5.86419 0.885337 9.99156 0.885337H10.0013C11.3966 0.885337 12.7529 1.22007 14.0018 1.85015L10.7429 5.13841C10.5087 5.09903 10.255 5.0695 10.0013 5.0695C7.84494 5.0695 6.09836 6.83177 6.09836 9.00753Z"
        fill={fill || 'white'}
      />
    </Svg>
  ) : (
    <Svg
      onPress={onPress}
      {...props}
      width="20"
      height="16"
      viewBox="0 0 20 16"
      fill="none"
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.09756 8C6.09756 10.1333 7.8439 11.8691 10 11.8691C12.1463 11.8691 13.8927 10.1333 13.8927 8C13.8927 5.85697 12.1463 4.12121 10 4.12121C7.8439 4.12121 6.09756 5.85697 6.09756 8ZM15.7366 2.04606C17.4439 3.36485 18.8976 5.29455 19.9415 7.70909C20.0195 7.89333 20.0195 8.10667 19.9415 8.28121C17.8537 13.1103 14.1366 16 10 16H9.99024C5.86341 16 2.14634 13.1103 0.0585366 8.28121C-0.0195122 8.10667 -0.0195122 7.89333 0.0585366 7.70909C2.14634 2.88 5.86341 0 9.99024 0H10C12.0683 0 14.0293 0.717576 15.7366 2.04606ZM10.0012 10.4124C11.3378 10.4124 12.4304 9.32635 12.4304 7.99787C12.4304 6.65968 11.3378 5.57362 10.0012 5.57362C9.8841 5.57362 9.76702 5.58332 9.65971 5.60272C9.62068 6.66938 8.74263 7.52272 7.65971 7.52272H7.61093C7.58166 7.67787 7.56215 7.83302 7.56215 7.99787C7.56215 9.32635 8.65483 10.4124 10.0012 10.4124Z"
        fill={fill || 'white'}
      />
    </Svg>
  )
}
