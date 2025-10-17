import React from 'react'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ContactForm } from '../ContactForm'
import { toast } from '../ui/use-toast'

// Mock the toast function
jest.mock('../ui/use-toast', () => ({
  toast: jest.fn(),
  useToast: () => ({
    toast: jest.fn(),
    toasts: [],
    dismiss: jest.fn(),
  }),
}))

// Mock fetch
global.fetch = jest.fn()

describe('ContactForm', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('renders all form fields correctly', () => {
    render(<ContactForm />)
    
    expect(screen.getByLabelText(/full name/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/role/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/company/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/phone/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/product of interest/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/message/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /send message/i })).toBeInTheDocument()
  })

  it('displays validation errors for required fields', async () => {
    render(<ContactForm />)
    
    const submitButton = screen.getByRole('button', { name: /send message/i })
    fireEvent.click(submitButton)
    
    await waitFor(() => {
      expect(screen.getByText(/name must be at least 2 characters/i)).toBeInTheDocument()
      expect(screen.getByText(/role is required/i)).toBeInTheDocument()
      expect(screen.getByText(/company name is required/i)).toBeInTheDocument()
      expect(screen.getByText(/please enter a valid email/i)).toBeInTheDocument()
      expect(screen.getByText(/message must be at least 10 characters/i)).toBeInTheDocument()
    })
  })

  it('validates email format', async () => {
    render(<ContactForm />)
    
    const emailInput = screen.getByLabelText(/email/i)
    await userEvent.type(emailInput, 'invalidemail')
    
    const submitButton = screen.getByRole('button', { name: /send message/i })
    fireEvent.click(submitButton)
    
    await waitFor(() => {
      expect(screen.getByText(/please enter a valid email/i)).toBeInTheDocument()
    })
  })

  it('submits form with valid data', async () => {
    const mockResponse = { message: 'Message sent successfully' }
    ;(global.fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => mockResponse,
    })
    
    render(<ContactForm />)
    
    // Fill in form fields
    await userEvent.type(screen.getByLabelText(/full name/i), 'John Doe')
    await userEvent.type(screen.getByLabelText(/role/i), 'CTO')
    await userEvent.type(screen.getByLabelText(/company/i), 'Test Company')
    await userEvent.type(screen.getByLabelText(/email/i), 'john@example.com')
    await userEvent.type(screen.getByLabelText(/phone/i), '+1234567890')
    await userEvent.type(screen.getByLabelText(/message/i), 'This is a test message for the contact form.')
    
    // Submit form
    const submitButton = screen.getByRole('button', { name: /send message/i })
    fireEvent.click(submitButton)
    
    await waitFor(() => {
      expect(global.fetch).toHaveBeenCalledWith('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: 'John Doe',
          role: 'CTO',
          company: 'Test Company',
          email: 'john@example.com',
          phone: '+1234567890',
          product: expect.any(String),
          message: 'This is a test message for the contact form.',
        }),
      })
    })
  })

  it('handles submission errors gracefully', async () => {
    const errorMessage = 'Server error'
    ;(global.fetch as jest.Mock).mockRejectedValueOnce(new Error(errorMessage))
    
    render(<ContactForm />)
    
    // Fill in form with valid data
    await userEvent.type(screen.getByLabelText(/full name/i), 'John Doe')
    await userEvent.type(screen.getByLabelText(/role/i), 'CTO')
    await userEvent.type(screen.getByLabelText(/company/i), 'Test Company')
    await userEvent.type(screen.getByLabelText(/email/i), 'john@example.com')
    await userEvent.type(screen.getByLabelText(/message/i), 'This is a test message for the contact form.')
    
    // Submit form
    const submitButton = screen.getByRole('button', { name: /send message/i })
    fireEvent.click(submitButton)
    
    await waitFor(() => {
      expect(toast).toHaveBeenCalledWith({
        title: 'Error sending message',
        description: expect.stringContaining('Please try again'),
        variant: 'destructive',
      })
    })
  })

  it('disables submit button while submitting', async () => {
    const mockResponse = { message: 'Message sent successfully' }
    ;(global.fetch as jest.Mock).mockImplementation(() => 
      new Promise(resolve => setTimeout(() => resolve({
        ok: true,
        json: async () => mockResponse,
      }), 100))
    )
    
    render(<ContactForm />)
    
    // Fill in minimum required fields
    await userEvent.type(screen.getByLabelText(/full name/i), 'John Doe')
    await userEvent.type(screen.getByLabelText(/role/i), 'CTO')
    await userEvent.type(screen.getByLabelText(/company/i), 'Test Company')
    await userEvent.type(screen.getByLabelText(/email/i), 'john@example.com')
    await userEvent.type(screen.getByLabelText(/message/i), 'This is a test message.')
    
    const submitButton = screen.getByRole('button', { name: /send message/i })
    fireEvent.click(submitButton)
    
    // Check button is disabled
    expect(submitButton).toBeDisabled()
    
    await waitFor(() => {
      expect(submitButton).not.toBeDisabled()
    })
  })

  it('shows loading state during submission', async () => {
    const mockResponse = { message: 'Message sent successfully' }
    ;(global.fetch as jest.Mock).mockImplementation(() => 
      new Promise(resolve => setTimeout(() => resolve({
        ok: true,
        json: async () => mockResponse,
      }), 100))
    )
    
    render(<ContactForm />)
    
    // Fill in form fields
    await userEvent.type(screen.getByLabelText(/full name/i), 'John Doe')
    await userEvent.type(screen.getByLabelText(/role/i), 'CTO')
    await userEvent.type(screen.getByLabelText(/company/i), 'Test Company')
    await userEvent.type(screen.getByLabelText(/email/i), 'john@example.com')
    await userEvent.type(screen.getByLabelText(/message/i), 'This is a test message.')
    
    const submitButton = screen.getByRole('button', { name: /send message/i })
    fireEvent.click(submitButton)
    
    // Check for loading text
    expect(screen.getByText(/sending/i)).toBeInTheDocument()
    
    await waitFor(() => {
      expect(screen.queryByText(/sending/i)).not.toBeInTheDocument()
    })
  })
})
