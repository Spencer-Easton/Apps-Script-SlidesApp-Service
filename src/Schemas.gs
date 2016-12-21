
/**
*The stretched picture fill. The page or page element is filled entirely with
the specified picture. The picture is stretched to fit its container.
**/


var StretchedPictureFill_ = function(stretchedPictureFillObj){ this.stretchedPictureFillObj_ = stretchedPictureFillObj }


/**
*Reading the content_url:

An URL to a picture with a default lifetime of 30 minutes.
This URL is tagged with the account of the requester. Anyone with the URL
effectively accesses the picture as the original requester. Access to the
picture may be lost if the presentation's sharing settings change.

Writing the content_url:

The picture is fetched once at insertion time and a copy is stored for
display inside the presentation. Pictures must be less than 50MB in size,
cannot exceed 25 megapixels, and must be in either in PNG, JPEG, or GIF
format.
**/
StretchedPictureFill_.prototype.ContentUrl = function(){return this.stretchedPictureFillObj_.contentUrl}


/**
*The original size of the picture fill. This field is read-only.
**/
StretchedPictureFill_.prototype.Size = function(){return new Size_( this.stretchedPictureFillObj_.size)}
/**
*A PageElement kind representing an
image.
**/


var Image_ = function(imageObj){ this.imageObj_ = imageObj }


/**
*An URL to an image with a default lifetime of 30 minutes.
This URL is tagged with the account of the requester. Anyone with the URL
effectively accesses the image as the original requester. Access to the
image may be lost if the presentation's sharing settings change.
**/
Image_.prototype.ContentUrl = function(){return this.imageObj_.contentUrl}


/**
*The properties of the image.
**/
Image_.prototype.ImageProperties = function(){return new ImageProperties_( this.imageObj_.imageProperties)}
/**
*The properties of the Video.
**/


var VideoProperties_ = function(videoPropertiesObj){ this.videoPropertiesObj_ = videoPropertiesObj }


/**
*The outline of the video. The default outline matches the defaults for new
videos created in the Slides editor.
**/
VideoProperties_.prototype.Outline = function(){return new Outline_( this.videoPropertiesObj_.outline)}
/**
*The crop properties of an object enclosed in a container. For example, an
Image.

The crop properties is represented by the offsets of four edges which define
a crop rectangle. The offsets are measured in percentage from the
corresponding edges of the object's original bounding rectangle towards
inside, relative to the object's original dimensions.

- If the offset is in the interval (0, 1), the corresponding edge of crop
rectangle is positioned inside of the object's original bounding rectangle.
- If the offset is negative or greater than 1, the corresponding edge of crop
rectangle is positioned outside of the object's original bounding rectangle.
- If the left edge of the crop rectangle is on the right side of its right
edge, the object will be flipped horizontally.
- If the top edge of the crop rectangle is below its bottom edge, the object
will be flipped vertically.
- If all offsets and rotation angle is 0, the object is not cropped.

After cropping, the content in the crop rectangle will be stretched to fit
its container.
**/


var CropProperties_ = function(cropPropertiesObj){ this.cropPropertiesObj_ = cropPropertiesObj }


/**
*The offset specifies the right edge of the crop rectangle that is located
to the left of the original bounding rectangle right edge, relative to the
object's original width.
**/
CropProperties_.prototype.RightOffset = function(){return this.cropPropertiesObj_.rightOffset}


/**
*The rotation angle of the crop window around its center, in radians.
Rotation angle is applied after the offset.
**/
CropProperties_.prototype.Angle = function(){return this.cropPropertiesObj_.angle}


/**
*The offset specifies the left edge of the crop rectangle that is located to
the right of the original bounding rectangle left edge, relative to the
object's original width.
**/
CropProperties_.prototype.LeftOffset = function(){return this.cropPropertiesObj_.leftOffset}


/**
*The offset specifies the top edge of the crop rectangle that is located
below the original bounding rectangle top edge, relative to the object's
original height.
**/
CropProperties_.prototype.TopOffset = function(){return this.cropPropertiesObj_.topOffset}


/**
*The offset specifies the bottom edge of the crop rectangle that is located
above the original bounding rectangle bottom edge, relative to the object's
original height.
**/
CropProperties_.prototype.BottomOffset = function(){return this.cropPropertiesObj_.bottomOffset}


/**
*A table range represents a reference to a subset of a table.

It's important to note that the cells specified by a table range do not
necessarily form a rectangle. For example, let's say we have a 3 x 3 table
where all the cells of the last row are merged together. The table looks
like this:

           
  [             ]

A table range with location = (0, 0), row span = 3 and column span = 2
specifies the following cells:

   x     x 
  [      x      ]
**/


var TableRange_ = function(tableRangeObj){ this.tableRangeObj_ = tableRangeObj }


/**
*The starting location of the table range.
**/
TableRange_.prototype.Location = function(){return new TableCellLocation_( this.tableRangeObj_.location)}
/**
*The row span of the table range.
**/
TableRange_.prototype.RowSpan = function(){return this.tableRangeObj_.rowSpan}


/**
*The column span of the table range.
**/
TableRange_.prototype.ColumnSpan = function(){return this.tableRangeObj_.columnSpan}


/**
*Update the styling of text in a Shape or
Table.
**/


var UpdateTextStyleRequest_ = function(updateTextStyleRequestObj){ this.updateTextStyleRequestObj_ = updateTextStyleRequestObj }


/**
*The style(s) to set on the text.

If the value for a particular style matches that of the parent, that style
will be set to inherit.

Certain text style changes may cause other changes meant to mirror the
behavior of the Slides editor. See the documentation of
TextStyle for more information.
**/
UpdateTextStyleRequest_.prototype.Style = function(){return new TextStyle_( this.updateTextStyleRequestObj_.style)}
/**
*The object ID of the shape or table with the text to be styled.
**/
UpdateTextStyleRequest_.prototype.ObjectId = function(){return this.updateTextStyleRequestObj_.objectId}


/**
*The fields that should be updated.

At least one field must be specified. The root `style` is implied and
should not be specified. A single `"*"` can be used as short-hand for
listing every field.

For example to update the text style to bold, set `fields` to `"bold"`.

To reset a property to its default value,
include its field name in the field mask but leave the field itself unset.
**/
UpdateTextStyleRequest_.prototype.Fields = function(){return this.updateTextStyleRequestObj_.fields}


/**
*The range of text to style.

The range may be extended to include adjacent newlines.

If the range fully contains a paragraph belonging to a list, the
paragraph's bullet is also updated with the matching text style.
**/
UpdateTextStyleRequest_.prototype.TextRange = function(){return new Range_( this.updateTextStyleRequestObj_.textRange)}
/**
*The optional table cell location if the text to be styled is in a table
cell. If present, the object_id must refer to a table.
**/
UpdateTextStyleRequest_.prototype.CellLocation = function(){return new TableCellLocation_( this.updateTextStyleRequestObj_.cellLocation)}
/**
*Inserts text into a shape or a table cell.
**/


var InsertTextRequest_ = function(insertTextRequestObj){ this.insertTextRequestObj_ = insertTextRequestObj }


/**
*The text to be inserted.

Inserting a newline character will implicitly create a new
ParagraphMarker at that index.
The paragraph style of the new paragraph will be copied from the paragraph
at the current insertion index, including lists and bullets.

Text styles for inserted text will be determined automatically, generally
preserving the styling of neighboring text. In most cases, the text will be
added to the TextRun that exists at the
insertion index.

Some control characters (U+0000-U+0008, U+000C-U+001F) and characters
from the Unicode Basic Multilingual Plane Private Use Area (U+E000-U+F8FF)
will be stripped out of the inserted text.
**/
InsertTextRequest_.prototype.Text = function(){return this.insertTextRequestObj_.text}


/**
*The object ID of the shape or table where the text will be inserted.
**/
InsertTextRequest_.prototype.ObjectId = function(){return this.insertTextRequestObj_.objectId}


/**
*The index where the text will be inserted, in Unicode code units, based
on TextElement indexes.

The index is zero-based and is computed from the start of the string.
The index may be adjusted to prevent insertions inside Unicode grapheme
clusters. In these cases, the text will be inserted immediately after the
grapheme cluster.
**/
InsertTextRequest_.prototype.InsertionIndex = function(){return this.insertTextRequestObj_.insertionIndex}


/**
*The optional table cell location if the text is to be inserted into a table
cell. If present, the object_id must refer to a table.
**/
InsertTextRequest_.prototype.CellLocation = function(){return new TableCellLocation_( this.insertTextRequestObj_.cellLocation)}
/**
*An RGB color.
**/


var RgbColor_ = function(rgbColorObj){ this.rgbColorObj_ = rgbColorObj }


/**
*The green component of the color, from 0.0 to 1.0.
**/
RgbColor_.prototype.Green = function(){return this.rgbColorObj_.green}


/**
*The blue component of the color, from 0.0 to 1.0.
**/
RgbColor_.prototype.Blue = function(){return this.rgbColorObj_.blue}


/**
*The red component of the color, from 0.0 to 1.0.
**/
RgbColor_.prototype.Red = function(){return this.rgbColorObj_.red}


/**
*Common properties for a page element.

Note: When you initially create a
PageElement, the API may modify
the values of both `size` and `transform`, but the
visual size will be unchanged.
**/


var PageElementProperties_ = function(pageElementPropertiesObj){ this.pageElementPropertiesObj_ = pageElementPropertiesObj }


/**
*The size of the element.
**/
PageElementProperties_.prototype.Size = function(){return new Size_( this.pageElementPropertiesObj_.size)}
/**
*The object ID of the page where the element is located.
**/
PageElementProperties_.prototype.PageObjectId = function(){return this.pageElementPropertiesObj_.pageObjectId}


/**
*The transform for the element.
**/
PageElementProperties_.prototype.Transform = function(){return new AffineTransform_( this.pageElementPropertiesObj_.transform)}
/**
*Deletes text from a shape or a table cell.
**/


var DeleteTextRequest_ = function(deleteTextRequestObj){ this.deleteTextRequestObj_ = deleteTextRequestObj }


/**
*The object ID of the shape or table from which the text will be deleted.
**/
DeleteTextRequest_.prototype.ObjectId = function(){return this.deleteTextRequestObj_.objectId}


/**
*The range of text to delete, based on TextElement indexes.

There is always an implicit newline character at the end of a shape's or
table cell's text that cannot be deleted. `Range.Type.ALL` will use the
correct bounds, but care must be taken when specifying explicit bounds for
range types `FROM_START_INDEX` and `FIXED_RANGE`. For example, if the text
is "ABC", followed by an implicit newline, then the maximum value is 2 for
`text_range.start_index` and 3 for `text_range.end_index`.

Deleting text that crosses a paragraph boundary may result in changes
to paragraph styles and lists as the two paragraphs are merged.

Ranges that include only one code unit of a surrogate pair are expanded to
include both code units.
**/
DeleteTextRequest_.prototype.TextRange = function(){return new Range_( this.deleteTextRequestObj_.textRange)}
/**
*The optional table cell location if the text is to be deleted from a table
cell. If present, the object_id must refer to a table.
**/
DeleteTextRequest_.prototype.CellLocation = function(){return new TableCellLocation_( this.deleteTextRequestObj_.cellLocation)}
/**
*Styles that apply to a whole paragraph.

If this text is contained in a shape with a parent placeholder, then these paragraph styles may be
inherited from the parent. Which paragraph styles are inherited depend on the
nesting level of lists:

* A paragraph not in a list will inherit its paragraph style from the
  paragraph at the 0 nesting level of the list inside the parent placeholder.
* A paragraph in a list will inherit its paragraph style from the paragraph
  at its corresponding nesting level of the list inside the parent
  placeholder.

Inherited paragraph styles are represented as unset fields in this message.
**/


var ParagraphStyle_ = function(paragraphStyleObj){ this.paragraphStyleObj_ = paragraphStyleObj }


/**
*The amount of space between lines, as a percentage of normal, where normal
is represented as 100.0. If unset, the value is inherited from the parent.
This property is read-only.
**/
ParagraphStyle_.prototype.LineSpacing = function(){return this.paragraphStyleObj_.lineSpacing}


