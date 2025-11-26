import { useState } from 'react';
import PageHero from '../components/PageHero';

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <>
      <PageHero
        eyebrow="Authentication"
        title={isLogin ? 'Welcome Back' : 'Join Supreme Masqueraders'}
        description={isLogin ? 'Sign in to access your member dashboard' : 'Create an account to become a member'}
      />

      <section className="shell">
        <div className="auth-container">
          <div className="auth-tabs">
            <button
              type="button"
              className={`auth-tab ${isLogin ? 'active' : ''}`}
              onClick={() => setIsLogin(true)}
            >
              Sign In
            </button>
            <button
              type="button"
              className={`auth-tab ${!isLogin ? 'active' : ''}`}
              onClick={() => setIsLogin(false)}
            >
              Sign Up
            </button>
          </div>

          <div className="auth-form-container">
            <form className="auth-form">
              {!isLogin && (
                <div className="form-group">
                  <label htmlFor="fullName">Full Name</label>
                  <input type="text" id="fullName" name="fullName" placeholder="Enter your full name" required />
                </div>
              )}
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" name="email" placeholder="Enter your email" required />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" placeholder="Enter your password" required />
              </div>
              {!isLogin && (
                <div className="form-group">
                  <label htmlFor="confirmPassword">Confirm Password</label>
                  <input type="password" id="confirmPassword" name="confirmPassword" placeholder="Confirm your password" required />
                </div>
              )}
              {isLogin && (
                <div className="form-options">
                  <label className="checkbox-label">
                    <input type="checkbox" />
                    <span>Remember me</span>
                  </label>
                  <a href="#" className="forgot-password">Forgot password?</a>
                </div>
              )}
              <button type="submit" className="primary-button auth-submit">
                {isLogin ? 'Sign In' : 'Create Account'}
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default AuthPage;

