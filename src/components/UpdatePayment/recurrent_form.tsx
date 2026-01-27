import type { Frequency } from "../../types";

interface Props {
  recurrent: boolean;
  frequency: Frequency | "";
  onRecurrentChange: (value: boolean) => void;
  onFrequencyChange: (value: Frequency | "") => void;
}

export const RecurrentForm = ({
  recurrent,
  frequency,
  onRecurrentChange,
  onFrequencyChange,
}: Props) => {
  return (
    <>
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={recurrent}
          onChange={(e) => onRecurrentChange(e.target.checked)}
        />
        <span className="text-xs font-bold uppercase">Recurrent</span>
      </div>

      {recurrent && (
        <select
          value={frequency ?? ""}
          onChange={(e) => onFrequencyChange(e.target.value as Frequency | "")}
          className="mt-2 w-full rounded px-3 py-3 text-sm shadow"
        >
          <option value="">-- Select frequency --</option>
          <option value="daily">Daily</option>
          <option value="weekly">Weekly</option>
          <option value="monthly">Monthly</option>
          <option value="yearly">Yearly</option>
        </select>
      )}
    </>
  );
};
