import axios from 'axios';
import User from '../models/User'
import API_URL from "../config/config";

export async function getUserList(
): Promise<User[]> {
    const { data } = await axios.get(API_URL);
    return data.users;
};