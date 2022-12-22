import { withAuthenticator, WithAuthenticatorProps } from "@aws-amplify/ui-react";

function Login({ signOut, user }: WithAuthenticatorProps) {
  return (
    <>
      <h1>hello {user?.username}</h1>
      <button onClick={signOut}>Sign Out</button>
    </>
  )
}

export default withAuthenticator(Login, {
  formFields: {
    signUp: {
      phone_number: {
        dialCode: '+84'
      }
    },
    signIn: {
      username: {
        dialCode: '+84'
      }
    }
  }
})