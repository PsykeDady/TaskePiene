export type Piattaforma = "WD" | "Jira" | "EH";

export type CheckMap = {
    [piattaforma in Piattaforma]?: boolean;
};

export const emptyDailyTask: DailyTask = {
    giorno: new Date(),
    task: "",
    epica: "",
    initiative: "",
    ore: 0,
    check: {
        WD: false,
        Jira: false,
        EH: false
    }
};

export interface DailyTask {
    giorno: Date;
    task: string;
    epica: string;
    initiative: string;
    ore: number;
    check: CheckMap;
}