import axios from "axios";
import { NextResponse } from "next/server";

export async function POST(request) {
  const req = await request.json();

  try {
    let data = await axios.post(process.env.NEXT_PUBLIC_API + req.endpoint, {
      email: req.email,
      password: req.password,
      name: req.name,
    });
    console.log(data.data);
    return NextResponse.json({ response: 200 });
  } catch (err) {
    console.log(err.message);
  }
}
