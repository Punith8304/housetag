import React, {useState} from 'react'
import LoginPage, { Username, Password, TitleSignup, TitleLogin, Submit, Title, Logo } from '@react-login-page/page8';
import LoginLogo from 'react-login-page/logo';

const styles = { height: 690 };

export const Login = () => {
  const [loginUser, setLoginUser] = useState({})
  const [signUpUser, setSignUpUser] = useState({})
  function loginHandleChange(e) {
    const {value, name} = e.target;
    setLoginUser(prevValue => {
      return {
        ...prevValue,
        [name] : value
      }

    })
  }
  function signUpHandleChange(e) {
    const {value, name} = e.target;
    setSignUpUser(prevValue => {
      return {
        ...prevValue,
        [name] : value
      }
    })
  }
  function loginHandleClick() {
    console.log(loginUser)
  }
  function signUpHandleClick() {
    console.log(signUpUser)
  }
  return (
    <div style={styles}>
    <LoginPage>
      <Title />
      <TitleSignup>Signup</TitleSignup>
      <TitleLogin>Login</TitleLogin>
      <Logo>
        <LoginLogo />
      </Logo>
      <Username label="Email" placeholder="Enter Email" onChange={loginHandleChange} name="userName" />
      <Password label="password" placeholder="Enter password" onChange={loginHandleChange} name="userPassword" />
      <Submit keyname="submit" onClick={loginHandleClick}>Submit</Submit>

      <Username panel="signup" label="email" placeholder="E-mail" keyname="e-mail" onChange={signUpHandleChange}/>
      <Password panel="signup" label="password" placeholder="Enter password" keyname="password" onChange={signUpHandleChange}/>
      <Password panel="signup" label="cofirm-password" placeholder="confirm-password" keyname="confirm-password" onChange={signUpHandleChange}/>
      <Submit panel="signup" keyname="signup-submit" onClick={signUpHandleClick}>
        Submit
      </Submit>
    </LoginPage>
  </div>
  )
}
