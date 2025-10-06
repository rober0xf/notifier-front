<template>
  <section class="py-1">
    <div class="mx-auto mt-6 w-full px-4 lg:w-8/12">
      <div class="relative mb-6 flex w-full min-w-0 flex-col rounded-lg border-0 break-words shadow-lg">
        <div class="mb-0 rounded-t bg-white px-6 py-6">
          <div class="justify-between text-center">
            <h6 class="text-center text-2xl font-bold">Update Payment</h6>
          </div>
        </div>

        <div class="flex-auto px-4 py-10 pt-0 lg:px-10">
          <form @submit.prevent="updatePayment">
            <h6 class="mt-3 mb-6 text-sm font-bold uppercase">Necessary information</h6>
            <div class="flex flex-wrap">
              <!-- name -->
              <div class="w-full px-4 lg:w-6/12">
                <div class="relative mb-3 w-full">
                  <label for="payment-name" class="mb-2 block text-xs font-bold uppercase">Name</label>
                  <input id="payment-name" type="text" v-model="name" disabled class="w-full rounded border-0 bg-white px-3 py-3 text-sm shadow" />
                </div>
              </div>

              <!-- amount -->
              <div class="w-full px-4 lg:w-6/12">
                <div class="relative mb-3 w-full">
                  <label for="payment-amount" class="mb-2 block text-xs font-bold uppercase">Amount</label>
                  <input
                    id="payment-amount"
                    type="number"
                    step="1"
                    v-model="amount"
                    required
                    class="w-full rounded border-0 bg-white px-3 py-3 text-sm shadow"
                  />
                </div>
              </div>

              <!-- type -->
              <div class="w-full px-4 lg:w-6/12">
                <div class="relative mb-3 w-full">
                  <label for="payment-type" class="mb-2 block text-xs font-bold uppercase">Payment Type</label>
                  <select id="payment-type" v-model="type" required class="w-full rounded border-0 bg-white px-3 py-3 text-sm shadow">
                    <option value="">-- Select type --</option>
                    <option value="expense">Expense</option>
                    <option value="income">Income</option>
                    <option value="subscription">Subscription</option>
                  </select>
                </div>
              </div>

              <!-- category -->
              <div class="w-full px-4 lg:w-6/12">
                <div class="relative mb-3 w-full">
                  <label for="payment-category" class="mb-2 block text-xs font-bold uppercase">Payment Category</label>
                  <select id="payment-category" v-model="category" required class="w-full rounded border-0 bg-white px-3 py-3 text-sm shadow">
                    <option value="">-- Select category --</option>
                    <option value="electronics">Electronics</option>
                    <option value="entertainment">Entertainment</option>
                    <option value="education">Education</option>
                    <option value="clothing">Clothing</option>
                    <option value="work">Work</option>
                    <option value="sports">Sports</option>
                  </select>
                </div>
              </div>
            </div>

            <!-- date -->
            <div class="w-full px-4 lg:w-6/12">
              <div class="relative mb-3 w-full">
                <label for="payment-date" class="mb-2 block text-xs font-bold uppercase">Date</label>
                <input id="payment-date" type="date" v-model="date" disabled class="w-full rounded border-0 bg-white px-3 py-3 text-sm shadow" />
              </div>
            </div>

            <hr class="mt-6 border-b-1" />
            <h6 class="mt-3 mb-6 text-sm font-bold uppercase">Optional information</h6>
            <div class="flex flex-wrap">
              <!-- due date -->
              <div class="w-full px-4 lg:w-6/12">
                <div class="relative mb-3 w-full">
                  <label for="payment-due-date" class="mb-2 block text-xs font-bold uppercase">Due Date</label>
                  <input
                    id="payment-due-date"
                    type="date"
                    v-model="due_date"
                    disabled
                    class="w-full rounded border-0 bg-white px-3 py-3 text-sm shadow"
                  />
                </div>
              </div>

              <!-- paid at -->
              <div class="w-full px-4 lg:w-6/12">
                <div class="relative mb-3 w-full">
                  <label for="payment-paid-at" class="mb-2 block text-xs font-bold uppercase">Paid At</label>
                  <input
                    id="payment-paid-at"
                    type="date"
                    v-model="paid_at"
                    disabled
                    class="w-full rounded border-0 bg-white px-3 py-3 text-sm shadow"
                  />
                </div>
              </div>

              <!-- frequency -->
              <div class="w-full px-4 lg:w-6/12">
                <div class="relative mb-3 w-full">
                  <label for="payment-frequency" class="mb-2 block text-xs font-bold uppercase">Frequency</label>
                  <select id="payment-frequency" v-model="frequency" class="w-full rounded border-0 bg-white px-3 py-3 text-sm shadow">
                    <option value="">-- None --</option>
                    <option value="daily">Daily</option>
                    <option value="weekly">Weekly</option>
                    <option value="monthly">Monthly</option>
                    <option value="yearly">Yearly</option>
                  </select>
                </div>
              </div>

              <!-- receipt URL -->
              <div class="w-full px-4 lg:w-6/12">
                <div class="relative mb-3 w-full">
                  <label for="payment-receipt-url" class="mb-2 block text-xs font-bold uppercase">Receipt URL</label>
                  <input
                    id="payment-receipt-url"
                    type="url"
                    v-model="receipt_url"
                    placeholder="https://example.com/receipt"
                    class="w-full rounded border-0 bg-white px-3 py-3 text-sm shadow"
                  />
                </div>
              </div>
            </div>

            <!-- paid checkbox -->
            <div class="w-full px-4 lg:w-6/12">
              <div class="relative mb-3 w-full">
                <div class="flex items-center space-x-2">
                  <input
                    id="payment-paid"
                    type="checkbox"
                    v-model="paid"
                    class="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring focus:ring-blue-200"
                  />
                  <label for="payment-paid" class="text-xs font-bold uppercase">Paid</label>
                </div>
              </div>
            </div>

            <!-- recurrent checkbox -->
            <div class="w-full px-4 lg:w-6/12">
              <div class="relative mb-3 w-full">
                <div class="flex items-center space-x-2">
                  <input
                    id="payment-recurrent"
                    type="checkbox"
                    v-model="recurrent"
                    class="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring focus:ring-blue-200"
                  />
                  <label for="payment-recurrent" class="text-xs font-bold uppercase">Recurrent</label>
                </div>
              </div>
            </div>

            <hr class="mt-6 mb-6 border-b-1" />
            <div class="mt-6 flex justify-center gap-4 px-4">
              <button type="submit" class="primary-btn text-lg">Update Payment</button>
              <a href="/payments" class="rounded bg-gray-500 px-6 py-2 text-lg font-bold text-white hover:bg-gray-700"> Cancel </a>
            </div>

            <!-- status message -->
            <div
              v-if="statusMessage"
              class="mt-4 text-center text-sm font-bold select-none"
              :class="statusMessage.includes('Error') ? 'text-red-500' : 'text-green-500'"
            >
              {{ statusMessage }}
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const props = defineProps<{
  payment: {
    id: number;
    name: string;
    amount: number;
    type: string;
    category: string;
    date: string;
    due_date?: string | null;
    paid: boolean;
    paid_at?: string | null;
    recurrent: boolean;
    frequency?: string | null;
    receipt_url?: string | null;
  } | null;
}>();

