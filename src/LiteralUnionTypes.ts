type PositionType = 'Programmer' | 'HR' | 'Owner';

// implementation
function getSalaryBasedPosition(position: PositionType): number {
    if (position === 'Programmer') {
        return 100_000;
    }
    if (position === 'HR') {
        return 120_000;
    }

    return 50_000;
}
