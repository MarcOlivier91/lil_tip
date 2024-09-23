// Let's build from here

function tip(total: number, percentage:number) {
    const newTotal = ((0.01 * percentage) * total) + total
    return newTotal
}

