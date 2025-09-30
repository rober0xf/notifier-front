interface Payment {
  id: number
  user_id: number
  amount: number
  name: string
  type: 'income' | 'expense'
  category: string
  date: Date
  due_date?: Date
  paid: boolean
  paid_at?: Date
  recurrent: boolean
  frequency?: 'daily' | 'weekly' | 'monthly' | 'yearly'
  receipt_url?: string
}

export default Payment
