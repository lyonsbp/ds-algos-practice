function swap(arr, i, j) {
  const tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
}
// 0 1 [1, 10, 9, 2, 7, 3, 8, 4, 6, 5]
// 1 3 [2, 10, 9, 1, 7, 3, 8, 4, 6, 5]
// 1 3 [2, 10, 9, 1, 7, 3, 8, 4, 6, 5]
// 2 5 [2, 3, 9, 1, 7, 10, 8, 4, 6, 5]
// 2 5 [2, 3, 9, 1, 7, 10, 8, 4, 6, 5]
// 3 7 [2, 3, 4, 1, 7, 10, 8, 9, 6, 5]
// 3 7 [2, 3, 4, 1, 7, 10, 8, 9, 6, 5]
// 3 7 [2, 3, 4, 1, 5, 10, 8, 9, 6, 7]

function partition(arr, low, high) {
  // Grab pivot element
  const pivot = arr[high];

  // i keeps track of where the pivot will go
  let i = low - 1;

  // Can ignore last element since thats our pivot
  for (let j = low; j <= high - 1; j++) {
    if (arr[j] < pivot) {
      i++;
      swap(arr, i, j);
    }
  }

  // Swap pivot element to its correct position (i+1)
  swap(arr, i + 1, high);
  return i + 1;
}

export default function quickSort(arr, low, high) {
  // If only arr is provided, default low and high values
  if (arguments.length === 1) {
    low = 0;
    high = arr.length - 1;
  }
  if (low < high) {
    const pi = partition(arr, low, high);

    quickSort(arr, low, pi - 1);
    quickSort(arr, pi + 1, high);
  }

  return arr;
}
