import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { SearchContainer } from '../../components';
import { SearchProvider } from '../../contexts';

import styles from './rootLayout.module.css';

type RootLayoutProps = React.HTMLAttributes<HTMLDivElement>;

const queryClient = new QueryClient();

const RootLayout = ({ className, children, ...props }: RootLayoutProps) => {
    return (
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <div className={styles.rootLayout} {...props}>
                    <header className={styles.rootLayoutHeader} />
                    <SearchProvider>
                        <SearchContainer />
                        {children}
                    </SearchProvider>
                </div>
            </BrowserRouter>
        </QueryClientProvider>
    );
};

export default RootLayout;
