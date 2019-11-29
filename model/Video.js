class Video {
  constructor(file, title) {
    this._file = file;
    this._title = title;
  }

  get file() {
    return this._file;
  }

  get title() {
    return this._title;
  }

  static createFromFile(file) {
    return new Video(file, file);
  }

  get url() {
    return require('~/assets/videos/' + this._file);
  }

  set title(value) {
    this._title = value;
  }
}

export {Video as default}
