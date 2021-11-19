type N = number
export const scale:N|unknown= (num:N, inMin:N, inMax:N, outMin:N, outMax:N) =>  (num - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
// scale(20, 0, 100, 0, 200)  //10
