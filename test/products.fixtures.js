const makeProdsArray = () => {
    return [
        {
            title: "Product One",
            price: 9.99,
            company: 1,
            category: 1,
            link: "www.website.com",
            description: "A good description",
            brand: "Brand name"
        },
        {
            title: "Product Two",
            price: 9.99,
            company: 1,
            category: 2,
            link: "www.website.com",
            description: "A good description",
            brand: "Brand name"
        },
        {
            title: "Product Three",
            price: 9.99,
            company: 1,
            category: 3,
            link: "www.website.com",
            description: "A good description",
            brand: "Brand name"
        },
    ]
}

const makeProdFeatsArray = () => {
    return [
        {
            product: 1,
            feature: 1,
        },
        {
            product: 1,
            feature: 2,
        },
        {
            product: 1,
            feature: 3,
        },
        {
            product: 2,
            feature: 4,
        },
        {
            product: 2,
            feature: 5,
        },
        {
            product: 2,
            feature: 6,
        },
        {
            product: 3,
            feature: 7,
        },
        {
            product: 3,
            feature: 8,
        },
        {
            product: 3,
            feature: 9,
        },
    ]
}

const makeNewProd = () => {
    return {
        title: "Product Four",
        price: 9.99,
        company: 1,
        category: 1,
        link: "www.website.com",
        description: "A good description",
        brand: "Brand name",
        features: [1,3]
    }
}

module.exports = {
    makeNewProd,
    makeProdFeatsArray,
    makeProdsArray
}