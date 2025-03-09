export type Piattaforma = "WD" | "Jira" | "EH";

export type CheckMap = {
    [piattaforma in Piattaforma]?: boolean;
};

export interface DailyTask {
    giorno: Date;
    task: string;
    epica: string;
    initiative: string;
    ore: number;
    check: CheckMap;
}