import { BaseList } from '@/components/common/BaseList/BaseList';
import { CategoryComponents } from '@/components/layouts/header/components/HeaderSearch/HeaderSearch';
import { camelize } from '@/utils';
import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

// import { HashLink } from 'react-router-hash-link';
import * as S from './SearchResults.styles';

interface SearchResultsProps {
  results: CategoryComponents[];
}

export const SearchResults: React.FC<SearchResultsProps> = ({ results }) => {
  const { t } = useTranslation();

  const resultsList = useMemo(
    () =>
      results.map((result) => (
        <BaseList
          key={result.category}
          split={false}
          header={t(`common.${camelize(result.category)}`)}
          dataSource={result.components}
          renderItem={(item) => (
            // <HashLink to={item.url}>
            <BaseList.Item>
              <S.Text>{item.name}</S.Text>
            </BaseList.Item>
            // </HashLink>
          )}
        />
      )),
    [results, t]
  );

  return <S.SearchResultsWrapper>{resultsList}</S.SearchResultsWrapper>;
};
