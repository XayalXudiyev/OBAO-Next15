type RouteProps = {
  id: number
  href: string
  title: string
}

export const routes: RouteProps[] = [
  { id: 0, href: "/", title: "Home" },
  { id: 1, href: "/foodMenu", title: "Menu" },
  { id: 2, href: "/aboutUs", title: "About Us" },
  { id: 3, href: "/restaurants", title: "Restaurants" },
  { id: 4, href: "/catering", title: "Catering" },
]

export interface FormData {
  firstName: string
  lastName: string
  email: string
  phoneNumber: string
  message: string
}