/**
*The spacing mode for the paragraph. This property is read-only.
**/
ParagraphStyle_.prototype.SpacingMode = function(){return this.paragraphStyleObj_.spacingMode}


/**
*The text alignment for this paragraph. This property is read-only.
**/
ParagraphStyle_.prototype.Alignment = function(){return this.paragraphStyleObj_.alignment}


/**
*The amount of extra space above the paragraph. If unset, the value is
inherited from the parent. This property is read-only.
**/
ParagraphStyle_.prototype.SpaceAbove = function(){return new Dimension_( this.paragraphStyleObj_.spaceAbove)}
/**
*The text direction of this paragraph. This property is read-only.
**/
ParagraphStyle_.prototype.Direction = function(){return this.paragraphStyleObj_.direction}


/**
*The amount indentation for the paragraph on the side that corresponds to
the end of the text, based on the current text direction. If unset, the
value is inherited from the parent. This property is read-only.
**/
ParagraphStyle_.prototype.IndentEnd = function(){return new Dimension_( this.paragraphStyleObj_.indentEnd)}
/**
*The amount of indentation for the start of the first line of the paragraph.
If unset, the value is inherited from the parent. This property is
read-only.
**/
ParagraphStyle_.prototype.IndentFirstLine = function(){return new Dimension_( this.paragraphStyleObj_.indentFirstLine)}
/**
*The amount indentation for the paragraph on the side that corresponds to
the start of the text, based on the current text direction. If unset, the
value is inherited from the parent. This property is read-only.
**/
ParagraphStyle_.prototype.IndentStart = function(){return new Dimension_( this.paragraphStyleObj_.indentStart)}
/**
*The amount of extra space above the paragraph. If unset, the value is
inherited from the parent. This property is read-only.
**/
ParagraphStyle_.prototype.SpaceBelow = function(){return new Dimension_( this.paragraphStyleObj_.spaceBelow)}
/**
*A page in a presentation.
**/


var Page_ = function(pageObj){ this.pageObj_ = pageObj }


/**
*Slide specific properties. Only set if page_type = SLIDE.
**/
Page_.prototype.SlideProperties = function(){return new SlideProperties_( this.pageObj_.slideProperties)}
/**
*The type of the page.
**/
Page_.prototype.PageType = function(){return this.pageObj_.pageType}


/**
*The page elements rendered on the page.
**/
Page_.prototype.PageElements = function(){return new IteratorService_(this.pageObj_.pageElements.map(function(element){return new PageElement_(element)}))}


/**
*The properties of the page.
**/
Page_.prototype.PageProperties = function(){return new PageProperties_( this.pageObj_.pageProperties)}
/**
*Layout specific properties. Only set if page_type = LAYOUT.
**/
Page_.prototype.LayoutProperties = function(){return new LayoutProperties_( this.pageObj_.layoutProperties)}
/**
*The object ID for this page. Object IDs used by
Page and
PageElement share the same namespace.
**/
Page_.prototype.ObjectId = function(){return this.pageObj_.objectId}


/**
*Update the properties of a Shape.
**/


var UpdateShapePropertiesRequest_ = function(updateShapePropertiesRequestObj){ this.updateShapePropertiesRequestObj_ = updateShapePropertiesRequestObj }


/**
*The shape properties to update.
**/
UpdateShapePropertiesRequest_.prototype.ShapeProperties = function(){return new ShapeProperties_( this.updateShapePropertiesRequestObj_.shapeProperties)}
/**
*The object ID of the shape the updates are applied to.
**/
UpdateShapePropertiesRequest_.prototype.ObjectId = function(){return this.updateShapePropertiesRequestObj_.objectId}


/**
*The fields that should be updated.

At least one field must be specified. The root `shapeProperties` is
implied and should not be specified. A single `"*"` can be used as
short-hand for listing every field.

For example to update the shape background solid fill color, set `fields`
to `"shapeBackgroundFill.solidFill.color"`.

To reset a property to its default value, include its field name in the
field mask but leave the field itself unset.
**/
UpdateShapePropertiesRequest_.prototype.Fields = function(){return this.updateShapePropertiesRequestObj_.fields}


/**
*The result of creating a line.
**/


var CreateLineResponse_ = function(createLineResponseObj){ this.createLineResponseObj_ = createLineResponseObj }


/**
*The object ID of the created line.
**/
CreateLineResponse_.prototype.ObjectId = function(){return this.createLineResponseObj_.objectId}


/**
*A Google Slides presentation.
**/


var Presentation_ = function(presentationObj){ this.presentationObj_ = presentationObj }


/**
*The title of the presentation.
**/
Presentation_.prototype.Title = function(){return this.presentationObj_.title}


/**
*The locale of the presentation, as an IETF BCP 47 language tag.
**/
Presentation_.prototype.Locale = function(){return this.presentationObj_.locale}


/**
*The slides in the presentation.
A slide inherits properties from a slide layout.
**/
Presentation_.prototype.Slides = function(){return new IteratorService_(this.presentationObj_.slides.map(function(element){return new Page_(element)}))}


/**
*The slide masters in the presentation. A slide master contains all common
page elements and the common properties for a set of layouts. They serve
three purposes:

- Placeholder shapes on a master contain the default text styles and shape
  properties of all placeholder shapes on pages that use that master.
- The master page properties define the common page properties inherited by
  its layouts.
- Any other shapes on the master slide will appear on all slides using that
  master, regardless of their layout.
**/
Presentation_.prototype.Masters = function(){return new IteratorService_(this.presentationObj_.masters.map(function(element){return new Page_(element)}))}


/**
*The size of pages in the presentation.
**/
Presentation_.prototype.PageSize = function(){return new Size_( this.presentationObj_.pageSize)}
/**
*The ID of the presentation.
**/
Presentation_.prototype.PresentationId = function(){return this.presentationObj_.presentationId}


/**
*The layouts in the presentation. A layout is a template that determines
how content is arranged and styled on the slides that inherit from that
layout.
**/
Presentation_.prototype.Layouts = function(){return new IteratorService_(this.presentationObj_.layouts.map(function(element){return new Page_(element)}))}


/**
*Creates an image.
**/


var CreateImageRequest_ = function(createImageRequestObj){ this.createImageRequestObj_ = createImageRequestObj }


/**
*The image URL.

The image is fetched once at insertion time and a copy is stored for
display inside the presentation. Images must be less than 50MB in size,
cannot exceed 25 megapixels, and must be in either in PNG, JPEG, or GIF
format.
**/
CreateImageRequest_.prototype.Url = function(){return this.createImageRequestObj_.url}


/**
*A user-supplied object ID.

If you specify an ID, it must be unique among all pages and page elements
in the presentation. The ID must start with an alphanumeric character or an
underscore (matches regex `[a-zA-Z0-9_]`); remaining characters
may include those as well as a hyphen or colon (matches regex
`[a-zA-Z0-9_-:]`).
The length of the ID must not be less than 5 or greater than 50.

If you don't specify an ID, a unique one is generated.
**/
CreateImageRequest_.prototype.ObjectId = function(){return this.createImageRequestObj_.objectId}


/**
*The element properties for the image.

When the aspect ratio of the provided size does not match the image aspect
ratio, the image is scaled and centered with respect to the size in order
to maintain aspect ratio. The provided transform is applied after this
operation.
**/
CreateImageRequest_.prototype.ElementProperties = function(){return new PageElementProperties_( this.createImageRequestObj_.elementProperties)}
/**
*The properties of Page that are only
relevant for pages with page_type SLIDE.
**/


var SlideProperties_ = function(slidePropertiesObj){ this.slidePropertiesObj_ = slidePropertiesObj }


/**
*The object ID of the layout that this slide is based on.
**/
SlideProperties_.prototype.LayoutObjectId = function(){return this.slidePropertiesObj_.layoutObjectId}


/**
*The object ID of the master that this slide is based on.
**/
SlideProperties_.prototype.MasterObjectId = function(){return this.slidePropertiesObj_.masterObjectId}


/**
*Updates the transform of a page element.
**/


var UpdatePageElementTransformRequest_ = function(updatePageElementTransformRequestObj){ this.updatePageElementTransformRequestObj_ = updatePageElementTransformRequestObj }


/**
*The apply mode of the transform update.
**/
UpdatePageElementTransformRequest_.prototype.ApplyMode = function(){return this.updatePageElementTransformRequestObj_.applyMode}


/**
*The object ID of the page element to update.
**/
UpdatePageElementTransformRequest_.prototype.ObjectId = function(){return this.updatePageElementTransformRequestObj_.objectId}


/**
*The input transform matrix used to update the page element.
**/
UpdatePageElementTransformRequest_.prototype.Transform = function(){return new AffineTransform_( this.updatePageElementTransformRequestObj_.transform)}
/**
*A List describes the look and feel of bullets belonging to paragraphs
associated with a list. A paragraph that is part of a list has an implicit
reference to that list's ID.
**/


var List_ = function(listObj){ this.listObj_ = listObj }


/**
*A map of nesting levels to the properties of bullets at the associated
level. A list has at most nine levels of nesting, so the possible values
for the keys of this map are 0 through 8, inclusive.
**/
List_.prototype.NestingLevel = function(){var newObj = {};Object.keys(this.listObj_.nestingLevel).map(function(key){Object.defineProperty(newObj, key , {value: function(){return new NestingLevel_(this.listObj_.nestingLevel)}})}); return newObj;};
/**
*The ID of the list.
**/
List_.prototype.ListId = function(){return this.listObj_.listId}


/**
*The result of creating a video.
**/


var CreateVideoResponse_ = function(createVideoResponseObj){ this.createVideoResponseObj_ = createVideoResponseObj }


/**
*The object ID of the created video.
**/
CreateVideoResponse_.prototype.ObjectId = function(){return this.createVideoResponseObj_.objectId}


/**
*Inserts rows into a table.
**/


var InsertTableRowsRequest_ = function(insertTableRowsRequestObj){ this.insertTableRowsRequestObj_ = insertTableRowsRequestObj }


/**
*The table to insert rows into.
**/
InsertTableRowsRequest_.prototype.TableObjectId = function(){return this.insertTableRowsRequestObj_.tableObjectId}


/**
*Whether to insert new rows below the reference cell location.

- `True`: insert below the cell.
- `False`: insert above the cell.
**/
InsertTableRowsRequest_.prototype.InsertBelow = function(){return this.insertTableRowsRequestObj_.insertBelow}


/**
*The reference table cell location from which rows will be inserted.

A new row will be inserted above (or below) the row where the reference
cell is. If the reference cell is a merged cell, a new row will be
inserted above (or below) the merged cell.
**/
InsertTableRowsRequest_.prototype.CellLocation = function(){return new TableCellLocation_( this.insertTableRowsRequestObj_.cellLocation)}
/**
*The number of rows to be inserted. Maximum 20 per request.
**/
InsertTableRowsRequest_.prototype.Number = function(){return this.insertTableRowsRequestObj_.number}


/**
*Update the properties of a Video.
**/


var UpdateVideoPropertiesRequest_ = function(updateVideoPropertiesRequestObj){ this.updateVideoPropertiesRequestObj_ = updateVideoPropertiesRequestObj }


/**
*The video properties to update.
**/
UpdateVideoPropertiesRequest_.prototype.VideoProperties = function(){return new VideoProperties_( this.updateVideoPropertiesRequestObj_.videoProperties)}
/**
*The object ID of the video the updates are applied to.
**/
UpdateVideoPropertiesRequest_.prototype.ObjectId = function(){return this.updateVideoPropertiesRequestObj_.objectId}


/**
*The fields that should be updated.

At least one field must be specified. The root `videoProperties` is
implied and should not be specified. A single `"*"` can be used as
short-hand for listing every field.

For example to update the video outline color, set `fields` to
`"outline.outlineFill.solidFill.color"`.

To reset a property to its default value, include its field name in the
field mask but leave the field itself unset.
**/
UpdateVideoPropertiesRequest_.prototype.Fields = function(){return this.updateVideoPropertiesRequestObj_.fields}


/**
*A themeable solid color value.
**/


var OpaqueColor_ = function(opaqueColorObj){ this.opaqueColorObj_ = opaqueColorObj }


