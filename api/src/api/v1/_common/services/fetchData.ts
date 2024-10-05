import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

export const fetchData = async <T>(url: string, options?: AxiosRequestConfig): Promise<T> => {
    try {
        const response: AxiosResponse<T> = await axios.get(url, options);

        console.log(response);

        return response.data;
    } catch (error: any) {
        if (axios.isAxiosError(error)) {
            console.error(`Axios error: ${error.message}`);
            if (error.response) {
                console.error(`Response error: ${error.response.status}`);
            }
        } else {
            console.error(`Unexpected error: ${error.message}`);
        }
        throw error; 
    }
};
