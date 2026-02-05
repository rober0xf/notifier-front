export type Frequency = "daily" | "weekly" | "monthly" | "yearly";
export type Type = "income" | "expense" | "subscription";
export type Category =
  | "electronics"
  | "entertainment"
  | "education"
  | "clothing"
  | "work"
  | "sports";
export type StatusType = "success" | "error";

export interface Payment {
  id: number;
  user_id: number;
  amount: number;
  name: string;
  type: Type;
  category: Category;
  date: string;
  due_date: string | null;
  paid: boolean;
  paid_at: string | null;
  recurrent: boolean;
  frequency: Frequency | null;
  receipt_url: string | null;
}

export interface PaymentForm {}

export interface PaymentFormState {
  id: number;
  user_id: number;
  name: string;
  amount: number;
  type: Type | "";
  category: Category | "";
  date: string;
  due_date: string | null;
  paid: boolean;
  paid_at: string | null;
  recurrent: boolean;
  frequency: Frequency | null;
  receipt_url: string | null;
}

export type CreatePaymentDTO = Omit<Payment, "id" | "user_id">;
export type UpdatePaymentDTO = Partial<Omit<Payment, "id" | "user_id">> & {
  id: number;
};
