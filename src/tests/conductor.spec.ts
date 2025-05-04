import {Conductor} from "../class/Conductor";


describe('Conductor', () => {
  let conductor: Conductor;

  beforeEach(() => {
    conductor = new Conductor(10, 5, 12);
  })

  fit('should create a conductor with the correct properties', () => {
    expect(conductor).toBeTruthy();
  })

  fit('should deal 5 points of damage', () => {
    conductor.takeDamage(5);
    let health = 5;
    expect(conductor.health.toFixed(2)).toBe(health.toFixed(2));
  })

  fit('should deal 15 points of damage', () => {
    conductor.takeDamage(15);
    let health = 0;
    expect(conductor.health.toFixed(2)).toBe(health.toFixed(2));
  })

  fit('should perform a show', () => {
    let show = conductor.perform();
    expect(show).toBe('Conductor leads an orchestra of 12 musicians.');
  })

  fit('should compose a symphony', () => {
    let compose = conductor.compose();
    expect(compose).toBe('Conductor composes a grand symphony.');
  })

  fit('should have a special ability', () => {
    let ability = conductor.specialAbility();
    expect(ability).toBe('specialAbility');
  })

  fit('should heal himself', () => {
    let heal = conductor.heal();
    let health = 20;
    expect(heal).toBe('Conductor healed, health is now 20.');
    expect(conductor.health.toFixed(2)).toBe(health.toFixed(2));
  })
})
