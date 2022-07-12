import {Schema, model, Model, connection} from 'mongoose'

type UserType = {
    name: {
        firstName: string,
        middleName?: string,
    }
    age:number,
    interests: string[]
};

const schema = new Schema<UserType>({
    name: {
        firstName: {type: String, required: true},
        middleName: String
    },
    age: {type: Number, required: true},
    interests: [String]
});

const modelName: string = 'User';

const modelUser = (connection && connection.models[modelName]) ?(connection.models[modelName] as Model<UserType>):model<UserType>(modelName, schema)
export default modelUser