import StringsModule from './strings';
const { getStringByLanguage } = StringsModule;

const strings  = {
  en: { submit: 'submit' },
  emoji: { submit: '🚀' },
  mermish: { },
}
describe('Language string testing', () => {
  
  const mockWarn = jest.fn();
  let originalWarn;

  beforeEach(() => {
    originalWarn = console.warn;
    console.warn = mockWarn;
  });

  afterEach(() => {
    console.warn = originalWarn;
  });

  it('returns the correct submit string for english', () => {
    const string = getStringByLanguage('en', 'submit', strings);
    expect(string).toBe('submit');
    expect(mockWarn).not.toHaveBeenCalled();
  });

  it('returns the correct submit string for emoji', () => {
    const string = getStringByLanguage('emoji', 'submit', strings);
    expect(string).toBe('🚀');
    expect(mockWarn).not.toHaveBeenCalled();
  });

  it('returns english submit string when language does not exist', () => {
    const string = getStringByLanguage('notALanguage', 'submit', strings);
    expect(string).toBe('submit');
    expect(mockWarn).toHaveBeenCalledWith(`Could not get string for [submit]`);
  });

  it('returns english submit string when submit key does not exist for the language', () => {
    const string = getStringByLanguage('mermish', 'submit', strings);
    expect(string).toBe('submit');
    expect(mockWarn).toHaveBeenCalledWith(`Could not get string for [submit]`);
  });
});

it('something else', () => {
  console.warn('to check if it is not affected by the mocked console - this should get printed');
});
