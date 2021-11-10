import bcrypt from'bcryptjs'

const data ={

    users:[
        {
            name:'Andreea',
            email:'admin@themail.com',
            password:bcrypt.hashSync('1234',8),
            isAdmin:true,
        },
        {
            name:'Alina',
            email:'user@themail.com',
            password:bcrypt.hashSync('1234',8),
            isAdmin:false,
        },

    ],
    products:[
        {
            
            name:'Vitammin E & B5 Rose & Violet Serum',
            category:'Face',
            image:'/images/poster1.png',
            price:118,
            countInStock: 7,
            rating:4.5,
            numReviews:10,
            description:'The perfect balance for dry and mixed skin.',
        },
        {
            
            name:'Pinaple body scrub & Coconut body lotion',
            category:'Body',
            image:'/images/poster2.png',
            price:345,
            countInStock: 23,
            rating:5,
            numReviews:25,
            description:'A blessing during the bath and after. Fall offer only.',
        },
        {
            
            name:'Geranium cleanser',
            category:'Face',
            image:'/images/poster3.png',
            price:127,
            countInStock: 32,
            rating:4,
            numReviews:8,
            description:'The delicate foam makes the cleansing process feel like your skin is touched by rose petals.',
        },
        {
            
            name:'Tea tree daytime cream & night cream. ',
            category:'Face',
            image:'/images/poster4.png',
            price:325,
            countInStock: 21,
            rating:5,
            numReviews:44,
            description:'Top customers choice.Best selling product for skin regeneration and oil control. Limited edition only.',
        },
        {
            
            name:'Mint and dragonfruit mask- 500g',
            category:'Face',
            image:'/images/poster5.png',
            price:578,
            countInStock: 17,
            rating:5,
            numReviews:10,
            description:'The best formula for tired skin is no longer a screet but ready to share with the world.',
        },
        {
            
            name:'Passionfruit & Starfruit masks to go',
            category:'Face',
            image:'/images/poster6.png',
            price:122,
            countInStock: 0,
            rating:3.5,
            numReviews:6,
            description:'Just for the right amount of fresh.',
        },
        {
            
            name:' Basil & Tiger Lilies and Retinol Eye cream',
            category:'Face',
            image:'/images/poster7.png',
            price:420,
            countInStock: 10,
            rating:4.5,
            numReviews:18,
            description:'Our doctors descovered that this combination reduces dark circles by 68%.',
        },
    ],
};
export default data;