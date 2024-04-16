export default function generateRandomNumbers(arrayLength, numToGenerate) {
  return Array.from({ length: numToGenerate }, () =>
    Math.floor(Math.random() * arrayLength),
  );
}
