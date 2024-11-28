import { google } from "googleapis"
import { NextResponse } from "next/server"

type SheetForm = {
  name: string
  email: string
  phone: string
  message: string
}

export async function POST(req: Request) {
  const body = (await req.json()) as SheetForm

  try {
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      },
      scopes: [
        "https://www.googleapis.com/auth/drive",
        "https://www.googleapis.com/auth/drive.file",
        "https://www.googleapis.com/auth/spreadsheets",
      ],
    })

    const sheets = google.sheets({ auth, version: "v4" })

    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: "A1:D1",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [[body.name, body.email, body.phone, body.message]],
      },
    })

    return NextResponse.json({ data: response.data })
  } catch (error) {
    console.error("Error submitting form:", error)
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 },
    )
  }
}
