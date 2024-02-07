import { StateCreator} from "zustand";


export interface IPersonSlice{

    FirstName: string;
    LastName: string

    setFirstName: (value: string) => void;

    setLastName: (value: string) => void;
}

export const createPersonSlice: StateCreator<IPersonSlice> = (set) =>({

    FirstName: "",
    LastName: "",

    setFirstName: (value: string) => set({ FirstName: value }),

    setLastName: (value: string) => set({ LastName: value })
});

