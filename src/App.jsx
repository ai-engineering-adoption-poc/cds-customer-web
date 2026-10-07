import { getCustomer } from "./customerApi";

export async function loadCustomerProfile(customerId) {
    return await getCustomer(customerId);
}
