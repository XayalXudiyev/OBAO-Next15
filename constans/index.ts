type RouteProps = {
  id: number
  href: string
  title: string
}

export const routes: RouteProps[] = [
  { id: 0, href: "/", title: "Home" },
  { id: 1, href: "/menu", title: "Menu" },
  { id: 2, href: "/about-us", title: "About Us" },
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


interface Category {
  id: number
  title: string
}

export const categories: Category[] = [
  { 
    id: 1,
    title: "Big plates",
  },
  {
    id: 2,
    title: "Entrees",
  },
  {
    id: 3,
    title: "Desserts",
  },
  {
    id: 4,
    title: "Drinks",
  },
  {
    id: 5,
    title: "Non gluten",
  },
]