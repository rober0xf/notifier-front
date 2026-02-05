import { useUpdatePayment } from "../../hooks";
import { CheckboxInput, SelectInput, TextInput } from "../CreatePayment";
import { StatusMessageComponent } from "../StatusMessage";

interface UpdatePaymentProps {
  paymentId: number;
}

export const UpdatePaymentComponent = ({ paymentId }: UpdatePaymentProps) => {
  const {
    payment,
    handleChange,
    updatePayment,
    statusMessage,
    statusType,
    isLoading,
    isFetching,
  } = useUpdatePayment(paymentId);

  if (isFetching) {
    return (
      <section className="py-1">
        <div className="mx-auto mt-6 w-full px-4 lg:w-8/12">
          <div className="relative mb-6 flex w-full min-w-0 flex-col rounded-lg border-0 wrap-break-words shadow-lg">
            <div className="p-6 text-center">
              <p>Loading payment...</p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-1">
      <div className="mx-auto mt-6 w-full px-4 lg:w-8/12">
        <div className="relative mb-6 flex w-full min-w-0 flex-col rounded-lg border-0 wrap-break-words shadow-lg">
          <div className="mb-0 rounded-t bg-white px-6 py-6">
            <div className="justify-between text-center">
              <h6 className="text-center text-2xl font-bold">Update Payment</h6>
            </div>
          </div>

          <div className="flex-auto px-4 py-10 pt-0 lg:px-10">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                updatePayment();
              }}
            >
              <div className="flex flex-wrap">
                <TextInput
                  id="name"
                  label="Name"
                  name="name"
                  value={payment.name}
                  onChange={handleChange}
                />

                <TextInput
                  id="amount"
                  name="amount"
                  label="Amount"
                  value={payment.amount}
                  onChange={handleChange}
                />

                <SelectInput
                  id="type"
                  name="type"
                  label="Payment Type"
                  value={payment.type}
                  onChange={handleChange}
                  options={[
                    { label: "-- Select type --", value: "" },
                    { label: "Expense", value: "expense" },
                    { label: "Income", value: "income" },
                    { label: "Subscription", value: "subscription" },
                  ]}
                />

                <SelectInput
                  id="category"
                  name="category"
                  label="Payment Category"
                  value={payment.category}
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
                  name="date"
                  label="Date"
                  value={payment.date}
                  type="date"
                  onChange={handleChange}
                />
              </div>

              <hr className="mt-6 border-b" />
              {statusMessage && (
                <div className="mb-4">
                  <StatusMessageComponent
                    message={statusMessage}
                    type={statusType}
                  />
                </div>
              )}

              <div className="flex flex-wrap mt-4">
                <TextInput
                  id="payment-due-date"
                  name="due_date"
                  label="Due Date"
                  value={payment.due_date ?? ""}
                  type="date"
                  onChange={handleChange}
                />

                <TextInput
                  id="payment-paid-at"
                  name="paid_at"
                  label="Paid At"
                  value={payment.paid_at ?? ""}
                  type="date"
                  onChange={handleChange}
                />

                <SelectInput
                  id="payment-frequency"
                  name="frequency"
                  label="Frequency"
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
                  name="receipt_url"
                  label="Receipt URL"
                  value={payment.receipt_url ?? ""}
                  onChange={handleChange}
                />

                <div className="mt-4 flex space-x-6">
                  <CheckboxInput
                    id="payment-paid"
                    name="paid"
                    label="Paid"
                    checked={payment.paid}
                    onChange={handleChange}
                  />

                  <CheckboxInput
                    id="payment-recurrent"
                    name="recurrent"
                    label="Recurrent"
                    checked={payment.recurrent}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <hr className="mt-6 mb-6 border-b" />
              <div className="mt-6 flex justify-center gap-4 px-4">
                <button
                  type="submit"
                  className="primary-btn text-lg"
                  disabled={isLoading}
                >
                  {isLoading ? "updating..." : "update payment"}
                </button>
                <a
                  href="/payments"
                  className="rounded bg-gray-500 px-6 py-2 text-lg font-bold text-white hover:bg-gray-700"
                >
                  {" "}
                  Cancel{" "}
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
