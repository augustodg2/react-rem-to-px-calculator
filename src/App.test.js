import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import App from './App';

describe('render-test', () => {
  describe('root-fs input', () => {
    it('renders root-fs input', () => {
      const { getByTestId} = render(<App />);
      const rootFSInput = getByTestId('root-fs-input');

      expect(rootFSInput).toBeInTheDocument();
    });
    it('default value equals to "14"', () => {
      const { getByTestId} = render(<App />);
      const remInput = getByTestId('root-fs-input');

      expect(remInput.value).toBe("14");
    });
  })

  describe('rem input', () => {
    it('renders rem input', () => {
      const { getByTestId } = render(<App />);
      const remInput = getByTestId('rem-input');
    
      expect(remInput).toBeInTheDocument();
    });
    it('default value equals to "1"', () => {
      const { getByTestId} = render(<App />);
      const remInput = getByTestId('rem-input');

      expect(remInput.value).toBe("1");
    })
  });

  describe('px input', () => {
    it('renders px input', () => {
      const { getByTestId } = render(<App />);
      const pxInput = getByTestId('px-input');
    
      expect(pxInput).toBeInTheDocument();
    });
    it('default value equals to root-fs value', () => {
      const { getByTestId} = render(<App />);
      const remInput = getByTestId('px-input');
      const rootFSInput = getByTestId('root-fs-input');

      expect(remInput.value).toBe(rootFSInput.value);
    });
  });
})

describe('calculation-test', () => {
  it('calculates px value when type on root-fs', async () => {
    const { getByTestId } = render(<App />);
    const rootFSInput = getByTestId('root-fs-input');
    const remInput = getByTestId('rem-input');
    const pxInput = getByTestId('px-input');
    
    await userEvent.type(remInput, `${ Math.random() * Math.random() * 1000 }`);

    expect(pxInput.value).toBe(`${ parseFloat(remInput.value) * parseFloat(rootFSInput.value)  }`);
  });
  it('calculates rem value when type on px', async () => {
    const { getByTestId } = render(<App />);
    const rootFSInput = getByTestId('root-fs-input');
    const remInput = getByTestId('rem-input');
    const pxInput = getByTestId('px-input');

    await userEvent.type(pxInput, `${ Math.random() * Math.random() * 1000 }`);

    expect(pxInput.value).toBe(`${ parseFloat(remInput.value) * parseFloat(rootFSInput.value)  }`);
  });
})
