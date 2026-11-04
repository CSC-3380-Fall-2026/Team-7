import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('Globetrotter Smoke Test', () => {
  it('renders the Globetrotter application successfully', () => {
    render(<App />);

    expect(
      screen.getByRole('heading', { name: 'Globetrotter' })
    ).toBeInTheDocument();
  });
});
