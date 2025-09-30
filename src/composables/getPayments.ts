import Payment from '@/composables/payment';
import { ref } from 'vue';

export function usePayments() {
  const listPayments = ref<Payment[]>([]);

  const listPaymentsFetch = async () => {
    try {
      if (typeof window !== 'undefined') {
        const email = localStorage.getItem('email');
        const token = localStorage.getItem('token');

        if (!email) {
          console.error('email not found in local storage');
          return;
        }

        const url = `http://localhost:3000/v1/auth/payments/email?email=${encodeURIComponent(email)}`;
        const response = await fetch(url, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.ok) {
          const res = await response.json();
          listPayments.value = res;
        } else {
          console.error('Error fetching payments:', await response.text());
        }
      }
    } catch (error) {
      console.error('Error fetching payments:', error);
    }
  };
  return {
    listPayments,
    listPaymentsFetch,
  };
}

// const deletePayment = async (id: number) => {
//   try {
//     const response = await fetch(`/api/payments/${id}`, {
//       method: 'DELETE',
//       headers: {
//         'Content-Type': 'application/json',
//         Authorization: `Bearer ${localStorage.getItem('token')}`,
//       },
//     })
//     if (response.ok) {
//       console.log('Payment deleted:', id)
//       listPaymentFetch()
//     } else {
//       console.error('Error deleting payment:', await response.text())
//     }
//   } catch (error) {
//     console.error('Error deleting payment:', error)
//   }
// }

// onMounted(() => {
//   listPaymentFetch()
//   console.log('ListPayments mounted')
//   deletePayment(1)
//   console.log('Payment deleted:', 1)
// })
