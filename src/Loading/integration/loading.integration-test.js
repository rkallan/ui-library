const { url } = global;

const timeout = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
};

describe("<Loading />", () => {
    it("visually looks correct on start with default delay", async () => {
        await page.goto(`${url}?id=loading--default&viewMode=story`);
        const image = await page.screenshot();

        expect(image).toMatchImageSnapshot();
    });
    it("visually looks correct after 200ms with default delay", async () => {
        await page.goto(`${url}?id=loading--default&viewMode=story`);
        await timeout(200);
        const image = await page.screenshot();

        expect(image).toMatchImageSnapshot();
    });
    it("visually looks correct without delay", async () => {
        await page.goto(`${url}?id=loading--no-delay&viewMode=story`);
        const image = await page.screenshot();

        expect(image).toMatchImageSnapshot();
    });
});
