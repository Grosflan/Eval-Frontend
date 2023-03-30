export type Invoice = {
    id: number
    client_id: number
    amount: number
    state: string
}

export type Invoices = Invoice[]