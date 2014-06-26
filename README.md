Vanilla CSS Gallery
===================

A lightweight, pure CSS photo gallery. By using the `:target` pseudo class the images are selected and displayed in the large view. The original `ul` list of images becomes the gallery navigation.

## Examples
See [jelmerdemaat.github.io/vanilla-css-gallery](http://jelmerdemaat.github.io/vanilla-css-gallery/) for some live examples. These xamples are also included in the repo (do some fancy `git clone git@github.com:jelmerdemaat/vanilla-css-gallery.git` and stuff).


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

To be completed.

<table>
	<tr>
		<td>Chrome</td>
		<td></td>
	</tr>
	<tr>
		<td>Firefox</td>
		<td></td>
	</tr>
	<tr>
		<td>IE</td>
		<td></td>
	</tr>
	<tr>
		<td>Opera</td>
		<td></td>
	</tr>
</table>