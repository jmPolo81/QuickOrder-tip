/* eslint-disable react/prop-types */

const tipOptions = [
  { id: "tip-10", value: 0.1, label: "10%" },
  { id: "tip-20", value: 0.2, label: "20%" },
  { id: "tip-50", value: 0.5, label: "50%" },
];

export default function TipPercentageForm({ setTip, tip }) {
  return (
    <div>
      <h3 className="font-black text-3xl">Propina:</h3>
      <form>
        {tipOptions.map((tipOption) => (
          <div key={tipOption.id} className="flex gap-2">
            <label className="text-xl font-black text-gray-500" htmlFor={tipOption.id}>
              {tipOption.label}
            </label>
            <input
              id={tipOption.id}
              type="radio"
              name="tip"
              value={tipOption.value}
              onChange={(e) => setTip(+e.target.value)}
              checked={tipOption.value === tip}
            />
          </div>
        ))}
      </form>
    </div>
  );
}


