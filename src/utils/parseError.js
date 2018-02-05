export default function(errors) {
  console.log(errors);
  const result = {};

  Object.entries(errors).forEach(entry => {
    const [key, value] = entry;
    result[key] = value.message;
  });

  return result;
}