/**
*An opaque RGB color.
**/
OpaqueColor_.prototype.RgbColor = function(){return new RgbColor_( this.opaqueColorObj_.rgbColor)}
/**
*An opaque theme color.
**/
OpaqueColor_.prototype.ThemeColor = function(){return this.opaqueColorObj_.themeColor}


/**
*A single response from an update.
**/


var Response_ = function(responseObj){ this.responseObj_ = responseObj }


/**
*The result of creating a table.
**/
Response_.prototype.CreateTable = function(){return new CreateTableResponse_( this.responseObj_.createTable)}
/**
*The result of replacing text.
**/
Response_.prototype.ReplaceAllText = function(){return new ReplaceAllTextResponse_( this.responseObj_.replaceAllText)}
/**
*The result of creating a line.
**/
Response_.prototype.CreateLine = function(){return new CreateLineResponse_( this.responseObj_.createLine)}
/**
*The result of creating a Google Sheets chart.
**/
Response_.prototype.CreateSheetsChart = function(){return new CreateSheetsChartResponse_( this.responseObj_.createSheetsChart)}
/**
*The result of creating a slide.
**/
Response_.prototype.CreateSlide = function(){return new CreateSlideResponse_( this.responseObj_.createSlide)}
/**
*The result of creating a shape.
**/
Response_.prototype.CreateShape = function(){return new CreateShapeResponse_( this.responseObj_.createShape)}
/**
*The result of replacing all shapes containing the specified text with
an image.
**/
Response_.prototype.ReplaceAllShapesWithImage = function(){return new ReplaceAllShapesWithImageResponse_( this.responseObj_.replaceAllShapesWithImage)}
/**
*The result of creating a video.
**/
Response_.prototype.CreateVideo = function(){return new CreateVideoResponse_( this.responseObj_.createVideo)}
/**
*The result of creating an image.
**/
Response_.prototype.CreateImage = function(){return new CreateImageResponse_( this.responseObj_.createImage)}
/**
*The result of duplicating an object.
**/
Response_.prototype.DuplicateObject = function(){return new DuplicateObjectResponse_( this.responseObj_.duplicateObject)}
/**
*The properties of the Line.

When unset, these fields default to values that match the appearance of
new lines created in the Slides editor.
**/


var LineProperties_ = function(linePropertiesObj){ this.linePropertiesObj_ = linePropertiesObj }


/**
*The thickness of the line.
**/
LineProperties_.prototype.Weight = function(){return new Dimension_( this.linePropertiesObj_.weight)}
/**
*The style of the arrow at the end of the line.
**/
LineProperties_.prototype.EndArrow = function(){return this.linePropertiesObj_.endArrow}


/**
*The hyperlink destination of the line. If unset, there is no link.
**/
LineProperties_.prototype.Link = function(){return new Link_( this.linePropertiesObj_.link)}
/**
*The fill of the line. The default line fill matches the defaults for new
lines created in the Slides editor.
**/
LineProperties_.prototype.LineFill = function(){return new LineFill_( this.linePropertiesObj_.lineFill)}
/**
*The dash style of the line.
**/
LineProperties_.prototype.DashStyle = function(){return this.linePropertiesObj_.dashStyle}


/**
*The style of the arrow at the beginning of the line.
**/
LineProperties_.prototype.StartArrow = function(){return this.linePropertiesObj_.startArrow}


/**
*A PageElement kind representing a
table.
**/


var Table_ = function(tableObj){ this.tableObj_ = tableObj }


/**
*Number of columns in the table.
**/
Table_.prototype.Columns = function(){return this.tableObj_.columns}


/**
*Properties of each column.
**/
Table_.prototype.TableColumns = function(){return new IteratorService_(this.tableObj_.tableColumns.map(function(element){return new TableColumnProperties_(element)}))}


/**
*Number of rows in the table.
**/
Table_.prototype.Rows = function(){return this.tableObj_.rows}


/**
*Properties and contents of each row.

Cells that span multiple rows are contained in only one of these rows and
have a row_span greater
than 1.
**/
Table_.prototype.TableRows = function(){return new IteratorService_(this.tableObj_.tableRows.map(function(element){return new TableRow_(element)}))}


/**
*Contains properties describing the look and feel of a list bullet at a given
level of nesting.
**/


var NestingLevel_ = function(nestingLevelObj){ this.nestingLevelObj_ = nestingLevelObj }


/**
*The style of a bullet at this level of nesting.
**/
NestingLevel_.prototype.BulletStyle = function(){return new TextStyle_( this.nestingLevelObj_.bulletStyle)}
/**
*The response of duplicating an object.
**/


var DuplicateObjectResponse_ = function(duplicateObjectResponseObj){ this.duplicateObjectResponseObj_ = duplicateObjectResponseObj }


/**
*The ID of the new duplicate object.
**/
DuplicateObjectResponse_.prototype.ObjectId = function(){return this.duplicateObjectResponseObj_.objectId}


/**
*Refreshes an embedded Google Sheets chart by replacing it with the latest
version of the chart from Google Sheets.

NOTE: Refreshing charts requires  at least one of the spreadsheets.readonly,
spreadsheets, drive.readonly, or drive OAuth scopes.
**/


var RefreshSheetsChartRequest_ = function(refreshSheetsChartRequestObj){ this.refreshSheetsChartRequestObj_ = refreshSheetsChartRequestObj }


/**
*The object ID of the chart to refresh.
**/
RefreshSheetsChartRequest_.prototype.ObjectId = function(){return this.refreshSheetsChartRequestObj_.objectId}


/**
*A location of a single table cell within a table.
**/


var TableCellLocation_ = function(tableCellLocationObj){ this.tableCellLocationObj_ = tableCellLocationObj }


/**
*The 0-based row index.
**/
TableCellLocation_.prototype.RowIndex = function(){return this.tableCellLocationObj_.rowIndex}


/**
*The 0-based column index.
**/
TableCellLocation_.prototype.ColumnIndex = function(){return this.tableCellLocationObj_.columnIndex}


/**
*The general text content. The text must reside in a compatible shape (e.g.
text box or rectangle) or a table cell in a page.
**/


var TextContent_ = function(textContentObj){ this.textContentObj_ = textContentObj }


/**
*The bulleted lists contained in this text, keyed by list ID.
**/
TextContent_.prototype.Lists = function(){var newObj = {};Object.keys(this.textContentObj_.lists).map(function(key){Object.defineProperty(newObj, key , {value: function(){return new List_(this.textContentObj_.lists)}})}); return newObj;};
/**
*The text contents broken down into its component parts, including styling
information. This property is read-only.
**/
TextContent_.prototype.TextElements = function(){return new IteratorService_(this.textContentObj_.textElements.map(function(element){return new TextElement_(element)}))}


/**
*A visual element rendered on a page.
**/


var PageElement_ = function(pageElementObj){ this.pageElementObj_ = pageElementObj }


/**
*The description of the page element. Combined with title to display alt
text.
**/
PageElement_.prototype.Description = function(){return this.pageElementObj_.description}


/**
*The title of the page element. Combined with description to display alt
text.
**/
PageElement_.prototype.Title = function(){return this.pageElementObj_.title}


/**
*The transform of the page element.
**/
PageElement_.prototype.Transform = function(){return new AffineTransform_( this.pageElementObj_.transform)}
/**
*A video page element.
**/
PageElement_.prototype.Video = function(){return new Video_( this.pageElementObj_.video)}
/**
*A linked chart embedded from Google Sheets. Unlinked charts are
represented as images.
**/
PageElement_.prototype.SheetsChart = function(){return new SheetsChart_( this.pageElementObj_.sheetsChart)}
/**
*A line page element.
**/
PageElement_.prototype.Line = function(){return new Line_( this.pageElementObj_.line)}
/**
*A table page element.
**/
PageElement_.prototype.Table = function(){return new Table_( this.pageElementObj_.table)}
/**
*A word art page element.
**/
PageElement_.prototype.WordArt = function(){return new WordArt_( this.pageElementObj_.wordArt)}
/**
*A generic shape.
**/
PageElement_.prototype.Shape = function(){return new Shape_( this.pageElementObj_.shape)}
/**
*A collection of page elements joined as a single unit.
**/
PageElement_.prototype.ElementGroup = function(){return new Group_( this.pageElementObj_.elementGroup)}
/**
*An image page element.
**/
PageElement_.prototype.Image = function(){return new Image_( this.pageElementObj_.image)}
/**
*The object ID for this page element. Object IDs used by
google.apps.slides.v1.Page and
google.apps.slides.v1.PageElement share the same namespace.
**/
PageElement_.prototype.ObjectId = function(){return this.pageElementObj_.objectId}


/**
*The size of the page element.
**/
PageElement_.prototype.Size = function(){return new Size_( this.pageElementObj_.size)}
/**
*Updates the properties of a Page.
**/


var UpdatePagePropertiesRequest_ = function(updatePagePropertiesRequestObj){ this.updatePagePropertiesRequestObj_ = updatePagePropertiesRequestObj }


/**
*The object ID of the page the update is applied to.
**/
UpdatePagePropertiesRequest_.prototype.ObjectId = function(){return this.updatePagePropertiesRequestObj_.objectId}


/**
*The fields that should be updated.

At least one field must be specified. The root `pageProperties` is
implied and should not be specified. A single `"*"` can be used as
short-hand for listing every field.

For example to update the page background solid fill color, set `fields`
to `"pageBackgroundFill.solidFill.color"`.

To reset a property to its default value, include its field name in the
field mask but leave the field itself unset.
**/
UpdatePagePropertiesRequest_.prototype.Fields = function(){return this.updatePagePropertiesRequestObj_.fields}


/**
*The page properties to update.
**/
UpdatePagePropertiesRequest_.prototype.PageProperties = function(){return new PageProperties_( this.updatePagePropertiesRequestObj_.pageProperties)}
/**
*Update the properties of a TableCell.
**/


var UpdateTableCellPropertiesRequest_ = function(updateTableCellPropertiesRequestObj){ this.updateTableCellPropertiesRequestObj_ = updateTableCellPropertiesRequestObj }


/**
*The object ID of the table.
**/
UpdateTableCellPropertiesRequest_.prototype.ObjectId = function(){return this.updateTableCellPropertiesRequestObj_.objectId}


/**
*The table range representing the subset of the table to which the updates
are applied. If a table range is not specified, the updates will apply to
the entire table.
**/
UpdateTableCellPropertiesRequest_.prototype.TableRange = function(){return new TableRange_( this.updateTableCellPropertiesRequestObj_.tableRange)}
/**
*The fields that should be updated.

At least one field must be specified. The root `tableCellProperties` is
implied and should not be specified. A single `"*"` can be used as
short-hand for listing every field.

For example to update the table cell background solid fill color, set
`fields` to `"tableCellBackgroundFill.solidFill.color"`.

To reset a property to its default value, include its field name in the
field mask but leave the field itself unset.
**/
UpdateTableCellPropertiesRequest_.prototype.Fields = function(){return this.updateTableCellPropertiesRequestObj_.fields}


/**
*The table cell properties to update.
**/
UpdateTableCellPropertiesRequest_.prototype.TableCellProperties = function(){return new TableCellProperties_( this.updateTableCellPropertiesRequestObj_.tableCellProperties)}
/**
*Request message for PresentationsService.BatchUpdatePresentation.
**/


var BatchUpdatePresentationRequest_ = function(batchUpdatePresentationRequestObj){ this.batchUpdatePresentationRequestObj_ = batchUpdatePresentationRequestObj }


/**
*A list of updates to apply to the presentation.
**/
BatchUpdatePresentationRequest_.prototype.Requests = function(){return new IteratorService_(this.batchUpdatePresentationRequestObj_.requests.map(function(element){return new Request_(element)}))}


/**
*A magnitude in a single direction in the specified units.
**/


var Dimension_ = function(dimensionObj){ this.dimensionObj_ = dimensionObj }


/**
*The units for magnitude.
**/
Dimension_.prototype.Unit = function(){return this.dimensionObj_.unit}


/**
*The magnitude.
**/
Dimension_.prototype.Magnitude = function(){return this.dimensionObj_.magnitude}


