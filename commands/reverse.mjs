/**
 * Command to reverse a string.
 *
 * Will probably be removed once more useful commands are introduced.
 */
export default function (params, { reply }) {
  const [param] = params;
  if (param) {
    reply(Array.from(param).reverse().join(""));
  }
}
