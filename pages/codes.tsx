import { WithAuthenticatorProps } from '@aws-amplify/ui-react'
import LoadingButton from '@mui/lab/LoadingButton'
import Box from '@mui/material/Box'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import Link from 'next/link'
import { withAmplifyAuthenticator } from '../src/modules/auth/hoc'
import { createQrCodeMutation, listQrCodesQuery } from '../src/modules/storage/qr_code'

function CodeList ({ user }: WithAuthenticatorProps): JSX.Element {
  const queryClient = useQueryClient()
  const { data } = useQuery(listQrCodesQuery(queryClient, user?.getUsername() ?? ''))
  const { isLoading: isCreating, mutate: createMutation } = useMutation(createQrCodeMutation(queryClient))

  return (
    <Box>
      <List>
        {
          (data?.items ?? []).map(
            (qrCode) => (
              <ListItem key={qrCode?.id}>
                <Link href={`codes/${qrCode?.id ?? ''}`}>
                  {qrCode?.id}
                </Link>
              </ListItem>
            )
          )
        }
      </List>
      <LoadingButton
        onClick={() => createMutation({})}
        loading={isCreating}
        variant='contained'
      >Create
      </LoadingButton>
    </Box>
  )
}

export default withAmplifyAuthenticator(CodeList)
