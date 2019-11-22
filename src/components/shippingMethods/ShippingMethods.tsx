import * as React from 'react';
import {
  ShippingLocations,
  ShippingLocationItems,
} from '../../services/shippingApi/shippingApi';
import {
  Section,
  Heading,
  SelectField,
  SelectItemProps,
  RadioButtonField,
} from '@coterminous/ui-lib';

interface ShippingMethodsProps {
  shippingLocations: ShippingLocations | undefined;
}

class ShippingMethodInternal extends React.Component<ShippingMethodsProps, {}> {
  render() {
    const { shippingLocations } = this.props;

    if (!shippingLocations) {
      return null;
    }

    const { omniva, smartpost } = shippingLocations;

    return !shippingLocations ? null : (
      <Section>
        <Heading as="h1">Shipping</Heading>

        <ul className="list-style-none">
          {shippingLocations.omniva && (
            <li>
              <Heading as="h3">Omniva</Heading>

              <RadioButtonField
                label={null}
                inputLabel="Use Omniva package station"
                name="shipping_method"
                value="omniva"
              />

              <SelectField
                label="Select terminal"
                name="shipping_method_location_omniva"
                items={this.renderSelectSection(omniva)}
              />
            </li>
          )}

          {shippingLocations.smartpost && (
            <li>
              <Heading as="h3">SmartPost</Heading>

              <RadioButtonField
                label={null}
                inputLabel="Use SmartPost package station"
                name="shipping_method"
                value="smartpost"
              />

              <SelectField
                label="Select terminal"
                name="shipping_method_location_smartpost"
                items={this.renderSelectSection(smartpost)}
              />
            </li>
          )}
        </ul>
      </Section>
    );
  }

  renderSelectSection(
    items: ShippingLocationItems[],
  ): SelectItemProps[] | null {
    const arr: SelectItemProps[] = [];

    return !items
      ? null
      : items.reduce((acc, cur) => {
          const state: SelectItemProps[] = cur.locations.map(
            (location, index) => {
              const re: SelectItemProps = {
                label: `${location.name}`,
                value: location.name,
                searchTerms: [
                  { label: location.name },
                  { label: location.state },
                ],
                group: { label: location.state },
                meta: [{ label: location.service_hours }],
              };

              return re;
            },
          );

          return [...acc, ...state];
        }, arr);
  }
}

export default ShippingMethodInternal;
