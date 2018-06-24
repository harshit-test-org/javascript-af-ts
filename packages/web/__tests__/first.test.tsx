import { render } from "react-testing-library";

import First from "../components/SampleForTest";

describe("First", () => {
  test("should have correct type", () => {
    const { getByText } = render(<First />);
    expect(getByText("Hello World").style.display).toBe("none");
  });
});
