import React, { useState } from "react";

export const TemperatureCalculator = () => {
  const [celsius, setCelsius] = useState("");
  const [fahrenheit, setFahrenheit] = useState("");

  const handleCelsiusChange = (e) => {
    const value = e.target.value;
    setCelsius(value);
    setFahrenheit(value !== "" ? (value * 9) / 5 + 32 : "");
  };

  const handleFahrenheitChange = (e) => {
    const value = e.target.value;
    setFahrenheit(value);
    setCelsius(value !== "" ? ((value - 32) * 5) / 9 : "");
  };

  const resetFields = () => {
    setCelsius("");
    setFahrenheit("");
  };

  return (
    <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md max-w-sm mx-auto">
      <h1 className="text-xl font-bold mb-4 text-center text-gray-800 dark:text-gray-200">
        Temperature Converter
      </h1>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          Celsius
        </label>
        <input
          type="number"
          value={celsius}
          onChange={handleCelsiusChange}
          placeholder="Enter Celsius"
          className="w-full px-3 py-2 border rounded-md dark:bg-gray-700 dark:text-gray-200"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          Fahrenheit
        </label>
        <input
          type="number"
          value={fahrenheit}
          onChange={handleFahrenheitChange}
          placeholder="Enter Fahrenheit"
          className="w-full px-3 py-2 border rounded-md dark:bg-gray-700 dark:text-gray-200"
        />
      </div>
      <button
        onClick={resetFields}
        className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200"
      >
        Reset
      </button>
    </div>
  );
};
