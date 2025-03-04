class Singleton {
  private static _instance: Singleton | null = null;

  // can't be instantiated
  private constructor() {}

  public static get instance(): Singleton {
    if (this._instance === null) {
      this._instance = new Singleton();
    }

    return this._instance;
  }
}

export function main() {
  const instance1 = Singleton.instance;
  const instance2 = Singleton.instance;

  console.log(instance1);
  console.log(instance2);
  console.log(instance1 === instance2); // true
}
