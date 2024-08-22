import { create } from 'zustand';

interface storeType {
  navigationOffsetTop: number,
  setNavigationOffsetTop: (value: number) => void,
  newsVisibleCount: number,
  setNewsVisibleCount: () => void,
}

const useStore = create<storeType>()((set) => ({
  navigationOffsetTop: 0,
  setNavigationOffsetTop: (value: number) => set({navigationOffsetTop: value}),
  newsVisibleCount: 10,
  setNewsVisibleCount: () => set((state) => ({newsVisibleCount: state.newsVisibleCount + 5})),
}))

export default useStore;