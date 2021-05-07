# mathjax-img

MathJax TeX extension to embed images in math.

## MathJax Extension: `img.js`, leveraging mglyph in TeX input

This extension implements a TeX macro `\img` for embedding images in mathematical formula. It leverages the standard MathML mglyph tag which is designed for this purpose.

## Usage:

    \img[valign=<vertical alignment>,width=<width>,height=<height>]{URL}

or

    \img[<vertical alignment>][<width>][<height>]{URL}

This adds an `\img` macro for inserting images into a MathJax expression. It takes 4 arguments: the URL for the image, the vertical alignment value, the width, and the height of the image. Any of the final three can be blank in order to use the default.

With no vertical-align value, the image will sit on the baseline. With no width or height, the image will be its natural size. With one of the width or height specified, the image will be scaled to match that dimension while keeping the aspect ratio the same. If both are given, then image will be scaled to match both dimensions, without regard to the original aspect ratio.

## Using NodeJS

### MathJax v3 (mathjax-img v2)

Install `mathjax-full` and `mathjax-img` and follow the instructions for NodeJS, e.g.,

    const { TeX } = require('mathjax/js/input/tex.js');
    const img = require('mathjax-img').configuration;
    const tex = new TeX({
    packages: [img.name]
    });


### MathJax v2 (mathjax-img v1 only)

Install mathjax-node and mathjax-img and follow the instructions for mathjax-node, e.g.,

    const mathjax = require('mathjax-node');
    mathjax.config({
    paths: {
        img: path.dirname(require.resolve('mathjax-img')),
    },
    extensions:
        '[img]/img'
    });


## Using a browser

### MathJax v3

For client-side use, you need load `img.min.js`.

Follow the instructions from the MathJax documentation on [loading a third-party extensions](http://docs.mathjax.org/en/latest/web/webpack.html#loading-the-extension), e.g.,

    MathJax = {
    loader: {
        load: ['[img]/img.min.js'],
        paths: {img: 'https://cdn.jsdelivr.net/npm/mathjax-img@3/'}
    },
    tex: {
        packages: {'[+]': ['img']}
    }
    };

### MathJax v2

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

## References

* MathJax: http://www.mathjax.org/
* Original discussion https://groups.google.com/d/msg/mathjax-users/SXjY3rQXOzc/YGcc48HwDR4J
* MathJax v3 https://github.com/mathjax/MathJax/issues/2517#issuecomment-686709079

