<script>
export let link;
export let caption;

</script>

<a href={link} class="underline_from_center">{caption}</a>

<style>
body {
  font-family: "Open Sans";
  font-size: 1.125rem;
  line-height: 1.618em;
  color: #454545;
}
.wrapper {
  max-width: 50rem;
  width: 100%;
  margin: 2rem auto;
}
a {
  color: #3498db;
}
a.fade_in_bg {
  text-decoration: none;
  padding-left: 0.25em;
  padding-right: 0.25em;
  padding-bottom: 0.05em;
  border-bottom: 0.0625em dotted #3498db;
  transition: all 0.35s;
}
a.fade_in_bg:hover {
  background: #3498db;
  color: #fff;
  transition: all 0.35s;
}
a[class^="slide"] {
  text-decoration: none;
  line-height: 1.5em;
  padding-left: 0.25em;
  padding-right: 0.25em;
  border-bottom: 0.0625em dotted #3498db;
  position: relative;
  display: inline-block;
  overflow: hidden;
  vertical-align: bottom;
}
a[class^="slide"]::after {
  content: attr(data-linktext);
  background: #3498db;
  color: #fff;
  position: absolute;
  display: block;
  text-align: center;
}
a.slide_from_left::after {
  top: 0;
  right: 100%;
  left: -100%;
  transition: all 0.35s;
}
a[class^="slide"]:hover::after {
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  transition: all 0.35s;
}
a[class^="slide"]:hover {
  border-bottom: 0.0625em solid #3498db;
}
a.slide_from_right::after {
  top: 0;
  right: -100%;
  left: 100%;
}
a.slide_from_top::after {
  top: -100%;
  bottom: 100%;
}
a.slide_from_bottom::after {
  top: 100%;
  bottom: -100%;
}
a.fade_in_underline {
  text-decoration: none;
  padding-left: 0.125em;
  padding-right: 0.125em;
  padding-bottom: 0.05em;
  border-bottom: 0.125em solid #fff;
  transition: all 0.35s;
}
a.fade_in_underline:hover {
  border-bottom: 0.125em solid #3498db;
  transition: all 0.35s;
}
a[class^='underline'] {
  text-decoration: none;
  padding-left: 0.125em;
  padding-right: 0.125em;
  padding-bottom: 0.05em;
  position: relative;
}
a[class^='underline']::after {
  content: '';
  position: absolute;
  top: 100%;
  border-bottom: 0.125em solid #3498db;
  transition: all 0.35s;
}
a[class^='underline']:hover::after {
  transition: all 0.35s;
}
a.underline_from_left::after {
  left: 0;
  right: 100%;
}
a.underline_from_left:hover::after {
  right: 0;
}
a.underline_from_right::after {
  right: 0;
  left: 100%;
}
a.underline_from_right:hover::after {
  left: 0;
}
a.underline_from_center::after {
  right: 50%;
  left: 50%;
}
a.underline_from_center:hover::after {
  right: 0;
  left: 0;
}
</style>