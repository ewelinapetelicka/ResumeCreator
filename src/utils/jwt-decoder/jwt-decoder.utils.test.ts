import { describe, expect, it } from 'vitest';
import { JwtDecoderUtils } from './jwt-decoder.utils.ts';

describe('JwtDecoderUtils', () => {
  it('should decode token', () => {
    expect(
      JwtDecoderUtils.decode(
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IlRlc3QiLCJpYXQiOjE1MTYyMzkwMjJ9.r2tIfSQyjfh-s0S3IXibZ5ftEeqK7_KfkXPuPBkfFm8',
      ),
    ).toEqual({
      iat: 1516239022,
      name: 'Test',
      sub: '1234567890',
    });
  });
});
