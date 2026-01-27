import { useUpdatePayment } from "../../hooks";
import type { Payment } from "../../types";
import { StatusMessageComponent } from "../StatusMessage";
import { AmountPayment } from "./amount_payment";
import { CategoryPayment } from "./category_payment";
import { RecurrentForm } from "./recurrent_form";
import { TypePayment } from "./type_payment";

interface Props {
  payment: Payment;
}

export const UpdatePaymentComponent = ({ payment }: Props) => {
  const { form, updateField, submit, status } = useUpdatePayment(payment);

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
                submit();
              }}
            >
              <h6 className="mt-3 mb-6 text-sm font-bold uppercase">
                Necessary information
              </h6>

              <div className="flex flex-wrap">
                {/* name */}
                <div className="w-full px-4 lg:w-6/12">
                  <div className="relative mb-3 w-full">
                    <label className="mb-2 block text-xs font-bold uppercase">
                      Name
                    </label>
                    <input
                      value={payment.name}
                      disabled
                      className="w-full rounded border-0 bg-white px-3 py-3 text-sm shadow"
                    />
                  </div>
                </div>

                <AmountPayment
                  required
                  value={form.amount}
                  onChange={(v) => updateField("amount", v)}
                />

                <TypePayment
                  value={form.type}
                  onChange={(v) => updateField("type", v)}
                />

                <CategoryPayment
                  value={form.category}
                  onChange={(v) => updateField("category", v)}
                />
              </div>

              {/* date */}
              <div className="w-full px-4 lg:w-6/12">
                <div className="relative mb-3 w-full">
                  <label className="mb-2 block text-xs font-bold uppercase">
                    Date
                  </label>
                  <input
                    value={payment.date}
                    type="date"
                    disabled
                    className="w-full rounded border-0 bg-white px-3 py-3 text-sm shadow"
                  />
                </div>
              </div>

              <hr className="mt-6 border-b" />
              <h6 className="mt-3 mb-6 text-sm font-bold uppercase">
                Optional information
              </h6>
              <div className="flex flex-wrap">
                {/* due date */}
                <div className="w-full px-4 lg:w-6/12">
                  <div className="relative mb-3 w-full">
                    <label className="mb-2 block text-xs font-bold uppercase">
                      Due Date
                    </label>
                    <input
                      value={payment.due_date ?? ""}
                      type="date"
                      disabled
                      className="w-full rounded border-0 bg-white px-3 py-3 text-sm shadow"
                    />
                  </div>
                </div>

                {/* paid at */}
                <div className="w-full px-4 lg:w-6/12">
                  <div className="relative mb-3 w-full">
                    <label className="mb-2 block text-xs font-bold uppercase">
                      Paid At
                    </label>
                    <input
                      value={payment.paid_at ?? ""}
                      type="date"
                      disabled
                      className="w-full rounded border-0 bg-white px-3 py-3 text-sm shadow"
                    />
                  </div>
                </div>

                {/* frequency and recurrent */}
                <RecurrentForm
                  recurrent={form.recurrent}
                  frequency={form.frequency}
                  onRecurrentChange={(v) => updateField("recurrent", v)}
                  onFrequencyChange={(v) => updateField("frequency", v)}
                />

                {/* receipt URL */}
                <div className="w-full px-4 lg:w-6/12">
                  <div className="relative mb-3 w-full">
                    <label className="mb-2 block text-xs font-bold uppercase">
                      Receipt URL
                    </label>
                    <input
                      type="url"
                      value={form.receipt_url}
                      placeholder="https://example.com/receipt"
                      className="w-full rounded border-0 bg-white px-3 py-3 text-sm shadow"
                    />
                  </div>
                </div>
              </div>

              {/* paid checkbox */}
              <div className="w-full px-4 lg:w-6/12">
                <div className="relative mb-3 w-full">
                  <div className="flex items-center space-x-2">
                    <input
                      id="payment-paid"
                      type="checkbox"
                      checked={form.paid}
                      onChange={(e) => updateField("paid", e.target.checked)}
                      className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring focus:ring-blue-200"
                    />
                    <label
                      htmlFor="payment-paid"
                      className="text-xs font-bold uppercase"
                    >
                      Paid
                    </label>
                  </div>
                </div>
              </div>

              <hr className="mt-6 mb-6 border-b" />
              <div className="mt-6 flex justify-center gap-4 px-4">
                <button type="submit" className="primary-btn text-lg">
                  Update Payment
                </button>
                <a
                  href="/payments"
                  className="rounded bg-gray-500 px-6 py-2 text-lg font-bold text-white hover:bg-gray-700"
                >
                  {" "}
                  Cancel{" "}
                </a>
              </div>

              {status.type === "error" && (
                <StatusMessageComponent message={status.message} type="error" />
              )}
              {status.type === "success" && (
                <StatusMessageComponent
                  message={status.message}
                  type="sucess"
                />
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
