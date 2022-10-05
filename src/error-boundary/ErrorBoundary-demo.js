import React from "react";
import ErrorBoundary from "./components/ErrorBoundary";
import SampleComponent from "./components/SampleComponent";

export default (
  <div>
    <ErrorBoundary>
      <SampleComponent throwError={false} />
    </ErrorBoundary>

    <ErrorBoundary>
      <SampleComponent throwError={true} />
    </ErrorBoundary>
  </div>
);
