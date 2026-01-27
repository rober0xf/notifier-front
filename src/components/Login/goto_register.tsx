export const GotoRegisterComponent = () => {
  return (
    <p className="mt-4 text-sm font-medium text-gray-700">
      Not a user?
      <a href="/register" className="font-medium text-blue-600 hover:underline">
        {" "}
        Create an account{" "}
      </a>
    </p>
  );
};
