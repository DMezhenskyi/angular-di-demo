// this is an interface which describes data
// that returns http://localhost:3000/resolveAppConfig
export interface AppConfig {
  pollingStrategy: 'default' | 'advanced';
  defaultInterval: number;
}

export interface State {
  title?: string;
}
