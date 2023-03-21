export default class Team {
  constructor() {
    this.hero = [
      {
        name: 'Лучник',
        type: 'Bowman',
        health: 50,
        level: 1,
        attack: 25,
        defence: 25,
      },
      {
        name: 'Фехтовальщик',
        type: 'Swordsman',
        health: 50,
        level: 1,
        attack: 40,
        defence: 10,
      },
      {
        name: 'Нежить',
        type: 'Undead',
        health: 50,
        level: 1,
        attack: 10,
        defence: 40,
      },
      {
        name: 'Магистр',
        type: 'Magician',
        health: 50,
        level: 1,
        attack: 25,
        defence: 25,
      },
    ];
  }

  * [Symbol.iterator]() {
    /* eslint-disable */ for (let i = 0; i < this.hero.length; i++) {
      yield this.hero[i];
    }
  }
}
