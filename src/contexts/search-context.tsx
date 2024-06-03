import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from 'react';

interface ISearchContext {
  value: string | undefined;
  updateValue: Dispatch<SetStateAction<string | undefined>>;
}

type SearchProviderProps = {
  children: ReactNode;
};

const SearchContext = createContext<ISearchContext>({
  value: undefined,
  updateValue: () => {},
});

export const useSearch = () => useContext(SearchContext);

export const SearchProvider = ({ children }: SearchProviderProps) => {
  const [searchContext, updateSearchContext] =
    useState<string | undefined>();

  return (
    <SearchContext.Provider
      value={{
        value: searchContext,
        updateValue: updateSearchContext,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};
