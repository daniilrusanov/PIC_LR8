export interface IUnit {
  health: number;
  damage: number;

  perform(): string;
  compose(): string;
  takeDamage(damage: number): string;
  specialAbility(): string;
  heal(): string;
}