/**
*The placeholder information that uniquely identifies a placeholder shape.
**/


var Placeholder_ = function(placeholderObj){ this.placeholderObj_ = placeholderObj }


/**
*The index of the placeholder. If the same placeholder types are the present
in the same page, they would have different index values.
**/
Placeholder_.prototype.Index = function(){return this.placeholderObj_.index}


/**
*The type of the placeholder.
**/
Placeholder_.prototype.Type = function(){return this.placeholderObj_.type}


/**
*The object ID of this shape's parent placeholder.
If unset, the parent placeholder shape does not exist, so the shape does
not inherit properties from any other shape.
**/
Placeholder_.prototype.ParentObjectId = function(){return this.placeholderObj_.parentObjectId}


/**
*Creates an embedded Google Sheets chart.

NOTE: Chart creation requires  at least one of the spreadsheets.readonly,
spreadsheets, drive.readonly, or drive OAuth scopes.
**/


var CreateSheetsChartRequest_ = function(createSheetsChartRequestObj){ this.createSheetsChartRequestObj_ = createSheetsChartRequestObj }


/**
*The ID of the specific chart in the Google Sheets spreadsheet.
**/
CreateSheetsChartRequest_.prototype.ChartId = function(){return this.createSheetsChartRequestObj_.chartId}


/**
*A user-supplied object ID.

If specified, the ID must be unique among all pages and page elements in
the presentation. The ID should start with a word character [a-zA-Z0-9_]
and then followed by any number of the following characters [a-zA-Z0-9_-:].
The length of the ID should not be less than 5 or greater than 50.
If empty, a unique identifier will be generated.
**/
CreateSheetsChartRequest_.prototype.ObjectId = function(){return this.createSheetsChartRequestObj_.objectId}


/**
*The ID of the Google Sheets spreadsheet that contains the chart.
**/
CreateSheetsChartRequest_.prototype.SpreadsheetId = function(){return this.createSheetsChartRequestObj_.spreadsheetId}


/**
*The element properties for the chart.

When the aspect ratio of the provided size does not match the chart aspect
ratio, the chart is scaled and centered with respect to the size in order
to maintain aspect ratio. The provided transform is applied after this
operation.
**/
CreateSheetsChartRequest_.prototype.ElementProperties = function(){return new PageElementProperties_( this.createSheetsChartRequestObj_.elementProperties)}
/**
*The mode with which the chart is linked to the source spreadsheet. When
not specified, the chart will be an image that is not linked.
**/
CreateSheetsChartRequest_.prototype.LinkingMode = function(){return this.createSheetsChartRequestObj_.linkingMode}


/**
*Deletes a row from a table.
**/


var DeleteTableRowRequest_ = function(deleteTableRowRequestObj){ this.deleteTableRowRequestObj_ = deleteTableRowRequestObj }


/**
*The table to delete rows from.
**/
DeleteTableRowRequest_.prototype.TableObjectId = function(){return this.deleteTableRowRequestObj_.tableObjectId}


/**
*The reference table cell location from which a row will be deleted.

The row this cell spans will be deleted. If this is a merged cell, multiple
rows will be deleted. If no rows remain in the table after this deletion,
the whole table is deleted.
**/
DeleteTableRowRequest_.prototype.CellLocation = function(){return new TableCellLocation_( this.deleteTableRowRequestObj_.cellLocation)}
/**
*A PageElement kind representing a
video.
**/


var Video_ = function(videoObj){ this.videoObj_ = videoObj }


/**
*An URL to a video. The URL is valid as long as the source video
exists and sharing settings do not change.
**/
Video_.prototype.Url = function(){return this.videoObj_.url}


/**
*The properties of the video.
**/
Video_.prototype.VideoProperties = function(){return new VideoProperties_( this.videoObj_.videoProperties)}
/**
*The video source.
**/
Video_.prototype.Source = function(){return this.videoObj_.source}


/**
*The video source's unique identifier for this video.
**/
Video_.prototype.Id = function(){return this.videoObj_.id}


/**
*A hypertext link.
**/


var Link_ = function(linkObj){ this.linkObj_ = linkObj }


/**
*If set, indicates this is a link to the external web page at this URL.
**/
Link_.prototype.Url = function(){return this.linkObj_.url}


/**
*If set, indicates this is a link to a slide in this presentation,
addressed by its position.
**/
Link_.prototype.RelativeLink = function(){return this.linkObj_.relativeLink}


/**
*If set, indicates this is a link to the slide at this zero-based index
in the presentation. There may not be a slide at this index.
**/
Link_.prototype.SlideIndex = function(){return this.linkObj_.slideIndex}


/**
*If set, indicates this is a link to the specific page in this
presentation with this ID. A page with this ID may not exist.
**/
Link_.prototype.PageObjectId = function(){return this.linkObj_.pageObjectId}


/**
*The page background fill.
**/


var PageBackgroundFill_ = function(pageBackgroundFillObj){ this.pageBackgroundFillObj_ = pageBackgroundFillObj }


/**
*Stretched picture fill.
**/
PageBackgroundFill_.prototype.StretchedPictureFill = function(){return new StretchedPictureFill_( this.pageBackgroundFillObj_.stretchedPictureFill)}
/**
*The background fill property state.

Updating the the fill on a page will implicitly update this field to
`RENDERED`, unless another value is specified in the same request. To
have no fill on a page, set this field to `NOT_RENDERED`. In this case,
any other fill fields set in the same request will be ignored.
**/
PageBackgroundFill_.prototype.PropertyState = function(){return this.pageBackgroundFillObj_.propertyState}


/**
*Solid color fill.
**/
PageBackgroundFill_.prototype.SolidFill = function(){return new SolidFill_( this.pageBackgroundFillObj_.solidFill)}
/**
*A color and position in a gradient band.
**/


var ColorStop_ = function(colorStopObj){ this.colorStopObj_ = colorStopObj }


/**
*The color of the gradient stop.
**/
ColorStop_.prototype.Color = function(){return new OpaqueColor_( this.colorStopObj_.color)}
/**
*The relative position of the color stop in the gradient band measured
in percentage. The value should be in the interval [0.0, 1.0].
**/
ColorStop_.prototype.Position = function(){return this.colorStopObj_.position}


/**
*The alpha value of this color in the gradient band. Defaults to 1.0,
fully opaque.
**/
ColorStop_.prototype.Alpha = function(){return this.colorStopObj_.alpha}


/**
*A pair mapping a theme color type to the concrete color it represents.
**/


var ThemeColorPair_ = function(themeColorPairObj){ this.themeColorPairObj_ = themeColorPairObj }


/**
*The concrete color corresponding to the theme color type above.
**/
ThemeColorPair_.prototype.Color = function(){return new RgbColor_( this.themeColorPairObj_.color)}
/**
*The type of the theme color.
**/
ThemeColorPair_.prototype.Type = function(){return this.themeColorPairObj_.type}


/**
*Replaces all shapes that match the given criteria with the provided image.
**/


var ReplaceAllShapesWithImageRequest_ = function(replaceAllShapesWithImageRequestObj){ this.replaceAllShapesWithImageRequestObj_ = replaceAllShapesWithImageRequestObj }


/**
*The replace method.
**/
ReplaceAllShapesWithImageRequest_.prototype.ReplaceMethod = function(){return this.replaceAllShapesWithImageRequestObj_.replaceMethod}


/**
*If set, this request will replace all of the shapes that contain the
given text.
**/
ReplaceAllShapesWithImageRequest_.prototype.ContainsText = function(){return new SubstringMatchCriteria_( this.replaceAllShapesWithImageRequestObj_.containsText)}
/**
*The image URL.

The image is fetched once at insertion time and a copy is stored for
display inside the presentation. Images must be less than 50MB in size,
cannot exceed 25 megapixels, and must be in either in PNG, JPEG, or GIF
format.
**/
ReplaceAllShapesWithImageRequest_.prototype.ImageUrl = function(){return this.replaceAllShapesWithImageRequestObj_.imageUrl}


/**
*Deletes an object, either pages or
page elements, from the
presentation.
**/


var DeleteObjectRequest_ = function(deleteObjectRequestObj){ this.deleteObjectRequestObj_ = deleteObjectRequestObj }


/**
*The object ID of the page or page element to delete.

If after a delete operation a group contains
only 1 or no page elements, the group is also deleted.

If a placeholder is deleted on a layout, any empty inheriting shapes are
also deleted.
**/
DeleteObjectRequest_.prototype.ObjectId = function(){return this.deleteObjectRequestObj_.objectId}


/**
*The result of creating an image.
**/


var CreateImageResponse_ = function(createImageResponseObj){ this.createImageResponseObj_ = createImageResponseObj }


/**
*The object ID of the created image.
**/
CreateImageResponse_.prototype.ObjectId = function(){return this.createImageResponseObj_.objectId}


/**
*A recolor effect applied on an image.
**/


var Recolor_ = function(recolorObj){ this.recolorObj_ = recolorObj }


/**
*The recolor effect is represented by a gradient, which is a list of color
stops. This property is read-only.
**/
Recolor_.prototype.RecolorStops = function(){return new IteratorService_(this.recolorObj_.recolorStops.map(function(element){return new ColorStop_(element)}))}


/**
*Represents the styling that can be applied to a TextRun.

If this text is contained in a shape with a parent placeholder, then these text styles may be
inherited from the parent. Which text styles are inherited depend on the
nesting level of lists:

* A text run in a paragraph that is not in a list will inherit its text style
  from the the newline character in the paragraph at the 0 nesting level of
  the list inside the parent placeholder.
* A text run in a paragraph that is in a list will inherit its text style
  from the newline character in the paragraph at its corresponding nesting
  level of the list inside the parent placeholder.

Inherited text styles are represented as unset fields in this message. If
text is contained in a shape without a parent placeholder, unsetting these
fields will revert the style to a value matching the defaults in the Slides
editor.
**/


var TextStyle_ = function(textStyleObj){ this.textStyleObj_ = textStyleObj }


/**
*Whether or not the text is bold.
**/
TextStyle_.prototype.Bold = function(){return this.textStyleObj_.bold}


/**
*Whether or not the text is italicized.
**/
TextStyle_.prototype.Italic = function(){return this.textStyleObj_.italic}


/**
*The text's vertical offset from its normal position.

Text with `SUPERSCRIPT` or `SUBSCRIPT` baseline offsets is automatically
rendered in a smaller font size, computed based on the `font_size` field.
The `font_size` itself is not affected by changes in this field.
**/
TextStyle_.prototype.BaselineOffset = function(){return this.textStyleObj_.baselineOffset}


/**
*The color of the text itself. If set, the color is either opaque or
transparent, depending on if the `opaque_color` field in it is set.
**/
TextStyle_.prototype.ForegroundColor = function(){return new OptionalColor_( this.textStyleObj_.foregroundColor)}
/**
*The font family of the text.

The font family can be any font from the Font menu in Slides or from
[Google Fonts] (https://fonts.google.com/). If the font name is
unrecognized, the text is rendered in `Arial`.

Some fonts can affect the weight of the text. If an update request
specifies values for both `font_family` and `bold`, the explicitly-set
`bold` value is used.
**/
TextStyle_.prototype.FontFamily = function(){return this.textStyleObj_.fontFamily}


/**
*Whether or not the text is struck through.
**/
TextStyle_.prototype.Strikethrough = function(){return this.textStyleObj_.strikethrough}


/**
*The hyperlink destination of the text. If unset, there is no link. Links
are not inherited from parent text.

Changing the link in an update request causes some other changes to the
text style of the range:

* When setting a link, the text foreground color will be set to
  ThemeColorType.HYPERLINK and the text will
  be underlined. If these fields are modified in the same
  request, those values will be used instead of the link defaults.
* Setting a link on a text range that overlaps with an existing link will
  also update the existing link to point to the new URL.
* Links are not settable on newline characters. As a result, setting a link
  on a text range that crosses a paragraph boundary, such as `"ABC\n123"`,
  will separate the newline character(s) into their own text runs. The
  link will be applied separately to the runs before and after the newline.
* Removing a link will update the text style of the range to match the
  style of the preceding text (or the default text styles if the preceding
  text is another link) unless different styles are being set in the same
  request.
**/
TextStyle_.prototype.Link = function(){return new Link_( this.textStyleObj_.link)}
/**
*Whether or not the text is in small capital letters.
**/
TextStyle_.prototype.SmallCaps = function(){return this.textStyleObj_.smallCaps}


