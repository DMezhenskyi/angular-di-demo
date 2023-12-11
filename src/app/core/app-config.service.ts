import { Injectable } from '@angular/core';
import { AppConfig } from '../models';

@Injectable({
  providedIn: 'root',
})
export class AppConfigService {
  #config!: AppConfig;

  setConfig(config: AppConfig) {
    this.#config = config;
  }
  getConfig(): AppConfig {
    return this.#config;
  }
}
