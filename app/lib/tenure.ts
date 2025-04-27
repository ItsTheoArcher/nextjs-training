
function getLabel(inputNum: number, label: string): string {
    return `${inputNum} ${label}${inputNum > 1 ? 's': ''}`;
}

function formatTenure(years: number, months: number): string {
    return `${years > 0 ? getLabel(years, 'year'): ''} ${months > 0 ? getLabel(months, 'month'): ''}`
  }
  
export function getRoleTenure(startDate: string, endDate: string|null): string {
    const endDateMs = endDate ? new Date(endDate) : new Date();
    const startDateMs = new Date(startDate);
    const months = (endDateMs.getFullYear() - startDateMs.getFullYear()) * 12 + (endDateMs.getMonth() - startDateMs.getMonth());
    const years = Math.floor(months / 12);
    const remainingMonths = months % 12;

    return formatTenure(years, remainingMonths);
}
