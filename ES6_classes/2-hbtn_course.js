export default class ALXCourse{
  constructor(name, length, students) {
    this._name = name;
    this._length = length;
    this._students = students;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    if (typeof value !== 'string') throw new TypeError('Name must be a string');
    this._name = value;
  }

  get length() {
    return this._name;
  }

  set length(value) {
    if (typeof value !== 'number') throw new TypeError('length must be a number');
    this._length = value;
  }

  get students() {
    return this._students;
  }

  set students(value) {
    if (!Array.isArray(value)) throw new TypeError('Students must be an array');
    this._stusents = value;
  }
}
