/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getQrCode = /* GraphQL */ `
  query GetQrCode($id: ID!) {
    getQrCode(id: $id) {
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
export const listQrCodes = /* GraphQL */ `
  query ListQrCodes(
    $id: ID
    $filter: ModelQrCodeFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listQrCodes(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        owner
        emvco
        momo
        zalopay
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const qrCodesByUser = /* GraphQL */ `
  query QrCodesByUser(
    $owner: String!
    $sortDirection: ModelSortDirection
    $filter: ModelQrCodeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    qrCodesByUser(
      owner: $owner
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        owner
        emvco
        momo
        zalopay
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
