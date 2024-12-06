import { ref } from 'vue';
import { useRouter } from 'vue-router';

export function useLogin() {
    const identity = ref('');
    const password = ref('');
    const errorMessage = ref('');
    const router = useRouter();

    const login = async () => {
        try {
            const response = await fetch('localhost:8080/login', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    identity: identity.value,
                    password: password.value
                })
            });
            if (response.ok) {
                const res = await response.json();
                localStorage.setItem('token', res.data);
                router.push('/dashboard');
            } else {
                errorMessage.value = 'Invalid credentials';
            }
        } catch (error) {
            errorMessage.value = 'An error occurred';
        }
    }

    return {
        identity,
        password,
        errorMessage,
        login
    }
}