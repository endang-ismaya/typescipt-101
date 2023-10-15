enum PositionStaff {
    Programmer = 'Programmer',
    HR = 'HR',
    CEO = 'CEO',
    Manager = 'Manager',
}

type Employee = {
    name: string;
    salary: number;
    position: PositionStaff;
};

function payAnnualBonus(empl: Employee) {
    let bonusPercent: number = 0;

    const position = empl.position;
    switch (position) {
        case PositionStaff.Programmer:
            bonusPercent = 0.2;
            break;

        case PositionStaff.HR:
            bonusPercent = 0.8;
            break;

        case PositionStaff.CEO:
            bonusPercent = 200;
            break;

        default:
            // exhaustive enum:
            // with never we can see if position Manager
            // need to be added in the case list
            const remainingValues: never = position;
            break;
    }
    console.log(
        `Paying ${empl.salary * bonusPercent} as bonus to ${empl.name}`
    );
}
