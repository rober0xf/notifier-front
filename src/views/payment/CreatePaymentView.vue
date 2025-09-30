<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const name = ref('')
const amount = ref(0)
const type = ref('')
const category = ref('')
const date = ref('')

const due_date = ref(null)
const paid = ref(null)
const paid_at = ref(null)
const recurrent = ref(null)
const frequency = ref(null)
const receipt_url = ref(null)
const statusMessage = ref('')

const createPayment = async () => {
  try {
    const response = await fetch('http://localhost:3000/v1/auth/payments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
      credentials: 'include',
      body: JSON.stringify({
        name: name.value,
        amount: Number(amount.value),
        type: type.value,
        category: category.value,
        date: date.value,
        due_date: due_date.value || null,
        paid: paid.value,
        paid_at: paid.value ? paid_at.value || null : null,
        recurrent: recurrent.value,
        frequency: frequency.value || null,
        receipt_url: receipt_url.value || null,
      }),
    })
    if (response.ok) {
      const res = await response.json()
      statusMessage.value = 'Payment created successfully'
      console.log(res)
      router.push('/dashboard')
    } else {
      console.log('aca?')
      console.error(await response.text())
    }
  } catch (error) {
    console.log(error)
  }
}
</script>

<template>
  <section class="py-1">
    <div class="mx-auto mt-6 w-full px-4 lg:w-8/12">
      <div class="relative mb-6 flex w-full min-w-0 flex-col rounded-lg border-0 break-words shadow-lg">
        <div class="mb-0 rounded-t bg-white px-6 py-6">
          <div class="justify-between text-center">
            <h6 class="text-center text-2xl font-bold">Register Payment</h6>
          </div>
        </div>
        <div class="flex-auto px-4 py-10 pt-0 lg:px-10">
          <form @submit.prevent="createPayment">
            <h6 class="mt-3 mb-6 text-sm font-bold uppercase">Nececessary information</h6>
            <div class="flex flex-wrap">
              <!-- name -->
              <div class="w-full px-4 lg:w-6/12">
                <div class="relative mb-3 w-full">
                  <label for="payment-name" class="mb-2 block text-xs font-bold uppercase">Name</label>
                  <input
                    id="payment-name"
                    type="text"
                    v-model="name"
                    required
                    minlength="3"
                    maxlength="100"
                    class="w-full rounded border-0 bg-white px-3 py-3 text-sm shadow"
                  />
                </div>
              </div>
              <!-- end name -->

              <!-- amount -->
              <div class="w-full px-4 lg:w-6/12">
                <div class="relative mb-3 w-full">
                  <label for="payment-amount" class="mb-2 block text-xs font-bold uppercase">Amount</label>
                  <input
                    id="payment-amount"
                    type="number"
                    v-model="amount"
                    required
                    class="w-full rounded border-0 bg-white px-3 py-3 text-sm shadow"
                  />
                </div>
              </div>
              <!-- end amount -->

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
              <!-- end type -->

              <!-- category -->
              <div class="w-full px-4 lg:w-6/12">
                <div class="relative mb-3 w-full">
                  <label for="payment-category" class="mb-2 block text-xs font-bold uppercase"> Payment Category </label>
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
            <!-- end category -->

            <!-- date -->
            <div class="w-full px-4 lg:w-6/12">
              <div class="relative mb-3 w-full">
                <label for="payment-date" class="mb-2 block text-xs font-bold uppercase">Date</label>
                <input id="payment-date" type="date" v-model="date" class="w-full rounded border-0 bg-white px-3 py-3 text-sm shadow" />
              </div>
            </div>
            <!-- end date -->

            <hr class="mt-6 border-b-1" />
            <h6 class="mt-3 mb-6 text-sm font-bold uppercase">Optional information</h6>
            <div class="flex flex-wrap">
              <!-- due date -->
              <div class="w-full px-4 lg:w-6/12">
                <div class="relative mb-3 w-full">
                  <label for="payment-due-date" class="mb-2 block text-xs font-bold uppercase">Due Date</label>
                  <input id="payment-due-date" type="date" v-model="due_date" class="w-full rounded border-0 bg-white px-3 py-3 text-sm shadow" />
                </div>
              </div>
              <!-- end due date -->

              <!-- paid at -->
              <div class="w-full px-4 lg:w-6/12">
                <div class="relative mb-3 w-full">
                  <label for="payment-paid-at" class="mb-2 block text-xs font-bold uppercase">Paid At</label>
                  <input id="payment-paid-at" type="date" v-model="paid_at" class="w-full rounded border-0 bg-white px-3 py-3 text-sm shadow" />
                </div>
              </div>
              <!-- end paid at -->

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
              <!-- end frequency -->

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
            <!-- end receipt URL -->

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
            <!-- end paid checkbox -->

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
            <!-- end recurrent -->

            <hr class="mt-6 mb-6 border-b-1" />
            <div class="mt-6 flex justify-center px-4">
              <button type="submit" class="primary-btn text-lg">Create Payment</button>
            </div>

            <div v-if="statusMessage" class="mt-4 px-4">
              <div class="rounded border border-green-400 bg-green-100 px-4 py-3 text-green-700">
                {{ statusMessage }}
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
