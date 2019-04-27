import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';

import StoreContext from '../contexts/StoreContext';

import TagList from './TagTree';
import ImportForm from './ImportForm';
import SearchForm from './SearchForm';

const Outliner = () => {
  const { uiStore } = useContext(StoreContext);

  return (
    <nav className={`${uiStore.isOutlinerOpen ? 'outlinerOpen' : ''}`}>
      {uiStore.outlinerPage === 'IMPORT' && (<>
        <h4 className="bp3-heading">Import</h4>
        <ImportForm />
      </>)}

      {uiStore.outlinerPage === 'TAGS' && (<>
        <h4 className="bp3-heading">Tags</h4>
        <TagList />
      </>)}

      {uiStore.outlinerPage === 'SEARCH' && (<>
        <h4 className="bp3-heading">Search</h4>
        <SearchForm />
      </>)}
    </nav>
  );
};

export default observer(Outliner);