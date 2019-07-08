export const API_BASE = "http://192.168.0.13:26172";

export const OFFLINE = "N";

export const HTTP_CUSTOMER = {
    getCustomers: '/customers/list',
    addCustomer: '/customers/add',
    updateCustomer: '/customers/update',
    deleteCustomer: '/customers/delete/',
    getCustomer: '/customers/get'
}

export const HTTP_CARD = {
    getCards: '/cards/list',
    addCard: '/cards/add',
    updateCard: '/cards/update',
    deleteCard: '/cards/delete/',
    getCard: '/cards/get/'
}

export const HTTP_PRODUCT = {
    getProducts: '/products/list',
    addProduct: '/products/add',
    updateProduct: '/products/update',
    deleteProduct: '/products/delete/',
    getProduct: '/products/get/'
}

export const HTTP_ACCOUNTS = {
    getAccounts: '/accounts/list',
    addAccount: '/accounts/create',
    updateAccount: '/accounts/update',
    deleteAccount: '/accounts/delete/',
    getAccount: '/accounts/account/',
    accountAssignedTo: '/accounts/assignedTo/',
    accountAssignCard: '/accounts/assignCard',
    accountsFilterByDate: '/accouns/filterByDate'
}