type StatusType = "success" | "error";

interface Props {
  message: string | null;
  type?: StatusType;
}

export const StatusMessageComponent = ({ message, type }: Props) => {
  if (!message) return null;

  return (
    <p
      className={`mt-4 text-center text-sm font-bold select-none ${
        type === "error" ? "text-red-500" : "text-green-500"
      }`}
    >
      {message}
    </p>
  );
};
