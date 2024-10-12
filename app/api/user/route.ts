import { NextRequest } from "next/server"
import { PrismaClient } from "@prisma/client"
import { z } from "zod"
const prisma = new PrismaClient()
const schema = z.object({
  mail: z.string().email(),
  password: z.string().min(4, "password is short"),
})
export async function POST(req: NextRequest) {
  const body = await req.json()
  const validatedData = schema.parse(body)
  const { mail, password } = validatedData
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
