const isMultipleOf = (m: number, n: number): boolean => n % m === 0;

export const replace = (n: number): string => {
  const appendFizzIfNIsMultipleOf3 = (): string => {
    if (isMultipleOf(3, n)) {
      return result + "Fizz";
    }
    return result;
  };

  const appendBuzzIfNIsMultipleOf5 = (): string => {
    if (isMultipleOf(5, n)) {
      return result + "Buzz";
    }
    return result;
  };

  const appendNOtherwise = (): string => {
    return result || n.toString();
  };

  let result = "";
  result = appendFizzIfNIsMultipleOf3();
  result = appendBuzzIfNIsMultipleOf5();
  result = appendNOtherwise();
  return result;
};

export const fizzBuzz = (n: number): string[] => {
  return [...Array(n)].map((_, i) => i + 1).map(replace);
};
