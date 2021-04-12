export const getBills = async () => {
    let response = await fetch('http://localhost:3002/fiches/all', {
        method: 'GET',
        headers: {
            'Accept':'application/json',
            'Content-Type': 'application/json'
        }
    })
    let bills = await response.json()
    return bills
}

export const PostFrais = async () => {
    let response = await fetch('http://localhost:3002/fiches/all', {
        method: 'POST',
        headers: {
            'Accept':'application/json',
            'Content-Type': 'application/json'
        }
    })
    let bills = await response.json()
    return bills
}
export const postBills = async(bill) => {
    let response = await fetch('http://localhost:3002/fiches/addl', {
        method: 'POST',
        headers : {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(bill)
    })
    let billF = await response.json()
    return billF
}
export const postBillsHF = async (billHF) => {
    let response = await fetch('http://localhost:3002/fiches/addlhors', {
        method: 'POST',
        headers: {
            'Accept':'application/json',
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(billHF)
    })
    let billhf = await response.json()
    return billhf
}