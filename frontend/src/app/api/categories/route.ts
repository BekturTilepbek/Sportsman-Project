import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

export async function GET(req: NextRequest) {
  try {

    const response = await axios.get("http://localhost:8000/api/v1/categories");
    
    return NextResponse.json(response.data);
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || "Server error" },
      { status: error.response?.status || 500 }
    );
  }
}