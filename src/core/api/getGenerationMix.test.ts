import { getGenerationMix } from './getGenerationMix';

describe('getGenerationMix()', () => {
    it('should return the mocked data', (done) => {
        getGenerationMix().then(data => {
            expect(data).toMatchSnapshot();
            done();
        });
    });
});
