import axios, {AxiosRequestConfig, AxiosResponse} from "axios";

export const postData = async <T>(url: string, data: any, options?: AxiosRequestConfig): Promise<T> => {
    try {
        console.log("url" + url)
        console.log("data" + data.country)
        const response: AxiosResponse<T> = await axios.post(url, data, options);

        console.log(response);

        return response.data;
    } catch (error: any) {
        if (axios.isAxiosError(error)) {
            // console.error(`Axios error: ${error.message}`);
            if (error.response) {
                // console.error(`Response error: ${error.response.status}`);
            }
        } else {
            // console.error(`Unexpected error: ${error.message}`);
        }
        throw error;  
    }
};