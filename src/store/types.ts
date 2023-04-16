export interface SDKManagerStoreType {
  sdkList?: SDKType[];
  searchValue: string;
  searchList: SDKType[];
  page: number;
  pageSize: number;
  modalOptions: any
}

export interface SDKType {
  id?: string;
  name: string;
  boardName: string;
  tags?: string;
  requestor: string;
  sdkScript: string
}