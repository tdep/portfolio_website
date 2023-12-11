import experience from '@/_data/experience.json'
import {NextResponse} from "next/server";

export async function GET() {
  return NextResponse.json({experience: experience.jobs})
}