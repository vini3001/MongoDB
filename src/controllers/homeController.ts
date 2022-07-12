import { Request, Response } from 'express';
import users from '../models/User'
import { Product } from '../models/Product';
import user from '../models/User'

export const home = async (req: Request, res: Response)=>{
    let age: number = 90;
    let showOld: boolean = false;
    let usuarios = await users.find({});

    if(age > 50) {
        showOld = true;
    }

    let list = Product.getAll();
    let expensiveList = Product.getFromPriceAfter(12);

    res.render('pages/home', {
        usuarios,
    });
};