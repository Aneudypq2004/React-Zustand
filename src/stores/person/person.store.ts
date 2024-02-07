import { create, type StateCreator } from "zustand";
import { persist, } from "zustand/middleware";
import { customSessionStorage } from "../storages/session-storage";
import { useWeddingBoundStore } from "../wedding";

interface PersonState {

    FirstName: string;
    LastName: string

    setFirstName: (value: string) => void;

    setLastName: (value: string) => void;
}

const stateApi: StateCreator<PersonState> = (set) => ({

    FirstName: "",
    LastName: "",

    setFirstName: (value: string) => set({ FirstName: value }),

    setLastName: (value: string) => set({ LastName: value })
}) 


export const usePersonStore = create<PersonState>()(
    persist (
        stateApi,  {name : 'person-store', storage: customSessionStorage}
    )
);

usePersonStore.subscribe((state) => {

    useWeddingBoundStore.getState().setFirstName(state.FirstName);
    useWeddingBoundStore.getState().setLastName(state.LastName);
});
