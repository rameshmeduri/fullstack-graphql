import React from "react";
import gql from "graphql-tag";
import { MockedProvider } from "@apollo/react-testing";
import { render, cleanup } from "@testing-library/react";
import { MockList } from "graphql-tools";
import faker from "faker";
import "@testing-library/jest-dom";
import Pets, { GET_PETS } from "./Pets";

// const PET_DETAILS = gql`
//   fragment PetDetails on Pet {
//     id
//     type
//     name
//     img
//     vacinated @client
//   }
// `;

// const GET_PETS = gql`
//   query petsList($input: PetsInput) {
//     pets(input: $input) {
//       ...PetDetails
//     }
//   }
//   ${PET_DETAILS}
// `;

afterEach(cleanup);

const mocks = [
  {
    request: {
      query: GET_PETS,
    },
    result: {
      data: {
        pets: [
          {
            id: "2LzlgI9JWPVM65XwXY8ZG",
            type: "CAT",
            name: "bob",
            img: "http://placekitten.com/300/300",
          },
          {
            id: "9HObycfxobWEsH8tBGmLP",
            type: "CAT",
            name: "timoune",
            img: "http://placekitten.com/300/300",
          },
          {
            id: "JskiuBI2_5Z6VA0R4F9rR",
            type: "DOG",
            name: "dog",
            img: "https://placedog.net/300/300",
          },
        ],
      },
    },
  },
];

it("renders with MockedProvider", async () => {
  const { findByText, getByText } = render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <Pets />
    </MockedProvider>
  );

  //expect(getByText("full-page-loader")).toBeInTheDocument();

  const productTag = await findByText("new pet");
  expect(productTag).toBeInTheDocument();
});
