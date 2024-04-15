import { register } from "@/lib/auth"
import { NextResponse } from "next/server"

const POST = async (request : Request) => {
    const {email, password} = await request.json()

    try{
        const res = await register(email, password)

        if (res == true) return NextResponse.json({ message: "Vous êtes inscrit !", status: 200, ok: true })
    } catch (error) {
        if (error instanceof Error)
            return NextResponse.json({ message: error.message, status: 500, ok: false })
    }
}

export { POST }