"use client"

import ReservationForm from "@/components/ReservationForm"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
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
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const [_, setIsModalOpen] = useState(false)

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
    <div className="bg-[#1C1C1C] flex md:container mx-auto  relative">
      <div className="absolute top-0 left-0 w-full h-full bg-[url('/cropped.png')] bg-center bg-[length:120%_auto]  bg-repeat-y opacity-10 z-10" />

      <div className="z-20 flex flex-col md:flex-row mb-10 md:mb-44 px-5 md:mx-0 ">
        <div className="md:w-2/3 mt-10 md:mt-20 text-center md:text-start">
          <h1 className="text-[#FB4444] text-4xl font-bold font-avenirMedium4 ">
            <span className="text-white">BOOK A</span> TABLE
          </h1>
          <p className="text-white text-xl md:text-2xl leading-7 font-avenirRoman3 my-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
          </p>
          <p className="text-white text-lg md:text-2xl leading-7 font-avenirRoman3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in
            tellus pharetra, faucibus enim sit amet, ullamcorper est.{" "}
          </p>
        </div>

        <div className="md:w-1/3 border-2  border-[#D2B48C] mt-10 md:mt-20 p-10">
          <h3 className="text-white text-2xl font-bold font-avenirMedium4 text-center ">
            Find a table
          </h3>

          <div className="flex flex-col gap-4 ">
            <div className="flex flex-col gap-1 text-white">
            
              <div className="flex items-center gap-2 justify-between">
                <span>{adultCount} adult</span>
                <div className="flex items-center gap-5 text-3xl">
                  <Button
                    variant="ghost"
                    className="p-0 text-2xl hover:bg-transparent hover:text-white transition-all duration-300"
                    size="lg"
                    onClick={() => increment(setAdultCount, adultCount)}
                  >
                    +
                  </Button>
                  <Button
                    variant="ghost"
                    className="p-0 text-2xl hover:bg-transparent hover:text-white transition-all duration-300"
                    size="lg"
                    onClick={() => decrement(setAdultCount, adultCount)}
                  >
                    -
                  </Button>
                </div>
              </div>
              <Separator />
            </div>

            <div className="flex flex-col gap-1 text-white">
              {/* child */}
              <div className="flex items-center gap-2 justify-between">
                <span>{childCount} child</span>
                <div className="flex items-center gap-5 text-3xl">
                  <Button
                    variant="ghost"
                    className="p-0 text-2xl hover:bg-transparent hover:text-white transition-all duration-300"
                    size="lg"
                    onClick={() => increment(setChildCount, childCount)}
                  >
                    +
                  </Button>
                  <Button
                    variant="ghost"
                    className="p-0 text-2xl hover:bg-transparent hover:text-white transition-all duration-300"
                    size="lg"
                    onClick={() => decrement(setChildCount, childCount)}
                  >
                    -
                  </Button>
                </div>
              </div>
              <Separator />
            </div>

            <div className="flex flex-col gap-1 text-white">
              {" "}
              {/* time */}
              <div className="flex items-center gap-2 justify-between">
                <Select onValueChange={(value) => setSelectedTime(value)}>
                  <SelectTrigger className="flex justify-between items-center bg-transparent border-none outline-none ring-0 focus:ring-0 focus:ring-offset-0 gap-x-2 text-[15px] w-full p-2 text-white">
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

            <div className="flex flex-col gap-1 text-white">
              {/* date */}
              <div className="flex flex-col items-start space-y-2">
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      id="date"
                      className={
                        "w-full px-4 py-2  text-white bg-transparent  focus:outline-none focus:ring-0 focus:ring-offset-0 hover:bg-transparent"
                      }
                    >
                      9 Sep 2024 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                      &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                      &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                      &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                      &nbsp; &nbsp; &nbsp; 
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-4  border-none outline-none">
                    <Calendar
                      value={selectedDate}
                      onChange={(date: Date) => setSelectedDate(date)}
                      calendarType="US"
                      className="text-black bg-transparent"
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
