// import React from "react";
import requireContext from "require-context.macro";

const filenames = requireContext("./resources/svg", true, /\.svg$/).keys();

const svgFiles =
    process.env.NODE_ENV === "test"
        ? requireContext("./resources/svg", true, /\.svg$/)
        : requireContext("!@svgr/webpack?-svgo,+titleProp!./resources/svg", true, /\.svg$/);

const svgIcons = svgFiles.keys().reduce((svgComponents, svgUrlPath) => {
    const filename = svgUrlPath.split("/").pop();
    const objectKey = filename.slice(0, filename.lastIndexOf("."));
    const svgComponent = svgComponents;

    switch (process.env.NODE_ENV) {
        case "test":
            import(`./resources/svg/${filename}`)
                .then((component) => {
                    svgComponent[objectKey] = component.ReactComponent;
                    return component.ReactComponent;
                })
                .catch(() => {});
            break;
        default:
            svgComponent[objectKey] = svgFiles(svgUrlPath).default;
            break;
    }

    return svgComponent;
}, {});

export { filenames, svgIcons };
