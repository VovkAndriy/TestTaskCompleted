function get(obj, path, defaultValue) {
  const properties = path.split(".");
  let value = obj;

  for (const prop of properties) {
    if (value && value.hasOwnProperty(prop)) {
      value = value[prop];
    } else {
      return defaultValue !== undefined ? defaultValue : undefined;
    }
  }

  return value !== undefined ? value : defaultValue;
}

const obj = {
  a: {
    b: {
      c: "d",
    },
    e: "f",
  },
};

console.log(get(obj, "a.b")); // { c: 'd' }
console.log(get(obj, "a.b.c")); // 'd'
console.log(get(obj, "a.e")); // 'f'
console.log(get(obj, "x.x.e")); // undefined
console.log(get(obj, "a.x.e", true)); // true
console.log(get(obj, "a.x.e", "My default value")); // 'My default value'
