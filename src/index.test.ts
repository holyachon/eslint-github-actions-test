import { greet } from './index';

describe('greet function', () => {
  it('should return greeting message with the given name', () => {
    const result = greet('John');
    expect(result).toBe('Hello, John!');
  });

  it('should handle empty string', () => {
    const result = greet('');
    expect(result).toBe('Hello, !');
  });

  it('should handle special characters', () => {
    const result = greet('John Doe!');
    expect(result).toBe('Hello, John Doe!!');
  });
}); 