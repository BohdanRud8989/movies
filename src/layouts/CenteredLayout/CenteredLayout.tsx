import styles from './centeredLayout.module.css';

type CenteredLayoutProps = React.HTMLAttributes<HTMLDivElement>;

const CenteredLayout = ({
                          className,
                          children,
                          ...props
                        }: CenteredLayoutProps) => (
    <div className={styles.centeredLayout} {...props}>
      {children}
    </div>
);

export default CenteredLayout;
