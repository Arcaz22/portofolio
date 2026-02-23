import { Component, type ErrorInfo, type ReactNode } from 'react'
import { Button } from '../ui/button'

interface Props {
  children: ReactNode
  fallback?: ReactNode
}

interface State {
  hasError: boolean
  error: Error | null
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error('[ErrorBoundary]', error, info)
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null })
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) return this.props.fallback

      return (
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center space-y-4 max-w-md px-4">
            <h1 className="text-2xl font-bold text-destructive">Terjadi Kesalahan</h1>
            <p className="text-muted-foreground text-sm">
              {this.state.error?.message ?? 'Sesuatu berjalan tidak semestinya.'}
            </p>
            <div className="flex gap-2 justify-center">
              <Button onClick={this.handleReset}>Coba Lagi</Button>
              <Button variant="outline" onClick={() => (window.location.href = '/')}>
                Ke Beranda
              </Button>
            </div>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}
