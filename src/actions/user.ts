'use server'

import { currentUser } from "@clerk/nextjs/server"

export const authenticateUser=async ()=>{
    try {
        const user=await currentUser()
        if (!user) {
            return {status:403,message:"Unauthorized"}
        }
        const existingUser=await db.user.findUnique({})
    } catch (error) {
        
    }
}