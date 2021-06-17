function factoryFun() {
    var shoes = [
        {
            color: 'blue',
            brand: "Mike",
            price: 350,
            in_stock: 5
        },
        {
            color: 'orange',
            brand: "Hadidas",
            price: 275,
            in_stock: 3
        },
        {
            color: 'blue',
            brand: 'underarmour',
            price: 1500,
            in_stock: 3
        },
        {
            color: 'white',
            brand: 'Allstar converse',
            price: 750,
            in_stock: 5
        },
        {
            color: 'black',
            brand: 'Allstar converse',
            price: 1500,
            in_stock: 3
        },
        {
            color: 'beige',
            brand: "Levi's",
            price: 1500,
            in_stock: 3
        },
        {
            color: 'Blue',
            brand: 'Vans',
            price: 1500,
            in_stock: 3
        },
        {
            color: 'blue',
            brand: 'underarmour',
            price: 1299,
            in_stock: 2
        },
        {
            color: 'Orange',
            brand: 'Nike',
            price: 1099,
            in_stock: 3
        },
        {
            color: 'black',
            brand: 'Le Coq Sportif',
            price: 1500,
            in_stock: 3
        },
        {
            color: 'White',
            brand: 'Le Coq Sportif',
            price: 2500,
            in_stock: 3
        },
        {
            color: 'yellow',
            brand: 'LOUIS VUITTON',
            price: 1500,
            in_stock: 3
        },
        {
            color: 'brown',
            brand: 'LOUIS VUITTON',
            price: 1500,
            in_stock: 3
        },
        {
            color: 'blue',
            brand: 'underarmour',
            price: 1500,
            in_stock: 3
        },
        {
            color: 'gold',
            brand: 'underarmour',
            price: 1500,
            in_stock: 3
        },
        {
            color: 'brown',
            brand: 'underarmour',
            price: 1500,
            in_stock: 3
        },
        {
            color: 'blue',
            brand: 'networks',
            price: 500,
            in_stock: 3
        },
        {
            color: 'blue',
            brand: 'pro',
            price: 1500,
            in_stock: 3
        },
        {
            color: 'blue',
            brand: 'proximate',
            price: 1500,
            in_stock: 3
        },
        {
            color: 'blue',
            brand: 'Rockstar',
            price: 1500,
            in_stock: 3
        },

    ];

    // available shoes
    function howManyShoesAv(){
        return shoes.length
    }

    console.log(shoes.length)
    function shoppingBasket(){
        return 
    }
    return {
        shoppingBasket,
        howManyShoesAv
    }
}