const { NextResponse } = require("next/server");
import { ConnectDB } from "@/lib/config/db";
import BlogModel from "@/lib/models/BlogModel";
import { writeFile } from "fs/promises";

export async function GET(request) {
    await ConnectDB(); // Ensure DB connection before fetching data
    return NextResponse.json({ msg: "API working" });
}

export async function POST(request) {
    await ConnectDB(); // Ensure DB connection before saving data

    try {
        const formData = await request.formData();
        const timestamp = Date.now();

        // Handling image file
        const image = formData.get('image');
        const imageByteData = await image.arrayBuffer();
        const buffer = Buffer.from(imageByteData);
        const path = `/public/${timestamp}_${image.name}`; // Store in /tmp
        await writeFile(path, buffer);
        const imgUrl = `/${timestamp}_${image.name}`;

        const blogData = {
            title: formData.get('title'),
            description: formData.get('description'),
            category: formData.get('category'),
            author: formData.get('author'),
            image: imgUrl,
            authorImg: formData.get('authorImg'), // Ensure it's correctly handled
        };

        await BlogModel.create(blogData);
        console.log('Data saved');

        return NextResponse.json({ success: true, msg: "Data saved" });
    } catch (error) {
        console.error("Error saving data:", error);
        return NextResponse.json({ success: false, msg: "Failed to save data", error: error.message });
    }
}
