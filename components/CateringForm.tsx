"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useForm } from "react-hook-form"
import { Separator } from "./ui/separator"

interface FormData {
  firstName: string
  lastName: string
  email: string
  phoneNumber: string
  message: string
}

const CateringForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>()

  const onSubmit = (data: FormData) => {
    console.log(data)
  }

  return (
    <div>
      <form>
        <div className="grid grid-cols-2 gap-8">
          <div className="flex flex-col ">
            <label
              htmlFor="firstName"
              className="text-sm font-medium text-white mb-2"
            >
              *First name
            </label>
            <Input
              id="firstName"
              {...register("firstName", { required: "First name is required" })}
              placeholder="Gunel"
              className="text-[#4A4A4A] bg-transparent border-[#966F3B] rounded-none outline-none ring-0 focus-visible:ring-0 focus:border-[#966F3B]   focus-visible:ring-offset-0"
            />
            {errors.firstName && (
              <p className="text-red-500 text-sm">{errors.firstName.message}</p>
            )}
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="lastName"
              className="text-sm font-medium text-white mb-2"
            >
              *Last name
            </label>
            <Input
              id="lastName"
              {...register("lastName", { required: "Last name is required" })}
              placeholder="Novruzova"
              className="text-[#4A4A4A] bg-transparent border-[#966F3B] rounded-none outline-none ring-0 focus-visible:ring-0 focus:border-[#966F3B]   focus-visible:ring-offset-0"
            />
            {errors.lastName && (
              <p className="text-red-500 text-sm">{errors.lastName.message}</p>
            )}
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="email"
              className="text-sm font-medium text-white mb-2"
            >
              *Email
            </label>
            <Input
              id="email"
              type="email"
              {...register("email", { required: "Email is required" })}
              placeholder="Gunel"
              className="text-[#4A4A4A] bg-transparent border-[#966F3B] rounded-none outline-none ring-0 focus-visible:ring-0 focus:border-[#966F3B]   focus-visible:ring-offset-0"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="phoneNumber"
              className="text-sm font-medium text-white mb-2"
            >
              *Phone number
            </label>
            <Input
              id="phoneNumber"
              {...register("phoneNumber", {
                required: "Phone number is required",
              })}
              placeholder="Gunel"
              className="text-[#4A4A4A] bg-transparent border-[#966F3B] rounded-none outline-none ring-0 focus-visible:ring-0 focus:border-[#966F3B]   focus-visible:ring-offset-0"
            />
            {errors.phoneNumber && (
              <p className="text-red-500 text-sm">
                {errors.phoneNumber.message}
              </p>
            )}
          </div>
        </div>

        <div className="flex flex-col mt-4">
          <label
            htmlFor="message"
            className="text-sm font-medium text-white mb-2"
          >
            Your message
          </label>
          <Textarea
            id="message"
            {...register("message")}
            placeholder="Type your message here..."
            className="text-[#4A4A4A] bg-transparent border-[#966F3B] rounded-none outline-none ring-0 focus-visible:ring-0 focus:border-[#966F3B]   focus-visible:ring-offset-0"
          />
        </div>

        <div className="flex justify-center w-full">
          <Button
            size="sm"
            className="bg-[#D2B48C] px-5 font-avenirMedium4 text-black rounded-none  hover:bg-[#D2B48C]/80 my-5"
          >
            Get in touch
          </Button>
        </div>
      </form>
    </div>
  )
}

export default CateringForm
