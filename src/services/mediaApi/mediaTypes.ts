export interface MediaItemResponseTypes {
  /**
   * string,
   * datetime (ISO8601)
   * The date the object was published, in the site’s timezone.
   * Context: view, edit, embed
   */
  date: string;

  /**
   * string,
   * datetime(ISO8601)
   * The date the object was published, as GMT.
   * Context: view, edit
   */
  date_gmt: string;

  /**
   * object
   * The globally unique identifier for the object.
   * Context: view, edit
   * @readonly
   */
  guid: {};

  /**
   * integer
   * Unique identifier for the object.
   * Context: view, edit, embed
   * @readonly
   */
  id: number;

  /**
   * string, uri
   * URL to the object.
   * Context: view, edit, embed
   * @readonly
   */
  link: string;

  /**
   * string,
   * datetime(ISO8601)
   * The date the object was last modified, in the site’s timezone.
   * Context: view, edit
   * @readonly
   */
  modified: string;

  /**
   * string,
   * datetime(ISO8601)
   * The date the object was last modified, as GMT.
   * Context: view, edit
   * @readonly
   */
  modified_gmt: string;

  /**
   * string
   * An alphanumeric identifier for the object unique to its type.
   * Context: view, edit, embed
   */
  slug: string;

  /**
   * string
   * A named status for the object.
   * Context: edit
   * One of: publish, future, draft, pending, private
   */
  status: "publish" | "future" | "draft" | "pending" | "private";

  /**
   * string
   * Type of Post for the object.
   * Context: view, edit, embed
   * @readonly
   */
  type: string;

  /**
   * object
   * The title for the object.
   * Context: view, edit, embed
   */
  title: {};

  /**
   * integer
   * The id for the author of the object.
   * Context: view, edit, embed
   */
  author: number;

  /**
   * string
   * Whether or not comments are open on the object.
   * Context: view, edit
   * One of: open, closed
   */
  comment_status: "open" | "closed";

  /**
   * string
   * Whether or not the object can be pinged.
   * Context: view, edit
   * One of: open, closed
   */
  ping_status: "open" | "closed";

  /**
   * object
   * Meta fields.
   * Context: view, edit
   */
  meta: {};

  /**
   * string
   * Alternative text to display when resource is not displayed.
   * Context: view, edit, embed
   */
  alt_text: string;

  /**
   * string
   * The caption for the resource.
   * Context: view, edit
   */
  caption: string;

  /**
   * string
   * The description for the resource.
   * Context: view, edit
   */
  description: string;

  /**
   * string
   * Type of resource.
   * Context: view, edit, embed
   * One of: image, file
   * @readonly
   */
  media_type: "image" | "file";

  /**
   * string
   * MIME type of resource.
   * Context: view, edit, embed
   * @readonly
   */
  mime_type: string;

  /**
   * object
   * Details about the resource file, specific to its type.
   * Context: view, edit, embed
   * @readonly
   */
  media_details: {
    width: number;
    height: number;
    sizes: Sizes[];
  };

  /**
   * integer
   * The id for the associated post of the resource.
   * Context: view, edit
   */
  post: number;

  /**
   * string, uri
   * URL to the original resource file.
   * Context: view, edit, embed
   * @readonly
   */
  source_url: string;
}

interface Sizes {
  file: string;
  height: number;
  width: number;
  mime_type: string;
  source_url: string;
}
