function swap(arr, i, j) {
  const tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
}

function merge(arr, left, middle, right) {
  const l1 = middle - left + 1;
  const l2 = right - middle;

  const lArr = new Array(l1);
  const rArr = new Array(l2);

  for (let i = 0; i < l1; i++) {
    lArr[i] = arr[left + i];
  }
  for (let i = 0; i < l2; i++) {
    rArr[i] = arr[middle + 1 + i];
  }

  let i = 0,
    j = 0,
    k = left;

  while (i < l1 && j < l2) {
    if (lArr[i] <= rArr[j]) {
      arr[k] = lArr[i];
      i++;
    } else {
      arr[k] = rArr[j];
      j++;
    }
    k++;
  }

  while (i < l1) {
    arr[k] = lArr[i];
    i++;
    k++;
  }

  while (j < l2) {
    arr[k] = rArr[j];
    j++;
    k++;
  }
}

export default function mergeSort(arr, left, right) {
  if (left >= right) {
    return;
  }
  const middle = left + parseInt((right - left) / 2);
  mergeSort(arr, left, middle);
  mergeSort(arr, middle + 1, right);
  merge(arr, left, middle, right);

  return arr;
}
