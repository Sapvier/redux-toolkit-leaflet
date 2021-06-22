import React from 'react';
import Card from "../../../../components/Card";

const Categories = ({data}) => (
    <div>
        {data.map(item => {
                const {strCategory, idCategory, strCategoryThumb} = item
                return <Card key={idCategory} item={{
                    id: idCategory,
                    title: strCategory,
                    thumb: strCategoryThumb
                }} description={item.strCategoryDescription}/>
            }
        )}
    </div>
);


export default Categories;