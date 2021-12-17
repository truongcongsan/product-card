const $ = document.querySelector.bind(document);

const productCard = [
    {
        icon: [
            {
                iconHeart: "<i class='bx bx-heart' ></i>",
                iconCart: "<i class='bx bx-cart-alt' ></i>"
            }
        ],
        cartImage: "./1.png",
        cartTitle: "Nike Zoom KD 12",
        cartPrice: "$99",
        sizes: [
            { size: 6 },
            { size: 7 },
            { size: 8 },
            { size: 9 },
        ],
        colors: [
            { color: "red" },
            { color: "green" },
            { color: "black" }
        ],
        cartAction: [
            {
                buyNow: "Buy now",
                addCart: "Add cart"
            }
        ]
    },
    {
        icon: [
            {
                iconHeart: "<i class='bx bx-heart'></i>",
                iconCart: "<i class='bx bx-cart-alt' ></i>"
            }
        ],
        cartImage: "./1.png",
        cartTitle: "Nike Zoom KD 12",
        cartPrice: "$99",
        sizes: [
            { size: 6 },
            { size: 7 },
            { size: 8 },
            { size: 9 },
        ],
        colors: [
            { color: "red" },
            { color: "green" },
            { color: "black" }
        ],
        cartAction: [
            {
                buyNow: "Buy now",
                addCart: "Add cart"
            }
        ]
    },
    {
        icon: [
            {
                iconHeart: "<i class='bx bx-heart'></i>",
                iconCart: "<i class='bx bx-cart-alt' ></i>"
            }
        ],
        cartImage: "./1.png",
        cartTitle: "Nike Zoom KD 12",
        cartPrice: "$99",
        sizes: [
            { size: 6 },
            { size: 7 },
            { size: 8 },
            { size: 9 },
        ],
        colors: [
            { color: "red" },
            { color: "green" },
            { color: "black" }
        ],
        cartAction: [
            {
                buyNow: "Buy now",
                addCart: "Add cart"
            }
        ]
    },
    {
        icon: [
            {
                iconHeart: "<i class='bx bx-heart'></i>",
                iconCart: "<i class='bx bx-cart-alt' ></i>"
            }
        ],
        cartImage: "./1.png",
        cartTitle: "Nike Zoom KD 12",
        cartPrice: "$99",
        sizes: [
            { size: 6 },
            { size: 7 },
            { size: 8 },
            { size: 9 },
        ],
        colors: [
            { color: "red" },
            { color: "green" },
            { color: "black" }
        ],
        cartAction: [
            {
                buyNow: "Buy now",
                addCart: "Add cart"
            }
        ]
    }
]

const RenderCards = () => {
    const cards = productCard.map((item) => {
        return `
            <div class="card">
                <div class="icons">
                    ${item.icon.map((x) => {
                        return `
                            <span class="like">${x.iconHeart}</span>
                            <span class="cart">${x.iconCart}</span>
                        `
                    })}
                </div>
                <div class="card-img">
                    <img src="${item.cartImage}" alt=""/>
                </div>
                <h2 class="card-title">${item.cartTitle}</h2>
                <p class="card-price">${item.cartPrice}</p>
                <div class="card-size">
                    <h3>Size:</h3>
                    ${item.sizes.map((x) => {
                        return `
                            <span>${x.size}</span>
                        `
                    })}
                </div>
                <div class="card-color">
                    <h3>Color:</h3>
                    ${item.colors.map((x) => {
                        return `
                            <span class="${x.color}" style="background-color:${x.color};"></span>
                        `
                    })}
                </div>
                <div class="card-action">
                    ${item.cartAction.map((x) => {
                        return `
                            <button>${x.buyNow}</button>
                            <button>${x.addCart}</button>
                        `
                    })}
                </div>
            </div>
        `
    })
    $(".container").innerHTML = cards.join(" ");
}

RenderCards();

// const RenderSizes = () => {
//     const listSize = productCard.map(item => item.map((itemchild) => {
//         return `
//             <span>${itemchild.size}</span>
//         `
//     }))
//     $(".card-size").innerHTML = listSize.join(" ");
// }

// RenderSizes();