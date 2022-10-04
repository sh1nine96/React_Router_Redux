import React, { Component } from "react";
import withFilter, { InjectedComponentProps } from "./withFilter";

type Item = {
  id: number;
  name: string;
};

class FruitsList extends Component<InjectedComponentProps<Item>> {
  render() {
    const { filterKey, filterItems, filter } = this.props;

    return (
      <>
        <h1>FruitsList component</h1>
        <hr />
        <input
          type="search"
          placeholder="Search by name"
          value={filterKey}
          onChange={(event) => filter(event.target.value)}
        />
        <ul>
          {filterItems.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </>
    );
  }
}

export default withFilter(FruitsList, "name");
