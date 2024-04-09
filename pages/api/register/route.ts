import user from '@models/user';
import connect from "@utils/db";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export const POST = async (request: any) => {
    const { fullName, userName, email, password, role, date } = await request.json();

    await connect();

    const existingUser = await user.findOne({ email });

    if (existingUser) {
        return new NextResponse("Email is already in use", { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 5);
    const newUser = new user({
        fullName,
        userName,
        email,
        password: hashedPassword,
        role,
        date
    });

    try {
        await newUser.save();
        return new NextResponse("user is registered", { status: 200 });
    } catch (err: any) {
        return new NextResponse(err, {
            status: 500,
        });
    }
};