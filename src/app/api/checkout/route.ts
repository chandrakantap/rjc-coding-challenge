import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    success: true,
  });
}

export async function POST(request: Request) {
  const res = await request.json();
  if (res.toPerson === "bademail@email.com") {
    return NextResponse.json(
      {
        success: false,
      },
      { status: 400 }
    );
  }
  if (res.toPerson === "unauthorized@email.com") {
    return NextResponse.json(
      {
        success: false,
      },
      { status: 401 }
    );
  }
  if (res.toPerson === "5xx@email.com") {
    return NextResponse.json(
      {
        success: false,
      },
      { status: 503 }
    );
  }
  return NextResponse.json({
    success: true,
  });
}
