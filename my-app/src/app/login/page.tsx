import styles from "./login.module.css";

export default function LoginPage() {
  return (
    <div className={styles["auth"]}>
      <div className={styles["auth__container"]}>
        <div className={styles["auth__form"]}>
          <h1 className={styles["auth__title"]}>Welcome Back</h1>
          <div className={styles["auth__field"]}>
            <label className={styles["auth__label"]} htmlFor="email">
              Email address
            </label>
            <div className={styles["auth__input"]}>
              <input
                id="email"
                className={styles["auth__input-control"]}
                type="email"
                placeholder="Enter your email"
              />
            </div>
          </div>
          <div className={styles["auth__field"]}>
            <label className={styles["auth__label"]} htmlFor="password">
              Password
            </label>
            <div className={styles["auth__input"]}>
              <input
                id="password"
                className={styles["auth__input-control"]}
                type="password"
                placeholder="Enter your password"
              />
            </div>
          </div>

          <button className={styles["auth__primary-button"]} type="button">
            Login
          </button>

          <div className={styles["auth__divider"]}>
            <span className={styles["auth__divider-text"]}>Or</span>
          </div>

          <div className={styles["auth__oauth"]}>
            <button className={styles["auth__oauth-button"]} type="button">
              <img
                src="/images/google.svg"
                alt="Google"
                className={styles["auth__oauth-icon"]}
              />
              <span className={styles["auth__oauth-text"]}>
                Sign in with Google
              </span>
            </button>
            <button className={styles["auth__oauth-button"]} type="button">
              <img
                src="/images/apple.svg"
                alt="Apple"
                className={styles["auth__oauth-icon"]}
              />
              <span className={styles["auth__oauth-text"]}>
                Sign in with Apple
              </span>
            </button>
          </div>

          <p className={styles["auth__signin"]}>
            Don’t have an account?&nbsp;
            <a href="/signup" className={styles["auth__signin-link"]}>
              Sign Up
            </a>
          </p>
        </div>
        <div className={styles["auth__media"]}> </div>
      </div>
    </div>
  );
}
