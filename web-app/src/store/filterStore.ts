import { create } from "zustand";

export interface Filter{
    search:string
    min_requiredExperience: number;
    min_salary: number;
    location:string;
    sort:string
}
interface FilterState {
    filters: Filter
    setFilter: (filter: Filter) => void  
  }
  


export const useFilterStore = create<FilterState>()((set) => ({
    filters: {
        search:'',
        min_requiredExperience:0,
        min_salary:0,
        location:'',
        sort:''
    },
    setFilter: (filter:Filter) => set((prev) => ({ filters:{...prev,...filter} })),
}))

