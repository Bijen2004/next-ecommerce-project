import bcrypt from 'bcryptjs'

const data = {
    users:[
        {
            name:'Bijen',
            email:'bijen@admin.com',
            password:bcrypt.hashSync('123456'),
            isAdmin:true,
        },
        {
            name:'random',
            email:'user@gamil.com',
            password:bcrypt.hashSync('456789'),
            isAdmin:false,
        },
    ],
    products:[{
    name:'Lakhey mask',
    slug:'lakhey-mask',
    image:'/images/mask1.jpg',
    banner:'/images/banner1.jpg',
    price:1499,
    brand:'BG Arts',
    description:'this is lakhey mask',
    category:'Masks',
    rating:4.5,
    numReviews:8,
    countInStock:3,
    isFeatured:true,
    },
    {
        name:'Wall decor art',
        slug:'wall-decor-art',
        image:'/images/art1.jpg',
        banner:'/images/banner2.jpg',
        price:499,
        brand:'BG Arts',
        description:'this is art',
        category:'Decor',
        rating:4.2,
        numReviews:20,
        countInStock:10,
        isFeatured:true,
        },
        {
    name:'acrylic art',
    slug:'acrylic-art',
    image:'/images/acrylic1.jpg',
    banner:'/images/banner2.jpg',
    price:999,
    brand:'BG Arts',
    description:'this is acrylic art',
    category:'Acrylic',
    rating:4.8,
    numReviews:18,
    countInStock:5,
    isFeatured:true,
    },
],
}

export default data