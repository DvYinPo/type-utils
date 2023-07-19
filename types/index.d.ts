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
export type First<T extends any[]> = T extends [infer K, ...infer P] ? K : never;
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
export type MyAwaited<T> = T extends Promise<infer U> ? U extends Promise<any> ? MyAwaited<U> : U : T;
/** If
 * > Implement a utils If which accepts condition C, a truthy return type T, and a falsy return type F. C is expected to be either true or false while T and F can be any type.
 */
export type If<C extends boolean, T, F> = T extends true ? T : F;
/** Concat
 * > Implement the JavaScript Array.concat function in the type system. A type takes the two arguments. The output should be a new array that includes inputs in ltr order
 */
export type Concat<A extends any[], B extends any[]> = [...A, ...B];
export type IsEqual<X, Y> = (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y ? 1 : 2 ? true : false;
/** Includes
 * > Implement the JavaScript Array.includes function in the type system. A type takes the two arguments. The output should be a boolean true or false.
 */
export type Includes<T extends readonly unknown[], U> = T extends [
    infer First,
    ...infer Rest
] ? IsEqual<First, U> extends true ? true : Includes<Rest, U> : false;
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
/** Get Return Type
 * > Implement the built-in ReturnType<T> generic without using it.
 */
export type MyReturnType<T extends Function> = T extends (...args: any) => infer R ? R : never;
/** Omit
 * > Implement the built-in Omit<T, K> generic without using it.
 * > Constructs a type by picking all properties from T and then removing K
 */
export type MyOmit<T, K extends keyof T> = {
    [Key in keyof T as Key extends K ? never : Key]: T[Key];
};
/** Readonly 2
 * > Implement a generic MyReadonly2<T, K> which takes two type argument T and K.
 * > K specify the set of properties of T that should set to Readonly. When K is not provided, it should make all properties readonly just like the normal Readonly<T>.
 */
export type MyReadonly2<T, K extends keyof T = keyof T> = {
    [Key in keyof T as Key extends K ? never : Key]: T[Key];
} & {
    readonly [Key in keyof T as Key extends K ? Key : never]: T[Key];
};
/** Deep Readonly
 * > Implement a generic DeepReadonly<T> which make every parameter of an object - and its sub-objects recursively - readonly.
 * > You can assume that we are only dealing with Objects in this challenge. Arrays, Functions, Classes and so on do not need to be taken into consideration. However, you can still challenge yourself by covering as many different cases as possible.
 */
export type DeepReadonly<T> = keyof T extends never ? T : {
    readonly [Key in keyof T]: DeepReadonly<T[Key]>;
};
/** Tuple to Union
 * > Implement a generic TupleToUnion<T> which covers the values of a tuple to its values union.
 */
export type TupleToUnion<T extends any[]> = T[number];
/** Chainable Options
 * > Chainable options are commonly used in Javascript. But when we switch to TypeScript, can you properly type it?
 * > In this challenge, you need to type an object or a class - whatever you like - to provide two function option(key, value) and get(). In option, you can extend the current config type by the given key and value. We should about to access the final result via get.
 */
export type Chainable<T = {}> = {
    option<Key extends string, Value>(key: Key, value: Value): Chainable<Omit<T, Key> & Record<Key, Value>>;
    get(): T;
};
/** Last of Array
 * > Implement a generic Last<T> that takes an Array T and returns its last element.
 */
export type Last<T extends any[]> = T extends [...infer _, infer L] ? L : never;
/** Pop
 * > Implement a generic Pop<T> that takes an Array T and returns an Array without it's last element.
 */
export type Pop<T extends any[]> = T extends [...infer R, unknown] ? R : never;
/** Promise.all
 * > Type the function PromiseAll that accepts an array of PromiseLike objects, the returning value should be Promise<T> where T is the resolved result array.
 */
export declare function PromiseAll<T extends any[]>(values: readonly [...T]): Promise<{
    [K in keyof T]: T[K] extends Promise<infer R> ? R : T[K];
}>;
/** Type Lookup
 * > Sometimes, you may want to lookup for a type in a union to by their attributes.
 * > In this challenge, we would like to get the corresponding type by searching for the common type field in the union Cat | Dog. In other words, we will expect to get Dog for LookUp<Dog | Cat, 'dog'> and Cat for LookUp<Dog | Cat, 'cat'> in the following example.
 */
export type LookUp<U, T> = U extends {
    type: T;
} ? U : never;
/** Trim Left
 * > Implement TrimLeft<T> which takes an exact string type and returns a new string with the whitespace beginning removed.
 */
export type TrimLeft<T extends string> = T extends `${infer space}${infer K}` ? TrimLeft<K> : T;
/** Trim
 * > Implement Trim<T> which takes an exact string type and returns a new string with the whitespace from both ends removed.
 */
export type Trim<T extends string> = T extends `${infer space}${infer K}` | `${infer K}${infer space}` ? Trim<K> : T;
/** Capitalize
 * > Implement Capitalize<T> which converts the first letter of a string to uppercase and leave the rest as-is.
 */
export type MyCapitalize<S extends string> = S extends `${infer x}${infer tail}` ? `${Uppercase<x>}${tail}` : S;
/** Replace
 * > Implement Replace<S, From, To> which replace the string From with To once in the given string S
 */
export type Replace<S extends string, F extends string, T extends string> = F extends "" ? S : S extends `${infer L}${F}${infer R}` ? `${L}${T}${R}` : S;
/** ReplaceAll
 * > Implement ReplaceAll<S, From, To> which replace the all the substring From with To in the given string S
 */
export type ReplaceAll<S extends string, F extends string, T extends string> = F extends "" ? S : S extends `${infer L}${F}${infer R}` ? `${ReplaceAll<L, F, T>}${T}${ReplaceAll<R, F, T>}` : S;
/** Append Argument
 * > For given function type Fn, and any type A (any in this context means we don't restrict the type, and I don't have in mind any type 😉) create a generic type which will take Fn as the first argument, A as the second, and will produce function type G which will be the same as Fn but with appended argument A as a last one.
 */
export type AppendArgument<Fn, A> = Fn extends (...args: infer R) => infer T ? (...args: [...R, A]) => T : never;
/** Permutation
 * > Implement permutation type that transforms union types into the array that includes permutations of unions.
 */
export type Permutation<T> = never;
/** Length of String
 * > Compute the length of a string literal, which behaves like String#length.
 */
export type LengthOfString<S, K extends any[] = []> = S extends `${infer first}${infer rest}` ? LengthOfString<rest, [...K, first]> : K["length"];
/** Flatten
 * > In this challenge, you would need to write a type that takes an array and emitted the flatten array type.
 */
export type Flatten<T extends any[], Result extends any[] = []> = T extends [
    infer First,
    ...infer Rest
] ? First extends any[] ? Flatten<[...First, ...Rest], Result> : Flatten<[...Rest], [...Result, First]> : Result;
/** Append to object
 * > Implement a type that adds a new field to the interface. The type takes the three arguments. The output should be an object with the new field.
 */
export type AppendToObject<T, K extends keyof any, V> = {
    [Key in keyof T | K]: Key extends keyof T ? T[Key] : V;
};
/** Absolute
 * > Implement the Absolute type. A type that take string, number or bigint. The output should be a positive number string
 */
export type Absolute<T extends string | number | bigint> = `${T}` extends `-${infer N}` ? `${N}` : `${T}`;
/** String to Union
 * > Implement the String to Union type. Type take string argument. The output should be a union of input letters
 */
export type StringToUnion<T extends string, K = never> = T extends `${infer F}${infer R}` ? StringToUnion<R, F | K> : K;
/** Merge
 * > Merge two types into a new type. Keys of the second type overrides keys of the first type.
 */
export type Merge<F, S> = S & {
    [Key in keyof F | keyof S]: Key extends keyof S ? S[Key] : Key extends keyof F ? F[Key] : never;
};
/** KebabCase
 * > Replace the camelCase or PascalCase string with kebab-case. FooBarBaz -> foo-bar-baz
 */
export type KebabCase<S> = S extends `${infer F}${infer R}` ? R extends Uncapitalize<R> ? `${Uncapitalize<F>}${KebabCase<R>}` : `${Uncapitalize<F>}-${KebabCase<R>}` : S;
/** Diff
 * > Get an Object that is the difference between O & O1
 */
export type Diff<T, R> = {
    [Key in keyof (T & R) as Key extends keyof (T | R) ? never : Key]: Key extends keyof T ? T[Key] : Key extends keyof R ? R[Key] : never;
};
/** AnyOf
 * > Implement Python liked any function in the type system. A type takes the Array and returns true if any element of the Array is true. If the Array is empty, return false.
 */
export type Falsy = undefined | null | 0 | "" | false | [] | {
    [key: string]: never;
};
/** IsNever
 * > Implement a type IsNever, which takes input type T. If the type of resolves to never, return true, otherwise false.
 */
export type IsNever<T> = (() => T) extends () => never ? true : false;
/** IsUnion
 * > Implement a type IsUnion, which takes an input type T and returns whether T resolves to a union type.
 */
export type IsUnion<T, B = T> = T extends B ? [B] extends [T] ? false : true : never;
/** ReplaceKeys
 * > Implement a type ReplaceKeys, that replace keys in union types, if some type has not this key, just skip replacing, A type takes three arguments.
 */
export type ReplaceKeys<T, U, O> = T extends any ? {
    [Key in keyof T]: Key extends U ? Key extends keyof O ? O[Key] : never : T[Key];
} : never;
/** Remove Index Signature
 * > Implement RemoveIndexSignature<T> , exclude the index signature from object types.
 */
export type RemoveIndexSignature<T> = {
    [Key in keyof T as Key extends `${infer S}` ? S : never]: T[Key];
};
/** Percentage Parser
 * > Implement PercentageParser. According to the /^(\+|\-)?(\d\*)?(\%)?$/ regularity to match T and get three matches.
 * > The structure should be: [plus or minus, number, unit] If it is not captured, the default is an empty string.
 */
export type PercentageParser<T, Res extends any[] = ["", "", ""]> = T extends `${infer F}${infer R}` ? F extends "-" | "+" ? PercentageParser<R, [F, "", ""]> : T extends `${infer N}%` ? [Res[0], N, "%"] : [Res[0], T, ""] : Res;
/** Drop Char
 * > Drop a specified char from a string.
 */
export type DropChar<S, C extends string> = S extends `${infer L}${C}${infer R}` ? DropChar<`${L}${R}`, C> : S;
/** MinusOne
 * > Given a number (always positive) as a type. Your type should return the number decreased by one.
 */
export type MinusOne<T extends number, A extends any[] = []> = A["length"] extends T ? A extends [...infer F, any] ? F["length"] : never : MinusOne<T, [...A, 0]>;
/** PickByType
 * > From T, pick a set of properties whose type are assignable to U.
 */
export type PickByType<T, U> = {
    [Key in keyof T as T[Key] extends U ? Key : never]: U;
};
/** StartsWith
 * > Implement StartsWith<T, U> which takes two exact string types and returns whether T starts with U
 */
export type StartsWith<T, U extends string> = T extends `${U}${infer R}` ? true : false;
/** EndsWith
 * > Implement EndsWith<T, U> which takes two exact string types and returns whether T ends with U
 */
export type EndsWith<T, U extends string> = T extends `${infer F}${U}` ? true : false;
export type IntersectionToObj<T> = {
    [K in keyof T]: T[K];
};
/** PartialByKeys
 * > Implement a generic PartialByKeys<T, K> which takes two type argument T and K.
 * > K specify the set of properties of T that should set to be optional. When K is not provided, it should make all properties optional just like the normal Partial<T>.
 */
export type PartialByKeys<T, K = any> = IntersectionToObj<{
    [Key in keyof T as Key extends K ? Key : never]?: T[Key];
} & {
    [Key in keyof T as Key extends K ? never : Key]: T[Key];
}>;
/** RequiredByKeys
 * > Implement a generic RequiredByKeys<T, K> which takes two type argument T and K.
 * > K specify the set of properties of T that should set to be required. When K is not provided, it should make all properties required just like the normal Required<T>.
 */
export type RequiredByKeys<T, K extends keyof T = keyof T> = Omit<T & Required<Pick<T, K>>, never>;
/** Mutable
 * > Implement the generic Mutable<T> which makes all properties in T mutable (not readonly).
 */
export type Mutable<T> = {
    -readonly [Key in keyof T]: T[Key];
};
/** OmitByType
 * > From T, pick a set of properties whose type are not assignable to U.
 */
export type OmitByType<T, K> = {
    [Key in keyof T as T[Key] extends K ? never : Key]: T[Key];
};
/**
 * remove undefined
 */
export type RemoveUndefined<T> = [T] extends [undefined] ? T : Exclude<T, undefined>;
/** ObjectEntries
 * > Implement the type version of Object.entries
 */
export type ObjectEntries<T> = {
    [Key in keyof T]-?: [Key, RemoveUndefined<T[Key]>];
}[keyof T];
/** Shift
 * > Implement the type version of Array.shift
 */
export type Shift<T extends any[]> = T extends [any, ...infer Rest] ? Rest : T;
/** Tuple to Nested Object
 * > Given a tuple type T that only contains string type, and a type U, build an object recursively.
 */
export type TupleToNestedObject<T, U> = T extends [infer F, ...infer Rest] ? {
    [K in F & string]: TupleToNestedObject<Rest, U>;
} : U;
/** Reverse
 * > Implement the type version of Array.reverse
 */
export type Reverse<T extends any[], R extends any[] = []> = T extends [
    infer F,
    ...infer Rest
] ? Reverse<Rest, [F, ...R]> : R;
/** Flip Arguments
 * > Implement the type version of lodash's \_.flip.
 * > Type FlipArguments<T> requires function type T and returns a new function type which has the same return type of T but reversed parameters.
 */
export type FlipArguments<T> = T extends (...arg: infer U) => void ? (...arg: Reverse<U>) => void : never;
/** FlattenDepth
 * > Recursively flatten array up to depth times.
 */
export type FlattenDepth<U extends any[], T extends number = 1, A extends any[] = []> = A["length"] extends T ? U : U extends [infer F, ...infer Rest] ? F extends any[] ? [...FlattenDepth<F, T, [...A, never]>, ...FlattenDepth<Rest, T, A>] : [F, ...FlattenDepth<Rest, T, A>] : U;
/** BEM style string
 * > The Block, Element, Modifier methodology (BEM) is a popular naming convention for classes in CSS.
 * > For example, the block component would be represented as btn, element that depends upon the block would be represented as btn**price, modifier that changes the style of the block would be represented as btn--big or btn**price--warning.
 * > Implement BEM<B, E, M> which generate string union from these three parameters. Where B is a string literal, E and M are string arrays (can be empty).
 */
export type BEM<B extends string, E extends string[] = [], M extends string[] = []> = `${B}${E["length"] extends 0 ? "" : `__${E[number]}`}${M["length"] extends 0 ? "" : `--${M[number]}`}`;
interface TreeNode {
    left: TreeNode | null;
    right: TreeNode | null;
    val: any;
}
/** InorderTraversal
 * > Implement the type version of binary tree inorder traversal.
 */
export type InorderTraversal<T extends TreeNode | null, NT extends TreeNode = NonNullable<T>> = T extends TreeNode ? [
    ...InorderTraversal<NT["left"]>,
    NT["val"],
    ...InorderTraversal<NT["right"]>
] : [];
/** Flip
 * > Implement the type of just-flip-object. Examples:
 */
export type Flip<T extends Record<string, string | number | boolean>> = {
    [Key in keyof T as `${T[Key]}`]: Key;
};
export {};
