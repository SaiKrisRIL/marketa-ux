import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'dev.lovable.marketa73dd7b9632a947e88886411b3150eb2a',
  appName: 'marketa-ux',
  webDir: 'dist',
  server: {
    url: 'https://73dd7b96-32a9-47e8-8886-411b3150eb2a.lovableproject.com?forceHideBadge=true',
    cleartext: true
  },
  ios: {
    contentInset: 'automatic'
  },
  android: {
    backgroundColor: '#ffffff'
  }
};

export default config;