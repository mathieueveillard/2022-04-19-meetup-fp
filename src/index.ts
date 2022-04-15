const isMultipleOf = (m: number, n: number): boolean => n % m === 0;

export const replace = (n: number): string => {
  const appendFizzIfNIsMultipleOf3 = (s: string): string => {
    if (isMultipleOf(3, n)) {
      return s + "Fizz";
    }
    return s;
  };

  const appendBuzzIfNIsMultipleOf5 = (s: string): string => {
    if (isMultipleOf(5, n)) {
      return s + "Buzz";
    }
    return s;
  };

  const appendNOtherwise = (s: string): string => {
    return s || n.toString();
  };

  const step0 = "";
  const step1 = appendFizzIfNIsMultipleOf3(step0);
  const step2 = appendBuzzIfNIsMultipleOf5(step1);
  const step3 = appendNOtherwise(step2);
  return step3;
};

export const fizzBuzz = (n: number): string[] => {
  return [...Array(n)].map((_, i) => i + 1).map(replace);
};
