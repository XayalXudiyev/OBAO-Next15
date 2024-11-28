import { Button } from "@/components/ui/button"
import Link from "next/link"
import React from "react"

const ReservationButton = () => {
  return (
    <>
      <Button className="rounded-none bg-[#D2B48C] hover:bg-[#D2B48C]/80 text-black h-[34px] w-28 mr-2 font-avenirRoman">
        <Link href="/reservations">Reservations</Link>
      </Button>
    </>
  )
}

export default ReservationButton