/**
*The background color of the text. If set, the color is either opaque or
transparent, depending on if the `opaque_color` field in it is set.
**/
TextStyle_.prototype.BackgroundColor = function(){return new OptionalColor_( this.textStyleObj_.backgroundColor)}
/**
*The size of the text's font. When read, the `font_size` will specified in
points.
**/
TextStyle_.prototype.FontSize = function(){return new Dimension_( this.textStyleObj_.fontSize)}
/**
*Whether or not the text is underlined.
**/
TextStyle_.prototype.Underline = function(){return this.textStyleObj_.underline}


/**
*Updates the properties of a Line.
**/


var UpdateLinePropertiesRequest_ = function(updateLinePropertiesRequestObj){ this.updateLinePropertiesRequestObj_ = updateLinePropertiesRequestObj }


/**
*The object ID of the line the update is applied to.
**/
UpdateLinePropertiesRequest_.prototype.ObjectId = function(){return this.updateLinePropertiesRequestObj_.objectId}


/**
*The line properties to update.
**/
UpdateLinePropertiesRequest_.prototype.LineProperties = function(){return new LineProperties_( this.updateLinePropertiesRequestObj_.lineProperties)}
/**
*The fields that should be updated.

At least one field must be specified. The root `lineProperties` is
implied and should not be specified. A single `"*"` can be used as
short-hand for listing every field.

For example to update the line solid fill color, set `fields` to
`"lineFill.solidFill.color"`.

To reset a property to its default value, include its field name in the
field mask but leave the field itself unset.
**/
UpdateLinePropertiesRequest_.prototype.Fields = function(){return this.updateLinePropertiesRequestObj_.fields}


/**
*The table cell background fill.
**/


var TableCellBackgroundFill_ = function(tableCellBackgroundFillObj){ this.tableCellBackgroundFillObj_ = tableCellBackgroundFillObj }


/**
*The background fill property state.

Updating the the fill on a table cell will implicitly update this field
to `RENDERED`, unless another value is specified in the same request. To
have no fill on a table cell, set this field to `NOT_RENDERED`. In this
case, any other fill fields set in the same request will be ignored.
**/
TableCellBackgroundFill_.prototype.PropertyState = function(){return this.tableCellBackgroundFillObj_.propertyState}


/**
*Solid color fill.
**/
TableCellBackgroundFill_.prototype.SolidFill = function(){return new SolidFill_( this.tableCellBackgroundFillObj_.solidFill)}
/**
*A solid color fill. The page or page element is filled entirely with the
specified color value.

If any field is unset, its value may be inherited from a parent placeholder
if it exists.
**/


var SolidFill_ = function(solidFillObj){ this.solidFillObj_ = solidFillObj }


/**
*The color value of the solid fill.
**/
SolidFill_.prototype.Color = function(){return new OpaqueColor_( this.solidFillObj_.color)}
/**
*The fraction of this `color` that should be applied to the pixel.
That is, the final pixel color is defined by the equation:

  pixel color = alpha * (color) + (1.0 - alpha) * (background color)

This means that a value of 1.0 corresponds to a solid color, whereas
a value of 0.0 corresponds to a completely transparent color.
**/
SolidFill_.prototype.Alpha = function(){return this.solidFillObj_.alpha}


/**
*Duplicates a slide or page element.

When duplicating a slide, the duplicate slide will be created immediately
following the specified slide. When duplicating a page element, the duplicate
will be placed on the same page at the same position as the original.
**/


var DuplicateObjectRequest_ = function(duplicateObjectRequestObj){ this.duplicateObjectRequestObj_ = duplicateObjectRequestObj }


/**
*The ID of the object to duplicate.
**/
DuplicateObjectRequest_.prototype.ObjectId = function(){return this.duplicateObjectRequestObj_.objectId}


/**
*The object being duplicated may contain other objects, for example when
duplicating a slide or a group page element. This map defines how the IDs
of duplicated objects are generated: the keys are the IDs of the original
objects and its values are the IDs that will be assigned to the
corresponding duplicate object. The ID of the source object's duplicate
may be specified in this map as well, using the same value of the
`object_id` field as a key and the newly desired ID as the value.

All keys must correspond to existing IDs in the presentation. All values
must be unique in the presentation and must start with an alphanumeric
character or an underscore (matches regex `[a-zA-Z0-9_]`); remaining
characters may include those as well as a hyphen or colon (matches regex
`[a-zA-Z0-9_-:]`). The length of the new ID must not be less than 5 or
greater than 50.

If any IDs of source objects are omitted from the map, a new random ID will
be assigned. If the map is empty or unset, all duplicate objects will
receive a new random ID.
**/
DuplicateObjectRequest_.prototype.ObjectIds = function(){var newObj = {};Object.keys(this.duplicateObjectRequestObj_.objectIds).map(function(key){Object.defineProperty(newObj, key , {value: function(){return new undefined_(this.duplicateObjectRequestObj_.objectIds)}})}); return newObj;};
/**
*A PageElement kind representing
a linked chart embedded from Google Sheets.
**/


var SheetsChart_ = function(sheetsChartObj){ this.sheetsChartObj_ = sheetsChartObj }


/**
*The ID of the specific chart in the Google Sheets spreadsheet that is
embedded.
**/
SheetsChart_.prototype.ChartId = function(){return this.sheetsChartObj_.chartId}


/**
*The ID of the Google Sheets spreadsheet that contains the source chart.
**/
SheetsChart_.prototype.SpreadsheetId = function(){return this.sheetsChartObj_.spreadsheetId}


/**
*The properties of the Sheets chart.
**/
SheetsChart_.prototype.SheetsChartProperties = function(){return new SheetsChartProperties_( this.sheetsChartObj_.sheetsChartProperties)}
/**
*The URL of an image of the embedded chart, with a default lifetime of 30
minutes. This URL is tagged with the account of the requester. Anyone with
the URL effectively accesses the image as the original requester. Access to
the image may be lost if the presentation's sharing settings change.
**/
SheetsChart_.prototype.ContentUrl = function(){return this.sheetsChartObj_.contentUrl}


/**
*The properties of the Page.

The page will inherit properties from the parent page. Depending on the page
type the hierarchy is defined in either
SlideProperties or
LayoutProperties.
**/


var PageProperties_ = function(pagePropertiesObj){ this.pagePropertiesObj_ = pagePropertiesObj }


/**
*The background fill of the page. If unset, the background fill is inherited
from a parent page if it exists. If the page has no parent, then the
background fill defaults to the corresponding fill in the Slides editor.
**/
PageProperties_.prototype.PageBackgroundFill = function(){return new PageBackgroundFill_( this.pagePropertiesObj_.pageBackgroundFill)}
/**
*The color scheme of the page. If unset, the color scheme is inherited from
a parent page. If the page has no parent, the color scheme uses a default
Slides color scheme. This field is read-only.
**/
PageProperties_.prototype.ColorScheme = function(){return new ColorScheme_( this.pagePropertiesObj_.colorScheme)}
/**
*The shadow properties of a page element.

If these fields are unset, they may be inherited from a parent placeholder
if it exists. If there is no parent, the fields will default to the value
used for new page elements created in the Slides editor, which may depend on
the page element kind.
**/


var Shadow_ = function(shadowObj){ this.shadowObj_ = shadowObj }


/**
*The alignment point of the shadow, that sets the origin for translate,
scale and skew of the shadow.
**/
Shadow_.prototype.Alignment = function(){return this.shadowObj_.alignment}


/**
*Whether the shadow should rotate with the shape.
**/
Shadow_.prototype.RotateWithShape = function(){return this.shadowObj_.rotateWithShape}


/**
*Transform that encodes the translate, scale, and skew of the shadow,
relative to the alignment position.
**/
Shadow_.prototype.Transform = function(){return new AffineTransform_( this.shadowObj_.transform)}
/**
*The shadow color value.
**/
Shadow_.prototype.Color = function(){return new OpaqueColor_( this.shadowObj_.color)}
/**
*The radius of the shadow blur. The larger the radius, the more diffuse the
shadow becomes.
**/
Shadow_.prototype.BlurRadius = function(){return new Dimension_( this.shadowObj_.blurRadius)}
/**
*The shadow property state.

Updating the the shadow on a page element will implicitly update this field
to `RENDERED`, unless another value is specified in the same request. To
have no shadow on a page element, set this field to `NOT_RENDERED`. In this
case, any other shadow fields set in the same request will be ignored.
**/
Shadow_.prototype.PropertyState = function(){return this.shadowObj_.propertyState}


/**
*The alpha of the shadow's color, from 0.0 to 1.0.
**/
Shadow_.prototype.Alpha = function(){return this.shadowObj_.alpha}


/**
*The type of the shadow.
**/
Shadow_.prototype.Type = function(){return this.shadowObj_.type}


/**
*Slide layout reference. This may reference either:

- A predefined layout
- One of the layouts in the presentation.
**/


var LayoutReference_ = function(layoutReferenceObj){ this.layoutReferenceObj_ = layoutReferenceObj }


/**
*Predefined layout.
**/
LayoutReference_.prototype.PredefinedLayout = function(){return this.layoutReferenceObj_.predefinedLayout}


/**
*Layout ID: the object ID of one of the layouts in the presentation.
**/
LayoutReference_.prototype.LayoutId = function(){return this.layoutReferenceObj_.layoutId}


/**
*The result of creating an embedded Google Sheets chart.
**/


var CreateSheetsChartResponse_ = function(createSheetsChartResponseObj){ this.createSheetsChartResponseObj_ = createSheetsChartResponseObj }


/**
*The object ID of the created chart.
**/
CreateSheetsChartResponse_.prototype.ObjectId = function(){return this.createSheetsChartResponseObj_.objectId}


/**
*The result of replacing text.
**/


var ReplaceAllTextResponse_ = function(replaceAllTextResponseObj){ this.replaceAllTextResponseObj_ = replaceAllTextResponseObj }


/**
*The number of occurrences changed by replacing all text.
**/
ReplaceAllTextResponse_.prototype.OccurrencesChanged = function(){return this.replaceAllTextResponseObj_.occurrencesChanged}


/**
*The properties of Page are only
relevant for pages with page_type LAYOUT.
**/


var LayoutProperties_ = function(layoutPropertiesObj){ this.layoutPropertiesObj_ = layoutPropertiesObj }


/**
*The human readable name of the layout in the presentation's locale.
**/
LayoutProperties_.prototype.DisplayName = function(){return this.layoutPropertiesObj_.displayName}


/**
*The object ID of the master that this layout is based on.
**/
LayoutProperties_.prototype.MasterObjectId = function(){return this.layoutPropertiesObj_.masterObjectId}


/**
*The name of the layout.
**/
LayoutProperties_.prototype.Name = function(){return this.layoutPropertiesObj_.name}


/**
*Inserts columns into a table.

Other columns in the table will be resized to fit the new column.
**/


var InsertTableColumnsRequest_ = function(insertTableColumnsRequestObj){ this.insertTableColumnsRequestObj_ = insertTableColumnsRequestObj }


/**
*The table to insert columns into.
**/
InsertTableColumnsRequest_.prototype.TableObjectId = function(){return this.insertTableColumnsRequestObj_.tableObjectId}


/**
*Whether to insert new columns to the right of the reference cell location.

- `True`: insert to the right.
- `False`: insert to the left.
**/
InsertTableColumnsRequest_.prototype.InsertRight = function(){return this.insertTableColumnsRequestObj_.insertRight}


/**
*The reference table cell location from which columns will be inserted.

A new column will be inserted to the left (or right) of the column where
the reference cell is. If the reference cell is a merged cell, a new
column will be inserted to the left (or right) of the merged cell.
**/
InsertTableColumnsRequest_.prototype.CellLocation = function(){return new TableCellLocation_( this.insertTableColumnsRequestObj_.cellLocation)}
/**
*The number of columns to be inserted. Maximum 20 per request.
**/
InsertTableColumnsRequest_.prototype.Number = function(){return this.insertTableColumnsRequestObj_.number}


