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
  static load(data) {
    return read(data)
      .then((data) => {
        return json(data);
      })
      .then((parsedData) => {
        console.log(JSON.parse(parsedData));
        return new GameSaving(JSON.parse(parsedData));
      });
  }
}

// const data = '{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}';
// GameSavingLoader.load(data).then((saving) => {
//   console.log(saving)
// }, (error) => {
//   console.error("Произошла ошибка:", error)
// });

export { GameSaving, GameSavingLoader }
