import { SDKType } from './../store/types';
import { useState, useEffect } from "react"
import SDKManagerStore, { getCurrentSDKList } from "../store/sdkManagerStore"
import { autorun } from 'mobx';

export const useSDKList = function() {
  let [sdkList, setSDKList] = useState<SDKType[]>(getCurrentSDKList())
  let page = usePage()
  let totalList = useTotalList()
  let searchValue = useSearchValue()
  useEffect(() => {
    setSDKList(getCurrentSDKList())
  }, [page, totalList, searchValue])
  return sdkList
}

export const useSearchValue = function() {
  let [searchValue, setSearchValue] = useState(SDKManagerStore.searchValue)
  useEffect(() => {
    let dispor = autorun(() => {
      setSearchValue(SDKManagerStore.searchValue)
    })
    return () => {
      dispor()
    }
  }, [])
  return searchValue
}

export const usePage = function() {
  let [page, setPage] = useState(SDKManagerStore.page)
  useEffect(() => {
    let dispor = autorun(() => {
      setPage(SDKManagerStore.page)
    })
    return () => {
      dispor()
    }
  }, [])
  return page
}
export const useTotalList = function() {
  let [totalList, setTotalList] = useState(SDKManagerStore.sdkList)
  useEffect(() => {
    let dispor = autorun(() => {
      setTotalList(SDKManagerStore.sdkList)
    })
    return () => {
      dispor()
    }
  }, [])
  return totalList
}

export const useModalOptions = function() {
  let [modal, setModal] = useState(SDKManagerStore.modalOptions)
  useEffect(() => {
    let dispor = autorun(() => {
      setModal(SDKManagerStore.modalOptions)
    })
    return () => {
      dispor()
    }
  }, [])
  return modal
}

