export default interface Payment {
  id: number
  user_id: number
  net_amount: number
  gross_amount: number
  deductible: number
  name: string
  type: string
  date: Date
  recurrent: boolean
  paid: boolean
}
