/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateQrCodeInput = {
  id?: string | null,
  owner?: string | null,
  emvco?: Array< string > | null,
  momo?: string | null,
  zalopay?: string | null,
};

export type ModelQrCodeConditionInput = {
  owner?: ModelStringInput | null,
  emvco?: ModelStringInput | null,
  momo?: ModelStringInput | null,
  zalopay?: ModelStringInput | null,
  and?: Array< ModelQrCodeConditionInput | null > | null,
  or?: Array< ModelQrCodeConditionInput | null > | null,
  not?: ModelQrCodeConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type QrCode = {
  __typename: "QrCode",
  id: string,
  owner?: string | null,
  emvco?: Array< string > | null,
  momo?: string | null,
  zalopay?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateQrCodeInput = {
  id: string,
  owner?: string | null,
  emvco?: Array< string > | null,
  momo?: string | null,
  zalopay?: string | null,
};

export type DeleteQrCodeInput = {
  id: string,
};

export type ModelQrCodeFilterInput = {
  id?: ModelIDInput | null,
  owner?: ModelStringInput | null,
  emvco?: ModelStringInput | null,
  momo?: ModelStringInput | null,
  zalopay?: ModelStringInput | null,
  and?: Array< ModelQrCodeFilterInput | null > | null,
  or?: Array< ModelQrCodeFilterInput | null > | null,
  not?: ModelQrCodeFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelQrCodeConnection = {
  __typename: "ModelQrCodeConnection",
  items:  Array<QrCode | null >,
  nextToken?: string | null,
};

export type CreateQrCodeMutationVariables = {
  input: CreateQrCodeInput,
  condition?: ModelQrCodeConditionInput | null,
};

export type CreateQrCodeMutation = {
  createQrCode?:  {
    __typename: "QrCode",
    id: string,
    owner?: string | null,
    emvco?: Array< string > | null,
    momo?: string | null,
    zalopay?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateQrCodeMutationVariables = {
  input: UpdateQrCodeInput,
  condition?: ModelQrCodeConditionInput | null,
};

export type UpdateQrCodeMutation = {
  updateQrCode?:  {
    __typename: "QrCode",
    id: string,
    owner?: string | null,
    emvco?: Array< string > | null,
    momo?: string | null,
    zalopay?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteQrCodeMutationVariables = {
  input: DeleteQrCodeInput,
  condition?: ModelQrCodeConditionInput | null,
};

export type DeleteQrCodeMutation = {
  deleteQrCode?:  {
    __typename: "QrCode",
    id: string,
    owner?: string | null,
    emvco?: Array< string > | null,
    momo?: string | null,
    zalopay?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetQrCodeQueryVariables = {
  id: string,
};

export type GetQrCodeQuery = {
  getQrCode?:  {
    __typename: "QrCode",
    id: string,
    owner?: string | null,
    emvco?: Array< string > | null,
    momo?: string | null,
    zalopay?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListQrCodesQueryVariables = {
  id?: string | null,
  filter?: ModelQrCodeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListQrCodesQuery = {
  listQrCodes?:  {
    __typename: "ModelQrCodeConnection",
    items:  Array< {
      __typename: "QrCode",
      id: string,
      owner?: string | null,
      emvco?: Array< string > | null,
      momo?: string | null,
      zalopay?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type QrCodesByUserQueryVariables = {
  owner: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelQrCodeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type QrCodesByUserQuery = {
  qrCodesByUser?:  {
    __typename: "ModelQrCodeConnection",
    items:  Array< {
      __typename: "QrCode",
      id: string,
      owner?: string | null,
      emvco?: Array< string > | null,
      momo?: string | null,
      zalopay?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateQrCodeSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreateQrCodeSubscription = {
  onCreateQrCode?:  {
    __typename: "QrCode",
    id: string,
    owner?: string | null,
    emvco?: Array< string > | null,
    momo?: string | null,
    zalopay?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateQrCodeSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdateQrCodeSubscription = {
  onUpdateQrCode?:  {
    __typename: "QrCode",
    id: string,
    owner?: string | null,
    emvco?: Array< string > | null,
    momo?: string | null,
    zalopay?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteQrCodeSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeleteQrCodeSubscription = {
  onDeleteQrCode?:  {
    __typename: "QrCode",
    id: string,
    owner?: string | null,
    emvco?: Array< string > | null,
    momo?: string | null,
    zalopay?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
