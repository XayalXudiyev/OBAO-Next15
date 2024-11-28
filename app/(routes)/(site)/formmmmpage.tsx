"use client"

import { useState } from "react"

export default function Homee() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const form = {
      name,
      email,
      phone,
      message,
    }
    console.log(form)

    const response = await fetch("/api/submit", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    })

    const data = await response.json()

    alert(data.data.tableRange)

    setMessage("")
    setEmail("")
    setPhone("")
    setName("")

    console.log(form)
  }

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="max-w-md mx-auto py-16 bg-slate-500">
        <form className="space-y-4 py-4" onSubmit={handleSubmit}>
          <div className="flex items-center justify-center ">
            <label htmlFor="name" className="sr-only ">
              Name
            </label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              id="name"
              className="rounded-md p-2"
            />
          </div>
          <div className="flex items-center justify-center">
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              id="email"
              className="rounded-md p-2"
            />
          </div>
          <div className="flex items-center justify-center">
            <label htmlFor="phone" className="sr-only">
              Phone
            </label>
            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              type="tel"
              id="phone"
              className="rounded-md p-2"
            />
          </div>
          <div className="flex items-center justify-center">
            <label htmlFor="message" className="sr-only">
              Message
            </label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              id="message"
              className="rounded-md p-2"
            />
          </div>

          <button
            type="submit"
            className="mx-auto block bg-blue-500 text-white p-2 rounded-md"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}
