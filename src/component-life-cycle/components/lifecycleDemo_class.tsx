import React, { Component } from "react";
import Item from "../models/item";
import fetchProductsOfPage from "../services/products";

type Props = {};
type State = {
  page: number;
  status: "LOADING" | "LOADED" | "ERROR";
  products: Item[];
  error: Error | null;
};

class LifecycleDemo extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    console.log("constructor");

    this.state = {
      page: 1,
      status: "LOADING",
      products: [],
      error: null,
    };
  }

  nextPage = () => {
    this.setState((state) => {
      return {
        page: state.page + 1,
      };
    });
  };

  render() {
    console.log("render");
    const { page, status, products, error } = this.state;
    return (
      <>
        {status === "LOADING" && <div>Loading products....</div>}
        {status === "ERROR" && <div>{error?.message}</div>}
        {status === "LOADED" && (
          <>
            <button onClick={this.nextPage}>Next Page</button>
            <span>You're on page no. {page}</span>
            <ul>
              {products.map(({ id, name }) => (
                <li key={id}>{name}</li>
              ))}
            </ul>
          </>
        )}
      </>
    );
  }

  async fetchProductsOfPage() {
    this.setState({
      status: "LOADING",
    });

    try {
      const products = await fetchProductsOfPage(this.state.page);
      this.setState({
        status: "LOADED",
        products,
      });
    } catch (error) {
      this.setState({
        status: "ERROR",
        // error,
      });
    }
  }

  componentDidMount() {
    console.log("component did mount");
    this.fetchProductsOfPage();
  }

  componentDidUpdate(prevProps: Props, prevState: State): void {
    console.log("componentDidUpdate");
    if (prevState.page !== this.state.page) {
      this.fetchProductsOfPage();
    }
  }

  componentWillUnmount(): void {
    console.log("componentWillUnmount");
  }
}

export default LifecycleDemo;
