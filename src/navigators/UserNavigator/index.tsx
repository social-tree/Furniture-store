import { Bag } from 'src/assets/svg/Bag'
import { Cart } from 'src/pages/User/Cart'
import CartNavigator from '../CartNavigator'
import { Home as HomeIcon } from 'src/assets/svg/Home'
import HomeNavigator from '../HomeNavigator'
import { Platform } from 'react-native'
import React from 'react'
import { ResetPassword } from 'src/pages/User/ResetPassword'
import { UserBottomStackParamList } from './UserNavigator.types'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { theme } from 'src/styles/theme'

const { Navigator, Screen } =
  createBottomTabNavigator<UserBottomStackParamList>()

const UserNavIconProps = ({ focused, color }) => ({
  fill: focused ? color : 'transparent',
  width: 19,
  height: 20,
  stroke: color,
})

export const UserTabBarStyle = {
  display: 'flex',
  backgroundColor: theme.darkColors.dark2,
  ...(Platform.OS !== 'ios'
    ? { height: 55, paddingBottom: 5 }
    : { height: 85 }),
  justifyContent: 'center',
  alignItems: 'center',
}

const UserNavigator = () => {
  return (
    <Navigator
      initialRouteName="CartNav"
      screenOptions={({ route }) => {
        const toExclude: (typeof route.name)[] = [
          'ResetPassword',
          'FillProfile',
        ]
        return {
          tabBarButton: toExclude.includes(route.name)
            ? () => {
                return null
              }
            : undefined,
          tabBarStyle: UserTabBarStyle as any,
          tabBarItemStyle: {
            borderRadius: 20,
            maxWidth: 58,
            ...(Platform.OS === 'ios' ? { gap: 0, paddingBottom: 5 } : {}),
          },
          tabBarHideOnKeyboard: true,
          tabBarActiveTintColor: theme.primary[500],
          tabBarInactiveTintColor: theme.greyscale[500],
        }
      }}
    >
      <Screen
        options={{
          headerShown: false,
          tabBarIcon: (props) => <HomeIcon {...UserNavIconProps(props)} />,
          title: 'Home',
          tabBarStyle: { display: 'none' },
        }}
        name="HomeNav"
        component={HomeNavigator}
      />
      <Screen
        options={{
          title: 'Create New Password',
          tabBarStyle: { display: 'none' },
        }}
        name="ResetPassword"
        component={ResetPassword}
      />
      <Screen
        options={{
          headerShown: false,
          title: 'Cart',
          tabBarIcon: (props) => <Bag {...UserNavIconProps(props)} />,
        }}
        name="CartNav"
        component={CartNavigator}
      />
    </Navigator>
  )
}

export default UserNavigator
