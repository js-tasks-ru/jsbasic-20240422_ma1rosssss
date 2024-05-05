function camelize(str) {
  return str.replace(/-([a-z])/g, (match, offset) => {
    return offset.toUpperCase();
  });
}
