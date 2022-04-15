const compose =
  (...fns) =>
  (x) =>
    fns.reduce((y, fn) => fn(y), x);

const isMultipleOf =
  (m: number) =>
  (n: number): boolean =>
    n % m === 0;

const appendFizzIfNIsMultipleOf3 =
  (n: number) =>
  (s: string): string => {
    if (isMultipleOf(3)(n)) {
      return s + "Fizz";
    }
    return s;
  };

const appendBuzzIfNIsMultipleOf5 =
  (n: number) =>
  (s: string): string => {
    if (isMultipleOf(5)(n)) {
      return s + "Buzz";
    }
    return s;
  };

const appendNOtherwise =
  (n: number) =>
  (s: string): string => {
    return s || n.toString();
  };

export const replace = (n: number): string => {
  return compose(
    appendFizzIfNIsMultipleOf3(n), //
    appendBuzzIfNIsMultipleOf5(n),
    appendNOtherwise(n)
  )("");
};

export const fizzBuzz = (n: number): string[] => {
  return [...Array(n)].map((_, i) => i + 1).map(replace);
};
