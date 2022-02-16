export default function getIdea(arr, container) {
  container.textContent = arr[Math.floor(Math.random() * arr.length)];
}
