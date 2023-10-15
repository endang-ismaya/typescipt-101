// interfaces: contract between code components

interface HrManager {
    getAllSalaries(): string[];
}

interface ScrumMaster {
    holdScrumMeeting(): void;
}

class SwissArmyKnife implements HrManager, ScrumMaster {
    getAllSalaries(): string[] {
        throw new Error('Method not implemented.');
    }
    holdScrumMeeting(): void {
        throw new Error('Method not implemented.');
    }
}
