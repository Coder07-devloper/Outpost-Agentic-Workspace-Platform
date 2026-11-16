"use server"
import { prisma } from "@/lib/prisma";
import { currentUser } from "@clerk/nextjs/server"

 // whenever we use this command anywhere, it becomes a server action

export async function checkUser(){  // this  will checkk if  user is loggedin or not
    const clerkUser = await currentUser();
    if(!clerkUser) return null;

    const existing = await prisma.user.findUnique({
        where : { clerkId: clerkUser.id},
    });

    if (existing) return existing;
     const email = clerkUser.emailAddresses[0]?.emailAddress;
     if(!email) return null;

     return prisma.user.create({
        data : {
            clerkId: clerkUser.id,
            email,
            name: `${clerkUser.firstName ?? ""} ${clerkUser.lastName ?? ""}`.trim() || 
            null,
            imageUrl : clerkUser.imageUrl,
        }
     })
    
}