import { AuthStatus, User } from "../../interfaces";
import { StateCreator, create } from "zustand";
import { AuthService } from "../../services/auth.service";

export interface IAuthState {

    status: AuthStatus
    token?: string;
    user?: User;

    loginUser: (email: string, password: string) => Promise<void>;
    checkAuthStatus: () => Promise<void>;
}

const storeApi: StateCreator<IAuthState> = (set) => ({

    status: 'pending',
    token: undefined,
    user: undefined,

    loginUser: async (email: string, password: string) => {

        try {

            const { token, ...user } = await AuthService.Login(email, password);

            set({ status: 'authorized', token, user });

        } catch (error) {
            set({ status: 'unauthorized', token: undefined, user: undefined });

        }
    },

    checkAuthStatus: async () => {

        try {

            const { token, ...user } = await AuthService.checkStatus();
            set({ status: 'authorized', token, user });

        } catch (error) {
            set({ status: 'unauthorized', token: undefined, user: undefined });
            throw new Error('unauthorized')
        }

    }

});

export const useAuthStore = create<IAuthState>()(
    storeApi
);