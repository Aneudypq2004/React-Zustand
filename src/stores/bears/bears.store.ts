import { create } from "zustand";

interface bear {
    id: number;
    name: string;
}
interface BearState {
    blackBears: number;
    polarBears: number;
    pandaBears: number;

    increaseBlackBears: (by: number) => void;
    increasePolarBears: (by: number) => void;
    increasePandaBears: (by: number) => void;

    computed: {
        TotalBears: number
    }
    bears: bear[]

    AddBear: () => void;

    ClearBears: () => void;
}

export const useBearStore = create<BearState>()((set, get) => ({

    blackBears: 5,
    polarBears: 5,
    pandaBears: 4,

    computed: {
        get TotalBears() {
            return get().blackBears + get().pandaBears + get().polarBears + get().bears.length
        }
    },

    increaseBlackBears: (by: number) => set((state) => ({ blackBears: state.blackBears + by })),
    increasePolarBears: (by: number) => set((state) => ({ polarBears: state.polarBears + by })),

    increasePandaBears(by) {

        set((state) => ({ pandaBears: state.pandaBears + by }));
    },

    bears: [{
        id: 1,
        name: "White Bear"
    }],
    AddBear: () => set((state) => {
        return {
            bears : [...state.bears, {id : state.bears.length + 1, 
            name : `Oso #${state.bears.length + 1}`}]
        }
    } ),

    ClearBears: () => set({ bears: [] }),


})
);