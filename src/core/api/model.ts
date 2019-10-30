export interface GenerationMixResponse {
    data: GenerationMixRange;
}

export interface GenerationMixRange {
    from: string;
    to: string;
    generationmix: GenerationMix[];
}

export interface GenerationMix {
    fuel: string;
    perc: number;
}
