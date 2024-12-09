export type RouteProps = {
  id: number
  href: string
  title: string
}

export interface FormData {
  firstName: string
  lastName: string
  email: string
  phone: string
  message: string
}

export interface ReservationFormData extends FormData {
  adults: number
  child: number
  date: string
  time: string
}

export interface Category {
  id: number
  title: string
}

export interface OfferMeal {
  id: number
  name: string
  description: string
  price: number
  category: string
}
