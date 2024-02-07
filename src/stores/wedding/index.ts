import { create } from "zustand";
import { IPersonSlice, createPersonSlice } from "./person.slice";
import { createGuestSlice, GuestSlice } from "./guest.slice";
import { DateSlice, createDateSlice } from "./data.slice";
import { CreateConfirmSlice, IConfirmationSlice } from "./ConfirmationSlice";


type ShareState = IPersonSlice & GuestSlice & DateSlice & IConfirmationSlice;

export const useWeddingBoundStore = create<ShareState>()(
    (...a) => ({
        ...createPersonSlice(...a),
        ...createGuestSlice(...a),
        ...createDateSlice(...a),
        ...CreateConfirmSlice(...a)
    })
);
  