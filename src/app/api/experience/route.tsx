import experience from '@/_data/experience.json'
import { NextResponse } from "next/server";

export async function GET() {
  try {
    return NextResponse.json({
      experience
    })
  } catch (error) {
    return new NextResponse('Internal Server Error', { status: 500 })
  }
}