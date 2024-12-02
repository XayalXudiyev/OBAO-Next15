import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import React from "react"
import { useForm } from "react-hook-form"
import { Separator } from "./ui/separator"

interface FormData {
  firstName: string
  lastName: string
  email: string
  phoneNumber: string
  message: string
}

const ReservationForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>()

  const onSubmit = (data: FormData) => {
    console.log(data)
  }

  return (
    <div className="w-full flex justify-center">
      <Dialog>
        <DialogTrigger asChild>
          <Button
            size="sm"
            className="bg-[#D2B48C] px-5 font-avenirMedium4 text-black rounded-none mt-10 hover:bg-[#D2B48C]/80"
          >
            Reserve Now
          </Button>
        </DialogTrigger>

        <DialogContent className="bg-[#D2B48C]  border-none p-6 w-[500px] max-w-full">
          <DialogHeader className="text-center">
            <DialogTitle className="font-avenirRoman3 text-lg mb-4">
              Your reservation is for 2 people, <br /> today at 12 PM
            </DialogTitle>
            <DialogDescription className="text-sm text-black/80">
              You will receive a confirmation of your reservation by email.
            </DialogDescription>
          </DialogHeader>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="border border-black p-4"
          >
            <h2 className="text-lg font-semibold mb-1">Your contact details</h2>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col">
                <label htmlFor="firstName" className="text-sm font-medium">
                  *First name
                </label>
                <Input
                  id="firstName"
                  {...register("firstName", {
                    required: "First name is required",
                  })}
                  placeholder="First name"
                  className="text-[#4A4A4A] bg-transparent border-[#1C1C1C] rounded-none outline-none ring-0 focus-visible:ring-0 focus:border-[#1c1c1c]   focus-visible:ring-offset-0"
                />
                {errors.firstName && (
                  <p className="text-red-500 text-sm">
                    {errors.firstName.message}
                  </p>
                )}
              </div>

              <div className="flex flex-col">
                <label htmlFor="lastName" className="text-sm font-medium">
                  *Last name
                </label>
                <Input
                  id="lastName"
                  {...register("lastName", {
                    required: "Last name is required",
                  })}
                  placeholder="Last name"
                  className="text-[#4A4A4A] bg-transparent border-[#1C1C1C] rounded-none outline-none ring-0 focus-visible:ring-0 focus:border-[#1c1c1c]   focus-visible:ring-offset-0"
                />
                {errors.lastName && (
                  <p className="text-red-500 text-sm">
                    {errors.lastName.message}
                  </p>
                )}
              </div>

              <div className="flex flex-col">
                <label htmlFor="email" className="text-sm font-medium">
                  *Email
                </label>
                <Input
                  id="email"
                  type="email"
                  {...register("email", { required: "Email is required" })}
                  placeholder="Email"
                  className="text-[#4A4A4A] bg-transparent border-[#1C1C1C] rounded-none outline-none ring-0 focus-visible:ring-0 focus:border-[#1c1c1c]   focus-visible:ring-offset-0"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email.message}</p>
                )}
              </div>

              <div className="flex flex-col">
                <label htmlFor="phoneNumber" className="text-sm font-medium">
                  *Phone number
                </label>
                <Input
                  id="phoneNumber"
                  {...register("phoneNumber", {
                    required: "Phone number is required",
                  })}
                  placeholder="Phone number"
                  className="text-[#4A4A4A] bg-transparent border-[#1C1C1C] rounded-none outline-none ring-0 focus-visible:ring-0 focus:border-[#1c1c1c]   focus-visible:ring-offset-0"
                />
                {errors.phoneNumber && (
                  <p className="text-red-500 text-sm">
                    {errors.phoneNumber.message}
                  </p>
                )}
              </div>
            </div>

            <div className="flex flex-col mt-4">
              <label htmlFor="message" className="text-sm font-medium">
                Your message
              </label>
              <Textarea
                id="message"
                {...register("message")}
                placeholder="Do you have any remarks?"
                className="text-[#4A4A4A] bg-transparent border-[#1C1C1C] rounded-none outline-none ring-0 focus-visible:ring-0 focus:border-[#1c1c1c]   focus-visible:ring-offset-0"
              />
            </div>
          </form>
          <div>
            <div className="bg-[#1C1C1C] flex justify-center  relative text-center  py-3">
              <div className="absolute top-0 left-0 w-full h-full bg-[url('/cropped.png')] bg-center bg-[length:120%_auto]  bg-repeat-y opacity-10 z-10">
                {" "}
              </div>
              <Button
                size="sm"
                className="bg-[#D2B48C] px-5 font-avenirMedium4 text-black rounded-none  hover:bg-[#D2B48C]/80"
              >
                Reserve Now
              </Button>
            </div>

            <p className="text-sm text-center my-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <Separator className="bg-[#1c1c1c]" />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default ReservationForm
