# mathjax-img

MathJax TeX extension to embed images in math.

## MathJax Extension: `img.js`, leveraging mglyph in TeX input

This extension implements a TeX macro `\img` for embedding images in mathematical formula. It leverages the standard MathML mglyph tag which is designed for this purpose. 

## Usage:

    \img[valign=<vertical alignment>,width=<width>,height=<height>]{URL}

or

    \img[<vertical alignment>][<width>][<height>]{URL}

This adds an `\img` macro for inserting images into a MathJax expression. It takes 4 arguments:  the URL for the image, the vertical alignment value, the width, and the height of the image.  Any of the final three can be blank in order to use the default.  

With no vertical-align value, the image will sit on the baseline.  With no width or height, the image will be its natural size.  With one of the width or height specified, the image will be scaled to match that dimension while keeping the aspect ratio the same. If both are given, then image will be scaled to match both dimensions, without regard to the original aspect ratio.

## References

- MathJax: http://www.mathjax.org/
- Original discussion https://groups.google.com/d/msg/mathjax-users/SXjY3rQXOzc/YGcc48HwDR4J

## Using a CDN

To use a CDN copy, you need MathJax v2.4 (or higher) and configure a custom path `[img]` as described in the [MathJax documentation](http://docs.mathjax.org/en/latest/options/ThirdParty.html#custom-extension-path-configuration). 

Then add the extension to your configuration using the custom path. For example,

     <script type="text/x-mathjax-config>
        MathJax.Ajax.config.path["img"] = "https://cdn.rawgit.com/pkra/mathjax-img/1.0.0/";
        MathJax.Hub.Config({
        extensions: ["tex2jax.js","[img]/img.js"],
        jax: ["input/TeX","output/HTML-CSS"],
        tex2jax: {inlineMath: [["$","$"],["\\(","\\)"]]},
        });
     </script>
