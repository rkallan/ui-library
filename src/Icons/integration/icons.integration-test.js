const { url } = global;

describe("<Icons />", () => {
    it("Icon smallest visually looks correct", async () => {
        await page.goto(`${url}?id=icons--smallest&viewMode=story`);
        const image = await page.screenshot();

        expect(image).toMatchImageSnapshot();
    });
    it("Icon small visually looks correct", async () => {
        await page.goto(`${url}?id=icons--small&viewMode=story`);
        const image = await page.screenshot();

        expect(image).toMatchImageSnapshot();
    });
    it("Icon normal visually looks correct", async () => {
        await page.goto(`${url}?id=icons--normal&viewMode=story`);
        const image = await page.screenshot();

        expect(image).toMatchImageSnapshot();
    });
    it("Icon large visually looks correct", async () => {
        await page.goto(`${url}?id=icons--large&viewMode=story`);
        const image = await page.screenshot();

        expect(image).toMatchImageSnapshot();
    });
    it("Icon largest visually looks correct", async () => {
        await page.goto(`${url}?id=icons--largest&viewMode=story`);
        const image = await page.screenshot();

        expect(image).toMatchImageSnapshot();
    });
    it("Icon overview visually looks correct", async () => {
        await page.goto(`${url}?id=icons--overview&viewMode=story`);
        const image = await page.screenshot();

        expect(image).toMatchImageSnapshot();
    });
});
