import { InjectionToken } from '@angular/core';

export interface AssistantConfig {
  enabled: boolean;
  route: string;
  label: string;
}

export interface VoiceConfig {
  type: 'homme' | 'femme' | 'robot';
  lang: string;
  rate?: number;
  pitch?: number;
}

export interface AppConfig {
  apiBaseUrl: string;
  assistants: Record<string, AssistantConfig>;
  defaultAssistant: string;
  voice: VoiceConfig;
}

// Ton objet de config
export const APP_CONFIG_VALUE: AppConfig = {
  apiBaseUrl: 'http://127.0.0.1:8000/api',
  assistants: {
    caveavin:   { enabled: true,  route: 'caveavin',   label: 'Cave à vin' },
    bourse:     { enabled: false, route: 'bourse',     label: 'Bourse' },
    jardin:     { enabled: false, route: 'jardin',     label: 'Jardin' },
    diabetetype2:{enabled: false, route: 'diabete',    label: 'Diabète' },
    travaux:    { enabled: false, route: 'travaux',    label: 'Travaux' }
  },
  defaultAssistant: 'caveavin',
  voice: { type: 'homme', lang: 'fr-FR', rate: 1.0, pitch: 1.0 }
};

// Le token d’injection
export const APP_CONFIG = new InjectionToken<AppConfig>('app.config');
