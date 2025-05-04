import { IUnit } from './IUnit';

export class Conductor implements IUnit {
  health: number;
  damage: number;
  orchestraSize: number;

  constructor(health: number, damage: number, orchestraSize: number) {
    this.health = health;
    this.damage = damage;
    this.orchestraSize = orchestraSize;
  }

  perform(): string {
    return `Conductor leads an orchestra of ${this.orchestraSize} musicians.`;
  }

  compose(): string {
    return 'Conductor composes a grand symphony.';
  }

  takeDamage(damage: number): string {
    this.health = damage <= this.health ? this.health - damage : 0;
    return `Conductor took ${damage} damage, health is now ${this.health}.`;
  }

  specialAbility(): string {
    return 'Conductor boosts the entire orchestra’s performance!';
  }

  heal(): string {
    this.health += 10;
    return `Conductor healed, health is now ${this.health}.`;
  }
}
