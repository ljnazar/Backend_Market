import { productModel } from "../models/productSchema.js";

export default class ProductsMongooseDao {

    async list() {
        const productsFound = await productModel.find({ category: "notebooks" }).lean();
        return productsFound;
    }

    async create(product) {
        const result = await productModel.create(product);
        return result;
    }

    async update(pid, product) {
        const result = await productModel.updateOne({ _id: pid }, product);
        return result;
    }
    
    async delete(pid) {
        const result = await productModel.deleteOne({ _id: pid });
        return result;
    }
    
}
