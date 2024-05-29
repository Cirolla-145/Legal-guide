import { create } from "zustand";

const useSection = create((set)=>({
    selectedDomain : "",
    setSelectedDomain : (selectedDomain) =>set({selectedDomain})
}))

export default useSection