const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
const totalBatteries = batteryBatches.reduce(function(accumulator, batch) {
  console.log("Accumulator:", accumulator);
  console.log("Battery value:", batch.battery);
  return accumulator + batch.battery;
}, 0);
