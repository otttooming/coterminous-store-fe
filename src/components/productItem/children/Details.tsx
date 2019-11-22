import * as React from 'react';

const Details = ({ attributes, categories, description, tags }) => {
  const productAttributes = attributes.map((attribute, index) => (
    <tr key={index}>
      <th>{attribute.name}</th>
      <td>
        <p>{attribute.options.map(option => option + ' ')}</p>
      </td>
    </tr>
  ));

  const productCategories = categories.map((category, index) => (
    <a key={index} href="#" rel="tag">
      {category.name}
    </a>
  ));

  const productTags = tags.map((tag, index) => (
    <a key={index} href="#" rel="tag">
      {tag.name}
    </a>
  ));

  return (
    <div className="product__details-wrap mt1">
      {!!description && (
        <div className="product__details-block">
          <h2 className="tab-title opened">Description</h2>
          <div
            id="content_tab_1"
            className="tab-content"
            style={{ display: 'block' }}
            dangerouslySetInnerHTML={{ __html: description }}
          />
        </div>
      )}

      {!!attributes.length && (
        <div className="product__details-block">
          <h2 className="tab-title">Additional Information</h2>
          <div id="content_tab_2" className="tab-content">
            <div className="product__attributes">
              <table className="shop_attributes">
                <tbody>{productAttributes}</tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {!!categories.length && (
        <div className="product__details-block product-meta posted_in">
          <h2 className="posted-in__header">Product categories</h2>
          {productCategories}
        </div>
      )}
      {!!tags.length && (
        <div className="product__details-block product-meta tagged_as">
          <h2 className="tagged-as__header">Company</h2>
          {productTags}
        </div>
      )}
    </div>
  );
};

export default Details;
