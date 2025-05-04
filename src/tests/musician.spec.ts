import {Musician} from "../class/Musician";

describe('Musician', () => {
  let musician: Musician;

  beforeEach(() => {
    musician = new Musician(10, 5, 'Guitar');
  })

  fit('should create a musician with the correct properties', () => {
    expect(musician).toBeDefined();
  })

  fit('should deal 5 points of damage', () => {
    musician.takeDamage(5);
    let health = 5;
    expect(musician.health.toFixed(2)).toBe(health.toFixed(2));
  })

  fit('should deal 15 points of damage', () => {
    musician.takeDamage(15);
    let health = 0;
    expect(musician.health.toFixed(2)).toBe(health.toFixed(2));
  })

  fit('should play on a guitar', () => {
    let show = musician.perform();
    expect(show).toBe('Musician plays a solo on the Guitar');
  })

  fit('should write a musical arrangement.', () => {
    let compose = musician.compose();
    expect(compose).toBe('Musician writes a complex musical arrangement.');
  })

  fit('should have a special ability', () => {
    let ability = musician.specialAbility();
    expect(ability).toBe('Musician performs a legendary solo on the Guitar!');
  })

  fit('should heal himself', () => {
    let heal = musician.heal();
    let health = 20;
    expect(heal).toBe('Musician healed, health is now 20.');
    expect(musician.health.toFixed(2)).toBe(health.toFixed(2));
  })
})
