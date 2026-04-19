let myDate = new Date();
console.log("Full date string:", myDate.toString());
console.log("ISO string:", myDate.toISOString());
console.log("Locale date:", myDate.toLocaleDateString());
console.log("Date only:", myDate.toDateString());
console.log("Type:", typeof myDate);

let myTimestamp = Date.now();
console.log("Timestamp (ms):", myTimestamp);
console.log("Timestamp (s):", Math.floor(myTimestamp / 1000));

// how to calculate exact time
console.log("Day of month:", myDate.getDate());
console.log("Day of week:", myDate.getDay());
console.log("Year:", myDate.getFullYear());
console.log("Month index (0=Jan):", myDate.getMonth());



