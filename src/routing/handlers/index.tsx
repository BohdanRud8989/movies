import { Page } from '../../pages';

type PageHandlerProps = {
    children: React.ReactNode;
};

export const PageHandler = ({ children }: PageHandlerProps) => (
    <Page>{children}</Page>
);
