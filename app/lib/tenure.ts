
function getLabel(inputNum: number, label: string): string {
    return `${inputNum} ${label}${inputNum > 1 ? 's': ''}`;
}

function formatTenure(years: number, months: number): string {
    return `${years > 0 ? getLabel(years, 'year'): ''} ${months > 0 ? getLabel(months, 'month'): ''}`
  }
  
export function getRoleTenure(startDate: string, endDate: string|null): string {
    const endDateMs = endDate ? new Date(endDate).getTime() : Date.now();
    const startDateMs = new Date(startDate).getTime()
    const tenure = endDateMs - startDateMs

    const totalTenureDays = tenure / (24 * 60 * 60 * 1000);
    const totalTenureMonths = Math.floor((totalTenureDays % 365) / 30.436875 );
    const totalTenureYears = Math.floor((totalTenureDays / 365));

    return formatTenure(totalTenureYears, totalTenureMonths);
}
