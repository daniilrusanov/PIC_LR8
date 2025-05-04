import { IUnit } from './IUnit';

export class Singer implements IUnit {
  health: number;
  damage: number;
  vocalRange: string;

  constructor(health: number, damage: number, vocalRange: string) {
    this.health = health;
    this.damage = damage;
    this.vocalRange = vocalRange;
  }

  perform(): string {
    return `Singer performs the ${this.vocalRange} solo.`;
  }

  compose(): string {
    return 'Singer composes a heartfelt ballad.';
  }

  takeDamage(damage: number): string {
    this.health = damage <= this.health ? this.health - damage : 0;
    return `Singer took ${damage} damage, health is now ${this.health}.`;
  }

  specialAbility(): string {
    return 'Singer unleashes a stunning high note!';
  }

  heal(): string {
    this.health += 10;
    return `Singer healed, health is now ${this.health}.`;
  }
}
