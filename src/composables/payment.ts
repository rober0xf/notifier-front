interface Payment {
  id: number;
  user_id: number;
  amount: number;
  name: string;
  type: 'income' | 'expense' | 'subscription';
  category: string;
  date: string;
  due_date?: string | null;
  paid: boolean;
  paid_at?: string | null;
  recurrent: boolean;
  frequency?: 'daily' | 'weekly' | 'monthly' | 'yearly' | null;
  receipt_url?: string | null;
}

export default Payment;
