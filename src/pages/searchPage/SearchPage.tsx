import { useEffect, useRef, useState } from 'react';
import { SearchPageStyles } from './SearchPageStyles';
import { useSearchParams } from 'react-router-dom';
import { Api } from '../../api';
import { useAppDispatch, useAppSelector } from '../../state/hooks';
import { setRepositories, setTotalCount } from '../../state/slices/repositorySlice';
import { Pagination, Repository, SearchField } from '../../components';
import { useDebounce } from '../../hooks/useDebounce';

export default function SearchPage() {
  const dispatch = useAppDispatch();

  const { repositories, totalCount } = useAppSelector((state) => state.repositories);

  const [searchParams, setSearchParams] = useSearchParams();
  const [searchText, setSearchText] = useState<string>('');
  const [availablePageQuantity, setAvailablePageQuantity] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);

  const debouncedSearchText = useDebounce(searchText, 1000);

  const pageRef = useRef<number>(1);

  function getAvailablePageQuantity() {
    const totalQuantity = Math.floor(totalCount / 20);

    setAvailablePageQuantity(totalQuantity > 50 ? 50 : totalQuantity);
  }

  useEffect(() => {
    if (!loading) {
      setLoading(true);
      const page = searchParams.get('page');
      pageRef.current = page ? +page : 1;

      Api.getRepositories(searchText, page ? +page : 1).then((res) => {
        if (res.data) {
          dispatch(setRepositories(res.data || []));
          dispatch(setTotalCount(res.totalCount || 0));
        }
      }).finally(() => {
        setLoading(false);
      });
    }
  }, [debouncedSearchText, searchParams.get('page')])

  useEffect(() => {
    getAvailablePageQuantity();
  }, [totalCount])

  function handleSearch(value: string) {
    setSearchText(value);
    setSearchParams({});
  };

  return (
    <SearchPageStyles>
      <div className="container">
        <SearchField handleChangeValue={handleSearch} />

        {loading && <p>Loading...</p>}

        {!loading && (
          <div className="repositoriesWrapper">
            {repositories.length > 0
              ? repositories.map((item) => <Repository data={item} />) 
              : <p>По Вашому запиту не знайдено жодного репозиторія</p>}
          </div>
        )}

        {!loading && !!availablePageQuantity && <Pagination currentPage={pageRef.current} pagesQuantity={availablePageQuantity} handleChangePage={(value) => setSearchParams({page: `${value + 1}`})} />}
      </div>
    </SearchPageStyles>
  )
}
