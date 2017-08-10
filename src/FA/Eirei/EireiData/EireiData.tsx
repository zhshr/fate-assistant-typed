export class baseData {
  name : string;
  attributes : Array<string>;
  skills: Array<Skill>;

  addSkill(name: string, cooldown: number) {
    let newSkill:Skill = new Skill();
    newSkill.name = name;
    newSkill.cooldown = cooldown;
    newSkill.last_invoke = 5;
    this.skills.push(newSkill);
  }
}

export class Skill {
  name: string;
  cooldown : number;
  last_invoke : number;

  constructor() {
    this.invoke = this.invoke.bind(this);
  }

  invoke() {
    this.last_invoke = 0;
  }
}
