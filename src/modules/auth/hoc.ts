import { withAuthenticator, WithAuthenticatorProps } from '@aws-amplify/ui-react'

export function withAmplifyAuthenticator<Props = {}> (Component: React.ComponentType<Props & WithAuthenticatorProps>): (props: Props) => JSX.Element {
  const dialCode = '+84'

  return withAuthenticator(Component, {
    formFields: {
      signUp: {
        phone_number: { dialCode }
      },
      signIn: {
        username: { dialCode }
      }
    }
  })
}
