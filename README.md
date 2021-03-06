Vanilla CSS Gallery
===================

A lightweight, pure CSS photo gallery. No JavaScript. By using the `:target` pseudo-class the images are selected and displayed in the large view. The original `ul` list of images becomes the gallery navigation.

 * [Examples](#examples)
 * [How to use it](#how-to-use-it)
 * [Browser support](#browser-support)

I'm [@jelmerdemaat](https://twitter.com/jelmerdemaat) on Twitter.

## Examples
See [jelmerdemaat.github.io/vanilla-css-gallery](http://jelmerdemaat.github.io/vanilla-css-gallery/) for some live examples. These examples are also included in the repo (do some fancy `git clone git@github.com:jelmerdemaat/vanilla-css-gallery.git` and stuff).


## How to use it
Use the following CSS and HTML to create the gallery. *This doesn't include styling*: only functionality. The code is also present in /sass and /css in this repo.

### CSS
```css
.gallery-nav {
  /* To be able to have a z-index: */
  position: relative;
}

.gallery-close {
  /* Hide closing "x" initially: */
  display: none;
}

.gallery-item {
  /* Define the initial state: */
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  opacity: 0;
  z-index: -1;
}

.gallery-item:target {
  /* When the image is active, make it appear: */
  opacity: 1;
  z-index: 2;
}

.gallery-item:target ~ .gallery-nav {
  /* Make the original image list also the gallery navigation: */
  z-index: 3;
}

.gallery-item:target ~ .gallery-nav .gallery-close {
  display: block;
}

```

### HTML
The HTML must include:

 * A series of `.gallery-item`s with anything inside.
 * A `.gallery-nav` navigation list *on the same level as the `.gallery-item`s*. Can include thumbnails of the images.
 * A closing link as the ultimate list item. The `href` can be anything non-existent.

```html
<!-- Big images -->
<div class="gallery-item" id="1">
	<img src="../images/beach.jpg" alt="A nice beach image">
</div>
<div class="gallery-item" id="2">
	<img src="../images/coffee.jpg" alt="A nice coffee image">
</div>
<div class="gallery-item" id="3">
	<img src="../images/mountains.jpg" alt="A nice mountains image">
</div>

<!-- Small images list -->
<ul class="gallery-nav">
	<li>
		<a href="#1">
			<img src="../images/beach.jpg" alt="A nice beach image" />
		</a>
	</li>
	<li>
		<a href="#2">
			<img src="../images/coffee.jpg" alt="A nice coffee image" />
		</a>
	</li>
	<li>
		<a href="#3">
			<img src="../images/mountains.jpg" alt="A nice mountains image" />
		</a>
	</li>
	<li class="gallery-close">
		<a href="#deselect" title="Close gallery">&times;</a></li>
	<li>
</ul>

```

## Browser support

Core functionality supported in every browser that supports the `:target` pseudo-class. This browserstack screenshot list of `:target` selected `div`s goes back to good support in IE7: [screenshots](http://www.browserstack.com/screenshots/27b100cbdc38933ea61792d27f428aca92a84bef).

The styling example relies somewhat on `transform: translate()` to perfectly center the images, so support for those styles goes back to [IE9, excluding Opera Mini](http://beta.caniuse.com/#feat=transforms2d). Another design would be perfectly possible without transforms to establish support down to, say, IE7.
