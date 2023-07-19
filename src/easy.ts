/** Pick
 * > Implement the built-in Pick<T, K> generic without using it.
 * > Constructs a type by picking the set of properties K from T
 */
export type MyPick<T, K extends keyof T> = {
  [key in K]: T[key];
};

/** Readonly
 * > Implement the built-in Readonly<T> generic without using it.
 * > Constructs a type with all properties of T set to readonly, meaning the properties of the constructed type cannot be reassigned.
 */
export type MyReadonly<T> = {
  readonly [key in keyof T]: T[key];
};

/** Tuple to Object
 * > Give an array, transform into an object type and the key/value must in the given array.
 */
export type TupleToObject<T extends readonly any[]> = {
  [i in T[number]]: i;
};

/**
 * First of Array
 * > Implement a generic First<T> that takes an Array T and returns it's first element's type.
 */
export type First<T extends any[]> = T extends [infer K, ...infer P]
  ? K
  : never;

/** Length of Tuple
 * > For given a tuple, you need create a generic Length, pick the length of the tuple
 */
export type Length<T> = T extends any[] ? T["length"] : never;

/** Exclude
 * > Implement the built-in Exclude<T, U>
 * > Exclude from T those types that are assignable to U
 */
export type MyExclude<T, U> = T extends U ? never : T;

/** Awaited
 * > If we have a type which is wrapped type like Promise. How we can get a type which is inside the wrapped type?
 */
export type MyAwaited<T> = T extends Promise<infer U>
  ? U extends Promise<any>
    ? MyAwaited<U>
    : U
  : T;

/** If
 * > Implement a utils If which accepts condition C, a truthy return type T, and a falsy return type F. C is expected to be either true or false while T and F can be any type.
 */
export type If<C extends boolean, T, F> = T extends true ? T : F;

/** Concat
 * > Implement the JavaScript Array.concat function in the type system. A type takes the two arguments. The output should be a new array that includes inputs in ltr order
 */
export type Concat<A extends any[], B extends any[]> = [...A, ...B];

// 这里只有X、Y相同时，两个箭头函数才能相同，所以返回true
export type IsEqual<X, Y> = (<T>() => T extends X ? 1 : 2) extends <
  T
>() => T extends Y ? 1 : 2
  ? true
  : false;
/** Includes
 * > Implement the JavaScript Array.includes function in the type system. A type takes the two arguments. The output should be a boolean true or false.
 */
export type Includes<T extends readonly unknown[], U> = T extends [
  infer First,
  ...infer Rest
] // 这里是为了限制至少有一个元素
  ? IsEqual<First, U> extends true
    ? true
    : Includes<Rest, U>
  : false;

/** Push
 * > Implement the generic version of Array.push
 */
export type Push<T extends any[], U> = [...T, U];

/** Unshift
 * > Implement the type version of Array.unshift
 */
export type Unshift<T extends any[], U> = [U, ...T];

/** Parameters
 * > Implement the built-in Parameters generic without using it.
 */
export type MyParameters<T> = T extends (...P: infer S) => any ? S : never;
