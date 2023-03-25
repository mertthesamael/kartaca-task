import axios from "axios";
import { NextResponse } from "next/server";

export async function GET(request) {
  return NextResponse.json({ data: db });
}

export async function POST(request) {
  const req = await request.json();

  try {
    await axios.post(process.env.NEXT_PUBLIC_API + req.endpoint, {
      id: req.id,
      from: req.from,
      amount: Number(req.amount),
      currentAmount: req.currentAmount,
    });
    return NextResponse.json({ data: req });
  } catch (err) {
    console.log(err);
  }
}
