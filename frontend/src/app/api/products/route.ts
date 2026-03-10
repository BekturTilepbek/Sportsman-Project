import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

export async function GET(req: NextRequest) {
  try {
    // получаем query параметры
    const { searchParams } = new URL(req.url);
    const category = searchParams.get("category");

    // формируем URL к бэку
    const url = category
      ? `http://localhost:8000/api/v1/products/?category=${category}`
      : `http://localhost:8000/api/v1/products/`;

    const response = await axios.get(url);

    return NextResponse.json(response.data);
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || "Server error" },
      { status: error.response?.status || 500 }
    );
  }
}