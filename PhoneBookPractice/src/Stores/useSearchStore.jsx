import { create } from "zustand";

const useSearchStore = create((set) => ({
  keyword: "",
  setKeyword: (text) => set({ keyword: text }),
}));

export default useSearchStore;