/**
*Deletes a column from a table.
**/


var DeleteTableColumnRequest_ = function(deleteTableColumnRequestObj){ this.deleteTableColumnRequestObj_ = deleteTableColumnRequestObj }


/**
*The table to delete columns from.
**/
DeleteTableColumnRequest_.prototype.TableObjectId = function(){return this.deleteTableColumnRequestObj_.tableObjectId}


/**
*The reference table cell location from which a column will be deleted.

The column this cell spans will be deleted. If this is a merged cell,
multiple columns will be deleted. If no columns remain in the table after
this deletion, the whole table is deleted.
**/
DeleteTableColumnRequest_.prototype.CellLocation = function(){return new TableCellLocation_( this.deleteTableColumnRequestObj_.cellLocation)}
/**
*Properties and contents of each row in a table.
**/


var TableRow_ = function(tableRowObj){ this.tableRowObj_ = tableRowObj }


/**
*Height of a row.
**/
TableRow_.prototype.RowHeight = function(){return new Dimension_( this.tableRowObj_.rowHeight)}
/**
*Properties and contents of each cell.

Cells that span multiple columns are represented only once with a
column_span greater
than 1. As a result, the length of this collection does not always match
the number of columns of the entire table.
**/
TableRow_.prototype.TableCells = function(){return new IteratorService_(this.tableRowObj_.tableCells.map(function(element){return new TableCell_(element)}))}


/**
*AffineTransform uses a 3x3 matrix with an implied last row of [ 0 0 1 ]
to transform source coordinates (x,y) into destination coordinates (x', y')
according to:

      x'  x  =   shear_y  scale_y  translate_y  
      1  [ 1 ]

After transformation,

     x' = scale_x * x + shear_x * y + translate_x;
     y' = scale_y * y + shear_y * x + translate_y;

This message is therefore composed of these six matrix elements.
**/


var AffineTransform_ = function(affineTransformObj){ this.affineTransformObj_ = affineTransformObj }


/**
*The units for translate elements.
**/
AffineTransform_.prototype.Unit = function(){return this.affineTransformObj_.unit}


/**
*The Y coordinate shearing element.
**/
AffineTransform_.prototype.ShearY = function(){return this.affineTransformObj_.shearY}


/**
*The X coordinate translation element.
**/
AffineTransform_.prototype.TranslateX = function(){return this.affineTransformObj_.translateX}


/**
*The X coordinate shearing element.
**/
AffineTransform_.prototype.ShearX = function(){return this.affineTransformObj_.shearX}


/**
*The Y coordinate scaling element.
**/
AffineTransform_.prototype.ScaleY = function(){return this.affineTransformObj_.scaleY}


/**
*The X coordinate scaling element.
**/
AffineTransform_.prototype.ScaleX = function(){return this.affineTransformObj_.scaleX}


/**
*The Y coordinate translation element.
**/
AffineTransform_.prototype.TranslateY = function(){return this.affineTransformObj_.translateY}


/**
*Creates a new shape.
**/


var CreateShapeRequest_ = function(createShapeRequestObj){ this.createShapeRequestObj_ = createShapeRequestObj }


/**
*A user-supplied object ID.

If you specify an ID, it must be unique among all pages and page elements
in the presentation. The ID must start with an alphanumeric character or an
underscore (matches regex `[a-zA-Z0-9_]`); remaining characters
may include those as well as a hyphen or colon (matches regex
`[a-zA-Z0-9_-:]`).
The length of the ID must not be less than 5 or greater than 50.
If empty, a unique identifier will be generated.
**/
CreateShapeRequest_.prototype.ObjectId = function(){return this.createShapeRequestObj_.objectId}


/**
*The shape type.
**/
CreateShapeRequest_.prototype.ShapeType = function(){return this.createShapeRequestObj_.shapeType}


/**
*The element properties for the shape.
**/
CreateShapeRequest_.prototype.ElementProperties = function(){return new PageElementProperties_( this.createShapeRequestObj_.elementProperties)}
/**
*The shape background fill.
**/


var ShapeBackgroundFill_ = function(shapeBackgroundFillObj){ this.shapeBackgroundFillObj_ = shapeBackgroundFillObj }


/**
*The background fill property state.

Updating the the fill on a shape will implicitly update this field to
`RENDERED`, unless another value is specified in the same request. To
have no fill on a shape, set this field to `NOT_RENDERED`. In this case,
any other fill fields set in the same request will be ignored.
**/
ShapeBackgroundFill_.prototype.PropertyState = function(){return this.shapeBackgroundFillObj_.propertyState}


/**
*Solid color fill.
**/
ShapeBackgroundFill_.prototype.SolidFill = function(){return new SolidFill_( this.shapeBackgroundFillObj_.solidFill)}
/**
*A PageElement kind representing a
line, curved connector, or bent connector.
**/


var Line_ = function(lineObj){ this.lineObj_ = lineObj }


/**
*The properties of the line.
**/
Line_.prototype.LineProperties = function(){return new LineProperties_( this.lineObj_.lineProperties)}
/**
*The type of the line.
**/
Line_.prototype.LineType = function(){return this.lineObj_.lineType}


/**
*The properties of the SheetsChart.
**/


var SheetsChartProperties_ = function(sheetsChartPropertiesObj){ this.sheetsChartPropertiesObj_ = sheetsChartPropertiesObj }


/**
*The properties of the embedded chart image.
**/
SheetsChartProperties_.prototype.ChartImageProperties = function(){return new ImageProperties_( this.sheetsChartPropertiesObj_.chartImageProperties)}
/**
*A TextElement kind that represents auto text.
**/


var AutoText_ = function(autoTextObj){ this.autoTextObj_ = autoTextObj }


/**
*The styling applied to this auto text.
**/
AutoText_.prototype.Style = function(){return new TextStyle_( this.autoTextObj_.style)}
/**
*The type of this auto text.
**/
AutoText_.prototype.Type = function(){return this.autoTextObj_.type}


/**
*The rendered content of this auto text, if available.
**/
AutoText_.prototype.Content = function(){return this.autoTextObj_.content}


/**
*A TextElement describes the content of a range of indices in the text content
of a Shape or TableCell.
**/


var TextElement_ = function(textElementObj){ this.textElementObj_ = textElementObj }


/**
*The zero-based end index of this text element, exclusive, in Unicode code
units.
**/
TextElement_.prototype.EndIndex = function(){return this.textElementObj_.endIndex}


/**
*A TextElement representing a run of text where all of the characters
in the run have the same TextStyle.

The `start_index` and `end_index` of TextRuns will always be fully
contained in the index range of a single `paragraph_marker` TextElement.
In other words, a TextRun will never span multiple paragraphs.
**/
TextElement_.prototype.TextRun = function(){return new TextRun_( this.textElementObj_.textRun)}
/**
*The zero-based start index of this text element, in Unicode code units.
**/
TextElement_.prototype.StartIndex = function(){return this.textElementObj_.startIndex}


/**
*A marker representing the beginning of a new paragraph.

The `start_index` and `end_index` of this TextElement represent the
range of the paragraph. Other TextElements with an index range contained
inside this paragraph's range are considered to be part of this
paragraph. The range of indices of two separate paragraphs will never
overlap.
**/
TextElement_.prototype.ParagraphMarker = function(){return new ParagraphMarker_( this.textElementObj_.paragraphMarker)}
/**
*A TextElement representing a spot in the text that is dynamically
replaced with content that can change over time.
**/
TextElement_.prototype.AutoText = function(){return new AutoText_( this.textElementObj_.autoText)}
/**
*Updates the position of slides in the presentation.
**/


var UpdateSlidesPositionRequest_ = function(updateSlidesPositionRequestObj){ this.updateSlidesPositionRequestObj_ = updateSlidesPositionRequestObj }


/**
*The index where the slides should be inserted, based on the slide
arrangement before the move takes place. Must be between zero and the
number of slides in the presentation, inclusive.
**/
UpdateSlidesPositionRequest_.prototype.InsertionIndex = function(){return this.updateSlidesPositionRequestObj_.insertionIndex}


/**
*The IDs of the slides in the presentation that should be moved.
The slides in this list must be in existing presentation order, without
duplicates.
**/
UpdateSlidesPositionRequest_.prototype.SlideObjectIds = function(){return new IteratorService_(this.updateSlidesPositionRequestObj_.slideObjectIds.map(function(element){return new undefined_(element)}))}


/**
*Replaces all instances of text matching a criteria with replace text.
**/


var ReplaceAllTextRequest_ = function(replaceAllTextRequestObj){ this.replaceAllTextRequestObj_ = replaceAllTextRequestObj }


/**
*Finds text in a shape matching this substring.
**/
ReplaceAllTextRequest_.prototype.ContainsText = function(){return new SubstringMatchCriteria_( this.replaceAllTextRequestObj_.containsText)}
/**
*The text that will replace the matched text.
**/
ReplaceAllTextRequest_.prototype.ReplaceText = function(){return this.replaceAllTextRequestObj_.replaceText}


/**
*The properties of a Shape.

If the shape is a placeholder shape as determined by the
placeholder field, then these
properties may be inherited from a parent placeholder shape.
Determining the rendered value of the property depends on the corresponding
property_state field value.
**/


var ShapeProperties_ = function(shapePropertiesObj){ this.shapePropertiesObj_ = shapePropertiesObj }


/**
*The outline of the shape. If unset, the outline is inherited from a
parent placeholder if it exists. If the shape has no parent, then the
default outline depends on the shape type, matching the defaults for
new shapes created in the Slides editor.
**/
ShapeProperties_.prototype.Outline = function(){return new Outline_( this.shapePropertiesObj_.outline)}
/**
*The hyperlink destination of the shape. If unset, there is no link. Links
are not inherited from parent placeholders.
**/
ShapeProperties_.prototype.Link = function(){return new Link_( this.shapePropertiesObj_.link)}
/**
*The background fill of the shape. If unset, the background fill is
inherited from a parent placeholder if it exists. If the shape has no
parent, then the default background fill depends on the shape type,
matching the defaults for new shapes created in the Slides editor.
**/
ShapeProperties_.prototype.ShapeBackgroundFill = function(){return new ShapeBackgroundFill_( this.shapePropertiesObj_.shapeBackgroundFill)}
/**
*The shadow properties of the shape. If unset, the shadow is inherited from
a parent placeholder if it exists. If the shape has no parent, then the
default shadow matches the defaults for new shapes created in the Slides
editor. This property is read-only.
**/
ShapeProperties_.prototype.Shadow = function(){return new Shadow_( this.shapePropertiesObj_.shadow)}
/**
*Creates a line.
**/


var CreateLineRequest_ = function(createLineRequestObj){ this.createLineRequestObj_ = createLineRequestObj }


/**
*A user-supplied object ID.

If you specify an ID, it must be unique among all pages and page elements
in the presentation. The ID must start with an alphanumeric character or an
underscore (matches regex `[a-zA-Z0-9_]`); remaining characters
may include those as well as a hyphen or colon (matches regex
`[a-zA-Z0-9_-:]`).
The length of the ID must not be less than 5 or greater than 50.

If you don't specify an ID, a unique one is generated.
**/
CreateLineRequest_.prototype.ObjectId = function(){return this.createLineRequestObj_.objectId}


/**
*The element properties for the line.
**/
CreateLineRequest_.prototype.ElementProperties = function(){return new PageElementProperties_( this.createLineRequestObj_.elementProperties)}
/**
*The category of line to be created.
**/
CreateLineRequest_.prototype.LineCategory = function(){return this.createLineRequestObj_.lineCategory}


/**
*The result of creating a shape.
**/


var CreateShapeResponse_ = function(createShapeResponseObj){ this.createShapeResponseObj_ = createShapeResponseObj }


/**
*The object ID of the created shape.
**/
CreateShapeResponse_.prototype.ObjectId = function(){return this.createShapeResponseObj_.objectId}


/**
*The result of creating a slide.
**/


var CreateSlideResponse_ = function(createSlideResponseObj){ this.createSlideResponseObj_ = createSlideResponseObj }


