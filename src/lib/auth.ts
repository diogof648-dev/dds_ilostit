import { AuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { PrismaClient } from "@prisma/client"
import bcrypt from 'bcrypt'

const prisma = new PrismaClient()

const options: AuthOptions = {
    session: {
        strategy: "jwt"
    },
    providers: [
        CredentialsProvider({
            type: "credentials",
            credentials: {},
            async authorize(credentials){
                const { email, password } = credentials as {
                    email: string,
                    password: string
                }

                let existingUser = null;

                try
                {
                    // Get user in the db
                    existingUser = await prisma.user.findUnique({
                        where: {
                            email: email
                        }
                    })
                }
                catch(error)
                {
                    throw new Error("Une erreur s'est produite, merci de réssayer plus tard...") 
                }
                

                // if user exists, check both password and if it matches, sets the session
                if (existingUser != null){
                    const passwordsMatch = await bcrypt.compare(password, existingUser.password)

                    if(passwordsMatch){
                        const user = {
                            id: existingUser.id,
                            email: email
                        }

                        return user;
                    }
                }
                
                throw new Error("Email ou mot de passe incorrect")
            }
        })
    ],
    pages: {
        signIn: "/auth"
    }
}

export { options }