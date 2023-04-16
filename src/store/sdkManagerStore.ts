import { makeAutoObservable } from "mobx"
import { SDKManagerStoreType, SDKType } from "./types"

const SDKManagerStore =  makeAutoObservable<SDKManagerStoreType>({
  sdkList: [],
  searchValue: "",
  searchList: [],
  page: 1,
  pageSize: 20,
  modalOptions: {}
})

export function addSDK(data: SDKType) {
  SDKManagerStore.sdkList = [...SDKManagerStore.sdkList, data]
  localStorage.setItem("sdk_data", JSON.stringify(SDKManagerStore.sdkList))
}

export function deleteSDK(id: string) {
  SDKManagerStore.sdkList = SDKManagerStore.sdkList.filter(sdk => sdk.id !== id)
  localStorage.setItem("sdk_data", JSON.stringify(SDKManagerStore.sdkList))
}
export function updateSDK(id: string, data: SDKType) {
  SDKManagerStore.sdkList = SDKManagerStore.sdkList.map(sdk => sdk.id !== id ? sdk : data)
  localStorage.setItem("sdk_data", JSON.stringify(SDKManagerStore.sdkList))
}
export function getSDK(id: string) {
  return SDKManagerStore.sdkList.find(sdk => sdk.id === id)
}
export function getCurrentSDKList(): SDKType[] {
  if(SDKManagerStore.searchValue) {
    return sdkSearchList(SDKManagerStore.searchValue)
  }
  let { page, pageSize } = SDKManagerStore
  let list: SDKType[] = SDKManagerStore.sdkList.filter((sdk, index) => {
    if(index >= (page - 1) * pageSize && index < page * pageSize) {
      return sdk
    } else {
      return false
    }
  })
  return list
}

export function sdkSearchList(val: string) {
  return SDKManagerStore.sdkList.filter(sdk => [sdk.name,sdk.boardName,sdk.requestor,sdk.tags].some(i => i.includes(val)))
}

export default SDKManagerStore