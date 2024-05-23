//const yaml = require("js-yaml");
import {load as yaml_load} from "js-yaml";

export default (eleventyConfig) => {

    // PASS THROUGH

    eleventyConfig.addPassthroughCopy({"src/_includes/css/": "css"});
    eleventyConfig.addPassthroughCopy({"src/_includes/img/": "img"});
    eleventyConfig.addPassthroughCopy({"src/_includes/js/": "js"});
    eleventyConfig.addPassthroughCopy({"src/_includes/font/": "font"});

    // LIBRARIES

    eleventyConfig.addDataExtension("yml, yaml", (contents) => yaml_load(contents) );

    
    return {
        // When a passthrough file is modified, rebuild the pages
        passthroughFileCopy: true,
        dir:
        {
            input: "src",
            output: "public",
            data: "_data",
            includes: "_includes"
        }
    }
}