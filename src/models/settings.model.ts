export type DataSource = 'LocalStorage' | 'SessionStorage' | 'Firebase';
export type Theme = 'Light' | 'Dark' | 'Nord' | 'Matrix';

export interface SettingsModel {
    dataSource: DataSource;
    theme: Theme;
    jiraToken: string;
    easyHourToken: string;
}