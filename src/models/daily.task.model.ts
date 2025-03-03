export type CheckMap = {
    [piattaforma: string]: boolean;
};

export interface DailyTask {
    giorno: Date;
    task: string;
    epica: string;
    initiative: string;
    ore: number;
    check: CheckMap;
}