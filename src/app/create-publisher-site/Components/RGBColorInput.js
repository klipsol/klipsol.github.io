export const RGBColorInput = ({ label, value, onChange }) => {
  const updateColor = (index, newValue) => {
    const colorValues = value.split(" ");
    const newColorValues = [...colorValues];
    newColorValues[index] = Math.min(255, Math.max(0, parseInt(newValue) || 0));
    onChange(newColorValues.join(" "));
  };

  const colorValues = value.split(" ").map(Number);

  return (
    <div className="space-y-2">
      <label className="text-sm font-medium text-gray-700">{label} Color</label>
      <div className="flex space-x-2">
        {["R", "G", "B"].map((channel, index) => (
          <div key={channel} className="flex-1">
            <label className="block text-xs text-gray-600 mb-1">
              {channel}
            </label>
            <input
              type="number"
              value={colorValues[index]}
              onChange={(e) => {
                updateColor(index, e.target.value);
              }}
              min="0"
              max="255"
              //   ref={inputref}
              className="w-full px-2 py-1 border border-gray-300 text-black rounded-md text-center"
            />
          </div>
        ))}
        <div>
          <label className="block text-xs text-gray-600 mb-1">Preview</label>
          <div
            className="w-16 h-10 rounded-md border"
            style={{ backgroundColor: `rgb(${colorValues.join(",")})` }}
          />
        </div>
      </div>
    </div>
  );
};
