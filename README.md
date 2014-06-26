Vanilla CSS Gallery
===================

A lightweight, pure CSS photo gallery. By using the `:target` pseudo class images are selected and displayed in a larger view. The original `ul` list of images becomes the gallery navigation.

## How to use it
Use the following CSS and HTML to create the gallery. This doesn't include styling: only functionality. The code is also present in SASS and CSS in this repo.

```css
.gallery-nav {
  /* To be able to have a z-index: */
  position: relative;
}
.gallery-nav img {
  max-width: 150px;
}

.gallery-close {
  /* Hide closing cross initially: */
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
  /* When the image is active: */
}
.gallery-item:target {
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

## Support

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