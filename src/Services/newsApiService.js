import { API_KEY, base_url } from '../Constants/applicationConstants';
import { ErrorHandler } from '../ErrorHandlers/errorHandlers';
import { api } from './Api';
import ApiProxy from './ApiProxy';
export class NewsApiService {
    async getNewsArticles(channelCode) {
        let url = `${base_url}${channelCode}&apiKey=${API_KEY}`;
        try {
            const apiProxy = new ApiProxy(api);
            const response = await apiProxy.proxyLayorGet(url);
            return await response.json();

        } catch (err) {
            ErrorHandler.handleErrors(err);
        }
    }
}