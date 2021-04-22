import React, { Component } from 'react';

interface SampleResource {
  id: number;
  name: string;
}

interface Props {
  sampleResources: SampleResource[];
}

interface State {
  sampleNewResource?: string
}

export default class ExampleJup extends Component<Props, State> {
  ExampleJup() {
    this.state = {
      sampleNewResource: '',
    };
  }

  render() {
    const { sampleResources } = this.props;
    const { sampleNewResource } = this.state;

    return (
      <>
        <h1>{ sampleNewResource }</h1>
        <ul>
          {sampleResources.map((r) => (
            <li>{r.name}</li>
          ))}
        </ul>
      </>
    );
  }
}
