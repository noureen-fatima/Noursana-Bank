import axios from 'axios';

const API_URL = 'http://localhost:3111';
const axiosInstance = axios.create({
    baseURL: API_URL,
    headers: {
        "content-type": "application/json",
        timeout: 10000
    }
});

export async function makeApiRequest(url, method, body) {
    try {
        const response = await axiosInstance({
            method: method,
            url: API_URL + url,
            data: body,
            responseType: 'json',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        console.log('Response:', response);
        return response;
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}