const name = ref('');
const amount = ref(0);
const type = ref('');
const category = ref('');
const date = ref('');
const due_date = ref('');
const paid = ref(false);
const paid_at = ref('');
const recurrent = ref(false);
const frequency = ref('');
const receipt_url = ref('');

const originalValues = ref<any>({});

const statusMessage = ref('');

const formatDateForInput = (dateStr: string | null | undefined) => {
  if (!dateStr) return '';
  if (dateStr.match(/^\d{4}-\d{2}-\d{2}$/)) {
    return dateStr;
  }
  const date = new Date(dateStr);
  if (isNaN(date.getTime())) return '';
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

watch(
  () => props.payment,
  (newPayment) => {
    if (newPayment) {
      name.value = newPayment.name || '';
      amount.value = newPayment.amount || 0;
      type.value = newPayment.type || '';
      category.value = newPayment.category || '';
      date.value = formatDateForInput(newPayment.date);
      due_date.value = formatDateForInput(newPayment.due_date);
      paid.value = newPayment.paid || false;
      paid_at.value = formatDateForInput(newPayment.paid_at);
      recurrent.value = newPayment.recurrent || false;
      frequency.value = newPayment.frequency || '';
      receipt_url.value = newPayment.receipt_url || '';

      originalValues.value = {
        name: name.value,
        amount: amount.value,
        type: type.value,
        category: category.value,
        date: date.value,
        due_date: due_date.value,
        paid: paid.value,
        paid_at: paid_at.value,
        recurrent: recurrent.value,
        frequency: frequency.value,
        receipt_url: receipt_url.value,
      };
    }
  },
  { immediate: true },
);

const updatePayment = async () => {
  if (!props.payment) return;

  try {
    statusMessage.value = '';

    // only the changed fields
    const payload: any = {};

    if (amount.value !== originalValues.value.amount) {
      payload.amount = amount.value;
    }
    if (type.value !== originalValues.value.type) {
      payload.type = type.value;
    }
    if (category.value !== originalValues.value.category) {
      payload.category = category.value;
    }
    if (paid.value !== originalValues.value.paid) {
      payload.paid = paid.value;
    }
    if (recurrent.value !== originalValues.value.recurrent) {
      payload.recurrent = recurrent.value;
    }
    if (frequency.value !== originalValues.value.frequency) {
      payload.frequency = frequency.value || null;
    }
    if (receipt_url.value !== originalValues.value.receipt_url) {
      payload.receipt_url = receipt_url.value || null;
    }

    if (Object.keys(payload).length === 0) {
      statusMessage.value = 'no changes detected';
      return;
    }

    const response = await fetch(`http://localhost:3000/v1/auth/payments/${props.payment.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.detail || 'Failed to update payment');
    }

    statusMessage.value = 'payment updated!';

    setTimeout(() => {
      router.push('/dashboard');
    }, 1500);
  } catch (error: unknown) {
    if (error instanceof Error) {
      statusMessage.value = `Error: ${error.message}`;
      console.error('Update error:', error);
    } else {
      statusMessage.value = 'Unknown error occurred';
    }
  }
};
</script>
