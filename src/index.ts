const isMultipleOf = (m: number, n: number): boolean => n % m === 0;

export const replace = (n: number): string => {
  let result = "";

  if (isMultipleOf(3, n)) {
    result += "Fizz";
  }

  if (isMultipleOf(5, n)) {
    result += "Buzz";
  }

  return result || n.toString();
};

export const fizzBuzz = (n: number): string[] => {
  return [...Array(n)].map((_, i) => i + 1).map(replace);
};
