import React, { Component, ComponentType } from "react";
import { Subtract } from "utility-types";

type Props<T> = {
  items: T[];
};

type State<T> = {
  filterKey: string;
  filterItems: T[];
};

export type InjectedComponentProps<T> = Props<T> &
  State<T> & {
    filter: (filterKey: string) => void;
  };

const withFilter = <P extends InjectedComponentProps<T>, T>(
  WrappedComponent: ComponentType<P>,
  itemKey: string
) => {
  return class WrapperComponent extends Component<
    Props<T> & Subtract<P, InjectedComponentProps<T>>,
    any
  > {
    state = {
      filterKey: "",
      filteredItems: this.props.items,
    };

    filter = (filterKey: string) => {
      this.setState({
        filterKey,
        filteredItems: this.props.items.filter((item: any) =>
          item[itemKey].toUpperCase().includes(filterKey.toUpperCase())
        ),
      });
    };

    render() {
      return (
        <WrappedComponent
          {...this.state}
          {...(this.props as P)}
          filter={this.filter}
        />
      );
    }
  };
};

export default withFilter;
