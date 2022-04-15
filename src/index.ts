const isMultipleOf = (m: number, n: number): boolean => n % m === 0;

const appendFizzIfNIsMultipleOf3 = (n: number, s: string): string => {
  if (isMultipleOf(3, n)) {
    return s + "Fizz";
  }
  return s;
};

const appendBuzzIfNIsMultipleOf5 = (n: number, s: string): string => {
  if (isMultipleOf(5, n)) {
    return s + "Buzz";
  }
  return s;
};

const appendNOtherwise = (n: number, s: string): string => {
  return s || n.toString();
};

export const replace = (n: number): string => {
  const step0 = "";
  const step1 = appendFizzIfNIsMultipleOf3(n, step0);
  const step2 = appendBuzzIfNIsMultipleOf5(n, step1);
  const step3 = appendNOtherwise(n, step2);
  return step3;
};

export const fizzBuzz = (n: number): string[] => {
  return [...Array(n)].map((_, i) => i + 1).map(replace);
};
