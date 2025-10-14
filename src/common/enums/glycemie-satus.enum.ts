export enum GlycemieStatus {
    HYPOGLYCEMIA = 'Hypoglycemia',
    NORMAL = 'Normal',
    HYPERGLYCEMIA = 'Hyperglycemia'
}

export function classifyGlycemie(glycemie: number): GlycemieStatus {
    if (glycemie < 70) {
        return GlycemieStatus.HYPOGLYCEMIA;
    } else if (glycemie >= 70 && glycemie <= 179) {
        return GlycemieStatus.NORMAL;
    } else {
        return GlycemieStatus.HYPERGLYCEMIA;
    }
}
