import React, { useEffect, useState } from 'react';
import { Card } from '../components/Card/Card';
import { getGenerationMix } from '../core/api/getGenerationMix';
import { PieChart } from '../components/PieChart/PieChart';
import { Typography } from '@material-ui/core';
import { GenerationMix, GenerationMixRange } from '../core/api/model';
import moment from 'moment';
import { SeriesItem } from '../components/PieChart/model';

const formatDate = (date: string) => moment(date).format('YYYY-MM-DD');

const normaliseChartData = (data: GenerationMix[]): SeriesItem[] => data.map(({ fuel, perc }) => ({
    id: fuel,
    label: fuel,
    value: perc
}));

export const EnergyMixes = () => {
    const [generationMix, setGenerationMix] = useState<GenerationMixRange>({} as GenerationMixRange);

    useEffect(() => {
        getGenerationMix().then(data => {
            setGenerationMix(data);
        });
    }, [getGenerationMix]);

    return (
        <Card>
            <Typography variant='h5'>
                Energy Generation Mix for
                Period: {formatDate(generationMix.from)} - {formatDate(generationMix.to)}</Typography>
            <PieChart data={normaliseChartData(generationMix.generationmix || [])} />
        </Card>
    );
};
