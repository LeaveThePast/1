import { GameSaving, GameSavingLoader } from "../saving";

describe('GameSavingLoader', () => {
  it('should load a GameSaving object', async () => {
    const saving = await GameSavingLoader.load();
    expect(saving).toBeInstanceOf(GameSaving);
  });

  it('should have correct properties in GameSaving object', async () => {
    const saving = await GameSavingLoader.load();
    expect(saving.id).toEqual(9);
    expect(saving.created).toEqual(1546300800);
    expect(saving.userInfo).toEqual({
      id: 1,
      name: 'Hitman',
      level: 10,
      points: 2000
    });
  });
});
