import {Singer} from "../class/Singer";

describe('Singer', () => {
  let singer: Singer;

  beforeEach(() => {
    singer = new Singer(10, 5, 'Enormous');
  })

  fit('should create a singer with the correct properties', () => {
    expect(singer).toBeTruthy();
  })

  fit('should deal 5 points of damage', () => {
    singer.takeDamage(5);
    let health = 5;
    expect(singer.health.toFixed(2)).toBe(health.toFixed(2));
  })

  fit('should deal 15 points of damage', () => {
    singer.takeDamage(15);
    let health = 0;
    expect(singer.health.toFixed(2)).toBe(health.toFixed(2));
  })

  fit('should performs the Enormous solo.', () => {
    let show = singer.perform();
    expect(show).toBe('Singer performs the Enormous solo.');
  })

  fit('should composes a ballad.', () => {
    let compose = singer.compose();
    expect(compose).toBe('Singer composes a heartfelt ballad.');
  })

  fit('should have a special ability', () => {
    let ability = singer.specialAbility();
    expect(ability).toBe('Singer unleashes a stunning high note!');
  })

  fit('should heal himself', () => {
    let heal = singer.heal();
    let health = 20;
    expect(heal).toBe('Singer healed, health is now 20.');
    expect(singer.health.toFixed(2)).toBe(health.toFixed(2));
  })
})
