const isMultipleOf = (m: number, n: number): boolean => n % m === 0;

export const replace = (n: number): string => {
  const appendFizzIfNIsMultipleOf3 = (): void => {
    if (isMultipleOf(3, n)) {
      result += "Fizz";
    }
  };

  const appendBuzzIfNIsMultipleOf5 = (): void => {
    if (isMultipleOf(5, n)) {
      result += "Buzz";
    }
  };

  const appendNOtherwise = (): void => {
    result = result || n.toString();
  };

  let result = "";
  appendFizzIfNIsMultipleOf3();
  appendBuzzIfNIsMultipleOf5();
  appendNOtherwise();
  return result;
};

export const fizzBuzz = (n: number): string[] => {
  return [...Array(n)].map((_, i) => i + 1).map(replace);
};
