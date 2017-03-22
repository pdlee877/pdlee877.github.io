# jquery.expando
## A jQuery plugin for making text that grows on you

To see this plugin in action, check out [andrewcantino.com](http://andrewcantino.com).

# Usage

Option 1: Works in IE 9, Chrome, Firefox, Safari.

    <!doctype html>
    <html>
      <head>
        <title>Example</title>
        <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.1/jquery.min.js"></script>
        <script src="http://ajax.googleapis.com/ajax/libs/jqueryui/1.8.23/jquery-ui.min.js"></script>

        <script src='jquery.expando.js'></script>
        <link rel="stylesheet" type="text/css" href="expando.css" media="all" />

        <script>
          $(function() {
            $(".about-me").expando();
          });
        </script>
      </head>

      <body>
        <div class='about-me'>
          I like to
          <expando>
            <initial><a>program</a> and</initial>
            <expanded>
              program, for example in JavaScript and Ruby.  I also like to
            </expanded>
          </expando>
          <expando>
            <initial><a>hike</a>.</initial>
            <expanded>
              explore the
              <expando>
                <initial>hills</initial>
                <expanded>
                  hills, valleys, and mountains
                </expanded>
              </expando>
              surrounding San Francisco.
            </expanded>
          </expando>
        </div>
      </body>
    </html>

Option 2: Works on the above, plus IE 8.

    I like to
    <span class='expando'>
      <span class='initial'><a>program</a>.</span>
      <span class='expanded'>
        program, for example in JavaScript and Ruby.
        <div class='break'></div>
      </span>
    </span>

If you'd like to write in the first format, but deploy in the second (for IE8 support), check out the `bin/rewrite.rb` script:

    bin/rewrite.rb example.html example-processed.html

## Expanding line breaks

You can add `<div class='break'></div>` to create line breaks that expand with their `<expanded>` block:

    I like to
    <expando>
      <initial><a>program</a>.</initial>
      <expanded>
        program, for example in JavaScript and Ruby.
        <div class='break'></div>
      </expanded>
    </expando>

# Customization

Customize colors and spacing with options:

    $(".about-me").expando({
      expansionStartColor: "#EF7A28",
      expansionEndColor: "#444",
      expansionBreakMargin: "25px",
      colorFadeTime: 2000, //ms
      breakOpenTime: 300 //ms
    });

# Events and programmatic control

Expanding blocks triggers a jQuery `expando.expanded` event that you can bind to for custom behavior.

    $(".about-me").bind("expando.expanded", function() {
      expansionCount++;
      if (expansionCount > 2) {
        // Hide the explanation dialog
      } else if (expansionCount > 6) {
        // Offer to expand everything
      }
    });

You can programmatically expand an `expander` by calling `expando('expand')` on it:

    $(".about-me .expander.something").expando('expand')

You can expand everything as well

    $(".about-me").expando("expandAll")


`expando` is available over RawGit CDN:

    <script src="//cdn.rawgit.com/cantino/expando/38affee59bffdd87975c492472362c69ce0f6fda/jquery.expando.js"></script>
