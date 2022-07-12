import {Request, Response} from "express"
import user from "../models/User"

export const cad_user = async (req: Request, res:Response) =>{
let {firstName, middleName, age, interests} = req.body
    //criar usuário
    const send = req.body.send
    if (send){
    let NewUser = new user();
    NewUser.name = {firstName: firstName, middleName: middleName};
    NewUser.age = age;
    NewUser.interests = interests.split(",");
    NewUser.save();
    console.log(NewUser)
    }

    res.redirect('/')
}

export const cad_user_add = async (req: Request, res:Response) =>{
    const id = req.params.id
    const Userfind = await user.findById({
        _id: id
    })
    Userfind!.age = Userfind!.age + 1
    console.log(Userfind!.age)
    Userfind!.save()
    res.redirect('/')
    }

export const cad_user_remove = async (req: Request, res:Response) =>{
    const id = req.params.id
    const Userfind = await user.findById({
        _id: id
    })
    Userfind!.age = Userfind!.age - 1
    console.log(Userfind!.age)
    Userfind!.save()
    res.redirect('/')
    }

export const cad_delete = async (req: Request, res:Response) =>{
    const id = req.params.id
    const Userfind = await user.findById({
        _id: id
    })
    Userfind!.remove()
    res.redirect('/')
    }