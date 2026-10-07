import axios from "axios";

const CUSTOMER_API = "http://localhost:8080";

export async function getCustomer(customerId) {
    const response = await axios.get(
        ${CUSTOMER_API}/customers/
    );

    return response.data;
}
