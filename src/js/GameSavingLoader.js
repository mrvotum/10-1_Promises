import readGameSaving from './readGameSaving';
import GameSavingData from './GameSavingData';

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


export default GameSavingLoader;
