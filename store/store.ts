import { create } from 'zustand';

interface storeType {
  navigationOffsetTop: number,
  setNavigationOffsetTop: (value: number) => void
}

const useStore = create<storeType>()((set) => ({
  navigationOffsetTop: 0,
  setNavigationOffsetTop: (value: number) => set({navigationOffsetTop: value})
}))

export default useStore;