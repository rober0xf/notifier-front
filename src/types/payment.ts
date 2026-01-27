export type Frequency = "daily" | "weekly" | "monthly" | "yearly";
export type Type = "income" | "expense" | "subscription" | "";
export type Category =
  | "electronics"
  | "entertainment"
  | "education"
  | "clothing"
  | "work"
  | "sports"
  | "";

export interface Payment {
  amount: number;
  name: string;
  type: Type;
  category: Category;
  date: string;
  due_date?: string | null;
  paid: boolean;
  paid_at?: string | null;
  recurrent: boolean;
  frequency?: Frequency | null;
  receipt_url?: string | null;
}

export interface PaymentForm {
  amount: number;
  type: Payment["type"];
  category: string;
  paid: boolean;
  recurrent: boolean;
  frequency: Frequency | "";
  receipt_url: string;
}
