import React from 'react';
import { render, screen,waitFor ,fireEvent } from '@testing-library/react';
import Results from './Components/Results';
import Form from './Components/Form';
import App from './App';
test('displays loading text when loading is true', () => {
    render(<Results loading={false} />);
    const loadingText = screen.getByText("loading...");
    // console.log(loadingText);
    expect(loadingText.textContent).toBe("loading...");
});
test('displays loading text when loading is true', async () => {
    render(<Form />);
    const personName = await waitFor(()=> screen.getByTestId('GET'));
    console.log(personName)
    expect(personName.type).toBe('radio')
});


test('Form updates method when method is clicked', () => {
    render(<Form />);
  
    fireEvent.click(screen.getByText(/POST/i));
  
    expect(screen.getByText(/POST/i)).toBeTruthy()
  });
  test('displays loading text when loading is true', () => {
    render(<App />);
    const loadingText = screen.getByText("Request Method:");
    console.log(loadingText);
    expect(loadingText.textContent).toBe("Request Method:  ");
});
