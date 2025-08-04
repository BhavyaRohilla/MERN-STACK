"use strict";

function analyzeWorkWeek(dailyHour) {
  const daysOfWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  if (!Array.isArray(dailyHour) || dailyHour.length !== 7)
    throw new Error("Input must be an array of exactly 7 daily work hours.");

  const totalHour = dailyHour.reduce((sum, hours) => sum + hours, 0);

  const averageHours = Math.round((totalHour / dailyHour.length) * 10) / 10;

  const maxHours = Math.max(...dailyHour);
  const maxDayIndex = dailyHour.indexOf(maxHours);
  const maxDay = daysOfWeek[maxDayIndex];

  const daysWorked = dailyHour.filter((hour) => hour > 0).length;

  const isFullTime = totalHour >= 35;

  return {
    totalHour,
    averageHours,
    maxDay, // The name of the day with the most hours
    daysWorked,
    isFullTime,
  };
}

// ✅ First valid input
try {
  const weeklyHours = [7.5, 8, 6.5, 0, 8.5, 5, 0];
  const analysis = analyzeWorkWeek(weeklyHours);
  console.log("Valid Input:", analysis);
} catch (error) {
  console.error("Error for weeklyHours:", error.message);
}

// ❌ Second invalid input (length < 7)
try {
  const weeklyHours2 = [7.5, 8, 6.5, 0, 8.5]; // invalid
  const analysis2 = analyzeWorkWeek(weeklyHours2);
  console.log("Valid Input 2:", analysis2);
} catch (error) {
  console.error("Error for weeklyHours2:", error.message);
}
