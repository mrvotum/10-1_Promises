import readGameSaving from './readGameSaving';

class GameSavingLoader {
  static load() {
    return readGameSaving()
      .catch((err) => {
        throw new Error(err);
      })
      .then(data => new GameSavingData(data))
      .then(data => data.json());
  }
}


export { GameSavingData, GameSavingLoader };
