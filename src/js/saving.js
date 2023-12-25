import read from "./reader";
import json from "./parser";

class GameSaving {
  constructor(data) {
    this.id = data.id;
    this.created = data.created;
    this.userInfo = data.userInfo;
  }
}

export default class GameSavingLoader {
  static load() {
    return read()
      .then((data) => {
        return json(data);
      })
      .then((parsedData) => {
        console.log(JSON.parse(parsedData));
        return new GameSaving(JSON.parse(parsedData));
      });
  }
}


// GameSavingLoader.load().then((saving) => {
//   console.log(saving)
// }, (error) => {
//   console.error("Произошла ошибка:", error)
// });

export { GameSaving, GameSavingLoader }
