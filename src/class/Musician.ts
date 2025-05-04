import { IUnit } from './IUnit';

export class Musician implements IUnit {
  health: number;
  damage: number;
  instrument: string;

  constructor(health: number, damage: number, instrument: string) {
    this.health = health;
    this.damage = damage;
    this.instrument = instrument;
  }

  perform(): string {
    return `Musician plays a solo on the ${this.instrument}.`;
  }

  compose(): string {
    return 'Musician writes a complex musical arrangement.';
  }

  takeDamage(damage: number): string {
    this.health -= damage <= this.health ? this.health - damage : 0;
    return `Musician took ${damage} damage, health is now ${this.health}.`;
  }

  specialAbility(): string {
    return `Musician performs a legendary solo on the ${this.instrument}!`;
  }

  heal(): string {
    this.health += 10;
    return `Musician healed, health is now ${this.health}.`;
  }
}
