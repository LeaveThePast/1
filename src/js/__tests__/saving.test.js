import { GameSaving, GameSavingLoader } from "../saving";

describe('GameSavingLoader', () => {
  it('should load a GameSaving object', async () => {
    const saving = await GameSavingLoader.load();
    expect(saving).toBeInstanceOf(GameSaving);
  });

  it('should have correct properties in GameSaving object', async () => {
    const correctSaving = {"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}
    const saving = await GameSavingLoader.load();
    expect(saving).toEqual(correctSaving);
  });
});
