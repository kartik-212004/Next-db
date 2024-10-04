import { NextRequest } from "next/server"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export async function POST(req: NextRequest) {
  const body = await req.json()
  const { mail, password } = body
  console.log(body)
  const response = await prisma.user.create({
    data: {
      mail: mail,
      password: password,
    },
  })
  console.log(response)
  return Response.json({
    message: "The Data is Saved",
  })
}