/**
*The object ID of the created slide.
**/
CreateSlideResponse_.prototype.ObjectId = function(){return this.createSlideResponseObj_.objectId}


/**
*Update the properties of an Image.
**/


var UpdateImagePropertiesRequest_ = function(updateImagePropertiesRequestObj){ this.updateImagePropertiesRequestObj_ = updateImagePropertiesRequestObj }


/**
*The object ID of the image the updates are applied to.
**/
UpdateImagePropertiesRequest_.prototype.ObjectId = function(){return this.updateImagePropertiesRequestObj_.objectId}


/**
*The fields that should be updated.

At least one field must be specified. The root `imageProperties` is
implied and should not be specified. A single `"*"` can be used as
short-hand for listing every field.

For example to update the image outline color, set `fields` to
`"outline.outlineFill.solidFill.color"`.

To reset a property to its default value, include its field name in the
field mask but leave the field itself unset.
**/
UpdateImagePropertiesRequest_.prototype.Fields = function(){return this.updateImagePropertiesRequestObj_.fields}


/**
*The image properties to update.
**/
UpdateImagePropertiesRequest_.prototype.ImageProperties = function(){return new ImageProperties_( this.updateImagePropertiesRequestObj_.imageProperties)}
/**
*Creates a video.
**/


var CreateVideoRequest_ = function(createVideoRequestObj){ this.createVideoRequestObj_ = createVideoRequestObj }


/**
*A user-supplied object ID.

If you specify an ID, it must be unique among all pages and page elements
in the presentation. The ID must start with an alphanumeric character or an
underscore (matches regex `[a-zA-Z0-9_]`); remaining characters
may include those as well as a hyphen or colon (matches regex
`[a-zA-Z0-9_-:]`).
The length of the ID must not be less than 5 or greater than 50.

If you don't specify an ID, a unique one is generated.
**/
CreateVideoRequest_.prototype.ObjectId = function(){return this.createVideoRequestObj_.objectId}


/**
*The video source.
**/
CreateVideoRequest_.prototype.Source = function(){return this.createVideoRequestObj_.source}


/**
*The element properties for the video.
**/
CreateVideoRequest_.prototype.ElementProperties = function(){return new PageElementProperties_( this.createVideoRequestObj_.elementProperties)}
/**
*The video source's unique identifier for this video.

e.g. For YouTube video https://www.youtube.com/watch?v=7U3axjORYZ0,
the ID is 7U3axjORYZ0.
**/
CreateVideoRequest_.prototype.Id = function(){return this.createVideoRequestObj_.id}


/**
*Creates a new table.
**/


var CreateTableRequest_ = function(createTableRequestObj){ this.createTableRequestObj_ = createTableRequestObj }


/**
*Number of columns in the table.
**/
CreateTableRequest_.prototype.Columns = function(){return this.createTableRequestObj_.columns}


/**
*A user-supplied object ID.

If you specify an ID, it must be unique among all pages and page elements
in the presentation. The ID must start with an alphanumeric character or an
underscore (matches regex `[a-zA-Z0-9_]`); remaining characters
may include those as well as a hyphen or colon (matches regex
`[a-zA-Z0-9_-:]`).
The length of the ID must not be less than 5 or greater than 50.

If you don't specify an ID, a unique one is generated.
**/
CreateTableRequest_.prototype.ObjectId = function(){return this.createTableRequestObj_.objectId}


/**
*Number of rows in the table.
**/
CreateTableRequest_.prototype.Rows = function(){return this.createTableRequestObj_.rows}


/**
*The element properties for the table.

The table will be created at the provided size, subject to a minimum size.
If no size is provided, the table will be automatically sized.

Table transforms must have a scale of 1 and no shear components. If no
transform is provided, the table will be centered on the page.
**/
CreateTableRequest_.prototype.ElementProperties = function(){return new PageElementProperties_( this.createTableRequestObj_.elementProperties)}
/**
*A color that can either be fully opaque or fully transparent.
**/


var OptionalColor_ = function(optionalColorObj){ this.optionalColorObj_ = optionalColorObj }


/**
*If set, this will be used as an opaque color. If unset, this represents
a transparent color.
**/
OptionalColor_.prototype.OpaqueColor = function(){return new OpaqueColor_( this.optionalColorObj_.opaqueColor)}
/**
*A TextElement kind that represents a run of text that all has the same
styling.
**/


var TextRun_ = function(textRunObj){ this.textRunObj_ = textRunObj }


/**
*The styling applied to this run.
**/
TextRun_.prototype.Style = function(){return new TextStyle_( this.textRunObj_.style)}
/**
*The text of this run.
**/
TextRun_.prototype.Content = function(){return this.textRunObj_.content}


/**
*A PageElement kind representing a
generic shape that does not have a more specific classification.
**/


var Shape_ = function(shapeObj){ this.shapeObj_ = shapeObj }


/**
*The text content of the shape.
**/
Shape_.prototype.Text = function(){return new TextContent_( this.shapeObj_.text)}
/**
*The properties of the shape.
**/
Shape_.prototype.ShapeProperties = function(){return new ShapeProperties_( this.shapeObj_.shapeProperties)}
/**
*The type of the shape.
**/
Shape_.prototype.ShapeType = function(){return this.shapeObj_.shapeType}


/**
*Placeholders are shapes that are inherit from corresponding placeholders on
layouts and masters.

If set, the shape is a placeholder shape and any inherited properties
can be resolved by looking at the parent placeholder identified by the
Placeholder.parent_object_id field.
**/
Shape_.prototype.Placeholder = function(){return new Placeholder_( this.shapeObj_.placeholder)}
/**
*Response message from a batch update.
**/


var BatchUpdatePresentationResponse_ = function(batchUpdatePresentationResponseObj){ this.batchUpdatePresentationResponseObj_ = batchUpdatePresentationResponseObj }


/**
*The presentation the updates were applied to.
**/
BatchUpdatePresentationResponse_.prototype.PresentationId = function(){return this.batchUpdatePresentationResponseObj_.presentationId}


/**
*The reply of the updates.  This maps 1:1 with the updates, although
replies to some requests may be empty.
**/
BatchUpdatePresentationResponse_.prototype.Replies = function(){return new IteratorService_(this.batchUpdatePresentationResponseObj_.replies.map(function(element){return new Response_(element)}))}


/**
*The properties of the Image.
**/


var ImageProperties_ = function(imagePropertiesObj){ this.imagePropertiesObj_ = imagePropertiesObj }


/**
*The crop properties of the image. If not set, the image is not cropped.
This property is read-only.
**/
ImageProperties_.prototype.CropProperties = function(){return new CropProperties_( this.imagePropertiesObj_.cropProperties)}
/**
*The outline of the image. If not set, the the image has no outline.
**/
ImageProperties_.prototype.Outline = function(){return new Outline_( this.imagePropertiesObj_.outline)}
/**
*The shadow of the image. If not set, the image has no shadow. This property
is read-only.
**/
ImageProperties_.prototype.Shadow = function(){return new Shadow_( this.imagePropertiesObj_.shadow)}
/**
*The transparency effect of the image. The value should be in the interval
[0.0, 1.0], where 0 means no effect and 1 means completely transparent.
This property is read-only.
**/
ImageProperties_.prototype.Transparency = function(){return this.imagePropertiesObj_.transparency}


/**
*The contrast effect of the image. The value should be in the interval
[-1.0, 1.0], where 0 means no effect. This property is read-only.
**/
ImageProperties_.prototype.Contrast = function(){return this.imagePropertiesObj_.contrast}


/**
*The hyperlink destination of the image. If unset, there is no link.
**/
ImageProperties_.prototype.Link = function(){return new Link_( this.imagePropertiesObj_.link)}
/**
*The recolor effect of the image. If not set, the image is not recolored.
This property is read-only.
**/
ImageProperties_.prototype.Recolor = function(){return new Recolor_( this.imagePropertiesObj_.recolor)}
/**
*The brightness effect of the image. The value should be in the interval
[-1.0, 1.0], where 0 means no effect. This property is read-only.
**/
ImageProperties_.prototype.Brightness = function(){return this.imagePropertiesObj_.brightness}


/**
*A PageElement kind representing a
joined collection of PageElements.
**/


var Group_ = function(groupObj){ this.groupObj_ = groupObj }


/**
*The collection of elements in the group. The minimum size of a group is 2.
**/
Group_.prototype.Children = function(){return new IteratorService_(this.groupObj_.children.map(function(element){return new PageElement_(element)}))}


/**
*The outline of a PageElement.

If these fields are unset, they may be inherited from a parent placeholder
if it exists. If there is no parent, the fields will default to the value
used for new page elements created in the Slides editor, which may depend on
the page element kind.
**/


var Outline_ = function(outlineObj){ this.outlineObj_ = outlineObj }


/**
*The thickness of the outline.
**/
Outline_.prototype.Weight = function(){return new Dimension_( this.outlineObj_.weight)}
/**
*The dash style of the outline.
**/
Outline_.prototype.DashStyle = function(){return this.outlineObj_.dashStyle}


/**
*The outline property state.

Updating the the outline on a page element will implicitly update this
field to`RENDERED`, unless another value is specified in the same request.
To have no outline on a page element, set this field to `NOT_RENDERED`. In
this case, any other outline fields set in the same request will be
ignored.
**/
Outline_.prototype.PropertyState = function(){return this.outlineObj_.propertyState}


/**
*The fill of the outline.
**/
Outline_.prototype.OutlineFill = function(){return new OutlineFill_( this.outlineObj_.outlineFill)}
/**
*Properties and contents of each table cell.
**/


var TableCell_ = function(tableCellObj){ this.tableCellObj_ = tableCellObj }


/**
*The text content of the cell.
**/
TableCell_.prototype.Text = function(){return new TextContent_( this.tableCellObj_.text)}
/**
*The location of the cell within the table.
**/
TableCell_.prototype.Location = function(){return new TableCellLocation_( this.tableCellObj_.location)}
/**
*Row span of the cell.
**/
TableCell_.prototype.RowSpan = function(){return this.tableCellObj_.rowSpan}


/**
*The properties of the table cell.
**/
TableCell_.prototype.TableCellProperties = function(){return new TableCellProperties_( this.tableCellObj_.tableCellProperties)}
/**
*Column span of the cell.
**/
TableCell_.prototype.ColumnSpan = function(){return this.tableCellObj_.columnSpan}


/**
*The result of replacing shapes with an image.
**/


var ReplaceAllShapesWithImageResponse_ = function(replaceAllShapesWithImageResponseObj){ this.replaceAllShapesWithImageResponseObj_ = replaceAllShapesWithImageResponseObj }


/**
*The number of shapes replaced with images.
**/
ReplaceAllShapesWithImageResponse_.prototype.OccurrencesChanged = function(){return this.replaceAllShapesWithImageResponseObj_.occurrencesChanged}


/**
*Creates a new slide.
**/


var CreateSlideRequest_ = function(createSlideRequestObj){ this.createSlideRequestObj_ = createSlideRequestObj }


/**
*A user-supplied object ID.

If you specify an ID, it must be unique among all pages and page elements
in the presentation. The ID must start with an alphanumeric character or an
underscore (matches regex `[a-zA-Z0-9_]`); remaining characters
may include those as well as a hyphen or colon (matches regex
`[a-zA-Z0-9_-:]`).
The length of the ID must not be less than 5 or greater than 50.

If you don't specify an ID, a unique one is generated.
**/
CreateSlideRequest_.prototype.ObjectId = function(){return this.createSlideRequestObj_.objectId}


/**
*The optional zero-based index indicating where to insert the slides.

If you don't specify an index, the new slide is created at the end.
**/
CreateSlideRequest_.prototype.InsertionIndex = function(){return this.createSlideRequestObj_.insertionIndex}


/**
*Layout reference of the slide to be inserted, based on the *current
master*, which is one of the following:

- The master of the previous slide index.
- The master of the first slide, if the insertion_index is zero.
- The first master in the presentation, if there are no slides.

If the LayoutReference is not found in the current master, a 400 bad
request error is returned.

If you don't specify a layout reference, then the new slide will use the
predefined layout `BLANK`.
**/
CreateSlideRequest_.prototype.SlideLayoutReference = function(){return new LayoutReference_( this.createSlideRequestObj_.slideLayoutReference)}
/**
*The properties of the TableCell.
**/


