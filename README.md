# mathjax-img

MathJax TeX extension to embed images.

## MathJax Extension: `img.js`, leveraging mglyph in TeX input

This extension implements a TeX macro `\img` for embedding images in mathematical formula.

## Usage:

    \img[valign=<vertical alignment>,width=<width>,height=<height>][<alttext>]{URL}

or

    \img[<vertical alignment>][<width>][<height>][<alttext>]{URL}

This adds an `\img` macro for inserting images into a MathJax expression. It takes 5 arguments: the URL for the image and, optionally, the vertical alignment value, the width, the height, and the alttext. Any of the final four can be blank in order to use the default.

With no vertical-align value, the image will sit on the baseline. With no width or height, the image will be its natural size. With one of the width or height specified, the image will be scaled to match that dimension while keeping the aspect ratio the same. If both are given, then image will be scaled to match both dimensions, without regard to the original aspect ratio. The alttext will be used to provide a textual alternative in the rendering.

## Using NodeJS

Install `mathjax-full` and `mathjax-img` and follow the instructions for NodeJS, e.g.,

    const { TeX } = require('mathjax/js/input/tex.js');
    const img = require('mathjax-img').configuration;
    const tex = new TeX({
        packages: [img.name]
    });

## Using a browser

For client-side use, you need load `img.min.js`.

Follow the instructions from the MathJax documentation on [loading a third-party extensions](http://docs.mathjax.org/en/latest/web/webpack.html#loading-the-extension), e.g.,

    MathJax = {
        loader: {
            load: ['[img]/img.min.js'],
            paths: {img: 'https://cdn.jsdelivr.net/npm/mathjax-img@3'}
        },
        tex: {
            packages: {'[+]': ['img']}
        }
    };

## References

* MathJax: http://www.mathjax.org/
* Original discussion https://groups.google.com/d/msg/mathjax-users/SXjY3rQXOzc/YGcc48HwDR4J
* MathJax v3 https://github.com/mathjax/MathJax/issues/2517#issuecomment-686709079

