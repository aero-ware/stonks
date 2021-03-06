import mongoose, { Document, Model } from "mongoose";

export interface IUser extends Document {
    _id: string;
    balance: number;
    portfolio: {
        ticker: string;
        name: string;
        count: number;
    }[];
}

export const userSchema = new mongoose.Schema({
    _id: {
        type: String,
        required: true,
    },
    balance: {
        type: Number,
        default: 100000,
    },
    portfolio: {
        type: [
            {
                ticker: {
                    type: String,
                    required: true,
                },
                name: {
                    type: String,
                    required: true,
                },
                count: {
                    type: Number,
                    required: true,
                },
            },
        ],
        default: [],
    },
});

const users: Model<IUser> = mongoose.models.users || mongoose.model("users", userSchema);

export default users;
