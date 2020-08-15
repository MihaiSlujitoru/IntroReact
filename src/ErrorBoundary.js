//mostly code from reactjs.org/docs/error-boundaries.html

import React from 'react';
import { Link, Redirect, navigate } from '@reach/router';

class ErrorBoundary extends React.Component {
  state = { hasError: false, redirect: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error('ErrorBoundary cought an error', error, info);
  }

  componentDidUpdate() {
    if (this.state.hasError) {
      setTimeout(() => this.setState({ redirect: true }), 5000);
    }
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    }
    if (this.state.hasError) {
      return (
        <h1>
          There was an error with this listing link.{' '}
          <Link to="/">Click Here</Link> to go back to the home page or wait 5
          seconds.
        </h1>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
