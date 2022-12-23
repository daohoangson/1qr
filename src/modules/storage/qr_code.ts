import GraphQLAPI, { GRAPHQL_AUTH_MODE } from '@aws-amplify/api-graphql'
import { QueryClient, UseMutationOptions, UseQueryOptions } from '@tanstack/react-query'
import { CreateQrCodeInput, CreateQrCodeMutation, CreateQrCodeMutationVariables, DeleteQrCodeMutation, DeleteQrCodeMutationVariables, QrCodesByUserQuery, QrCodesByUserQueryVariables, UpdateQrCodeInput, UpdateQrCodeMutation, UpdateQrCodeMutationVariables } from '../../API'
import { createQrCode, deleteQrCode, updateQrCode } from '../../graphql/mutations'
import { qrCodesByUser } from '../../graphql/queries'

export type ListQrCodesData = Omit<NonNullable<QrCodesByUserQuery['qrCodesByUser']>, '__typename'>

const listQrCodesQueryKey = ['codes']

export function listQrCodesQuery (_: QueryClient, username: string): UseQueryOptions<ListQrCodesData> {
  return {
    queryKey: listQrCodesQueryKey,
    queryFn: async () => {
      const variables: QrCodesByUserQueryVariables = { owner: `${username}::${username}` }
      const response = await GraphQLAPI.graphql({
        query: qrCodesByUser,
        variables,
        authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS
      }) as { data: QrCodesByUserQuery }
      const list = response.data.qrCodesByUser
      if (list === null || list === undefined) {
        return { items: [] }
      }
      return list
    },
    staleTime: 300000
  }
}

export function createQrCodeMutation (queryClient: QueryClient): UseMutationOptions<void, unknown, CreateQrCodeInput> {
  return {
    mutationFn: async (input) => {
      const variables: CreateQrCodeMutationVariables = { input }
      const response = await GraphQLAPI.graphql({
        query: createQrCode,
        variables,
        authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS
      }) as { data: CreateQrCodeMutation }
      const created = response.data.createQrCode
      console.log({ created })
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: listQrCodesQueryKey }).catch(console.error)
    }
  }
}

export function updateQrCodeMutation (queryClient: QueryClient): UseMutationOptions<void, unknown, UpdateQrCodeInput> {
  return {
    mutationFn: async (input) => {
      const variables: UpdateQrCodeMutationVariables = { input }
      const response = await GraphQLAPI.graphql({
        query: updateQrCode,
        variables,
        authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS
      }) as { data: UpdateQrCodeMutation }
      const updated = response.data.updateQrCode
      console.log({ updated })
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: listQrCodesQueryKey }).catch(console.error)
    }
  }
}

export function deleteQrCodeMutation (queryClient: QueryClient): UseMutationOptions<void, unknown, string> {
  return {
    mutationFn: async (id) => {
      const variables: DeleteQrCodeMutationVariables = { input: { id } }
      const response = await GraphQLAPI.graphql({
        query: deleteQrCode,
        variables,
        authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS
      }) as { data: DeleteQrCodeMutation }
      const deleted = response.data.deleteQrCode
      console.log({ deleted })
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: listQrCodesQueryKey }).catch(console.error)
    }
  }
}
