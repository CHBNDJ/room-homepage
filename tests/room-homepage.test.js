import { describe, expect, it } from "vitest";
import { TestDriver } from "testdriverai/vitest/hooks";

describe("Room Homepage", () => {
  it("should load the homepage and display key sections", async (context) => {
    const testdriver = TestDriver(context);

    await testdriver.provision.chrome({
      url: "https://chbndj.github.io/room-homepage/",
    });

    const heading = await testdriver.assert("the heading 'Discover innovative ways to decorate' is visible");
    expect(heading).toBeTruthy();

    const nav = await testdriver.assert("the navigation bar with home, shop, about, and contact is visible");
    expect(nav).toBeTruthy();

    const aboutSection = await testdriver.assert("the 'About our furniture' section is visible");
    expect(aboutSection).toBeTruthy();
  });

  it("should navigate the hero slider using arrow controls", async (context) => {
    const testdriver = TestDriver(context);

    await testdriver.provision.chrome({
      url: "https://chbndj.github.io/room-homepage/",
    });

    const rightArrow = await testdriver.find("right arrow button");
    await rightArrow.click();

    const leftArrow = await testdriver.find("left arrow button");
    await leftArrow.click();

    const result = await testdriver.assert("the hero slider controls are interactive and responsive");
    expect(result).toBeTruthy();
  });
});
