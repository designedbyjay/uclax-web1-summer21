import React from 'react';
import styled from 'styled-components';

import Category from './Category.jsx';

const Categories = () => {

    return (
        <CategoriesStyled className='Categories'>
           <Category />
        </CategoriesStyled>
    );
}

export default Categories;

const CategoriesStyled = styled.div`
    
`;