var TableCellProperties_ = function(tableCellPropertiesObj){ this.tableCellPropertiesObj_ = tableCellPropertiesObj }


/**
*The background fill of the table cell. The default fill matches the fill
for newly created table cells in the Slides editor.
**/
TableCellProperties_.prototype.TableCellBackgroundFill = function(){return new TableCellBackgroundFill_( this.tableCellPropertiesObj_.tableCellBackgroundFill)}
/**
*The result of creating a table.
**/


var CreateTableResponse_ = function(createTableResponseObj){ this.createTableResponseObj_ = createTableResponseObj }


/**
*The object ID of the created table.
**/
CreateTableResponse_.prototype.ObjectId = function(){return this.createTableResponseObj_.objectId}


/**
*A width and height.
**/


var Size_ = function(sizeObj){ this.sizeObj_ = sizeObj }


/**
*The width of the object.
**/
Size_.prototype.Width = function(){return new Dimension_( this.sizeObj_.width)}
/**
*The height of the object.
**/
Size_.prototype.Height = function(){return new Dimension_( this.sizeObj_.height)}
/**
*The palette of predefined colors for a page.
**/


var ColorScheme_ = function(colorSchemeObj){ this.colorSchemeObj_ = colorSchemeObj }


/**
*The ThemeColorType and corresponding concrete color pairs.
**/
ColorScheme_.prototype.Colors = function(){return new IteratorService_(this.colorSchemeObj_.colors.map(function(element){return new ThemeColorPair_(element)}))}


/**
*A TextElement kind that represents the beginning of a new paragraph.
**/


var ParagraphMarker_ = function(paragraphMarkerObj){ this.paragraphMarkerObj_ = paragraphMarkerObj }


/**
*The paragraph's style
**/
ParagraphMarker_.prototype.Style = function(){return new ParagraphStyle_( this.paragraphMarkerObj_.style)}
/**
*The bullet for this paragraph. If not present, the paragraph does not
belong to a list.
**/
ParagraphMarker_.prototype.Bullet = function(){return new Bullet_( this.paragraphMarkerObj_.bullet)}
/**
*Creates bullets for all of the paragraphs that overlap with the given
text index range.

The nesting level of each paragraph will be determined by counting leading
tabs in front of each paragraph. To avoid excess space between the bullet and
the corresponding paragraph, these leading tabs are removed by this request.
This may change the indices of parts of the text.

If the paragraph immediately before paragraphs being updated is in a list
with a matching preset, the paragraphs being updated are added to that
preceding list.
**/


var CreateParagraphBulletsRequest_ = function(createParagraphBulletsRequestObj){ this.createParagraphBulletsRequestObj_ = createParagraphBulletsRequestObj }


/**
*The object ID of the shape or table containing the text to add bullets to.
**/
CreateParagraphBulletsRequest_.prototype.ObjectId = function(){return this.createParagraphBulletsRequestObj_.objectId}


/**
*The range of text to apply the bullet presets to, based on TextElement indexes.
**/
CreateParagraphBulletsRequest_.prototype.TextRange = function(){return new Range_( this.createParagraphBulletsRequestObj_.textRange)}
/**
*The kinds of bullet glyphs to be used. Defaults to the
`BULLET_DISC_CIRCLE_SQUARE` preset.
**/
CreateParagraphBulletsRequest_.prototype.BulletPreset = function(){return this.createParagraphBulletsRequestObj_.bulletPreset}


/**
*The optional table cell location if the text to be modified is in a table
cell. If present, the object_id must refer to a table.
**/
CreateParagraphBulletsRequest_.prototype.CellLocation = function(){return new TableCellLocation_( this.createParagraphBulletsRequestObj_.cellLocation)}
/**
*A criteria that matches a specific string of text in a shape or table.
**/


var SubstringMatchCriteria_ = function(substringMatchCriteriaObj){ this.substringMatchCriteriaObj_ = substringMatchCriteriaObj }


/**
*The text to search for in the shape or table.
**/
SubstringMatchCriteria_.prototype.Text = function(){return this.substringMatchCriteriaObj_.text}


/**
*Indicates whether the search should respect case:

- `True`: the search is case sensitive.
- `False`: the search is case insensitive.
**/
SubstringMatchCriteria_.prototype.MatchCase = function(){return this.substringMatchCriteriaObj_.matchCase}


/**
*A PageElement kind representing
word art.
**/


var WordArt_ = function(wordArtObj){ this.wordArtObj_ = wordArtObj }


/**
*The text rendered as word art.
**/
WordArt_.prototype.RenderedText = function(){return this.wordArtObj_.renderedText}


/**
*Specifies a contiguous range of an indexed collection, such as characters in
text.
**/


var Range_ = function(rangeObj){ this.rangeObj_ = rangeObj }


/**
*The optional zero-based index of the end of the collection.
Required for `SPECIFIC_RANGE` delete mode.
**/
Range_.prototype.EndIndex = function(){return this.rangeObj_.endIndex}


/**
*The optional zero-based index of the beginning of the collection.
Required for `SPECIFIC_RANGE` and `FROM_START_INDEX` ranges.
**/
Range_.prototype.StartIndex = function(){return this.rangeObj_.startIndex}


/**
*The type of range.
**/
Range_.prototype.Type = function(){return this.rangeObj_.type}


/**
*Properties of each column in a table.
**/


var TableColumnProperties_ = function(tableColumnPropertiesObj){ this.tableColumnPropertiesObj_ = tableColumnPropertiesObj }


/**
*Width of a column.
**/
TableColumnProperties_.prototype.ColumnWidth = function(){return new Dimension_( this.tableColumnPropertiesObj_.columnWidth)}
/**
*A single kind of update to apply to a presentation.
**/


var Request_ = function(requestObj){ this.requestObj_ = requestObj }


/**
*Creates bullets for paragraphs.
**/
Request_.prototype.CreateParagraphBullets = function(){return new CreateParagraphBulletsRequest_( this.requestObj_.createParagraphBullets)}
/**
*Inserts columns into a table.
**/
Request_.prototype.InsertTableColumns = function(){return new InsertTableColumnsRequest_( this.requestObj_.insertTableColumns)}
/**
*Creates a new table.
**/
Request_.prototype.CreateTable = function(){return new CreateTableRequest_( this.requestObj_.createTable)}
/**
*Deletes text from a shape or a table cell.
**/
Request_.prototype.DeleteText = function(){return new DeleteTextRequest_( this.requestObj_.deleteText)}
/**
*Replaces all instances of specified text.
**/
Request_.prototype.ReplaceAllText = function(){return new ReplaceAllTextRequest_( this.requestObj_.replaceAllText)}
/**
*Updates the properties of a Video.
**/
Request_.prototype.UpdateVideoProperties = function(){return new UpdateVideoPropertiesRequest_( this.requestObj_.updateVideoProperties)}
/**
*Inserts text into a shape or table cell.
**/
Request_.prototype.InsertText = function(){return new InsertTextRequest_( this.requestObj_.insertText)}
/**
*Deletes a row from a table.
**/
Request_.prototype.DeleteTableRow = function(){return new DeleteTableRowRequest_( this.requestObj_.deleteTableRow)}
/**
*Creates a line.
**/
Request_.prototype.CreateLine = function(){return new CreateLineRequest_( this.requestObj_.createLine)}
/**
*Updates the styling of text within a Shape or Table.
**/
Request_.prototype.UpdateTextStyle = function(){return new UpdateTextStyleRequest_( this.requestObj_.updateTextStyle)}
/**
*Inserts rows into a table.
**/
Request_.prototype.InsertTableRows = function(){return new InsertTableRowsRequest_( this.requestObj_.insertTableRows)}
/**
*Updates the properties of a TableCell.
**/
Request_.prototype.UpdateTableCellProperties = function(){return new UpdateTableCellPropertiesRequest_( this.requestObj_.updateTableCellProperties)}
/**
*Refreshes a Google Sheets chart.
**/
Request_.prototype.RefreshSheetsChart = function(){return new RefreshSheetsChartRequest_( this.requestObj_.refreshSheetsChart)}
/**
*Creates an embedded Google Sheets chart.
**/
Request_.prototype.CreateSheetsChart = function(){return new CreateSheetsChartRequest_( this.requestObj_.createSheetsChart)}
/**
*Updates the properties of a Page.
**/
Request_.prototype.UpdatePageProperties = function(){return new UpdatePagePropertiesRequest_( this.requestObj_.updatePageProperties)}
/**
*Updates the properties of a Shape.
**/
Request_.prototype.UpdateShapeProperties = function(){return new UpdateShapePropertiesRequest_( this.requestObj_.updateShapeProperties)}
/**
*Creates a new slide.
**/
Request_.prototype.CreateSlide = function(){return new CreateSlideRequest_( this.requestObj_.createSlide)}
/**
*Deletes a page or page element from the presentation.
**/
Request_.prototype.DeleteObject = function(){return new DeleteObjectRequest_( this.requestObj_.deleteObject)}
/**
*Creates a new shape.
**/
Request_.prototype.CreateShape = function(){return new CreateShapeRequest_( this.requestObj_.createShape)}
/**
*Updates the transform of a page element.
**/
Request_.prototype.UpdatePageElementTransform = function(){return new UpdatePageElementTransformRequest_( this.requestObj_.updatePageElementTransform)}
/**
*Updates the position of a set of slides in the presentation.
**/
Request_.prototype.UpdateSlidesPosition = function(){return new UpdateSlidesPositionRequest_( this.requestObj_.updateSlidesPosition)}
/**
*Replaces all shapes matching some criteria with an image.
**/
Request_.prototype.ReplaceAllShapesWithImage = function(){return new ReplaceAllShapesWithImageRequest_( this.requestObj_.replaceAllShapesWithImage)}
/**
*Updates the properties of an Image.
**/
Request_.prototype.UpdateImageProperties = function(){return new UpdateImagePropertiesRequest_( this.requestObj_.updateImageProperties)}
/**
*Creates a video.
**/
Request_.prototype.CreateVideo = function(){return new CreateVideoRequest_( this.requestObj_.createVideo)}
/**
*Creates an image.
**/
Request_.prototype.CreateImage = function(){return new CreateImageRequest_( this.requestObj_.createImage)}
/**
*Duplicates a slide or page element.
**/
Request_.prototype.DuplicateObject = function(){return new DuplicateObjectRequest_( this.requestObj_.duplicateObject)}
/**
*Deletes a column from a table.
**/
Request_.prototype.DeleteTableColumn = function(){return new DeleteTableColumnRequest_( this.requestObj_.deleteTableColumn)}
/**
*Updates the properties of a Line.
**/
Request_.prototype.UpdateLineProperties = function(){return new UpdateLinePropertiesRequest_( this.requestObj_.updateLineProperties)}
/**
*The fill of the line.
**/


var LineFill_ = function(lineFillObj){ this.lineFillObj_ = lineFillObj }


/**
*Solid color fill.
**/
LineFill_.prototype.SolidFill = function(){return new SolidFill_( this.lineFillObj_.solidFill)}
/**
*The fill of the outline.
**/


var OutlineFill_ = function(outlineFillObj){ this.outlineFillObj_ = outlineFillObj }


/**
*Solid color fill.
**/
OutlineFill_.prototype.SolidFill = function(){return new SolidFill_( this.outlineFillObj_.solidFill)}
/**
*Describes the bullet of a paragraph.
**/


var Bullet_ = function(bulletObj){ this.bulletObj_ = bulletObj }


/**
*The nesting level of this paragraph in the list.
**/
Bullet_.prototype.NestingLevel = function(){return this.bulletObj_.nestingLevel}


/**
*The rendered bullet glyph for this paragraph.
**/
Bullet_.prototype.Glyph = function(){return this.bulletObj_.glyph}


/**
*The paragraph specific text style applied to this bullet.
**/
Bullet_.prototype.BulletStyle = function(){return new TextStyle_( this.bulletObj_.bulletStyle)}
/**
*The ID of the list this paragraph belongs to.
**/
Bullet_.prototype.ListId = function(){return this.bulletObj_.listId}


