import * as React from "react";
import { MockedProvider, MockedResponse } from "react-apollo/test-utils";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import { mount } from "enzyme";

const GET_DOG_QUERY = gql`
  query getDog($name: String) {
    dog(name: $name) {
      id
      name
      breed
    }
  }
`;

const Dog = ({ name }: { name: string }) => (
  <Query query={GET_DOG_QUERY} variables={{ name }}>
    {({ loading, error, data }) => {
      if (loading) return "Loading...";
      if (error) return "Error!";

      return (
        <p>
          {data.dog.name} is a {data.dog.breed}
        </p>
      );
    }}
  </Query>
);

const mocks: MockedResponse[] = [
    {
        request: {
            query: GET_DOG_QUERY,
            variables: {
                name: "Buck"
            }
        },
        result: {
            data: {
                dog: { id: 1, name: "Buck", breed: "bulldog"}
            }
        }
    }
];

it("should render without an error", async () => {
    const wrapper = mount(
        <MockedProvider addTypename={false} mocks={mocks}>
            <Dog name="Buck" />
        </MockedProvider>
    );

    expect(wrapper.text()).toContain("Loading...");

    await new Promise((resolve) => setTimeout(resolve));

    expect(wrapper.text()).toContain("Buck is a bulldog");
});
