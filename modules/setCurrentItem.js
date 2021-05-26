function setCurrentItem(elem, arr, className) {
  arr.forEach((item) => {
    elem == item
      ? item.classList.add(className)
      : item.classList.remove(className);
  });
}

export default setCurrentItem;
