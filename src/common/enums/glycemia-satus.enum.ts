export enum GlycemiaStatus {
    HYPOGLYCEMIA = 'Hypoglycemia',
    NORMAL = 'Normal',
    HYPERGLYCEMIA = 'Hyperglycemia'
}

export function classifyGlycemia(glycemia: number): GlycemiaStatus {
    if (glycemia < 70) {
        return GlycemiaStatus.HYPOGLYCEMIA;
    } else if (glycemia >= 70 && glycemia <= 179) {
        return GlycemiaStatus.NORMAL;
    } else {
        return GlycemiaStatus.HYPERGLYCEMIA;
    }
}
