import fs from "fs"
import path from "path"
import { NextResponse } from "next/server"

export const GET = async (request: Request) => {
  const { searchParams } = new URL(request.url)
  const lang = searchParams.get("lang")
  const companyName = searchParams.get("companyName")

  if (!lang || !companyName) {
    return NextResponse.json(
      {
        error: {
          code: "invalid_parameter",
          message: "invalid_parameter",
        },
      },
      { status: 400 }
    )
  }

  const fileName = `resume_kentsunekawa.pdf`

  const filePath = path.join(
    process.cwd(),
    `src/server/database/resumes/data/${companyName}/${lang}.pdf`
  )

  try {
    const file = fs.readFileSync(filePath)
    return new NextResponse(file, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="${fileName}"`,
      },
    })
  } catch (e) {
    return NextResponse.json(
      {
        error: {
          code: "unexpected",
          message: "Internal system error",
        },
      },
      { status: 500 }
    )
  }
}
