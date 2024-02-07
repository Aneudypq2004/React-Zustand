import { rentApi } from "../api/rent.api";

interface ILoginResponse {

    id: string;
    email: string;
    token: string;
    fullName: string;
    roles: string[];
    isActive: boolean;
}

export class AuthService {

    static async Login(email: string, password: string): Promise<ILoginResponse> {

        try {

            const { data } = await rentApi.post<ILoginResponse>('auth/login', {
                email,
                password
            })

            return data

        } catch (error) {
            throw new Error("");
        }
    }

    static async checkStatus(): Promise<ILoginResponse>{

        try {
            const {data} = await rentApi.get<ILoginResponse>(`auth/check-status}`);
            return data;
        } catch (error) {
            throw new Error("");
        }
    }

}