"use client"

import { useTRPC } from "@/trpc/client"
import { useQueries, useQuery } from "@tanstack/react-query"
import { use } from "react"


export const HomeView = () => {
  
  const trpc=useTRPC()
  const {data}=useQuery(trpc.hello.queryOptions({text:"Shailesh"}))

  return (
    <div className="flex flex-col p-4 gap-y-4">
{data?.greeting}
    </div>
  )
}
