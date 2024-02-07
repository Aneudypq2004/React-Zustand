import { StateCreator } from "zustand";


export interface DateSlice {
    
    eventDate: Date;

    eventYYYYMMDD: () => string;

    eventHHMM: () => string;

    setEventDate: (parcialDate: string) => void;

    setEventTime: (eventTime: string) => void;
}


export const createDateSlice: StateCreator<DateSlice> = (set, get) => ({

    eventDate: new Date(),

    eventHHMM() {
        const hours = get().eventDate.getHours().toString().padStart(2, '0');

        const minutes = get().eventDate.getMinutes().toString().padStart(2, '0');

        return `${hours}:${minutes}`
    },

    eventYYYYMMDD() {
        return get().eventDate.toISOString().split('T')[0]
    },

    setEventDate: (parcialDate: string) => set(() => {

        const date = new Date(parcialDate);

        const year = date.getFullYear();
        const monnth = date.getMonth() + 1;
        const day = date.getDay();

        const newDate = new Date(get().eventDate);
        newDate.setFullYear(year, monnth, day);

        return {eventDate: newDate}
    }),

    setEventTime: (eventTime: string) => set(state => {

        const hours = +eventTime.split(':')[0];
        const minutes = +eventTime.split(':')[1];

        const newDate = new Date(state.eventDate);
        newDate.setHours(hours, minutes);

        return {eventDate: newDate}
    })

});