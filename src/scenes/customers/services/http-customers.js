import { API_BASE, HTTP_CUSTOMER, OFFLINE } from '../../../services/config';
import httpBase from '../../../services/http-base';
class HttpCustomers {

    async getCustomers(config) {
        try {
            const url = `${API_BASE}${HTTP_CUSTOMER.getCustomers}`;
            if (OFFLINE === "S") {
                return [];
            } else {
                const data = await httpBase.baseGet(url, config);
                return data.model;
            }
        } catch (error) {
            console.warn(error);
        }
    }

    async deleteCustomer(costumerId,config) {
        try {
            const url = `${API_BASE}${HTTP_CUSTOMER.deleteCustomer}${costumerId}`;
            if (OFFLINE === "S") {
                return [];
            } else {
                const data = await httpBase.basePost(url, config);
                console.log("Respuesta:");
                console.log(data);
                return data;
            }
        } catch (error) {
            console.warn(error);
        }
    }

    async updateCustomer(config) {
        try {
            const url = `${API_BASE}${HTTP_CUSTOMER.updateCustomer}`;
            if (OFFLINE === "S") {
                return [];
            } else {
                const data = await httpBase.basePost(url, config);
                return data;
            }
        } catch (error) {
            console.warn(error);
        }
    }

    async createCustomer(config) {
        try {
            const url = `${API_BASE}${HTTP_CUSTOMER.addCustomer}`;
            if (OFFLINE === "S") {
                return [];
            } else {
                const data = await httpBase.basePost(url, config);
                return data;
            }
        } catch (error) {
            console.warn(error);
        }
    }
}

export default new HttpCustomers();