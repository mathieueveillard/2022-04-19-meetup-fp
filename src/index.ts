type MappingFunction<U, V> = (u: U) => V;

const IdentityFunctor = <U>(value: U) => ({
  map: <V>(fn: MappingFunction<U, V>) => IdentityFunctor(fn(value)),
  get: () => value,
});

const isMultipleOf =
  (m: number) =>
  (n: number): boolean =>
    n % m === 0;

const appendSlugIfMultipleOf =
  (slug: string) =>
  (m: number) =>
  (n: number) =>
  (s: string): string => {
    if (isMultipleOf(m)(n)) {
      return s + slug;
    }
    return s;
  };

const appendFizzIfNIsMultipleOf3 = appendSlugIfMultipleOf("Fizz")(3);

const appendBuzzIfNIsMultipleOf5 = appendSlugIfMultipleOf("Buzz")(5);

const appendNOtherwise =
  (n: number) =>
  (s: string): string => {
    return s || n.toString();
  };

export const replace = (n: number): string => {
  return IdentityFunctor("")
    .map(appendFizzIfNIsMultipleOf3(n)) //
    .map(appendBuzzIfNIsMultipleOf5(n))
    .map(appendNOtherwise(n))
    .get();
};

export const fizzBuzz = (n: number): string[] => {
  return [...Array(n)].map((_, i) => i + 1).map(replace);
};
