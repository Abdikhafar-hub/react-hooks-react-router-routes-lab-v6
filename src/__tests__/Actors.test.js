import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { RouterProvider, createMemoryRouter} from "react-router-dom";
import routes from "../routes";
import { within } from "@testing-library/react";

const actors = [
  {
    name: "Benedict Cumberbatch",
    movies: ["Doctor Strange", "The Imitation Game", "Black Mass"],
  },
  {
    name: "Justin Timberlake",
    movies: ["Trolls", "Friends with Benefits", "The Social Network"],
  },
  {
    name: "Anna Kendrick",
    movies: ["Pitch Perfect", "Into The Woods", "Trolls"], // Added "Trolls" here to match previous examples
  },
  {
    name: "Tom Cruise",
    movies: [
      "Jack Reacher: Never Go Back",
      "Mission Impossible 4",
      "War of the Worlds",
    ],
  },
];

const router = createMemoryRouter(routes, {
  initialEntries: [`/actors`],
  initialIndex: 0
});

test("renders without any errors", () => {
  const errorSpy = jest.spyOn(global.console, "error");

  render(<RouterProvider router={router}/>);

  expect(errorSpy).not.toHaveBeenCalled();

  errorSpy.mockRestore();
});

test("renders 'Actors Page' inside of the <h1 />", () => {
  render(<RouterProvider router={router}/>);
  const h1 = screen.queryByText(/Actors Page/);
  expect(h1).toBeInTheDocument();
  expect(h1.tagName).toBe("H1");
});

test("renders each actor's name", async () => {
  render(<RouterProvider router={router}/>);
  for (const actor of actors) {
    expect(
      await screen.findByText(actor.name, { exact: false })
    ).toBeInTheDocument();
  }
});

test("renders a <li /> for each movie", async () => {
  render(<RouterProvider router={router} />);

  for (const actor of actors) {
    // Find the <h2> for the actor first, then get the <ul> element under it
    const actorElement = await screen.findByText(actor.name, { exact: false });
    const ulElement = actorElement.nextElementSibling;

    console.log(ulElement.outerHTML); // Debugging step to see the structure

    if (ulElement && ulElement.tagName === "UL") {
      for (const movie of actor.movies) {
        // Use within to search inside the ulElement
        const liElement = within(ulElement).getByText(movie, { exact: false });
        expect(liElement).toBeInTheDocument();
        expect(liElement.tagName).toBe("LI");
      }
    } else {
      throw new Error(`No <ul> element found for actor: ${actor.name}`);
    }
  }
});


test("renders the <NavBar /> component", () => {
  const router = createMemoryRouter(routes, {
    initialEntries: ['/actors']
  });
  render(
      <RouterProvider router={router}/>
  );
  expect(document.querySelector(".navbar")).toBeInTheDocument();
});
