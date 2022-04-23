Array.prototype.countElems = function(callback) {
  let counter = 0;
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i])) {
      counter++;
    }
  }
  return counter;
}
