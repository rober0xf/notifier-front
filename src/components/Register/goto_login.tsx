export const GotoLoginComponent = () => {
  return (
    <p className="mt-10 text-sm font-medium text-gray-300">
      Already have an account?{" "}
      <a
        href="/login"
        className="text-sm font-semibold text-blue-600 hover:underline"
      >
        Login
      </a>
    </p>
  );
};
