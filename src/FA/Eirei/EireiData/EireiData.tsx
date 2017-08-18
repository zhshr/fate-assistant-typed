export class BaseData {
  name: string;
  attributes: Array<string>;
  skills: Array<Skill>;

  addSkill(name: string, cooldown: number) {
    let newSkill: Skill = new Skill();
    newSkill.name = name;
    newSkill.cooldown = cooldown;
    newSkill.lastInvoke = 5;
    this.skills.push(newSkill);
  }
}

export class Skill {
  name: string;
  cooldown: number;
  lastInvoke: number;

  constructor() {
    this.invoke = this.invoke.bind(this);
  }

  invoke() {
    this.lastInvoke = 0;
  }
}
