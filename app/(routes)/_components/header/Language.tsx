import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import React from "react"

const Language = () => {
  return (
    <Select>
      <SelectTrigger className="bg-transparent border-none outline-none ring-0 focus:ring-offset-0 focus:ring-0 focus:outline-none gap-x-1 md:text-base w-fit">
        <SelectValue placeholder="EN" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="en">EN</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}

export default Language
