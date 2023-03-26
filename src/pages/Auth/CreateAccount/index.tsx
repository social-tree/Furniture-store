import {
  Container,
  Form,
  Lock,
  OtherMethods,
  SocialButton,
  SocialButtons,
  StyledSignupWrap,
  Title,
} from './CreateAccount.styles'
import {
  SignupButton,
  SignupButtonText,
  SignupText,
  SignupWrap,
} from '../AuthMethod/AuthMethod.styles'

import { Apple } from 'src/assets/svg/Apple'
import { Button } from 'src/components/Elements/Button'
import { Checkbox } from 'src/components/Form/Elements/Checkbox'
import { ChoiceSplit } from 'src/components/Elements/ChoiceSplit'
import { Email } from 'src/assets/svg/Email'
import { Facebook } from 'src/assets/svg/Facebook'
import { Google } from 'src/assets/svg/Google'
import { Input } from 'src/components/Form/Elements/Input'
import { Logo } from 'src/assets/svg/Logo'
import React from 'react'

export const CreateAccount = ({ navigation }) => {
  return (
    <Container
      contentContainerStyle={{ display: 'flex', alignItems: 'center', gap: 38 }}
    >
      <Logo />
      <Title>Create Your Account</Title>
      <Form>
        <Input leftIcon={<Email />} placeholder="Email" />
        <Input
          leftIcon={<Lock source={require('src/assets/img/Lock.png')} />}
          type="password"
          placeholder="Password"
        />
        <Checkbox label="Remember me" />
        <Button>Sign up</Button>
      </Form>
      <ChoiceSplit />
      <OtherMethods>
        <SocialButtons>
          <SocialButton>
            <Facebook />
          </SocialButton>
          <SocialButton>
            <Google />
          </SocialButton>
          <SocialButton>
            <Apple />
          </SocialButton>
        </SocialButtons>
      </OtherMethods>
      <StyledSignupWrap>
        <SignupText>Already have an account?</SignupText>
        <SignupButton onPress={() => navigation.navigate('Login')}>
          <SignupButtonText>Sign in</SignupButtonText>
        </SignupButton>
      </StyledSignupWrap>
    </Container>
  )
}
