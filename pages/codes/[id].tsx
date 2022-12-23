import { WithAuthenticatorProps } from '@aws-amplify/ui-react'
import Delete from '@mui/icons-material/Delete'
import LoadingButton from '@mui/lab/LoadingButton'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import CircularProgress from '@mui/material/CircularProgress'
import IconButton from '@mui/material/IconButton'
import InputAdornment from '@mui/material/InputAdornment'
import TextField from '@mui/material/TextField'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { FieldArray, Formik } from 'formik'
import { useRouter } from 'next/router'
import { QrCode } from '../../src/API'
import { withAmplifyAuthenticator } from '../../src/modules/auth/hoc'
import { deleteQrCodeMutation, listQrCodesQuery, updateQrCodeMutation } from '../../src/modules/storage/qr_code'

function UpdateForm (
  {
    qrCode: {
      id,
      emvco: initialEmvco,
      momo: initialMomo,
      zalopay: initialZalopay
    }
  }: { qrCode: QrCode }
): JSX.Element {
  const queryClient = useQueryClient()
  const { mutate: updateQrCode } = useMutation(updateQrCodeMutation(queryClient))

  return (
    <Formik
      initialValues={{
        emvco: initialEmvco ?? [''],
        momo: initialMomo ?? '',
        zalopay: initialZalopay ?? ''
      }}
      onSubmit={async (values) => {
        const { emvco, momo, zalopay } = values
        updateQrCode({ id, emvco, momo, zalopay })
      }}
    >
      {({ errors, handleChange, touched, values }) => (
        <Box
          component='form'
          sx={{
            '& .MuiButton-root': { m: 1 },
            '& .MuiTextField-root': { m: 1 }
          }}
        >
          <FieldArray name='emvco'>
            {({ remove, push }) => (
              <Box>
                {values.emvco.length > 0 &&
                  values.emvco.map((value, index) => (
                    <TextField
                      fullWidth
                      key={index}
                      id={`emvco.${index}`}
                      name={`emvco.${index}`}
                      label={`EMV® code ${index + 1}`}
                      value={value}
                      onChange={handleChange}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position='end'>
                            <IconButton aria-label='delete emv code' onClick={() => remove(index)} edge='end'>
                              <Delete />
                            </IconButton>
                          </InputAdornment>
                        )
                      }}
                      error={touched.emvco === true && Boolean(errors.emvco)}
                      helperText={touched.emvco === true && errors.emvco}
                    />
                  ))}
                <LoadingButton
                  onClick={() => push('')}
                  variant='contained'
                >Add another EMV® code
                </LoadingButton>
              </Box>
            )}
          </FieldArray>

          <TextField
            fullWidth
            id='momo'
            name='momo'
            label='MoMo'
            value={values.momo}
            onChange={handleChange}
            error={touched.momo === true && Boolean(errors.momo)}
            helperText={touched.momo === true && errors.momo}
          />

          <TextField
            fullWidth
            id='zalopay'
            name='zalopay'
            label='ZaloPay'
            value={values.zalopay}
            onChange={handleChange}
            error={touched.zalopay === true && Boolean(errors.zalopay)}
            helperText={touched.zalopay === true && errors.zalopay}
          />

          <Button type='submit'>Submit</Button>
        </Box>
      )}
    </Formik>
  )
}

function CodeDetails ({ user }: WithAuthenticatorProps): JSX.Element {
  const router = useRouter()
  const queryClient = useQueryClient()
  const { data: listData } = useQuery(listQrCodesQuery(queryClient, user?.getUsername() ?? ''))
  const { isLoading: isDeleting, mutateAsync: deleteQrCode } = useMutation(deleteQrCodeMutation(queryClient))

  const { id } = router.query
  const filtered = (listData?.items ?? []).filter((_) => _?.id === id)
  if (filtered.length !== 1) {
    return <CircularProgress />
  }
  const data = filtered[0]
  if (data === null) {
    return <CircularProgress />
  }

  return (
    <Box>
      <UpdateForm qrCode={data} />
      <LoadingButton
        onClick={() => {
          deleteQrCode(data.id).then(router.back, console.error)
        }}
        loading={isDeleting}
        color='error'
        variant='contained'
      >Delete
      </LoadingButton>
    </Box>
  )
}

export default withAmplifyAuthenticator(CodeDetails)
