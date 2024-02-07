import { StateCreator } from "zustand";

export interface IConfirmationSlice {
    isConfirm: boolean;


    setIsConfirm: (value: boolean) => void;

}

export const CreateConfirmSlice: StateCreator<IConfirmationSlice> = (set) => ({
    
    isConfirm: false,

    setIsConfirm(value) {

        return set({isConfirm: value});
    },
})