import React, { Component, ErrorInfo } from 'react';
import { Link, Redirect } from '@reach/router';

class ErrorBoundary extends Component {
  public state = { hasError: false, redirect: false };
  public static getDerivedStateFromError() {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, info: ErrorInfo) {
    console.error('ErrorBouandry caught an error', error, info);
  }

  public componentDidUpdate() {
    if (this.state.hasError) {
      setTimeout(() => {
        this.setState({ redirect: true });
      }, 5000);
    }
  }

  public render() {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    }
    if (this.state.hasError) {
      return (
        <h1>
          There was some error, <Link to="/">click here</Link> to go to home
          page.
        </h1>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
