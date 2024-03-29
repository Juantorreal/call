import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '../../../lib/prisma'
import { setCookie } from 'nookies'



export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
    if (req.method != 'POST') {
          return res.status(405).end()
    }
   const {name,username} = req.body

   const userExists = await prisma.user.findUnique({
    where: {
      username,
    },
   })

   if(userExists){
    return res.status(400).json({
      message: 'Username already exists.'
    })
   }

   const user = await prisma.user.create({
    data: {
         name,
         username,
    
    }
   })


   setCookie({res}, '@call:userId', user.id, {
    maxAge: 60*60*60*7,
    path: '/' //7days
    })
   return res.status(201).json(user)
}
