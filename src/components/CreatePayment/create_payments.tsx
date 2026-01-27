import { useCreatePayment } from "../../hooks";
import { StatusMessageComponent } from "../StatusMessage";
import { CheckboxInput } from "./checkbox";
import { SelectInput } from "./select_input";
import { TextInput } from "./text_input";

export const CreatePaymentComponent = () => {
  const { payment, handleChange, createPayment, statusMessage, statusType } =
    useCreatePayment();

  return (
    <section className="py-1">
      <div className="mx-auto mt-6 w-full px-4 lg:w-8/12">
        <div className="relative mb-6 flex w-full min-w-0 flex-col rounded-lg border-0 wrap-break-word shadow-lg">
          {/* HEADER */}
          <div className="mb-0 rounded-t bg-white px-6 py-6">
            <h6 className="text-center text-2xl font-bold">Register Payment</h6>
          </div>

          {/* BODY */}
          <div className="flex-auto px-4 py-10 pt-0 lg:px-10">
            <h6 className="mt-3 mb-6 text-sm font-bold uppercase">
              Nececessary information
            </h6>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                createPayment();
              }}
            >
              <TextInput
                id="payment-name"
                label="Name"
                name="name"
                value={payment.name}
                required
                onChange={handleChange}
              />

              <TextInput
                id="payment-amount"
                label="Amount"
                name="amount"
                value={payment.amount}
                required
                onChange={handleChange}
              />

              <SelectInput
                id="payment-type"
                label="Payment Type"
                name="type"
                value={payment.type}
                required
                onChange={handleChange}
                options={[
                  { label: "-- Select type --", value: "" },
                  { label: "Expense", value: "expense" },
                  { label: "Income", value: "income" },
                  { label: "Subscription", value: "subscription" },
                ]}
              />

              <SelectInput
                id="payment-category"
                label="Payment Category"
                name="category"
                value={payment.category}
                required
                onChange={handleChange}
                options={[
                  { label: "-- Select category --", value: "" },
                  { label: "Electronics", value: "electronics" },
                  { label: "Entertainment", value: "entertainment" },
                  { label: "Education", value: "education" },
                  { label: "Clothing", value: "clothing" },
                  { label: "Work", value: "work" },
                  { label: "Sports", value: "sports" },
                ]}
              />

              <TextInput
                id="payment-date"
                label="Date"
                name="date"
                type="date"
                value={payment.date}
                onChange={handleChange}
              />

              <hr className="my-6 border-b" />

              {/* Optional */}

              <h6 className="mt-3 mb-6 text-sm font-bold uppercase">
                Optional information
              </h6>

              <TextInput
                id="payment-due-date"
                label="Due Date"
                name="due_date"
                type="date"
                value={payment.due_date ?? ""}
                onChange={handleChange}
              />

              <TextInput
                id="payment-paid-at"
                label="Paid At"
                name="paid_at"
                type="date"
                value={payment.paid_at ?? ""}
                onChange={handleChange}
              />

              <SelectInput
                id="payment-frequency"
                label="Frequency"
                name="frequency"
                value={payment.frequency ?? ""}
                onChange={handleChange}
                options={[
                  { label: "-- None --", value: "" },
                  { label: "Daily", value: "daily" },
                  { label: "Weekly", value: "weekly" },
                  { label: "Monthly", value: "monthly" },
                  { label: "Yearly", value: "yearly" },
                ]}
              />

              <TextInput
                id="payment-receipt-url"
                label="Receipt URL"
                name="receipt_url"
                type="url"
                value={payment.receipt_url ?? ""}
                onChange={handleChange}
              />

              <CheckboxInput
                id="payment-paid"
                label="Paid"
                name="paid"
                checked={payment.paid}
                onChange={handleChange}
              />

              <CheckboxInput
                id="payment-recurrent"
                label="Recurrent"
                name="recurrent"
                checked={payment.recurrent}
                onChange={handleChange}
              />

              <div className="mt-6 flex justify-center">
                <button type="submit" className="primary-btn text-lg">
                  Create Payment
                </button>
              </div>

              <StatusMessageComponent
                message={statusMessage}
                type={statusType}
              />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
