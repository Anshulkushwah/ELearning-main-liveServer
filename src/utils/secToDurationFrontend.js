function convertSecondsToDuration(totalSeconds) {
    if (isNaN(totalSeconds) || totalSeconds < 0) {
      return "0s"; // Handling invalid input
    }
  
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
  
    if (hours > 0) {
      return `${hours}h ${minutes}m`;
    } else if (minutes > 0) {
      return `${minutes}m ${seconds}s`;
    } else {
      return `${seconds}s`;
    }
  }
  
  export default convertSecondsToDuration;
  