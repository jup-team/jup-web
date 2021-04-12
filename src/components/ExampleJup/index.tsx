import React, { Component } from "react";

interface SampleResource {
  id: number;
  name: string;
}

interface Props {
  sampleResources: SampleResource[];
}

interface State {
    sampleNewResource ?: string
}

export default class ExampleJup extends Component<Props, State> {
  state = {
    sampleNewResource: "",
  };

  render() {
    const { sampleResources } = this.props;
    const { sampleNewResource } = this.state;

    return (
      <>
        <ul>
          {sampleResources.map((r) => (
            <li>{r.name}</li>
          ))}
        </ul>
      </>
    );
  }
}
