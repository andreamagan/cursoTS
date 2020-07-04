class Config {
  private url: string = "";
  private database: string = "";
  private static config: Config;

  private constructor (url: string, database: string) {
    this.url = url;
    this.database = database;
  }

  public static getConfig(url: string, database: string) {
    if (this.config === null) {
      this.config = new Config(url, database);
    }
    return this.config;
  }

  public getUrl(): string {
    return this.url;
  }

  public setUrl(url: string): void {
    this.url = url;
  } 

  public getDatabase(): string {
    return this.database;
  }

  public setDatabase(database: string): void {
    this.database = database;
  } 
}