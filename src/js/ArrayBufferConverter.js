export default class ArrayBufferConverter {
  load(buffer) {
    this.buffer = buffer;
  }

  toString() {
    const getBufferObj = new Uint16Array(this.buffer);
    return String.fromCharCode(...getBufferObj);
  }
}
