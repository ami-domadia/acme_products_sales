const Sequelize = require('Sequelize')
const DATABASE_URL = process.env.DATABASE_URL || 'postgres://localhost:5432/acme_database_sales'

const orm = new Sequelize(DATABASE_URL, {logging: false})

const Product = orm.define('product', {
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    price: {
        type: Sequelize.DECIMAL(10,2),
        allowNull: false,
        validate: {
            notEmpty: true,
            min: 0.00
        }
    },
    discount: {
        type: Sequelize.INTEGER
    },
    availability: Sequelize.ENUM({values: ['instock', 'backordered', 'discontinued']})
})

// Product.prototype.getSalePrice=function(){
//     if(!this.discount){
//         return this.price
//     }
//     else if((100-this.discount)*this.price/100 < 0){
//         return this.price
//     }
//     else {
//         return ((100-this.discount)*this.price/100).toFixed(2)
//     }
// }

const syncAndSeed = ()=>{
    return orm.sync({force: true})
    .then(()=> Product.create({name:'Test', price: 3, discount: 20, availability: 'instock'}))
    .then(()=> Product.create({name:'Test2', price: 4, availability: 'instock'}))
    .catch((err)=>console.log(err))
}

module.exports = {syncAndSeed, Product}