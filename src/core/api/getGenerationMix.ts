import { GenerationMixRange, GenerationMixResponse } from './model';

const mockedData: GenerationMixResponse = {
    'data': {
        'from': '2019-08-12T12:30Z',
        'to': '2019-08-12T13:00Z',
        'generationmix': [
            {
                'fuel': 'biomass',
                'perc': 4.8
            },
            {
                'fuel': 'coal',
                'perc': 2.5
            },
            {
                'fuel': 'imports',
                'perc': 8.7
            },
            {
                'fuel': 'gas',
                'perc': 46.5
            },
            {
                'fuel': 'nuclear',
                'perc': 16.1
            },
            {
                'fuel': 'other',
                'perc': 0.3
            },
            {
                'fuel': 'hydro',
                'perc': 0.9
            },
            {
                'fuel': 'solar',
                'perc': 14.6
            },
            {
                'fuel': 'wind',
                'perc': 5.6
            }
        ]
    }
};

export const getGenerationMix = (): Promise<GenerationMixRange> => {
    return new Promise(function (resolve) {
        setTimeout(
            () => {
                resolve(mockedData.data);
            }, 300);
    });
};
