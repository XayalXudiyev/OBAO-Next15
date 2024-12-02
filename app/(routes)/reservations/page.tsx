"use client"

import ReservationForm from "@/components/ReservationForm"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { format } from "date-fns"
// import { ChevronDown } from 'lucide-react';
import { Calendar as CalendarIcon } from "lucide-react"


import { cn } from "@/lib/utils"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { useState } from "react"

const ReservationsPage = () => {
  const [childCount, setChildCount] = useState(1)
  const [adultCount, setAdultCount] = useState(1)
  const [selectedTime, setSelectedTime] = useState<string | undefined>("")
  const [date, setDate] = useState<Date | null>(null)

  const increment = (
    setter: React.Dispatch<React.SetStateAction<number>>,
    value: number,
  ) => {
    setter(value + 1)
  }

  const decrement = (
    setter: React.Dispatch<React.SetStateAction<number>>,
    value: number,
  ) => {
    if (value > 1) {
      setter(value - 1)
    }
  }

  return (
    <div className="relative flex bg-[#1C1C1C] items-center justify-center min-h-screen text-white">
      <div className="absolute top-0 left-0 w-full h-full bg-[url('/cropped.png')] bg-center bg-[length:120%_auto]  bg-repeat-y opacity-10 z-10" />

      <div className="z-20 flex flex-col md:flex-row mb-10 md:justify-between md:mb-44 px-5 sm:px-10 md:px-16 mx-auto md:mx-0">
        <div className="md:w-8/12 mt-10 md:mt-20 text-center md:text-start font-avenirRoman3 text-xl ">
          <h1 className="text-4xl font-avenirMedium4">
            BOOK A <span className="text-[#FB4444]">TABLE</span>
          </h1>
          <p className="leading-7 my-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <p className="leading-7">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in
            tellus pharetra, faucibus enim sit amet, ullamcorper est.
          </p>
        </div>

        <div className="md:w-1/3 border-2  border-[#D2B48C] mt-10 md:mt-20 px-4 p-10">
          <h3 className=" text-xl font-bold font-avenirHeavy5  text-center ">
            Find a table
          </h3>

          <div className="flex flex-col gap-4 ">

            {/* adult */}
            <div className="flex flex-col gap-1 ">
              <div className="flex items-center gap-2 justify-between">
                <span>{adultCount} adult</span>
                <div className="flex items-center gap-5 text-3xl">
                  <Button
                    variant="ghost"
                    className="p-0 text-2xl hover:bg-transparent hover: transition-all duration-300"
                    size="lg"
                    onClick={() => increment(setAdultCount, adultCount)}
                  >
                    +
                  </Button>
                  <Button
                    variant="ghost"
                    className="p-0 text-2xl hover:bg-transparent hover: transition-all duration-300"
                    size="lg"
                    onClick={() => decrement(setAdultCount, adultCount)}
                  >
                    -
                  </Button>
                </div>
              </div>
              <Separator />
            </div>

            {/* child */}
            <div className="flex flex-col gap-1 ">
              <div className="flex items-center gap-2 justify-between">
                <span>{childCount} child</span>
                <div className="flex items-center gap-5 text-3xl">
                  <Button
                    variant="ghost"
                    className="p-0 text-2xl hover:bg-transparent hover: transition-all duration-300"
                    size="lg"
                    onClick={() => increment(setChildCount, childCount)}
                  >
                    +
                  </Button>
                  <Button
                    variant="ghost"
                    className="p-0 text-2xl hover:bg-transparent hover: transition-all duration-300"
                    size="lg"
                    onClick={() => decrement(setChildCount, childCount)}
                  >
                    -
                  </Button>
                </div>
              </div>
              <Separator />
            </div>

            {/* time */}
            <div className="flex flex-col gap-1 ">
              <div className="flex items-center gap-2 justify-between">
                <Select onValueChange={(value) => setSelectedTime(value)}>
                  <SelectTrigger className="flex justify-between items-center bg-transparent border-none outline-none ring-0 focus:ring-0 focus:ring-offset-0 gap-x-2 text-[15px] w-full p-0 ">
                    <span>{selectedTime || "Select time"}</span>
                  </SelectTrigger>
                  <SelectContent className=" h-56 overflow-y-auto border border-[#D2B48C] rounded-md shadow-md w-full">
                    <SelectGroup>
                      <SelectItem value="7 PM">
                        <div className="flex justify-between w-64">
                          <span>7 PM </span>
                          <span>Available</span>
                        </div>
                      </SelectItem>
                      <SelectItem value="7:30 AM  " disabled>
                        <div className="flex justify-between w-64">
                          <span>7:30 AM </span>
                          <span>Not available</span>
                        </div>
                      </SelectItem>
                      <SelectItem value="8 PM">
                        <div className="flex justify-between w-64">
                          <span>8 PM </span>
                          <span>Available</span>
                        </div>
                      </SelectItem>
                      <SelectItem value="8:30 PM">
                        <div className="flex justify-between w-64">
                          <span>8:30 PM </span>
                          <span>Available</span>
                        </div>
                      </SelectItem>
                      <SelectItem value="9 PM" disabled>
                        <div className="flex justify-between w-64">
                          <span>9 PM </span>
                          <span>Available</span>
                        </div>
                      </SelectItem>
                      <SelectItem value="9:30 AM">
                        <div className="flex justify-between w-64">
                          <span>9:30 AM </span>
                          <span>Available</span>
                        </div>
                      </SelectItem>
                      <SelectItem value="10 PM">
                        <div className="flex justify-between w-64">
                          <span>10 PM </span>
                          <span>Available</span>
                        </div>
                      </SelectItem>
                      <SelectItem value="10:30">
                        <div className="flex justify-between w-64">
                          <span>10:30 AM </span>
                          <span>Available</span>
                        </div>
                      </SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <Separator />
            </div>

            {/* date */}
            <div className="flex flex-col gap-1 ">
              <div className="flex flex-col items-start space-y-2">
                <Popover >
                  <PopoverTrigger asChild>
                    <Button
                      variant={"outline"}
                      className="w-full flex justify-between bg-transparent hover:bg-transparent hover:text-white text-white p-0  border-none text-base">
                      <span> {date ? format(date, "d MMM yyy") : "Select date"}</span>
                      <span> <CalendarIcon /></span>

                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0 ">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      initialFocus
                      fromDate={new Date()}
                    />
                  </PopoverContent>
                </Popover>
              </div>
              <Separator />
            </div>

          </div>

          <ReservationForm />
        </div>
      </div>
    </div>
  )
}

export default ReservationsPage
