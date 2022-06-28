import styles from './ErrorBanner.module.css'

type ErrorBannerProps = {
  message: string
}

export const ErrorBanner = ({ message } : ErrorBannerProps) =>
  <div className={styles.errorBanner}>{message}</div>
