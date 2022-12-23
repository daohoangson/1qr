/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createQrCode = /* GraphQL */ `
  mutation CreateQrCode(
    $input: CreateQrCodeInput!
    $condition: ModelQrCodeConditionInput
  ) {
    createQrCode(input: $input, condition: $condition) {
      id
      owner
      emvco
      momo
      zalopay
      createdAt
      updatedAt
    }
  }
`;
export const updateQrCode = /* GraphQL */ `
  mutation UpdateQrCode(
    $input: UpdateQrCodeInput!
    $condition: ModelQrCodeConditionInput
  ) {
    updateQrCode(input: $input, condition: $condition) {
      id
      owner
      emvco
      momo
      zalopay
      createdAt
      updatedAt
    }
  }
`;
export const deleteQrCode = /* GraphQL */ `
  mutation DeleteQrCode(
    $input: DeleteQrCodeInput!
    $condition: ModelQrCodeConditionInput
  ) {
    deleteQrCode(input: $input, condition: $condition) {
      id
      owner
      emvco
      momo
      zalopay
      createdAt
      updatedAt
    }
  }
`;
