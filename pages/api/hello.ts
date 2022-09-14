// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ name: 'John Doe' })
}

export const callApi = async() => {
  try{
    const res = await fetch("https://kabsa.yallababy.com/api/v1/products/best-selling-products-by-subcategory", {
      method: "GET",
      headers: {"secretKey": "1DIPIkKeq8"}
    })
    const data = await res.json()
    return data
  }catch (err){
    console.log(err)
  }
  
}
