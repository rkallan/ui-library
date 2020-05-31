const { url } = global;

describe("<Button />", () => {
    it("visually looks correct", async () => {
        // APIs from jest-puppeteer
        await page.goto(`${url}?id=button--default&viewMode=story`);
        const image = await page.screenshot();

        // API from jest-image-snapshot
        expect(image).toMatchImageSnapshot();
    });
    it("with counter", async () => {
        // APIs from jest-puppeteer
        await page.goto(`${url}?id=button--with-counter`);

        // click on the button
        await page.click("button");

        const image = await page.screenshot();

        // API from jest-image-snapshot
        expect(image).toMatchImageSnapshot();
    });
});
