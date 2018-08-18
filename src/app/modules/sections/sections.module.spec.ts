import { SectionsModule } from './sections.module';

describe('SectionsModule', () => {
  let sectionsModule: SectionsModule;

  beforeEach(() => {
    sectionsModule = new SectionsModule();
  });

  it('should create an instance', () => {
    expect(sectionsModule).toBeTruthy();
  });
});
