export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  Date: any,
  JSON: any,
};











export type BooleanQueryOperatorInput = {
  eq?: Maybe<Scalars['Boolean']>,
  ne?: Maybe<Scalars['Boolean']>,
  in?: Maybe<Array<Maybe<Scalars['Boolean']>>>,
  nin?: Maybe<Array<Maybe<Scalars['Boolean']>>>,
};


export type DateQueryOperatorInput = {
  eq?: Maybe<Scalars['Date']>,
  ne?: Maybe<Scalars['Date']>,
  gt?: Maybe<Scalars['Date']>,
  gte?: Maybe<Scalars['Date']>,
  lt?: Maybe<Scalars['Date']>,
  lte?: Maybe<Scalars['Date']>,
  in?: Maybe<Array<Maybe<Scalars['Date']>>>,
  nin?: Maybe<Array<Maybe<Scalars['Date']>>>,
};

export type Directory = Node & {
   __typename?: 'Directory',
  sourceInstanceName: Scalars['String'],
  absolutePath: Scalars['String'],
  relativePath: Scalars['String'],
  extension: Scalars['String'],
  size: Scalars['Int'],
  prettySize: Scalars['String'],
  modifiedTime: Scalars['Date'],
  accessTime: Scalars['Date'],
  changeTime: Scalars['Date'],
  birthTime: Scalars['Date'],
  root: Scalars['String'],
  dir: Scalars['String'],
  base: Scalars['String'],
  ext: Scalars['String'],
  name: Scalars['String'],
  relativeDirectory: Scalars['String'],
  dev: Scalars['Int'],
  mode: Scalars['Int'],
  nlink: Scalars['Int'],
  uid: Scalars['Int'],
  gid: Scalars['Int'],
  rdev: Scalars['Int'],
  ino: Scalars['Float'],
  atimeMs: Scalars['Float'],
  mtimeMs: Scalars['Float'],
  ctimeMs: Scalars['Float'],
  atime: Scalars['Date'],
  mtime: Scalars['Date'],
  ctime: Scalars['Date'],
  birthtime?: Maybe<Scalars['Date']>,
  birthtimeMs?: Maybe<Scalars['Float']>,
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
};


export type DirectoryModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type DirectoryAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type DirectoryChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type DirectoryBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type DirectoryAtimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type DirectoryMtimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type DirectoryCtimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};

export type DirectoryConnection = {
   __typename?: 'DirectoryConnection',
  totalCount: Scalars['Int'],
  edges: Array<DirectoryEdge>,
  nodes: Array<Directory>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<DirectoryGroupConnection>,
};


export type DirectoryConnectionDistinctArgs = {
  field: DirectoryFieldsEnum
};


export type DirectoryConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: DirectoryFieldsEnum
};

export type DirectoryEdge = {
   __typename?: 'DirectoryEdge',
  next?: Maybe<Directory>,
  node: Directory,
  previous?: Maybe<Directory>,
};

export enum DirectoryFieldsEnum {
  SourceInstanceName = 'sourceInstanceName',
  AbsolutePath = 'absolutePath',
  RelativePath = 'relativePath',
  Extension = 'extension',
  Size = 'size',
  PrettySize = 'prettySize',
  ModifiedTime = 'modifiedTime',
  AccessTime = 'accessTime',
  ChangeTime = 'changeTime',
  BirthTime = 'birthTime',
  Root = 'root',
  Dir = 'dir',
  Base = 'base',
  Ext = 'ext',
  Name = 'name',
  RelativeDirectory = 'relativeDirectory',
  Dev = 'dev',
  Mode = 'mode',
  Nlink = 'nlink',
  Uid = 'uid',
  Gid = 'gid',
  Rdev = 'rdev',
  Ino = 'ino',
  AtimeMs = 'atimeMs',
  MtimeMs = 'mtimeMs',
  CtimeMs = 'ctimeMs',
  Atime = 'atime',
  Mtime = 'mtime',
  Ctime = 'ctime',
  Birthtime = 'birthtime',
  BirthtimeMs = 'birthtimeMs',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type'
}

export type DirectoryFilterInput = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>,
  absolutePath?: Maybe<StringQueryOperatorInput>,
  relativePath?: Maybe<StringQueryOperatorInput>,
  extension?: Maybe<StringQueryOperatorInput>,
  size?: Maybe<IntQueryOperatorInput>,
  prettySize?: Maybe<StringQueryOperatorInput>,
  modifiedTime?: Maybe<DateQueryOperatorInput>,
  accessTime?: Maybe<DateQueryOperatorInput>,
  changeTime?: Maybe<DateQueryOperatorInput>,
  birthTime?: Maybe<DateQueryOperatorInput>,
  root?: Maybe<StringQueryOperatorInput>,
  dir?: Maybe<StringQueryOperatorInput>,
  base?: Maybe<StringQueryOperatorInput>,
  ext?: Maybe<StringQueryOperatorInput>,
  name?: Maybe<StringQueryOperatorInput>,
  relativeDirectory?: Maybe<StringQueryOperatorInput>,
  dev?: Maybe<IntQueryOperatorInput>,
  mode?: Maybe<IntQueryOperatorInput>,
  nlink?: Maybe<IntQueryOperatorInput>,
  uid?: Maybe<IntQueryOperatorInput>,
  gid?: Maybe<IntQueryOperatorInput>,
  rdev?: Maybe<IntQueryOperatorInput>,
  ino?: Maybe<FloatQueryOperatorInput>,
  atimeMs?: Maybe<FloatQueryOperatorInput>,
  mtimeMs?: Maybe<FloatQueryOperatorInput>,
  ctimeMs?: Maybe<FloatQueryOperatorInput>,
  atime?: Maybe<DateQueryOperatorInput>,
  mtime?: Maybe<DateQueryOperatorInput>,
  ctime?: Maybe<DateQueryOperatorInput>,
  birthtime?: Maybe<DateQueryOperatorInput>,
  birthtimeMs?: Maybe<FloatQueryOperatorInput>,
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
};

export type DirectoryGroupConnection = {
   __typename?: 'DirectoryGroupConnection',
  totalCount: Scalars['Int'],
  edges: Array<DirectoryEdge>,
  nodes: Array<Directory>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type DirectorySortInput = {
  fields?: Maybe<Array<Maybe<DirectoryFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type File = Node & {
   __typename?: 'File',
  sourceInstanceName: Scalars['String'],
  absolutePath: Scalars['String'],
  relativePath: Scalars['String'],
  extension: Scalars['String'],
  size: Scalars['Int'],
  prettySize: Scalars['String'],
  modifiedTime: Scalars['Date'],
  accessTime: Scalars['Date'],
  changeTime: Scalars['Date'],
  birthTime: Scalars['Date'],
  root: Scalars['String'],
  dir: Scalars['String'],
  base: Scalars['String'],
  ext: Scalars['String'],
  name: Scalars['String'],
  relativeDirectory: Scalars['String'],
  dev: Scalars['Int'],
  mode: Scalars['Int'],
  nlink: Scalars['Int'],
  uid: Scalars['Int'],
  gid: Scalars['Int'],
  rdev: Scalars['Int'],
  ino: Scalars['Float'],
  atimeMs: Scalars['Float'],
  mtimeMs: Scalars['Float'],
  ctimeMs: Scalars['Float'],
  atime: Scalars['Date'],
  mtime: Scalars['Date'],
  ctime: Scalars['Date'],
  birthtime?: Maybe<Scalars['Date']>,
  birthtimeMs?: Maybe<Scalars['Float']>,
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
};


export type FileModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type FileAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type FileChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type FileBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type FileAtimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type FileMtimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type FileCtimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};

export type FileConnection = {
   __typename?: 'FileConnection',
  totalCount: Scalars['Int'],
  edges: Array<FileEdge>,
  nodes: Array<File>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<FileGroupConnection>,
};


export type FileConnectionDistinctArgs = {
  field: FileFieldsEnum
};


export type FileConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: FileFieldsEnum
};

export type FileEdge = {
   __typename?: 'FileEdge',
  next?: Maybe<File>,
  node: File,
  previous?: Maybe<File>,
};

export enum FileFieldsEnum {
  SourceInstanceName = 'sourceInstanceName',
  AbsolutePath = 'absolutePath',
  RelativePath = 'relativePath',
  Extension = 'extension',
  Size = 'size',
  PrettySize = 'prettySize',
  ModifiedTime = 'modifiedTime',
  AccessTime = 'accessTime',
  ChangeTime = 'changeTime',
  BirthTime = 'birthTime',
  Root = 'root',
  Dir = 'dir',
  Base = 'base',
  Ext = 'ext',
  Name = 'name',
  RelativeDirectory = 'relativeDirectory',
  Dev = 'dev',
  Mode = 'mode',
  Nlink = 'nlink',
  Uid = 'uid',
  Gid = 'gid',
  Rdev = 'rdev',
  Ino = 'ino',
  AtimeMs = 'atimeMs',
  MtimeMs = 'mtimeMs',
  CtimeMs = 'ctimeMs',
  Atime = 'atime',
  Mtime = 'mtime',
  Ctime = 'ctime',
  Birthtime = 'birthtime',
  BirthtimeMs = 'birthtimeMs',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type'
}

export type FileFilterInput = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>,
  absolutePath?: Maybe<StringQueryOperatorInput>,
  relativePath?: Maybe<StringQueryOperatorInput>,
  extension?: Maybe<StringQueryOperatorInput>,
  size?: Maybe<IntQueryOperatorInput>,
  prettySize?: Maybe<StringQueryOperatorInput>,
  modifiedTime?: Maybe<DateQueryOperatorInput>,
  accessTime?: Maybe<DateQueryOperatorInput>,
  changeTime?: Maybe<DateQueryOperatorInput>,
  birthTime?: Maybe<DateQueryOperatorInput>,
  root?: Maybe<StringQueryOperatorInput>,
  dir?: Maybe<StringQueryOperatorInput>,
  base?: Maybe<StringQueryOperatorInput>,
  ext?: Maybe<StringQueryOperatorInput>,
  name?: Maybe<StringQueryOperatorInput>,
  relativeDirectory?: Maybe<StringQueryOperatorInput>,
  dev?: Maybe<IntQueryOperatorInput>,
  mode?: Maybe<IntQueryOperatorInput>,
  nlink?: Maybe<IntQueryOperatorInput>,
  uid?: Maybe<IntQueryOperatorInput>,
  gid?: Maybe<IntQueryOperatorInput>,
  rdev?: Maybe<IntQueryOperatorInput>,
  ino?: Maybe<FloatQueryOperatorInput>,
  atimeMs?: Maybe<FloatQueryOperatorInput>,
  mtimeMs?: Maybe<FloatQueryOperatorInput>,
  ctimeMs?: Maybe<FloatQueryOperatorInput>,
  atime?: Maybe<DateQueryOperatorInput>,
  mtime?: Maybe<DateQueryOperatorInput>,
  ctime?: Maybe<DateQueryOperatorInput>,
  birthtime?: Maybe<DateQueryOperatorInput>,
  birthtimeMs?: Maybe<FloatQueryOperatorInput>,
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
};

export type FileGroupConnection = {
   __typename?: 'FileGroupConnection',
  totalCount: Scalars['Int'],
  edges: Array<FileEdge>,
  nodes: Array<File>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type FileSortInput = {
  fields?: Maybe<Array<Maybe<FileFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type FloatQueryOperatorInput = {
  eq?: Maybe<Scalars['Float']>,
  ne?: Maybe<Scalars['Float']>,
  gt?: Maybe<Scalars['Float']>,
  gte?: Maybe<Scalars['Float']>,
  lt?: Maybe<Scalars['Float']>,
  lte?: Maybe<Scalars['Float']>,
  in?: Maybe<Array<Maybe<Scalars['Float']>>>,
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>,
};

export type GraphCms = {
   __typename?: 'GraphCMS',
  allSettings?: Maybe<GraphCms_Settings>,
  cart?: Maybe<GraphCms_Cart>,
  cartFee?: Maybe<GraphCms_CartFee>,
  cartItem?: Maybe<GraphCms_CartItem>,
  categories?: Maybe<GraphCms_RootQueryToCategoryConnection>,
  category?: Maybe<GraphCms_Category>,
  comment?: Maybe<GraphCms_Comment>,
  comments?: Maybe<GraphCms_RootQueryToCommentConnection>,
  coupon?: Maybe<GraphCms_Coupon>,
  couponBy?: Maybe<GraphCms_Coupon>,
  coupons?: Maybe<GraphCms_RootQueryToCouponConnection>,
  customer?: Maybe<GraphCms_Customer>,
  customers?: Maybe<GraphCms_RootQueryToCustomerConnection>,
  discussionSettings?: Maybe<GraphCms_DiscussionSettings>,
  externalProduct?: Maybe<GraphCms_ExternalProduct>,
  generalSettings?: Maybe<GraphCms_GeneralSettings>,
  groupProduct?: Maybe<GraphCms_GroupProduct>,
  mediaItem?: Maybe<GraphCms_MediaItem>,
  mediaItemBy?: Maybe<GraphCms_MediaItem>,
  mediaItems?: Maybe<GraphCms_RootQueryToMediaItemConnection>,
  menu?: Maybe<GraphCms_Menu>,
  menuItem?: Maybe<GraphCms_MenuItem>,
  menuItems?: Maybe<GraphCms_RootQueryToMenuItemConnection>,
  menus?: Maybe<GraphCms_RootQueryToMenuConnection>,
  node?: Maybe<GraphCms_Node>,
  order?: Maybe<GraphCms_Order>,
  orderBy?: Maybe<GraphCms_Order>,
  orders?: Maybe<GraphCms_RootQueryToOrderConnection>,
  paHind?: Maybe<GraphCms_PaHind>,
  paHinds?: Maybe<GraphCms_RootQueryToPaHindConnection>,
  paHulk?: Maybe<GraphCms_PaHulk>,
  paHulks?: Maybe<GraphCms_RootQueryToPaHulkConnection>,
  paKasutusaeg?: Maybe<GraphCms_PaKasutusaeg>,
  paKasutusaegs?: Maybe<GraphCms_RootQueryToPaKasutusaegConnection>,
  paKogus?: Maybe<GraphCms_PaKogus>,
  paKoguses?: Maybe<GraphCms_RootQueryToPaKogusConnection>,
  paKontuur?: Maybe<GraphCms_PaKontuur>,
  paKontuurs?: Maybe<GraphCms_RootQueryToPaKontuurConnection>,
  paKoostisained?: Maybe<GraphCms_PaKoostisained>,
  paKoostisaineds?: Maybe<GraphCms_RootQueryToPaKoostisainedConnection>,
  paLaadimisaeg?: Maybe<GraphCms_PaLaadimisaeg>,
  paLaadimisaegs?: Maybe<GraphCms_RootQueryToPaLaadimisaegConnection>,
  paMaterjal?: Maybe<GraphCms_PaMaterjal>,
  paMaterjals?: Maybe<GraphCms_RootQueryToPaMaterjalConnection>,
  paMuratasa?: Maybe<GraphCms_PaMuratasa>,
  paMuratasas?: Maybe<GraphCms_RootQueryToPaMuratasaConnection>,
  paOhutus?: Maybe<GraphCms_PaOhutus>,
  paOhutuses?: Maybe<GraphCms_RootQueryToPaOhutusConnection>,
  paPatareid?: Maybe<GraphCms_PaPatareid>,
  paPatareids?: Maybe<GraphCms_RootQueryToPaPatareidConnection>,
  paSuurus?: Maybe<GraphCms_PaSuurus>,
  paSuuruses?: Maybe<GraphCms_RootQueryToPaSuurusConnection>,
  paVariant?: Maybe<GraphCms_PaVariant>,
  paVariants?: Maybe<GraphCms_RootQueryToPaVariantConnection>,
  paVarv?: Maybe<GraphCms_PaVarv>,
  paVarvs?: Maybe<GraphCms_RootQueryToPaVarvConnection>,
  paVeekindlus?: Maybe<GraphCms_PaVeekindlus>,
  paVeekindluses?: Maybe<GraphCms_RootQueryToPaVeekindlusConnection>,
  page?: Maybe<GraphCms_Page>,
  pageBy?: Maybe<GraphCms_Page>,
  pages?: Maybe<GraphCms_RootQueryToPageConnection>,
  paymentGateways?: Maybe<GraphCms_RootQueryToPaymentGatewayConnection>,
  plugin?: Maybe<GraphCms_Plugin>,
  plugins?: Maybe<GraphCms_RootQueryToPluginConnection>,
  post?: Maybe<GraphCms_Post>,
  postBy?: Maybe<GraphCms_Post>,
  posts?: Maybe<GraphCms_RootQueryToPostConnection>,
  product?: Maybe<GraphCms_Product>,
  productBy?: Maybe<GraphCms_Product>,
  productCategories?: Maybe<GraphCms_RootQueryToProductCategoryConnection>,
  productCategory?: Maybe<GraphCms_ProductCategory>,
  productTag?: Maybe<GraphCms_ProductTag>,
  productTags?: Maybe<GraphCms_RootQueryToProductTagConnection>,
  productType?: Maybe<GraphCms_ProductType>,
  productTypes?: Maybe<GraphCms_RootQueryToProductTypeConnection>,
  productVariation?: Maybe<GraphCms_ProductVariation>,
  products?: Maybe<GraphCms_RootQueryToProductConnection>,
  readingSettings?: Maybe<GraphCms_ReadingSettings>,
  refund?: Maybe<GraphCms_Refund>,
  refundBy?: Maybe<GraphCms_Refund>,
  refunds?: Maybe<GraphCms_RootQueryToRefundConnection>,
  revisions?: Maybe<GraphCms_RootQueryToContentRevisionUnionConnection>,
  shippingClass?: Maybe<GraphCms_ShippingClass>,
  shippingClasses?: Maybe<GraphCms_RootQueryToShippingClassConnection>,
  shippingMethod?: Maybe<GraphCms_ShippingMethod>,
  shippingMethods?: Maybe<GraphCms_RootQueryToShippingMethodConnection>,
  simpleProduct?: Maybe<GraphCms_SimpleProduct>,
  tag?: Maybe<GraphCms_Tag>,
  tags?: Maybe<GraphCms_RootQueryToTagConnection>,
  taxRate?: Maybe<GraphCms_TaxRate>,
  taxRates?: Maybe<GraphCms_RootQueryToTaxRateConnection>,
  theme?: Maybe<GraphCms_Theme>,
  themes?: Maybe<GraphCms_RootQueryToThemeConnection>,
  user?: Maybe<GraphCms_User>,
  userRole?: Maybe<GraphCms_UserRole>,
  userRoles?: Maybe<GraphCms_RootQueryToUserRoleConnection>,
  users?: Maybe<GraphCms_RootQueryToUserConnection>,
  variableProduct?: Maybe<GraphCms_VariableProduct>,
  viewer?: Maybe<GraphCms_User>,
  visibleProduct?: Maybe<GraphCms_VisibleProduct>,
  visibleProducts?: Maybe<GraphCms_RootQueryToVisibleProductConnection>,
  writingSettings?: Maybe<GraphCms_WritingSettings>,
};


export type GraphCmsCartFeeArgs = {
  id: Scalars['ID']
};


export type GraphCmsCartItemArgs = {
  key: Scalars['ID']
};


export type GraphCmsCategoriesArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  where?: Maybe<GraphCms_RootQueryToCategoryConnectionWhereArgs>
};


export type GraphCmsCategoryArgs = {
  id: Scalars['ID']
};


export type GraphCmsCommentArgs = {
  id: Scalars['ID']
};


export type GraphCmsCommentsArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  where?: Maybe<GraphCms_RootQueryToCommentConnectionWhereArgs>
};


export type GraphCmsCouponArgs = {
  id: Scalars['ID']
};


export type GraphCmsCouponByArgs = {
  id?: Maybe<Scalars['ID']>,
  couponId?: Maybe<Scalars['Int']>,
  code?: Maybe<Scalars['String']>
};


export type GraphCmsCouponsArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  where?: Maybe<GraphCms_RootQueryToCouponConnectionWhereArgs>
};


export type GraphCmsCustomerArgs = {
  id?: Maybe<Scalars['ID']>,
  customerId?: Maybe<Scalars['Int']>
};


export type GraphCmsCustomersArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  where?: Maybe<GraphCms_RootQueryToCustomerConnectionWhereArgs>
};


export type GraphCmsExternalProductArgs = {
  id?: Maybe<Scalars['ID']>,
  productId?: Maybe<Scalars['Int']>,
  slug?: Maybe<Scalars['String']>,
  sku?: Maybe<Scalars['String']>
};


export type GraphCmsGroupProductArgs = {
  id?: Maybe<Scalars['ID']>,
  productId?: Maybe<Scalars['Int']>,
  slug?: Maybe<Scalars['String']>,
  sku?: Maybe<Scalars['String']>
};


export type GraphCmsMediaItemArgs = {
  id: Scalars['ID']
};


export type GraphCmsMediaItemByArgs = {
  id?: Maybe<Scalars['ID']>,
  mediaItemId?: Maybe<Scalars['Int']>,
  uri?: Maybe<Scalars['String']>,
  slug?: Maybe<Scalars['String']>
};


export type GraphCmsMediaItemsArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  where?: Maybe<GraphCms_RootQueryToMediaItemConnectionWhereArgs>
};


export type GraphCmsMenuArgs = {
  id: Scalars['ID']
};


export type GraphCmsMenuItemArgs = {
  id: Scalars['ID']
};


export type GraphCmsMenuItemsArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  where?: Maybe<GraphCms_RootQueryToMenuItemConnectionWhereArgs>
};


export type GraphCmsMenusArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  where?: Maybe<GraphCms_RootQueryToMenuConnectionWhereArgs>
};


export type GraphCmsNodeArgs = {
  id?: Maybe<Scalars['ID']>
};


export type GraphCmsOrderArgs = {
  id: Scalars['ID']
};


export type GraphCmsOrderByArgs = {
  id?: Maybe<Scalars['ID']>,
  orderId?: Maybe<Scalars['Int']>,
  orderKey?: Maybe<Scalars['String']>
};


export type GraphCmsOrdersArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  where?: Maybe<GraphCms_RootQueryToOrderConnectionWhereArgs>
};


export type GraphCmsPaHindArgs = {
  id: Scalars['ID']
};


export type GraphCmsPaHindsArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  where?: Maybe<GraphCms_RootQueryToPaHindConnectionWhereArgs>
};


export type GraphCmsPaHulkArgs = {
  id: Scalars['ID']
};


export type GraphCmsPaHulksArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  where?: Maybe<GraphCms_RootQueryToPaHulkConnectionWhereArgs>
};


export type GraphCmsPaKasutusaegArgs = {
  id: Scalars['ID']
};


export type GraphCmsPaKasutusaegsArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  where?: Maybe<GraphCms_RootQueryToPaKasutusaegConnectionWhereArgs>
};


export type GraphCmsPaKogusArgs = {
  id: Scalars['ID']
};


export type GraphCmsPaKogusesArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  where?: Maybe<GraphCms_RootQueryToPaKogusConnectionWhereArgs>
};


export type GraphCmsPaKontuurArgs = {
  id: Scalars['ID']
};


export type GraphCmsPaKontuursArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  where?: Maybe<GraphCms_RootQueryToPaKontuurConnectionWhereArgs>
};


export type GraphCmsPaKoostisainedArgs = {
  id: Scalars['ID']
};


export type GraphCmsPaKoostisainedsArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  where?: Maybe<GraphCms_RootQueryToPaKoostisainedConnectionWhereArgs>
};


export type GraphCmsPaLaadimisaegArgs = {
  id: Scalars['ID']
};


export type GraphCmsPaLaadimisaegsArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  where?: Maybe<GraphCms_RootQueryToPaLaadimisaegConnectionWhereArgs>
};


export type GraphCmsPaMaterjalArgs = {
  id: Scalars['ID']
};


export type GraphCmsPaMaterjalsArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  where?: Maybe<GraphCms_RootQueryToPaMaterjalConnectionWhereArgs>
};


export type GraphCmsPaMuratasaArgs = {
  id: Scalars['ID']
};


export type GraphCmsPaMuratasasArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  where?: Maybe<GraphCms_RootQueryToPaMuratasaConnectionWhereArgs>
};


export type GraphCmsPaOhutusArgs = {
  id: Scalars['ID']
};


export type GraphCmsPaOhutusesArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  where?: Maybe<GraphCms_RootQueryToPaOhutusConnectionWhereArgs>
};


export type GraphCmsPaPatareidArgs = {
  id: Scalars['ID']
};


export type GraphCmsPaPatareidsArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  where?: Maybe<GraphCms_RootQueryToPaPatareidConnectionWhereArgs>
};


export type GraphCmsPaSuurusArgs = {
  id: Scalars['ID']
};


export type GraphCmsPaSuurusesArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  where?: Maybe<GraphCms_RootQueryToPaSuurusConnectionWhereArgs>
};


export type GraphCmsPaVariantArgs = {
  id: Scalars['ID']
};


export type GraphCmsPaVariantsArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  where?: Maybe<GraphCms_RootQueryToPaVariantConnectionWhereArgs>
};


export type GraphCmsPaVarvArgs = {
  id: Scalars['ID']
};


export type GraphCmsPaVarvsArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  where?: Maybe<GraphCms_RootQueryToPaVarvConnectionWhereArgs>
};


export type GraphCmsPaVeekindlusArgs = {
  id: Scalars['ID']
};


export type GraphCmsPaVeekindlusesArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  where?: Maybe<GraphCms_RootQueryToPaVeekindlusConnectionWhereArgs>
};


export type GraphCmsPageArgs = {
  id: Scalars['ID']
};


export type GraphCmsPageByArgs = {
  id?: Maybe<Scalars['ID']>,
  pageId?: Maybe<Scalars['Int']>,
  uri?: Maybe<Scalars['String']>
};


export type GraphCmsPagesArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  where?: Maybe<GraphCms_RootQueryToPageConnectionWhereArgs>
};


export type GraphCmsPaymentGatewaysArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  where?: Maybe<GraphCms_RootQueryToPaymentGatewayConnectionWhereArgs>
};


export type GraphCmsPluginArgs = {
  id: Scalars['ID']
};


export type GraphCmsPluginsArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>
};


export type GraphCmsPostArgs = {
  id: Scalars['ID']
};


export type GraphCmsPostByArgs = {
  id?: Maybe<Scalars['ID']>,
  postId?: Maybe<Scalars['Int']>,
  uri?: Maybe<Scalars['String']>,
  slug?: Maybe<Scalars['String']>
};


export type GraphCmsPostsArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  where?: Maybe<GraphCms_RootQueryToPostConnectionWhereArgs>
};


export type GraphCmsProductArgs = {
  id: Scalars['ID']
};


export type GraphCmsProductByArgs = {
  id?: Maybe<Scalars['ID']>,
  productId?: Maybe<Scalars['Int']>,
  slug?: Maybe<Scalars['String']>,
  sku?: Maybe<Scalars['String']>
};


export type GraphCmsProductCategoriesArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  where?: Maybe<GraphCms_RootQueryToProductCategoryConnectionWhereArgs>
};


export type GraphCmsProductCategoryArgs = {
  id: Scalars['ID']
};


export type GraphCmsProductTagArgs = {
  id: Scalars['ID']
};


export type GraphCmsProductTagsArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  where?: Maybe<GraphCms_RootQueryToProductTagConnectionWhereArgs>
};


export type GraphCmsProductTypeArgs = {
  id: Scalars['ID']
};


export type GraphCmsProductTypesArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  where?: Maybe<GraphCms_RootQueryToProductTypeConnectionWhereArgs>
};


export type GraphCmsProductVariationArgs = {
  id?: Maybe<Scalars['ID']>,
  variationId?: Maybe<Scalars['Int']>
};


export type GraphCmsProductsArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  where?: Maybe<GraphCms_RootQueryToProductConnectionWhereArgs>
};


export type GraphCmsRefundArgs = {
  id: Scalars['ID']
};


export type GraphCmsRefundByArgs = {
  id?: Maybe<Scalars['ID']>,
  refundId?: Maybe<Scalars['Int']>
};


export type GraphCmsRefundsArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  where?: Maybe<GraphCms_RootQueryToRefundConnectionWhereArgs>
};


export type GraphCmsRevisionsArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  where?: Maybe<GraphCms_RootQueryToContentRevisionUnionConnectionWhereArgs>
};


export type GraphCmsShippingClassArgs = {
  id: Scalars['ID']
};


export type GraphCmsShippingClassesArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  where?: Maybe<GraphCms_RootQueryToShippingClassConnectionWhereArgs>
};


export type GraphCmsShippingMethodArgs = {
  id?: Maybe<Scalars['ID']>,
  methodId?: Maybe<Scalars['ID']>
};


export type GraphCmsShippingMethodsArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>
};


export type GraphCmsSimpleProductArgs = {
  id?: Maybe<Scalars['ID']>,
  productId?: Maybe<Scalars['Int']>,
  slug?: Maybe<Scalars['String']>,
  sku?: Maybe<Scalars['String']>
};


export type GraphCmsTagArgs = {
  id: Scalars['ID']
};


export type GraphCmsTagsArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  where?: Maybe<GraphCms_RootQueryToTagConnectionWhereArgs>
};


export type GraphCmsTaxRateArgs = {
  id?: Maybe<Scalars['ID']>,
  rateId?: Maybe<Scalars['Int']>
};


export type GraphCmsTaxRatesArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  where?: Maybe<GraphCms_RootQueryToTaxRateConnectionWhereArgs>
};


export type GraphCmsThemeArgs = {
  id: Scalars['ID']
};


export type GraphCmsThemesArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>
};


export type GraphCmsUserArgs = {
  id: Scalars['ID']
};


export type GraphCmsUserRoleArgs = {
  id: Scalars['ID']
};


export type GraphCmsUserRolesArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>
};


export type GraphCmsUsersArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  where?: Maybe<GraphCms_RootQueryToUserConnectionWhereArgs>
};


export type GraphCmsVariableProductArgs = {
  id?: Maybe<Scalars['ID']>,
  productId?: Maybe<Scalars['Int']>,
  slug?: Maybe<Scalars['String']>,
  sku?: Maybe<Scalars['String']>
};


export type GraphCmsVisibleProductArgs = {
  id: Scalars['ID']
};


export type GraphCmsVisibleProductsArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  where?: Maybe<GraphCms_RootQueryToVisibleProductConnectionWhereArgs>
};

export type GraphCms_AddFeeInput = {
  amount?: Maybe<Scalars['Float']>,
  clientMutationId: Scalars['String'],
  name: Scalars['String'],
  taxClass?: Maybe<GraphCms_TaxClassEnum>,
  taxable?: Maybe<Scalars['Boolean']>,
};

export type GraphCms_AddFeePayload = {
   __typename?: 'GraphCMS_AddFeePayload',
  cart?: Maybe<GraphCms_Cart>,
  cartFee?: Maybe<GraphCms_CartFee>,
  clientMutationId: Scalars['String'],
};

export type GraphCms_AddToCartInput = {
  clientMutationId: Scalars['String'],
  extraData?: Maybe<Scalars['String']>,
  productId: Scalars['Int'],
  quantity?: Maybe<Scalars['Int']>,
  variation?: Maybe<Array<Maybe<GraphCms_ProductAttributeInput>>>,
  variationId?: Maybe<Scalars['Int']>,
};

export type GraphCms_AddToCartPayload = {
   __typename?: 'GraphCMS_AddToCartPayload',
  cart?: Maybe<GraphCms_Cart>,
  cartItem?: Maybe<GraphCms_CartItem>,
  clientMutationId: Scalars['String'],
};

export type GraphCms_ApplyCouponInput = {
  clientMutationId: Scalars['String'],
  code: Scalars['String'],
};

export type GraphCms_ApplyCouponPayload = {
   __typename?: 'GraphCMS_ApplyCouponPayload',
  cart?: Maybe<GraphCms_Cart>,
  clientMutationId: Scalars['String'],
};

export type GraphCms_Avatar = {
   __typename?: 'GraphCMS_Avatar',
  default?: Maybe<Scalars['String']>,
  extraAttr?: Maybe<Scalars['String']>,
  forceDefault?: Maybe<Scalars['Boolean']>,
  foundAvatar?: Maybe<Scalars['Boolean']>,
  height?: Maybe<Scalars['Int']>,
  isRestricted?: Maybe<Scalars['Boolean']>,
  rating?: Maybe<Scalars['String']>,
  scheme?: Maybe<Scalars['String']>,
  size?: Maybe<Scalars['Int']>,
  url?: Maybe<Scalars['String']>,
  width?: Maybe<Scalars['Int']>,
};

export enum GraphCms_AvatarRatingEnum {
  G = 'G',
  Pg = 'PG',
  R = 'R',
  X = 'X'
}

export enum GraphCms_BackordersEnum {
  No = 'NO',
  Notify = 'NOTIFY',
  Yes = 'YES'
}

export type GraphCms_Cart = {
   __typename?: 'GraphCMS_Cart',
  appliedCoupons?: Maybe<GraphCms_CartToCouponConnection>,
  availableShippingMethods?: Maybe<Array<Maybe<GraphCms_ShippingPackage>>>,
  chosenShippingMethod?: Maybe<Scalars['String']>,
  contents?: Maybe<GraphCms_CartToCartItemConnection>,
  contentsTax?: Maybe<Scalars['String']>,
  contentsTotal?: Maybe<Scalars['String']>,
  discountTax?: Maybe<Scalars['String']>,
  discountTotal?: Maybe<Scalars['String']>,
  displayPricesIncludeTax?: Maybe<Scalars['Boolean']>,
  feeTax?: Maybe<Scalars['String']>,
  feeTotal?: Maybe<Scalars['String']>,
  fees?: Maybe<Array<Maybe<GraphCms_CartFee>>>,
  isEmpty?: Maybe<Scalars['Boolean']>,
  needsShippingAddress?: Maybe<Scalars['Boolean']>,
  shippingTax?: Maybe<Scalars['String']>,
  shippingTotal?: Maybe<Scalars['String']>,
  subtotal?: Maybe<Scalars['String']>,
  subtotalTax?: Maybe<Scalars['String']>,
  total?: Maybe<Scalars['String']>,
  totalTax?: Maybe<Scalars['String']>,
};


export type GraphCms_CartAppliedCouponsArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  where?: Maybe<GraphCms_CartToCouponConnectionWhereArgs>
};


export type GraphCms_CartContentsArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  where?: Maybe<GraphCms_CartToCartItemConnectionWhereArgs>
};

export type GraphCms_CartFee = {
   __typename?: 'GraphCMS_CartFee',
  amount?: Maybe<Scalars['Float']>,
  id: Scalars['ID'],
  name: Scalars['String'],
  taxClass?: Maybe<GraphCms_TaxClassEnum>,
  taxable?: Maybe<Scalars['Boolean']>,
  total?: Maybe<Scalars['Float']>,
};

export type GraphCms_CartItem = {
   __typename?: 'GraphCMS_CartItem',
  extraData?: Maybe<Array<Maybe<GraphCms_MetaData>>>,
  key: Scalars['ID'],
  product?: Maybe<GraphCms_Product>,
  quantity?: Maybe<Scalars['Int']>,
  subtotal?: Maybe<Scalars['String']>,
  subtotalTax?: Maybe<Scalars['String']>,
  tax?: Maybe<Scalars['String']>,
  total?: Maybe<Scalars['String']>,
  variation?: Maybe<GraphCms_ProductVariation>,
};


export type GraphCms_CartItemExtraDataArgs = {
  key?: Maybe<Scalars['String']>,
  keysIn?: Maybe<Array<Maybe<Scalars['String']>>>
};

export type GraphCms_CartItemQuantityInput = {
  key: Scalars['ID'],
  quantity: Scalars['Int'],
};

export type GraphCms_CartToCartItemConnection = {
   __typename?: 'GraphCMS_CartToCartItemConnection',
  edges?: Maybe<Array<Maybe<GraphCms_CartToCartItemConnectionEdge>>>,
  nodes?: Maybe<Array<Maybe<GraphCms_CartItem>>>,
  pageInfo?: Maybe<GraphCms_WpPageInfo>,
};

export type GraphCms_CartToCartItemConnectionEdge = {
   __typename?: 'GraphCMS_CartToCartItemConnectionEdge',
  cursor?: Maybe<Scalars['String']>,
  node?: Maybe<GraphCms_CartItem>,
};

export type GraphCms_CartToCartItemConnectionWhereArgs = {
  needShipping?: Maybe<Scalars['Boolean']>,
};

export type GraphCms_CartToCouponConnection = {
   __typename?: 'GraphCMS_CartToCouponConnection',
  edges?: Maybe<Array<Maybe<GraphCms_CartToCouponConnectionEdge>>>,
  nodes?: Maybe<Array<Maybe<GraphCms_Coupon>>>,
  pageInfo?: Maybe<GraphCms_WpPageInfo>,
};

export type GraphCms_CartToCouponConnectionEdge = {
   __typename?: 'GraphCMS_CartToCouponConnectionEdge',
  cursor?: Maybe<Scalars['String']>,
  node?: Maybe<GraphCms_Coupon>,
};

export type GraphCms_CartToCouponConnectionWhereArgs = {
  code?: Maybe<Scalars['String']>,
  dateQuery?: Maybe<GraphCms_DateQueryInput>,
  exclude?: Maybe<Array<Maybe<Scalars['Int']>>>,
  include?: Maybe<Array<Maybe<Scalars['Int']>>>,
  orderby?: Maybe<Array<Maybe<GraphCms_PostTypeOrderbyInput>>>,
  parent?: Maybe<Scalars['Int']>,
  parentIn?: Maybe<Array<Maybe<Scalars['Int']>>>,
  parentNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>,
  search?: Maybe<Scalars['String']>,
};

export enum GraphCms_CatalogVisibilityEnum {
  Catalog = 'CATALOG',
  Hidden = 'HIDDEN',
  Search = 'SEARCH',
  Visible = 'VISIBLE'
}

export type GraphCms_Category = GraphCms_Node & {
   __typename?: 'GraphCMS_Category',
  ancestors?: Maybe<Array<Maybe<GraphCms_Category>>>,
  categoryId?: Maybe<Scalars['Int']>,
  children?: Maybe<GraphCms_CategoryToCategoryConnection>,
  count?: Maybe<Scalars['Int']>,
  description?: Maybe<Scalars['String']>,
  id: Scalars['ID'],
  isRestricted?: Maybe<Scalars['Boolean']>,
  link?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  parent?: Maybe<GraphCms_Category>,
  posts?: Maybe<GraphCms_CategoryToPostConnection>,
  slug?: Maybe<Scalars['String']>,
  taxonomy?: Maybe<GraphCms_Taxonomy>,
  termGroupId?: Maybe<Scalars['Int']>,
  termTaxonomyId?: Maybe<Scalars['Int']>,
};


export type GraphCms_CategoryChildrenArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  where?: Maybe<GraphCms_CategoryToCategoryConnectionWhereArgs>
};


export type GraphCms_CategoryPostsArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  where?: Maybe<GraphCms_CategoryToPostConnectionWhereArgs>
};

export type GraphCms_CategoryToCategoryConnection = {
   __typename?: 'GraphCMS_CategoryToCategoryConnection',
  edges?: Maybe<Array<Maybe<GraphCms_CategoryToCategoryConnectionEdge>>>,
  nodes?: Maybe<Array<Maybe<GraphCms_Category>>>,
  pageInfo?: Maybe<GraphCms_WpPageInfo>,
  taxonomyInfo?: Maybe<GraphCms_Taxonomy>,
};

export type GraphCms_CategoryToCategoryConnectionEdge = {
   __typename?: 'GraphCMS_CategoryToCategoryConnectionEdge',
  cursor?: Maybe<Scalars['String']>,
  node?: Maybe<GraphCms_Category>,
};

export type GraphCms_CategoryToCategoryConnectionWhereArgs = {
  cacheDomain?: Maybe<Scalars['String']>,
  childOf?: Maybe<Scalars['Int']>,
  childless?: Maybe<Scalars['Boolean']>,
  descriptionLike?: Maybe<Scalars['String']>,
  exclude?: Maybe<Array<Maybe<Scalars['ID']>>>,
  excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>,
  hideEmpty?: Maybe<Scalars['Boolean']>,
  hierarchical?: Maybe<Scalars['Boolean']>,
  include?: Maybe<Array<Maybe<Scalars['ID']>>>,
  name?: Maybe<Array<Maybe<Scalars['String']>>>,
  nameLike?: Maybe<Scalars['String']>,
  objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>,
  orderby?: Maybe<GraphCms_TermObjectsConnectionOrderbyEnum>,
  padCounts?: Maybe<Scalars['Boolean']>,
  parent?: Maybe<Scalars['Int']>,
  search?: Maybe<Scalars['String']>,
  shouldOnlyIncludeConnectedItems?: Maybe<Scalars['Boolean']>,
  shouldOutputInFlatList?: Maybe<Scalars['Boolean']>,
  slug?: Maybe<Array<Maybe<Scalars['String']>>>,
  termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>,
  updateTermMetaCache?: Maybe<Scalars['Boolean']>,
};

export type GraphCms_CategoryToPostConnection = {
   __typename?: 'GraphCMS_CategoryToPostConnection',
  edges?: Maybe<Array<Maybe<GraphCms_CategoryToPostConnectionEdge>>>,
  nodes?: Maybe<Array<Maybe<GraphCms_Post>>>,
  pageInfo?: Maybe<GraphCms_WpPageInfo>,
  postTypeInfo?: Maybe<GraphCms_PostType>,
};

export type GraphCms_CategoryToPostConnectionEdge = {
   __typename?: 'GraphCMS_CategoryToPostConnectionEdge',
  cursor?: Maybe<Scalars['String']>,
  node?: Maybe<GraphCms_Post>,
};

export type GraphCms_CategoryToPostConnectionWhereArgs = {
  author?: Maybe<Scalars['Int']>,
  authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>,
  authorName?: Maybe<Scalars['String']>,
  authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>,
  categoryId?: Maybe<Scalars['Int']>,
  categoryIn?: Maybe<Array<Maybe<Scalars['ID']>>>,
  categoryName?: Maybe<Scalars['String']>,
  categoryNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>,
  dateQuery?: Maybe<GraphCms_DateQueryInput>,
  hasPassword?: Maybe<Scalars['Boolean']>,
  id?: Maybe<Scalars['Int']>,
  in?: Maybe<Array<Maybe<Scalars['ID']>>>,
  mimeType?: Maybe<GraphCms_MimeTypeEnum>,
  name?: Maybe<Scalars['String']>,
  nameIn?: Maybe<Array<Maybe<Scalars['String']>>>,
  notIn?: Maybe<Array<Maybe<Scalars['ID']>>>,
  orderby?: Maybe<Array<Maybe<GraphCms_PostObjectsConnectionOrderbyInput>>>,
  parent?: Maybe<Scalars['String']>,
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>,
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>,
  password?: Maybe<Scalars['String']>,
  search?: Maybe<Scalars['String']>,
  stati?: Maybe<Array<Maybe<GraphCms_PostStatusEnum>>>,
  status?: Maybe<GraphCms_PostStatusEnum>,
  tag?: Maybe<Scalars['String']>,
  tagId?: Maybe<Scalars['String']>,
  tagIn?: Maybe<Array<Maybe<Scalars['ID']>>>,
  tagNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>,
  tagSlugAnd?: Maybe<Array<Maybe<Scalars['String']>>>,
  tagSlugIn?: Maybe<Array<Maybe<Scalars['String']>>>,
  title?: Maybe<Scalars['String']>,
};

export type GraphCms_CheckoutInput = {
  account?: Maybe<GraphCms_CreateAccountInput>,
  billing?: Maybe<GraphCms_CustomerAddressInput>,
  clientMutationId: Scalars['String'],
  paymentMethod?: Maybe<Scalars['String']>,
  paymentMethodTitle?: Maybe<Scalars['String']>,
  shipToDifferentAddress?: Maybe<Scalars['Boolean']>,
  shipping?: Maybe<GraphCms_CustomerAddressInput>,
  shippingMethod?: Maybe<Scalars['String']>,
};

export type GraphCms_CheckoutPayload = {
   __typename?: 'GraphCMS_CheckoutPayload',
  clientMutationId: Scalars['String'],
  customer?: Maybe<GraphCms_Customer>,
  order?: Maybe<GraphCms_Order>,
  redirect?: Maybe<Scalars['String']>,
  result?: Maybe<Scalars['String']>,
};

export type GraphCms_Comment = GraphCms_Node & {
   __typename?: 'GraphCMS_Comment',
  agent?: Maybe<Scalars['String']>,
  approved?: Maybe<Scalars['Boolean']>,
  author?: Maybe<GraphCms_CommentAuthorUnion>,
  authorIp?: Maybe<Scalars['String']>,
  children?: Maybe<GraphCms_CommentToCommentConnection>,
  commentId?: Maybe<Scalars['Int']>,
  commentedOn?: Maybe<GraphCms_PostObjectUnion>,
  content?: Maybe<Scalars['String']>,
  date?: Maybe<Scalars['String']>,
  dateGmt?: Maybe<Scalars['String']>,
  id: Scalars['ID'],
  isRestricted?: Maybe<Scalars['Boolean']>,
  karma?: Maybe<Scalars['Int']>,
  parent?: Maybe<GraphCms_Comment>,
  type?: Maybe<Scalars['String']>,
};


export type GraphCms_CommentChildrenArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  where?: Maybe<GraphCms_CommentToCommentConnectionWhereArgs>
};


export type GraphCms_CommentContentArgs = {
  format?: Maybe<GraphCms_PostObjectFieldFormatEnum>
};

export type GraphCms_CommentAuthor = GraphCms_Node & {
   __typename?: 'GraphCMS_CommentAuthor',
  email?: Maybe<Scalars['String']>,
  id: Scalars['ID'],
  isRestricted?: Maybe<Scalars['Boolean']>,
  name?: Maybe<Scalars['String']>,
  url?: Maybe<Scalars['String']>,
};

export type GraphCms_CommentAuthorUnion = GraphCms_User | GraphCms_CommentAuthor;

export enum GraphCms_CommentsConnectionOrderbyEnum {
  CommentAgent = 'COMMENT_AGENT',
  CommentApproved = 'COMMENT_APPROVED',
  CommentAuthor = 'COMMENT_AUTHOR',
  CommentAuthorEmail = 'COMMENT_AUTHOR_EMAIL',
  CommentAuthorIp = 'COMMENT_AUTHOR_IP',
  CommentAuthorUrl = 'COMMENT_AUTHOR_URL',
  CommentContent = 'COMMENT_CONTENT',
  CommentDate = 'COMMENT_DATE',
  CommentDateGmt = 'COMMENT_DATE_GMT',
  CommentId = 'COMMENT_ID',
  CommentIn = 'COMMENT_IN',
  CommentKarma = 'COMMENT_KARMA',
  CommentParent = 'COMMENT_PARENT',
  CommentPostId = 'COMMENT_POST_ID',
  CommentType = 'COMMENT_TYPE',
  UserId = 'USER_ID'
}

export type GraphCms_CommentToCommentConnection = {
   __typename?: 'GraphCMS_CommentToCommentConnection',
  edges?: Maybe<Array<Maybe<GraphCms_CommentToCommentConnectionEdge>>>,
  nodes?: Maybe<Array<Maybe<GraphCms_Comment>>>,
  pageInfo?: Maybe<GraphCms_WpPageInfo>,
};

export type GraphCms_CommentToCommentConnectionEdge = {
   __typename?: 'GraphCMS_CommentToCommentConnectionEdge',
  cursor?: Maybe<Scalars['String']>,
  node?: Maybe<GraphCms_Comment>,
};

export type GraphCms_CommentToCommentConnectionWhereArgs = {
  authorEmail?: Maybe<Scalars['String']>,
  authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>,
  authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>,
  authorUrl?: Maybe<Scalars['String']>,
  commentIn?: Maybe<Array<Maybe<Scalars['ID']>>>,
  commentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>,
  commentType?: Maybe<Scalars['String']>,
  commentTypeIn?: Maybe<Array<Maybe<Scalars['String']>>>,
  commentTypeNotIn?: Maybe<Scalars['String']>,
  contentAuthor?: Maybe<Array<Maybe<Scalars['ID']>>>,
  contentAuthorIn?: Maybe<Array<Maybe<Scalars['ID']>>>,
  contentAuthorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>,
  contentId?: Maybe<Scalars['ID']>,
  contentIdIn?: Maybe<Array<Maybe<Scalars['ID']>>>,
  contentIdNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>,
  contentName?: Maybe<Scalars['String']>,
  contentParent?: Maybe<Scalars['Int']>,
  contentStatus?: Maybe<Array<Maybe<GraphCms_PostStatusEnum>>>,
  contentType?: Maybe<Array<Maybe<GraphCms_PostTypeEnum>>>,
  includeUnapproved?: Maybe<Array<Maybe<Scalars['ID']>>>,
  karma?: Maybe<Scalars['Int']>,
  order?: Maybe<GraphCms_OrderEnum>,
  orderby?: Maybe<GraphCms_CommentsConnectionOrderbyEnum>,
  parent?: Maybe<Scalars['Int']>,
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>,
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>,
  search?: Maybe<Scalars['String']>,
  status?: Maybe<Scalars['String']>,
  userId?: Maybe<Scalars['ID']>,
};

export type GraphCms_ContentRevisionUnion = GraphCms_Post | GraphCms_Page;

export enum GraphCms_CountriesEnum {
  Ad = 'AD',
  Ae = 'AE',
  Af = 'AF',
  Ag = 'AG',
  Ai = 'AI',
  Al = 'AL',
  Am = 'AM',
  Ao = 'AO',
  Aq = 'AQ',
  Ar = 'AR',
  As = 'AS',
  At = 'AT',
  Au = 'AU',
  Aw = 'AW',
  Ax = 'AX',
  Az = 'AZ',
  Ba = 'BA',
  Bb = 'BB',
  Bd = 'BD',
  Be = 'BE',
  Bf = 'BF',
  Bg = 'BG',
  Bh = 'BH',
  Bi = 'BI',
  Bj = 'BJ',
  Bl = 'BL',
  Bm = 'BM',
  Bn = 'BN',
  Bo = 'BO',
  Bq = 'BQ',
  Br = 'BR',
  Bs = 'BS',
  Bt = 'BT',
  Bv = 'BV',
  Bw = 'BW',
  By = 'BY',
  Bz = 'BZ',
  Ca = 'CA',
  Cc = 'CC',
  Cd = 'CD',
  Cf = 'CF',
  Cg = 'CG',
  Ch = 'CH',
  Ci = 'CI',
  Ck = 'CK',
  Cl = 'CL',
  Cm = 'CM',
  Cn = 'CN',
  Co = 'CO',
  Cr = 'CR',
  Cu = 'CU',
  Cv = 'CV',
  Cw = 'CW',
  Cx = 'CX',
  Cy = 'CY',
  Cz = 'CZ',
  De = 'DE',
  Dj = 'DJ',
  Dk = 'DK',
  Dm = 'DM',
  Do = 'DO',
  Dz = 'DZ',
  Ec = 'EC',
  Ee = 'EE',
  Eg = 'EG',
  Eh = 'EH',
  Er = 'ER',
  Es = 'ES',
  Et = 'ET',
  Fi = 'FI',
  Fj = 'FJ',
  Fk = 'FK',
  Fm = 'FM',
  Fo = 'FO',
  Fr = 'FR',
  Ga = 'GA',
  Gb = 'GB',
  Gd = 'GD',
  Ge = 'GE',
  Gf = 'GF',
  Gg = 'GG',
  Gh = 'GH',
  Gi = 'GI',
  Gl = 'GL',
  Gm = 'GM',
  Gn = 'GN',
  Gp = 'GP',
  Gq = 'GQ',
  Gr = 'GR',
  Gs = 'GS',
  Gt = 'GT',
  Gu = 'GU',
  Gw = 'GW',
  Gy = 'GY',
  Hk = 'HK',
  Hm = 'HM',
  Hn = 'HN',
  Hr = 'HR',
  Ht = 'HT',
  Hu = 'HU',
  Id = 'ID',
  Ie = 'IE',
  Il = 'IL',
  Im = 'IM',
  In = 'IN',
  Io = 'IO',
  Iq = 'IQ',
  Ir = 'IR',
  Is = 'IS',
  It = 'IT',
  Je = 'JE',
  Jm = 'JM',
  Jo = 'JO',
  Jp = 'JP',
  Ke = 'KE',
  Kg = 'KG',
  Kh = 'KH',
  Ki = 'KI',
  Km = 'KM',
  Kn = 'KN',
  Kp = 'KP',
  Kr = 'KR',
  Kw = 'KW',
  Ky = 'KY',
  Kz = 'KZ',
  La = 'LA',
  Lb = 'LB',
  Lc = 'LC',
  Li = 'LI',
  Lk = 'LK',
  Lr = 'LR',
  Ls = 'LS',
  Lt = 'LT',
  Lu = 'LU',
  Lv = 'LV',
  Ly = 'LY',
  Ma = 'MA',
  Mc = 'MC',
  Md = 'MD',
  Me = 'ME',
  Mf = 'MF',
  Mg = 'MG',
  Mh = 'MH',
  Mk = 'MK',
  Ml = 'ML',
  Mm = 'MM',
  Mn = 'MN',
  Mo = 'MO',
  Mp = 'MP',
  Mq = 'MQ',
  Mr = 'MR',
  Ms = 'MS',
  Mt = 'MT',
  Mu = 'MU',
  Mv = 'MV',
  Mw = 'MW',
  Mx = 'MX',
  My = 'MY',
  Mz = 'MZ',
  Na = 'NA',
  Nc = 'NC',
  Ne = 'NE',
  Nf = 'NF',
  Ng = 'NG',
  Ni = 'NI',
  Nl = 'NL',
  No = 'NO',
  Np = 'NP',
  Nr = 'NR',
  Nu = 'NU',
  Nz = 'NZ',
  Om = 'OM',
  Pa = 'PA',
  Pe = 'PE',
  Pf = 'PF',
  Pg = 'PG',
  Ph = 'PH',
  Pk = 'PK',
  Pl = 'PL',
  Pm = 'PM',
  Pn = 'PN',
  Pr = 'PR',
  Ps = 'PS',
  Pt = 'PT',
  Pw = 'PW',
  Py = 'PY',
  Qa = 'QA',
  Re = 'RE',
  Ro = 'RO',
  Rs = 'RS',
  Ru = 'RU',
  Rw = 'RW',
  Sa = 'SA',
  Sb = 'SB',
  Sc = 'SC',
  Sd = 'SD',
  Se = 'SE',
  Sg = 'SG',
  Sh = 'SH',
  Si = 'SI',
  Sj = 'SJ',
  Sk = 'SK',
  Sl = 'SL',
  Sm = 'SM',
  Sn = 'SN',
  So = 'SO',
  Sr = 'SR',
  Ss = 'SS',
  St = 'ST',
  Sv = 'SV',
  Sx = 'SX',
  Sy = 'SY',
  Sz = 'SZ',
  Tc = 'TC',
  Td = 'TD',
  Tf = 'TF',
  Tg = 'TG',
  Th = 'TH',
  Tj = 'TJ',
  Tk = 'TK',
  Tl = 'TL',
  Tm = 'TM',
  Tn = 'TN',
  To = 'TO',
  Tr = 'TR',
  Tt = 'TT',
  Tv = 'TV',
  Tw = 'TW',
  Tz = 'TZ',
  Ua = 'UA',
  Ug = 'UG',
  Um = 'UM',
  Us = 'US',
  Uy = 'UY',
  Uz = 'UZ',
  Va = 'VA',
  Vc = 'VC',
  Ve = 'VE',
  Vg = 'VG',
  Vi = 'VI',
  Vn = 'VN',
  Vu = 'VU',
  Wf = 'WF',
  Ws = 'WS',
  Ye = 'YE',
  Yt = 'YT',
  Za = 'ZA',
  Zm = 'ZM',
  Zw = 'ZW'
}

export type GraphCms_Coupon = GraphCms_Node & {
   __typename?: 'GraphCMS_Coupon',
  amount?: Maybe<Scalars['Float']>,
  code?: Maybe<Scalars['String']>,
  couponId?: Maybe<Scalars['Int']>,
  date?: Maybe<Scalars['String']>,
  dateExpiry?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  discountType?: Maybe<GraphCms_DiscountTypeEnum>,
  emailRestrictions?: Maybe<Array<Maybe<Scalars['String']>>>,
  excludeSaleItems?: Maybe<Scalars['Boolean']>,
  excludedProductCategories?: Maybe<GraphCms_CouponToProductCategoryConnection>,
  excludedProducts?: Maybe<GraphCms_CouponToProductConnection>,
  freeShipping?: Maybe<Scalars['Boolean']>,
  id: Scalars['ID'],
  individualUse?: Maybe<Scalars['Boolean']>,
  limitUsageToXItems?: Maybe<Scalars['Int']>,
  maximumAmount?: Maybe<Scalars['Float']>,
  metaData?: Maybe<Array<Maybe<GraphCms_MetaData>>>,
  minimumAmount?: Maybe<Scalars['Float']>,
  modified?: Maybe<Scalars['String']>,
  productCategories?: Maybe<GraphCms_CouponToProductCategoryConnection>,
  products?: Maybe<GraphCms_CouponToProductConnection>,
  usageCount?: Maybe<Scalars['Int']>,
  usageLimit?: Maybe<Scalars['Int']>,
  usageLimitPerUser?: Maybe<Scalars['Int']>,
  usedBy?: Maybe<GraphCms_CouponToCustomerConnection>,
};


export type GraphCms_CouponExcludedProductCategoriesArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  where?: Maybe<GraphCms_CouponToProductCategoryConnectionWhereArgs>
};


export type GraphCms_CouponExcludedProductsArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  where?: Maybe<GraphCms_CouponToProductConnectionWhereArgs>
};


export type GraphCms_CouponMetaDataArgs = {
  key?: Maybe<Scalars['String']>,
  keysIn?: Maybe<Array<Maybe<Scalars['String']>>>,
  multiple?: Maybe<Scalars['Boolean']>
};


export type GraphCms_CouponProductCategoriesArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  where?: Maybe<GraphCms_CouponToProductCategoryConnectionWhereArgs>
};


export type GraphCms_CouponProductsArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  where?: Maybe<GraphCms_CouponToProductConnectionWhereArgs>
};


export type GraphCms_CouponUsedByArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  where?: Maybe<GraphCms_CouponToCustomerConnectionWhereArgs>
};

export type GraphCms_CouponLine = {
   __typename?: 'GraphCMS_CouponLine',
  code?: Maybe<Scalars['String']>,
  coupon?: Maybe<GraphCms_Coupon>,
  discount?: Maybe<Scalars['String']>,
  discountTax?: Maybe<Scalars['String']>,
  itemId?: Maybe<Scalars['Int']>,
  metaData?: Maybe<Array<Maybe<GraphCms_MetaData>>>,
  orderId?: Maybe<Scalars['Int']>,
};


export type GraphCms_CouponLineMetaDataArgs = {
  key?: Maybe<Scalars['String']>,
  keysIn?: Maybe<Array<Maybe<Scalars['String']>>>,
  multiple?: Maybe<Scalars['Boolean']>
};

export type GraphCms_CouponToCustomerConnection = {
   __typename?: 'GraphCMS_CouponToCustomerConnection',
  edges?: Maybe<Array<Maybe<GraphCms_CouponToCustomerConnectionEdge>>>,
  nodes?: Maybe<Array<Maybe<GraphCms_Customer>>>,
  pageInfo?: Maybe<GraphCms_WpPageInfo>,
};

export type GraphCms_CouponToCustomerConnectionEdge = {
   __typename?: 'GraphCMS_CouponToCustomerConnectionEdge',
  cursor?: Maybe<Scalars['String']>,
  node?: Maybe<GraphCms_Customer>,
};

export type GraphCms_CouponToCustomerConnectionWhereArgs = {
  email?: Maybe<Scalars['String']>,
  exclude?: Maybe<Array<Maybe<Scalars['Int']>>>,
  include?: Maybe<Array<Maybe<Scalars['Int']>>>,
  order?: Maybe<GraphCms_OrderEnum>,
  orderby?: Maybe<GraphCms_CustomerConnectionOrderbyEnum>,
  role?: Maybe<GraphCms_UserRoleEnum>,
  roleIn?: Maybe<Array<Maybe<GraphCms_UserRoleEnum>>>,
  roleNotIn?: Maybe<Array<Maybe<GraphCms_UserRoleEnum>>>,
  search?: Maybe<Scalars['String']>,
};

export type GraphCms_CouponToProductCategoryConnection = {
   __typename?: 'GraphCMS_CouponToProductCategoryConnection',
  edges?: Maybe<Array<Maybe<GraphCms_CouponToProductCategoryConnectionEdge>>>,
  nodes?: Maybe<Array<Maybe<GraphCms_ProductCategory>>>,
  pageInfo?: Maybe<GraphCms_WpPageInfo>,
  taxonomyInfo?: Maybe<GraphCms_Taxonomy>,
};

export type GraphCms_CouponToProductCategoryConnectionEdge = {
   __typename?: 'GraphCMS_CouponToProductCategoryConnectionEdge',
  cursor?: Maybe<Scalars['String']>,
  node?: Maybe<GraphCms_ProductCategory>,
};

export type GraphCms_CouponToProductCategoryConnectionWhereArgs = {
  cacheDomain?: Maybe<Scalars['String']>,
  childOf?: Maybe<Scalars['Int']>,
  childless?: Maybe<Scalars['Boolean']>,
  descriptionLike?: Maybe<Scalars['String']>,
  exclude?: Maybe<Array<Maybe<Scalars['ID']>>>,
  excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>,
  hideEmpty?: Maybe<Scalars['Boolean']>,
  hierarchical?: Maybe<Scalars['Boolean']>,
  include?: Maybe<Array<Maybe<Scalars['ID']>>>,
  name?: Maybe<Array<Maybe<Scalars['String']>>>,
  nameLike?: Maybe<Scalars['String']>,
  objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>,
  orderby?: Maybe<GraphCms_TermObjectsConnectionOrderbyEnum>,
  padCounts?: Maybe<Scalars['Boolean']>,
  parent?: Maybe<Scalars['Int']>,
  search?: Maybe<Scalars['String']>,
  shouldOnlyIncludeConnectedItems?: Maybe<Scalars['Boolean']>,
  shouldOutputInFlatList?: Maybe<Scalars['Boolean']>,
  slug?: Maybe<Array<Maybe<Scalars['String']>>>,
  termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>,
  updateTermMetaCache?: Maybe<Scalars['Boolean']>,
};

export type GraphCms_CouponToProductConnection = {
   __typename?: 'GraphCMS_CouponToProductConnection',
  edges?: Maybe<Array<Maybe<GraphCms_CouponToProductConnectionEdge>>>,
  nodes?: Maybe<Array<Maybe<GraphCms_Product>>>,
  pageInfo?: Maybe<GraphCms_WpPageInfo>,
};

export type GraphCms_CouponToProductConnectionEdge = {
   __typename?: 'GraphCMS_CouponToProductConnectionEdge',
  cursor?: Maybe<Scalars['String']>,
  node?: Maybe<GraphCms_Product>,
};

export type GraphCms_CouponToProductConnectionWhereArgs = {
  attribute?: Maybe<Scalars['String']>,
  attributeTerm?: Maybe<Scalars['String']>,
  category?: Maybe<Scalars['String']>,
  categoryId?: Maybe<Scalars['Int']>,
  categoryIdIn?: Maybe<Array<Maybe<Scalars['Int']>>>,
  categoryIdNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>,
  categoryIn?: Maybe<Array<Maybe<Scalars['String']>>>,
  categoryNotIn?: Maybe<Array<Maybe<Scalars['String']>>>,
  dateQuery?: Maybe<GraphCms_DateQueryInput>,
  exclude?: Maybe<Array<Maybe<Scalars['Int']>>>,
  featured?: Maybe<Scalars['Boolean']>,
  include?: Maybe<Array<Maybe<Scalars['Int']>>>,
  maxPrice?: Maybe<Scalars['Float']>,
  minPrice?: Maybe<Scalars['Float']>,
  onSale?: Maybe<Scalars['Boolean']>,
  orderby?: Maybe<Array<Maybe<GraphCms_ProductsOrderbyInput>>>,
  parent?: Maybe<Scalars['Int']>,
  parentIn?: Maybe<Array<Maybe<Scalars['Int']>>>,
  parentNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>,
  search?: Maybe<Scalars['String']>,
  shippingClassId?: Maybe<Scalars['Int']>,
  sku?: Maybe<Scalars['String']>,
  slug?: Maybe<Scalars['String']>,
  status?: Maybe<Scalars['String']>,
  stockStatus?: Maybe<Array<Maybe<GraphCms_StockStatusEnum>>>,
  tag?: Maybe<Scalars['String']>,
  tagId?: Maybe<Scalars['Int']>,
  tagIdIn?: Maybe<Array<Maybe<Scalars['Int']>>>,
  tagIdNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>,
  tagIn?: Maybe<Array<Maybe<Scalars['String']>>>,
  tagNotIn?: Maybe<Array<Maybe<Scalars['String']>>>,
  taxClass?: Maybe<GraphCms_TaxClassEnum>,
  taxonomyFilter?: Maybe<Array<Maybe<GraphCms_ProductTaxonomyFilterRelationInput>>>,
  type?: Maybe<GraphCms_ProductTypesEnum>,
  typeIn?: Maybe<Array<Maybe<GraphCms_ProductTypesEnum>>>,
  typeNotIn?: Maybe<Array<Maybe<GraphCms_ProductTypesEnum>>>,
  visibility?: Maybe<GraphCms_CatalogVisibilityEnum>,
};

export type GraphCms_CreateAccountInput = {
  password: Scalars['String'],
  username: Scalars['String'],
};

export type GraphCms_CreateCategoryInput = {
  aliasOf?: Maybe<Scalars['String']>,
  clientMutationId: Scalars['String'],
  description?: Maybe<Scalars['String']>,
  name: Scalars['String'],
  parentId?: Maybe<Scalars['ID']>,
  slug?: Maybe<Scalars['String']>,
};

export type GraphCms_CreateCategoryPayload = {
   __typename?: 'GraphCMS_CreateCategoryPayload',
  category?: Maybe<GraphCms_Category>,
  clientMutationId: Scalars['String'],
};

export type GraphCms_CreateCommentInput = {
  agent?: Maybe<Scalars['String']>,
  approved?: Maybe<Scalars['String']>,
  author?: Maybe<Scalars['String']>,
  authorEmail?: Maybe<Scalars['String']>,
  authorIp?: Maybe<Scalars['String']>,
  authorUrl?: Maybe<Scalars['String']>,
  clientMutationId: Scalars['String'],
  commentOn?: Maybe<Scalars['Int']>,
  content?: Maybe<Scalars['String']>,
  date?: Maybe<Scalars['String']>,
  parent?: Maybe<Scalars['ID']>,
  type?: Maybe<Scalars['String']>,
  userId?: Maybe<Scalars['Int']>,
};

export type GraphCms_CreateCommentPayload = {
   __typename?: 'GraphCMS_CreateCommentPayload',
  clientMutationId: Scalars['String'],
  comment?: Maybe<GraphCms_Comment>,
  success?: Maybe<Scalars['Boolean']>,
};

export type GraphCms_CreateMediaItemInput = {
  altText?: Maybe<Scalars['String']>,
  authorId?: Maybe<Scalars['ID']>,
  caption?: Maybe<Scalars['String']>,
  clientMutationId: Scalars['String'],
  commentStatus?: Maybe<Scalars['String']>,
  date?: Maybe<Scalars['String']>,
  dateGmt?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  filePath?: Maybe<Scalars['String']>,
  fileType?: Maybe<GraphCms_MimeTypeEnum>,
  parentId?: Maybe<Scalars['ID']>,
  pingStatus?: Maybe<Scalars['String']>,
  slug?: Maybe<Scalars['String']>,
  status?: Maybe<GraphCms_MediaItemStatusEnum>,
  title?: Maybe<Scalars['String']>,
};

export type GraphCms_CreateMediaItemPayload = {
   __typename?: 'GraphCMS_CreateMediaItemPayload',
  clientMutationId: Scalars['String'],
  mediaItem?: Maybe<GraphCms_MediaItem>,
};

export type GraphCms_CreateOrderInput = {
  billing?: Maybe<GraphCms_CustomerAddressInput>,
  clientMutationId: Scalars['String'],
  coupons?: Maybe<Array<Maybe<Scalars['String']>>>,
  currency?: Maybe<Scalars['String']>,
  customerId?: Maybe<Scalars['Int']>,
  customerNote?: Maybe<Scalars['String']>,
  feeLines?: Maybe<Array<Maybe<GraphCms_FeeLineInput>>>,
  isPaid?: Maybe<Scalars['Boolean']>,
  lineItems?: Maybe<Array<Maybe<GraphCms_LineItemInput>>>,
  metaData?: Maybe<Array<Maybe<GraphCms_MetaDataInput>>>,
  parentId?: Maybe<Scalars['Int']>,
  paymentMethod?: Maybe<Scalars['String']>,
  paymentMethodTitle?: Maybe<Scalars['String']>,
  shipping?: Maybe<GraphCms_CustomerAddressInput>,
  shippingLines?: Maybe<Array<Maybe<GraphCms_ShippingLineInput>>>,
  status?: Maybe<GraphCms_OrderStatusEnum>,
  transactionId?: Maybe<Scalars['String']>,
};

export type GraphCms_CreateOrderPayload = {
   __typename?: 'GraphCMS_CreateOrderPayload',
  clientMutationId: Scalars['String'],
  order?: Maybe<GraphCms_Order>,
};

export type GraphCms_CreatePageInput = {
  authorId?: Maybe<Scalars['ID']>,
  clientMutationId: Scalars['String'],
  commentCount?: Maybe<Scalars['Int']>,
  commentStatus?: Maybe<Scalars['String']>,
  content?: Maybe<Scalars['String']>,
  date?: Maybe<Scalars['String']>,
  excerpt?: Maybe<Scalars['String']>,
  menuOrder?: Maybe<Scalars['Int']>,
  mimeType?: Maybe<GraphCms_MimeTypeEnum>,
  parentId?: Maybe<Scalars['ID']>,
  password?: Maybe<Scalars['String']>,
  pingStatus?: Maybe<Scalars['String']>,
  pinged?: Maybe<Array<Maybe<Scalars['String']>>>,
  slug?: Maybe<Scalars['String']>,
  status?: Maybe<GraphCms_PostStatusEnum>,
  title?: Maybe<Scalars['String']>,
  toPing?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type GraphCms_CreatePagePayload = {
   __typename?: 'GraphCMS_CreatePagePayload',
  clientMutationId: Scalars['String'],
  page?: Maybe<GraphCms_Page>,
};

export type GraphCms_CreatePaHindInput = {
  aliasOf?: Maybe<Scalars['String']>,
  clientMutationId: Scalars['String'],
  description?: Maybe<Scalars['String']>,
  name: Scalars['String'],
  slug?: Maybe<Scalars['String']>,
};

export type GraphCms_CreatePaHindPayload = {
   __typename?: 'GraphCMS_CreatePaHindPayload',
  clientMutationId: Scalars['String'],
  paHind?: Maybe<GraphCms_PaHind>,
};

export type GraphCms_CreatePaHulkInput = {
  aliasOf?: Maybe<Scalars['String']>,
  clientMutationId: Scalars['String'],
  description?: Maybe<Scalars['String']>,
  name: Scalars['String'],
  slug?: Maybe<Scalars['String']>,
};

export type GraphCms_CreatePaHulkPayload = {
   __typename?: 'GraphCMS_CreatePaHulkPayload',
  clientMutationId: Scalars['String'],
  paHulk?: Maybe<GraphCms_PaHulk>,
};

export type GraphCms_CreatePaKasutusaegInput = {
  aliasOf?: Maybe<Scalars['String']>,
  clientMutationId: Scalars['String'],
  description?: Maybe<Scalars['String']>,
  name: Scalars['String'],
  slug?: Maybe<Scalars['String']>,
};

export type GraphCms_CreatePaKasutusaegPayload = {
   __typename?: 'GraphCMS_CreatePaKasutusaegPayload',
  clientMutationId: Scalars['String'],
  paKasutusaeg?: Maybe<GraphCms_PaKasutusaeg>,
};

export type GraphCms_CreatePaKogusInput = {
  aliasOf?: Maybe<Scalars['String']>,
  clientMutationId: Scalars['String'],
  description?: Maybe<Scalars['String']>,
  name: Scalars['String'],
  slug?: Maybe<Scalars['String']>,
};

export type GraphCms_CreatePaKogusPayload = {
   __typename?: 'GraphCMS_CreatePaKogusPayload',
  clientMutationId: Scalars['String'],
  paKogus?: Maybe<GraphCms_PaKogus>,
};

export type GraphCms_CreatePaKontuurInput = {
  aliasOf?: Maybe<Scalars['String']>,
  clientMutationId: Scalars['String'],
  description?: Maybe<Scalars['String']>,
  name: Scalars['String'],
  slug?: Maybe<Scalars['String']>,
};

export type GraphCms_CreatePaKontuurPayload = {
   __typename?: 'GraphCMS_CreatePaKontuurPayload',
  clientMutationId: Scalars['String'],
  paKontuur?: Maybe<GraphCms_PaKontuur>,
};

export type GraphCms_CreatePaKoostisainedInput = {
  aliasOf?: Maybe<Scalars['String']>,
  clientMutationId: Scalars['String'],
  description?: Maybe<Scalars['String']>,
  name: Scalars['String'],
  slug?: Maybe<Scalars['String']>,
};

export type GraphCms_CreatePaKoostisainedPayload = {
   __typename?: 'GraphCMS_CreatePaKoostisainedPayload',
  clientMutationId: Scalars['String'],
  paKoostisained?: Maybe<GraphCms_PaKoostisained>,
};

export type GraphCms_CreatePaLaadimisaegInput = {
  aliasOf?: Maybe<Scalars['String']>,
  clientMutationId: Scalars['String'],
  description?: Maybe<Scalars['String']>,
  name: Scalars['String'],
  slug?: Maybe<Scalars['String']>,
};

export type GraphCms_CreatePaLaadimisaegPayload = {
   __typename?: 'GraphCMS_CreatePaLaadimisaegPayload',
  clientMutationId: Scalars['String'],
  paLaadimisaeg?: Maybe<GraphCms_PaLaadimisaeg>,
};

export type GraphCms_CreatePaMaterjalInput = {
  aliasOf?: Maybe<Scalars['String']>,
  clientMutationId: Scalars['String'],
  description?: Maybe<Scalars['String']>,
  name: Scalars['String'],
  slug?: Maybe<Scalars['String']>,
};

export type GraphCms_CreatePaMaterjalPayload = {
   __typename?: 'GraphCMS_CreatePaMaterjalPayload',
  clientMutationId: Scalars['String'],
  paMaterjal?: Maybe<GraphCms_PaMaterjal>,
};

export type GraphCms_CreatePaMuratasaInput = {
  aliasOf?: Maybe<Scalars['String']>,
  clientMutationId: Scalars['String'],
  description?: Maybe<Scalars['String']>,
  name: Scalars['String'],
  slug?: Maybe<Scalars['String']>,
};

export type GraphCms_CreatePaMuratasaPayload = {
   __typename?: 'GraphCMS_CreatePaMuratasaPayload',
  clientMutationId: Scalars['String'],
  paMuratasa?: Maybe<GraphCms_PaMuratasa>,
};

export type GraphCms_CreatePaOhutusInput = {
  aliasOf?: Maybe<Scalars['String']>,
  clientMutationId: Scalars['String'],
  description?: Maybe<Scalars['String']>,
  name: Scalars['String'],
  slug?: Maybe<Scalars['String']>,
};

export type GraphCms_CreatePaOhutusPayload = {
   __typename?: 'GraphCMS_CreatePaOhutusPayload',
  clientMutationId: Scalars['String'],
  paOhutus?: Maybe<GraphCms_PaOhutus>,
};

export type GraphCms_CreatePaPatareidInput = {
  aliasOf?: Maybe<Scalars['String']>,
  clientMutationId: Scalars['String'],
  description?: Maybe<Scalars['String']>,
  name: Scalars['String'],
  slug?: Maybe<Scalars['String']>,
};

export type GraphCms_CreatePaPatareidPayload = {
   __typename?: 'GraphCMS_CreatePaPatareidPayload',
  clientMutationId: Scalars['String'],
  paPatareid?: Maybe<GraphCms_PaPatareid>,
};

export type GraphCms_CreatePaSuurusInput = {
  aliasOf?: Maybe<Scalars['String']>,
  clientMutationId: Scalars['String'],
  description?: Maybe<Scalars['String']>,
  name: Scalars['String'],
  slug?: Maybe<Scalars['String']>,
};

export type GraphCms_CreatePaSuurusPayload = {
   __typename?: 'GraphCMS_CreatePaSuurusPayload',
  clientMutationId: Scalars['String'],
  paSuurus?: Maybe<GraphCms_PaSuurus>,
};

export type GraphCms_CreatePaVariantInput = {
  aliasOf?: Maybe<Scalars['String']>,
  clientMutationId: Scalars['String'],
  description?: Maybe<Scalars['String']>,
  name: Scalars['String'],
  slug?: Maybe<Scalars['String']>,
};

export type GraphCms_CreatePaVariantPayload = {
   __typename?: 'GraphCMS_CreatePaVariantPayload',
  clientMutationId: Scalars['String'],
  paVariant?: Maybe<GraphCms_PaVariant>,
};

export type GraphCms_CreatePaVarvInput = {
  aliasOf?: Maybe<Scalars['String']>,
  clientMutationId: Scalars['String'],
  description?: Maybe<Scalars['String']>,
  name: Scalars['String'],
  slug?: Maybe<Scalars['String']>,
};

export type GraphCms_CreatePaVarvPayload = {
   __typename?: 'GraphCMS_CreatePaVarvPayload',
  clientMutationId: Scalars['String'],
  paVarv?: Maybe<GraphCms_PaVarv>,
};

export type GraphCms_CreatePaVeekindlusInput = {
  aliasOf?: Maybe<Scalars['String']>,
  clientMutationId: Scalars['String'],
  description?: Maybe<Scalars['String']>,
  name: Scalars['String'],
  slug?: Maybe<Scalars['String']>,
};

export type GraphCms_CreatePaVeekindlusPayload = {
   __typename?: 'GraphCMS_CreatePaVeekindlusPayload',
  clientMutationId: Scalars['String'],
  paVeekindlus?: Maybe<GraphCms_PaVeekindlus>,
};

export type GraphCms_CreatePostInput = {
  authorId?: Maybe<Scalars['ID']>,
  categories?: Maybe<GraphCms_PostCategoriesInput>,
  clientMutationId: Scalars['String'],
  commentCount?: Maybe<Scalars['Int']>,
  commentStatus?: Maybe<Scalars['String']>,
  content?: Maybe<Scalars['String']>,
  date?: Maybe<Scalars['String']>,
  excerpt?: Maybe<Scalars['String']>,
  menuOrder?: Maybe<Scalars['Int']>,
  mimeType?: Maybe<GraphCms_MimeTypeEnum>,
  parentId?: Maybe<Scalars['ID']>,
  password?: Maybe<Scalars['String']>,
  pingStatus?: Maybe<Scalars['String']>,
  pinged?: Maybe<Array<Maybe<Scalars['String']>>>,
  slug?: Maybe<Scalars['String']>,
  status?: Maybe<GraphCms_PostStatusEnum>,
  tags?: Maybe<GraphCms_PostTagsInput>,
  title?: Maybe<Scalars['String']>,
  toPing?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type GraphCms_CreatePostPayload = {
   __typename?: 'GraphCMS_CreatePostPayload',
  clientMutationId: Scalars['String'],
  post?: Maybe<GraphCms_Post>,
};

export type GraphCms_CreateProductCategoryInput = {
  aliasOf?: Maybe<Scalars['String']>,
  clientMutationId: Scalars['String'],
  description?: Maybe<Scalars['String']>,
  name: Scalars['String'],
  parentId?: Maybe<Scalars['ID']>,
  slug?: Maybe<Scalars['String']>,
};

export type GraphCms_CreateProductCategoryPayload = {
   __typename?: 'GraphCMS_CreateProductCategoryPayload',
  clientMutationId: Scalars['String'],
  productCategory?: Maybe<GraphCms_ProductCategory>,
};

export type GraphCms_CreateProductTagInput = {
  aliasOf?: Maybe<Scalars['String']>,
  clientMutationId: Scalars['String'],
  description?: Maybe<Scalars['String']>,
  name: Scalars['String'],
  slug?: Maybe<Scalars['String']>,
};

export type GraphCms_CreateProductTagPayload = {
   __typename?: 'GraphCMS_CreateProductTagPayload',
  clientMutationId: Scalars['String'],
  productTag?: Maybe<GraphCms_ProductTag>,
};

export type GraphCms_CreateProductTypeInput = {
  aliasOf?: Maybe<Scalars['String']>,
  clientMutationId: Scalars['String'],
  description?: Maybe<Scalars['String']>,
  name: Scalars['String'],
  slug?: Maybe<Scalars['String']>,
};

export type GraphCms_CreateProductTypePayload = {
   __typename?: 'GraphCMS_CreateProductTypePayload',
  clientMutationId: Scalars['String'],
  productType?: Maybe<GraphCms_ProductType>,
};

export type GraphCms_CreateShippingClassInput = {
  aliasOf?: Maybe<Scalars['String']>,
  clientMutationId: Scalars['String'],
  description?: Maybe<Scalars['String']>,
  name: Scalars['String'],
  slug?: Maybe<Scalars['String']>,
};

export type GraphCms_CreateShippingClassPayload = {
   __typename?: 'GraphCMS_CreateShippingClassPayload',
  clientMutationId: Scalars['String'],
  shippingClass?: Maybe<GraphCms_ShippingClass>,
};

export type GraphCms_CreateTagInput = {
  aliasOf?: Maybe<Scalars['String']>,
  clientMutationId: Scalars['String'],
  description?: Maybe<Scalars['String']>,
  name: Scalars['String'],
  slug?: Maybe<Scalars['String']>,
};

export type GraphCms_CreateTagPayload = {
   __typename?: 'GraphCMS_CreateTagPayload',
  clientMutationId: Scalars['String'],
  tag?: Maybe<GraphCms_Tag>,
};

export type GraphCms_CreateUserInput = {
  aim?: Maybe<Scalars['String']>,
  clientMutationId: Scalars['String'],
  description?: Maybe<Scalars['String']>,
  displayName?: Maybe<Scalars['String']>,
  email?: Maybe<Scalars['String']>,
  firstName?: Maybe<Scalars['String']>,
  jabber?: Maybe<Scalars['String']>,
  lastName?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>,
  nicename?: Maybe<Scalars['String']>,
  nickname?: Maybe<Scalars['String']>,
  password?: Maybe<Scalars['String']>,
  registered?: Maybe<Scalars['String']>,
  richEditing?: Maybe<Scalars['String']>,
  roles?: Maybe<Array<Maybe<Scalars['String']>>>,
  username: Scalars['String'],
  websiteUrl?: Maybe<Scalars['String']>,
  yim?: Maybe<Scalars['String']>,
};

export type GraphCms_CreateUserPayload = {
   __typename?: 'GraphCMS_CreateUserPayload',
  clientMutationId: Scalars['String'],
  user?: Maybe<GraphCms_User>,
};

export type GraphCms_CreateVisibleProductInput = {
  aliasOf?: Maybe<Scalars['String']>,
  clientMutationId: Scalars['String'],
  description?: Maybe<Scalars['String']>,
  name: Scalars['String'],
  slug?: Maybe<Scalars['String']>,
};

export type GraphCms_CreateVisibleProductPayload = {
   __typename?: 'GraphCMS_CreateVisibleProductPayload',
  clientMutationId: Scalars['String'],
  visibleProduct?: Maybe<GraphCms_VisibleProduct>,
};

export type GraphCms_Customer = GraphCms_Node & {
   __typename?: 'GraphCMS_Customer',
  billing?: Maybe<GraphCms_CustomerAddress>,
  calculatedShipping?: Maybe<Scalars['Boolean']>,
  customerId?: Maybe<Scalars['Int']>,
  date?: Maybe<Scalars['String']>,
  displayName?: Maybe<Scalars['String']>,
  email?: Maybe<Scalars['String']>,
  firstName?: Maybe<Scalars['String']>,
  hasCalculatedShipping?: Maybe<Scalars['Boolean']>,
  id: Scalars['ID'],
  isPayingCustomer?: Maybe<Scalars['Boolean']>,
  isVatExempt?: Maybe<Scalars['Boolean']>,
  lastName?: Maybe<Scalars['String']>,
  lastOrder?: Maybe<GraphCms_Order>,
  metaData?: Maybe<Array<Maybe<GraphCms_MetaData>>>,
  modified?: Maybe<Scalars['String']>,
  orderCount?: Maybe<Scalars['Int']>,
  orders?: Maybe<GraphCms_CustomerToOrderConnection>,
  refunds?: Maybe<GraphCms_CustomerToRefundConnection>,
  role?: Maybe<Scalars['String']>,
  shipping?: Maybe<GraphCms_CustomerAddress>,
  totalSpent?: Maybe<Scalars['Float']>,
  username?: Maybe<Scalars['String']>,
};


export type GraphCms_CustomerMetaDataArgs = {
  key?: Maybe<Scalars['String']>,
  keysIn?: Maybe<Array<Maybe<Scalars['String']>>>,
  multiple?: Maybe<Scalars['Boolean']>
};


export type GraphCms_CustomerOrdersArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  where?: Maybe<GraphCms_CustomerToOrderConnectionWhereArgs>
};


export type GraphCms_CustomerRefundsArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  where?: Maybe<GraphCms_CustomerToRefundConnectionWhereArgs>
};

export type GraphCms_CustomerAddress = {
   __typename?: 'GraphCMS_CustomerAddress',
  address1?: Maybe<Scalars['String']>,
  address2?: Maybe<Scalars['String']>,
  city?: Maybe<Scalars['String']>,
  company?: Maybe<Scalars['String']>,
  country?: Maybe<GraphCms_CountriesEnum>,
  email?: Maybe<Scalars['String']>,
  firstName?: Maybe<Scalars['String']>,
  lastName?: Maybe<Scalars['String']>,
  phone?: Maybe<Scalars['String']>,
  postcode?: Maybe<Scalars['String']>,
  state?: Maybe<Scalars['String']>,
};

export type GraphCms_CustomerAddressInput = {
  address1?: Maybe<Scalars['String']>,
  address2?: Maybe<Scalars['String']>,
  city?: Maybe<Scalars['String']>,
  company?: Maybe<Scalars['String']>,
  country?: Maybe<GraphCms_CountriesEnum>,
  email?: Maybe<Scalars['String']>,
  firstName?: Maybe<Scalars['String']>,
  lastName?: Maybe<Scalars['String']>,
  overwrite?: Maybe<Scalars['Boolean']>,
  phone?: Maybe<Scalars['String']>,
  postcode?: Maybe<Scalars['String']>,
  state?: Maybe<Scalars['String']>,
};

export enum GraphCms_CustomerConnectionOrderbyEnum {
  Email = 'EMAIL',
  Id = 'ID',
  Include = 'INCLUDE',
  Name = 'NAME',
  RegisteredDate = 'REGISTERED_DATE',
  Username = 'USERNAME'
}

export type GraphCms_CustomerToOrderConnection = {
   __typename?: 'GraphCMS_CustomerToOrderConnection',
  edges?: Maybe<Array<Maybe<GraphCms_CustomerToOrderConnectionEdge>>>,
  nodes?: Maybe<Array<Maybe<GraphCms_Order>>>,
  pageInfo?: Maybe<GraphCms_WpPageInfo>,
};

export type GraphCms_CustomerToOrderConnectionEdge = {
   __typename?: 'GraphCMS_CustomerToOrderConnectionEdge',
  cursor?: Maybe<Scalars['String']>,
  node?: Maybe<GraphCms_Order>,
};

export type GraphCms_CustomerToOrderConnectionWhereArgs = {
  customerId?: Maybe<Scalars['Int']>,
  customersIn?: Maybe<Array<Maybe<Scalars['Int']>>>,
  dateQuery?: Maybe<GraphCms_DateQueryInput>,
  exclude?: Maybe<Array<Maybe<Scalars['Int']>>>,
  include?: Maybe<Array<Maybe<Scalars['Int']>>>,
  orderby?: Maybe<Array<Maybe<GraphCms_OrdersOrderbyInput>>>,
  parent?: Maybe<Scalars['Int']>,
  parentIn?: Maybe<Array<Maybe<Scalars['Int']>>>,
  parentNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>,
  productId?: Maybe<Scalars['Int']>,
  search?: Maybe<Scalars['String']>,
  statuses?: Maybe<Array<Maybe<GraphCms_OrderStatusEnum>>>,
};

export type GraphCms_CustomerToRefundConnection = {
   __typename?: 'GraphCMS_CustomerToRefundConnection',
  edges?: Maybe<Array<Maybe<GraphCms_CustomerToRefundConnectionEdge>>>,
  nodes?: Maybe<Array<Maybe<GraphCms_Refund>>>,
  pageInfo?: Maybe<GraphCms_WpPageInfo>,
};

export type GraphCms_CustomerToRefundConnectionEdge = {
   __typename?: 'GraphCMS_CustomerToRefundConnectionEdge',
  cursor?: Maybe<Scalars['String']>,
  node?: Maybe<GraphCms_Refund>,
};

export type GraphCms_CustomerToRefundConnectionWhereArgs = {
  dateQuery?: Maybe<GraphCms_DateQueryInput>,
  exclude?: Maybe<Array<Maybe<Scalars['Int']>>>,
  include?: Maybe<Array<Maybe<Scalars['Int']>>>,
  orderIn?: Maybe<Array<Maybe<Scalars['Int']>>>,
  orderby?: Maybe<Array<Maybe<GraphCms_PostTypeOrderbyInput>>>,
  parent?: Maybe<Scalars['Int']>,
  parentIn?: Maybe<Array<Maybe<Scalars['Int']>>>,
  parentNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>,
  search?: Maybe<Scalars['String']>,
  statuses?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type GraphCms_DateInput = {
  day?: Maybe<Scalars['Int']>,
  month?: Maybe<Scalars['Int']>,
  year?: Maybe<Scalars['Int']>,
};

export type GraphCms_DateQueryInput = {
  after?: Maybe<GraphCms_DateInput>,
  before?: Maybe<GraphCms_DateInput>,
  column?: Maybe<GraphCms_PostObjectsConnectionDateColumnEnum>,
  compare?: Maybe<Scalars['String']>,
  day?: Maybe<Scalars['Int']>,
  hour?: Maybe<Scalars['Int']>,
  inclusive?: Maybe<Scalars['Boolean']>,
  minute?: Maybe<Scalars['Int']>,
  month?: Maybe<Scalars['Int']>,
  relation?: Maybe<GraphCms_RelationEnum>,
  second?: Maybe<Scalars['Int']>,
  week?: Maybe<Scalars['Int']>,
  year?: Maybe<Scalars['Int']>,
};

export type GraphCms_DeleteCategoryInput = {
  clientMutationId: Scalars['String'],
  id: Scalars['ID'],
};

export type GraphCms_DeleteCategoryPayload = {
   __typename?: 'GraphCMS_DeleteCategoryPayload',
  category?: Maybe<GraphCms_Category>,
  clientMutationId: Scalars['String'],
  deletedId?: Maybe<Scalars['ID']>,
};

export type GraphCms_DeleteCommentInput = {
  clientMutationId: Scalars['String'],
  forceDelete?: Maybe<Scalars['Boolean']>,
  id: Scalars['ID'],
};

export type GraphCms_DeleteCommentPayload = {
   __typename?: 'GraphCMS_DeleteCommentPayload',
  clientMutationId: Scalars['String'],
  comment?: Maybe<GraphCms_Comment>,
  deletedId?: Maybe<Scalars['ID']>,
};

export type GraphCms_DeleteMediaItemInput = {
  clientMutationId: Scalars['String'],
  forceDelete?: Maybe<Scalars['Boolean']>,
  id: Scalars['ID'],
};

export type GraphCms_DeleteMediaItemPayload = {
   __typename?: 'GraphCMS_DeleteMediaItemPayload',
  clientMutationId: Scalars['String'],
  deletedId?: Maybe<Scalars['ID']>,
  mediaItem?: Maybe<GraphCms_MediaItem>,
};

export type GraphCms_DeleteOrderInput = {
  clientMutationId: Scalars['String'],
  forceDelete?: Maybe<Scalars['Boolean']>,
  id?: Maybe<Scalars['ID']>,
  orderId?: Maybe<Scalars['Int']>,
};

export type GraphCms_DeleteOrderItemsInput = {
  clientMutationId: Scalars['String'],
  id?: Maybe<Scalars['ID']>,
  itemIds?: Maybe<Array<Maybe<Scalars['Int']>>>,
  orderId?: Maybe<Scalars['Int']>,
};

export type GraphCms_DeleteOrderItemsPayload = {
   __typename?: 'GraphCMS_DeleteOrderItemsPayload',
  clientMutationId: Scalars['String'],
  order?: Maybe<GraphCms_Order>,
};

export type GraphCms_DeleteOrderPayload = {
   __typename?: 'GraphCMS_DeleteOrderPayload',
  clientMutationId: Scalars['String'],
  order?: Maybe<GraphCms_Order>,
};

export type GraphCms_DeletePageInput = {
  clientMutationId: Scalars['String'],
  forceDelete?: Maybe<Scalars['Boolean']>,
  id: Scalars['ID'],
};

export type GraphCms_DeletePagePayload = {
   __typename?: 'GraphCMS_DeletePagePayload',
  clientMutationId: Scalars['String'],
  deletedId?: Maybe<Scalars['ID']>,
  page?: Maybe<GraphCms_Page>,
};

export type GraphCms_DeletePaHindInput = {
  clientMutationId: Scalars['String'],
  id: Scalars['ID'],
};

export type GraphCms_DeletePaHindPayload = {
   __typename?: 'GraphCMS_DeletePaHindPayload',
  clientMutationId: Scalars['String'],
  deletedId?: Maybe<Scalars['ID']>,
  paHind?: Maybe<GraphCms_PaHind>,
};

export type GraphCms_DeletePaHulkInput = {
  clientMutationId: Scalars['String'],
  id: Scalars['ID'],
};

export type GraphCms_DeletePaHulkPayload = {
   __typename?: 'GraphCMS_DeletePaHulkPayload',
  clientMutationId: Scalars['String'],
  deletedId?: Maybe<Scalars['ID']>,
  paHulk?: Maybe<GraphCms_PaHulk>,
};

export type GraphCms_DeletePaKasutusaegInput = {
  clientMutationId: Scalars['String'],
  id: Scalars['ID'],
};

export type GraphCms_DeletePaKasutusaegPayload = {
   __typename?: 'GraphCMS_DeletePaKasutusaegPayload',
  clientMutationId: Scalars['String'],
  deletedId?: Maybe<Scalars['ID']>,
  paKasutusaeg?: Maybe<GraphCms_PaKasutusaeg>,
};

export type GraphCms_DeletePaKogusInput = {
  clientMutationId: Scalars['String'],
  id: Scalars['ID'],
};

export type GraphCms_DeletePaKogusPayload = {
   __typename?: 'GraphCMS_DeletePaKogusPayload',
  clientMutationId: Scalars['String'],
  deletedId?: Maybe<Scalars['ID']>,
  paKogus?: Maybe<GraphCms_PaKogus>,
};

export type GraphCms_DeletePaKontuurInput = {
  clientMutationId: Scalars['String'],
  id: Scalars['ID'],
};

export type GraphCms_DeletePaKontuurPayload = {
   __typename?: 'GraphCMS_DeletePaKontuurPayload',
  clientMutationId: Scalars['String'],
  deletedId?: Maybe<Scalars['ID']>,
  paKontuur?: Maybe<GraphCms_PaKontuur>,
};

export type GraphCms_DeletePaKoostisainedInput = {
  clientMutationId: Scalars['String'],
  id: Scalars['ID'],
};

export type GraphCms_DeletePaKoostisainedPayload = {
   __typename?: 'GraphCMS_DeletePaKoostisainedPayload',
  clientMutationId: Scalars['String'],
  deletedId?: Maybe<Scalars['ID']>,
  paKoostisained?: Maybe<GraphCms_PaKoostisained>,
};

export type GraphCms_DeletePaLaadimisaegInput = {
  clientMutationId: Scalars['String'],
  id: Scalars['ID'],
};

export type GraphCms_DeletePaLaadimisaegPayload = {
   __typename?: 'GraphCMS_DeletePaLaadimisaegPayload',
  clientMutationId: Scalars['String'],
  deletedId?: Maybe<Scalars['ID']>,
  paLaadimisaeg?: Maybe<GraphCms_PaLaadimisaeg>,
};

export type GraphCms_DeletePaMaterjalInput = {
  clientMutationId: Scalars['String'],
  id: Scalars['ID'],
};

export type GraphCms_DeletePaMaterjalPayload = {
   __typename?: 'GraphCMS_DeletePaMaterjalPayload',
  clientMutationId: Scalars['String'],
  deletedId?: Maybe<Scalars['ID']>,
  paMaterjal?: Maybe<GraphCms_PaMaterjal>,
};

export type GraphCms_DeletePaMuratasaInput = {
  clientMutationId: Scalars['String'],
  id: Scalars['ID'],
};

export type GraphCms_DeletePaMuratasaPayload = {
   __typename?: 'GraphCMS_DeletePaMuratasaPayload',
  clientMutationId: Scalars['String'],
  deletedId?: Maybe<Scalars['ID']>,
  paMuratasa?: Maybe<GraphCms_PaMuratasa>,
};

export type GraphCms_DeletePaOhutusInput = {
  clientMutationId: Scalars['String'],
  id: Scalars['ID'],
};

export type GraphCms_DeletePaOhutusPayload = {
   __typename?: 'GraphCMS_DeletePaOhutusPayload',
  clientMutationId: Scalars['String'],
  deletedId?: Maybe<Scalars['ID']>,
  paOhutus?: Maybe<GraphCms_PaOhutus>,
};

export type GraphCms_DeletePaPatareidInput = {
  clientMutationId: Scalars['String'],
  id: Scalars['ID'],
};

export type GraphCms_DeletePaPatareidPayload = {
   __typename?: 'GraphCMS_DeletePaPatareidPayload',
  clientMutationId: Scalars['String'],
  deletedId?: Maybe<Scalars['ID']>,
  paPatareid?: Maybe<GraphCms_PaPatareid>,
};

export type GraphCms_DeletePaSuurusInput = {
  clientMutationId: Scalars['String'],
  id: Scalars['ID'],
};

export type GraphCms_DeletePaSuurusPayload = {
   __typename?: 'GraphCMS_DeletePaSuurusPayload',
  clientMutationId: Scalars['String'],
  deletedId?: Maybe<Scalars['ID']>,
  paSuurus?: Maybe<GraphCms_PaSuurus>,
};

export type GraphCms_DeletePaVariantInput = {
  clientMutationId: Scalars['String'],
  id: Scalars['ID'],
};

export type GraphCms_DeletePaVariantPayload = {
   __typename?: 'GraphCMS_DeletePaVariantPayload',
  clientMutationId: Scalars['String'],
  deletedId?: Maybe<Scalars['ID']>,
  paVariant?: Maybe<GraphCms_PaVariant>,
};

export type GraphCms_DeletePaVarvInput = {
  clientMutationId: Scalars['String'],
  id: Scalars['ID'],
};

export type GraphCms_DeletePaVarvPayload = {
   __typename?: 'GraphCMS_DeletePaVarvPayload',
  clientMutationId: Scalars['String'],
  deletedId?: Maybe<Scalars['ID']>,
  paVarv?: Maybe<GraphCms_PaVarv>,
};

export type GraphCms_DeletePaVeekindlusInput = {
  clientMutationId: Scalars['String'],
  id: Scalars['ID'],
};

export type GraphCms_DeletePaVeekindlusPayload = {
   __typename?: 'GraphCMS_DeletePaVeekindlusPayload',
  clientMutationId: Scalars['String'],
  deletedId?: Maybe<Scalars['ID']>,
  paVeekindlus?: Maybe<GraphCms_PaVeekindlus>,
};

export type GraphCms_DeletePostInput = {
  clientMutationId: Scalars['String'],
  forceDelete?: Maybe<Scalars['Boolean']>,
  id: Scalars['ID'],
};

export type GraphCms_DeletePostPayload = {
   __typename?: 'GraphCMS_DeletePostPayload',
  clientMutationId: Scalars['String'],
  deletedId?: Maybe<Scalars['ID']>,
  post?: Maybe<GraphCms_Post>,
};

export type GraphCms_DeleteProductCategoryInput = {
  clientMutationId: Scalars['String'],
  id: Scalars['ID'],
};

export type GraphCms_DeleteProductCategoryPayload = {
   __typename?: 'GraphCMS_DeleteProductCategoryPayload',
  clientMutationId: Scalars['String'],
  deletedId?: Maybe<Scalars['ID']>,
  productCategory?: Maybe<GraphCms_ProductCategory>,
};

export type GraphCms_DeleteProductTagInput = {
  clientMutationId: Scalars['String'],
  id: Scalars['ID'],
};

export type GraphCms_DeleteProductTagPayload = {
   __typename?: 'GraphCMS_DeleteProductTagPayload',
  clientMutationId: Scalars['String'],
  deletedId?: Maybe<Scalars['ID']>,
  productTag?: Maybe<GraphCms_ProductTag>,
};

export type GraphCms_DeleteProductTypeInput = {
  clientMutationId: Scalars['String'],
  id: Scalars['ID'],
};

export type GraphCms_DeleteProductTypePayload = {
   __typename?: 'GraphCMS_DeleteProductTypePayload',
  clientMutationId: Scalars['String'],
  deletedId?: Maybe<Scalars['ID']>,
  productType?: Maybe<GraphCms_ProductType>,
};

export type GraphCms_DeleteShippingClassInput = {
  clientMutationId: Scalars['String'],
  id: Scalars['ID'],
};

export type GraphCms_DeleteShippingClassPayload = {
   __typename?: 'GraphCMS_DeleteShippingClassPayload',
  clientMutationId: Scalars['String'],
  deletedId?: Maybe<Scalars['ID']>,
  shippingClass?: Maybe<GraphCms_ShippingClass>,
};

export type GraphCms_DeleteTagInput = {
  clientMutationId: Scalars['String'],
  id: Scalars['ID'],
};

export type GraphCms_DeleteTagPayload = {
   __typename?: 'GraphCMS_DeleteTagPayload',
  clientMutationId: Scalars['String'],
  deletedId?: Maybe<Scalars['ID']>,
  tag?: Maybe<GraphCms_Tag>,
};

export type GraphCms_DeleteUserInput = {
  clientMutationId: Scalars['String'],
  id: Scalars['ID'],
  reassignId?: Maybe<Scalars['ID']>,
};

export type GraphCms_DeleteUserPayload = {
   __typename?: 'GraphCMS_DeleteUserPayload',
  clientMutationId: Scalars['String'],
  deletedId?: Maybe<Scalars['ID']>,
  user?: Maybe<GraphCms_User>,
};

export type GraphCms_DeleteVisibleProductInput = {
  clientMutationId: Scalars['String'],
  id: Scalars['ID'],
};

export type GraphCms_DeleteVisibleProductPayload = {
   __typename?: 'GraphCMS_DeleteVisibleProductPayload',
  clientMutationId: Scalars['String'],
  deletedId?: Maybe<Scalars['ID']>,
  visibleProduct?: Maybe<GraphCms_VisibleProduct>,
};

export enum GraphCms_DiscountTypeEnum {
  FixedCart = 'FIXED_CART',
  FixedProduct = 'FIXED_PRODUCT',
  Percent = 'PERCENT'
}

export type GraphCms_DiscussionSettings = {
   __typename?: 'GraphCMS_DiscussionSettings',
  defaultCommentStatus?: Maybe<Scalars['String']>,
  defaultPingStatus?: Maybe<Scalars['String']>,
};

export type GraphCms_EditLock = {
   __typename?: 'GraphCMS_EditLock',
  editTime?: Maybe<Scalars['String']>,
  user?: Maybe<GraphCms_User>,
};

export type GraphCms_EmptyCartInput = {
  clientMutationId: Scalars['String'],
};

export type GraphCms_EmptyCartPayload = {
   __typename?: 'GraphCMS_EmptyCartPayload',
  cart?: Maybe<GraphCms_Cart>,
  clientMutationId: Scalars['String'],
};

export type GraphCms_ExternalProduct = GraphCms_Node & GraphCms_Product & {
   __typename?: 'GraphCMS_ExternalProduct',
  attributes?: Maybe<GraphCms_ProductToProductAttributeConnection>,
  averageRating?: Maybe<Scalars['Float']>,
  buttonText?: Maybe<Scalars['String']>,
  catalogVisibility?: Maybe<GraphCms_CatalogVisibilityEnum>,
  date?: Maybe<Scalars['String']>,
  dateOnSaleFrom?: Maybe<Scalars['String']>,
  dateOnSaleTo?: Maybe<Scalars['String']>,
  defaultAttributes?: Maybe<GraphCms_ExternalProductToVariationAttributeConnection>,
  description?: Maybe<Scalars['String']>,
  externalUrl?: Maybe<Scalars['String']>,
  featured?: Maybe<Scalars['Boolean']>,
  galleryImages?: Maybe<GraphCms_ProductToMediaItemConnection>,
  id: Scalars['ID'],
  image?: Maybe<GraphCms_MediaItem>,
  link?: Maybe<Scalars['String']>,
  menuOrder?: Maybe<Scalars['Int']>,
  metaData?: Maybe<Array<Maybe<GraphCms_MetaData>>>,
  modified?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  onSale?: Maybe<Scalars['Boolean']>,
  paHinds?: Maybe<GraphCms_ProductToPaHindConnection>,
  paHulks?: Maybe<GraphCms_ProductToPaHulkConnection>,
  paKasutusaegs?: Maybe<GraphCms_ProductToPaKasutusaegConnection>,
  paKoguses?: Maybe<GraphCms_ProductToPaKogusConnection>,
  paKontuurs?: Maybe<GraphCms_ProductToPaKontuurConnection>,
  paKoostisaineds?: Maybe<GraphCms_ProductToPaKoostisainedConnection>,
  paLaadimisaegs?: Maybe<GraphCms_ProductToPaLaadimisaegConnection>,
  paMaterjals?: Maybe<GraphCms_ProductToPaMaterjalConnection>,
  paMuratasas?: Maybe<GraphCms_ProductToPaMuratasaConnection>,
  paOhutuses?: Maybe<GraphCms_ProductToPaOhutusConnection>,
  paPatareids?: Maybe<GraphCms_ProductToPaPatareidConnection>,
  paSuuruses?: Maybe<GraphCms_ProductToPaSuurusConnection>,
  paVariants?: Maybe<GraphCms_ProductToPaVariantConnection>,
  paVarvs?: Maybe<GraphCms_ProductToPaVarvConnection>,
  paVeekindluses?: Maybe<GraphCms_ProductToPaVeekindlusConnection>,
  parent?: Maybe<GraphCms_Product>,
  price?: Maybe<Scalars['String']>,
  productCategories?: Maybe<GraphCms_ProductToProductCategoryConnection>,
  productId?: Maybe<Scalars['Int']>,
  productTags?: Maybe<GraphCms_ProductToProductTagConnection>,
  productTypes?: Maybe<GraphCms_ProductToProductTypeConnection>,
  purchasable?: Maybe<Scalars['Boolean']>,
  purchaseNote?: Maybe<Scalars['String']>,
  regularPrice?: Maybe<Scalars['String']>,
  related?: Maybe<GraphCms_ProductToProductConnection>,
  reviewCount?: Maybe<Scalars['Int']>,
  reviewsAllowed?: Maybe<Scalars['Boolean']>,
  salePrice?: Maybe<Scalars['String']>,
  shippingClasses?: Maybe<GraphCms_ProductToShippingClassConnection>,
  shortDescription?: Maybe<Scalars['String']>,
  sku?: Maybe<Scalars['String']>,
  slug?: Maybe<Scalars['String']>,
  status?: Maybe<Scalars['String']>,
  taxClass?: Maybe<GraphCms_TaxClassEnum>,
  taxStatus?: Maybe<GraphCms_TaxStatusEnum>,
  totalSales?: Maybe<Scalars['Int']>,
  type?: Maybe<GraphCms_ProductTypesEnum>,
  upsell?: Maybe<GraphCms_ProductToProductConnection>,
  visibleProducts?: Maybe<GraphCms_ProductToVisibleProductConnection>,
};


export type GraphCms_ExternalProductAttributesArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>
};


export type GraphCms_ExternalProductDefaultAttributesArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>
};


export type GraphCms_ExternalProductDescriptionArgs = {
  format?: Maybe<GraphCms_PostObjectFieldFormatEnum>
};


export type GraphCms_ExternalProductGalleryImagesArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  where?: Maybe<GraphCms_ProductToMediaItemConnectionWhereArgs>
};


export type GraphCms_ExternalProductMetaDataArgs = {
  key?: Maybe<Scalars['String']>,
  keysIn?: Maybe<Array<Maybe<Scalars['String']>>>,
  multiple?: Maybe<Scalars['Boolean']>
};


export type GraphCms_ExternalProductPaHindsArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  where?: Maybe<GraphCms_ProductToPaHindConnectionWhereArgs>
};


export type GraphCms_ExternalProductPaHulksArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  where?: Maybe<GraphCms_ProductToPaHulkConnectionWhereArgs>
};


export type GraphCms_ExternalProductPaKasutusaegsArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  where?: Maybe<GraphCms_ProductToPaKasutusaegConnectionWhereArgs>
};


export type GraphCms_ExternalProductPaKogusesArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  where?: Maybe<GraphCms_ProductToPaKogusConnectionWhereArgs>
};


export type GraphCms_ExternalProductPaKontuursArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  where?: Maybe<GraphCms_ProductToPaKontuurConnectionWhereArgs>
};


export type GraphCms_ExternalProductPaKoostisainedsArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  where?: Maybe<GraphCms_ProductToPaKoostisainedConnectionWhereArgs>
};


export type GraphCms_ExternalProductPaLaadimisaegsArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  where?: Maybe<GraphCms_ProductToPaLaadimisaegConnectionWhereArgs>
};


export type GraphCms_ExternalProductPaMaterjalsArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  where?: Maybe<GraphCms_ProductToPaMaterjalConnectionWhereArgs>
};


export type GraphCms_ExternalProductPaMuratasasArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  where?: Maybe<GraphCms_ProductToPaMuratasaConnectionWhereArgs>
};


export type GraphCms_ExternalProductPaOhutusesArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  where?: Maybe<GraphCms_ProductToPaOhutusConnectionWhereArgs>
};


export type GraphCms_ExternalProductPaPatareidsArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  where?: Maybe<GraphCms_ProductToPaPatareidConnectionWhereArgs>
};


export type GraphCms_ExternalProductPaSuurusesArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  where?: Maybe<GraphCms_ProductToPaSuurusConnectionWhereArgs>
};


export type GraphCms_ExternalProductPaVariantsArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  where?: Maybe<GraphCms_ProductToPaVariantConnectionWhereArgs>
};


export type GraphCms_ExternalProductPaVarvsArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  where?: Maybe<GraphCms_ProductToPaVarvConnectionWhereArgs>
};


export type GraphCms_ExternalProductPaVeekindlusesArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  where?: Maybe<GraphCms_ProductToPaVeekindlusConnectionWhereArgs>
};


export type GraphCms_ExternalProductPriceArgs = {
  format?: Maybe<GraphCms_PricingFieldFormatEnum>
};


export type GraphCms_ExternalProductProductCategoriesArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  where?: Maybe<GraphCms_ProductToProductCategoryConnectionWhereArgs>
};


export type GraphCms_ExternalProductProductTagsArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  where?: Maybe<GraphCms_ProductToProductTagConnectionWhereArgs>
};


export type GraphCms_ExternalProductProductTypesArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  where?: Maybe<GraphCms_ProductToProductTypeConnectionWhereArgs>
};


export type GraphCms_ExternalProductRegularPriceArgs = {
  format?: Maybe<GraphCms_PricingFieldFormatEnum>
};


export type GraphCms_ExternalProductRelatedArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  where?: Maybe<GraphCms_ProductToProductConnectionWhereArgs>
};


export type GraphCms_ExternalProductSalePriceArgs = {
  format?: Maybe<GraphCms_PricingFieldFormatEnum>
};


export type GraphCms_ExternalProductShippingClassesArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  where?: Maybe<GraphCms_ProductToShippingClassConnectionWhereArgs>
};


export type GraphCms_ExternalProductShortDescriptionArgs = {
  format?: Maybe<GraphCms_PostObjectFieldFormatEnum>
};


export type GraphCms_ExternalProductUpsellArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  where?: Maybe<GraphCms_ProductToProductConnectionWhereArgs>
};


export type GraphCms_ExternalProductVisibleProductsArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  where?: Maybe<GraphCms_ProductToVisibleProductConnectionWhereArgs>
};

export type GraphCms_ExternalProductToVariationAttributeConnection = {
   __typename?: 'GraphCMS_ExternalProductToVariationAttributeConnection',
  edges?: Maybe<Array<Maybe<GraphCms_ExternalProductToVariationAttributeConnectionEdge>>>,
  nodes?: Maybe<Array<Maybe<GraphCms_VariationAttribute>>>,
  pageInfo?: Maybe<GraphCms_WpPageInfo>,
};

export type GraphCms_ExternalProductToVariationAttributeConnectionEdge = {
   __typename?: 'GraphCMS_ExternalProductToVariationAttributeConnectionEdge',
  cursor?: Maybe<Scalars['String']>,
  node?: Maybe<GraphCms_VariationAttribute>,
};

export type GraphCms_FeeLine = {
   __typename?: 'GraphCMS_FeeLine',
  amount?: Maybe<Scalars['String']>,
  itemId?: Maybe<Scalars['Int']>,
  metaData?: Maybe<Array<Maybe<GraphCms_MetaData>>>,
  name?: Maybe<Scalars['String']>,
  orderId?: Maybe<Scalars['Int']>,
  taxClass?: Maybe<GraphCms_TaxClassEnum>,
  taxStatus?: Maybe<GraphCms_TaxStatusEnum>,
  taxes?: Maybe<Array<Maybe<GraphCms_OrderItemTax>>>,
  total?: Maybe<Scalars['String']>,
  totalTax?: Maybe<Scalars['String']>,
};


export type GraphCms_FeeLineMetaDataArgs = {
  key?: Maybe<Scalars['String']>,
  keysIn?: Maybe<Array<Maybe<Scalars['String']>>>,
  multiple?: Maybe<Scalars['Boolean']>
};

export type GraphCms_FeeLineInput = {
  amount?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['ID']>,
  name?: Maybe<Scalars['String']>,
  taxClass?: Maybe<GraphCms_TaxClassEnum>,
  taxStatus?: Maybe<GraphCms_TaxStatusEnum>,
  total?: Maybe<Scalars['String']>,
};

export type GraphCms_GeneralSettings = {
   __typename?: 'GraphCMS_GeneralSettings',
  dateFormat?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  email?: Maybe<Scalars['String']>,
  language?: Maybe<Scalars['String']>,
  startOfWeek?: Maybe<Scalars['Int']>,
  timeFormat?: Maybe<Scalars['String']>,
  timezone?: Maybe<Scalars['String']>,
  title?: Maybe<Scalars['String']>,
  url?: Maybe<Scalars['String']>,
};

export type GraphCms_GroupProduct = GraphCms_Node & GraphCms_Product & {
   __typename?: 'GraphCMS_GroupProduct',
  addToCartDescription?: Maybe<Scalars['String']>,
  addToCartText?: Maybe<Scalars['String']>,
  attributes?: Maybe<GraphCms_ProductToProductAttributeConnection>,
  averageRating?: Maybe<Scalars['Float']>,
  catalogVisibility?: Maybe<GraphCms_CatalogVisibilityEnum>,
  date?: Maybe<Scalars['String']>,
  dateOnSaleFrom?: Maybe<Scalars['String']>,
  dateOnSaleTo?: Maybe<Scalars['String']>,
  defaultAttributes?: Maybe<GraphCms_GroupProductToVariationAttributeConnection>,
  description?: Maybe<Scalars['String']>,
  featured?: Maybe<Scalars['Boolean']>,
  galleryImages?: Maybe<GraphCms_ProductToMediaItemConnection>,
  id: Scalars['ID'],
  image?: Maybe<GraphCms_MediaItem>,
  link?: Maybe<Scalars['String']>,
  menuOrder?: Maybe<Scalars['Int']>,
  metaData?: Maybe<Array<Maybe<GraphCms_MetaData>>>,
  modified?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  onSale?: Maybe<Scalars['Boolean']>,
  paHinds?: Maybe<GraphCms_ProductToPaHindConnection>,
  paHulks?: Maybe<GraphCms_ProductToPaHulkConnection>,
  paKasutusaegs?: Maybe<GraphCms_ProductToPaKasutusaegConnection>,
  paKoguses?: Maybe<GraphCms_ProductToPaKogusConnection>,
  paKontuurs?: Maybe<GraphCms_ProductToPaKontuurConnection>,
  paKoostisaineds?: Maybe<GraphCms_ProductToPaKoostisainedConnection>,
  paLaadimisaegs?: Maybe<GraphCms_ProductToPaLaadimisaegConnection>,
  paMaterjals?: Maybe<GraphCms_ProductToPaMaterjalConnection>,
  paMuratasas?: Maybe<GraphCms_ProductToPaMuratasaConnection>,
  paOhutuses?: Maybe<GraphCms_ProductToPaOhutusConnection>,
  paPatareids?: Maybe<GraphCms_ProductToPaPatareidConnection>,
  paSuuruses?: Maybe<GraphCms_ProductToPaSuurusConnection>,
  paVariants?: Maybe<GraphCms_ProductToPaVariantConnection>,
  paVarvs?: Maybe<GraphCms_ProductToPaVarvConnection>,
  paVeekindluses?: Maybe<GraphCms_ProductToPaVeekindlusConnection>,
  parent?: Maybe<GraphCms_Product>,
  productCategories?: Maybe<GraphCms_ProductToProductCategoryConnection>,
  productId?: Maybe<Scalars['Int']>,
  productTags?: Maybe<GraphCms_ProductToProductTagConnection>,
  productTypes?: Maybe<GraphCms_ProductToProductTypeConnection>,
  products?: Maybe<GraphCms_GroupProductToProductConnection>,
  purchasable?: Maybe<Scalars['Boolean']>,
  purchaseNote?: Maybe<Scalars['String']>,
  related?: Maybe<GraphCms_ProductToProductConnection>,
  reviewCount?: Maybe<Scalars['Int']>,
  reviewsAllowed?: Maybe<Scalars['Boolean']>,
  shippingClasses?: Maybe<GraphCms_ProductToShippingClassConnection>,
  shortDescription?: Maybe<Scalars['String']>,
  sku?: Maybe<Scalars['String']>,
  slug?: Maybe<Scalars['String']>,
  status?: Maybe<Scalars['String']>,
  totalSales?: Maybe<Scalars['Int']>,
  type?: Maybe<GraphCms_ProductTypesEnum>,
  upsell?: Maybe<GraphCms_ProductToProductConnection>,
  visibleProducts?: Maybe<GraphCms_ProductToVisibleProductConnection>,
};


export type GraphCms_GroupProductAttributesArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>
};


export type GraphCms_GroupProductDefaultAttributesArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>
};


export type GraphCms_GroupProductDescriptionArgs = {
  format?: Maybe<GraphCms_PostObjectFieldFormatEnum>
};


export type GraphCms_GroupProductGalleryImagesArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  where?: Maybe<GraphCms_ProductToMediaItemConnectionWhereArgs>
};


export type GraphCms_GroupProductMetaDataArgs = {
  key?: Maybe<Scalars['String']>,
  keysIn?: Maybe<Array<Maybe<Scalars['String']>>>,
  multiple?: Maybe<Scalars['Boolean']>
};


export type GraphCms_GroupProductPaHindsArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  where?: Maybe<GraphCms_ProductToPaHindConnectionWhereArgs>
};


export type GraphCms_GroupProductPaHulksArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  where?: Maybe<GraphCms_ProductToPaHulkConnectionWhereArgs>
};


export type GraphCms_GroupProductPaKasutusaegsArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  where?: Maybe<GraphCms_ProductToPaKasutusaegConnectionWhereArgs>
};


export type GraphCms_GroupProductPaKogusesArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  where?: Maybe<GraphCms_ProductToPaKogusConnectionWhereArgs>
};


export type GraphCms_GroupProductPaKontuursArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  where?: Maybe<GraphCms_ProductToPaKontuurConnectionWhereArgs>
};


export type GraphCms_GroupProductPaKoostisainedsArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  where?: Maybe<GraphCms_ProductToPaKoostisainedConnectionWhereArgs>
};


export type GraphCms_GroupProductPaLaadimisaegsArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  where?: Maybe<GraphCms_ProductToPaLaadimisaegConnectionWhereArgs>
};


export type GraphCms_GroupProductPaMaterjalsArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  where?: Maybe<GraphCms_ProductToPaMaterjalConnectionWhereArgs>
};


export type GraphCms_GroupProductPaMuratasasArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  where?: Maybe<GraphCms_ProductToPaMuratasaConnectionWhereArgs>
};


export type GraphCms_GroupProductPaOhutusesArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  where?: Maybe<GraphCms_ProductToPaOhutusConnectionWhereArgs>
};


export type GraphCms_GroupProductPaPatareidsArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  where?: Maybe<GraphCms_ProductToPaPatareidConnectionWhereArgs>
};


export type GraphCms_GroupProductPaSuurusesArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  where?: Maybe<GraphCms_ProductToPaSuurusConnectionWhereArgs>
};


export type GraphCms_GroupProductPaVariantsArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  where?: Maybe<GraphCms_ProductToPaVariantConnectionWhereArgs>
};


export type GraphCms_GroupProductPaVarvsArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  where?: Maybe<GraphCms_ProductToPaVarvConnectionWhereArgs>
};


export type GraphCms_GroupProductPaVeekindlusesArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  where?: Maybe<GraphCms_ProductToPaVeekindlusConnectionWhereArgs>
};


export type GraphCms_GroupProductProductCategoriesArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  where?: Maybe<GraphCms_ProductToProductCategoryConnectionWhereArgs>
};


export type GraphCms_GroupProductProductTagsArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  where?: Maybe<GraphCms_ProductToProductTagConnectionWhereArgs>
};


export type GraphCms_GroupProductProductTypesArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  where?: Maybe<GraphCms_ProductToProductTypeConnectionWhereArgs>
};


export type GraphCms_GroupProductProductsArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  where?: Maybe<GraphCms_GroupProductToProductConnectionWhereArgs>
};


export type GraphCms_GroupProductRelatedArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  where?: Maybe<GraphCms_ProductToProductConnectionWhereArgs>
};


export type GraphCms_GroupProductShippingClassesArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  where?: Maybe<GraphCms_ProductToShippingClassConnectionWhereArgs>
};


export type GraphCms_GroupProductShortDescriptionArgs = {
  format?: Maybe<GraphCms_PostObjectFieldFormatEnum>
};


export type GraphCms_GroupProductUpsellArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  where?: Maybe<GraphCms_ProductToProductConnectionWhereArgs>
};


export type GraphCms_GroupProductVisibleProductsArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  where?: Maybe<GraphCms_ProductToVisibleProductConnectionWhereArgs>
};

export type GraphCms_GroupProductToProductConnection = {
   __typename?: 'GraphCMS_GroupProductToProductConnection',
  edges?: Maybe<Array<Maybe<GraphCms_GroupProductToProductConnectionEdge>>>,
  nodes?: Maybe<Array<Maybe<GraphCms_Product>>>,
  pageInfo?: Maybe<GraphCms_WpPageInfo>,
};

export type GraphCms_GroupProductToProductConnectionEdge = {
   __typename?: 'GraphCMS_GroupProductToProductConnectionEdge',
  cursor?: Maybe<Scalars['String']>,
  node?: Maybe<GraphCms_Product>,
};

export type GraphCms_GroupProductToProductConnectionWhereArgs = {
  attribute?: Maybe<Scalars['String']>,
  attributeTerm?: Maybe<Scalars['String']>,
  category?: Maybe<Scalars['String']>,
  categoryId?: Maybe<Scalars['Int']>,
  categoryIdIn?: Maybe<Array<Maybe<Scalars['Int']>>>,
  categoryIdNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>,
  categoryIn?: Maybe<Array<Maybe<Scalars['String']>>>,
  categoryNotIn?: Maybe<Array<Maybe<Scalars['String']>>>,
  dateQuery?: Maybe<GraphCms_DateQueryInput>,
  exclude?: Maybe<Array<Maybe<Scalars['Int']>>>,
  featured?: Maybe<Scalars['Boolean']>,
  include?: Maybe<Array<Maybe<Scalars['Int']>>>,
  maxPrice?: Maybe<Scalars['Float']>,
  minPrice?: Maybe<Scalars['Float']>,
  onSale?: Maybe<Scalars['Boolean']>,
  orderby?: Maybe<Array<Maybe<GraphCms_ProductsOrderbyInput>>>,
  parent?: Maybe<Scalars['Int']>,
  parentIn?: Maybe<Array<Maybe<Scalars['Int']>>>,
  parentNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>,
  search?: Maybe<Scalars['String']>,
  shippingClassId?: Maybe<Scalars['Int']>,
  sku?: Maybe<Scalars['String']>,
  slug?: Maybe<Scalars['String']>,
  status?: Maybe<Scalars['String']>,
  stockStatus?: Maybe<Array<Maybe<GraphCms_StockStatusEnum>>>,
  tag?: Maybe<Scalars['String']>,
  tagId?: Maybe<Scalars['Int']>,
  tagIdIn?: Maybe<Array<Maybe<Scalars['Int']>>>,
  tagIdNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>,
  tagIn?: Maybe<Array<Maybe<Scalars['String']>>>,
  tagNotIn?: Maybe<Array<Maybe<Scalars['String']>>>,
  taxClass?: Maybe<GraphCms_TaxClassEnum>,
  taxonomyFilter?: Maybe<Array<Maybe<GraphCms_ProductTaxonomyFilterRelationInput>>>,
  type?: Maybe<GraphCms_ProductTypesEnum>,
  typeIn?: Maybe<Array<Maybe<GraphCms_ProductTypesEnum>>>,
  typeNotIn?: Maybe<Array<Maybe<GraphCms_ProductTypesEnum>>>,
  visibility?: Maybe<GraphCms_CatalogVisibilityEnum>,
};

export type GraphCms_GroupProductToVariationAttributeConnection = {
   __typename?: 'GraphCMS_GroupProductToVariationAttributeConnection',
  edges?: Maybe<Array<Maybe<GraphCms_GroupProductToVariationAttributeConnectionEdge>>>,
  nodes?: Maybe<Array<Maybe<GraphCms_VariationAttribute>>>,
  pageInfo?: Maybe<GraphCms_WpPageInfo>,
};

export type GraphCms_GroupProductToVariationAttributeConnectionEdge = {
   __typename?: 'GraphCMS_GroupProductToVariationAttributeConnectionEdge',
  cursor?: Maybe<Scalars['String']>,
  node?: Maybe<GraphCms_VariationAttribute>,
};

export type GraphCms_LineItem = {
   __typename?: 'GraphCMS_LineItem',
  itemDownloads?: Maybe<Array<Maybe<GraphCms_ProductDownload>>>,
  itemId?: Maybe<Scalars['Int']>,
  metaData?: Maybe<Array<Maybe<GraphCms_MetaData>>>,
  orderId?: Maybe<Scalars['Int']>,
  product?: Maybe<GraphCms_Product>,
  productId?: Maybe<Scalars['Int']>,
  quantity?: Maybe<Scalars['Int']>,
  subtotal?: Maybe<Scalars['String']>,
  subtotalTax?: Maybe<Scalars['String']>,
  taxClass?: Maybe<GraphCms_TaxClassEnum>,
  taxStatus?: Maybe<GraphCms_TaxStatusEnum>,
  taxes?: Maybe<Array<Maybe<GraphCms_OrderItemTax>>>,
  total?: Maybe<Scalars['String']>,
  totalTax?: Maybe<Scalars['String']>,
  variation?: Maybe<GraphCms_ProductVariation>,
  variationId?: Maybe<Scalars['Int']>,
};


export type GraphCms_LineItemMetaDataArgs = {
  key?: Maybe<Scalars['String']>,
  keysIn?: Maybe<Array<Maybe<Scalars['String']>>>,
  multiple?: Maybe<Scalars['Boolean']>
};

export type GraphCms_LineItemInput = {
  id?: Maybe<Scalars['ID']>,
  metaData?: Maybe<Array<Maybe<GraphCms_MetaDataInput>>>,
  name?: Maybe<Scalars['String']>,
  productId?: Maybe<Scalars['Int']>,
  quantity?: Maybe<Scalars['Int']>,
  sku?: Maybe<Scalars['String']>,
  subtotal?: Maybe<Scalars['String']>,
  taxClass?: Maybe<GraphCms_TaxClassEnum>,
  total?: Maybe<Scalars['String']>,
  variationId?: Maybe<Scalars['Int']>,
};

export enum GraphCms_ManageStockEnum {
  False = 'FALSE',
  Parent = 'PARENT',
  True = 'TRUE'
}

export type GraphCms_MediaDetails = {
   __typename?: 'GraphCMS_MediaDetails',
  file?: Maybe<Scalars['String']>,
  height?: Maybe<Scalars['Int']>,
  meta?: Maybe<GraphCms_MediaItemMeta>,
  sizes?: Maybe<Array<Maybe<GraphCms_MediaSize>>>,
  width?: Maybe<Scalars['Int']>,
};

export type GraphCms_MediaItem = GraphCms_Node & {
   __typename?: 'GraphCMS_MediaItem',
  altText?: Maybe<Scalars['String']>,
  ancestors?: Maybe<Array<Maybe<GraphCms_PostObjectUnion>>>,
  author?: Maybe<GraphCms_User>,
  caption?: Maybe<Scalars['String']>,
  commentCount?: Maybe<Scalars['Int']>,
  commentStatus?: Maybe<Scalars['String']>,
  comments?: Maybe<GraphCms_MediaItemToCommentConnection>,
  content?: Maybe<Scalars['String']>,
  date?: Maybe<Scalars['String']>,
  dateGmt?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  desiredSlug?: Maybe<Scalars['String']>,
  editLast?: Maybe<GraphCms_User>,
  editLock?: Maybe<GraphCms_EditLock>,
  enclosure?: Maybe<Scalars['String']>,
  excerpt?: Maybe<Scalars['String']>,
  guid?: Maybe<Scalars['String']>,
  id: Scalars['ID'],
  isRestricted?: Maybe<Scalars['Boolean']>,
  isRevision?: Maybe<Scalars['Boolean']>,
  link?: Maybe<Scalars['String']>,
  mediaDetails?: Maybe<GraphCms_MediaDetails>,
  mediaItemId: Scalars['Int'],
  mediaItemUrl?: Maybe<Scalars['String']>,
  mediaType?: Maybe<Scalars['String']>,
  menuOrder?: Maybe<Scalars['Int']>,
  mimeType?: Maybe<Scalars['String']>,
  modified?: Maybe<Scalars['String']>,
  modifiedGmt?: Maybe<Scalars['String']>,
  parent?: Maybe<GraphCms_PostObjectUnion>,
  pingStatus?: Maybe<Scalars['String']>,
  pinged?: Maybe<Array<Maybe<Scalars['String']>>>,
  sizes?: Maybe<Scalars['String']>,
  slug?: Maybe<Scalars['String']>,
  sourceUrl?: Maybe<Scalars['String']>,
  srcSet?: Maybe<Scalars['String']>,
  status?: Maybe<Scalars['String']>,
  termNames?: Maybe<Array<Maybe<Scalars['String']>>>,
  termSlugs?: Maybe<Array<Maybe<Scalars['String']>>>,
  terms?: Maybe<Array<Maybe<GraphCms_TermObjectUnion>>>,
  title?: Maybe<Scalars['String']>,
  toPing?: Maybe<Array<Maybe<Scalars['String']>>>,
  uri?: Maybe<Scalars['String']>,
};


export type GraphCms_MediaItemAncestorsArgs = {
  types?: Maybe<Array<Maybe<GraphCms_PostTypeEnum>>>
};


export type GraphCms_MediaItemCaptionArgs = {
  format?: Maybe<GraphCms_PostObjectFieldFormatEnum>
};


export type GraphCms_MediaItemCommentsArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  where?: Maybe<GraphCms_MediaItemToCommentConnectionWhereArgs>
};


export type GraphCms_MediaItemContentArgs = {
  format?: Maybe<GraphCms_PostObjectFieldFormatEnum>
};


export type GraphCms_MediaItemDescriptionArgs = {
  format?: Maybe<GraphCms_PostObjectFieldFormatEnum>
};


export type GraphCms_MediaItemExcerptArgs = {
  format?: Maybe<GraphCms_PostObjectFieldFormatEnum>
};


export type GraphCms_MediaItemSizesArgs = {
  size?: Maybe<GraphCms_MediaItemSizeEnum>
};


export type GraphCms_MediaItemSourceUrlArgs = {
  size?: Maybe<GraphCms_MediaItemSizeEnum>
};


export type GraphCms_MediaItemSrcSetArgs = {
  size?: Maybe<GraphCms_MediaItemSizeEnum>
};


export type GraphCms_MediaItemTermNamesArgs = {
  taxonomies?: Maybe<Array<Maybe<GraphCms_TaxonomyEnum>>>
};


export type GraphCms_MediaItemTermSlugsArgs = {
  taxonomies?: Maybe<Array<Maybe<GraphCms_TaxonomyEnum>>>
};


export type GraphCms_MediaItemTermsArgs = {
  taxonomies?: Maybe<Array<Maybe<GraphCms_TaxonomyEnum>>>
};


export type GraphCms_MediaItemTitleArgs = {
  format?: Maybe<GraphCms_PostObjectFieldFormatEnum>
};

export type GraphCms_MediaItemMeta = {
   __typename?: 'GraphCMS_MediaItemMeta',
  aperture?: Maybe<Scalars['Float']>,
  camera?: Maybe<Scalars['String']>,
  caption?: Maybe<Scalars['String']>,
  copyright?: Maybe<Scalars['String']>,
  createdTimestamp?: Maybe<Scalars['Int']>,
  credit?: Maybe<Scalars['String']>,
  focalLength?: Maybe<Scalars['Int']>,
  iso?: Maybe<Scalars['Int']>,
  keywords?: Maybe<Array<Maybe<Scalars['String']>>>,
  orientation?: Maybe<Scalars['String']>,
  shutterSpeed?: Maybe<Scalars['Float']>,
  title?: Maybe<Scalars['String']>,
};

export enum GraphCms_MediaItemSizeEnum {
  Large = 'LARGE',
  Medium = 'MEDIUM',
  MediumLarge = 'MEDIUM_LARGE',
  ShopCatalog = 'SHOP_CATALOG',
  ShopSingle = 'SHOP_SINGLE',
  ShopThumbnail = 'SHOP_THUMBNAIL',
  Thumbnail = 'THUMBNAIL',
  WoocommerceGalleryThumbnail = 'WOOCOMMERCE_GALLERY_THUMBNAIL',
  WoocommerceSingle = 'WOOCOMMERCE_SINGLE',
  WoocommerceThumbnail = 'WOOCOMMERCE_THUMBNAIL',
  1536X1536 = '_1536X1536',
  2048X2048 = '_2048X2048'
}

export enum GraphCms_MediaItemStatusEnum {
  AutoDraft = 'AUTO_DRAFT',
  Inherit = 'INHERIT',
  Private = 'PRIVATE',
  Trash = 'TRASH'
}

export type GraphCms_MediaItemToCommentConnection = {
   __typename?: 'GraphCMS_MediaItemToCommentConnection',
  edges?: Maybe<Array<Maybe<GraphCms_MediaItemToCommentConnectionEdge>>>,
  nodes?: Maybe<Array<Maybe<GraphCms_Comment>>>,
  pageInfo?: Maybe<GraphCms_WpPageInfo>,
};

export type GraphCms_MediaItemToCommentConnectionEdge = {
   __typename?: 'GraphCMS_MediaItemToCommentConnectionEdge',
  cursor?: Maybe<Scalars['String']>,
  node?: Maybe<GraphCms_Comment>,
};

export type GraphCms_MediaItemToCommentConnectionWhereArgs = {
  authorEmail?: Maybe<Scalars['String']>,
  authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>,
  authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>,
  authorUrl?: Maybe<Scalars['String']>,
  commentIn?: Maybe<Array<Maybe<Scalars['ID']>>>,
  commentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>,
  commentType?: Maybe<Scalars['String']>,
  commentTypeIn?: Maybe<Array<Maybe<Scalars['String']>>>,
  commentTypeNotIn?: Maybe<Scalars['String']>,
  contentAuthor?: Maybe<Array<Maybe<Scalars['ID']>>>,
  contentAuthorIn?: Maybe<Array<Maybe<Scalars['ID']>>>,
  contentAuthorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>,
  contentId?: Maybe<Scalars['ID']>,
  contentIdIn?: Maybe<Array<Maybe<Scalars['ID']>>>,
  contentIdNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>,
  contentName?: Maybe<Scalars['String']>,
  contentParent?: Maybe<Scalars['Int']>,
  contentStatus?: Maybe<Array<Maybe<GraphCms_PostStatusEnum>>>,
  contentType?: Maybe<Array<Maybe<GraphCms_PostTypeEnum>>>,
  includeUnapproved?: Maybe<Array<Maybe<Scalars['ID']>>>,
  karma?: Maybe<Scalars['Int']>,
  order?: Maybe<GraphCms_OrderEnum>,
  orderby?: Maybe<GraphCms_CommentsConnectionOrderbyEnum>,
  parent?: Maybe<Scalars['Int']>,
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>,
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>,
  search?: Maybe<Scalars['String']>,
  status?: Maybe<Scalars['String']>,
  userId?: Maybe<Scalars['ID']>,
};

export type GraphCms_MediaSize = {
   __typename?: 'GraphCMS_MediaSize',
  file?: Maybe<Scalars['String']>,
  height?: Maybe<Scalars['String']>,
  mimeType?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  sourceUrl?: Maybe<Scalars['String']>,
  width?: Maybe<Scalars['String']>,
};

export type GraphCms_Menu = GraphCms_Node & {
   __typename?: 'GraphCMS_Menu',
  count?: Maybe<Scalars['Int']>,
  id: Scalars['ID'],
  isRestricted?: Maybe<Scalars['Boolean']>,
  menuId?: Maybe<Scalars['Int']>,
  menuItems?: Maybe<GraphCms_MenuToMenuItemConnection>,
  name?: Maybe<Scalars['String']>,
  slug?: Maybe<Scalars['String']>,
};


export type GraphCms_MenuMenuItemsArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  where?: Maybe<GraphCms_MenuToMenuItemConnectionWhereArgs>
};

export type GraphCms_MenuItem = GraphCms_Node & {
   __typename?: 'GraphCMS_MenuItem',
  childItems?: Maybe<GraphCms_MenuItemToMenuItemConnection>,
  connectedObject?: Maybe<GraphCms_MenuItemObjectUnion>,
  cssClasses?: Maybe<Array<Maybe<Scalars['String']>>>,
  description?: Maybe<Scalars['String']>,
  id: Scalars['ID'],
  isRestricted?: Maybe<Scalars['Boolean']>,
  label?: Maybe<Scalars['String']>,
  linkRelationship?: Maybe<Scalars['String']>,
  menuItemId?: Maybe<Scalars['Int']>,
  target?: Maybe<Scalars['String']>,
  title?: Maybe<Scalars['String']>,
  url?: Maybe<Scalars['String']>,
};


export type GraphCms_MenuItemChildItemsArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  where?: Maybe<GraphCms_MenuItemToMenuItemConnectionWhereArgs>
};

export type GraphCms_MenuItemObjectUnion = GraphCms_Post | GraphCms_Page | GraphCms_Category | GraphCms_Tag | GraphCms_ProductCategory | GraphCms_ProductTag | GraphCms_MenuItem;

export type GraphCms_MenuItemToMenuItemConnection = {
   __typename?: 'GraphCMS_MenuItemToMenuItemConnection',
  edges?: Maybe<Array<Maybe<GraphCms_MenuItemToMenuItemConnectionEdge>>>,
  nodes?: Maybe<Array<Maybe<GraphCms_MenuItem>>>,
  pageInfo?: Maybe<GraphCms_WpPageInfo>,
};

export type GraphCms_MenuItemToMenuItemConnectionEdge = {
   __typename?: 'GraphCMS_MenuItemToMenuItemConnectionEdge',
  cursor?: Maybe<Scalars['String']>,
  node?: Maybe<GraphCms_MenuItem>,
};

export type GraphCms_MenuItemToMenuItemConnectionWhereArgs = {
  id?: Maybe<Scalars['Int']>,
  location?: Maybe<GraphCms_MenuLocationEnum>,
};

export enum GraphCms_MenuLocationEnum {
  Empty = 'EMPTY'
}

export type GraphCms_MenuToMenuItemConnection = {
   __typename?: 'GraphCMS_MenuToMenuItemConnection',
  edges?: Maybe<Array<Maybe<GraphCms_MenuToMenuItemConnectionEdge>>>,
  nodes?: Maybe<Array<Maybe<GraphCms_MenuItem>>>,
  pageInfo?: Maybe<GraphCms_WpPageInfo>,
};

export type GraphCms_MenuToMenuItemConnectionEdge = {
   __typename?: 'GraphCMS_MenuToMenuItemConnectionEdge',
  cursor?: Maybe<Scalars['String']>,
  node?: Maybe<GraphCms_MenuItem>,
};

export type GraphCms_MenuToMenuItemConnectionWhereArgs = {
  id?: Maybe<Scalars['Int']>,
  location?: Maybe<GraphCms_MenuLocationEnum>,
};

export type GraphCms_MetaData = {
   __typename?: 'GraphCMS_MetaData',
  id: Scalars['String'],
  key: Scalars['String'],
  value: Scalars['String'],
};

export type GraphCms_MetaDataInput = {
  key: Scalars['String'],
  value: Scalars['String'],
};

export enum GraphCms_MimeTypeEnum {
  ApplicationJava = 'APPLICATION_JAVA',
  ApplicationMsword = 'APPLICATION_MSWORD',
  ApplicationOctetStream = 'APPLICATION_OCTET_STREAM',
  ApplicationOnenote = 'APPLICATION_ONENOTE',
  ApplicationOxps = 'APPLICATION_OXPS',
  ApplicationPdf = 'APPLICATION_PDF',
  ApplicationRar = 'APPLICATION_RAR',
  ApplicationRtf = 'APPLICATION_RTF',
  ApplicationTtafXml = 'APPLICATION_TTAF_XML',
  ApplicationVndAppleKeynote = 'APPLICATION_VND_APPLE_KEYNOTE',
  ApplicationVndAppleNumbers = 'APPLICATION_VND_APPLE_NUMBERS',
  ApplicationVndApplePages = 'APPLICATION_VND_APPLE_PAGES',
  ApplicationVndMsAccess = 'APPLICATION_VND_MS_ACCESS',
  ApplicationVndMsExcel = 'APPLICATION_VND_MS_EXCEL',
  ApplicationVndMsExcelAddinMacroenabled_12 = 'APPLICATION_VND_MS_EXCEL_ADDIN_MACROENABLED_12',
  ApplicationVndMsExcelSheetBinaryMacroenabled_12 = 'APPLICATION_VND_MS_EXCEL_SHEET_BINARY_MACROENABLED_12',
  ApplicationVndMsExcelSheetMacroenabled_12 = 'APPLICATION_VND_MS_EXCEL_SHEET_MACROENABLED_12',
  ApplicationVndMsExcelTemplateMacroenabled_12 = 'APPLICATION_VND_MS_EXCEL_TEMPLATE_MACROENABLED_12',
  ApplicationVndMsPowerpoint = 'APPLICATION_VND_MS_POWERPOINT',
  ApplicationVndMsPowerpointAddinMacroenabled_12 = 'APPLICATION_VND_MS_POWERPOINT_ADDIN_MACROENABLED_12',
  ApplicationVndMsPowerpointPresentationMacroenabled_12 = 'APPLICATION_VND_MS_POWERPOINT_PRESENTATION_MACROENABLED_12',
  ApplicationVndMsPowerpointSlideshowMacroenabled_12 = 'APPLICATION_VND_MS_POWERPOINT_SLIDESHOW_MACROENABLED_12',
  ApplicationVndMsPowerpointSlideMacroenabled_12 = 'APPLICATION_VND_MS_POWERPOINT_SLIDE_MACROENABLED_12',
  ApplicationVndMsPowerpointTemplateMacroenabled_12 = 'APPLICATION_VND_MS_POWERPOINT_TEMPLATE_MACROENABLED_12',
  ApplicationVndMsProject = 'APPLICATION_VND_MS_PROJECT',
  ApplicationVndMsWordDocumentMacroenabled_12 = 'APPLICATION_VND_MS_WORD_DOCUMENT_MACROENABLED_12',
  ApplicationVndMsWordTemplateMacroenabled_12 = 'APPLICATION_VND_MS_WORD_TEMPLATE_MACROENABLED_12',
  ApplicationVndMsWrite = 'APPLICATION_VND_MS_WRITE',
  ApplicationVndMsXpsdocument = 'APPLICATION_VND_MS_XPSDOCUMENT',
  ApplicationVndOasisOpendocumentChart = 'APPLICATION_VND_OASIS_OPENDOCUMENT_CHART',
  ApplicationVndOasisOpendocumentDatabase = 'APPLICATION_VND_OASIS_OPENDOCUMENT_DATABASE',
  ApplicationVndOasisOpendocumentFormula = 'APPLICATION_VND_OASIS_OPENDOCUMENT_FORMULA',
  ApplicationVndOasisOpendocumentGraphics = 'APPLICATION_VND_OASIS_OPENDOCUMENT_GRAPHICS',
  ApplicationVndOasisOpendocumentPresentation = 'APPLICATION_VND_OASIS_OPENDOCUMENT_PRESENTATION',
  ApplicationVndOasisOpendocumentSpreadsheet = 'APPLICATION_VND_OASIS_OPENDOCUMENT_SPREADSHEET',
  ApplicationVndOasisOpendocumentText = 'APPLICATION_VND_OASIS_OPENDOCUMENT_TEXT',
  ApplicationVndOpenxmlformatsOfficedocumentPresentationmlPresentation = 'APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_PRESENTATIONML_PRESENTATION',
  ApplicationVndOpenxmlformatsOfficedocumentPresentationmlSlide = 'APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_PRESENTATIONML_SLIDE',
  ApplicationVndOpenxmlformatsOfficedocumentPresentationmlSlideshow = 'APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_PRESENTATIONML_SLIDESHOW',
  ApplicationVndOpenxmlformatsOfficedocumentPresentationmlTemplate = 'APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_PRESENTATIONML_TEMPLATE',
  ApplicationVndOpenxmlformatsOfficedocumentSpreadsheetmlSheet = 'APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_SPREADSHEETML_SHEET',
  ApplicationVndOpenxmlformatsOfficedocumentSpreadsheetmlTemplate = 'APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_SPREADSHEETML_TEMPLATE',
  ApplicationVndOpenxmlformatsOfficedocumentWordprocessingmlDocument = 'APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_WORDPROCESSINGML_DOCUMENT',
  ApplicationVndOpenxmlformatsOfficedocumentWordprocessingmlTemplate = 'APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_WORDPROCESSINGML_TEMPLATE',
  ApplicationWordperfect = 'APPLICATION_WORDPERFECT',
  ApplicationX_7ZCompressed = 'APPLICATION_X_7Z_COMPRESSED',
  ApplicationXGzip = 'APPLICATION_X_GZIP',
  ApplicationXTar = 'APPLICATION_X_TAR',
  ApplicationZip = 'APPLICATION_ZIP',
  AudioAac = 'AUDIO_AAC',
  AudioFlac = 'AUDIO_FLAC',
  AudioMidi = 'AUDIO_MIDI',
  AudioMpeg = 'AUDIO_MPEG',
  AudioOgg = 'AUDIO_OGG',
  AudioWav = 'AUDIO_WAV',
  AudioXMatroska = 'AUDIO_X_MATROSKA',
  AudioXMsWax = 'AUDIO_X_MS_WAX',
  AudioXMsWma = 'AUDIO_X_MS_WMA',
  AudioXRealaudio = 'AUDIO_X_REALAUDIO',
  ImageBmp = 'IMAGE_BMP',
  ImageGif = 'IMAGE_GIF',
  ImageJpeg = 'IMAGE_JPEG',
  ImagePng = 'IMAGE_PNG',
  ImageTiff = 'IMAGE_TIFF',
  ImageXIcon = 'IMAGE_X_ICON',
  TextCalendar = 'TEXT_CALENDAR',
  TextCss = 'TEXT_CSS',
  TextCsv = 'TEXT_CSV',
  TextPlain = 'TEXT_PLAIN',
  TextRichtext = 'TEXT_RICHTEXT',
  TextTabSeparatedValues = 'TEXT_TAB_SEPARATED_VALUES',
  TextVtt = 'TEXT_VTT',
  Video_3Gpp = 'VIDEO_3GPP',
  Video_3Gpp2 = 'VIDEO_3GPP2',
  VideoAvi = 'VIDEO_AVI',
  VideoDivx = 'VIDEO_DIVX',
  VideoMp4 = 'VIDEO_MP4',
  VideoMpeg = 'VIDEO_MPEG',
  VideoOgg = 'VIDEO_OGG',
  VideoQuicktime = 'VIDEO_QUICKTIME',
  VideoWebm = 'VIDEO_WEBM',
  VideoXFlv = 'VIDEO_X_FLV',
  VideoXMatroska = 'VIDEO_X_MATROSKA',
  VideoXMsAsf = 'VIDEO_X_MS_ASF',
  VideoXMsWm = 'VIDEO_X_MS_WM',
  VideoXMsWmv = 'VIDEO_X_MS_WMV',
  VideoXMsWmx = 'VIDEO_X_MS_WMX'
}

export type GraphCms_Node = {
  id: Scalars['ID'],
};

export type GraphCms_Order = GraphCms_Node & {
   __typename?: 'GraphCMS_Order',
  billing?: Maybe<GraphCms_CustomerAddress>,
  cartHash?: Maybe<Scalars['String']>,
  cartTax?: Maybe<Scalars['String']>,
  couponLines?: Maybe<GraphCms_OrderToCouponLineConnection>,
  createdVia?: Maybe<Scalars['String']>,
  currency?: Maybe<Scalars['String']>,
  customer?: Maybe<GraphCms_Customer>,
  customerIpAddress?: Maybe<Scalars['String']>,
  customerNote?: Maybe<Scalars['String']>,
  customerUserAgent?: Maybe<Scalars['String']>,
  date?: Maybe<Scalars['String']>,
  dateCompleted?: Maybe<Scalars['String']>,
  datePaid?: Maybe<Scalars['String']>,
  discountTax?: Maybe<Scalars['String']>,
  discountTotal?: Maybe<Scalars['String']>,
  downloadableItems?: Maybe<Array<Maybe<GraphCms_ProductDownload>>>,
  feeLines?: Maybe<GraphCms_OrderToFeeLineConnection>,
  hasBillingAddress?: Maybe<Scalars['Boolean']>,
  hasDownloadableItem?: Maybe<Scalars['Boolean']>,
  hasShippingAddress?: Maybe<Scalars['Boolean']>,
  id: Scalars['ID'],
  isDownloadPermitted?: Maybe<Scalars['Boolean']>,
  lineItems?: Maybe<GraphCms_OrderToLineItemConnection>,
  metaData?: Maybe<Array<Maybe<GraphCms_MetaData>>>,
  modified?: Maybe<Scalars['String']>,
  needsPayment?: Maybe<Scalars['Boolean']>,
  needsProcessing?: Maybe<Scalars['Boolean']>,
  needsShippingAddress?: Maybe<Scalars['Boolean']>,
  orderId?: Maybe<Scalars['Int']>,
  orderKey?: Maybe<Scalars['String']>,
  orderNumber?: Maybe<Scalars['String']>,
  orderVersion?: Maybe<Scalars['String']>,
  parent?: Maybe<GraphCms_Order>,
  paymentMethod?: Maybe<Scalars['String']>,
  paymentMethodTitle?: Maybe<Scalars['String']>,
  pricesIncludeTax?: Maybe<Scalars['Boolean']>,
  refunds?: Maybe<GraphCms_OrderToRefundConnection>,
  shipping?: Maybe<GraphCms_CustomerAddress>,
  shippingAddressMapUrl?: Maybe<Scalars['String']>,
  shippingLines?: Maybe<GraphCms_OrderToShippingLineConnection>,
  shippingTax?: Maybe<Scalars['String']>,
  shippingTotal?: Maybe<Scalars['String']>,
  status?: Maybe<GraphCms_OrderStatusEnum>,
  subtotal?: Maybe<Scalars['String']>,
  taxLines?: Maybe<GraphCms_OrderToTaxLineConnection>,
  total?: Maybe<Scalars['String']>,
  totalTax?: Maybe<Scalars['String']>,
  transactionId?: Maybe<Scalars['String']>,
};


export type GraphCms_OrderCartTaxArgs = {
  format?: Maybe<GraphCms_PricingFieldFormatEnum>
};


export type GraphCms_OrderCouponLinesArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>
};


export type GraphCms_OrderDiscountTaxArgs = {
  format?: Maybe<GraphCms_PricingFieldFormatEnum>
};


export type GraphCms_OrderDiscountTotalArgs = {
  format?: Maybe<GraphCms_PricingFieldFormatEnum>
};


export type GraphCms_OrderFeeLinesArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>
};


export type GraphCms_OrderLineItemsArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>
};


export type GraphCms_OrderMetaDataArgs = {
  key?: Maybe<Scalars['String']>,
  keysIn?: Maybe<Array<Maybe<Scalars['String']>>>,
  multiple?: Maybe<Scalars['Boolean']>
};


export type GraphCms_OrderRefundsArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  where?: Maybe<GraphCms_OrderToRefundConnectionWhereArgs>
};


export type GraphCms_OrderShippingLinesArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>
};


export type GraphCms_OrderShippingTaxArgs = {
  format?: Maybe<GraphCms_PricingFieldFormatEnum>
};


export type GraphCms_OrderShippingTotalArgs = {
  format?: Maybe<GraphCms_PricingFieldFormatEnum>
};


export type GraphCms_OrderSubtotalArgs = {
  format?: Maybe<GraphCms_PricingFieldFormatEnum>
};


export type GraphCms_OrderTaxLinesArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>
};


export type GraphCms_OrderTotalArgs = {
  format?: Maybe<GraphCms_PricingFieldFormatEnum>
};


export type GraphCms_OrderTotalTaxArgs = {
  format?: Maybe<GraphCms_PricingFieldFormatEnum>
};

export enum GraphCms_OrderEnum {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type GraphCms_OrderItemTax = {
   __typename?: 'GraphCMS_OrderItemTax',
  amount?: Maybe<Scalars['Float']>,
  subtotal?: Maybe<Scalars['Float']>,
  taxLine?: Maybe<GraphCms_TaxLine>,
  taxLineId: Scalars['Int'],
  total?: Maybe<Scalars['Float']>,
};

export enum GraphCms_OrdersOrderByEnum {
  Date = 'DATE',
  DateCompleted = 'DATE_COMPLETED',
  DatePaid = 'DATE_PAID',
  Discount = 'DISCOUNT',
  In = 'IN',
  MenuOrder = 'MENU_ORDER',
  Modified = 'MODIFIED',
  NameIn = 'NAME_IN',
  OrderKey = 'ORDER_KEY',
  Parent = 'PARENT',
  Slug = 'SLUG',
  Tax = 'TAX',
  Total = 'TOTAL'
}

export type GraphCms_OrdersOrderbyInput = {
  field: GraphCms_OrdersOrderByEnum,
  order?: Maybe<GraphCms_OrderEnum>,
};

export enum GraphCms_OrderStatusEnum {
  Cancelled = 'CANCELLED',
  Completed = 'COMPLETED',
  Failed = 'FAILED',
  OnHold = 'ON_HOLD',
  Pending = 'PENDING',
  Processing = 'PROCESSING',
  Refunded = 'REFUNDED'
}

export type GraphCms_OrderToCouponLineConnection = {
   __typename?: 'GraphCMS_OrderToCouponLineConnection',
  edges?: Maybe<Array<Maybe<GraphCms_OrderToCouponLineConnectionEdge>>>,
  nodes?: Maybe<Array<Maybe<GraphCms_CouponLine>>>,
  pageInfo?: Maybe<GraphCms_WpPageInfo>,
};

export type GraphCms_OrderToCouponLineConnectionEdge = {
   __typename?: 'GraphCMS_OrderToCouponLineConnectionEdge',
  cursor?: Maybe<Scalars['String']>,
  node?: Maybe<GraphCms_CouponLine>,
};

export type GraphCms_OrderToFeeLineConnection = {
   __typename?: 'GraphCMS_OrderToFeeLineConnection',
  edges?: Maybe<Array<Maybe<GraphCms_OrderToFeeLineConnectionEdge>>>,
  nodes?: Maybe<Array<Maybe<GraphCms_FeeLine>>>,
  pageInfo?: Maybe<GraphCms_WpPageInfo>,
};

export type GraphCms_OrderToFeeLineConnectionEdge = {
   __typename?: 'GraphCMS_OrderToFeeLineConnectionEdge',
  cursor?: Maybe<Scalars['String']>,
  node?: Maybe<GraphCms_FeeLine>,
};

export type GraphCms_OrderToLineItemConnection = {
   __typename?: 'GraphCMS_OrderToLineItemConnection',
  edges?: Maybe<Array<Maybe<GraphCms_OrderToLineItemConnectionEdge>>>,
  nodes?: Maybe<Array<Maybe<GraphCms_LineItem>>>,
  pageInfo?: Maybe<GraphCms_WpPageInfo>,
};

export type GraphCms_OrderToLineItemConnectionEdge = {
   __typename?: 'GraphCMS_OrderToLineItemConnectionEdge',
  cursor?: Maybe<Scalars['String']>,
  node?: Maybe<GraphCms_LineItem>,
};

export type GraphCms_OrderToRefundConnection = {
   __typename?: 'GraphCMS_OrderToRefundConnection',
  edges?: Maybe<Array<Maybe<GraphCms_OrderToRefundConnectionEdge>>>,
  nodes?: Maybe<Array<Maybe<GraphCms_Refund>>>,
  pageInfo?: Maybe<GraphCms_WpPageInfo>,
};

export type GraphCms_OrderToRefundConnectionEdge = {
   __typename?: 'GraphCMS_OrderToRefundConnectionEdge',
  cursor?: Maybe<Scalars['String']>,
  node?: Maybe<GraphCms_Refund>,
};

export type GraphCms_OrderToRefundConnectionWhereArgs = {
  dateQuery?: Maybe<GraphCms_DateQueryInput>,
  exclude?: Maybe<Array<Maybe<Scalars['Int']>>>,
  include?: Maybe<Array<Maybe<Scalars['Int']>>>,
  orderIn?: Maybe<Array<Maybe<Scalars['Int']>>>,
  orderby?: Maybe<Array<Maybe<GraphCms_PostTypeOrderbyInput>>>,
  parent?: Maybe<Scalars['Int']>,
  parentIn?: Maybe<Array<Maybe<Scalars['Int']>>>,
  parentNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>,
  search?: Maybe<Scalars['String']>,
  statuses?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type GraphCms_OrderToShippingLineConnection = {
   __typename?: 'GraphCMS_OrderToShippingLineConnection',
  edges?: Maybe<Array<Maybe<GraphCms_OrderToShippingLineConnectionEdge>>>,
  nodes?: Maybe<Array<Maybe<GraphCms_ShippingLine>>>,
  pageInfo?: Maybe<GraphCms_WpPageInfo>,
};

export type GraphCms_OrderToShippingLineConnectionEdge = {
   __typename?: 'GraphCMS_OrderToShippingLineConnectionEdge',
  cursor?: Maybe<Scalars['String']>,
  node?: Maybe<GraphCms_ShippingLine>,
};

export type GraphCms_OrderToTaxLineConnection = {
   __typename?: 'GraphCMS_OrderToTaxLineConnection',
  edges?: Maybe<Array<Maybe<GraphCms_OrderToTaxLineConnectionEdge>>>,
  nodes?: Maybe<Array<Maybe<GraphCms_TaxLine>>>,
  pageInfo?: Maybe<GraphCms_WpPageInfo>,
};

export type GraphCms_OrderToTaxLineConnectionEdge = {
   __typename?: 'GraphCMS_OrderToTaxLineConnectionEdge',
  cursor?: Maybe<Scalars['String']>,
  node?: Maybe<GraphCms_TaxLine>,
};

export type GraphCms_Page = GraphCms_Node & {
   __typename?: 'GraphCMS_Page',
  ancestors?: Maybe<Array<Maybe<GraphCms_PostObjectUnion>>>,
  author?: Maybe<GraphCms_User>,
  childPages?: Maybe<GraphCms_PageToPageConnection>,
  commentCount?: Maybe<Scalars['Int']>,
  commentStatus?: Maybe<Scalars['String']>,
  comments?: Maybe<GraphCms_PageToCommentConnection>,
  content?: Maybe<Scalars['String']>,
  date?: Maybe<Scalars['String']>,
  dateGmt?: Maybe<Scalars['String']>,
  desiredSlug?: Maybe<Scalars['String']>,
  editLast?: Maybe<GraphCms_User>,
  editLock?: Maybe<GraphCms_EditLock>,
  enclosure?: Maybe<Scalars['String']>,
  excerpt?: Maybe<Scalars['String']>,
  featuredImage?: Maybe<GraphCms_MediaItem>,
  guid?: Maybe<Scalars['String']>,
  id: Scalars['ID'],
  isFrontPage: Scalars['Boolean'],
  isRestricted?: Maybe<Scalars['Boolean']>,
  isRevision?: Maybe<Scalars['Boolean']>,
  link?: Maybe<Scalars['String']>,
  menuOrder?: Maybe<Scalars['Int']>,
  modified?: Maybe<Scalars['String']>,
  modifiedGmt?: Maybe<Scalars['String']>,
  pageId: Scalars['Int'],
  parent?: Maybe<GraphCms_PostObjectUnion>,
  pingStatus?: Maybe<Scalars['String']>,
  pinged?: Maybe<Array<Maybe<Scalars['String']>>>,
  revisions?: Maybe<GraphCms_PageToPageConnection>,
  slug?: Maybe<Scalars['String']>,
  status?: Maybe<Scalars['String']>,
  termNames?: Maybe<Array<Maybe<Scalars['String']>>>,
  termSlugs?: Maybe<Array<Maybe<Scalars['String']>>>,
  terms?: Maybe<Array<Maybe<GraphCms_TermObjectUnion>>>,
  title?: Maybe<Scalars['String']>,
  toPing?: Maybe<Array<Maybe<Scalars['String']>>>,
  uri?: Maybe<Scalars['String']>,
};


export type GraphCms_PageAncestorsArgs = {
  types?: Maybe<Array<Maybe<GraphCms_PostTypeEnum>>>
};


export type GraphCms_PageChildPagesArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  where?: Maybe<GraphCms_PageToPageConnectionWhereArgs>
};


export type GraphCms_PageCommentsArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  where?: Maybe<GraphCms_PageToCommentConnectionWhereArgs>
};


export type GraphCms_PageContentArgs = {
  format?: Maybe<GraphCms_PostObjectFieldFormatEnum>
};


export type GraphCms_PageExcerptArgs = {
  format?: Maybe<GraphCms_PostObjectFieldFormatEnum>
};


export type GraphCms_PageRevisionsArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  where?: Maybe<GraphCms_PageToPageConnectionWhereArgs>
};


export type GraphCms_PageTermNamesArgs = {
  taxonomies?: Maybe<Array<Maybe<GraphCms_TaxonomyEnum>>>
};


export type GraphCms_PageTermSlugsArgs = {
  taxonomies?: Maybe<Array<Maybe<GraphCms_TaxonomyEnum>>>
};


export type GraphCms_PageTermsArgs = {
  taxonomies?: Maybe<Array<Maybe<GraphCms_TaxonomyEnum>>>
};


export type GraphCms_PageTitleArgs = {
  format?: Maybe<GraphCms_PostObjectFieldFormatEnum>
};

export type GraphCms_PageToCommentConnection = {
   __typename?: 'GraphCMS_PageToCommentConnection',
  edges?: Maybe<Array<Maybe<GraphCms_PageToCommentConnectionEdge>>>,
  nodes?: Maybe<Array<Maybe<GraphCms_Comment>>>,
  pageInfo?: Maybe<GraphCms_WpPageInfo>,
};

export type GraphCms_PageToCommentConnectionEdge = {
   __typename?: 'GraphCMS_PageToCommentConnectionEdge',
  cursor?: Maybe<Scalars['String']>,
  node?: Maybe<GraphCms_Comment>,
};

export type GraphCms_PageToCommentConnectionWhereArgs = {
  authorEmail?: Maybe<Scalars['String']>,
  authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>,
  authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>,
  authorUrl?: Maybe<Scalars['String']>,
  commentIn?: Maybe<Array<Maybe<Scalars['ID']>>>,
  commentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>,
  commentType?: Maybe<Scalars['String']>,
  commentTypeIn?: Maybe<Array<Maybe<Scalars['String']>>>,
  commentTypeNotIn?: Maybe<Scalars['String']>,
  contentAuthor?: Maybe<Array<Maybe<Scalars['ID']>>>,
  contentAuthorIn?: Maybe<Array<Maybe<Scalars['ID']>>>,
  contentAuthorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>,
  contentId?: Maybe<Scalars['ID']>,
  contentIdIn?: Maybe<Array<Maybe<Scalars['ID']>>>,
  contentIdNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>,
  contentName?: Maybe<Scalars['String']>,
  contentParent?: Maybe<Scalars['Int']>,
  contentStatus?: Maybe<Array<Maybe<GraphCms_PostStatusEnum>>>,
  contentType?: Maybe<Array<Maybe<GraphCms_PostTypeEnum>>>,
  includeUnapproved?: Maybe<Array<Maybe<Scalars['ID']>>>,
  karma?: Maybe<Scalars['Int']>,
  order?: Maybe<GraphCms_OrderEnum>,
  orderby?: Maybe<GraphCms_CommentsConnectionOrderbyEnum>,
  parent?: Maybe<Scalars['Int']>,
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>,
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>,
  search?: Maybe<Scalars['String']>,
  status?: Maybe<Scalars['String']>,
  userId?: Maybe<Scalars['ID']>,
};

export type GraphCms_PageToPageConnection = {
   __typename?: 'GraphCMS_PageToPageConnection',
  edges?: Maybe<Array<Maybe<GraphCms_PageToPageConnectionEdge>>>,
  nodes?: Maybe<Array<Maybe<GraphCms_Page>>>,
  pageInfo?: Maybe<GraphCms_WpPageInfo>,
  postTypeInfo?: Maybe<GraphCms_PostType>,
};

export type GraphCms_PageToPageConnectionEdge = {
   __typename?: 'GraphCMS_PageToPageConnectionEdge',
  cursor?: Maybe<Scalars['String']>,
  node?: Maybe<GraphCms_Page>,
};

export type GraphCms_PageToPageConnectionWhereArgs = {
  author?: Maybe<Scalars['Int']>,
  authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>,
  authorName?: Maybe<Scalars['String']>,
  authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>,
  categoryId?: Maybe<Scalars['Int']>,
  categoryIn?: Maybe<Array<Maybe<Scalars['ID']>>>,
  categoryName?: Maybe<Scalars['String']>,
  categoryNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>,
  dateQuery?: Maybe<GraphCms_DateQueryInput>,
  hasPassword?: Maybe<Scalars['Boolean']>,
  id?: Maybe<Scalars['Int']>,
  in?: Maybe<Array<Maybe<Scalars['ID']>>>,
  mimeType?: Maybe<GraphCms_MimeTypeEnum>,
  name?: Maybe<Scalars['String']>,
  nameIn?: Maybe<Array<Maybe<Scalars['String']>>>,
  notIn?: Maybe<Array<Maybe<Scalars['ID']>>>,
  orderby?: Maybe<Array<Maybe<GraphCms_PostObjectsConnectionOrderbyInput>>>,
  parent?: Maybe<Scalars['String']>,
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>,
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>,
  password?: Maybe<Scalars['String']>,
  search?: Maybe<Scalars['String']>,
  stati?: Maybe<Array<Maybe<GraphCms_PostStatusEnum>>>,
  status?: Maybe<GraphCms_PostStatusEnum>,
  tag?: Maybe<Scalars['String']>,
  tagId?: Maybe<Scalars['String']>,
  tagIn?: Maybe<Array<Maybe<Scalars['ID']>>>,
  tagNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>,
  tagSlugAnd?: Maybe<Array<Maybe<Scalars['String']>>>,
  tagSlugIn?: Maybe<Array<Maybe<Scalars['String']>>>,
  title?: Maybe<Scalars['String']>,
};

export type GraphCms_PaHind = GraphCms_Node & {
   __typename?: 'GraphCMS_PaHind',
  count?: Maybe<Scalars['Int']>,
  description?: Maybe<Scalars['String']>,
  id: Scalars['ID'],
  isRestricted?: Maybe<Scalars['Boolean']>,
  link?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  paHindId?: Maybe<Scalars['Int']>,
  products?: Maybe<GraphCms_PaHindToProductConnection>,
  slug?: Maybe<Scalars['String']>,
  taxonomy?: Maybe<GraphCms_Taxonomy>,
  termGroupId?: Maybe<Scalars['Int']>,
  termTaxonomyId?: Maybe<Scalars['Int']>,
  variations?: Maybe<GraphCms_PaHindToProductVariationConnection>,
};


export type GraphCms_PaHindProductsArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  where?: Maybe<GraphCms_PaHindToProductConnectionWhereArgs>
};


export type GraphCms_PaHindVariationsArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  where?: Maybe<GraphCms_PaHindToProductVariationConnectionWhereArgs>
};

export type GraphCms_PaHindToProductConnection = {
   __typename?: 'GraphCMS_PaHindToProductConnection',
  edges?: Maybe<Array<Maybe<GraphCms_PaHindToProductConnectionEdge>>>,
  nodes?: Maybe<Array<Maybe<GraphCms_Product>>>,
  pageInfo?: Maybe<GraphCms_WpPageInfo>,
};

export type GraphCms_PaHindToProductConnectionEdge = {
   __typename?: 'GraphCMS_PaHindToProductConnectionEdge',
  cursor?: Maybe<Scalars['String']>,
  node?: Maybe<GraphCms_Product>,
};

export type GraphCms_PaHindToProductConnectionWhereArgs = {
  attribute?: Maybe<Scalars['String']>,
  attributeTerm?: Maybe<Scalars['String']>,
  category?: Maybe<Scalars['String']>,
  categoryId?: Maybe<Scalars['Int']>,
  categoryIdIn?: Maybe<Array<Maybe<Scalars['Int']>>>,
  categoryIdNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>,
  categoryIn?: Maybe<Array<Maybe<Scalars['String']>>>,
  categoryNotIn?: Maybe<Array<Maybe<Scalars['String']>>>,
  dateQuery?: Maybe<GraphCms_DateQueryInput>,
  exclude?: Maybe<Array<Maybe<Scalars['Int']>>>,
  featured?: Maybe<Scalars['Boolean']>,
  include?: Maybe<Array<Maybe<Scalars['Int']>>>,
  maxPrice?: Maybe<Scalars['Float']>,
  minPrice?: Maybe<Scalars['Float']>,
  onSale?: Maybe<Scalars['Boolean']>,
  orderby?: Maybe<Array<Maybe<GraphCms_ProductsOrderbyInput>>>,
  parent?: Maybe<Scalars['Int']>,
  parentIn?: Maybe<Array<Maybe<Scalars['Int']>>>,
  parentNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>,
  search?: Maybe<Scalars['String']>,
  shippingClassId?: Maybe<Scalars['Int']>,
  sku?: Maybe<Scalars['String']>,
  slug?: Maybe<Scalars['String']>,
  status?: Maybe<Scalars['String']>,
  stockStatus?: Maybe<Array<Maybe<GraphCms_StockStatusEnum>>>,
  tag?: Maybe<Scalars['String']>,
  tagId?: Maybe<Scalars['Int']>,
  tagIdIn?: Maybe<Array<Maybe<Scalars['Int']>>>,
  tagIdNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>,
  tagIn?: Maybe<Array<Maybe<Scalars['String']>>>,
  tagNotIn?: Maybe<Array<Maybe<Scalars['String']>>>,
  taxClass?: Maybe<GraphCms_TaxClassEnum>,
  taxonomyFilter?: Maybe<Array<Maybe<GraphCms_ProductTaxonomyFilterRelationInput>>>,
  type?: Maybe<GraphCms_ProductTypesEnum>,
  typeIn?: Maybe<Array<Maybe<GraphCms_ProductTypesEnum>>>,
  typeNotIn?: Maybe<Array<Maybe<GraphCms_ProductTypesEnum>>>,
  visibility?: Maybe<GraphCms_CatalogVisibilityEnum>,
};

export type GraphCms_PaHindToProductVariationConnection = {
   __typename?: 'GraphCMS_PaHindToProductVariationConnection',
  edges?: Maybe<Array<Maybe<GraphCms_PaHindToProductVariationConnectionEdge>>>,
  nodes?: Maybe<Array<Maybe<GraphCms_ProductVariation>>>,
  pageInfo?: Maybe<GraphCms_WpPageInfo>,
};

export type GraphCms_PaHindToProductVariationConnectionEdge = {
   __typename?: 'GraphCMS_PaHindToProductVariationConnectionEdge',
  cursor?: Maybe<Scalars['String']>,
  node?: Maybe<GraphCms_ProductVariation>,
};

export type GraphCms_PaHindToProductVariationConnectionWhereArgs = {
  attribute?: Maybe<Scalars['String']>,
  attributeTerm?: Maybe<Scalars['String']>,
  category?: Maybe<Scalars['String']>,
  categoryId?: Maybe<Scalars['Int']>,
  categoryIdIn?: Maybe<Array<Maybe<Scalars['Int']>>>,
  categoryIdNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>,
  categoryIn?: Maybe<Array<Maybe<Scalars['String']>>>,
  categoryNotIn?: Maybe<Array<Maybe<Scalars['String']>>>,
  dateQuery?: Maybe<GraphCms_DateQueryInput>,
  exclude?: Maybe<Array<Maybe<Scalars['Int']>>>,
  featured?: Maybe<Scalars['Boolean']>,
  include?: Maybe<Array<Maybe<Scalars['Int']>>>,
  maxPrice?: Maybe<Scalars['Float']>,
  minPrice?: Maybe<Scalars['Float']>,
  onSale?: Maybe<Scalars['Boolean']>,
  orderby?: Maybe<Array<Maybe<GraphCms_ProductsOrderbyInput>>>,
  parent?: Maybe<Scalars['Int']>,
  parentIn?: Maybe<Array<Maybe<Scalars['Int']>>>,
  parentNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>,
  search?: Maybe<Scalars['String']>,
  shippingClassId?: Maybe<Scalars['Int']>,
  sku?: Maybe<Scalars['String']>,
  slug?: Maybe<Scalars['String']>,
  status?: Maybe<Scalars['String']>,
  stockStatus?: Maybe<Array<Maybe<GraphCms_StockStatusEnum>>>,
  tag?: Maybe<Scalars['String']>,
  tagId?: Maybe<Scalars['Int']>,
  tagIdIn?: Maybe<Array<Maybe<Scalars['Int']>>>,
  tagIdNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>,
  tagIn?: Maybe<Array<Maybe<Scalars['String']>>>,
  tagNotIn?: Maybe<Array<Maybe<Scalars['String']>>>,
  taxClass?: Maybe<GraphCms_TaxClassEnum>,
  taxonomyFilter?: Maybe<Array<Maybe<GraphCms_ProductTaxonomyFilterRelationInput>>>,
  type?: Maybe<GraphCms_ProductTypesEnum>,
  typeIn?: Maybe<Array<Maybe<GraphCms_ProductTypesEnum>>>,
  typeNotIn?: Maybe<Array<Maybe<GraphCms_ProductTypesEnum>>>,
  visibility?: Maybe<GraphCms_CatalogVisibilityEnum>,
};

export type GraphCms_PaHulk = GraphCms_Node & {
   __typename?: 'GraphCMS_PaHulk',
  count?: Maybe<Scalars['Int']>,
  description?: Maybe<Scalars['String']>,
  id: Scalars['ID'],
  isRestricted?: Maybe<Scalars['Boolean']>,
  link?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  paHulkId?: Maybe<Scalars['Int']>,
  products?: Maybe<GraphCms_PaHulkToProductConnection>,
  slug?: Maybe<Scalars['String']>,
  taxonomy?: Maybe<GraphCms_Taxonomy>,
  termGroupId?: Maybe<Scalars['Int']>,
  termTaxonomyId?: Maybe<Scalars['Int']>,
  variations?: Maybe<GraphCms_PaHulkToProductVariationConnection>,
};


export type GraphCms_PaHulkProductsArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  where?: Maybe<GraphCms_PaHulkToProductConnectionWhereArgs>
};


export type GraphCms_PaHulkVariationsArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  where?: Maybe<GraphCms_PaHulkToProductVariationConnectionWhereArgs>
};

export type GraphCms_PaHulkToProductConnection = {
   __typename?: 'GraphCMS_PaHulkToProductConnection',
  edges?: Maybe<Array<Maybe<GraphCms_PaHulkToProductConnectionEdge>>>,
  nodes?: Maybe<Array<Maybe<GraphCms_Product>>>,
  pageInfo?: Maybe<GraphCms_WpPageInfo>,
};

export type GraphCms_PaHulkToProductConnectionEdge = {
   __typename?: 'GraphCMS_PaHulkToProductConnectionEdge',
  cursor?: Maybe<Scalars['String']>,
  node?: Maybe<GraphCms_Product>,
};

export type GraphCms_PaHulkToProductConnectionWhereArgs = {
  attribute?: Maybe<Scalars['String']>,
  attributeTerm?: Maybe<Scalars['String']>,
  category?: Maybe<Scalars['String']>,
  categoryId?: Maybe<Scalars['Int']>,
  categoryIdIn?: Maybe<Array<Maybe<Scalars['Int']>>>,
  categoryIdNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>,
  categoryIn?: Maybe<Array<Maybe<Scalars['String']>>>,
  categoryNotIn?: Maybe<Array<Maybe<Scalars['String']>>>,
  dateQuery?: Maybe<GraphCms_DateQueryInput>,
  exclude?: Maybe<Array<Maybe<Scalars['Int']>>>,
  featured?: Maybe<Scalars['Boolean']>,
  include?: Maybe<Array<Maybe<Scalars['Int']>>>,
  maxPrice?: Maybe<Scalars['Float']>,
  minPrice?: Maybe<Scalars['Float']>,
  onSale?: Maybe<Scalars['Boolean']>,
  orderby?: Maybe<Array<Maybe<GraphCms_ProductsOrderbyInput>>>,
  parent?: Maybe<Scalars['Int']>,
  parentIn?: Maybe<Array<Maybe<Scalars['Int']>>>,
  parentNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>,
  search?: Maybe<Scalars['String']>,
  shippingClassId?: Maybe<Scalars['Int']>,
  sku?: Maybe<Scalars['String']>,
  slug?: Maybe<Scalars['String']>,
  status?: Maybe<Scalars['String']>,
  stockStatus?: Maybe<Array<Maybe<GraphCms_StockStatusEnum>>>,
  tag?: Maybe<Scalars['String']>,
  tagId?: Maybe<Scalars['Int']>,
  tagIdIn?: Maybe<Array<Maybe<Scalars['Int']>>>,
  tagIdNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>,
  tagIn?: Maybe<Array<Maybe<Scalars['String']>>>,
  tagNotIn?: Maybe<Array<Maybe<Scalars['String']>>>,
  taxClass?: Maybe<GraphCms_TaxClassEnum>,
  taxonomyFilter?: Maybe<Array<Maybe<GraphCms_ProductTaxonomyFilterRelationInput>>>,
  type?: Maybe<GraphCms_ProductTypesEnum>,
  typeIn?: Maybe<Array<Maybe<GraphCms_ProductTypesEnum>>>,
  typeNotIn?: Maybe<Array<Maybe<GraphCms_ProductTypesEnum>>>,
  visibility?: Maybe<GraphCms_CatalogVisibilityEnum>,
};

export type GraphCms_PaHulkToProductVariationConnection = {
   __typename?: 'GraphCMS_PaHulkToProductVariationConnection',
  edges?: Maybe<Array<Maybe<GraphCms_PaHulkToProductVariationConnectionEdge>>>,
  nodes?: Maybe<Array<Maybe<GraphCms_ProductVariation>>>,
  pageInfo?: Maybe<GraphCms_WpPageInfo>,
};

export type GraphCms_PaHulkToProductVariationConnectionEdge = {
   __typename?: 'GraphCMS_PaHulkToProductVariationConnectionEdge',
  cursor?: Maybe<Scalars['String']>,
  node?: Maybe<GraphCms_ProductVariation>,
};

export type GraphCms_PaHulkToProductVariationConnectionWhereArgs = {
  attribute?: Maybe<Scalars['String']>,
  attributeTerm?: Maybe<Scalars['String']>,
  category?: Maybe<Scalars['String']>,
  categoryId?: Maybe<Scalars['Int']>,
  categoryIdIn?: Maybe<Array<Maybe<Scalars['Int']>>>,
  categoryIdNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>,
  categoryIn?: Maybe<Array<Maybe<Scalars['String']>>>,
  categoryNotIn?: Maybe<Array<Maybe<Scalars['String']>>>,
  dateQuery?: Maybe<GraphCms_DateQueryInput>,
  exclude?: Maybe<Array<Maybe<Scalars['Int']>>>,
  featured?: Maybe<Scalars['Boolean']>,
  include?: Maybe<Array<Maybe<Scalars['Int']>>>,
  maxPrice?: Maybe<Scalars['Float']>,
  minPrice?: Maybe<Scalars['Float']>,
  onSale?: Maybe<Scalars['Boolean']>,
  orderby?: Maybe<Array<Maybe<GraphCms_ProductsOrderbyInput>>>,
  parent?: Maybe<Scalars['Int']>,
  parentIn?: Maybe<Array<Maybe<Scalars['Int']>>>,
  parentNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>,
  search?: Maybe<Scalars['String']>,
  shippingClassId?: Maybe<Scalars['Int']>,
  sku?: Maybe<Scalars['String']>,
  slug?: Maybe<Scalars['String']>,
  status?: Maybe<Scalars['String']>,
  stockStatus?: Maybe<Array<Maybe<GraphCms_StockStatusEnum>>>,
  tag?: Maybe<Scalars['String']>,
  tagId?: Maybe<Scalars['Int']>,
  tagIdIn?: Maybe<Array<Maybe<Scalars['Int']>>>,
  tagIdNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>,
  tagIn?: Maybe<Array<Maybe<Scalars['String']>>>,
  tagNotIn?: Maybe<Array<Maybe<Scalars['String']>>>,
  taxClass?: Maybe<GraphCms_TaxClassEnum>,
  taxonomyFilter?: Maybe<Array<Maybe<GraphCms_ProductTaxonomyFilterRelationInput>>>,
  type?: Maybe<GraphCms_ProductTypesEnum>,
  typeIn?: Maybe<Array<Maybe<GraphCms_ProductTypesEnum>>>,
  typeNotIn?: Maybe<Array<Maybe<GraphCms_ProductTypesEnum>>>,
  visibility?: Maybe<GraphCms_CatalogVisibilityEnum>,
};

export type GraphCms_PaKasutusaeg = GraphCms_Node & {
   __typename?: 'GraphCMS_PaKasutusaeg',
  count?: Maybe<Scalars['Int']>,
  description?: Maybe<Scalars['String']>,
  id: Scalars['ID'],
  isRestricted?: Maybe<Scalars['Boolean']>,
  link?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  paKasutusaegId?: Maybe<Scalars['Int']>,
  products?: Maybe<GraphCms_PaKasutusaegToProductConnection>,
  slug?: Maybe<Scalars['String']>,
  taxonomy?: Maybe<GraphCms_Taxonomy>,
  termGroupId?: Maybe<Scalars['Int']>,
  termTaxonomyId?: Maybe<Scalars['Int']>,
  variations?: Maybe<GraphCms_PaKasutusaegToProductVariationConnection>,
};


export type GraphCms_PaKasutusaegProductsArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  where?: Maybe<GraphCms_PaKasutusaegToProductConnectionWhereArgs>
};


export type GraphCms_PaKasutusaegVariationsArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  where?: Maybe<GraphCms_PaKasutusaegToProductVariationConnectionWhereArgs>
};

export type GraphCms_PaKasutusaegToProductConnection = {
   __typename?: 'GraphCMS_PaKasutusaegToProductConnection',
  edges?: Maybe<Array<Maybe<GraphCms_PaKasutusaegToProductConnectionEdge>>>,
  nodes?: Maybe<Array<Maybe<GraphCms_Product>>>,
  pageInfo?: Maybe<GraphCms_WpPageInfo>,
};

export type GraphCms_PaKasutusaegToProductConnectionEdge = {
   __typename?: 'GraphCMS_PaKasutusaegToProductConnectionEdge',
  cursor?: Maybe<Scalars['String']>,
  node?: Maybe<GraphCms_Product>,
};

export type GraphCms_PaKasutusaegToProductConnectionWhereArgs = {
  attribute?: Maybe<Scalars['String']>,
  attributeTerm?: Maybe<Scalars['String']>,
  category?: Maybe<Scalars['String']>,
  categoryId?: Maybe<Scalars['Int']>,
  categoryIdIn?: Maybe<Array<Maybe<Scalars['Int']>>>,
  categoryIdNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>,
  categoryIn?: Maybe<Array<Maybe<Scalars['String']>>>,
  categoryNotIn?: Maybe<Array<Maybe<Scalars['String']>>>,
  dateQuery?: Maybe<GraphCms_DateQueryInput>,
  exclude?: Maybe<Array<Maybe<Scalars['Int']>>>,
  featured?: Maybe<Scalars['Boolean']>,
  include?: Maybe<Array<Maybe<Scalars['Int']>>>,
  maxPrice?: Maybe<Scalars['Float']>,
  minPrice?: Maybe<Scalars['Float']>,
  onSale?: Maybe<Scalars['Boolean']>,
  orderby?: Maybe<Array<Maybe<GraphCms_ProductsOrderbyInput>>>,
  parent?: Maybe<Scalars['Int']>,
  parentIn?: Maybe<Array<Maybe<Scalars['Int']>>>,
  parentNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>,
  search?: Maybe<Scalars['String']>,
  shippingClassId?: Maybe<Scalars['Int']>,
  sku?: Maybe<Scalars['String']>,
  slug?: Maybe<Scalars['String']>,
  status?: Maybe<Scalars['String']>,
  stockStatus?: Maybe<Array<Maybe<GraphCms_StockStatusEnum>>>,
  tag?: Maybe<Scalars['String']>,
  tagId?: Maybe<Scalars['Int']>,
  tagIdIn?: Maybe<Array<Maybe<Scalars['Int']>>>,
  tagIdNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>,
  tagIn?: Maybe<Array<Maybe<Scalars['String']>>>,
  tagNotIn?: Maybe<Array<Maybe<Scalars['String']>>>,
  taxClass?: Maybe<GraphCms_TaxClassEnum>,
  taxonomyFilter?: Maybe<Array<Maybe<GraphCms_ProductTaxonomyFilterRelationInput>>>,
  type?: Maybe<GraphCms_ProductTypesEnum>,
  typeIn?: Maybe<Array<Maybe<GraphCms_ProductTypesEnum>>>,
  typeNotIn?: Maybe<Array<Maybe<GraphCms_ProductTypesEnum>>>,
  visibility?: Maybe<GraphCms_CatalogVisibilityEnum>,
};

export type GraphCms_PaKasutusaegToProductVariationConnection = {
   __typename?: 'GraphCMS_PaKasutusaegToProductVariationConnection',
  edges?: Maybe<Array<Maybe<GraphCms_PaKasutusaegToProductVariationConnectionEdge>>>,
  nodes?: Maybe<Array<Maybe<GraphCms_ProductVariation>>>,
  pageInfo?: Maybe<GraphCms_WpPageInfo>,
};

export type GraphCms_PaKasutusaegToProductVariationConnectionEdge = {
   __typename?: 'GraphCMS_PaKasutusaegToProductVariationConnectionEdge',
  cursor?: Maybe<Scalars['String']>,
  node?: Maybe<GraphCms_ProductVariation>,
};

export type GraphCms_PaKasutusaegToProductVariationConnectionWhereArgs = {
  attribute?: Maybe<Scalars['String']>,
  attributeTerm?: Maybe<Scalars['String']>,
  category?: Maybe<Scalars['String']>,
  categoryId?: Maybe<Scalars['Int']>,
  categoryIdIn?: Maybe<Array<Maybe<Scalars['Int']>>>,
  categoryIdNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>,
  categoryIn?: Maybe<Array<Maybe<Scalars['String']>>>,
  categoryNotIn?: Maybe<Array<Maybe<Scalars['String']>>>,
  dateQuery?: Maybe<GraphCms_DateQueryInput>,
  exclude?: Maybe<Array<Maybe<Scalars['Int']>>>,
  featured?: Maybe<Scalars['Boolean']>,
  include?: Maybe<Array<Maybe<Scalars['Int']>>>,
  maxPrice?: Maybe<Scalars['Float']>,
  minPrice?: Maybe<Scalars['Float']>,
  onSale?: Maybe<Scalars['Boolean']>,
  orderby?: Maybe<Array<Maybe<GraphCms_ProductsOrderbyInput>>>,
  parent?: Maybe<Scalars['Int']>,
  parentIn?: Maybe<Array<Maybe<Scalars['Int']>>>,
  parentNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>,
  search?: Maybe<Scalars['String']>,
  shippingClassId?: Maybe<Scalars['Int']>,
  sku?: Maybe<Scalars['String']>,
  slug?: Maybe<Scalars['String']>,
  status?: Maybe<Scalars['String']>,
  stockStatus?: Maybe<Array<Maybe<GraphCms_StockStatusEnum>>>,
  tag?: Maybe<Scalars['String']>,
  tagId?: Maybe<Scalars['Int']>,
  tagIdIn?: Maybe<Array<Maybe<Scalars['Int']>>>,
  tagIdNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>,
  tagIn?: Maybe<Array<Maybe<Scalars['String']>>>,
  tagNotIn?: Maybe<Array<Maybe<Scalars['String']>>>,
  taxClass?: Maybe<GraphCms_TaxClassEnum>,
  taxonomyFilter?: Maybe<Array<Maybe<GraphCms_ProductTaxonomyFilterRelationInput>>>,
  type?: Maybe<GraphCms_ProductTypesEnum>,
  typeIn?: Maybe<Array<Maybe<GraphCms_ProductTypesEnum>>>,
  typeNotIn?: Maybe<Array<Maybe<GraphCms_ProductTypesEnum>>>,
  visibility?: Maybe<GraphCms_CatalogVisibilityEnum>,
};

export type GraphCms_PaKogus = GraphCms_Node & {
   __typename?: 'GraphCMS_PaKogus',
  count?: Maybe<Scalars['Int']>,
  description?: Maybe<Scalars['String']>,
  id: Scalars['ID'],
  isRestricted?: Maybe<Scalars['Boolean']>,
  link?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  paKogusId?: Maybe<Scalars['Int']>,
  products?: Maybe<GraphCms_PaKogusToProductConnection>,
  slug?: Maybe<Scalars['String']>,
  taxonomy?: Maybe<GraphCms_Taxonomy>,
  termGroupId?: Maybe<Scalars['Int']>,
  termTaxonomyId?: Maybe<Scalars['Int']>,
  variations?: Maybe<GraphCms_PaKogusToProductVariationConnection>,
};


export type GraphCms_PaKogusProductsArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  where?: Maybe<GraphCms_PaKogusToProductConnectionWhereArgs>
};


export type GraphCms_PaKogusVariationsArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  where?: Maybe<GraphCms_PaKogusToProductVariationConnectionWhereArgs>
};

export type GraphCms_PaKogusToProductConnection = {
   __typename?: 'GraphCMS_PaKogusToProductConnection',
  edges?: Maybe<Array<Maybe<GraphCms_PaKogusToProductConnectionEdge>>>,
  nodes?: Maybe<Array<Maybe<GraphCms_Product>>>,
  pageInfo?: Maybe<GraphCms_WpPageInfo>,
};

export type GraphCms_PaKogusToProductConnectionEdge = {
   __typename?: 'GraphCMS_PaKogusToProductConnectionEdge',
  cursor?: Maybe<Scalars['String']>,
  node?: Maybe<GraphCms_Product>,
};

export type GraphCms_PaKogusToProductConnectionWhereArgs = {
  attribute?: Maybe<Scalars['String']>,
  attributeTerm?: Maybe<Scalars['String']>,
  category?: Maybe<Scalars['String']>,
  categoryId?: Maybe<Scalars['Int']>,
  categoryIdIn?: Maybe<Array<Maybe<Scalars['Int']>>>,
  categoryIdNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>,
  categoryIn?: Maybe<Array<Maybe<Scalars['String']>>>,
  categoryNotIn?: Maybe<Array<Maybe<Scalars['String']>>>,
  dateQuery?: Maybe<GraphCms_DateQueryInput>,
  exclude?: Maybe<Array<Maybe<Scalars['Int']>>>,
  featured?: Maybe<Scalars['Boolean']>,
  include?: Maybe<Array<Maybe<Scalars['Int']>>>,
  maxPrice?: Maybe<Scalars['Float']>,
  minPrice?: Maybe<Scalars['Float']>,
  onSale?: Maybe<Scalars['Boolean']>,
  orderby?: Maybe<Array<Maybe<GraphCms_ProductsOrderbyInput>>>,
  parent?: Maybe<Scalars['Int']>,
  parentIn?: Maybe<Array<Maybe<Scalars['Int']>>>,
  parentNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>,
  search?: Maybe<Scalars['String']>,
  shippingClassId?: Maybe<Scalars['Int']>,
  sku?: Maybe<Scalars['String']>,
  slug?: Maybe<Scalars['String']>,
  status?: Maybe<Scalars['String']>,
  stockStatus?: Maybe<Array<Maybe<GraphCms_StockStatusEnum>>>,
  tag?: Maybe<Scalars['String']>,
  tagId?: Maybe<Scalars['Int']>,
  tagIdIn?: Maybe<Array<Maybe<Scalars['Int']>>>,
  tagIdNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>,
  tagIn?: Maybe<Array<Maybe<Scalars['String']>>>,
  tagNotIn?: Maybe<Array<Maybe<Scalars['String']>>>,
  taxClass?: Maybe<GraphCms_TaxClassEnum>,
  taxonomyFilter?: Maybe<Array<Maybe<GraphCms_ProductTaxonomyFilterRelationInput>>>,
  type?: Maybe<GraphCms_ProductTypesEnum>,
  typeIn?: Maybe<Array<Maybe<GraphCms_ProductTypesEnum>>>,
  typeNotIn?: Maybe<Array<Maybe<GraphCms_ProductTypesEnum>>>,
  visibility?: Maybe<GraphCms_CatalogVisibilityEnum>,
};

export type GraphCms_PaKogusToProductVariationConnection = {
   __typename?: 'GraphCMS_PaKogusToProductVariationConnection',
  edges?: Maybe<Array<Maybe<GraphCms_PaKogusToProductVariationConnectionEdge>>>,
  nodes?: Maybe<Array<Maybe<GraphCms_ProductVariation>>>,
  pageInfo?: Maybe<GraphCms_WpPageInfo>,
};

export type GraphCms_PaKogusToProductVariationConnectionEdge = {
   __typename?: 'GraphCMS_PaKogusToProductVariationConnectionEdge',
  cursor?: Maybe<Scalars['String']>,
  node?: Maybe<GraphCms_ProductVariation>,
};

export type GraphCms_PaKogusToProductVariationConnectionWhereArgs = {
  attribute?: Maybe<Scalars['String']>,
  attributeTerm?: Maybe<Scalars['String']>,
  category?: Maybe<Scalars['String']>,
  categoryId?: Maybe<Scalars['Int']>,
  categoryIdIn?: Maybe<Array<Maybe<Scalars['Int']>>>,
  categoryIdNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>,
  categoryIn?: Maybe<Array<Maybe<Scalars['String']>>>,
  categoryNotIn?: Maybe<Array<Maybe<Scalars['String']>>>,
  dateQuery?: Maybe<GraphCms_DateQueryInput>,
  exclude?: Maybe<Array<Maybe<Scalars['Int']>>>,
  featured?: Maybe<Scalars['Boolean']>,
  include?: Maybe<Array<Maybe<Scalars['Int']>>>,
  maxPrice?: Maybe<Scalars['Float']>,
  minPrice?: Maybe<Scalars['Float']>,
  onSale?: Maybe<Scalars['Boolean']>,
  orderby?: Maybe<Array<Maybe<GraphCms_ProductsOrderbyInput>>>,
  parent?: Maybe<Scalars['Int']>,
  parentIn?: Maybe<Array<Maybe<Scalars['Int']>>>,
  parentNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>,
  search?: Maybe<Scalars['String']>,
  shippingClassId?: Maybe<Scalars['Int']>,
  sku?: Maybe<Scalars['String']>,
  slug?: Maybe<Scalars['String']>,
  status?: Maybe<Scalars['String']>,
  stockStatus?: Maybe<Array<Maybe<GraphCms_StockStatusEnum>>>,
  tag?: Maybe<Scalars['String']>,
  tagId?: Maybe<Scalars['Int']>,
  tagIdIn?: Maybe<Array<Maybe<Scalars['Int']>>>,
  tagIdNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>,
  tagIn?: Maybe<Array<Maybe<Scalars['String']>>>,
  tagNotIn?: Maybe<Array<Maybe<Scalars['String']>>>,
  taxClass?: Maybe<GraphCms_TaxClassEnum>,
  taxonomyFilter?: Maybe<Array<Maybe<GraphCms_ProductTaxonomyFilterRelationInput>>>,
  type?: Maybe<GraphCms_ProductTypesEnum>,
  typeIn?: Maybe<Array<Maybe<GraphCms_ProductTypesEnum>>>,
  typeNotIn?: Maybe<Array<Maybe<GraphCms_ProductTypesEnum>>>,
  visibility?: Maybe<GraphCms_CatalogVisibilityEnum>,
};

export type GraphCms_PaKontuur = GraphCms_Node & {
   __typename?: 'GraphCMS_PaKontuur',
  count?: Maybe<Scalars['Int']>,
  description?: Maybe<Scalars['String']>,
  id: Scalars['ID'],
  isRestricted?: Maybe<Scalars['Boolean']>,
  link?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  paKontuurId?: Maybe<Scalars['Int']>,
  products?: Maybe<GraphCms_PaKontuurToProductConnection>,
  slug?: Maybe<Scalars['String']>,
  taxonomy?: Maybe<GraphCms_Taxonomy>,
  termGroupId?: Maybe<Scalars['Int']>,
  termTaxonomyId?: Maybe<Scalars['Int']>,
  variations?: Maybe<GraphCms_PaKontuurToProductVariationConnection>,
};


export type GraphCms_PaKontuurProductsArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  where?: Maybe<GraphCms_PaKontuurToProductConnectionWhereArgs>
};


export type GraphCms_PaKontuurVariationsArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  where?: Maybe<GraphCms_PaKontuurToProductVariationConnectionWhereArgs>
};

export type GraphCms_PaKontuurToProductConnection = {
   __typename?: 'GraphCMS_PaKontuurToProductConnection',
  edges?: Maybe<Array<Maybe<GraphCms_PaKontuurToProductConnectionEdge>>>,
  nodes?: Maybe<Array<Maybe<GraphCms_Product>>>,
  pageInfo?: Maybe<GraphCms_WpPageInfo>,
};

export type GraphCms_PaKontuurToProductConnectionEdge = {
   __typename?: 'GraphCMS_PaKontuurToProductConnectionEdge',
  cursor?: Maybe<Scalars['String']>,
  node?: Maybe<GraphCms_Product>,
};

export type GraphCms_PaKontuurToProductConnectionWhereArgs = {
  attribute?: Maybe<Scalars['String']>,
  attributeTerm?: Maybe<Scalars['String']>,
  category?: Maybe<Scalars['String']>,
  categoryId?: Maybe<Scalars['Int']>,
  categoryIdIn?: Maybe<Array<Maybe<Scalars['Int']>>>,
  categoryIdNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>,
  categoryIn?: Maybe<Array<Maybe<Scalars['String']>>>,
  categoryNotIn?: Maybe<Array<Maybe<Scalars['String']>>>,
  dateQuery?: Maybe<GraphCms_DateQueryInput>,
  exclude?: Maybe<Array<Maybe<Scalars['Int']>>>,
  featured?: Maybe<Scalars['Boolean']>,
  include?: Maybe<Array<Maybe<Scalars['Int']>>>,
  maxPrice?: Maybe<Scalars['Float']>,
  minPrice?: Maybe<Scalars['Float']>,
  onSale?: Maybe<Scalars['Boolean']>,
  orderby?: Maybe<Array<Maybe<GraphCms_ProductsOrderbyInput>>>,
  parent?: Maybe<Scalars['Int']>,
  parentIn?: Maybe<Array<Maybe<Scalars['Int']>>>,
  parentNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>,
  search?: Maybe<Scalars['String']>,
  shippingClassId?: Maybe<Scalars['Int']>,
  sku?: Maybe<Scalars['String']>,
  slug?: Maybe<Scalars['String']>,
  status?: Maybe<Scalars['String']>,
  stockStatus?: Maybe<Array<Maybe<GraphCms_StockStatusEnum>>>,
  tag?: Maybe<Scalars['String']>,
  tagId?: Maybe<Scalars['Int']>,
  tagIdIn?: Maybe<Array<Maybe<Scalars['Int']>>>,
  tagIdNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>,
  tagIn?: Maybe<Array<Maybe<Scalars['String']>>>,
  tagNotIn?: Maybe<Array<Maybe<Scalars['String']>>>,
  taxClass?: Maybe<GraphCms_TaxClassEnum>,
  taxonomyFilter?: Maybe<Array<Maybe<GraphCms_ProductTaxonomyFilterRelationInput>>>,
  type?: Maybe<GraphCms_ProductTypesEnum>,
  typeIn?: Maybe<Array<Maybe<GraphCms_ProductTypesEnum>>>,
  typeNotIn?: Maybe<Array<Maybe<GraphCms_ProductTypesEnum>>>,
  visibility?: Maybe<GraphCms_CatalogVisibilityEnum>,
};

export type GraphCms_PaKontuurToProductVariationConnection = {
   __typename?: 'GraphCMS_PaKontuurToProductVariationConnection',
  edges?: Maybe<Array<Maybe<GraphCms_PaKontuurToProductVariationConnectionEdge>>>,
  nodes?: Maybe<Array<Maybe<GraphCms_ProductVariation>>>,
  pageInfo?: Maybe<GraphCms_WpPageInfo>,
};

export type GraphCms_PaKontuurToProductVariationConnectionEdge = {
   __typename?: 'GraphCMS_PaKontuurToProductVariationConnectionEdge',
  cursor?: Maybe<Scalars['String']>,
  node?: Maybe<GraphCms_ProductVariation>,
};

export type GraphCms_PaKontuurToProductVariationConnectionWhereArgs = {
  attribute?: Maybe<Scalars['String']>,
  attributeTerm?: Maybe<Scalars['String']>,
  category?: Maybe<Scalars['String']>,
  categoryId?: Maybe<Scalars['Int']>,
  categoryIdIn?: Maybe<Array<Maybe<Scalars['Int']>>>,
  categoryIdNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>,
  categoryIn?: Maybe<Array<Maybe<Scalars['String']>>>,
  categoryNotIn?: Maybe<Array<Maybe<Scalars['String']>>>,
  dateQuery?: Maybe<GraphCms_DateQueryInput>,
  exclude?: Maybe<Array<Maybe<Scalars['Int']>>>,
  featured?: Maybe<Scalars['Boolean']>,
  include?: Maybe<Array<Maybe<Scalars['Int']>>>,
  maxPrice?: Maybe<Scalars['Float']>,
  minPrice?: Maybe<Scalars['Float']>,
  onSale?: Maybe<Scalars['Boolean']>,
  orderby?: Maybe<Array<Maybe<GraphCms_ProductsOrderbyInput>>>,
  parent?: Maybe<Scalars['Int']>,
  parentIn?: Maybe<Array<Maybe<Scalars['Int']>>>,
  parentNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>,
  search?: Maybe<Scalars['String']>,
  shippingClassId?: Maybe<Scalars['Int']>,
  sku?: Maybe<Scalars['String']>,
  slug?: Maybe<Scalars['String']>,
  status?: Maybe<Scalars['String']>,
  stockStatus?: Maybe<Array<Maybe<GraphCms_StockStatusEnum>>>,
  tag?: Maybe<Scalars['String']>,
  tagId?: Maybe<Scalars['Int']>,
  tagIdIn?: Maybe<Array<Maybe<Scalars['Int']>>>,
  tagIdNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>,
  tagIn?: Maybe<Array<Maybe<Scalars['String']>>>,
  tagNotIn?: Maybe<Array<Maybe<Scalars['String']>>>,
  taxClass?: Maybe<GraphCms_TaxClassEnum>,
  taxonomyFilter?: Maybe<Array<Maybe<GraphCms_ProductTaxonomyFilterRelationInput>>>,
  type?: Maybe<GraphCms_ProductTypesEnum>,
  typeIn?: Maybe<Array<Maybe<GraphCms_ProductTypesEnum>>>,
  typeNotIn?: Maybe<Array<Maybe<GraphCms_ProductTypesEnum>>>,
  visibility?: Maybe<GraphCms_CatalogVisibilityEnum>,
};

export type GraphCms_PaKoostisained = GraphCms_Node & {
   __typename?: 'GraphCMS_PaKoostisained',
  count?: Maybe<Scalars['Int']>,
  description?: Maybe<Scalars['String']>,
  id: Scalars['ID'],
  isRestricted?: Maybe<Scalars['Boolean']>,
  link?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  paKoostisainedId?: Maybe<Scalars['Int']>,
  products?: Maybe<GraphCms_PaKoostisainedToProductConnection>,
  slug?: Maybe<Scalars['String']>,
  taxonomy?: Maybe<GraphCms_Taxonomy>,
  termGroupId?: Maybe<Scalars['Int']>,
  termTaxonomyId?: Maybe<Scalars['Int']>,
  variations?: Maybe<GraphCms_PaKoostisainedToProductVariationConnection>,
};


export type GraphCms_PaKoostisainedProductsArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  where?: Maybe<GraphCms_PaKoostisainedToProductConnectionWhereArgs>
};


export type GraphCms_PaKoostisainedVariationsArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  where?: Maybe<GraphCms_PaKoostisainedToProductVariationConnectionWhereArgs>
};

export type GraphCms_PaKoostisainedToProductConnection = {
   __typename?: 'GraphCMS_PaKoostisainedToProductConnection',
  edges?: Maybe<Array<Maybe<GraphCms_PaKoostisainedToProductConnectionEdge>>>,
  nodes?: Maybe<Array<Maybe<GraphCms_Product>>>,
  pageInfo?: Maybe<GraphCms_WpPageInfo>,
};

export type GraphCms_PaKoostisainedToProductConnectionEdge = {
   __typename?: 'GraphCMS_PaKoostisainedToProductConnectionEdge',
  cursor?: Maybe<Scalars['String']>,
  node?: Maybe<GraphCms_Product>,
};

export type GraphCms_PaKoostisainedToProductConnectionWhereArgs = {
  attribute?: Maybe<Scalars['String']>,
  attributeTerm?: Maybe<Scalars['String']>,
  category?: Maybe<Scalars['String']>,
  categoryId?: Maybe<Scalars['Int']>,
  categoryIdIn?: Maybe<Array<Maybe<Scalars['Int']>>>,
  categoryIdNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>,
  categoryIn?: Maybe<Array<Maybe<Scalars['String']>>>,
  categoryNotIn?: Maybe<Array<Maybe<Scalars['String']>>>,
  dateQuery?: Maybe<GraphCms_DateQueryInput>,
  exclude?: Maybe<Array<Maybe<Scalars['Int']>>>,
  featured?: Maybe<Scalars['Boolean']>,
  include?: Maybe<Array<Maybe<Scalars['Int']>>>,
  maxPrice?: Maybe<Scalars['Float']>,
  minPrice?: Maybe<Scalars['Float']>,
  onSale?: Maybe<Scalars['Boolean']>,
  orderby?: Maybe<Array<Maybe<GraphCms_ProductsOrderbyInput>>>,
  parent?: Maybe<Scalars['Int']>,
  parentIn?: Maybe<Array<Maybe<Scalars['Int']>>>,
  parentNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>,
  search?: Maybe<Scalars['String']>,
  shippingClassId?: Maybe<Scalars['Int']>,
  sku?: Maybe<Scalars['String']>,
  slug?: Maybe<Scalars['String']>,
  status?: Maybe<Scalars['String']>,
  stockStatus?: Maybe<Array<Maybe<GraphCms_StockStatusEnum>>>,
  tag?: Maybe<Scalars['String']>,
  tagId?: Maybe<Scalars['Int']>,
  tagIdIn?: Maybe<Array<Maybe<Scalars['Int']>>>,
  tagIdNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>,
  tagIn?: Maybe<Array<Maybe<Scalars['String']>>>,
  tagNotIn?: Maybe<Array<Maybe<Scalars['String']>>>,
  taxClass?: Maybe<GraphCms_TaxClassEnum>,
  taxonomyFilter?: Maybe<Array<Maybe<GraphCms_ProductTaxonomyFilterRelationInput>>>,
  type?: Maybe<GraphCms_ProductTypesEnum>,
  typeIn?: Maybe<Array<Maybe<GraphCms_ProductTypesEnum>>>,
  typeNotIn?: Maybe<Array<Maybe<GraphCms_ProductTypesEnum>>>,
  visibility?: Maybe<GraphCms_CatalogVisibilityEnum>,
};

export type GraphCms_PaKoostisainedToProductVariationConnection = {
   __typename?: 'GraphCMS_PaKoostisainedToProductVariationConnection',
  edges?: Maybe<Array<Maybe<GraphCms_PaKoostisainedToProductVariationConnectionEdge>>>,
  nodes?: Maybe<Array<Maybe<GraphCms_ProductVariation>>>,
  pageInfo?: Maybe<GraphCms_WpPageInfo>,
};

export type GraphCms_PaKoostisainedToProductVariationConnectionEdge = {
   __typename?: 'GraphCMS_PaKoostisainedToProductVariationConnectionEdge',
  cursor?: Maybe<Scalars['String']>,
  node?: Maybe<GraphCms_ProductVariation>,
};

export type GraphCms_PaKoostisainedToProductVariationConnectionWhereArgs = {
  attribute?: Maybe<Scalars['String']>,
  attributeTerm?: Maybe<Scalars['String']>,
  category?: Maybe<Scalars['String']>,
  categoryId?: Maybe<Scalars['Int']>,
  categoryIdIn?: Maybe<Array<Maybe<Scalars['Int']>>>,
  categoryIdNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>,
  categoryIn?: Maybe<Array<Maybe<Scalars['String']>>>,
  categoryNotIn?: Maybe<Array<Maybe<Scalars['String']>>>,
  dateQuery?: Maybe<GraphCms_DateQueryInput>,
  exclude?: Maybe<Array<Maybe<Scalars['Int']>>>,
  featured?: Maybe<Scalars['Boolean']>,
  include?: Maybe<Array<Maybe<Scalars['Int']>>>,
  maxPrice?: Maybe<Scalars['Float']>,
  minPrice?: Maybe<Scalars['Float']>,
  onSale?: Maybe<Scalars['Boolean']>,
  orderby?: Maybe<Array<Maybe<GraphCms_ProductsOrderbyInput>>>,
  parent?: Maybe<Scalars['Int']>,
  parentIn?: Maybe<Array<Maybe<Scalars['Int']>>>,
  parentNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>,
  search?: Maybe<Scalars['String']>,
  shippingClassId?: Maybe<Scalars['Int']>,
  sku?: Maybe<Scalars['String']>,
  slug?: Maybe<Scalars['String']>,
  status?: Maybe<Scalars['String']>,
  stockStatus?: Maybe<Array<Maybe<GraphCms_StockStatusEnum>>>,
  tag?: Maybe<Scalars['String']>,
  tagId?: Maybe<Scalars['Int']>,
  tagIdIn?: Maybe<Array<Maybe<Scalars['Int']>>>,
  tagIdNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>,
  tagIn?: Maybe<Array<Maybe<Scalars['String']>>>,
  tagNotIn?: Maybe<Array<Maybe<Scalars['String']>>>,
  taxClass?: Maybe<GraphCms_TaxClassEnum>,
  taxonomyFilter?: Maybe<Array<Maybe<GraphCms_ProductTaxonomyFilterRelationInput>>>,
  type?: Maybe<GraphCms_ProductTypesEnum>,
  typeIn?: Maybe<Array<Maybe<GraphCms_ProductTypesEnum>>>,
  typeNotIn?: Maybe<Array<Maybe<GraphCms_ProductTypesEnum>>>,
  visibility?: Maybe<GraphCms_CatalogVisibilityEnum>,
};

export type GraphCms_PaLaadimisaeg = GraphCms_Node & {
   __typename?: 'GraphCMS_PaLaadimisaeg',
  count?: Maybe<Scalars['Int']>,
  description?: Maybe<Scalars['String']>,
  id: Scalars['ID'],
  isRestricted?: Maybe<Scalars['Boolean']>,
  link?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  paLaadimisaegId?: Maybe<Scalars['Int']>,
  products?: Maybe<GraphCms_PaLaadimisaegToProductConnection>,
  slug?: Maybe<Scalars['String']>,
  taxonomy?: Maybe<GraphCms_Taxonomy>,
  termGroupId?: Maybe<Scalars['Int']>,
  termTaxonomyId?: Maybe<Scalars['Int']>,
  variations?: Maybe<GraphCms_PaLaadimisaegToProductVariationConnection>,
};


export type GraphCms_PaLaadimisaegProductsArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  where?: Maybe<GraphCms_PaLaadimisaegToProductConnectionWhereArgs>
};


export type GraphCms_PaLaadimisaegVariationsArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  where?: Maybe<GraphCms_PaLaadimisaegToProductVariationConnectionWhereArgs>
};

export type GraphCms_PaLaadimisaegToProductConnection = {
   __typename?: 'GraphCMS_PaLaadimisaegToProductConnection',
  edges?: Maybe<Array<Maybe<GraphCms_PaLaadimisaegToProductConnectionEdge>>>,
  nodes?: Maybe<Array<Maybe<GraphCms_Product>>>,
  pageInfo?: Maybe<GraphCms_WpPageInfo>,
};

export type GraphCms_PaLaadimisaegToProductConnectionEdge = {
   __typename?: 'GraphCMS_PaLaadimisaegToProductConnectionEdge',
  cursor?: Maybe<Scalars['String']>,
  node?: Maybe<GraphCms_Product>,
};

export type GraphCms_PaLaadimisaegToProductConnectionWhereArgs = {
  attribute?: Maybe<Scalars['String']>,
  attributeTerm?: Maybe<Scalars['String']>,
  category?: Maybe<Scalars['String']>,
  categoryId?: Maybe<Scalars['Int']>,
  categoryIdIn?: Maybe<Array<Maybe<Scalars['Int']>>>,
  categoryIdNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>,
  categoryIn?: Maybe<Array<Maybe<Scalars['String']>>>,
  categoryNotIn?: Maybe<Array<Maybe<Scalars['String']>>>,
  dateQuery?: Maybe<GraphCms_DateQueryInput>,
  exclude?: Maybe<Array<Maybe<Scalars['Int']>>>,
  featured?: Maybe<Scalars['Boolean']>,
  include?: Maybe<Array<Maybe<Scalars['Int']>>>,
  maxPrice?: Maybe<Scalars['Float']>,
  minPrice?: Maybe<Scalars['Float']>,
  onSale?: Maybe<Scalars['Boolean']>,
  orderby?: Maybe<Array<Maybe<GraphCms_ProductsOrderbyInput>>>,
  parent?: Maybe<Scalars['Int']>,
  parentIn?: Maybe<Array<Maybe<Scalars['Int']>>>,
  parentNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>,
  search?: Maybe<Scalars['String']>,
  shippingClassId?: Maybe<Scalars['Int']>,
  sku?: Maybe<Scalars['String']>,
  slug?: Maybe<Scalars['String']>,
  status?: Maybe<Scalars['String']>,
  stockStatus?: Maybe<Array<Maybe<GraphCms_StockStatusEnum>>>,
  tag?: Maybe<Scalars['String']>,
  tagId?: Maybe<Scalars['Int']>,
  tagIdIn?: Maybe<Array<Maybe<Scalars['Int']>>>,
  tagIdNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>,
  tagIn?: Maybe<Array<Maybe<Scalars['String']>>>,
  tagNotIn?: Maybe<Array<Maybe<Scalars['String']>>>,
  taxClass?: Maybe<GraphCms_TaxClassEnum>,
  taxonomyFilter?: Maybe<Array<Maybe<GraphCms_ProductTaxonomyFilterRelationInput>>>,
  type?: Maybe<GraphCms_ProductTypesEnum>,
  typeIn?: Maybe<Array<Maybe<GraphCms_ProductTypesEnum>>>,
  typeNotIn?: Maybe<Array<Maybe<GraphCms_ProductTypesEnum>>>,
  visibility?: Maybe<GraphCms_CatalogVisibilityEnum>,
};

export type GraphCms_PaLaadimisaegToProductVariationConnection = {
   __typename?: 'GraphCMS_PaLaadimisaegToProductVariationConnection',
  edges?: Maybe<Array<Maybe<GraphCms_PaLaadimisaegToProductVariationConnectionEdge>>>,
  nodes?: Maybe<Array<Maybe<GraphCms_ProductVariation>>>,
  pageInfo?: Maybe<GraphCms_WpPageInfo>,
};

export type GraphCms_PaLaadimisaegToProductVariationConnectionEdge = {
   __typename?: 'GraphCMS_PaLaadimisaegToProductVariationConnectionEdge',
  cursor?: Maybe<Scalars['String']>,
  node?: Maybe<GraphCms_ProductVariation>,
};

export type GraphCms_PaLaadimisaegToProductVariationConnectionWhereArgs = {
  attribute?: Maybe<Scalars['String']>,
  attributeTerm?: Maybe<Scalars['String']>,
  category?: Maybe<Scalars['String']>,
  categoryId?: Maybe<Scalars['Int']>,
  categoryIdIn?: Maybe<Array<Maybe<Scalars['Int']>>>,
  categoryIdNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>,
  categoryIn?: Maybe<Array<Maybe<Scalars['String']>>>,
  categoryNotIn?: Maybe<Array<Maybe<Scalars['String']>>>,
  dateQuery?: Maybe<GraphCms_DateQueryInput>,
  exclude?: Maybe<Array<Maybe<Scalars['Int']>>>,
  featured?: Maybe<Scalars['Boolean']>,
  include?: Maybe<Array<Maybe<Scalars['Int']>>>,
  maxPrice?: Maybe<Scalars['Float']>,
  minPrice?: Maybe<Scalars['Float']>,
  onSale?: Maybe<Scalars['Boolean']>,
  orderby?: Maybe<Array<Maybe<GraphCms_ProductsOrderbyInput>>>,
  parent?: Maybe<Scalars['Int']>,
  parentIn?: Maybe<Array<Maybe<Scalars['Int']>>>,
  parentNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>,
  search?: Maybe<Scalars['String']>,
  shippingClassId?: Maybe<Scalars['Int']>,
  sku?: Maybe<Scalars['String']>,
  slug?: Maybe<Scalars['String']>,
  status?: Maybe<Scalars['String']>,
  stockStatus?: Maybe<Array<Maybe<GraphCms_StockStatusEnum>>>,
  tag?: Maybe<Scalars['String']>,
  tagId?: Maybe<Scalars['Int']>,
  tagIdIn?: Maybe<Array<Maybe<Scalars['Int']>>>,
  tagIdNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>,
  tagIn?: Maybe<Array<Maybe<Scalars['String']>>>,
  tagNotIn?: Maybe<Array<Maybe<Scalars['String']>>>,
  taxClass?: Maybe<GraphCms_TaxClassEnum>,
  taxonomyFilter?: Maybe<Array<Maybe<GraphCms_ProductTaxonomyFilterRelationInput>>>,
  type?: Maybe<GraphCms_ProductTypesEnum>,
  typeIn?: Maybe<Array<Maybe<GraphCms_ProductTypesEnum>>>,
  typeNotIn?: Maybe<Array<Maybe<GraphCms_ProductTypesEnum>>>,
  visibility?: Maybe<GraphCms_CatalogVisibilityEnum>,
};

export type GraphCms_PaMaterjal = GraphCms_Node & {
   __typename?: 'GraphCMS_PaMaterjal',
  count?: Maybe<Scalars['Int']>,
  description?: Maybe<Scalars['String']>,
  id: Scalars['ID'],
  isRestricted?: Maybe<Scalars['Boolean']>,
  link?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  paMaterjalId?: Maybe<Scalars['Int']>,
  products?: Maybe<GraphCms_PaMaterjalToProductConnection>,
  slug?: Maybe<Scalars['String']>,
  taxonomy?: Maybe<GraphCms_Taxonomy>,
  termGroupId?: Maybe<Scalars['Int']>,
  termTaxonomyId?: Maybe<Scalars['Int']>,
  variations?: Maybe<GraphCms_PaMaterjalToProductVariationConnection>,
};


export type GraphCms_PaMaterjalProductsArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  where?: Maybe<GraphCms_PaMaterjalToProductConnectionWhereArgs>
};


export type GraphCms_PaMaterjalVariationsArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  where?: Maybe<GraphCms_PaMaterjalToProductVariationConnectionWhereArgs>
};

export type GraphCms_PaMaterjalToProductConnection = {
   __typename?: 'GraphCMS_PaMaterjalToProductConnection',
  edges?: Maybe<Array<Maybe<GraphCms_PaMaterjalToProductConnectionEdge>>>,
  nodes?: Maybe<Array<Maybe<GraphCms_Product>>>,
  pageInfo?: Maybe<GraphCms_WpPageInfo>,
};

export type GraphCms_PaMaterjalToProductConnectionEdge = {
   __typename?: 'GraphCMS_PaMaterjalToProductConnectionEdge',
  cursor?: Maybe<Scalars['String']>,
  node?: Maybe<GraphCms_Product>,
};

export type GraphCms_PaMaterjalToProductConnectionWhereArgs = {
  attribute?: Maybe<Scalars['String']>,
  attributeTerm?: Maybe<Scalars['String']>,
  category?: Maybe<Scalars['String']>,
  categoryId?: Maybe<Scalars['Int']>,
  categoryIdIn?: Maybe<Array<Maybe<Scalars['Int']>>>,
  categoryIdNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>,
  categoryIn?: Maybe<Array<Maybe<Scalars['String']>>>,
  categoryNotIn?: Maybe<Array<Maybe<Scalars['String']>>>,
  dateQuery?: Maybe<GraphCms_DateQueryInput>,
  exclude?: Maybe<Array<Maybe<Scalars['Int']>>>,
  featured?: Maybe<Scalars['Boolean']>,
  include?: Maybe<Array<Maybe<Scalars['Int']>>>,
  maxPrice?: Maybe<Scalars['Float']>,
  minPrice?: Maybe<Scalars['Float']>,
  onSale?: Maybe<Scalars['Boolean']>,
  orderby?: Maybe<Array<Maybe<GraphCms_ProductsOrderbyInput>>>,
  parent?: Maybe<Scalars['Int']>,
  parentIn?: Maybe<Array<Maybe<Scalars['Int']>>>,
  parentNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>,
  search?: Maybe<Scalars['String']>,
  shippingClassId?: Maybe<Scalars['Int']>,
  sku?: Maybe<Scalars['String']>,
  slug?: Maybe<Scalars['String']>,
  status?: Maybe<Scalars['String']>,
  stockStatus?: Maybe<Array<Maybe<GraphCms_StockStatusEnum>>>,
  tag?: Maybe<Scalars['String']>,
  tagId?: Maybe<Scalars['Int']>,
  tagIdIn?: Maybe<Array<Maybe<Scalars['Int']>>>,
  tagIdNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>,
  tagIn?: Maybe<Array<Maybe<Scalars['String']>>>,
  tagNotIn?: Maybe<Array<Maybe<Scalars['String']>>>,
  taxClass?: Maybe<GraphCms_TaxClassEnum>,
  taxonomyFilter?: Maybe<Array<Maybe<GraphCms_ProductTaxonomyFilterRelationInput>>>,
  type?: Maybe<GraphCms_ProductTypesEnum>,
  typeIn?: Maybe<Array<Maybe<GraphCms_ProductTypesEnum>>>,
  typeNotIn?: Maybe<Array<Maybe<GraphCms_ProductTypesEnum>>>,
  visibility?: Maybe<GraphCms_CatalogVisibilityEnum>,
};

export type GraphCms_PaMaterjalToProductVariationConnection = {
   __typename?: 'GraphCMS_PaMaterjalToProductVariationConnection',
  edges?: Maybe<Array<Maybe<GraphCms_PaMaterjalToProductVariationConnectionEdge>>>,
  nodes?: Maybe<Array<Maybe<GraphCms_ProductVariation>>>,
  pageInfo?: Maybe<GraphCms_WpPageInfo>,
};

export type GraphCms_PaMaterjalToProductVariationConnectionEdge = {
   __typename?: 'GraphCMS_PaMaterjalToProductVariationConnectionEdge',
  cursor?: Maybe<Scalars['String']>,
  node?: Maybe<GraphCms_ProductVariation>,
};

export type GraphCms_PaMaterjalToProductVariationConnectionWhereArgs = {
  attribute?: Maybe<Scalars['String']>,
  attributeTerm?: Maybe<Scalars['String']>,
  category?: Maybe<Scalars['String']>,
  categoryId?: Maybe<Scalars['Int']>,
  categoryIdIn?: Maybe<Array<Maybe<Scalars['Int']>>>,
  categoryIdNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>,
  categoryIn?: Maybe<Array<Maybe<Scalars['String']>>>,
  categoryNotIn?: Maybe<Array<Maybe<Scalars['String']>>>,
  dateQuery?: Maybe<GraphCms_DateQueryInput>,
  exclude?: Maybe<Array<Maybe<Scalars['Int']>>>,
  featured?: Maybe<Scalars['Boolean']>,
  include?: Maybe<Array<Maybe<Scalars['Int']>>>,
  maxPrice?: Maybe<Scalars['Float']>,
  minPrice?: Maybe<Scalars['Float']>,
  onSale?: Maybe<Scalars['Boolean']>,
  orderby?: Maybe<Array<Maybe<GraphCms_ProductsOrderbyInput>>>,
  parent?: Maybe<Scalars['Int']>,
  parentIn?: Maybe<Array<Maybe<Scalars['Int']>>>,
  parentNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>,
  search?: Maybe<Scalars['String']>,
  shippingClassId?: Maybe<Scalars['Int']>,
  sku?: Maybe<Scalars['String']>,
  slug?: Maybe<Scalars['String']>,
  status?: Maybe<Scalars['String']>,
  stockStatus?: Maybe<Array<Maybe<GraphCms_StockStatusEnum>>>,
  tag?: Maybe<Scalars['String']>,
  tagId?: Maybe<Scalars['Int']>,
  tagIdIn?: Maybe<Array<Maybe<Scalars['Int']>>>,
  tagIdNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>,
  tagIn?: Maybe<Array<Maybe<Scalars['String']>>>,
  tagNotIn?: Maybe<Array<Maybe<Scalars['String']>>>,
  taxClass?: Maybe<GraphCms_TaxClassEnum>,
  taxonomyFilter?: Maybe<Array<Maybe<GraphCms_ProductTaxonomyFilterRelationInput>>>,
  type?: Maybe<GraphCms_ProductTypesEnum>,
  typeIn?: Maybe<Array<Maybe<GraphCms_ProductTypesEnum>>>,
  typeNotIn?: Maybe<Array<Maybe<GraphCms_ProductTypesEnum>>>,
  visibility?: Maybe<GraphCms_CatalogVisibilityEnum>,
};

export type GraphCms_PaMuratasa = GraphCms_Node & {
   __typename?: 'GraphCMS_PaMuratasa',
  count?: Maybe<Scalars['Int']>,
  description?: Maybe<Scalars['String']>,
  id: Scalars['ID'],
  isRestricted?: Maybe<Scalars['Boolean']>,
  link?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  paMuratasaId?: Maybe<Scalars['Int']>,
  products?: Maybe<GraphCms_PaMuratasaToProductConnection>,
  slug?: Maybe<Scalars['String']>,
  taxonomy?: Maybe<GraphCms_Taxonomy>,
  termGroupId?: Maybe<Scalars['Int']>,
  termTaxonomyId?: Maybe<Scalars['Int']>,
  variations?: Maybe<GraphCms_PaMuratasaToProductVariationConnection>,
};


export type GraphCms_PaMuratasaProductsArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  where?: Maybe<GraphCms_PaMuratasaToProductConnectionWhereArgs>
};


export type GraphCms_PaMuratasaVariationsArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  where?: Maybe<GraphCms_PaMuratasaToProductVariationConnectionWhereArgs>
};

export type GraphCms_PaMuratasaToProductConnection = {
   __typename?: 'GraphCMS_PaMuratasaToProductConnection',
  edges?: Maybe<Array<Maybe<GraphCms_PaMuratasaToProductConnectionEdge>>>,
  nodes?: Maybe<Array<Maybe<GraphCms_Product>>>,
  pageInfo?: Maybe<GraphCms_WpPageInfo>,
};

export type GraphCms_PaMuratasaToProductConnectionEdge = {
   __typename?: 'GraphCMS_PaMuratasaToProductConnectionEdge',
  cursor?: Maybe<Scalars['String']>,
  node?: Maybe<GraphCms_Product>,
};

export type GraphCms_PaMuratasaToProductConnectionWhereArgs = {
  attribute?: Maybe<Scalars['String']>,
  attributeTerm?: Maybe<Scalars['String']>,
  category?: Maybe<Scalars['String']>,
  categoryId?: Maybe<Scalars['Int']>,
  categoryIdIn?: Maybe<Array<Maybe<Scalars['Int']>>>,
  categoryIdNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>,
  categoryIn?: Maybe<Array<Maybe<Scalars['String']>>>,
  categoryNotIn?: Maybe<Array<Maybe<Scalars['String']>>>,
  dateQuery?: Maybe<GraphCms_DateQueryInput>,
  exclude?: Maybe<Array<Maybe<Scalars['Int']>>>,
  featured?: Maybe<Scalars['Boolean']>,
  include?: Maybe<Array<Maybe<Scalars['Int']>>>,
  maxPrice?: Maybe<Scalars['Float']>,
  minPrice?: Maybe<Scalars['Float']>,
  onSale?: Maybe<Scalars['Boolean']>,
  orderby?: Maybe<Array<Maybe<GraphCms_ProductsOrderbyInput>>>,
  parent?: Maybe<Scalars['Int']>,
  parentIn?: Maybe<Array<Maybe<Scalars['Int']>>>,
  parentNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>,
  search?: Maybe<Scalars['String']>,
  shippingClassId?: Maybe<Scalars['Int']>,
  sku?: Maybe<Scalars['String']>,
  slug?: Maybe<Scalars['String']>,
  status?: Maybe<Scalars['String']>,
  stockStatus?: Maybe<Array<Maybe<GraphCms_StockStatusEnum>>>,
  tag?: Maybe<Scalars['String']>,
  tagId?: Maybe<Scalars['Int']>,
  tagIdIn?: Maybe<Array<Maybe<Scalars['Int']>>>,
  tagIdNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>,
  tagIn?: Maybe<Array<Maybe<Scalars['String']>>>,
  tagNotIn?: Maybe<Array<Maybe<Scalars['String']>>>,
  taxClass?: Maybe<GraphCms_TaxClassEnum>,
  taxonomyFilter?: Maybe<Array<Maybe<GraphCms_ProductTaxonomyFilterRelationInput>>>,
  type?: Maybe<GraphCms_ProductTypesEnum>,
  typeIn?: Maybe<Array<Maybe<GraphCms_ProductTypesEnum>>>,
  typeNotIn?: Maybe<Array<Maybe<GraphCms_ProductTypesEnum>>>,
  visibility?: Maybe<GraphCms_CatalogVisibilityEnum>,
};

export type GraphCms_PaMuratasaToProductVariationConnection = {
   __typename?: 'GraphCMS_PaMuratasaToProductVariationConnection',
  edges?: Maybe<Array<Maybe<GraphCms_PaMuratasaToProductVariationConnectionEdge>>>,
  nodes?: Maybe<Array<Maybe<GraphCms_ProductVariation>>>,
  pageInfo?: Maybe<GraphCms_WpPageInfo>,
};

export type GraphCms_PaMuratasaToProductVariationConnectionEdge = {
   __typename?: 'GraphCMS_PaMuratasaToProductVariationConnectionEdge',
  cursor?: Maybe<Scalars['String']>,
  node?: Maybe<GraphCms_ProductVariation>,
};

export type GraphCms_PaMuratasaToProductVariationConnectionWhereArgs = {
  attribute?: Maybe<Scalars['String']>,
  attributeTerm?: Maybe<Scalars['String']>,
  category?: Maybe<Scalars['String']>,
  categoryId?: Maybe<Scalars['Int']>,
  categoryIdIn?: Maybe<Array<Maybe<Scalars['Int']>>>,
  categoryIdNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>,
  categoryIn?: Maybe<Array<Maybe<Scalars['String']>>>,
  categoryNotIn?: Maybe<Array<Maybe<Scalars['String']>>>,
  dateQuery?: Maybe<GraphCms_DateQueryInput>,
  exclude?: Maybe<Array<Maybe<Scalars['Int']>>>,
  featured?: Maybe<Scalars['Boolean']>,
  include?: Maybe<Array<Maybe<Scalars['Int']>>>,
  maxPrice?: Maybe<Scalars['Float']>,
  minPrice?: Maybe<Scalars['Float']>,
  onSale?: Maybe<Scalars['Boolean']>,
  orderby?: Maybe<Array<Maybe<GraphCms_ProductsOrderbyInput>>>,
  parent?: Maybe<Scalars['Int']>,
  parentIn?: Maybe<Array<Maybe<Scalars['Int']>>>,
  parentNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>,
  search?: Maybe<Scalars['String']>,
  shippingClassId?: Maybe<Scalars['Int']>,
  sku?: Maybe<Scalars['String']>,
  slug?: Maybe<Scalars['String']>,
  status?: Maybe<Scalars['String']>,
  stockStatus?: Maybe<Array<Maybe<GraphCms_StockStatusEnum>>>,
  tag?: Maybe<Scalars['String']>,
  tagId?: Maybe<Scalars['Int']>,
  tagIdIn?: Maybe<Array<Maybe<Scalars['Int']>>>,
  tagIdNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>,
  tagIn?: Maybe<Array<Maybe<Scalars['String']>>>,
  tagNotIn?: Maybe<Array<Maybe<Scalars['String']>>>,
  taxClass?: Maybe<GraphCms_TaxClassEnum>,
  taxonomyFilter?: Maybe<Array<Maybe<GraphCms_ProductTaxonomyFilterRelationInput>>>,
  type?: Maybe<GraphCms_ProductTypesEnum>,
  typeIn?: Maybe<Array<Maybe<GraphCms_ProductTypesEnum>>>,
  typeNotIn?: Maybe<Array<Maybe<GraphCms_ProductTypesEnum>>>,
  visibility?: Maybe<GraphCms_CatalogVisibilityEnum>,
};

export type GraphCms_PaOhutus = GraphCms_Node & {
   __typename?: 'GraphCMS_PaOhutus',
  count?: Maybe<Scalars['Int']>,
  description?: Maybe<Scalars['String']>,
  id: Scalars['ID'],
  isRestricted?: Maybe<Scalars['Boolean']>,
  link?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  paOhutusId?: Maybe<Scalars['Int']>,
  products?: Maybe<GraphCms_PaOhutusToProductConnection>,
  slug?: Maybe<Scalars['String']>,
  taxonomy?: Maybe<GraphCms_Taxonomy>,
  termGroupId?: Maybe<Scalars['Int']>,
  termTaxonomyId?: Maybe<Scalars['Int']>,
  variations?: Maybe<GraphCms_PaOhutusToProductVariationConnection>,
};


export type GraphCms_PaOhutusProductsArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  where?: Maybe<GraphCms_PaOhutusToProductConnectionWhereArgs>
};


export type GraphCms_PaOhutusVariationsArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  where?: Maybe<GraphCms_PaOhutusToProductVariationConnectionWhereArgs>
};

export type GraphCms_PaOhutusToProductConnection = {
   __typename?: 'GraphCMS_PaOhutusToProductConnection',
  edges?: Maybe<Array<Maybe<GraphCms_PaOhutusToProductConnectionEdge>>>,
  nodes?: Maybe<Array<Maybe<GraphCms_Product>>>,
  pageInfo?: Maybe<GraphCms_WpPageInfo>,
};

export type GraphCms_PaOhutusToProductConnectionEdge = {
   __typename?: 'GraphCMS_PaOhutusToProductConnectionEdge',
  cursor?: Maybe<Scalars['String']>,
  node?: Maybe<GraphCms_Product>,
};

export type GraphCms_PaOhutusToProductConnectionWhereArgs = {
  attribute?: Maybe<Scalars['String']>,
  attributeTerm?: Maybe<Scalars['String']>,
  category?: Maybe<Scalars['String']>,
  categoryId?: Maybe<Scalars['Int']>,
  categoryIdIn?: Maybe<Array<Maybe<Scalars['Int']>>>,
  categoryIdNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>,
  categoryIn?: Maybe<Array<Maybe<Scalars['String']>>>,
  categoryNotIn?: Maybe<Array<Maybe<Scalars['String']>>>,
  dateQuery?: Maybe<GraphCms_DateQueryInput>,
  exclude?: Maybe<Array<Maybe<Scalars['Int']>>>,
  featured?: Maybe<Scalars['Boolean']>,
  include?: Maybe<Array<Maybe<Scalars['Int']>>>,
  maxPrice?: Maybe<Scalars['Float']>,
  minPrice?: Maybe<Scalars['Float']>,
  onSale?: Maybe<Scalars['Boolean']>,
  orderby?: Maybe<Array<Maybe<GraphCms_ProductsOrderbyInput>>>,
  parent?: Maybe<Scalars['Int']>,
  parentIn?: Maybe<Array<Maybe<Scalars['Int']>>>,
  parentNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>,
  search?: Maybe<Scalars['String']>,
  shippingClassId?: Maybe<Scalars['Int']>,
  sku?: Maybe<Scalars['String']>,
  slug?: Maybe<Scalars['String']>,
  status?: Maybe<Scalars['String']>,
  stockStatus?: Maybe<Array<Maybe<GraphCms_StockStatusEnum>>>,
  tag?: Maybe<Scalars['String']>,
  tagId?: Maybe<Scalars['Int']>,
  tagIdIn?: Maybe<Array<Maybe<Scalars['Int']>>>,
  tagIdNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>,
  tagIn?: Maybe<Array<Maybe<Scalars['String']>>>,
  tagNotIn?: Maybe<Array<Maybe<Scalars['String']>>>,
  taxClass?: Maybe<GraphCms_TaxClassEnum>,
  taxonomyFilter?: Maybe<Array<Maybe<GraphCms_ProductTaxonomyFilterRelationInput>>>,
  type?: Maybe<GraphCms_ProductTypesEnum>,
  typeIn?: Maybe<Array<Maybe<GraphCms_ProductTypesEnum>>>,
  typeNotIn?: Maybe<Array<Maybe<GraphCms_ProductTypesEnum>>>,
  visibility?: Maybe<GraphCms_CatalogVisibilityEnum>,
};

export type GraphCms_PaOhutusToProductVariationConnection = {
   __typename?: 'GraphCMS_PaOhutusToProductVariationConnection',
  edges?: Maybe<Array<Maybe<GraphCms_PaOhutusToProductVariationConnectionEdge>>>,
  nodes?: Maybe<Array<Maybe<GraphCms_ProductVariation>>>,
  pageInfo?: Maybe<GraphCms_WpPageInfo>,
};

export type GraphCms_PaOhutusToProductVariationConnectionEdge = {
   __typename?: 'GraphCMS_PaOhutusToProductVariationConnectionEdge',
  cursor?: Maybe<Scalars['String']>,
  node?: Maybe<GraphCms_ProductVariation>,
};

export type GraphCms_PaOhutusToProductVariationConnectionWhereArgs = {
  attribute?: Maybe<Scalars['String']>,
  attributeTerm?: Maybe<Scalars['String']>,
  category?: Maybe<Scalars['String']>,
  categoryId?: Maybe<Scalars['Int']>,
  categoryIdIn?: Maybe<Array<Maybe<Scalars['Int']>>>,
  categoryIdNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>,
  categoryIn?: Maybe<Array<Maybe<Scalars['String']>>>,
  categoryNotIn?: Maybe<Array<Maybe<Scalars['String']>>>,
  dateQuery?: Maybe<GraphCms_DateQueryInput>,
  exclude?: Maybe<Array<Maybe<Scalars['Int']>>>,
  featured?: Maybe<Scalars['Boolean']>,
  include?: Maybe<Array<Maybe<Scalars['Int']>>>,
  maxPrice?: Maybe<Scalars['Float']>,
  minPrice?: Maybe<Scalars['Float']>,
  onSale?: Maybe<Scalars['Boolean']>,
  orderby?: Maybe<Array<Maybe<GraphCms_ProductsOrderbyInput>>>,
  parent?: Maybe<Scalars['Int']>,
  parentIn?: Maybe<Array<Maybe<Scalars['Int']>>>,
  parentNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>,
  search?: Maybe<Scalars['String']>,
  shippingClassId?: Maybe<Scalars['Int']>,
  sku?: Maybe<Scalars['String']>,
  slug?: Maybe<Scalars['String']>,
  status?: Maybe<Scalars['String']>,
  stockStatus?: Maybe<Array<Maybe<GraphCms_StockStatusEnum>>>,
  tag?: Maybe<Scalars['String']>,
  tagId?: Maybe<Scalars['Int']>,
  tagIdIn?: Maybe<Array<Maybe<Scalars['Int']>>>,
  tagIdNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>,
  tagIn?: Maybe<Array<Maybe<Scalars['String']>>>,
  tagNotIn?: Maybe<Array<Maybe<Scalars['String']>>>,
  taxClass?: Maybe<GraphCms_TaxClassEnum>,
  taxonomyFilter?: Maybe<Array<Maybe<GraphCms_ProductTaxonomyFilterRelationInput>>>,
  type?: Maybe<GraphCms_ProductTypesEnum>,
  typeIn?: Maybe<Array<Maybe<GraphCms_ProductTypesEnum>>>,
  typeNotIn?: Maybe<Array<Maybe<GraphCms_ProductTypesEnum>>>,
  visibility?: Maybe<GraphCms_CatalogVisibilityEnum>,
};

export type GraphCms_PaPatareid = GraphCms_Node & {
   __typename?: 'GraphCMS_PaPatareid',
  count?: Maybe<Scalars['Int']>,
  description?: Maybe<Scalars['String']>,
  id: Scalars['ID'],
  isRestricted?: Maybe<Scalars['Boolean']>,
  link?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  paPatareidId?: Maybe<Scalars['Int']>,
  products?: Maybe<GraphCms_PaPatareidToProductConnection>,
  slug?: Maybe<Scalars['String']>,
  taxonomy?: Maybe<GraphCms_Taxonomy>,
  termGroupId?: Maybe<Scalars['Int']>,
  termTaxonomyId?: Maybe<Scalars['Int']>,
  variations?: Maybe<GraphCms_PaPatareidToProductVariationConnection>,
};


export type GraphCms_PaPatareidProductsArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  where?: Maybe<GraphCms_PaPatareidToProductConnectionWhereArgs>
};


export type GraphCms_PaPatareidVariationsArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  where?: Maybe<GraphCms_PaPatareidToProductVariationConnectionWhereArgs>
};

export type GraphCms_PaPatareidToProductConnection = {
   __typename?: 'GraphCMS_PaPatareidToProductConnection',
  edges?: Maybe<Array<Maybe<GraphCms_PaPatareidToProductConnectionEdge>>>,
  nodes?: Maybe<Array<Maybe<GraphCms_Product>>>,
  pageInfo?: Maybe<GraphCms_WpPageInfo>,
};

export type GraphCms_PaPatareidToProductConnectionEdge = {
   __typename?: 'GraphCMS_PaPatareidToProductConnectionEdge',
  cursor?: Maybe<Scalars['String']>,
  node?: Maybe<GraphCms_Product>,
};

export type GraphCms_PaPatareidToProductConnectionWhereArgs = {
  attribute?: Maybe<Scalars['String']>,
  attributeTerm?: Maybe<Scalars['String']>,
  category?: Maybe<Scalars['String']>,
  categoryId?: Maybe<Scalars['Int']>,
  categoryIdIn?: Maybe<Array<Maybe<Scalars['Int']>>>,
  categoryIdNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>,
  categoryIn?: Maybe<Array<Maybe<Scalars['String']>>>,
  categoryNotIn?: Maybe<Array<Maybe<Scalars['String']>>>,
  dateQuery?: Maybe<GraphCms_DateQueryInput>,
  exclude?: Maybe<Array<Maybe<Scalars['Int']>>>,
  featured?: Maybe<Scalars['Boolean']>,
  include?: Maybe<Array<Maybe<Scalars['Int']>>>,
  maxPrice?: Maybe<Scalars['Float']>,
  minPrice?: Maybe<Scalars['Float']>,
  onSale?: Maybe<Scalars['Boolean']>,
  orderby?: Maybe<Array<Maybe<GraphCms_ProductsOrderbyInput>>>,
  parent?: Maybe<Scalars['Int']>,
  parentIn?: Maybe<Array<Maybe<Scalars['Int']>>>,
  parentNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>,
  search?: Maybe<Scalars['String']>,
  shippingClassId?: Maybe<Scalars['Int']>,
  sku?: Maybe<Scalars['String']>,
  slug?: Maybe<Scalars['String']>,
  status?: Maybe<Scalars['String']>,
  stockStatus?: Maybe<Array<Maybe<GraphCms_StockStatusEnum>>>,
  tag?: Maybe<Scalars['String']>,
  tagId?: Maybe<Scalars['Int']>,
  tagIdIn?: Maybe<Array<Maybe<Scalars['Int']>>>,
  tagIdNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>,
  tagIn?: Maybe<Array<Maybe<Scalars['String']>>>,
  tagNotIn?: Maybe<Array<Maybe<Scalars['String']>>>,
  taxClass?: Maybe<GraphCms_TaxClassEnum>,
  taxonomyFilter?: Maybe<Array<Maybe<GraphCms_ProductTaxonomyFilterRelationInput>>>,
  type?: Maybe<GraphCms_ProductTypesEnum>,
  typeIn?: Maybe<Array<Maybe<GraphCms_ProductTypesEnum>>>,
  typeNotIn?: Maybe<Array<Maybe<GraphCms_ProductTypesEnum>>>,
  visibility?: Maybe<GraphCms_CatalogVisibilityEnum>,
};

export type GraphCms_PaPatareidToProductVariationConnection = {
   __typename?: 'GraphCMS_PaPatareidToProductVariationConnection',
  edges?: Maybe<Array<Maybe<GraphCms_PaPatareidToProductVariationConnectionEdge>>>,
  nodes?: Maybe<Array<Maybe<GraphCms_ProductVariation>>>,
  pageInfo?: Maybe<GraphCms_WpPageInfo>,
};

export type GraphCms_PaPatareidToProductVariationConnectionEdge = {
   __typename?: 'GraphCMS_PaPatareidToProductVariationConnectionEdge',
  cursor?: Maybe<Scalars['String']>,
  node?: Maybe<GraphCms_ProductVariation>,
};

export type GraphCms_PaPatareidToProductVariationConnectionWhereArgs = {
  attribute?: Maybe<Scalars['String']>,
  attributeTerm?: Maybe<Scalars['String']>,
  category?: Maybe<Scalars['String']>,
  categoryId?: Maybe<Scalars['Int']>,
  categoryIdIn?: Maybe<Array<Maybe<Scalars['Int']>>>,
  categoryIdNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>,
  categoryIn?: Maybe<Array<Maybe<Scalars['String']>>>,
  categoryNotIn?: Maybe<Array<Maybe<Scalars['String']>>>,
  dateQuery?: Maybe<GraphCms_DateQueryInput>,
  exclude?: Maybe<Array<Maybe<Scalars['Int']>>>,
  featured?: Maybe<Scalars['Boolean']>,
  include?: Maybe<Array<Maybe<Scalars['Int']>>>,
  maxPrice?: Maybe<Scalars['Float']>,
  minPrice?: Maybe<Scalars['Float']>,
  onSale?: Maybe<Scalars['Boolean']>,
  orderby?: Maybe<Array<Maybe<GraphCms_ProductsOrderbyInput>>>,
  parent?: Maybe<Scalars['Int']>,
  parentIn?: Maybe<Array<Maybe<Scalars['Int']>>>,
  parentNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>,
  search?: Maybe<Scalars['String']>,
  shippingClassId?: Maybe<Scalars['Int']>,
  sku?: Maybe<Scalars['String']>,
  slug?: Maybe<Scalars['String']>,
  status?: Maybe<Scalars['String']>,
  stockStatus?: Maybe<Array<Maybe<GraphCms_StockStatusEnum>>>,
  tag?: Maybe<Scalars['String']>,
  tagId?: Maybe<Scalars['Int']>,
  tagIdIn?: Maybe<Array<Maybe<Scalars['Int']>>>,
  tagIdNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>,
  tagIn?: Maybe<Array<Maybe<Scalars['String']>>>,
  tagNotIn?: Maybe<Array<Maybe<Scalars['String']>>>,
  taxClass?: Maybe<GraphCms_TaxClassEnum>,
  taxonomyFilter?: Maybe<Array<Maybe<GraphCms_ProductTaxonomyFilterRelationInput>>>,
  type?: Maybe<GraphCms_ProductTypesEnum>,
  typeIn?: Maybe<Array<Maybe<GraphCms_ProductTypesEnum>>>,
  typeNotIn?: Maybe<Array<Maybe<GraphCms_ProductTypesEnum>>>,
  visibility?: Maybe<GraphCms_CatalogVisibilityEnum>,
};

export type GraphCms_PaSuurus = GraphCms_Node & {
   __typename?: 'GraphCMS_PaSuurus',
  count?: Maybe<Scalars['Int']>,
  description?: Maybe<Scalars['String']>,
  id: Scalars['ID'],
  isRestricted?: Maybe<Scalars['Boolean']>,
  link?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  paSuurusId?: Maybe<Scalars['Int']>,
  products?: Maybe<GraphCms_PaSuurusToProductConnection>,
  slug?: Maybe<Scalars['String']>,
  taxonomy?: Maybe<GraphCms_Taxonomy>,
  termGroupId?: Maybe<Scalars['Int']>,
  termTaxonomyId?: Maybe<Scalars['Int']>,
  variations?: Maybe<GraphCms_PaSuurusToProductVariationConnection>,
};


export type GraphCms_PaSuurusProductsArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  where?: Maybe<GraphCms_PaSuurusToProductConnectionWhereArgs>
};


export type GraphCms_PaSuurusVariationsArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  where?: Maybe<GraphCms_PaSuurusToProductVariationConnectionWhereArgs>
};

export type GraphCms_PaSuurusToProductConnection = {
   __typename?: 'GraphCMS_PaSuurusToProductConnection',
  edges?: Maybe<Array<Maybe<GraphCms_PaSuurusToProductConnectionEdge>>>,
  nodes?: Maybe<Array<Maybe<GraphCms_Product>>>,
  pageInfo?: Maybe<GraphCms_WpPageInfo>,
};

export type GraphCms_PaSuurusToProductConnectionEdge = {
   __typename?: 'GraphCMS_PaSuurusToProductConnectionEdge',
  cursor?: Maybe<Scalars['String']>,
  node?: Maybe<GraphCms_Product>,
};

export type GraphCms_PaSuurusToProductConnectionWhereArgs = {
  attribute?: Maybe<Scalars['String']>,
  attributeTerm?: Maybe<Scalars['String']>,
  category?: Maybe<Scalars['String']>,
  categoryId?: Maybe<Scalars['Int']>,
  categoryIdIn?: Maybe<Array<Maybe<Scalars['Int']>>>,
  categoryIdNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>,
  categoryIn?: Maybe<Array<Maybe<Scalars['String']>>>,
  categoryNotIn?: Maybe<Array<Maybe<Scalars['String']>>>,
  dateQuery?: Maybe<GraphCms_DateQueryInput>,
  exclude?: Maybe<Array<Maybe<Scalars['Int']>>>,
  featured?: Maybe<Scalars['Boolean']>,
  include?: Maybe<Array<Maybe<Scalars['Int']>>>,
  maxPrice?: Maybe<Scalars['Float']>,
  minPrice?: Maybe<Scalars['Float']>,
  onSale?: Maybe<Scalars['Boolean']>,
  orderby?: Maybe<Array<Maybe<GraphCms_ProductsOrderbyInput>>>,
  parent?: Maybe<Scalars['Int']>,
  parentIn?: Maybe<Array<Maybe<Scalars['Int']>>>,
  parentNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>,
  search?: Maybe<Scalars['String']>,
  shippingClassId?: Maybe<Scalars['Int']>,
  sku?: Maybe<Scalars['String']>,
  slug?: Maybe<Scalars['String']>,
  status?: Maybe<Scalars['String']>,
  stockStatus?: Maybe<Array<Maybe<GraphCms_StockStatusEnum>>>,
  tag?: Maybe<Scalars['String']>,
  tagId?: Maybe<Scalars['Int']>,
  tagIdIn?: Maybe<Array<Maybe<Scalars['Int']>>>,
  tagIdNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>,
  tagIn?: Maybe<Array<Maybe<Scalars['String']>>>,
  tagNotIn?: Maybe<Array<Maybe<Scalars['String']>>>,
  taxClass?: Maybe<GraphCms_TaxClassEnum>,
  taxonomyFilter?: Maybe<Array<Maybe<GraphCms_ProductTaxonomyFilterRelationInput>>>,
  type?: Maybe<GraphCms_ProductTypesEnum>,
  typeIn?: Maybe<Array<Maybe<GraphCms_ProductTypesEnum>>>,
  typeNotIn?: Maybe<Array<Maybe<GraphCms_ProductTypesEnum>>>,
  visibility?: Maybe<GraphCms_CatalogVisibilityEnum>,
};

export type GraphCms_PaSuurusToProductVariationConnection = {
   __typename?: 'GraphCMS_PaSuurusToProductVariationConnection',
  edges?: Maybe<Array<Maybe<GraphCms_PaSuurusToProductVariationConnectionEdge>>>,
  nodes?: Maybe<Array<Maybe<GraphCms_ProductVariation>>>,
  pageInfo?: Maybe<GraphCms_WpPageInfo>,
};

export type GraphCms_PaSuurusToProductVariationConnectionEdge = {
   __typename?: 'GraphCMS_PaSuurusToProductVariationConnectionEdge',
  cursor?: Maybe<Scalars['String']>,
  node?: Maybe<GraphCms_ProductVariation>,
};

export type GraphCms_PaSuurusToProductVariationConnectionWhereArgs = {
  attribute?: Maybe<Scalars['String']>,
  attributeTerm?: Maybe<Scalars['String']>,
  category?: Maybe<Scalars['String']>,
  categoryId?: Maybe<Scalars['Int']>,
  categoryIdIn?: Maybe<Array<Maybe<Scalars['Int']>>>,
  categoryIdNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>,
  categoryIn?: Maybe<Array<Maybe<Scalars['String']>>>,
  categoryNotIn?: Maybe<Array<Maybe<Scalars['String']>>>,
  dateQuery?: Maybe<GraphCms_DateQueryInput>,
  exclude?: Maybe<Array<Maybe<Scalars['Int']>>>,
  featured?: Maybe<Scalars['Boolean']>,
  include?: Maybe<Array<Maybe<Scalars['Int']>>>,
  maxPrice?: Maybe<Scalars['Float']>,
  minPrice?: Maybe<Scalars['Float']>,
  onSale?: Maybe<Scalars['Boolean']>,
  orderby?: Maybe<Array<Maybe<GraphCms_ProductsOrderbyInput>>>,
  parent?: Maybe<Scalars['Int']>,
  parentIn?: Maybe<Array<Maybe<Scalars['Int']>>>,
  parentNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>,
  search?: Maybe<Scalars['String']>,
  shippingClassId?: Maybe<Scalars['Int']>,
  sku?: Maybe<Scalars['String']>,
  slug?: Maybe<Scalars['String']>,
  status?: Maybe<Scalars['String']>,
  stockStatus?: Maybe<Array<Maybe<GraphCms_StockStatusEnum>>>,
  tag?: Maybe<Scalars['String']>,
  tagId?: Maybe<Scalars['Int']>,
  tagIdIn?: Maybe<Array<Maybe<Scalars['Int']>>>,
  tagIdNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>,
  tagIn?: Maybe<Array<Maybe<Scalars['String']>>>,
  tagNotIn?: Maybe<Array<Maybe<Scalars['String']>>>,
  taxClass?: Maybe<GraphCms_TaxClassEnum>,
  taxonomyFilter?: Maybe<Array<Maybe<GraphCms_ProductTaxonomyFilterRelationInput>>>,
  type?: Maybe<GraphCms_ProductTypesEnum>,
  typeIn?: Maybe<Array<Maybe<GraphCms_ProductTypesEnum>>>,
  typeNotIn?: Maybe<Array<Maybe<GraphCms_ProductTypesEnum>>>,
  visibility?: Maybe<GraphCms_CatalogVisibilityEnum>,
};

export type GraphCms_PaVariant = GraphCms_Node & {
   __typename?: 'GraphCMS_PaVariant',
  count?: Maybe<Scalars['Int']>,
  description?: Maybe<Scalars['String']>,
  id: Scalars['ID'],
  isRestricted?: Maybe<Scalars['Boolean']>,
  link?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  paVariantId?: Maybe<Scalars['Int']>,
  products?: Maybe<GraphCms_PaVariantToProductConnection>,
  slug?: Maybe<Scalars['String']>,
  taxonomy?: Maybe<GraphCms_Taxonomy>,
  termGroupId?: Maybe<Scalars['Int']>,
  termTaxonomyId?: Maybe<Scalars['Int']>,
  variations?: Maybe<GraphCms_PaVariantToProductVariationConnection>,
};


export type GraphCms_PaVariantProductsArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  where?: Maybe<GraphCms_PaVariantToProductConnectionWhereArgs>
};


export type GraphCms_PaVariantVariationsArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  where?: Maybe<GraphCms_PaVariantToProductVariationConnectionWhereArgs>
};

export type GraphCms_PaVariantToProductConnection = {
   __typename?: 'GraphCMS_PaVariantToProductConnection',
  edges?: Maybe<Array<Maybe<GraphCms_PaVariantToProductConnectionEdge>>>,
  nodes?: Maybe<Array<Maybe<GraphCms_Product>>>,
  pageInfo?: Maybe<GraphCms_WpPageInfo>,
};

export type GraphCms_PaVariantToProductConnectionEdge = {
   __typename?: 'GraphCMS_PaVariantToProductConnectionEdge',
  cursor?: Maybe<Scalars['String']>,
  node?: Maybe<GraphCms_Product>,
};

export type GraphCms_PaVariantToProductConnectionWhereArgs = {
  attribute?: Maybe<Scalars['String']>,
  attributeTerm?: Maybe<Scalars['String']>,
  category?: Maybe<Scalars['String']>,
  categoryId?: Maybe<Scalars['Int']>,
  categoryIdIn?: Maybe<Array<Maybe<Scalars['Int']>>>,
  categoryIdNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>,
  categoryIn?: Maybe<Array<Maybe<Scalars['String']>>>,
  categoryNotIn?: Maybe<Array<Maybe<Scalars['String']>>>,
  dateQuery?: Maybe<GraphCms_DateQueryInput>,
  exclude?: Maybe<Array<Maybe<Scalars['Int']>>>,
  featured?: Maybe<Scalars['Boolean']>,
  include?: Maybe<Array<Maybe<Scalars['Int']>>>,
  maxPrice?: Maybe<Scalars['Float']>,
  minPrice?: Maybe<Scalars['Float']>,
  onSale?: Maybe<Scalars['Boolean']>,
  orderby?: Maybe<Array<Maybe<GraphCms_ProductsOrderbyInput>>>,
  parent?: Maybe<Scalars['Int']>,
  parentIn?: Maybe<Array<Maybe<Scalars['Int']>>>,
  parentNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>,
  search?: Maybe<Scalars['String']>,
  shippingClassId?: Maybe<Scalars['Int']>,
  sku?: Maybe<Scalars['String']>,
  slug?: Maybe<Scalars['String']>,
  status?: Maybe<Scalars['String']>,
  stockStatus?: Maybe<Array<Maybe<GraphCms_StockStatusEnum>>>,
  tag?: Maybe<Scalars['String']>,
  tagId?: Maybe<Scalars['Int']>,
  tagIdIn?: Maybe<Array<Maybe<Scalars['Int']>>>,
  tagIdNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>,
  tagIn?: Maybe<Array<Maybe<Scalars['String']>>>,
  tagNotIn?: Maybe<Array<Maybe<Scalars['String']>>>,
  taxClass?: Maybe<GraphCms_TaxClassEnum>,
  taxonomyFilter?: Maybe<Array<Maybe<GraphCms_ProductTaxonomyFilterRelationInput>>>,
  type?: Maybe<GraphCms_ProductTypesEnum>,
  typeIn?: Maybe<Array<Maybe<GraphCms_ProductTypesEnum>>>,
  typeNotIn?: Maybe<Array<Maybe<GraphCms_ProductTypesEnum>>>,
  visibility?: Maybe<GraphCms_CatalogVisibilityEnum>,
};

export type GraphCms_PaVariantToProductVariationConnection = {
   __typename?: 'GraphCMS_PaVariantToProductVariationConnection',
  edges?: Maybe<Array<Maybe<GraphCms_PaVariantToProductVariationConnectionEdge>>>,
  nodes?: Maybe<Array<Maybe<GraphCms_ProductVariation>>>,
  pageInfo?: Maybe<GraphCms_WpPageInfo>,
};

export type GraphCms_PaVariantToProductVariationConnectionEdge = {
   __typename?: 'GraphCMS_PaVariantToProductVariationConnectionEdge',
  cursor?: Maybe<Scalars['String']>,
  node?: Maybe<GraphCms_ProductVariation>,
};

export type GraphCms_PaVariantToProductVariationConnectionWhereArgs = {
  attribute?: Maybe<Scalars['String']>,
  attributeTerm?: Maybe<Scalars['String']>,
  category?: Maybe<Scalars['String']>,
  categoryId?: Maybe<Scalars['Int']>,
  categoryIdIn?: Maybe<Array<Maybe<Scalars['Int']>>>,
  categoryIdNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>,
  categoryIn?: Maybe<Array<Maybe<Scalars['String']>>>,
  categoryNotIn?: Maybe<Array<Maybe<Scalars['String']>>>,
  dateQuery?: Maybe<GraphCms_DateQueryInput>,
  exclude?: Maybe<Array<Maybe<Scalars['Int']>>>,
  featured?: Maybe<Scalars['Boolean']>,
  include?: Maybe<Array<Maybe<Scalars['Int']>>>,
  maxPrice?: Maybe<Scalars['Float']>,
  minPrice?: Maybe<Scalars['Float']>,
  onSale?: Maybe<Scalars['Boolean']>,
  orderby?: Maybe<Array<Maybe<GraphCms_ProductsOrderbyInput>>>,
  parent?: Maybe<Scalars['Int']>,
  parentIn?: Maybe<Array<Maybe<Scalars['Int']>>>,
  parentNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>,
  search?: Maybe<Scalars['String']>,
  shippingClassId?: Maybe<Scalars['Int']>,
  sku?: Maybe<Scalars['String']>,
  slug?: Maybe<Scalars['String']>,
  status?: Maybe<Scalars['String']>,
  stockStatus?: Maybe<Array<Maybe<GraphCms_StockStatusEnum>>>,
  tag?: Maybe<Scalars['String']>,
  tagId?: Maybe<Scalars['Int']>,
  tagIdIn?: Maybe<Array<Maybe<Scalars['Int']>>>,
  tagIdNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>,
  tagIn?: Maybe<Array<Maybe<Scalars['String']>>>,
  tagNotIn?: Maybe<Array<Maybe<Scalars['String']>>>,
  taxClass?: Maybe<GraphCms_TaxClassEnum>,
  taxonomyFilter?: Maybe<Array<Maybe<GraphCms_ProductTaxonomyFilterRelationInput>>>,
  type?: Maybe<GraphCms_ProductTypesEnum>,
  typeIn?: Maybe<Array<Maybe<GraphCms_ProductTypesEnum>>>,
  typeNotIn?: Maybe<Array<Maybe<GraphCms_ProductTypesEnum>>>,
  visibility?: Maybe<GraphCms_CatalogVisibilityEnum>,
};

export type GraphCms_PaVarv = GraphCms_Node & {
   __typename?: 'GraphCMS_PaVarv',
  count?: Maybe<Scalars['Int']>,
  description?: Maybe<Scalars['String']>,
  id: Scalars['ID'],
  isRestricted?: Maybe<Scalars['Boolean']>,
  link?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  paVarvId?: Maybe<Scalars['Int']>,
  products?: Maybe<GraphCms_PaVarvToProductConnection>,
  slug?: Maybe<Scalars['String']>,
  taxonomy?: Maybe<GraphCms_Taxonomy>,
  termGroupId?: Maybe<Scalars['Int']>,
  termTaxonomyId?: Maybe<Scalars['Int']>,
  variations?: Maybe<GraphCms_PaVarvToProductVariationConnection>,
};


export type GraphCms_PaVarvProductsArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  where?: Maybe<GraphCms_PaVarvToProductConnectionWhereArgs>
};


export type GraphCms_PaVarvVariationsArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  where?: Maybe<GraphCms_PaVarvToProductVariationConnectionWhereArgs>
};

export type GraphCms_PaVarvToProductConnection = {
   __typename?: 'GraphCMS_PaVarvToProductConnection',
  edges?: Maybe<Array<Maybe<GraphCms_PaVarvToProductConnectionEdge>>>,
  nodes?: Maybe<Array<Maybe<GraphCms_Product>>>,
  pageInfo?: Maybe<GraphCms_WpPageInfo>,
};

export type GraphCms_PaVarvToProductConnectionEdge = {
   __typename?: 'GraphCMS_PaVarvToProductConnectionEdge',
  cursor?: Maybe<Scalars['String']>,
  node?: Maybe<GraphCms_Product>,
};

export type GraphCms_PaVarvToProductConnectionWhereArgs = {
  attribute?: Maybe<Scalars['String']>,
  attributeTerm?: Maybe<Scalars['String']>,
  category?: Maybe<Scalars['String']>,
  categoryId?: Maybe<Scalars['Int']>,
  categoryIdIn?: Maybe<Array<Maybe<Scalars['Int']>>>,
  categoryIdNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>,
  categoryIn?: Maybe<Array<Maybe<Scalars['String']>>>,
  categoryNotIn?: Maybe<Array<Maybe<Scalars['String']>>>,
  dateQuery?: Maybe<GraphCms_DateQueryInput>,
  exclude?: Maybe<Array<Maybe<Scalars['Int']>>>,
  featured?: Maybe<Scalars['Boolean']>,
  include?: Maybe<Array<Maybe<Scalars['Int']>>>,
  maxPrice?: Maybe<Scalars['Float']>,
  minPrice?: Maybe<Scalars['Float']>,
  onSale?: Maybe<Scalars['Boolean']>,
  orderby?: Maybe<Array<Maybe<GraphCms_ProductsOrderbyInput>>>,
  parent?: Maybe<Scalars['Int']>,
  parentIn?: Maybe<Array<Maybe<Scalars['Int']>>>,
  parentNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>,
  search?: Maybe<Scalars['String']>,
  shippingClassId?: Maybe<Scalars['Int']>,
  sku?: Maybe<Scalars['String']>,
  slug?: Maybe<Scalars['String']>,
  status?: Maybe<Scalars['String']>,
  stockStatus?: Maybe<Array<Maybe<GraphCms_StockStatusEnum>>>,
  tag?: Maybe<Scalars['String']>,
  tagId?: Maybe<Scalars['Int']>,
  tagIdIn?: Maybe<Array<Maybe<Scalars['Int']>>>,
  tagIdNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>,
  tagIn?: Maybe<Array<Maybe<Scalars['String']>>>,
  tagNotIn?: Maybe<Array<Maybe<Scalars['String']>>>,
  taxClass?: Maybe<GraphCms_TaxClassEnum>,
  taxonomyFilter?: Maybe<Array<Maybe<GraphCms_ProductTaxonomyFilterRelationInput>>>,
  type?: Maybe<GraphCms_ProductTypesEnum>,
  typeIn?: Maybe<Array<Maybe<GraphCms_ProductTypesEnum>>>,
  typeNotIn?: Maybe<Array<Maybe<GraphCms_ProductTypesEnum>>>,
  visibility?: Maybe<GraphCms_CatalogVisibilityEnum>,
};

export type GraphCms_PaVarvToProductVariationConnection = {
   __typename?: 'GraphCMS_PaVarvToProductVariationConnection',
  edges?: Maybe<Array<Maybe<GraphCms_PaVarvToProductVariationConnectionEdge>>>,
  nodes?: Maybe<Array<Maybe<GraphCms_ProductVariation>>>,
  pageInfo?: Maybe<GraphCms_WpPageInfo>,
};

export type GraphCms_PaVarvToProductVariationConnectionEdge = {
   __typename?: 'GraphCMS_PaVarvToProductVariationConnectionEdge',
  cursor?: Maybe<Scalars['String']>,
  node?: Maybe<GraphCms_ProductVariation>,
};

export type GraphCms_PaVarvToProductVariationConnectionWhereArgs = {
  attribute?: Maybe<Scalars['String']>,
  attributeTerm?: Maybe<Scalars['String']>,
  category?: Maybe<Scalars['String']>,
  categoryId?: Maybe<Scalars['Int']>,
  categoryIdIn?: Maybe<Array<Maybe<Scalars['Int']>>>,
  categoryIdNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>,
  categoryIn?: Maybe<Array<Maybe<Scalars['String']>>>,
  categoryNotIn?: Maybe<Array<Maybe<Scalars['String']>>>,
  dateQuery?: Maybe<GraphCms_DateQueryInput>,
  exclude?: Maybe<Array<Maybe<Scalars['Int']>>>,
  featured?: Maybe<Scalars['Boolean']>,
  include?: Maybe<Array<Maybe<Scalars['Int']>>>,
  maxPrice?: Maybe<Scalars['Float']>,
  minPrice?: Maybe<Scalars['Float']>,
  onSale?: Maybe<Scalars['Boolean']>,
  orderby?: Maybe<Array<Maybe<GraphCms_ProductsOrderbyInput>>>,
  parent?: Maybe<Scalars['Int']>,
  parentIn?: Maybe<Array<Maybe<Scalars['Int']>>>,
  parentNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>,
  search?: Maybe<Scalars['String']>,
  shippingClassId?: Maybe<Scalars['Int']>,
  sku?: Maybe<Scalars['String']>,
  slug?: Maybe<Scalars['String']>,
  status?: Maybe<Scalars['String']>,
  stockStatus?: Maybe<Array<Maybe<GraphCms_StockStatusEnum>>>,
  tag?: Maybe<Scalars['String']>,
  tagId?: Maybe<Scalars['Int']>,
  tagIdIn?: Maybe<Array<Maybe<Scalars['Int']>>>,
  tagIdNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>,
  tagIn?: Maybe<Array<Maybe<Scalars['String']>>>,
  tagNotIn?: Maybe<Array<Maybe<Scalars['String']>>>,
  taxClass?: Maybe<GraphCms_TaxClassEnum>,
  taxonomyFilter?: Maybe<Array<Maybe<GraphCms_ProductTaxonomyFilterRelationInput>>>,
  type?: Maybe<GraphCms_ProductTypesEnum>,
  typeIn?: Maybe<Array<Maybe<GraphCms_ProductTypesEnum>>>,
  typeNotIn?: Maybe<Array<Maybe<GraphCms_ProductTypesEnum>>>,
  visibility?: Maybe<GraphCms_CatalogVisibilityEnum>,
};

export type GraphCms_PaVeekindlus = GraphCms_Node & {
   __typename?: 'GraphCMS_PaVeekindlus',
  count?: Maybe<Scalars['Int']>,
  description?: Maybe<Scalars['String']>,
  id: Scalars['ID'],
  isRestricted?: Maybe<Scalars['Boolean']>,
  link?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  paVeekindlusId?: Maybe<Scalars['Int']>,
  products?: Maybe<GraphCms_PaVeekindlusToProductConnection>,
  slug?: Maybe<Scalars['String']>,
  taxonomy?: Maybe<GraphCms_Taxonomy>,
  termGroupId?: Maybe<Scalars['Int']>,
  termTaxonomyId?: Maybe<Scalars['Int']>,
  variations?: Maybe<GraphCms_PaVeekindlusToProductVariationConnection>,
};


export type GraphCms_PaVeekindlusProductsArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  where?: Maybe<GraphCms_PaVeekindlusToProductConnectionWhereArgs>
};


export type GraphCms_PaVeekindlusVariationsArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  where?: Maybe<GraphCms_PaVeekindlusToProductVariationConnectionWhereArgs>
};

export type GraphCms_PaVeekindlusToProductConnection = {
   __typename?: 'GraphCMS_PaVeekindlusToProductConnection',
  edges?: Maybe<Array<Maybe<GraphCms_PaVeekindlusToProductConnectionEdge>>>,
  nodes?: Maybe<Array<Maybe<GraphCms_Product>>>,
  pageInfo?: Maybe<GraphCms_WpPageInfo>,
};

export type GraphCms_PaVeekindlusToProductConnectionEdge = {
   __typename?: 'GraphCMS_PaVeekindlusToProductConnectionEdge',
  cursor?: Maybe<Scalars['String']>,
  node?: Maybe<GraphCms_Product>,
};

export type GraphCms_PaVeekindlusToProductConnectionWhereArgs = {
  attribute?: Maybe<Scalars['String']>,
  attributeTerm?: Maybe<Scalars['String']>,
  category?: Maybe<Scalars['String']>,
  categoryId?: Maybe<Scalars['Int']>,
  categoryIdIn?: Maybe<Array<Maybe<Scalars['Int']>>>,
  categoryIdNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>,
  categoryIn?: Maybe<Array<Maybe<Scalars['String']>>>,
  categoryNotIn?: Maybe<Array<Maybe<Scalars['String']>>>,
  dateQuery?: Maybe<GraphCms_DateQueryInput>,
  exclude?: Maybe<Array<Maybe<Scalars['Int']>>>,
  featured?: Maybe<Scalars['Boolean']>,
  include?: Maybe<Array<Maybe<Scalars['Int']>>>,
  maxPrice?: Maybe<Scalars['Float']>,
  minPrice?: Maybe<Scalars['Float']>,
  onSale?: Maybe<Scalars['Boolean']>,
  orderby?: Maybe<Array<Maybe<GraphCms_ProductsOrderbyInput>>>,
  parent?: Maybe<Scalars['Int']>,
  parentIn?: Maybe<Array<Maybe<Scalars['Int']>>>,
  parentNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>,
  search?: Maybe<Scalars['String']>,
  shippingClassId?: Maybe<Scalars['Int']>,
  sku?: Maybe<Scalars['String']>,
  slug?: Maybe<Scalars['String']>,
  status?: Maybe<Scalars['String']>,
  stockStatus?: Maybe<Array<Maybe<GraphCms_StockStatusEnum>>>,
  tag?: Maybe<Scalars['String']>,
  tagId?: Maybe<Scalars['Int']>,
  tagIdIn?: Maybe<Array<Maybe<Scalars['Int']>>>,
  tagIdNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>,
  tagIn?: Maybe<Array<Maybe<Scalars['String']>>>,
  tagNotIn?: Maybe<Array<Maybe<Scalars['String']>>>,
  taxClass?: Maybe<GraphCms_TaxClassEnum>,
  taxonomyFilter?: Maybe<Array<Maybe<GraphCms_ProductTaxonomyFilterRelationInput>>>,
  type?: Maybe<GraphCms_ProductTypesEnum>,
  typeIn?: Maybe<Array<Maybe<GraphCms_ProductTypesEnum>>>,
  typeNotIn?: Maybe<Array<Maybe<GraphCms_ProductTypesEnum>>>,
  visibility?: Maybe<GraphCms_CatalogVisibilityEnum>,
};

export type GraphCms_PaVeekindlusToProductVariationConnection = {
   __typename?: 'GraphCMS_PaVeekindlusToProductVariationConnection',
  edges?: Maybe<Array<Maybe<GraphCms_PaVeekindlusToProductVariationConnectionEdge>>>,
  nodes?: Maybe<Array<Maybe<GraphCms_ProductVariation>>>,
  pageInfo?: Maybe<GraphCms_WpPageInfo>,
};

export type GraphCms_PaVeekindlusToProductVariationConnectionEdge = {
   __typename?: 'GraphCMS_PaVeekindlusToProductVariationConnectionEdge',
  cursor?: Maybe<Scalars['String']>,
  node?: Maybe<GraphCms_ProductVariation>,
};

export type GraphCms_PaVeekindlusToProductVariationConnectionWhereArgs = {
  attribute?: Maybe<Scalars['String']>,
  attributeTerm?: Maybe<Scalars['String']>,
  category?: Maybe<Scalars['String']>,
  categoryId?: Maybe<Scalars['Int']>,
  categoryIdIn?: Maybe<Array<Maybe<Scalars['Int']>>>,
  categoryIdNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>,
  categoryIn?: Maybe<Array<Maybe<Scalars['String']>>>,
  categoryNotIn?: Maybe<Array<Maybe<Scalars['String']>>>,
  dateQuery?: Maybe<GraphCms_DateQueryInput>,
  exclude?: Maybe<Array<Maybe<Scalars['Int']>>>,
  featured?: Maybe<Scalars['Boolean']>,
  include?: Maybe<Array<Maybe<Scalars['Int']>>>,
  maxPrice?: Maybe<Scalars['Float']>,
  minPrice?: Maybe<Scalars['Float']>,
  onSale?: Maybe<Scalars['Boolean']>,
  orderby?: Maybe<Array<Maybe<GraphCms_ProductsOrderbyInput>>>,
  parent?: Maybe<Scalars['Int']>,
  parentIn?: Maybe<Array<Maybe<Scalars['Int']>>>,
  parentNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>,
  search?: Maybe<Scalars['String']>,
  shippingClassId?: Maybe<Scalars['Int']>,
  sku?: Maybe<Scalars['String']>,
  slug?: Maybe<Scalars['String']>,
  status?: Maybe<Scalars['String']>,
  stockStatus?: Maybe<Array<Maybe<GraphCms_StockStatusEnum>>>,
  tag?: Maybe<Scalars['String']>,
  tagId?: Maybe<Scalars['Int']>,
  tagIdIn?: Maybe<Array<Maybe<Scalars['Int']>>>,
  tagIdNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>,
  tagIn?: Maybe<Array<Maybe<Scalars['String']>>>,
  tagNotIn?: Maybe<Array<Maybe<Scalars['String']>>>,
  taxClass?: Maybe<GraphCms_TaxClassEnum>,
  taxonomyFilter?: Maybe<Array<Maybe<GraphCms_ProductTaxonomyFilterRelationInput>>>,
  type?: Maybe<GraphCms_ProductTypesEnum>,
  typeIn?: Maybe<Array<Maybe<GraphCms_ProductTypesEnum>>>,
  typeNotIn?: Maybe<Array<Maybe<GraphCms_ProductTypesEnum>>>,
  visibility?: Maybe<GraphCms_CatalogVisibilityEnum>,
};

export type GraphCms_PaymentGateway = {
   __typename?: 'GraphCMS_PaymentGateway',
  description?: Maybe<Scalars['String']>,
  icon?: Maybe<Scalars['String']>,
  id: Scalars['String'],
  title?: Maybe<Scalars['String']>,
};

export type GraphCms_Plugin = GraphCms_Node & {
   __typename?: 'GraphCMS_Plugin',
  author?: Maybe<Scalars['String']>,
  authorUri?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  id: Scalars['ID'],
  isRestricted?: Maybe<Scalars['Boolean']>,
  name?: Maybe<Scalars['String']>,
  pluginUri?: Maybe<Scalars['String']>,
  version?: Maybe<Scalars['String']>,
};

export type GraphCms_Post = GraphCms_Node & {
   __typename?: 'GraphCMS_Post',
  ancestors?: Maybe<Array<Maybe<GraphCms_PostObjectUnion>>>,
  author?: Maybe<GraphCms_User>,
  categories?: Maybe<GraphCms_PostToCategoryConnection>,
  commentCount?: Maybe<Scalars['Int']>,
  commentStatus?: Maybe<Scalars['String']>,
  comments?: Maybe<GraphCms_PostToCommentConnection>,
  content?: Maybe<Scalars['String']>,
  date?: Maybe<Scalars['String']>,
  dateGmt?: Maybe<Scalars['String']>,
  desiredSlug?: Maybe<Scalars['String']>,
  editLast?: Maybe<GraphCms_User>,
  editLock?: Maybe<GraphCms_EditLock>,
  enclosure?: Maybe<Scalars['String']>,
  excerpt?: Maybe<Scalars['String']>,
  featuredImage?: Maybe<GraphCms_MediaItem>,
  guid?: Maybe<Scalars['String']>,
  id: Scalars['ID'],
  isRestricted?: Maybe<Scalars['Boolean']>,
  isRevision?: Maybe<Scalars['Boolean']>,
  link?: Maybe<Scalars['String']>,
  menuOrder?: Maybe<Scalars['Int']>,
  modified?: Maybe<Scalars['String']>,
  modifiedGmt?: Maybe<Scalars['String']>,
  parent?: Maybe<GraphCms_PostObjectUnion>,
  pingStatus?: Maybe<Scalars['String']>,
  pinged?: Maybe<Array<Maybe<Scalars['String']>>>,
  postId: Scalars['Int'],
  revisions?: Maybe<GraphCms_PostToPostConnection>,
  slug?: Maybe<Scalars['String']>,
  status?: Maybe<Scalars['String']>,
  tags?: Maybe<GraphCms_PostToTagConnection>,
  termNames?: Maybe<Array<Maybe<Scalars['String']>>>,
  termSlugs?: Maybe<Array<Maybe<Scalars['String']>>>,
  terms?: Maybe<Array<Maybe<GraphCms_TermObjectUnion>>>,
  title?: Maybe<Scalars['String']>,
  toPing?: Maybe<Array<Maybe<Scalars['String']>>>,
  uri?: Maybe<Scalars['String']>,
};


export type GraphCms_PostAncestorsArgs = {
  types?: Maybe<Array<Maybe<GraphCms_PostTypeEnum>>>
};


export type GraphCms_PostCategoriesArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  where?: Maybe<GraphCms_PostToCategoryConnectionWhereArgs>
};


export type GraphCms_PostCommentsArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  where?: Maybe<GraphCms_PostToCommentConnectionWhereArgs>
};


export type GraphCms_PostContentArgs = {
  format?: Maybe<GraphCms_PostObjectFieldFormatEnum>
};


export type GraphCms_PostExcerptArgs = {
  format?: Maybe<GraphCms_PostObjectFieldFormatEnum>
};


export type GraphCms_PostRevisionsArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  where?: Maybe<GraphCms_PostToPostConnectionWhereArgs>
};


export type GraphCms_PostTagsArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  where?: Maybe<GraphCms_PostToTagConnectionWhereArgs>
};


export type GraphCms_PostTermNamesArgs = {
  taxonomies?: Maybe<Array<Maybe<GraphCms_TaxonomyEnum>>>
};


export type GraphCms_PostTermSlugsArgs = {
  taxonomies?: Maybe<Array<Maybe<GraphCms_TaxonomyEnum>>>
};


export type GraphCms_PostTermsArgs = {
  taxonomies?: Maybe<Array<Maybe<GraphCms_TaxonomyEnum>>>
};


export type GraphCms_PostTitleArgs = {
  format?: Maybe<GraphCms_PostObjectFieldFormatEnum>
};

export type GraphCms_PostCategoriesInput = {
  append?: Maybe<Scalars['Boolean']>,
  nodes?: Maybe<Array<Maybe<GraphCms_PostCategoriesNodeInput>>>,
};

export type GraphCms_PostCategoriesNodeInput = {
  description?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['ID']>,
  name?: Maybe<Scalars['String']>,
  slug?: Maybe<Scalars['String']>,
};

export enum GraphCms_PostObjectFieldFormatEnum {
  Raw = 'RAW',
  Rendered = 'RENDERED'
}

export enum GraphCms_PostObjectsConnectionDateColumnEnum {
  Date = 'DATE',
  Modified = 'MODIFIED'
}

export enum GraphCms_PostObjectsConnectionOrderbyEnum {
  Author = 'AUTHOR',
  Date = 'DATE',
  In = 'IN',
  MenuOrder = 'MENU_ORDER',
  Modified = 'MODIFIED',
  NameIn = 'NAME_IN',
  Parent = 'PARENT',
  Slug = 'SLUG',
  Title = 'TITLE'
}

export type GraphCms_PostObjectsConnectionOrderbyInput = {
  field: GraphCms_PostObjectsConnectionOrderbyEnum,
  order?: Maybe<GraphCms_OrderEnum>,
};

export type GraphCms_PostObjectUnion = GraphCms_Post | GraphCms_Page | GraphCms_MediaItem;

export enum GraphCms_PostStatusEnum {
  AutoDraft = 'AUTO_DRAFT',
  Draft = 'DRAFT',
  Failed = 'FAILED',
  Future = 'FUTURE',
  Inherit = 'INHERIT',
  InProgress = 'IN_PROGRESS',
  Pending = 'PENDING',
  Private = 'PRIVATE',
  Publish = 'PUBLISH',
  RequestCompleted = 'REQUEST_COMPLETED',
  RequestConfirmed = 'REQUEST_CONFIRMED',
  RequestFailed = 'REQUEST_FAILED',
  RequestPending = 'REQUEST_PENDING',
  Trash = 'TRASH',
  WcCancelled = 'WC_CANCELLED',
  WcCompleted = 'WC_COMPLETED',
  WcFailed = 'WC_FAILED',
  WcOnHold = 'WC_ON_HOLD',
  WcPending = 'WC_PENDING',
  WcProcessing = 'WC_PROCESSING',
  WcRefunded = 'WC_REFUNDED'
}

export type GraphCms_PostTagsInput = {
  append?: Maybe<Scalars['Boolean']>,
  nodes?: Maybe<Array<Maybe<GraphCms_PostTagsNodeInput>>>,
};

export type GraphCms_PostTagsNodeInput = {
  description?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['ID']>,
  name?: Maybe<Scalars['String']>,
  slug?: Maybe<Scalars['String']>,
};

export type GraphCms_PostToCategoryConnection = {
   __typename?: 'GraphCMS_PostToCategoryConnection',
  edges?: Maybe<Array<Maybe<GraphCms_PostToCategoryConnectionEdge>>>,
  nodes?: Maybe<Array<Maybe<GraphCms_Category>>>,
  pageInfo?: Maybe<GraphCms_WpPageInfo>,
  taxonomyInfo?: Maybe<GraphCms_Taxonomy>,
};

export type GraphCms_PostToCategoryConnectionEdge = {
   __typename?: 'GraphCMS_PostToCategoryConnectionEdge',
  cursor?: Maybe<Scalars['String']>,
  node?: Maybe<GraphCms_Category>,
};

export type GraphCms_PostToCategoryConnectionWhereArgs = {
  cacheDomain?: Maybe<Scalars['String']>,
  childOf?: Maybe<Scalars['Int']>,
  childless?: Maybe<Scalars['Boolean']>,
  descriptionLike?: Maybe<Scalars['String']>,
  exclude?: Maybe<Array<Maybe<Scalars['ID']>>>,
  excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>,
  hideEmpty?: Maybe<Scalars['Boolean']>,
  hierarchical?: Maybe<Scalars['Boolean']>,
  include?: Maybe<Array<Maybe<Scalars['ID']>>>,
  name?: Maybe<Array<Maybe<Scalars['String']>>>,
  nameLike?: Maybe<Scalars['String']>,
  objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>,
  orderby?: Maybe<GraphCms_TermObjectsConnectionOrderbyEnum>,
  padCounts?: Maybe<Scalars['Boolean']>,
  parent?: Maybe<Scalars['Int']>,
  search?: Maybe<Scalars['String']>,
  shouldOnlyIncludeConnectedItems?: Maybe<Scalars['Boolean']>,
  shouldOutputInFlatList?: Maybe<Scalars['Boolean']>,
  slug?: Maybe<Array<Maybe<Scalars['String']>>>,
  termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>,
  updateTermMetaCache?: Maybe<Scalars['Boolean']>,
};

export type GraphCms_PostToCommentConnection = {
   __typename?: 'GraphCMS_PostToCommentConnection',
  edges?: Maybe<Array<Maybe<GraphCms_PostToCommentConnectionEdge>>>,
  nodes?: Maybe<Array<Maybe<GraphCms_Comment>>>,
  pageInfo?: Maybe<GraphCms_WpPageInfo>,
};

export type GraphCms_PostToCommentConnectionEdge = {
   __typename?: 'GraphCMS_PostToCommentConnectionEdge',
  cursor?: Maybe<Scalars['String']>,
  node?: Maybe<GraphCms_Comment>,
};

export type GraphCms_PostToCommentConnectionWhereArgs = {
  authorEmail?: Maybe<Scalars['String']>,
  authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>,
  authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>,
  authorUrl?: Maybe<Scalars['String']>,
  commentIn?: Maybe<Array<Maybe<Scalars['ID']>>>,
  commentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>,
  commentType?: Maybe<Scalars['String']>,
  commentTypeIn?: Maybe<Array<Maybe<Scalars['String']>>>,
  commentTypeNotIn?: Maybe<Scalars['String']>,
  contentAuthor?: Maybe<Array<Maybe<Scalars['ID']>>>,
  contentAuthorIn?: Maybe<Array<Maybe<Scalars['ID']>>>,
  contentAuthorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>,
  contentId?: Maybe<Scalars['ID']>,
  contentIdIn?: Maybe<Array<Maybe<Scalars['ID']>>>,
  contentIdNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>,
  contentName?: Maybe<Scalars['String']>,
  contentParent?: Maybe<Scalars['Int']>,
  contentStatus?: Maybe<Array<Maybe<GraphCms_PostStatusEnum>>>,
  contentType?: Maybe<Array<Maybe<GraphCms_PostTypeEnum>>>,
  includeUnapproved?: Maybe<Array<Maybe<Scalars['ID']>>>,
  karma?: Maybe<Scalars['Int']>,
  order?: Maybe<GraphCms_OrderEnum>,
  orderby?: Maybe<GraphCms_CommentsConnectionOrderbyEnum>,
  parent?: Maybe<Scalars['Int']>,
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>,
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>,
  search?: Maybe<Scalars['String']>,
  status?: Maybe<Scalars['String']>,
  userId?: Maybe<Scalars['ID']>,
};

export type GraphCms_PostToPostConnection = {
   __typename?: 'GraphCMS_PostToPostConnection',
  edges?: Maybe<Array<Maybe<GraphCms_PostToPostConnectionEdge>>>,
  nodes?: Maybe<Array<Maybe<GraphCms_Post>>>,
  pageInfo?: Maybe<GraphCms_WpPageInfo>,
  postTypeInfo?: Maybe<GraphCms_PostType>,
};

export type GraphCms_PostToPostConnectionEdge = {
   __typename?: 'GraphCMS_PostToPostConnectionEdge',
  cursor?: Maybe<Scalars['String']>,
  node?: Maybe<GraphCms_Post>,
};

export type GraphCms_PostToPostConnectionWhereArgs = {
  author?: Maybe<Scalars['Int']>,
  authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>,
  authorName?: Maybe<Scalars['String']>,
  authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>,
  categoryId?: Maybe<Scalars['Int']>,
  categoryIn?: Maybe<Array<Maybe<Scalars['ID']>>>,
  categoryName?: Maybe<Scalars['String']>,
  categoryNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>,
  dateQuery?: Maybe<GraphCms_DateQueryInput>,
  hasPassword?: Maybe<Scalars['Boolean']>,
  id?: Maybe<Scalars['Int']>,
  in?: Maybe<Array<Maybe<Scalars['ID']>>>,
  mimeType?: Maybe<GraphCms_MimeTypeEnum>,
  name?: Maybe<Scalars['String']>,
  nameIn?: Maybe<Array<Maybe<Scalars['String']>>>,
  notIn?: Maybe<Array<Maybe<Scalars['ID']>>>,
  orderby?: Maybe<Array<Maybe<GraphCms_PostObjectsConnectionOrderbyInput>>>,
  parent?: Maybe<Scalars['String']>,
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>,
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>,
  password?: Maybe<Scalars['String']>,
  search?: Maybe<Scalars['String']>,
  stati?: Maybe<Array<Maybe<GraphCms_PostStatusEnum>>>,
  status?: Maybe<GraphCms_PostStatusEnum>,
  tag?: Maybe<Scalars['String']>,
  tagId?: Maybe<Scalars['String']>,
  tagIn?: Maybe<Array<Maybe<Scalars['ID']>>>,
  tagNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>,
  tagSlugAnd?: Maybe<Array<Maybe<Scalars['String']>>>,
  tagSlugIn?: Maybe<Array<Maybe<Scalars['String']>>>,
  title?: Maybe<Scalars['String']>,
};

export type GraphCms_PostToTagConnection = {
   __typename?: 'GraphCMS_PostToTagConnection',
  edges?: Maybe<Array<Maybe<GraphCms_PostToTagConnectionEdge>>>,
  nodes?: Maybe<Array<Maybe<GraphCms_Tag>>>,
  pageInfo?: Maybe<GraphCms_WpPageInfo>,
  taxonomyInfo?: Maybe<GraphCms_Taxonomy>,
};

export type GraphCms_PostToTagConnectionEdge = {
   __typename?: 'GraphCMS_PostToTagConnectionEdge',
  cursor?: Maybe<Scalars['String']>,
  node?: Maybe<GraphCms_Tag>,
};

export type GraphCms_PostToTagConnectionWhereArgs = {
  cacheDomain?: Maybe<Scalars['String']>,
  childOf?: Maybe<Scalars['Int']>,
  childless?: Maybe<Scalars['Boolean']>,
  descriptionLike?: Maybe<Scalars['String']>,
  exclude?: Maybe<Array<Maybe<Scalars['ID']>>>,
  excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>,
  hideEmpty?: Maybe<Scalars['Boolean']>,
  hierarchical?: Maybe<Scalars['Boolean']>,
  include?: Maybe<Array<Maybe<Scalars['ID']>>>,
  name?: Maybe<Array<Maybe<Scalars['String']>>>,
  nameLike?: Maybe<Scalars['String']>,
  objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>,
  orderby?: Maybe<GraphCms_TermObjectsConnectionOrderbyEnum>,
  padCounts?: Maybe<Scalars['Boolean']>,
  parent?: Maybe<Scalars['Int']>,
  search?: Maybe<Scalars['String']>,
  shouldOnlyIncludeConnectedItems?: Maybe<Scalars['Boolean']>,
  shouldOutputInFlatList?: Maybe<Scalars['Boolean']>,
  slug?: Maybe<Array<Maybe<Scalars['String']>>>,
  termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>,
  updateTermMetaCache?: Maybe<Scalars['Boolean']>,
};

export type GraphCms_PostType = GraphCms_Node & {
   __typename?: 'GraphCMS_PostType',
  canExport?: Maybe<Scalars['Boolean']>,
  connectedTaxonomies?: Maybe<Array<Maybe<GraphCms_Taxonomy>>>,
  connectedTaxonomyNames?: Maybe<Array<Maybe<Scalars['String']>>>,
  deleteWithUser?: Maybe<Scalars['Boolean']>,
  description?: Maybe<Scalars['String']>,
  excludeFromSearch?: Maybe<Scalars['Boolean']>,
  graphqlPluralName?: Maybe<Scalars['String']>,
  graphqlSingleName?: Maybe<Scalars['String']>,
  hasArchive?: Maybe<Scalars['Boolean']>,
  hierarchical?: Maybe<Scalars['Boolean']>,
  id: Scalars['ID'],
  isRestricted?: Maybe<Scalars['Boolean']>,
  label?: Maybe<Scalars['String']>,
  labels?: Maybe<GraphCms_PostTypeLabelDetails>,
  menuIcon?: Maybe<Scalars['String']>,
  menuPosition?: Maybe<Scalars['Int']>,
  name?: Maybe<Scalars['String']>,
  public?: Maybe<Scalars['Boolean']>,
  publiclyQueryable?: Maybe<Scalars['Boolean']>,
  restBase?: Maybe<Scalars['String']>,
  restControllerClass?: Maybe<Scalars['String']>,
  showInAdminBar?: Maybe<Scalars['Boolean']>,
  showInGraphql?: Maybe<Scalars['Boolean']>,
  showInMenu?: Maybe<Scalars['Boolean']>,
  showInNavMenus?: Maybe<Scalars['Boolean']>,
  showInRest?: Maybe<Scalars['Boolean']>,
  showUi?: Maybe<Scalars['Boolean']>,
};


export type GraphCms_PostTypeConnectedTaxonomiesArgs = {
  taxonomies?: Maybe<Array<Maybe<GraphCms_TaxonomyEnum>>>
};


export type GraphCms_PostTypeConnectedTaxonomyNamesArgs = {
  taxonomies?: Maybe<Array<Maybe<GraphCms_TaxonomyEnum>>>
};

export enum GraphCms_PostTypeEnum {
  Attachment = 'ATTACHMENT',
  Page = 'PAGE',
  Post = 'POST'
}

export type GraphCms_PostTypeLabelDetails = {
   __typename?: 'GraphCMS_PostTypeLabelDetails',
  addNew?: Maybe<Scalars['String']>,
  addNewItem?: Maybe<Scalars['String']>,
  allItems?: Maybe<Scalars['String']>,
  archives?: Maybe<Scalars['String']>,
  attributes?: Maybe<Scalars['String']>,
  editItem?: Maybe<Scalars['String']>,
  featuredImage?: Maybe<Scalars['String']>,
  filterItemsList?: Maybe<Scalars['String']>,
  insertIntoItem?: Maybe<Scalars['String']>,
  itemsList?: Maybe<Scalars['String']>,
  itemsListNavigation?: Maybe<Scalars['String']>,
  menuName?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  newItem?: Maybe<Scalars['String']>,
  notFound?: Maybe<Scalars['String']>,
  notFoundInTrash?: Maybe<Scalars['String']>,
  parentItemColon?: Maybe<Scalars['String']>,
  removeFeaturedImage?: Maybe<Scalars['String']>,
  searchItems?: Maybe<Scalars['String']>,
  setFeaturedImage?: Maybe<Scalars['String']>,
  singularName?: Maybe<Scalars['String']>,
  uploadedToThisItem?: Maybe<Scalars['String']>,
  useFeaturedImage?: Maybe<Scalars['String']>,
  viewItem?: Maybe<Scalars['String']>,
  viewItems?: Maybe<Scalars['String']>,
};

export enum GraphCms_PostTypeOrderByEnum {
  Date = 'DATE',
  In = 'IN',
  MenuOrder = 'MENU_ORDER',
  Modified = 'MODIFIED',
  NameIn = 'NAME_IN',
  Parent = 'PARENT',
  Slug = 'SLUG'
}

export type GraphCms_PostTypeOrderbyInput = {
  field: GraphCms_PostTypeOrderByEnum,
  order?: Maybe<GraphCms_OrderEnum>,
};

export enum GraphCms_PricingFieldFormatEnum {
  Formatted = 'FORMATTED',
  Raw = 'RAW'
}

export type GraphCms_Product = {
  attributes?: Maybe<GraphCms_ProductToProductAttributeConnection>,
  averageRating?: Maybe<Scalars['Float']>,
  catalogVisibility?: Maybe<GraphCms_CatalogVisibilityEnum>,
  date?: Maybe<Scalars['String']>,
  dateOnSaleFrom?: Maybe<Scalars['String']>,
  dateOnSaleTo?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  featured?: Maybe<Scalars['Boolean']>,
  galleryImages?: Maybe<GraphCms_ProductToMediaItemConnection>,
  id: Scalars['ID'],
  image?: Maybe<GraphCms_MediaItem>,
  link?: Maybe<Scalars['String']>,
  menuOrder?: Maybe<Scalars['Int']>,
  modified?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  onSale?: Maybe<Scalars['Boolean']>,
  paHinds?: Maybe<GraphCms_ProductToPaHindConnection>,
  paHulks?: Maybe<GraphCms_ProductToPaHulkConnection>,
  paKasutusaegs?: Maybe<GraphCms_ProductToPaKasutusaegConnection>,
  paKoguses?: Maybe<GraphCms_ProductToPaKogusConnection>,
  paKontuurs?: Maybe<GraphCms_ProductToPaKontuurConnection>,
  paKoostisaineds?: Maybe<GraphCms_ProductToPaKoostisainedConnection>,
  paLaadimisaegs?: Maybe<GraphCms_ProductToPaLaadimisaegConnection>,
  paMaterjals?: Maybe<GraphCms_ProductToPaMaterjalConnection>,
  paMuratasas?: Maybe<GraphCms_ProductToPaMuratasaConnection>,
  paOhutuses?: Maybe<GraphCms_ProductToPaOhutusConnection>,
  paPatareids?: Maybe<GraphCms_ProductToPaPatareidConnection>,
  paSuuruses?: Maybe<GraphCms_ProductToPaSuurusConnection>,
  paVariants?: Maybe<GraphCms_ProductToPaVariantConnection>,
  paVarvs?: Maybe<GraphCms_ProductToPaVarvConnection>,
  paVeekindluses?: Maybe<GraphCms_ProductToPaVeekindlusConnection>,
  parent?: Maybe<GraphCms_Product>,
  productCategories?: Maybe<GraphCms_ProductToProductCategoryConnection>,
  productId?: Maybe<Scalars['Int']>,
  productTags?: Maybe<GraphCms_ProductToProductTagConnection>,
  productTypes?: Maybe<GraphCms_ProductToProductTypeConnection>,
  purchasable?: Maybe<Scalars['Boolean']>,
  purchaseNote?: Maybe<Scalars['String']>,
  related?: Maybe<GraphCms_ProductToProductConnection>,
  reviewCount?: Maybe<Scalars['Int']>,
  reviewsAllowed?: Maybe<Scalars['Boolean']>,
  shippingClasses?: Maybe<GraphCms_ProductToShippingClassConnection>,
  shortDescription?: Maybe<Scalars['String']>,
  sku?: Maybe<Scalars['String']>,
  slug?: Maybe<Scalars['String']>,
  status?: Maybe<Scalars['String']>,
  totalSales?: Maybe<Scalars['Int']>,
  type?: Maybe<GraphCms_ProductTypesEnum>,
  upsell?: Maybe<GraphCms_ProductToProductConnection>,
  visibleProducts?: Maybe<GraphCms_ProductToVisibleProductConnection>,
};


export type GraphCms_ProductAttributesArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>
};


export type GraphCms_ProductDescriptionArgs = {
  format?: Maybe<GraphCms_PostObjectFieldFormatEnum>
};


export type GraphCms_ProductGalleryImagesArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  where?: Maybe<GraphCms_ProductToMediaItemConnectionWhereArgs>
};


export type GraphCms_ProductPaHindsArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  where?: Maybe<GraphCms_ProductToPaHindConnectionWhereArgs>
};


export type GraphCms_ProductPaHulksArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  where?: Maybe<GraphCms_ProductToPaHulkConnectionWhereArgs>
};


export type GraphCms_ProductPaKasutusaegsArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  where?: Maybe<GraphCms_ProductToPaKasutusaegConnectionWhereArgs>
};


export type GraphCms_ProductPaKogusesArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  where?: Maybe<GraphCms_ProductToPaKogusConnectionWhereArgs>
};


export type GraphCms_ProductPaKontuursArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  where?: Maybe<GraphCms_ProductToPaKontuurConnectionWhereArgs>
};


export type GraphCms_ProductPaKoostisainedsArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  where?: Maybe<GraphCms_ProductToPaKoostisainedConnectionWhereArgs>
};


export type GraphCms_ProductPaLaadimisaegsArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  where?: Maybe<GraphCms_ProductToPaLaadimisaegConnectionWhereArgs>
};


export type GraphCms_ProductPaMaterjalsArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  where?: Maybe<GraphCms_ProductToPaMaterjalConnectionWhereArgs>
};


export type GraphCms_ProductPaMuratasasArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  where?: Maybe<GraphCms_ProductToPaMuratasaConnectionWhereArgs>
};


export type GraphCms_ProductPaOhutusesArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  where?: Maybe<GraphCms_ProductToPaOhutusConnectionWhereArgs>
};


export type GraphCms_ProductPaPatareidsArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  where?: Maybe<GraphCms_ProductToPaPatareidConnectionWhereArgs>
};


export type GraphCms_ProductPaSuurusesArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  where?: Maybe<GraphCms_ProductToPaSuurusConnectionWhereArgs>
};


export type GraphCms_ProductPaVariantsArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  where?: Maybe<GraphCms_ProductToPaVariantConnectionWhereArgs>
};


export type GraphCms_ProductPaVarvsArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  where?: Maybe<GraphCms_ProductToPaVarvConnectionWhereArgs>
};


export type GraphCms_ProductPaVeekindlusesArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  where?: Maybe<GraphCms_ProductToPaVeekindlusConnectionWhereArgs>
};


export type GraphCms_ProductProductCategoriesArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  where?: Maybe<GraphCms_ProductToProductCategoryConnectionWhereArgs>
};


export type GraphCms_ProductProductTagsArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  where?: Maybe<GraphCms_ProductToProductTagConnectionWhereArgs>
};


export type GraphCms_ProductProductTypesArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  where?: Maybe<GraphCms_ProductToProductTypeConnectionWhereArgs>
};


export type GraphCms_ProductRelatedArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  where?: Maybe<GraphCms_ProductToProductConnectionWhereArgs>
};


export type GraphCms_ProductShippingClassesArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  where?: Maybe<GraphCms_ProductToShippingClassConnectionWhereArgs>
};


export type GraphCms_ProductShortDescriptionArgs = {
  format?: Maybe<GraphCms_PostObjectFieldFormatEnum>
};


export type GraphCms_ProductUpsellArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  where?: Maybe<GraphCms_ProductToProductConnectionWhereArgs>
};


export type GraphCms_ProductVisibleProductsArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  where?: Maybe<GraphCms_ProductToVisibleProductConnectionWhereArgs>
};

export type GraphCms_ProductAttribute = {
   __typename?: 'GraphCMS_ProductAttribute',
  attributeId: Scalars['Int'],
  id: Scalars['ID'],
  name: Scalars['String'],
  options?: Maybe<Array<Maybe<Scalars['String']>>>,
  position: Scalars['Int'],
  variation: Scalars['Boolean'],
  visible: Scalars['Boolean'],
};

export type GraphCms_ProductAttributeInput = {
  attribute: Scalars['String'],
  attributeTerm: Scalars['String'],
};

export type GraphCms_ProductCategory = GraphCms_Node & {
   __typename?: 'GraphCMS_ProductCategory',
  ancestors?: Maybe<Array<Maybe<GraphCms_ProductCategory>>>,
  children?: Maybe<GraphCms_ProductCategoryToProductCategoryConnection>,
  count?: Maybe<Scalars['Int']>,
  description?: Maybe<Scalars['String']>,
  id: Scalars['ID'],
  image?: Maybe<GraphCms_MediaItem>,
  isRestricted?: Maybe<Scalars['Boolean']>,
  link?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  parent?: Maybe<GraphCms_ProductCategory>,
  productCategoryId?: Maybe<Scalars['Int']>,
  products?: Maybe<GraphCms_ProductCategoryToProductConnection>,
  slug?: Maybe<Scalars['String']>,
  taxonomy?: Maybe<GraphCms_Taxonomy>,
  termGroupId?: Maybe<Scalars['Int']>,
  termTaxonomyId?: Maybe<Scalars['Int']>,
};


export type GraphCms_ProductCategoryChildrenArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  where?: Maybe<GraphCms_ProductCategoryToProductCategoryConnectionWhereArgs>
};


export type GraphCms_ProductCategoryProductsArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  where?: Maybe<GraphCms_ProductCategoryToProductConnectionWhereArgs>
};

export type GraphCms_ProductCategoryToProductCategoryConnection = {
   __typename?: 'GraphCMS_ProductCategoryToProductCategoryConnection',
  edges?: Maybe<Array<Maybe<GraphCms_ProductCategoryToProductCategoryConnectionEdge>>>,
  nodes?: Maybe<Array<Maybe<GraphCms_ProductCategory>>>,
  pageInfo?: Maybe<GraphCms_WpPageInfo>,
  taxonomyInfo?: Maybe<GraphCms_Taxonomy>,
};

export type GraphCms_ProductCategoryToProductCategoryConnectionEdge = {
   __typename?: 'GraphCMS_ProductCategoryToProductCategoryConnectionEdge',
  cursor?: Maybe<Scalars['String']>,
  node?: Maybe<GraphCms_ProductCategory>,
};

export type GraphCms_ProductCategoryToProductCategoryConnectionWhereArgs = {
  cacheDomain?: Maybe<Scalars['String']>,
  childOf?: Maybe<Scalars['Int']>,
  childless?: Maybe<Scalars['Boolean']>,
  descriptionLike?: Maybe<Scalars['String']>,
  exclude?: Maybe<Array<Maybe<Scalars['ID']>>>,
  excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>,
  hideEmpty?: Maybe<Scalars['Boolean']>,
  hierarchical?: Maybe<Scalars['Boolean']>,
  include?: Maybe<Array<Maybe<Scalars['ID']>>>,
  name?: Maybe<Array<Maybe<Scalars['String']>>>,
  nameLike?: Maybe<Scalars['String']>,
  objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>,
  orderby?: Maybe<GraphCms_TermObjectsConnectionOrderbyEnum>,
  padCounts?: Maybe<Scalars['Boolean']>,
  parent?: Maybe<Scalars['Int']>,
  search?: Maybe<Scalars['String']>,
  shouldOnlyIncludeConnectedItems?: Maybe<Scalars['Boolean']>,
  shouldOutputInFlatList?: Maybe<Scalars['Boolean']>,
  slug?: Maybe<Array<Maybe<Scalars['String']>>>,
  termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>,
  updateTermMetaCache?: Maybe<Scalars['Boolean']>,
};

export type GraphCms_ProductCategoryToProductConnection = {
   __typename?: 'GraphCMS_ProductCategoryToProductConnection',
  edges?: Maybe<Array<Maybe<GraphCms_ProductCategoryToProductConnectionEdge>>>,
  nodes?: Maybe<Array<Maybe<GraphCms_Product>>>,
  pageInfo?: Maybe<GraphCms_WpPageInfo>,
};

export type GraphCms_ProductCategoryToProductConnectionEdge = {
   __typename?: 'GraphCMS_ProductCategoryToProductConnectionEdge',
  cursor?: Maybe<Scalars['String']>,
  node?: Maybe<GraphCms_Product>,
};

export type GraphCms_ProductCategoryToProductConnectionWhereArgs = {
  attribute?: Maybe<Scalars['String']>,
  attributeTerm?: Maybe<Scalars['String']>,
  category?: Maybe<Scalars['String']>,
  categoryId?: Maybe<Scalars['Int']>,
  categoryIdIn?: Maybe<Array<Maybe<Scalars['Int']>>>,
  categoryIdNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>,
  categoryIn?: Maybe<Array<Maybe<Scalars['String']>>>,
  categoryNotIn?: Maybe<Array<Maybe<Scalars['String']>>>,
  dateQuery?: Maybe<GraphCms_DateQueryInput>,
  exclude?: Maybe<Array<Maybe<Scalars['Int']>>>,
  featured?: Maybe<Scalars['Boolean']>,
  include?: Maybe<Array<Maybe<Scalars['Int']>>>,
  maxPrice?: Maybe<Scalars['Float']>,
  minPrice?: Maybe<Scalars['Float']>,
  onSale?: Maybe<Scalars['Boolean']>,
  orderby?: Maybe<Array<Maybe<GraphCms_ProductsOrderbyInput>>>,
  parent?: Maybe<Scalars['Int']>,
  parentIn?: Maybe<Array<Maybe<Scalars['Int']>>>,
  parentNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>,
  search?: Maybe<Scalars['String']>,
  shippingClassId?: Maybe<Scalars['Int']>,
  sku?: Maybe<Scalars['String']>,
  slug?: Maybe<Scalars['String']>,
  status?: Maybe<Scalars['String']>,
  stockStatus?: Maybe<Array<Maybe<GraphCms_StockStatusEnum>>>,
  tag?: Maybe<Scalars['String']>,
  tagId?: Maybe<Scalars['Int']>,
  tagIdIn?: Maybe<Array<Maybe<Scalars['Int']>>>,
  tagIdNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>,
  tagIn?: Maybe<Array<Maybe<Scalars['String']>>>,
  tagNotIn?: Maybe<Array<Maybe<Scalars['String']>>>,
  taxClass?: Maybe<GraphCms_TaxClassEnum>,
  taxonomyFilter?: Maybe<Array<Maybe<GraphCms_ProductTaxonomyFilterRelationInput>>>,
  type?: Maybe<GraphCms_ProductTypesEnum>,
  typeIn?: Maybe<Array<Maybe<GraphCms_ProductTypesEnum>>>,
  typeNotIn?: Maybe<Array<Maybe<GraphCms_ProductTypesEnum>>>,
  visibility?: Maybe<GraphCms_CatalogVisibilityEnum>,
};

export type GraphCms_ProductDownload = {
   __typename?: 'GraphCMS_ProductDownload',
  allowedFileType?: Maybe<Scalars['Boolean']>,
  downloadId: Scalars['String'],
  file?: Maybe<Scalars['String']>,
  fileExists?: Maybe<Scalars['Boolean']>,
  fileExt?: Maybe<Scalars['String']>,
  filePathType?: Maybe<Scalars['String']>,
  fileType?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
};

export enum GraphCms_ProductsOrderByEnum {
  Date = 'DATE',
  In = 'IN',
  MenuOrder = 'MENU_ORDER',
  Modified = 'MODIFIED',
  NameIn = 'NAME_IN',
  OnSaleFrom = 'ON_SALE_FROM',
  OnSaleTo = 'ON_SALE_TO',
  Parent = 'PARENT',
  Price = 'PRICE',
  Rating = 'RATING',
  RegularPrice = 'REGULAR_PRICE',
  ReviewCount = 'REVIEW_COUNT',
  SalePrice = 'SALE_PRICE',
  Slug = 'SLUG',
  TotalSales = 'TOTAL_SALES'
}

export type GraphCms_ProductsOrderbyInput = {
  field: GraphCms_ProductsOrderByEnum,
  order?: Maybe<GraphCms_OrderEnum>,
};

export type GraphCms_ProductTag = GraphCms_Node & {
   __typename?: 'GraphCMS_ProductTag',
  count?: Maybe<Scalars['Int']>,
  description?: Maybe<Scalars['String']>,
  id: Scalars['ID'],
  isRestricted?: Maybe<Scalars['Boolean']>,
  link?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  productTagId?: Maybe<Scalars['Int']>,
  products?: Maybe<GraphCms_ProductTagToProductConnection>,
  slug?: Maybe<Scalars['String']>,
  taxonomy?: Maybe<GraphCms_Taxonomy>,
  termGroupId?: Maybe<Scalars['Int']>,
  termTaxonomyId?: Maybe<Scalars['Int']>,
};


export type GraphCms_ProductTagProductsArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  where?: Maybe<GraphCms_ProductTagToProductConnectionWhereArgs>
};

export type GraphCms_ProductTagToProductConnection = {
   __typename?: 'GraphCMS_ProductTagToProductConnection',
  edges?: Maybe<Array<Maybe<GraphCms_ProductTagToProductConnectionEdge>>>,
  nodes?: Maybe<Array<Maybe<GraphCms_Product>>>,
  pageInfo?: Maybe<GraphCms_WpPageInfo>,
};

export type GraphCms_ProductTagToProductConnectionEdge = {
   __typename?: 'GraphCMS_ProductTagToProductConnectionEdge',
  cursor?: Maybe<Scalars['String']>,
  node?: Maybe<GraphCms_Product>,
};

export type GraphCms_ProductTagToProductConnectionWhereArgs = {
  attribute?: Maybe<Scalars['String']>,
  attributeTerm?: Maybe<Scalars['String']>,
  category?: Maybe<Scalars['String']>,
  categoryId?: Maybe<Scalars['Int']>,
  categoryIdIn?: Maybe<Array<Maybe<Scalars['Int']>>>,
  categoryIdNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>,
  categoryIn?: Maybe<Array<Maybe<Scalars['String']>>>,
  categoryNotIn?: Maybe<Array<Maybe<Scalars['String']>>>,
  dateQuery?: Maybe<GraphCms_DateQueryInput>,
  exclude?: Maybe<Array<Maybe<Scalars['Int']>>>,
  featured?: Maybe<Scalars['Boolean']>,
  include?: Maybe<Array<Maybe<Scalars['Int']>>>,
  maxPrice?: Maybe<Scalars['Float']>,
  minPrice?: Maybe<Scalars['Float']>,
  onSale?: Maybe<Scalars['Boolean']>,
  orderby?: Maybe<Array<Maybe<GraphCms_ProductsOrderbyInput>>>,
  parent?: Maybe<Scalars['Int']>,
  parentIn?: Maybe<Array<Maybe<Scalars['Int']>>>,
  parentNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>,
  search?: Maybe<Scalars['String']>,
  shippingClassId?: Maybe<Scalars['Int']>,
  sku?: Maybe<Scalars['String']>,
  slug?: Maybe<Scalars['String']>,
  status?: Maybe<Scalars['String']>,
  stockStatus?: Maybe<Array<Maybe<GraphCms_StockStatusEnum>>>,
  tag?: Maybe<Scalars['String']>,
  tagId?: Maybe<Scalars['Int']>,
  tagIdIn?: Maybe<Array<Maybe<Scalars['Int']>>>,
  tagIdNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>,
  tagIn?: Maybe<Array<Maybe<Scalars['String']>>>,
  tagNotIn?: Maybe<Array<Maybe<Scalars['String']>>>,
  taxClass?: Maybe<GraphCms_TaxClassEnum>,
  taxonomyFilter?: Maybe<Array<Maybe<GraphCms_ProductTaxonomyFilterRelationInput>>>,
  type?: Maybe<GraphCms_ProductTypesEnum>,
  typeIn?: Maybe<Array<Maybe<GraphCms_ProductTypesEnum>>>,
  typeNotIn?: Maybe<Array<Maybe<GraphCms_ProductTypesEnum>>>,
  visibility?: Maybe<GraphCms_CatalogVisibilityEnum>,
};

export enum GraphCms_ProductTaxonomyEnum {
  Pahind = 'PAHIND',
  Pahulk = 'PAHULK',
  Pakasutusaeg = 'PAKASUTUSAEG',
  Pakogus = 'PAKOGUS',
  Pakontuur = 'PAKONTUUR',
  Pakoostisained = 'PAKOOSTISAINED',
  Palaadimisaeg = 'PALAADIMISAEG',
  Pamaterjal = 'PAMATERJAL',
  Pamuratasa = 'PAMURATASA',
  Paohutus = 'PAOHUTUS',
  Papatareid = 'PAPATAREID',
  Pasuurus = 'PASUURUS',
  Pavariant = 'PAVARIANT',
  Pavarv = 'PAVARV',
  Paveekindlus = 'PAVEEKINDLUS',
  Productcategory = 'PRODUCTCATEGORY',
  Producttag = 'PRODUCTTAG',
  Producttype = 'PRODUCTTYPE',
  Shippingclass = 'SHIPPINGCLASS',
  Visibleproduct = 'VISIBLEPRODUCT'
}

export type GraphCms_ProductTaxonomyFilterInput = {
  ids?: Maybe<Array<Maybe<Scalars['Int']>>>,
  operator?: Maybe<GraphCms_TaxonomyOperatorEnum>,
  taxonomy: GraphCms_ProductTaxonomyEnum,
  terms?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type GraphCms_ProductTaxonomyFilterRelationInput = {
  and?: Maybe<Array<Maybe<GraphCms_ProductTaxonomyFilterInput>>>,
  or?: Maybe<Array<Maybe<GraphCms_ProductTaxonomyFilterInput>>>,
};

export type GraphCms_ProductToMediaItemConnection = {
   __typename?: 'GraphCMS_ProductToMediaItemConnection',
  edges?: Maybe<Array<Maybe<GraphCms_ProductToMediaItemConnectionEdge>>>,
  nodes?: Maybe<Array<Maybe<GraphCms_MediaItem>>>,
  pageInfo?: Maybe<GraphCms_WpPageInfo>,
  postTypeInfo?: Maybe<GraphCms_PostType>,
};

export type GraphCms_ProductToMediaItemConnectionEdge = {
   __typename?: 'GraphCMS_ProductToMediaItemConnectionEdge',
  cursor?: Maybe<Scalars['String']>,
  node?: Maybe<GraphCms_MediaItem>,
};

export type GraphCms_ProductToMediaItemConnectionWhereArgs = {
  author?: Maybe<Scalars['Int']>,
  authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>,
  authorName?: Maybe<Scalars['String']>,
  authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>,
  categoryId?: Maybe<Scalars['Int']>,
  categoryIn?: Maybe<Array<Maybe<Scalars['ID']>>>,
  categoryName?: Maybe<Scalars['String']>,
  categoryNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>,
  dateQuery?: Maybe<GraphCms_DateQueryInput>,
  hasPassword?: Maybe<Scalars['Boolean']>,
  id?: Maybe<Scalars['Int']>,
  in?: Maybe<Array<Maybe<Scalars['ID']>>>,
  mimeType?: Maybe<GraphCms_MimeTypeEnum>,
  name?: Maybe<Scalars['String']>,
  nameIn?: Maybe<Array<Maybe<Scalars['String']>>>,
  notIn?: Maybe<Array<Maybe<Scalars['ID']>>>,
  orderby?: Maybe<Array<Maybe<GraphCms_PostObjectsConnectionOrderbyInput>>>,
  parent?: Maybe<Scalars['String']>,
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>,
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>,
  password?: Maybe<Scalars['String']>,
  search?: Maybe<Scalars['String']>,
  stati?: Maybe<Array<Maybe<GraphCms_PostStatusEnum>>>,
  status?: Maybe<GraphCms_PostStatusEnum>,
  tag?: Maybe<Scalars['String']>,
  tagId?: Maybe<Scalars['String']>,
  tagIn?: Maybe<Array<Maybe<Scalars['ID']>>>,
  tagNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>,
  tagSlugAnd?: Maybe<Array<Maybe<Scalars['String']>>>,
  tagSlugIn?: Maybe<Array<Maybe<Scalars['String']>>>,
  title?: Maybe<Scalars['String']>,
};

export type GraphCms_ProductToPaHindConnection = {
   __typename?: 'GraphCMS_ProductToPaHindConnection',
  edges?: Maybe<Array<Maybe<GraphCms_ProductToPaHindConnectionEdge>>>,
  nodes?: Maybe<Array<Maybe<GraphCms_PaHind>>>,
  pageInfo?: Maybe<GraphCms_WpPageInfo>,
  taxonomyInfo?: Maybe<GraphCms_Taxonomy>,
};

export type GraphCms_ProductToPaHindConnectionEdge = {
   __typename?: 'GraphCMS_ProductToPaHindConnectionEdge',
  cursor?: Maybe<Scalars['String']>,
  node?: Maybe<GraphCms_PaHind>,
};

export type GraphCms_ProductToPaHindConnectionWhereArgs = {
  cacheDomain?: Maybe<Scalars['String']>,
  childOf?: Maybe<Scalars['Int']>,
  childless?: Maybe<Scalars['Boolean']>,
  descriptionLike?: Maybe<Scalars['String']>,
  exclude?: Maybe<Array<Maybe<Scalars['ID']>>>,
  excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>,
  hideEmpty?: Maybe<Scalars['Boolean']>,
  hierarchical?: Maybe<Scalars['Boolean']>,
  include?: Maybe<Array<Maybe<Scalars['ID']>>>,
  name?: Maybe<Array<Maybe<Scalars['String']>>>,
  nameLike?: Maybe<Scalars['String']>,
  objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>,
  orderby?: Maybe<GraphCms_TermObjectsConnectionOrderbyEnum>,
  padCounts?: Maybe<Scalars['Boolean']>,
  parent?: Maybe<Scalars['Int']>,
  search?: Maybe<Scalars['String']>,
  shouldOnlyIncludeConnectedItems?: Maybe<Scalars['Boolean']>,
  shouldOutputInFlatList?: Maybe<Scalars['Boolean']>,
  slug?: Maybe<Array<Maybe<Scalars['String']>>>,
  termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>,
  updateTermMetaCache?: Maybe<Scalars['Boolean']>,
};

export type GraphCms_ProductToPaHulkConnection = {
   __typename?: 'GraphCMS_ProductToPaHulkConnection',
  edges?: Maybe<Array<Maybe<GraphCms_ProductToPaHulkConnectionEdge>>>,
  nodes?: Maybe<Array<Maybe<GraphCms_PaHulk>>>,
  pageInfo?: Maybe<GraphCms_WpPageInfo>,
  taxonomyInfo?: Maybe<GraphCms_Taxonomy>,
};

export type GraphCms_ProductToPaHulkConnectionEdge = {
   __typename?: 'GraphCMS_ProductToPaHulkConnectionEdge',
  cursor?: Maybe<Scalars['String']>,
  node?: Maybe<GraphCms_PaHulk>,
};

export type GraphCms_ProductToPaHulkConnectionWhereArgs = {
  cacheDomain?: Maybe<Scalars['String']>,
  childOf?: Maybe<Scalars['Int']>,
  childless?: Maybe<Scalars['Boolean']>,
  descriptionLike?: Maybe<Scalars['String']>,
  exclude?: Maybe<Array<Maybe<Scalars['ID']>>>,
  excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>,
  hideEmpty?: Maybe<Scalars['Boolean']>,
  hierarchical?: Maybe<Scalars['Boolean']>,
  include?: Maybe<Array<Maybe<Scalars['ID']>>>,
  name?: Maybe<Array<Maybe<Scalars['String']>>>,
  nameLike?: Maybe<Scalars['String']>,
  objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>,
  orderby?: Maybe<GraphCms_TermObjectsConnectionOrderbyEnum>,
  padCounts?: Maybe<Scalars['Boolean']>,
  parent?: Maybe<Scalars['Int']>,
  search?: Maybe<Scalars['String']>,
  shouldOnlyIncludeConnectedItems?: Maybe<Scalars['Boolean']>,
  shouldOutputInFlatList?: Maybe<Scalars['Boolean']>,
  slug?: Maybe<Array<Maybe<Scalars['String']>>>,
  termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>,
  updateTermMetaCache?: Maybe<Scalars['Boolean']>,
};

export type GraphCms_ProductToPaKasutusaegConnection = {
   __typename?: 'GraphCMS_ProductToPaKasutusaegConnection',
  edges?: Maybe<Array<Maybe<GraphCms_ProductToPaKasutusaegConnectionEdge>>>,
  nodes?: Maybe<Array<Maybe<GraphCms_PaKasutusaeg>>>,
  pageInfo?: Maybe<GraphCms_WpPageInfo>,
  taxonomyInfo?: Maybe<GraphCms_Taxonomy>,
};

export type GraphCms_ProductToPaKasutusaegConnectionEdge = {
   __typename?: 'GraphCMS_ProductToPaKasutusaegConnectionEdge',
  cursor?: Maybe<Scalars['String']>,
  node?: Maybe<GraphCms_PaKasutusaeg>,
};

export type GraphCms_ProductToPaKasutusaegConnectionWhereArgs = {
  cacheDomain?: Maybe<Scalars['String']>,
  childOf?: Maybe<Scalars['Int']>,
  childless?: Maybe<Scalars['Boolean']>,
  descriptionLike?: Maybe<Scalars['String']>,
  exclude?: Maybe<Array<Maybe<Scalars['ID']>>>,
  excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>,
  hideEmpty?: Maybe<Scalars['Boolean']>,
  hierarchical?: Maybe<Scalars['Boolean']>,
  include?: Maybe<Array<Maybe<Scalars['ID']>>>,
  name?: Maybe<Array<Maybe<Scalars['String']>>>,
  nameLike?: Maybe<Scalars['String']>,
  objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>,
  orderby?: Maybe<GraphCms_TermObjectsConnectionOrderbyEnum>,
  padCounts?: Maybe<Scalars['Boolean']>,
  parent?: Maybe<Scalars['Int']>,
  search?: Maybe<Scalars['String']>,
  shouldOnlyIncludeConnectedItems?: Maybe<Scalars['Boolean']>,
  shouldOutputInFlatList?: Maybe<Scalars['Boolean']>,
  slug?: Maybe<Array<Maybe<Scalars['String']>>>,
  termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>,
  updateTermMetaCache?: Maybe<Scalars['Boolean']>,
};

export type GraphCms_ProductToPaKogusConnection = {
   __typename?: 'GraphCMS_ProductToPaKogusConnection',
  edges?: Maybe<Array<Maybe<GraphCms_ProductToPaKogusConnectionEdge>>>,
  nodes?: Maybe<Array<Maybe<GraphCms_PaKogus>>>,
  pageInfo?: Maybe<GraphCms_WpPageInfo>,
  taxonomyInfo?: Maybe<GraphCms_Taxonomy>,
};

export type GraphCms_ProductToPaKogusConnectionEdge = {
   __typename?: 'GraphCMS_ProductToPaKogusConnectionEdge',
  cursor?: Maybe<Scalars['String']>,
  node?: Maybe<GraphCms_PaKogus>,
};

export type GraphCms_ProductToPaKogusConnectionWhereArgs = {
  cacheDomain?: Maybe<Scalars['String']>,
  childOf?: Maybe<Scalars['Int']>,
  childless?: Maybe<Scalars['Boolean']>,
  descriptionLike?: Maybe<Scalars['String']>,
  exclude?: Maybe<Array<Maybe<Scalars['ID']>>>,
  excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>,
  hideEmpty?: Maybe<Scalars['Boolean']>,
  hierarchical?: Maybe<Scalars['Boolean']>,
  include?: Maybe<Array<Maybe<Scalars['ID']>>>,
  name?: Maybe<Array<Maybe<Scalars['String']>>>,
  nameLike?: Maybe<Scalars['String']>,
  objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>,
  orderby?: Maybe<GraphCms_TermObjectsConnectionOrderbyEnum>,
  padCounts?: Maybe<Scalars['Boolean']>,
  parent?: Maybe<Scalars['Int']>,
  search?: Maybe<Scalars['String']>,
  shouldOnlyIncludeConnectedItems?: Maybe<Scalars['Boolean']>,
  shouldOutputInFlatList?: Maybe<Scalars['Boolean']>,
  slug?: Maybe<Array<Maybe<Scalars['String']>>>,
  termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>,
  updateTermMetaCache?: Maybe<Scalars['Boolean']>,
};

export type GraphCms_ProductToPaKontuurConnection = {
   __typename?: 'GraphCMS_ProductToPaKontuurConnection',
  edges?: Maybe<Array<Maybe<GraphCms_ProductToPaKontuurConnectionEdge>>>,
  nodes?: Maybe<Array<Maybe<GraphCms_PaKontuur>>>,
  pageInfo?: Maybe<GraphCms_WpPageInfo>,
  taxonomyInfo?: Maybe<GraphCms_Taxonomy>,
};

export type GraphCms_ProductToPaKontuurConnectionEdge = {
   __typename?: 'GraphCMS_ProductToPaKontuurConnectionEdge',
  cursor?: Maybe<Scalars['String']>,
  node?: Maybe<GraphCms_PaKontuur>,
};

export type GraphCms_ProductToPaKontuurConnectionWhereArgs = {
  cacheDomain?: Maybe<Scalars['String']>,
  childOf?: Maybe<Scalars['Int']>,
  childless?: Maybe<Scalars['Boolean']>,
  descriptionLike?: Maybe<Scalars['String']>,
  exclude?: Maybe<Array<Maybe<Scalars['ID']>>>,
  excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>,
  hideEmpty?: Maybe<Scalars['Boolean']>,
  hierarchical?: Maybe<Scalars['Boolean']>,
  include?: Maybe<Array<Maybe<Scalars['ID']>>>,
  name?: Maybe<Array<Maybe<Scalars['String']>>>,
  nameLike?: Maybe<Scalars['String']>,
  objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>,
  orderby?: Maybe<GraphCms_TermObjectsConnectionOrderbyEnum>,
  padCounts?: Maybe<Scalars['Boolean']>,
  parent?: Maybe<Scalars['Int']>,
  search?: Maybe<Scalars['String']>,
  shouldOnlyIncludeConnectedItems?: Maybe<Scalars['Boolean']>,
  shouldOutputInFlatList?: Maybe<Scalars['Boolean']>,
  slug?: Maybe<Array<Maybe<Scalars['String']>>>,
  termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>,
  updateTermMetaCache?: Maybe<Scalars['Boolean']>,
};

export type GraphCms_ProductToPaKoostisainedConnection = {
   __typename?: 'GraphCMS_ProductToPaKoostisainedConnection',
  edges?: Maybe<Array<Maybe<GraphCms_ProductToPaKoostisainedConnectionEdge>>>,
  nodes?: Maybe<Array<Maybe<GraphCms_PaKoostisained>>>,
  pageInfo?: Maybe<GraphCms_WpPageInfo>,
  taxonomyInfo?: Maybe<GraphCms_Taxonomy>,
};

export type GraphCms_ProductToPaKoostisainedConnectionEdge = {
   __typename?: 'GraphCMS_ProductToPaKoostisainedConnectionEdge',
  cursor?: Maybe<Scalars['String']>,
  node?: Maybe<GraphCms_PaKoostisained>,
};

export type GraphCms_ProductToPaKoostisainedConnectionWhereArgs = {
  cacheDomain?: Maybe<Scalars['String']>,
  childOf?: Maybe<Scalars['Int']>,
  childless?: Maybe<Scalars['Boolean']>,
  descriptionLike?: Maybe<Scalars['String']>,
  exclude?: Maybe<Array<Maybe<Scalars['ID']>>>,
  excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>,
  hideEmpty?: Maybe<Scalars['Boolean']>,
  hierarchical?: Maybe<Scalars['Boolean']>,
  include?: Maybe<Array<Maybe<Scalars['ID']>>>,
  name?: Maybe<Array<Maybe<Scalars['String']>>>,
  nameLike?: Maybe<Scalars['String']>,
  objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>,
  orderby?: Maybe<GraphCms_TermObjectsConnectionOrderbyEnum>,
  padCounts?: Maybe<Scalars['Boolean']>,
  parent?: Maybe<Scalars['Int']>,
  search?: Maybe<Scalars['String']>,
  shouldOnlyIncludeConnectedItems?: Maybe<Scalars['Boolean']>,
  shouldOutputInFlatList?: Maybe<Scalars['Boolean']>,
  slug?: Maybe<Array<Maybe<Scalars['String']>>>,
  termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>,
  updateTermMetaCache?: Maybe<Scalars['Boolean']>,
};

export type GraphCms_ProductToPaLaadimisaegConnection = {
   __typename?: 'GraphCMS_ProductToPaLaadimisaegConnection',
  edges?: Maybe<Array<Maybe<GraphCms_ProductToPaLaadimisaegConnectionEdge>>>,
  nodes?: Maybe<Array<Maybe<GraphCms_PaLaadimisaeg>>>,
  pageInfo?: Maybe<GraphCms_WpPageInfo>,
  taxonomyInfo?: Maybe<GraphCms_Taxonomy>,
};

export type GraphCms_ProductToPaLaadimisaegConnectionEdge = {
   __typename?: 'GraphCMS_ProductToPaLaadimisaegConnectionEdge',
  cursor?: Maybe<Scalars['String']>,
  node?: Maybe<GraphCms_PaLaadimisaeg>,
};

export type GraphCms_ProductToPaLaadimisaegConnectionWhereArgs = {
  cacheDomain?: Maybe<Scalars['String']>,
  childOf?: Maybe<Scalars['Int']>,
  childless?: Maybe<Scalars['Boolean']>,
  descriptionLike?: Maybe<Scalars['String']>,
  exclude?: Maybe<Array<Maybe<Scalars['ID']>>>,
  excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>,
  hideEmpty?: Maybe<Scalars['Boolean']>,
  hierarchical?: Maybe<Scalars['Boolean']>,
  include?: Maybe<Array<Maybe<Scalars['ID']>>>,
  name?: Maybe<Array<Maybe<Scalars['String']>>>,
  nameLike?: Maybe<Scalars['String']>,
  objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>,
  orderby?: Maybe<GraphCms_TermObjectsConnectionOrderbyEnum>,
  padCounts?: Maybe<Scalars['Boolean']>,
  parent?: Maybe<Scalars['Int']>,
  search?: Maybe<Scalars['String']>,
  shouldOnlyIncludeConnectedItems?: Maybe<Scalars['Boolean']>,
  shouldOutputInFlatList?: Maybe<Scalars['Boolean']>,
  slug?: Maybe<Array<Maybe<Scalars['String']>>>,
  termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>,
  updateTermMetaCache?: Maybe<Scalars['Boolean']>,
};

export type GraphCms_ProductToPaMaterjalConnection = {
   __typename?: 'GraphCMS_ProductToPaMaterjalConnection',
  edges?: Maybe<Array<Maybe<GraphCms_ProductToPaMaterjalConnectionEdge>>>,
  nodes?: Maybe<Array<Maybe<GraphCms_PaMaterjal>>>,
  pageInfo?: Maybe<GraphCms_WpPageInfo>,
  taxonomyInfo?: Maybe<GraphCms_Taxonomy>,
};

export type GraphCms_ProductToPaMaterjalConnectionEdge = {
   __typename?: 'GraphCMS_ProductToPaMaterjalConnectionEdge',
  cursor?: Maybe<Scalars['String']>,
  node?: Maybe<GraphCms_PaMaterjal>,
};

export type GraphCms_ProductToPaMaterjalConnectionWhereArgs = {
  cacheDomain?: Maybe<Scalars['String']>,
  childOf?: Maybe<Scalars['Int']>,
  childless?: Maybe<Scalars['Boolean']>,
  descriptionLike?: Maybe<Scalars['String']>,
  exclude?: Maybe<Array<Maybe<Scalars['ID']>>>,
  excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>,
  hideEmpty?: Maybe<Scalars['Boolean']>,
  hierarchical?: Maybe<Scalars['Boolean']>,
  include?: Maybe<Array<Maybe<Scalars['ID']>>>,
  name?: Maybe<Array<Maybe<Scalars['String']>>>,
  nameLike?: Maybe<Scalars['String']>,
  objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>,
  orderby?: Maybe<GraphCms_TermObjectsConnectionOrderbyEnum>,
  padCounts?: Maybe<Scalars['Boolean']>,
  parent?: Maybe<Scalars['Int']>,
  search?: Maybe<Scalars['String']>,
  shouldOnlyIncludeConnectedItems?: Maybe<Scalars['Boolean']>,
  shouldOutputInFlatList?: Maybe<Scalars['Boolean']>,
  slug?: Maybe<Array<Maybe<Scalars['String']>>>,
  termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>,
  updateTermMetaCache?: Maybe<Scalars['Boolean']>,
};

export type GraphCms_ProductToPaMuratasaConnection = {
   __typename?: 'GraphCMS_ProductToPaMuratasaConnection',
  edges?: Maybe<Array<Maybe<GraphCms_ProductToPaMuratasaConnectionEdge>>>,
  nodes?: Maybe<Array<Maybe<GraphCms_PaMuratasa>>>,
  pageInfo?: Maybe<GraphCms_WpPageInfo>,
  taxonomyInfo?: Maybe<GraphCms_Taxonomy>,
};

export type GraphCms_ProductToPaMuratasaConnectionEdge = {
   __typename?: 'GraphCMS_ProductToPaMuratasaConnectionEdge',
  cursor?: Maybe<Scalars['String']>,
  node?: Maybe<GraphCms_PaMuratasa>,
};

export type GraphCms_ProductToPaMuratasaConnectionWhereArgs = {
  cacheDomain?: Maybe<Scalars['String']>,
  childOf?: Maybe<Scalars['Int']>,
  childless?: Maybe<Scalars['Boolean']>,
  descriptionLike?: Maybe<Scalars['String']>,
  exclude?: Maybe<Array<Maybe<Scalars['ID']>>>,
  excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>,
  hideEmpty?: Maybe<Scalars['Boolean']>,
  hierarchical?: Maybe<Scalars['Boolean']>,
  include?: Maybe<Array<Maybe<Scalars['ID']>>>,
  name?: Maybe<Array<Maybe<Scalars['String']>>>,
  nameLike?: Maybe<Scalars['String']>,
  objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>,
  orderby?: Maybe<GraphCms_TermObjectsConnectionOrderbyEnum>,
  padCounts?: Maybe<Scalars['Boolean']>,
  parent?: Maybe<Scalars['Int']>,
  search?: Maybe<Scalars['String']>,
  shouldOnlyIncludeConnectedItems?: Maybe<Scalars['Boolean']>,
  shouldOutputInFlatList?: Maybe<Scalars['Boolean']>,
  slug?: Maybe<Array<Maybe<Scalars['String']>>>,
  termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>,
  updateTermMetaCache?: Maybe<Scalars['Boolean']>,
};

export type GraphCms_ProductToPaOhutusConnection = {
   __typename?: 'GraphCMS_ProductToPaOhutusConnection',
  edges?: Maybe<Array<Maybe<GraphCms_ProductToPaOhutusConnectionEdge>>>,
  nodes?: Maybe<Array<Maybe<GraphCms_PaOhutus>>>,
  pageInfo?: Maybe<GraphCms_WpPageInfo>,
  taxonomyInfo?: Maybe<GraphCms_Taxonomy>,
};

export type GraphCms_ProductToPaOhutusConnectionEdge = {
   __typename?: 'GraphCMS_ProductToPaOhutusConnectionEdge',
  cursor?: Maybe<Scalars['String']>,
  node?: Maybe<GraphCms_PaOhutus>,
};

export type GraphCms_ProductToPaOhutusConnectionWhereArgs = {
  cacheDomain?: Maybe<Scalars['String']>,
  childOf?: Maybe<Scalars['Int']>,
  childless?: Maybe<Scalars['Boolean']>,
  descriptionLike?: Maybe<Scalars['String']>,
  exclude?: Maybe<Array<Maybe<Scalars['ID']>>>,
  excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>,
  hideEmpty?: Maybe<Scalars['Boolean']>,
  hierarchical?: Maybe<Scalars['Boolean']>,
  include?: Maybe<Array<Maybe<Scalars['ID']>>>,
  name?: Maybe<Array<Maybe<Scalars['String']>>>,
  nameLike?: Maybe<Scalars['String']>,
  objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>,
  orderby?: Maybe<GraphCms_TermObjectsConnectionOrderbyEnum>,
  padCounts?: Maybe<Scalars['Boolean']>,
  parent?: Maybe<Scalars['Int']>,
  search?: Maybe<Scalars['String']>,
  shouldOnlyIncludeConnectedItems?: Maybe<Scalars['Boolean']>,
  shouldOutputInFlatList?: Maybe<Scalars['Boolean']>,
  slug?: Maybe<Array<Maybe<Scalars['String']>>>,
  termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>,
  updateTermMetaCache?: Maybe<Scalars['Boolean']>,
};

export type GraphCms_ProductToPaPatareidConnection = {
   __typename?: 'GraphCMS_ProductToPaPatareidConnection',
  edges?: Maybe<Array<Maybe<GraphCms_ProductToPaPatareidConnectionEdge>>>,
  nodes?: Maybe<Array<Maybe<GraphCms_PaPatareid>>>,
  pageInfo?: Maybe<GraphCms_WpPageInfo>,
  taxonomyInfo?: Maybe<GraphCms_Taxonomy>,
};

export type GraphCms_ProductToPaPatareidConnectionEdge = {
   __typename?: 'GraphCMS_ProductToPaPatareidConnectionEdge',
  cursor?: Maybe<Scalars['String']>,
  node?: Maybe<GraphCms_PaPatareid>,
};

export type GraphCms_ProductToPaPatareidConnectionWhereArgs = {
  cacheDomain?: Maybe<Scalars['String']>,
  childOf?: Maybe<Scalars['Int']>,
  childless?: Maybe<Scalars['Boolean']>,
  descriptionLike?: Maybe<Scalars['String']>,
  exclude?: Maybe<Array<Maybe<Scalars['ID']>>>,
  excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>,
  hideEmpty?: Maybe<Scalars['Boolean']>,
  hierarchical?: Maybe<Scalars['Boolean']>,
  include?: Maybe<Array<Maybe<Scalars['ID']>>>,
  name?: Maybe<Array<Maybe<Scalars['String']>>>,
  nameLike?: Maybe<Scalars['String']>,
  objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>,
  orderby?: Maybe<GraphCms_TermObjectsConnectionOrderbyEnum>,
  padCounts?: Maybe<Scalars['Boolean']>,
  parent?: Maybe<Scalars['Int']>,
  search?: Maybe<Scalars['String']>,
  shouldOnlyIncludeConnectedItems?: Maybe<Scalars['Boolean']>,
  shouldOutputInFlatList?: Maybe<Scalars['Boolean']>,
  slug?: Maybe<Array<Maybe<Scalars['String']>>>,
  termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>,
  updateTermMetaCache?: Maybe<Scalars['Boolean']>,
};

export type GraphCms_ProductToPaSuurusConnection = {
   __typename?: 'GraphCMS_ProductToPaSuurusConnection',
  edges?: Maybe<Array<Maybe<GraphCms_ProductToPaSuurusConnectionEdge>>>,
  nodes?: Maybe<Array<Maybe<GraphCms_PaSuurus>>>,
  pageInfo?: Maybe<GraphCms_WpPageInfo>,
  taxonomyInfo?: Maybe<GraphCms_Taxonomy>,
};

export type GraphCms_ProductToPaSuurusConnectionEdge = {
   __typename?: 'GraphCMS_ProductToPaSuurusConnectionEdge',
  cursor?: Maybe<Scalars['String']>,
  node?: Maybe<GraphCms_PaSuurus>,
};

export type GraphCms_ProductToPaSuurusConnectionWhereArgs = {
  cacheDomain?: Maybe<Scalars['String']>,
  childOf?: Maybe<Scalars['Int']>,
  childless?: Maybe<Scalars['Boolean']>,
  descriptionLike?: Maybe<Scalars['String']>,
  exclude?: Maybe<Array<Maybe<Scalars['ID']>>>,
  excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>,
  hideEmpty?: Maybe<Scalars['Boolean']>,
  hierarchical?: Maybe<Scalars['Boolean']>,
  include?: Maybe<Array<Maybe<Scalars['ID']>>>,
  name?: Maybe<Array<Maybe<Scalars['String']>>>,
  nameLike?: Maybe<Scalars['String']>,
  objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>,
  orderby?: Maybe<GraphCms_TermObjectsConnectionOrderbyEnum>,
  padCounts?: Maybe<Scalars['Boolean']>,
  parent?: Maybe<Scalars['Int']>,
  search?: Maybe<Scalars['String']>,
  shouldOnlyIncludeConnectedItems?: Maybe<Scalars['Boolean']>,
  shouldOutputInFlatList?: Maybe<Scalars['Boolean']>,
  slug?: Maybe<Array<Maybe<Scalars['String']>>>,
  termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>,
  updateTermMetaCache?: Maybe<Scalars['Boolean']>,
};

export type GraphCms_ProductToPaVariantConnection = {
   __typename?: 'GraphCMS_ProductToPaVariantConnection',
  edges?: Maybe<Array<Maybe<GraphCms_ProductToPaVariantConnectionEdge>>>,
  nodes?: Maybe<Array<Maybe<GraphCms_PaVariant>>>,
  pageInfo?: Maybe<GraphCms_WpPageInfo>,
  taxonomyInfo?: Maybe<GraphCms_Taxonomy>,
};

export type GraphCms_ProductToPaVariantConnectionEdge = {
   __typename?: 'GraphCMS_ProductToPaVariantConnectionEdge',
  cursor?: Maybe<Scalars['String']>,
  node?: Maybe<GraphCms_PaVariant>,
};

export type GraphCms_ProductToPaVariantConnectionWhereArgs = {
  cacheDomain?: Maybe<Scalars['String']>,
  childOf?: Maybe<Scalars['Int']>,
  childless?: Maybe<Scalars['Boolean']>,
  descriptionLike?: Maybe<Scalars['String']>,
  exclude?: Maybe<Array<Maybe<Scalars['ID']>>>,
  excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>,
  hideEmpty?: Maybe<Scalars['Boolean']>,
  hierarchical?: Maybe<Scalars['Boolean']>,
  include?: Maybe<Array<Maybe<Scalars['ID']>>>,
  name?: Maybe<Array<Maybe<Scalars['String']>>>,
  nameLike?: Maybe<Scalars['String']>,
  objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>,
  orderby?: Maybe<GraphCms_TermObjectsConnectionOrderbyEnum>,
  padCounts?: Maybe<Scalars['Boolean']>,
  parent?: Maybe<Scalars['Int']>,
  search?: Maybe<Scalars['String']>,
  shouldOnlyIncludeConnectedItems?: Maybe<Scalars['Boolean']>,
  shouldOutputInFlatList?: Maybe<Scalars['Boolean']>,
  slug?: Maybe<Array<Maybe<Scalars['String']>>>,
  termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>,
  updateTermMetaCache?: Maybe<Scalars['Boolean']>,
};

export type GraphCms_ProductToPaVarvConnection = {
   __typename?: 'GraphCMS_ProductToPaVarvConnection',
  edges?: Maybe<Array<Maybe<GraphCms_ProductToPaVarvConnectionEdge>>>,
  nodes?: Maybe<Array<Maybe<GraphCms_PaVarv>>>,
  pageInfo?: Maybe<GraphCms_WpPageInfo>,
  taxonomyInfo?: Maybe<GraphCms_Taxonomy>,
};

export type GraphCms_ProductToPaVarvConnectionEdge = {
   __typename?: 'GraphCMS_ProductToPaVarvConnectionEdge',
  cursor?: Maybe<Scalars['String']>,
  node?: Maybe<GraphCms_PaVarv>,
};

export type GraphCms_ProductToPaVarvConnectionWhereArgs = {
  cacheDomain?: Maybe<Scalars['String']>,
  childOf?: Maybe<Scalars['Int']>,
  childless?: Maybe<Scalars['Boolean']>,
  descriptionLike?: Maybe<Scalars['String']>,
  exclude?: Maybe<Array<Maybe<Scalars['ID']>>>,
  excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>,
  hideEmpty?: Maybe<Scalars['Boolean']>,
  hierarchical?: Maybe<Scalars['Boolean']>,
  include?: Maybe<Array<Maybe<Scalars['ID']>>>,
  name?: Maybe<Array<Maybe<Scalars['String']>>>,
  nameLike?: Maybe<Scalars['String']>,
  objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>,
  orderby?: Maybe<GraphCms_TermObjectsConnectionOrderbyEnum>,
  padCounts?: Maybe<Scalars['Boolean']>,
  parent?: Maybe<Scalars['Int']>,
  search?: Maybe<Scalars['String']>,
  shouldOnlyIncludeConnectedItems?: Maybe<Scalars['Boolean']>,
  shouldOutputInFlatList?: Maybe<Scalars['Boolean']>,
  slug?: Maybe<Array<Maybe<Scalars['String']>>>,
  termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>,
  updateTermMetaCache?: Maybe<Scalars['Boolean']>,
};

export type GraphCms_ProductToPaVeekindlusConnection = {
   __typename?: 'GraphCMS_ProductToPaVeekindlusConnection',
  edges?: Maybe<Array<Maybe<GraphCms_ProductToPaVeekindlusConnectionEdge>>>,
  nodes?: Maybe<Array<Maybe<GraphCms_PaVeekindlus>>>,
  pageInfo?: Maybe<GraphCms_WpPageInfo>,
  taxonomyInfo?: Maybe<GraphCms_Taxonomy>,
};

export type GraphCms_ProductToPaVeekindlusConnectionEdge = {
   __typename?: 'GraphCMS_ProductToPaVeekindlusConnectionEdge',
  cursor?: Maybe<Scalars['String']>,
  node?: Maybe<GraphCms_PaVeekindlus>,
};

export type GraphCms_ProductToPaVeekindlusConnectionWhereArgs = {
  cacheDomain?: Maybe<Scalars['String']>,
  childOf?: Maybe<Scalars['Int']>,
  childless?: Maybe<Scalars['Boolean']>,
  descriptionLike?: Maybe<Scalars['String']>,
  exclude?: Maybe<Array<Maybe<Scalars['ID']>>>,
  excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>,
  hideEmpty?: Maybe<Scalars['Boolean']>,
  hierarchical?: Maybe<Scalars['Boolean']>,
  include?: Maybe<Array<Maybe<Scalars['ID']>>>,
  name?: Maybe<Array<Maybe<Scalars['String']>>>,
  nameLike?: Maybe<Scalars['String']>,
  objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>,
  orderby?: Maybe<GraphCms_TermObjectsConnectionOrderbyEnum>,
  padCounts?: Maybe<Scalars['Boolean']>,
  parent?: Maybe<Scalars['Int']>,
  search?: Maybe<Scalars['String']>,
  shouldOnlyIncludeConnectedItems?: Maybe<Scalars['Boolean']>,
  shouldOutputInFlatList?: Maybe<Scalars['Boolean']>,
  slug?: Maybe<Array<Maybe<Scalars['String']>>>,
  termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>,
  updateTermMetaCache?: Maybe<Scalars['Boolean']>,
};

export type GraphCms_ProductToProductAttributeConnection = {
   __typename?: 'GraphCMS_ProductToProductAttributeConnection',
  edges?: Maybe<Array<Maybe<GraphCms_ProductToProductAttributeConnectionEdge>>>,
  nodes?: Maybe<Array<Maybe<GraphCms_ProductAttribute>>>,
  pageInfo?: Maybe<GraphCms_WpPageInfo>,
};

export type GraphCms_ProductToProductAttributeConnectionEdge = {
   __typename?: 'GraphCMS_ProductToProductAttributeConnectionEdge',
  cursor?: Maybe<Scalars['String']>,
  node?: Maybe<GraphCms_ProductAttribute>,
};

export type GraphCms_ProductToProductCategoryConnection = {
   __typename?: 'GraphCMS_ProductToProductCategoryConnection',
  edges?: Maybe<Array<Maybe<GraphCms_ProductToProductCategoryConnectionEdge>>>,
  nodes?: Maybe<Array<Maybe<GraphCms_ProductCategory>>>,
  pageInfo?: Maybe<GraphCms_WpPageInfo>,
  taxonomyInfo?: Maybe<GraphCms_Taxonomy>,
};

export type GraphCms_ProductToProductCategoryConnectionEdge = {
   __typename?: 'GraphCMS_ProductToProductCategoryConnectionEdge',
  cursor?: Maybe<Scalars['String']>,
  node?: Maybe<GraphCms_ProductCategory>,
};

export type GraphCms_ProductToProductCategoryConnectionWhereArgs = {
  cacheDomain?: Maybe<Scalars['String']>,
  childOf?: Maybe<Scalars['Int']>,
  childless?: Maybe<Scalars['Boolean']>,
  descriptionLike?: Maybe<Scalars['String']>,
  exclude?: Maybe<Array<Maybe<Scalars['ID']>>>,
  excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>,
  hideEmpty?: Maybe<Scalars['Boolean']>,
  hierarchical?: Maybe<Scalars['Boolean']>,
  include?: Maybe<Array<Maybe<Scalars['ID']>>>,
  name?: Maybe<Array<Maybe<Scalars['String']>>>,
  nameLike?: Maybe<Scalars['String']>,
  objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>,
  orderby?: Maybe<GraphCms_TermObjectsConnectionOrderbyEnum>,
  padCounts?: Maybe<Scalars['Boolean']>,
  parent?: Maybe<Scalars['Int']>,
  search?: Maybe<Scalars['String']>,
  shouldOnlyIncludeConnectedItems?: Maybe<Scalars['Boolean']>,
  shouldOutputInFlatList?: Maybe<Scalars['Boolean']>,
  slug?: Maybe<Array<Maybe<Scalars['String']>>>,
  termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>,
  updateTermMetaCache?: Maybe<Scalars['Boolean']>,
};

export type GraphCms_ProductToProductConnection = {
   __typename?: 'GraphCMS_ProductToProductConnection',
  edges?: Maybe<Array<Maybe<GraphCms_ProductToProductConnectionEdge>>>,
  nodes?: Maybe<Array<Maybe<GraphCms_Product>>>,
  pageInfo?: Maybe<GraphCms_WpPageInfo>,
};

export type GraphCms_ProductToProductConnectionEdge = {
   __typename?: 'GraphCMS_ProductToProductConnectionEdge',
  cursor?: Maybe<Scalars['String']>,
  node?: Maybe<GraphCms_Product>,
};

export type GraphCms_ProductToProductConnectionWhereArgs = {
  attribute?: Maybe<Scalars['String']>,
  attributeTerm?: Maybe<Scalars['String']>,
  category?: Maybe<Scalars['String']>,
  categoryId?: Maybe<Scalars['Int']>,
  categoryIdIn?: Maybe<Array<Maybe<Scalars['Int']>>>,
  categoryIdNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>,
  categoryIn?: Maybe<Array<Maybe<Scalars['String']>>>,
  categoryNotIn?: Maybe<Array<Maybe<Scalars['String']>>>,
  dateQuery?: Maybe<GraphCms_DateQueryInput>,
  exclude?: Maybe<Array<Maybe<Scalars['Int']>>>,
  featured?: Maybe<Scalars['Boolean']>,
  include?: Maybe<Array<Maybe<Scalars['Int']>>>,
  maxPrice?: Maybe<Scalars['Float']>,
  minPrice?: Maybe<Scalars['Float']>,
  onSale?: Maybe<Scalars['Boolean']>,
  orderby?: Maybe<Array<Maybe<GraphCms_ProductsOrderbyInput>>>,
  parent?: Maybe<Scalars['Int']>,
  parentIn?: Maybe<Array<Maybe<Scalars['Int']>>>,
  parentNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>,
  search?: Maybe<Scalars['String']>,
  shippingClassId?: Maybe<Scalars['Int']>,
  sku?: Maybe<Scalars['String']>,
  slug?: Maybe<Scalars['String']>,
  status?: Maybe<Scalars['String']>,
  stockStatus?: Maybe<Array<Maybe<GraphCms_StockStatusEnum>>>,
  tag?: Maybe<Scalars['String']>,
  tagId?: Maybe<Scalars['Int']>,
  tagIdIn?: Maybe<Array<Maybe<Scalars['Int']>>>,
  tagIdNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>,
  tagIn?: Maybe<Array<Maybe<Scalars['String']>>>,
  tagNotIn?: Maybe<Array<Maybe<Scalars['String']>>>,
  taxClass?: Maybe<GraphCms_TaxClassEnum>,
  taxonomyFilter?: Maybe<Array<Maybe<GraphCms_ProductTaxonomyFilterRelationInput>>>,
  type?: Maybe<GraphCms_ProductTypesEnum>,
  typeIn?: Maybe<Array<Maybe<GraphCms_ProductTypesEnum>>>,
  typeNotIn?: Maybe<Array<Maybe<GraphCms_ProductTypesEnum>>>,
  visibility?: Maybe<GraphCms_CatalogVisibilityEnum>,
};

export type GraphCms_ProductToProductTagConnection = {
   __typename?: 'GraphCMS_ProductToProductTagConnection',
  edges?: Maybe<Array<Maybe<GraphCms_ProductToProductTagConnectionEdge>>>,
  nodes?: Maybe<Array<Maybe<GraphCms_ProductTag>>>,
  pageInfo?: Maybe<GraphCms_WpPageInfo>,
  taxonomyInfo?: Maybe<GraphCms_Taxonomy>,
};

export type GraphCms_ProductToProductTagConnectionEdge = {
   __typename?: 'GraphCMS_ProductToProductTagConnectionEdge',
  cursor?: Maybe<Scalars['String']>,
  node?: Maybe<GraphCms_ProductTag>,
};

export type GraphCms_ProductToProductTagConnectionWhereArgs = {
  cacheDomain?: Maybe<Scalars['String']>,
  childOf?: Maybe<Scalars['Int']>,
  childless?: Maybe<Scalars['Boolean']>,
  descriptionLike?: Maybe<Scalars['String']>,
  exclude?: Maybe<Array<Maybe<Scalars['ID']>>>,
  excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>,
  hideEmpty?: Maybe<Scalars['Boolean']>,
  hierarchical?: Maybe<Scalars['Boolean']>,
  include?: Maybe<Array<Maybe<Scalars['ID']>>>,
  name?: Maybe<Array<Maybe<Scalars['String']>>>,
  nameLike?: Maybe<Scalars['String']>,
  objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>,
  orderby?: Maybe<GraphCms_TermObjectsConnectionOrderbyEnum>,
  padCounts?: Maybe<Scalars['Boolean']>,
  parent?: Maybe<Scalars['Int']>,
  search?: Maybe<Scalars['String']>,
  shouldOnlyIncludeConnectedItems?: Maybe<Scalars['Boolean']>,
  shouldOutputInFlatList?: Maybe<Scalars['Boolean']>,
  slug?: Maybe<Array<Maybe<Scalars['String']>>>,
  termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>,
  updateTermMetaCache?: Maybe<Scalars['Boolean']>,
};

export type GraphCms_ProductToProductTypeConnection = {
   __typename?: 'GraphCMS_ProductToProductTypeConnection',
  edges?: Maybe<Array<Maybe<GraphCms_ProductToProductTypeConnectionEdge>>>,
  nodes?: Maybe<Array<Maybe<GraphCms_ProductType>>>,
  pageInfo?: Maybe<GraphCms_WpPageInfo>,
  taxonomyInfo?: Maybe<GraphCms_Taxonomy>,
};

export type GraphCms_ProductToProductTypeConnectionEdge = {
   __typename?: 'GraphCMS_ProductToProductTypeConnectionEdge',
  cursor?: Maybe<Scalars['String']>,
  node?: Maybe<GraphCms_ProductType>,
};

export type GraphCms_ProductToProductTypeConnectionWhereArgs = {
  cacheDomain?: Maybe<Scalars['String']>,
  childOf?: Maybe<Scalars['Int']>,
  childless?: Maybe<Scalars['Boolean']>,
  descriptionLike?: Maybe<Scalars['String']>,
  exclude?: Maybe<Array<Maybe<Scalars['ID']>>>,
  excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>,
  hideEmpty?: Maybe<Scalars['Boolean']>,
  hierarchical?: Maybe<Scalars['Boolean']>,
  include?: Maybe<Array<Maybe<Scalars['ID']>>>,
  name?: Maybe<Array<Maybe<Scalars['String']>>>,
  nameLike?: Maybe<Scalars['String']>,
  objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>,
  orderby?: Maybe<GraphCms_TermObjectsConnectionOrderbyEnum>,
  padCounts?: Maybe<Scalars['Boolean']>,
  parent?: Maybe<Scalars['Int']>,
  search?: Maybe<Scalars['String']>,
  shouldOnlyIncludeConnectedItems?: Maybe<Scalars['Boolean']>,
  shouldOutputInFlatList?: Maybe<Scalars['Boolean']>,
  slug?: Maybe<Array<Maybe<Scalars['String']>>>,
  termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>,
  updateTermMetaCache?: Maybe<Scalars['Boolean']>,
};

export type GraphCms_ProductToShippingClassConnection = {
   __typename?: 'GraphCMS_ProductToShippingClassConnection',
  edges?: Maybe<Array<Maybe<GraphCms_ProductToShippingClassConnectionEdge>>>,
  nodes?: Maybe<Array<Maybe<GraphCms_ShippingClass>>>,
  pageInfo?: Maybe<GraphCms_WpPageInfo>,
  taxonomyInfo?: Maybe<GraphCms_Taxonomy>,
};

export type GraphCms_ProductToShippingClassConnectionEdge = {
   __typename?: 'GraphCMS_ProductToShippingClassConnectionEdge',
  cursor?: Maybe<Scalars['String']>,
  node?: Maybe<GraphCms_ShippingClass>,
};

export type GraphCms_ProductToShippingClassConnectionWhereArgs = {
  cacheDomain?: Maybe<Scalars['String']>,
  childOf?: Maybe<Scalars['Int']>,
  childless?: Maybe<Scalars['Boolean']>,
  descriptionLike?: Maybe<Scalars['String']>,
  exclude?: Maybe<Array<Maybe<Scalars['ID']>>>,
  excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>,
  hideEmpty?: Maybe<Scalars['Boolean']>,
  hierarchical?: Maybe<Scalars['Boolean']>,
  include?: Maybe<Array<Maybe<Scalars['ID']>>>,
  name?: Maybe<Array<Maybe<Scalars['String']>>>,
  nameLike?: Maybe<Scalars['String']>,
  objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>,
  orderby?: Maybe<GraphCms_TermObjectsConnectionOrderbyEnum>,
  padCounts?: Maybe<Scalars['Boolean']>,
  parent?: Maybe<Scalars['Int']>,
  search?: Maybe<Scalars['String']>,
  shouldOnlyIncludeConnectedItems?: Maybe<Scalars['Boolean']>,
  shouldOutputInFlatList?: Maybe<Scalars['Boolean']>,
  slug?: Maybe<Array<Maybe<Scalars['String']>>>,
  termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>,
  updateTermMetaCache?: Maybe<Scalars['Boolean']>,
};

export type GraphCms_ProductToVisibleProductConnection = {
   __typename?: 'GraphCMS_ProductToVisibleProductConnection',
  edges?: Maybe<Array<Maybe<GraphCms_ProductToVisibleProductConnectionEdge>>>,
  nodes?: Maybe<Array<Maybe<GraphCms_VisibleProduct>>>,
  pageInfo?: Maybe<GraphCms_WpPageInfo>,
  taxonomyInfo?: Maybe<GraphCms_Taxonomy>,
};

export type GraphCms_ProductToVisibleProductConnectionEdge = {
   __typename?: 'GraphCMS_ProductToVisibleProductConnectionEdge',
  cursor?: Maybe<Scalars['String']>,
  node?: Maybe<GraphCms_VisibleProduct>,
};

export type GraphCms_ProductToVisibleProductConnectionWhereArgs = {
  cacheDomain?: Maybe<Scalars['String']>,
  childOf?: Maybe<Scalars['Int']>,
  childless?: Maybe<Scalars['Boolean']>,
  descriptionLike?: Maybe<Scalars['String']>,
  exclude?: Maybe<Array<Maybe<Scalars['ID']>>>,
  excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>,
  hideEmpty?: Maybe<Scalars['Boolean']>,
  hierarchical?: Maybe<Scalars['Boolean']>,
  include?: Maybe<Array<Maybe<Scalars['ID']>>>,
  name?: Maybe<Array<Maybe<Scalars['String']>>>,
  nameLike?: Maybe<Scalars['String']>,
  objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>,
  orderby?: Maybe<GraphCms_TermObjectsConnectionOrderbyEnum>,
  padCounts?: Maybe<Scalars['Boolean']>,
  parent?: Maybe<Scalars['Int']>,
  search?: Maybe<Scalars['String']>,
  shouldOnlyIncludeConnectedItems?: Maybe<Scalars['Boolean']>,
  shouldOutputInFlatList?: Maybe<Scalars['Boolean']>,
  slug?: Maybe<Array<Maybe<Scalars['String']>>>,
  termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>,
  updateTermMetaCache?: Maybe<Scalars['Boolean']>,
};

export type GraphCms_ProductType = GraphCms_Node & {
   __typename?: 'GraphCMS_ProductType',
  count?: Maybe<Scalars['Int']>,
  description?: Maybe<Scalars['String']>,
  id: Scalars['ID'],
  isRestricted?: Maybe<Scalars['Boolean']>,
  link?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  productTypeId?: Maybe<Scalars['Int']>,
  slug?: Maybe<Scalars['String']>,
  taxonomy?: Maybe<GraphCms_Taxonomy>,
  termGroupId?: Maybe<Scalars['Int']>,
  termTaxonomyId?: Maybe<Scalars['Int']>,
};

export enum GraphCms_ProductTypesEnum {
  External = 'EXTERNAL',
  Grouped = 'GROUPED',
  Simple = 'SIMPLE',
  Variable = 'VARIABLE',
  Variation = 'VARIATION'
}

export type GraphCms_ProductVariation = GraphCms_Node & {
   __typename?: 'GraphCMS_ProductVariation',
  attributes?: Maybe<GraphCms_ProductVariationToVariationAttributeConnection>,
  backorders?: Maybe<GraphCms_BackordersEnum>,
  backordersAllowed?: Maybe<Scalars['Boolean']>,
  catalogVisibility?: Maybe<GraphCms_CatalogVisibilityEnum>,
  date?: Maybe<Scalars['String']>,
  dateOnSaleFrom?: Maybe<Scalars['String']>,
  dateOnSaleTo?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  downloadExpiry?: Maybe<Scalars['Int']>,
  downloadLimit?: Maybe<Scalars['Int']>,
  downloadable?: Maybe<Scalars['Boolean']>,
  downloads?: Maybe<Array<Maybe<GraphCms_ProductDownload>>>,
  hasAttributes?: Maybe<Scalars['Boolean']>,
  height?: Maybe<Scalars['String']>,
  id: Scalars['ID'],
  image?: Maybe<GraphCms_MediaItem>,
  length?: Maybe<Scalars['String']>,
  manageStock?: Maybe<GraphCms_ManageStockEnum>,
  menuOrder?: Maybe<Scalars['Int']>,
  metaData?: Maybe<Array<Maybe<GraphCms_MetaData>>>,
  modified?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  onSale?: Maybe<Scalars['Boolean']>,
  parent?: Maybe<GraphCms_VariableProduct>,
  price?: Maybe<Scalars['String']>,
  purchasable?: Maybe<Scalars['Boolean']>,
  purchaseNote?: Maybe<Scalars['String']>,
  regularPrice?: Maybe<Scalars['String']>,
  salePrice?: Maybe<Scalars['String']>,
  shippingClass?: Maybe<Scalars['String']>,
  shippingClasses?: Maybe<GraphCms_ProductVariationToShippingClassConnection>,
  sku?: Maybe<Scalars['String']>,
  status?: Maybe<Scalars['String']>,
  stockQuantity?: Maybe<Scalars['Int']>,
  stockStatus?: Maybe<GraphCms_StockStatusEnum>,
  taxClass?: Maybe<GraphCms_TaxClassEnum>,
  taxStatus?: Maybe<GraphCms_TaxStatusEnum>,
  type?: Maybe<GraphCms_ProductTypesEnum>,
  variationId?: Maybe<Scalars['Int']>,
  virtual?: Maybe<Scalars['Boolean']>,
  visibleProducts?: Maybe<GraphCms_ProductVariationToVisibleProductConnection>,
  weight?: Maybe<Scalars['String']>,
  width?: Maybe<Scalars['String']>,
};


export type GraphCms_ProductVariationAttributesArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>
};


export type GraphCms_ProductVariationMetaDataArgs = {
  key?: Maybe<Scalars['String']>,
  keysIn?: Maybe<Array<Maybe<Scalars['String']>>>,
  multiple?: Maybe<Scalars['Boolean']>
};


export type GraphCms_ProductVariationPriceArgs = {
  format?: Maybe<GraphCms_PricingFieldFormatEnum>
};


export type GraphCms_ProductVariationRegularPriceArgs = {
  format?: Maybe<GraphCms_PricingFieldFormatEnum>
};


export type GraphCms_ProductVariationSalePriceArgs = {
  format?: Maybe<GraphCms_PricingFieldFormatEnum>
};


export type GraphCms_ProductVariationShippingClassesArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  where?: Maybe<GraphCms_ProductVariationToShippingClassConnectionWhereArgs>
};


export type GraphCms_ProductVariationVisibleProductsArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  where?: Maybe<GraphCms_ProductVariationToVisibleProductConnectionWhereArgs>
};

export type GraphCms_ProductVariationToShippingClassConnection = {
   __typename?: 'GraphCMS_ProductVariationToShippingClassConnection',
  edges?: Maybe<Array<Maybe<GraphCms_ProductVariationToShippingClassConnectionEdge>>>,
  nodes?: Maybe<Array<Maybe<GraphCms_ShippingClass>>>,
  pageInfo?: Maybe<GraphCms_WpPageInfo>,
  taxonomyInfo?: Maybe<GraphCms_Taxonomy>,
};

export type GraphCms_ProductVariationToShippingClassConnectionEdge = {
   __typename?: 'GraphCMS_ProductVariationToShippingClassConnectionEdge',
  cursor?: Maybe<Scalars['String']>,
  node?: Maybe<GraphCms_ShippingClass>,
};

export type GraphCms_ProductVariationToShippingClassConnectionWhereArgs = {
  cacheDomain?: Maybe<Scalars['String']>,
  childOf?: Maybe<Scalars['Int']>,
  childless?: Maybe<Scalars['Boolean']>,
  descriptionLike?: Maybe<Scalars['String']>,
  exclude?: Maybe<Array<Maybe<Scalars['ID']>>>,
  excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>,
  hideEmpty?: Maybe<Scalars['Boolean']>,
  hierarchical?: Maybe<Scalars['Boolean']>,
  include?: Maybe<Array<Maybe<Scalars['ID']>>>,
  name?: Maybe<Array<Maybe<Scalars['String']>>>,
  nameLike?: Maybe<Scalars['String']>,
  objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>,
  orderby?: Maybe<GraphCms_TermObjectsConnectionOrderbyEnum>,
  padCounts?: Maybe<Scalars['Boolean']>,
  parent?: Maybe<Scalars['Int']>,
  search?: Maybe<Scalars['String']>,
  shouldOnlyIncludeConnectedItems?: Maybe<Scalars['Boolean']>,
  shouldOutputInFlatList?: Maybe<Scalars['Boolean']>,
  slug?: Maybe<Array<Maybe<Scalars['String']>>>,
  termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>,
  updateTermMetaCache?: Maybe<Scalars['Boolean']>,
};

export type GraphCms_ProductVariationToVariationAttributeConnection = {
   __typename?: 'GraphCMS_ProductVariationToVariationAttributeConnection',
  edges?: Maybe<Array<Maybe<GraphCms_ProductVariationToVariationAttributeConnectionEdge>>>,
  nodes?: Maybe<Array<Maybe<GraphCms_VariationAttribute>>>,
  pageInfo?: Maybe<GraphCms_WpPageInfo>,
};

export type GraphCms_ProductVariationToVariationAttributeConnectionEdge = {
   __typename?: 'GraphCMS_ProductVariationToVariationAttributeConnectionEdge',
  cursor?: Maybe<Scalars['String']>,
  node?: Maybe<GraphCms_VariationAttribute>,
};

export type GraphCms_ProductVariationToVisibleProductConnection = {
   __typename?: 'GraphCMS_ProductVariationToVisibleProductConnection',
  edges?: Maybe<Array<Maybe<GraphCms_ProductVariationToVisibleProductConnectionEdge>>>,
  nodes?: Maybe<Array<Maybe<GraphCms_VisibleProduct>>>,
  pageInfo?: Maybe<GraphCms_WpPageInfo>,
  taxonomyInfo?: Maybe<GraphCms_Taxonomy>,
};

export type GraphCms_ProductVariationToVisibleProductConnectionEdge = {
   __typename?: 'GraphCMS_ProductVariationToVisibleProductConnectionEdge',
  cursor?: Maybe<Scalars['String']>,
  node?: Maybe<GraphCms_VisibleProduct>,
};

export type GraphCms_ProductVariationToVisibleProductConnectionWhereArgs = {
  cacheDomain?: Maybe<Scalars['String']>,
  childOf?: Maybe<Scalars['Int']>,
  childless?: Maybe<Scalars['Boolean']>,
  descriptionLike?: Maybe<Scalars['String']>,
  exclude?: Maybe<Array<Maybe<Scalars['ID']>>>,
  excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>,
  hideEmpty?: Maybe<Scalars['Boolean']>,
  hierarchical?: Maybe<Scalars['Boolean']>,
  include?: Maybe<Array<Maybe<Scalars['ID']>>>,
  name?: Maybe<Array<Maybe<Scalars['String']>>>,
  nameLike?: Maybe<Scalars['String']>,
  objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>,
  orderby?: Maybe<GraphCms_TermObjectsConnectionOrderbyEnum>,
  padCounts?: Maybe<Scalars['Boolean']>,
  parent?: Maybe<Scalars['Int']>,
  search?: Maybe<Scalars['String']>,
  shouldOnlyIncludeConnectedItems?: Maybe<Scalars['Boolean']>,
  shouldOutputInFlatList?: Maybe<Scalars['Boolean']>,
  slug?: Maybe<Array<Maybe<Scalars['String']>>>,
  termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>,
  updateTermMetaCache?: Maybe<Scalars['Boolean']>,
};

export type GraphCms_ReadingSettings = {
   __typename?: 'GraphCMS_ReadingSettings',
  postsPerPage?: Maybe<Scalars['Int']>,
};

export type GraphCms_Refund = GraphCms_Node & {
   __typename?: 'GraphCMS_Refund',
  amount?: Maybe<Scalars['Float']>,
  id: Scalars['ID'],
  lineItems?: Maybe<GraphCms_RefundToLineItemConnection>,
  metaData?: Maybe<Array<Maybe<GraphCms_MetaData>>>,
  reason?: Maybe<Scalars['String']>,
  refundId?: Maybe<Scalars['Int']>,
  refundedBy?: Maybe<GraphCms_User>,
  title?: Maybe<Scalars['String']>,
};


export type GraphCms_RefundLineItemsArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>
};


export type GraphCms_RefundMetaDataArgs = {
  key?: Maybe<Scalars['String']>,
  keysIn?: Maybe<Array<Maybe<Scalars['String']>>>,
  multiple?: Maybe<Scalars['Boolean']>
};

export type GraphCms_RefundToLineItemConnection = {
   __typename?: 'GraphCMS_RefundToLineItemConnection',
  edges?: Maybe<Array<Maybe<GraphCms_RefundToLineItemConnectionEdge>>>,
  nodes?: Maybe<Array<Maybe<GraphCms_LineItem>>>,
  pageInfo?: Maybe<GraphCms_WpPageInfo>,
};

export type GraphCms_RefundToLineItemConnectionEdge = {
   __typename?: 'GraphCMS_RefundToLineItemConnectionEdge',
  cursor?: Maybe<Scalars['String']>,
  node?: Maybe<GraphCms_LineItem>,
};

export type GraphCms_RegisterCustomerInput = {
  aim?: Maybe<Scalars['String']>,
  billing?: Maybe<GraphCms_CustomerAddressInput>,
  clientMutationId: Scalars['String'],
  description?: Maybe<Scalars['String']>,
  displayName?: Maybe<Scalars['String']>,
  email?: Maybe<Scalars['String']>,
  firstName?: Maybe<Scalars['String']>,
  jabber?: Maybe<Scalars['String']>,
  lastName?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>,
  nicename?: Maybe<Scalars['String']>,
  nickname?: Maybe<Scalars['String']>,
  password?: Maybe<Scalars['String']>,
  registered?: Maybe<Scalars['String']>,
  richEditing?: Maybe<Scalars['String']>,
  shipping?: Maybe<GraphCms_CustomerAddressInput>,
  shippingSameAsBilling?: Maybe<Scalars['Boolean']>,
  username: Scalars['String'],
  websiteUrl?: Maybe<Scalars['String']>,
  yim?: Maybe<Scalars['String']>,
};

export type GraphCms_RegisterCustomerPayload = {
   __typename?: 'GraphCMS_RegisterCustomerPayload',
  clientMutationId: Scalars['String'],
  customer?: Maybe<GraphCms_Customer>,
  viewer?: Maybe<GraphCms_User>,
};

export type GraphCms_RegisterUserInput = {
  aim?: Maybe<Scalars['String']>,
  clientMutationId: Scalars['String'],
  description?: Maybe<Scalars['String']>,
  displayName?: Maybe<Scalars['String']>,
  email?: Maybe<Scalars['String']>,
  firstName?: Maybe<Scalars['String']>,
  jabber?: Maybe<Scalars['String']>,
  lastName?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>,
  nicename?: Maybe<Scalars['String']>,
  nickname?: Maybe<Scalars['String']>,
  password?: Maybe<Scalars['String']>,
  registered?: Maybe<Scalars['String']>,
  richEditing?: Maybe<Scalars['String']>,
  username: Scalars['String'],
  websiteUrl?: Maybe<Scalars['String']>,
  yim?: Maybe<Scalars['String']>,
};

export type GraphCms_RegisterUserPayload = {
   __typename?: 'GraphCMS_RegisterUserPayload',
  clientMutationId: Scalars['String'],
  user?: Maybe<GraphCms_User>,
};

export enum GraphCms_RelationEnum {
  And = 'AND',
  Or = 'OR'
}

export type GraphCms_RemoveCouponsInput = {
  clientMutationId: Scalars['String'],
  codes?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type GraphCms_RemoveCouponsPayload = {
   __typename?: 'GraphCMS_RemoveCouponsPayload',
  cart?: Maybe<GraphCms_Cart>,
  clientMutationId: Scalars['String'],
};

export type GraphCms_RemoveItemsFromCartInput = {
  all?: Maybe<Scalars['Boolean']>,
  clientMutationId: Scalars['String'],
  keys?: Maybe<Array<Maybe<Scalars['ID']>>>,
};

export type GraphCms_RemoveItemsFromCartPayload = {
   __typename?: 'GraphCMS_RemoveItemsFromCartPayload',
  cart?: Maybe<GraphCms_Cart>,
  cartItems?: Maybe<Array<Maybe<GraphCms_CartItem>>>,
  clientMutationId: Scalars['String'],
};

export type GraphCms_ResetUserPasswordInput = {
  clientMutationId: Scalars['String'],
  key?: Maybe<Scalars['String']>,
  login?: Maybe<Scalars['String']>,
  password?: Maybe<Scalars['String']>,
};

export type GraphCms_ResetUserPasswordPayload = {
   __typename?: 'GraphCMS_ResetUserPasswordPayload',
  clientMutationId: Scalars['String'],
  user?: Maybe<GraphCms_User>,
};

export type GraphCms_RestoreCartItemsInput = {
  clientMutationId: Scalars['String'],
  keys?: Maybe<Array<Maybe<Scalars['ID']>>>,
};

export type GraphCms_RestoreCartItemsPayload = {
   __typename?: 'GraphCMS_RestoreCartItemsPayload',
  cart?: Maybe<GraphCms_Cart>,
  cartItems?: Maybe<Array<Maybe<GraphCms_CartItem>>>,
  clientMutationId: Scalars['String'],
};

export type GraphCms_RestoreCommentInput = {
  clientMutationId: Scalars['String'],
  id: Scalars['ID'],
};

export type GraphCms_RestoreCommentPayload = {
   __typename?: 'GraphCMS_RestoreCommentPayload',
  clientMutationId: Scalars['String'],
  comment?: Maybe<GraphCms_Comment>,
  restoredId?: Maybe<Scalars['ID']>,
};

export type GraphCms_RootQueryToCategoryConnection = {
   __typename?: 'GraphCMS_RootQueryToCategoryConnection',
  edges?: Maybe<Array<Maybe<GraphCms_RootQueryToCategoryConnectionEdge>>>,
  nodes?: Maybe<Array<Maybe<GraphCms_Category>>>,
  pageInfo?: Maybe<GraphCms_WpPageInfo>,
  taxonomyInfo?: Maybe<GraphCms_Taxonomy>,
};

export type GraphCms_RootQueryToCategoryConnectionEdge = {
   __typename?: 'GraphCMS_RootQueryToCategoryConnectionEdge',
  cursor?: Maybe<Scalars['String']>,
  node?: Maybe<GraphCms_Category>,
};

export type GraphCms_RootQueryToCategoryConnectionWhereArgs = {
  cacheDomain?: Maybe<Scalars['String']>,
  childOf?: Maybe<Scalars['Int']>,
  childless?: Maybe<Scalars['Boolean']>,
  descriptionLike?: Maybe<Scalars['String']>,
  exclude?: Maybe<Array<Maybe<Scalars['ID']>>>,
  excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>,
  hideEmpty?: Maybe<Scalars['Boolean']>,
  hierarchical?: Maybe<Scalars['Boolean']>,
  include?: Maybe<Array<Maybe<Scalars['ID']>>>,
  name?: Maybe<Array<Maybe<Scalars['String']>>>,
  nameLike?: Maybe<Scalars['String']>,
  objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>,
  orderby?: Maybe<GraphCms_TermObjectsConnectionOrderbyEnum>,
  padCounts?: Maybe<Scalars['Boolean']>,
  parent?: Maybe<Scalars['Int']>,
  search?: Maybe<Scalars['String']>,
  shouldOnlyIncludeConnectedItems?: Maybe<Scalars['Boolean']>,
  shouldOutputInFlatList?: Maybe<Scalars['Boolean']>,
  slug?: Maybe<Array<Maybe<Scalars['String']>>>,
  termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>,
  updateTermMetaCache?: Maybe<Scalars['Boolean']>,
};

export type GraphCms_RootQueryToCommentConnection = {
   __typename?: 'GraphCMS_RootQueryToCommentConnection',
  edges?: Maybe<Array<Maybe<GraphCms_RootQueryToCommentConnectionEdge>>>,
  nodes?: Maybe<Array<Maybe<GraphCms_Comment>>>,
  pageInfo?: Maybe<GraphCms_WpPageInfo>,
};

export type GraphCms_RootQueryToCommentConnectionEdge = {
   __typename?: 'GraphCMS_RootQueryToCommentConnectionEdge',
  cursor?: Maybe<Scalars['String']>,
  node?: Maybe<GraphCms_Comment>,
};

export type GraphCms_RootQueryToCommentConnectionWhereArgs = {
  authorEmail?: Maybe<Scalars['String']>,
  authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>,
  authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>,
  authorUrl?: Maybe<Scalars['String']>,
  commentIn?: Maybe<Array<Maybe<Scalars['ID']>>>,
  commentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>,
  commentType?: Maybe<Scalars['String']>,
  commentTypeIn?: Maybe<Array<Maybe<Scalars['String']>>>,
  commentTypeNotIn?: Maybe<Scalars['String']>,
  contentAuthor?: Maybe<Array<Maybe<Scalars['ID']>>>,
  contentAuthorIn?: Maybe<Array<Maybe<Scalars['ID']>>>,
  contentAuthorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>,
  contentId?: Maybe<Scalars['ID']>,
  contentIdIn?: Maybe<Array<Maybe<Scalars['ID']>>>,
  contentIdNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>,
  contentName?: Maybe<Scalars['String']>,
  contentParent?: Maybe<Scalars['Int']>,
  contentStatus?: Maybe<Array<Maybe<GraphCms_PostStatusEnum>>>,
  contentType?: Maybe<Array<Maybe<GraphCms_PostTypeEnum>>>,
  includeUnapproved?: Maybe<Array<Maybe<Scalars['ID']>>>,
  karma?: Maybe<Scalars['Int']>,
  order?: Maybe<GraphCms_OrderEnum>,
  orderby?: Maybe<GraphCms_CommentsConnectionOrderbyEnum>,
  parent?: Maybe<Scalars['Int']>,
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>,
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>,
  search?: Maybe<Scalars['String']>,
  status?: Maybe<Scalars['String']>,
  userId?: Maybe<Scalars['ID']>,
};

export type GraphCms_RootQueryToContentRevisionUnionConnection = {
   __typename?: 'GraphCMS_RootQueryToContentRevisionUnionConnection',
  edges?: Maybe<Array<Maybe<GraphCms_RootQueryToContentRevisionUnionConnectionEdge>>>,
  nodes?: Maybe<Array<Maybe<GraphCms_ContentRevisionUnion>>>,
  pageInfo?: Maybe<GraphCms_WpPageInfo>,
};

export type GraphCms_RootQueryToContentRevisionUnionConnectionEdge = {
   __typename?: 'GraphCMS_RootQueryToContentRevisionUnionConnectionEdge',
  cursor?: Maybe<Scalars['String']>,
  node?: Maybe<GraphCms_ContentRevisionUnion>,
};

export type GraphCms_RootQueryToContentRevisionUnionConnectionWhereArgs = {
  author?: Maybe<Scalars['Int']>,
  authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>,
  authorName?: Maybe<Scalars['String']>,
  authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>,
  categoryId?: Maybe<Scalars['Int']>,
  categoryIn?: Maybe<Array<Maybe<Scalars['ID']>>>,
  categoryName?: Maybe<Scalars['String']>,
  categoryNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>,
  dateQuery?: Maybe<GraphCms_DateQueryInput>,
  hasPassword?: Maybe<Scalars['Boolean']>,
  id?: Maybe<Scalars['Int']>,
  in?: Maybe<Array<Maybe<Scalars['ID']>>>,
  mimeType?: Maybe<GraphCms_MimeTypeEnum>,
  name?: Maybe<Scalars['String']>,
  nameIn?: Maybe<Array<Maybe<Scalars['String']>>>,
  notIn?: Maybe<Array<Maybe<Scalars['ID']>>>,
  orderby?: Maybe<Array<Maybe<GraphCms_PostObjectsConnectionOrderbyInput>>>,
  parent?: Maybe<Scalars['String']>,
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>,
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>,
  password?: Maybe<Scalars['String']>,
  search?: Maybe<Scalars['String']>,
  stati?: Maybe<Array<Maybe<GraphCms_PostStatusEnum>>>,
  status?: Maybe<GraphCms_PostStatusEnum>,
  tag?: Maybe<Scalars['String']>,
  tagId?: Maybe<Scalars['String']>,
  tagIn?: Maybe<Array<Maybe<Scalars['ID']>>>,
  tagNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>,
  tagSlugAnd?: Maybe<Array<Maybe<Scalars['String']>>>,
  tagSlugIn?: Maybe<Array<Maybe<Scalars['String']>>>,
  title?: Maybe<Scalars['String']>,
};

export type GraphCms_RootQueryToCouponConnection = {
   __typename?: 'GraphCMS_RootQueryToCouponConnection',
  edges?: Maybe<Array<Maybe<GraphCms_RootQueryToCouponConnectionEdge>>>,
  nodes?: Maybe<Array<Maybe<GraphCms_Coupon>>>,
  pageInfo?: Maybe<GraphCms_WpPageInfo>,
};

export type GraphCms_RootQueryToCouponConnectionEdge = {
   __typename?: 'GraphCMS_RootQueryToCouponConnectionEdge',
  cursor?: Maybe<Scalars['String']>,
  node?: Maybe<GraphCms_Coupon>,
};

export type GraphCms_RootQueryToCouponConnectionWhereArgs = {
  code?: Maybe<Scalars['String']>,
  dateQuery?: Maybe<GraphCms_DateQueryInput>,
  exclude?: Maybe<Array<Maybe<Scalars['Int']>>>,
  include?: Maybe<Array<Maybe<Scalars['Int']>>>,
  orderby?: Maybe<Array<Maybe<GraphCms_PostTypeOrderbyInput>>>,
  parent?: Maybe<Scalars['Int']>,
  parentIn?: Maybe<Array<Maybe<Scalars['Int']>>>,
  parentNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>,
  search?: Maybe<Scalars['String']>,
};

export type GraphCms_RootQueryToCustomerConnection = {
   __typename?: 'GraphCMS_RootQueryToCustomerConnection',
  edges?: Maybe<Array<Maybe<GraphCms_RootQueryToCustomerConnectionEdge>>>,
  nodes?: Maybe<Array<Maybe<GraphCms_Customer>>>,
  pageInfo?: Maybe<GraphCms_WpPageInfo>,
};

export type GraphCms_RootQueryToCustomerConnectionEdge = {
   __typename?: 'GraphCMS_RootQueryToCustomerConnectionEdge',
  cursor?: Maybe<Scalars['String']>,
  node?: Maybe<GraphCms_Customer>,
};

export type GraphCms_RootQueryToCustomerConnectionWhereArgs = {
  email?: Maybe<Scalars['String']>,
  exclude?: Maybe<Array<Maybe<Scalars['Int']>>>,
  include?: Maybe<Array<Maybe<Scalars['Int']>>>,
  order?: Maybe<GraphCms_OrderEnum>,
  orderby?: Maybe<GraphCms_CustomerConnectionOrderbyEnum>,
  role?: Maybe<GraphCms_UserRoleEnum>,
  roleIn?: Maybe<Array<Maybe<GraphCms_UserRoleEnum>>>,
  roleNotIn?: Maybe<Array<Maybe<GraphCms_UserRoleEnum>>>,
  search?: Maybe<Scalars['String']>,
};

export type GraphCms_RootQueryToMediaItemConnection = {
   __typename?: 'GraphCMS_RootQueryToMediaItemConnection',
  edges?: Maybe<Array<Maybe<GraphCms_RootQueryToMediaItemConnectionEdge>>>,
  nodes?: Maybe<Array<Maybe<GraphCms_MediaItem>>>,
  pageInfo?: Maybe<GraphCms_WpPageInfo>,
  postTypeInfo?: Maybe<GraphCms_PostType>,
};

export type GraphCms_RootQueryToMediaItemConnectionEdge = {
   __typename?: 'GraphCMS_RootQueryToMediaItemConnectionEdge',
  cursor?: Maybe<Scalars['String']>,
  node?: Maybe<GraphCms_MediaItem>,
};

export type GraphCms_RootQueryToMediaItemConnectionWhereArgs = {
  author?: Maybe<Scalars['Int']>,
  authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>,
  authorName?: Maybe<Scalars['String']>,
  authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>,
  categoryId?: Maybe<Scalars['Int']>,
  categoryIn?: Maybe<Array<Maybe<Scalars['ID']>>>,
  categoryName?: Maybe<Scalars['String']>,
  categoryNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>,
  dateQuery?: Maybe<GraphCms_DateQueryInput>,
  hasPassword?: Maybe<Scalars['Boolean']>,
  id?: Maybe<Scalars['Int']>,
  in?: Maybe<Array<Maybe<Scalars['ID']>>>,
  mimeType?: Maybe<GraphCms_MimeTypeEnum>,
  name?: Maybe<Scalars['String']>,
  nameIn?: Maybe<Array<Maybe<Scalars['String']>>>,
  notIn?: Maybe<Array<Maybe<Scalars['ID']>>>,
  orderby?: Maybe<Array<Maybe<GraphCms_PostObjectsConnectionOrderbyInput>>>,
  parent?: Maybe<Scalars['String']>,
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>,
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>,
  password?: Maybe<Scalars['String']>,
  search?: Maybe<Scalars['String']>,
  stati?: Maybe<Array<Maybe<GraphCms_PostStatusEnum>>>,
  status?: Maybe<GraphCms_PostStatusEnum>,
  tag?: Maybe<Scalars['String']>,
  tagId?: Maybe<Scalars['String']>,
  tagIn?: Maybe<Array<Maybe<Scalars['ID']>>>,
  tagNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>,
  tagSlugAnd?: Maybe<Array<Maybe<Scalars['String']>>>,
  tagSlugIn?: Maybe<Array<Maybe<Scalars['String']>>>,
  title?: Maybe<Scalars['String']>,
};

export type GraphCms_RootQueryToMenuConnection = {
   __typename?: 'GraphCMS_RootQueryToMenuConnection',
  edges?: Maybe<Array<Maybe<GraphCms_RootQueryToMenuConnectionEdge>>>,
  nodes?: Maybe<Array<Maybe<GraphCms_Menu>>>,
  pageInfo?: Maybe<GraphCms_WpPageInfo>,
};

export type GraphCms_RootQueryToMenuConnectionEdge = {
   __typename?: 'GraphCMS_RootQueryToMenuConnectionEdge',
  cursor?: Maybe<Scalars['String']>,
  node?: Maybe<GraphCms_Menu>,
};

export type GraphCms_RootQueryToMenuConnectionWhereArgs = {
  id?: Maybe<Scalars['Int']>,
  location?: Maybe<GraphCms_MenuLocationEnum>,
  slug?: Maybe<Scalars['String']>,
};

export type GraphCms_RootQueryToMenuItemConnection = {
   __typename?: 'GraphCMS_RootQueryToMenuItemConnection',
  edges?: Maybe<Array<Maybe<GraphCms_RootQueryToMenuItemConnectionEdge>>>,
  nodes?: Maybe<Array<Maybe<GraphCms_MenuItem>>>,
  pageInfo?: Maybe<GraphCms_WpPageInfo>,
};

export type GraphCms_RootQueryToMenuItemConnectionEdge = {
   __typename?: 'GraphCMS_RootQueryToMenuItemConnectionEdge',
  cursor?: Maybe<Scalars['String']>,
  node?: Maybe<GraphCms_MenuItem>,
};

export type GraphCms_RootQueryToMenuItemConnectionWhereArgs = {
  id?: Maybe<Scalars['Int']>,
  location?: Maybe<GraphCms_MenuLocationEnum>,
};

export type GraphCms_RootQueryToOrderConnection = {
   __typename?: 'GraphCMS_RootQueryToOrderConnection',
  edges?: Maybe<Array<Maybe<GraphCms_RootQueryToOrderConnectionEdge>>>,
  nodes?: Maybe<Array<Maybe<GraphCms_Order>>>,
  pageInfo?: Maybe<GraphCms_WpPageInfo>,
};

export type GraphCms_RootQueryToOrderConnectionEdge = {
   __typename?: 'GraphCMS_RootQueryToOrderConnectionEdge',
  cursor?: Maybe<Scalars['String']>,
  node?: Maybe<GraphCms_Order>,
};

export type GraphCms_RootQueryToOrderConnectionWhereArgs = {
  customerId?: Maybe<Scalars['Int']>,
  customersIn?: Maybe<Array<Maybe<Scalars['Int']>>>,
  dateQuery?: Maybe<GraphCms_DateQueryInput>,
  exclude?: Maybe<Array<Maybe<Scalars['Int']>>>,
  include?: Maybe<Array<Maybe<Scalars['Int']>>>,
  orderby?: Maybe<Array<Maybe<GraphCms_OrdersOrderbyInput>>>,
  parent?: Maybe<Scalars['Int']>,
  parentIn?: Maybe<Array<Maybe<Scalars['Int']>>>,
  parentNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>,
  productId?: Maybe<Scalars['Int']>,
  search?: Maybe<Scalars['String']>,
  statuses?: Maybe<Array<Maybe<GraphCms_OrderStatusEnum>>>,
};

export type GraphCms_RootQueryToPageConnection = {
   __typename?: 'GraphCMS_RootQueryToPageConnection',
  edges?: Maybe<Array<Maybe<GraphCms_RootQueryToPageConnectionEdge>>>,
  nodes?: Maybe<Array<Maybe<GraphCms_Page>>>,
  pageInfo?: Maybe<GraphCms_WpPageInfo>,
  postTypeInfo?: Maybe<GraphCms_PostType>,
};

export type GraphCms_RootQueryToPageConnectionEdge = {
   __typename?: 'GraphCMS_RootQueryToPageConnectionEdge',
  cursor?: Maybe<Scalars['String']>,
  node?: Maybe<GraphCms_Page>,
};

export type GraphCms_RootQueryToPageConnectionWhereArgs = {
  author?: Maybe<Scalars['Int']>,
  authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>,
  authorName?: Maybe<Scalars['String']>,
  authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>,
  categoryId?: Maybe<Scalars['Int']>,
  categoryIn?: Maybe<Array<Maybe<Scalars['ID']>>>,
  categoryName?: Maybe<Scalars['String']>,
  categoryNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>,
  dateQuery?: Maybe<GraphCms_DateQueryInput>,
  hasPassword?: Maybe<Scalars['Boolean']>,
  id?: Maybe<Scalars['Int']>,
  in?: Maybe<Array<Maybe<Scalars['ID']>>>,
  mimeType?: Maybe<GraphCms_MimeTypeEnum>,
  name?: Maybe<Scalars['String']>,
  nameIn?: Maybe<Array<Maybe<Scalars['String']>>>,
  notIn?: Maybe<Array<Maybe<Scalars['ID']>>>,
  orderby?: Maybe<Array<Maybe<GraphCms_PostObjectsConnectionOrderbyInput>>>,
  parent?: Maybe<Scalars['String']>,
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>,
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>,
  password?: Maybe<Scalars['String']>,
  search?: Maybe<Scalars['String']>,
  stati?: Maybe<Array<Maybe<GraphCms_PostStatusEnum>>>,
  status?: Maybe<GraphCms_PostStatusEnum>,
  tag?: Maybe<Scalars['String']>,
  tagId?: Maybe<Scalars['String']>,
  tagIn?: Maybe<Array<Maybe<Scalars['ID']>>>,
  tagNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>,
  tagSlugAnd?: Maybe<Array<Maybe<Scalars['String']>>>,
  tagSlugIn?: Maybe<Array<Maybe<Scalars['String']>>>,
  title?: Maybe<Scalars['String']>,
};

export type GraphCms_RootQueryToPaHindConnection = {
   __typename?: 'GraphCMS_RootQueryToPaHindConnection',
  edges?: Maybe<Array<Maybe<GraphCms_RootQueryToPaHindConnectionEdge>>>,
  nodes?: Maybe<Array<Maybe<GraphCms_PaHind>>>,
  pageInfo?: Maybe<GraphCms_WpPageInfo>,
  taxonomyInfo?: Maybe<GraphCms_Taxonomy>,
};

export type GraphCms_RootQueryToPaHindConnectionEdge = {
   __typename?: 'GraphCMS_RootQueryToPaHindConnectionEdge',
  cursor?: Maybe<Scalars['String']>,
  node?: Maybe<GraphCms_PaHind>,
};

export type GraphCms_RootQueryToPaHindConnectionWhereArgs = {
  cacheDomain?: Maybe<Scalars['String']>,
  childOf?: Maybe<Scalars['Int']>,
  childless?: Maybe<Scalars['Boolean']>,
  descriptionLike?: Maybe<Scalars['String']>,
  exclude?: Maybe<Array<Maybe<Scalars['ID']>>>,
  excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>,
  hideEmpty?: Maybe<Scalars['Boolean']>,
  hierarchical?: Maybe<Scalars['Boolean']>,
  include?: Maybe<Array<Maybe<Scalars['ID']>>>,
  name?: Maybe<Array<Maybe<Scalars['String']>>>,
  nameLike?: Maybe<Scalars['String']>,
  objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>,
  orderby?: Maybe<GraphCms_TermObjectsConnectionOrderbyEnum>,
  padCounts?: Maybe<Scalars['Boolean']>,
  parent?: Maybe<Scalars['Int']>,
  search?: Maybe<Scalars['String']>,
  shouldOnlyIncludeConnectedItems?: Maybe<Scalars['Boolean']>,
  shouldOutputInFlatList?: Maybe<Scalars['Boolean']>,
  slug?: Maybe<Array<Maybe<Scalars['String']>>>,
  termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>,
  updateTermMetaCache?: Maybe<Scalars['Boolean']>,
};

export type GraphCms_RootQueryToPaHulkConnection = {
   __typename?: 'GraphCMS_RootQueryToPaHulkConnection',
  edges?: Maybe<Array<Maybe<GraphCms_RootQueryToPaHulkConnectionEdge>>>,
  nodes?: Maybe<Array<Maybe<GraphCms_PaHulk>>>,
  pageInfo?: Maybe<GraphCms_WpPageInfo>,
  taxonomyInfo?: Maybe<GraphCms_Taxonomy>,
};

export type GraphCms_RootQueryToPaHulkConnectionEdge = {
   __typename?: 'GraphCMS_RootQueryToPaHulkConnectionEdge',
  cursor?: Maybe<Scalars['String']>,
  node?: Maybe<GraphCms_PaHulk>,
};

export type GraphCms_RootQueryToPaHulkConnectionWhereArgs = {
  cacheDomain?: Maybe<Scalars['String']>,
  childOf?: Maybe<Scalars['Int']>,
  childless?: Maybe<Scalars['Boolean']>,
  descriptionLike?: Maybe<Scalars['String']>,
  exclude?: Maybe<Array<Maybe<Scalars['ID']>>>,
  excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>,
  hideEmpty?: Maybe<Scalars['Boolean']>,
  hierarchical?: Maybe<Scalars['Boolean']>,
  include?: Maybe<Array<Maybe<Scalars['ID']>>>,
  name?: Maybe<Array<Maybe<Scalars['String']>>>,
  nameLike?: Maybe<Scalars['String']>,
  objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>,
  orderby?: Maybe<GraphCms_TermObjectsConnectionOrderbyEnum>,
  padCounts?: Maybe<Scalars['Boolean']>,
  parent?: Maybe<Scalars['Int']>,
  search?: Maybe<Scalars['String']>,
  shouldOnlyIncludeConnectedItems?: Maybe<Scalars['Boolean']>,
  shouldOutputInFlatList?: Maybe<Scalars['Boolean']>,
  slug?: Maybe<Array<Maybe<Scalars['String']>>>,
  termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>,
  updateTermMetaCache?: Maybe<Scalars['Boolean']>,
};

export type GraphCms_RootQueryToPaKasutusaegConnection = {
   __typename?: 'GraphCMS_RootQueryToPaKasutusaegConnection',
  edges?: Maybe<Array<Maybe<GraphCms_RootQueryToPaKasutusaegConnectionEdge>>>,
  nodes?: Maybe<Array<Maybe<GraphCms_PaKasutusaeg>>>,
  pageInfo?: Maybe<GraphCms_WpPageInfo>,
  taxonomyInfo?: Maybe<GraphCms_Taxonomy>,
};

export type GraphCms_RootQueryToPaKasutusaegConnectionEdge = {
   __typename?: 'GraphCMS_RootQueryToPaKasutusaegConnectionEdge',
  cursor?: Maybe<Scalars['String']>,
  node?: Maybe<GraphCms_PaKasutusaeg>,
};

export type GraphCms_RootQueryToPaKasutusaegConnectionWhereArgs = {
  cacheDomain?: Maybe<Scalars['String']>,
  childOf?: Maybe<Scalars['Int']>,
  childless?: Maybe<Scalars['Boolean']>,
  descriptionLike?: Maybe<Scalars['String']>,
  exclude?: Maybe<Array<Maybe<Scalars['ID']>>>,
  excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>,
  hideEmpty?: Maybe<Scalars['Boolean']>,
  hierarchical?: Maybe<Scalars['Boolean']>,
  include?: Maybe<Array<Maybe<Scalars['ID']>>>,
  name?: Maybe<Array<Maybe<Scalars['String']>>>,
  nameLike?: Maybe<Scalars['String']>,
  objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>,
  orderby?: Maybe<GraphCms_TermObjectsConnectionOrderbyEnum>,
  padCounts?: Maybe<Scalars['Boolean']>,
  parent?: Maybe<Scalars['Int']>,
  search?: Maybe<Scalars['String']>,
  shouldOnlyIncludeConnectedItems?: Maybe<Scalars['Boolean']>,
  shouldOutputInFlatList?: Maybe<Scalars['Boolean']>,
  slug?: Maybe<Array<Maybe<Scalars['String']>>>,
  termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>,
  updateTermMetaCache?: Maybe<Scalars['Boolean']>,
};

export type GraphCms_RootQueryToPaKogusConnection = {
   __typename?: 'GraphCMS_RootQueryToPaKogusConnection',
  edges?: Maybe<Array<Maybe<GraphCms_RootQueryToPaKogusConnectionEdge>>>,
  nodes?: Maybe<Array<Maybe<GraphCms_PaKogus>>>,
  pageInfo?: Maybe<GraphCms_WpPageInfo>,
  taxonomyInfo?: Maybe<GraphCms_Taxonomy>,
};

export type GraphCms_RootQueryToPaKogusConnectionEdge = {
   __typename?: 'GraphCMS_RootQueryToPaKogusConnectionEdge',
  cursor?: Maybe<Scalars['String']>,
  node?: Maybe<GraphCms_PaKogus>,
};

export type GraphCms_RootQueryToPaKogusConnectionWhereArgs = {
  cacheDomain?: Maybe<Scalars['String']>,
  childOf?: Maybe<Scalars['Int']>,
  childless?: Maybe<Scalars['Boolean']>,
  descriptionLike?: Maybe<Scalars['String']>,
  exclude?: Maybe<Array<Maybe<Scalars['ID']>>>,
  excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>,
  hideEmpty?: Maybe<Scalars['Boolean']>,
  hierarchical?: Maybe<Scalars['Boolean']>,
  include?: Maybe<Array<Maybe<Scalars['ID']>>>,
  name?: Maybe<Array<Maybe<Scalars['String']>>>,
  nameLike?: Maybe<Scalars['String']>,
  objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>,
  orderby?: Maybe<GraphCms_TermObjectsConnectionOrderbyEnum>,
  padCounts?: Maybe<Scalars['Boolean']>,
  parent?: Maybe<Scalars['Int']>,
  search?: Maybe<Scalars['String']>,
  shouldOnlyIncludeConnectedItems?: Maybe<Scalars['Boolean']>,
  shouldOutputInFlatList?: Maybe<Scalars['Boolean']>,
  slug?: Maybe<Array<Maybe<Scalars['String']>>>,
  termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>,
  updateTermMetaCache?: Maybe<Scalars['Boolean']>,
};

export type GraphCms_RootQueryToPaKontuurConnection = {
   __typename?: 'GraphCMS_RootQueryToPaKontuurConnection',
  edges?: Maybe<Array<Maybe<GraphCms_RootQueryToPaKontuurConnectionEdge>>>,
  nodes?: Maybe<Array<Maybe<GraphCms_PaKontuur>>>,
  pageInfo?: Maybe<GraphCms_WpPageInfo>,
  taxonomyInfo?: Maybe<GraphCms_Taxonomy>,
};

export type GraphCms_RootQueryToPaKontuurConnectionEdge = {
   __typename?: 'GraphCMS_RootQueryToPaKontuurConnectionEdge',
  cursor?: Maybe<Scalars['String']>,
  node?: Maybe<GraphCms_PaKontuur>,
};

export type GraphCms_RootQueryToPaKontuurConnectionWhereArgs = {
  cacheDomain?: Maybe<Scalars['String']>,
  childOf?: Maybe<Scalars['Int']>,
  childless?: Maybe<Scalars['Boolean']>,
  descriptionLike?: Maybe<Scalars['String']>,
  exclude?: Maybe<Array<Maybe<Scalars['ID']>>>,
  excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>,
  hideEmpty?: Maybe<Scalars['Boolean']>,
  hierarchical?: Maybe<Scalars['Boolean']>,
  include?: Maybe<Array<Maybe<Scalars['ID']>>>,
  name?: Maybe<Array<Maybe<Scalars['String']>>>,
  nameLike?: Maybe<Scalars['String']>,
  objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>,
  orderby?: Maybe<GraphCms_TermObjectsConnectionOrderbyEnum>,
  padCounts?: Maybe<Scalars['Boolean']>,
  parent?: Maybe<Scalars['Int']>,
  search?: Maybe<Scalars['String']>,
  shouldOnlyIncludeConnectedItems?: Maybe<Scalars['Boolean']>,
  shouldOutputInFlatList?: Maybe<Scalars['Boolean']>,
  slug?: Maybe<Array<Maybe<Scalars['String']>>>,
  termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>,
  updateTermMetaCache?: Maybe<Scalars['Boolean']>,
};

export type GraphCms_RootQueryToPaKoostisainedConnection = {
   __typename?: 'GraphCMS_RootQueryToPaKoostisainedConnection',
  edges?: Maybe<Array<Maybe<GraphCms_RootQueryToPaKoostisainedConnectionEdge>>>,
  nodes?: Maybe<Array<Maybe<GraphCms_PaKoostisained>>>,
  pageInfo?: Maybe<GraphCms_WpPageInfo>,
  taxonomyInfo?: Maybe<GraphCms_Taxonomy>,
};

export type GraphCms_RootQueryToPaKoostisainedConnectionEdge = {
   __typename?: 'GraphCMS_RootQueryToPaKoostisainedConnectionEdge',
  cursor?: Maybe<Scalars['String']>,
  node?: Maybe<GraphCms_PaKoostisained>,
};

export type GraphCms_RootQueryToPaKoostisainedConnectionWhereArgs = {
  cacheDomain?: Maybe<Scalars['String']>,
  childOf?: Maybe<Scalars['Int']>,
  childless?: Maybe<Scalars['Boolean']>,
  descriptionLike?: Maybe<Scalars['String']>,
  exclude?: Maybe<Array<Maybe<Scalars['ID']>>>,
  excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>,
  hideEmpty?: Maybe<Scalars['Boolean']>,
  hierarchical?: Maybe<Scalars['Boolean']>,
  include?: Maybe<Array<Maybe<Scalars['ID']>>>,
  name?: Maybe<Array<Maybe<Scalars['String']>>>,
  nameLike?: Maybe<Scalars['String']>,
  objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>,
  orderby?: Maybe<GraphCms_TermObjectsConnectionOrderbyEnum>,
  padCounts?: Maybe<Scalars['Boolean']>,
  parent?: Maybe<Scalars['Int']>,
  search?: Maybe<Scalars['String']>,
  shouldOnlyIncludeConnectedItems?: Maybe<Scalars['Boolean']>,
  shouldOutputInFlatList?: Maybe<Scalars['Boolean']>,
  slug?: Maybe<Array<Maybe<Scalars['String']>>>,
  termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>,
  updateTermMetaCache?: Maybe<Scalars['Boolean']>,
};

export type GraphCms_RootQueryToPaLaadimisaegConnection = {
   __typename?: 'GraphCMS_RootQueryToPaLaadimisaegConnection',
  edges?: Maybe<Array<Maybe<GraphCms_RootQueryToPaLaadimisaegConnectionEdge>>>,
  nodes?: Maybe<Array<Maybe<GraphCms_PaLaadimisaeg>>>,
  pageInfo?: Maybe<GraphCms_WpPageInfo>,
  taxonomyInfo?: Maybe<GraphCms_Taxonomy>,
};

export type GraphCms_RootQueryToPaLaadimisaegConnectionEdge = {
   __typename?: 'GraphCMS_RootQueryToPaLaadimisaegConnectionEdge',
  cursor?: Maybe<Scalars['String']>,
  node?: Maybe<GraphCms_PaLaadimisaeg>,
};

export type GraphCms_RootQueryToPaLaadimisaegConnectionWhereArgs = {
  cacheDomain?: Maybe<Scalars['String']>,
  childOf?: Maybe<Scalars['Int']>,
  childless?: Maybe<Scalars['Boolean']>,
  descriptionLike?: Maybe<Scalars['String']>,
  exclude?: Maybe<Array<Maybe<Scalars['ID']>>>,
  excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>,
  hideEmpty?: Maybe<Scalars['Boolean']>,
  hierarchical?: Maybe<Scalars['Boolean']>,
  include?: Maybe<Array<Maybe<Scalars['ID']>>>,
  name?: Maybe<Array<Maybe<Scalars['String']>>>,
  nameLike?: Maybe<Scalars['String']>,
  objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>,
  orderby?: Maybe<GraphCms_TermObjectsConnectionOrderbyEnum>,
  padCounts?: Maybe<Scalars['Boolean']>,
  parent?: Maybe<Scalars['Int']>,
  search?: Maybe<Scalars['String']>,
  shouldOnlyIncludeConnectedItems?: Maybe<Scalars['Boolean']>,
  shouldOutputInFlatList?: Maybe<Scalars['Boolean']>,
  slug?: Maybe<Array<Maybe<Scalars['String']>>>,
  termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>,
  updateTermMetaCache?: Maybe<Scalars['Boolean']>,
};

export type GraphCms_RootQueryToPaMaterjalConnection = {
   __typename?: 'GraphCMS_RootQueryToPaMaterjalConnection',
  edges?: Maybe<Array<Maybe<GraphCms_RootQueryToPaMaterjalConnectionEdge>>>,
  nodes?: Maybe<Array<Maybe<GraphCms_PaMaterjal>>>,
  pageInfo?: Maybe<GraphCms_WpPageInfo>,
  taxonomyInfo?: Maybe<GraphCms_Taxonomy>,
};

export type GraphCms_RootQueryToPaMaterjalConnectionEdge = {
   __typename?: 'GraphCMS_RootQueryToPaMaterjalConnectionEdge',
  cursor?: Maybe<Scalars['String']>,
  node?: Maybe<GraphCms_PaMaterjal>,
};

export type GraphCms_RootQueryToPaMaterjalConnectionWhereArgs = {
  cacheDomain?: Maybe<Scalars['String']>,
  childOf?: Maybe<Scalars['Int']>,
  childless?: Maybe<Scalars['Boolean']>,
  descriptionLike?: Maybe<Scalars['String']>,
  exclude?: Maybe<Array<Maybe<Scalars['ID']>>>,
  excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>,
  hideEmpty?: Maybe<Scalars['Boolean']>,
  hierarchical?: Maybe<Scalars['Boolean']>,
  include?: Maybe<Array<Maybe<Scalars['ID']>>>,
  name?: Maybe<Array<Maybe<Scalars['String']>>>,
  nameLike?: Maybe<Scalars['String']>,
  objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>,
  orderby?: Maybe<GraphCms_TermObjectsConnectionOrderbyEnum>,
  padCounts?: Maybe<Scalars['Boolean']>,
  parent?: Maybe<Scalars['Int']>,
  search?: Maybe<Scalars['String']>,
  shouldOnlyIncludeConnectedItems?: Maybe<Scalars['Boolean']>,
  shouldOutputInFlatList?: Maybe<Scalars['Boolean']>,
  slug?: Maybe<Array<Maybe<Scalars['String']>>>,
  termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>,
  updateTermMetaCache?: Maybe<Scalars['Boolean']>,
};

export type GraphCms_RootQueryToPaMuratasaConnection = {
   __typename?: 'GraphCMS_RootQueryToPaMuratasaConnection',
  edges?: Maybe<Array<Maybe<GraphCms_RootQueryToPaMuratasaConnectionEdge>>>,
  nodes?: Maybe<Array<Maybe<GraphCms_PaMuratasa>>>,
  pageInfo?: Maybe<GraphCms_WpPageInfo>,
  taxonomyInfo?: Maybe<GraphCms_Taxonomy>,
};

export type GraphCms_RootQueryToPaMuratasaConnectionEdge = {
   __typename?: 'GraphCMS_RootQueryToPaMuratasaConnectionEdge',
  cursor?: Maybe<Scalars['String']>,
  node?: Maybe<GraphCms_PaMuratasa>,
};

export type GraphCms_RootQueryToPaMuratasaConnectionWhereArgs = {
  cacheDomain?: Maybe<Scalars['String']>,
  childOf?: Maybe<Scalars['Int']>,
  childless?: Maybe<Scalars['Boolean']>,
  descriptionLike?: Maybe<Scalars['String']>,
  exclude?: Maybe<Array<Maybe<Scalars['ID']>>>,
  excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>,
  hideEmpty?: Maybe<Scalars['Boolean']>,
  hierarchical?: Maybe<Scalars['Boolean']>,
  include?: Maybe<Array<Maybe<Scalars['ID']>>>,
  name?: Maybe<Array<Maybe<Scalars['String']>>>,
  nameLike?: Maybe<Scalars['String']>,
  objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>,
  orderby?: Maybe<GraphCms_TermObjectsConnectionOrderbyEnum>,
  padCounts?: Maybe<Scalars['Boolean']>,
  parent?: Maybe<Scalars['Int']>,
  search?: Maybe<Scalars['String']>,
  shouldOnlyIncludeConnectedItems?: Maybe<Scalars['Boolean']>,
  shouldOutputInFlatList?: Maybe<Scalars['Boolean']>,
  slug?: Maybe<Array<Maybe<Scalars['String']>>>,
  termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>,
  updateTermMetaCache?: Maybe<Scalars['Boolean']>,
};

export type GraphCms_RootQueryToPaOhutusConnection = {
   __typename?: 'GraphCMS_RootQueryToPaOhutusConnection',
  edges?: Maybe<Array<Maybe<GraphCms_RootQueryToPaOhutusConnectionEdge>>>,
  nodes?: Maybe<Array<Maybe<GraphCms_PaOhutus>>>,
  pageInfo?: Maybe<GraphCms_WpPageInfo>,
  taxonomyInfo?: Maybe<GraphCms_Taxonomy>,
};

export type GraphCms_RootQueryToPaOhutusConnectionEdge = {
   __typename?: 'GraphCMS_RootQueryToPaOhutusConnectionEdge',
  cursor?: Maybe<Scalars['String']>,
  node?: Maybe<GraphCms_PaOhutus>,
};

export type GraphCms_RootQueryToPaOhutusConnectionWhereArgs = {
  cacheDomain?: Maybe<Scalars['String']>,
  childOf?: Maybe<Scalars['Int']>,
  childless?: Maybe<Scalars['Boolean']>,
  descriptionLike?: Maybe<Scalars['String']>,
  exclude?: Maybe<Array<Maybe<Scalars['ID']>>>,
  excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>,
  hideEmpty?: Maybe<Scalars['Boolean']>,
  hierarchical?: Maybe<Scalars['Boolean']>,
  include?: Maybe<Array<Maybe<Scalars['ID']>>>,
  name?: Maybe<Array<Maybe<Scalars['String']>>>,
  nameLike?: Maybe<Scalars['String']>,
  objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>,
  orderby?: Maybe<GraphCms_TermObjectsConnectionOrderbyEnum>,
  padCounts?: Maybe<Scalars['Boolean']>,
  parent?: Maybe<Scalars['Int']>,
  search?: Maybe<Scalars['String']>,
  shouldOnlyIncludeConnectedItems?: Maybe<Scalars['Boolean']>,
  shouldOutputInFlatList?: Maybe<Scalars['Boolean']>,
  slug?: Maybe<Array<Maybe<Scalars['String']>>>,
  termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>,
  updateTermMetaCache?: Maybe<Scalars['Boolean']>,
};

export type GraphCms_RootQueryToPaPatareidConnection = {
   __typename?: 'GraphCMS_RootQueryToPaPatareidConnection',
  edges?: Maybe<Array<Maybe<GraphCms_RootQueryToPaPatareidConnectionEdge>>>,
  nodes?: Maybe<Array<Maybe<GraphCms_PaPatareid>>>,
  pageInfo?: Maybe<GraphCms_WpPageInfo>,
  taxonomyInfo?: Maybe<GraphCms_Taxonomy>,
};

export type GraphCms_RootQueryToPaPatareidConnectionEdge = {
   __typename?: 'GraphCMS_RootQueryToPaPatareidConnectionEdge',
  cursor?: Maybe<Scalars['String']>,
  node?: Maybe<GraphCms_PaPatareid>,
};

export type GraphCms_RootQueryToPaPatareidConnectionWhereArgs = {
  cacheDomain?: Maybe<Scalars['String']>,
  childOf?: Maybe<Scalars['Int']>,
  childless?: Maybe<Scalars['Boolean']>,
  descriptionLike?: Maybe<Scalars['String']>,
  exclude?: Maybe<Array<Maybe<Scalars['ID']>>>,
  excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>,
  hideEmpty?: Maybe<Scalars['Boolean']>,
  hierarchical?: Maybe<Scalars['Boolean']>,
  include?: Maybe<Array<Maybe<Scalars['ID']>>>,
  name?: Maybe<Array<Maybe<Scalars['String']>>>,
  nameLike?: Maybe<Scalars['String']>,
  objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>,
  orderby?: Maybe<GraphCms_TermObjectsConnectionOrderbyEnum>,
  padCounts?: Maybe<Scalars['Boolean']>,
  parent?: Maybe<Scalars['Int']>,
  search?: Maybe<Scalars['String']>,
  shouldOnlyIncludeConnectedItems?: Maybe<Scalars['Boolean']>,
  shouldOutputInFlatList?: Maybe<Scalars['Boolean']>,
  slug?: Maybe<Array<Maybe<Scalars['String']>>>,
  termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>,
  updateTermMetaCache?: Maybe<Scalars['Boolean']>,
};

export type GraphCms_RootQueryToPaSuurusConnection = {
   __typename?: 'GraphCMS_RootQueryToPaSuurusConnection',
  edges?: Maybe<Array<Maybe<GraphCms_RootQueryToPaSuurusConnectionEdge>>>,
  nodes?: Maybe<Array<Maybe<GraphCms_PaSuurus>>>,
  pageInfo?: Maybe<GraphCms_WpPageInfo>,
  taxonomyInfo?: Maybe<GraphCms_Taxonomy>,
};

export type GraphCms_RootQueryToPaSuurusConnectionEdge = {
   __typename?: 'GraphCMS_RootQueryToPaSuurusConnectionEdge',
  cursor?: Maybe<Scalars['String']>,
  node?: Maybe<GraphCms_PaSuurus>,
};

export type GraphCms_RootQueryToPaSuurusConnectionWhereArgs = {
  cacheDomain?: Maybe<Scalars['String']>,
  childOf?: Maybe<Scalars['Int']>,
  childless?: Maybe<Scalars['Boolean']>,
  descriptionLike?: Maybe<Scalars['String']>,
  exclude?: Maybe<Array<Maybe<Scalars['ID']>>>,
  excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>,
  hideEmpty?: Maybe<Scalars['Boolean']>,
  hierarchical?: Maybe<Scalars['Boolean']>,
  include?: Maybe<Array<Maybe<Scalars['ID']>>>,
  name?: Maybe<Array<Maybe<Scalars['String']>>>,
  nameLike?: Maybe<Scalars['String']>,
  objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>,
  orderby?: Maybe<GraphCms_TermObjectsConnectionOrderbyEnum>,
  padCounts?: Maybe<Scalars['Boolean']>,
  parent?: Maybe<Scalars['Int']>,
  search?: Maybe<Scalars['String']>,
  shouldOnlyIncludeConnectedItems?: Maybe<Scalars['Boolean']>,
  shouldOutputInFlatList?: Maybe<Scalars['Boolean']>,
  slug?: Maybe<Array<Maybe<Scalars['String']>>>,
  termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>,
  updateTermMetaCache?: Maybe<Scalars['Boolean']>,
};

export type GraphCms_RootQueryToPaVariantConnection = {
   __typename?: 'GraphCMS_RootQueryToPaVariantConnection',
  edges?: Maybe<Array<Maybe<GraphCms_RootQueryToPaVariantConnectionEdge>>>,
  nodes?: Maybe<Array<Maybe<GraphCms_PaVariant>>>,
  pageInfo?: Maybe<GraphCms_WpPageInfo>,
  taxonomyInfo?: Maybe<GraphCms_Taxonomy>,
};

export type GraphCms_RootQueryToPaVariantConnectionEdge = {
   __typename?: 'GraphCMS_RootQueryToPaVariantConnectionEdge',
  cursor?: Maybe<Scalars['String']>,
  node?: Maybe<GraphCms_PaVariant>,
};

export type GraphCms_RootQueryToPaVariantConnectionWhereArgs = {
  cacheDomain?: Maybe<Scalars['String']>,
  childOf?: Maybe<Scalars['Int']>,
  childless?: Maybe<Scalars['Boolean']>,
  descriptionLike?: Maybe<Scalars['String']>,
  exclude?: Maybe<Array<Maybe<Scalars['ID']>>>,
  excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>,
  hideEmpty?: Maybe<Scalars['Boolean']>,
  hierarchical?: Maybe<Scalars['Boolean']>,
  include?: Maybe<Array<Maybe<Scalars['ID']>>>,
  name?: Maybe<Array<Maybe<Scalars['String']>>>,
  nameLike?: Maybe<Scalars['String']>,
  objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>,
  orderby?: Maybe<GraphCms_TermObjectsConnectionOrderbyEnum>,
  padCounts?: Maybe<Scalars['Boolean']>,
  parent?: Maybe<Scalars['Int']>,
  search?: Maybe<Scalars['String']>,
  shouldOnlyIncludeConnectedItems?: Maybe<Scalars['Boolean']>,
  shouldOutputInFlatList?: Maybe<Scalars['Boolean']>,
  slug?: Maybe<Array<Maybe<Scalars['String']>>>,
  termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>,
  updateTermMetaCache?: Maybe<Scalars['Boolean']>,
};

export type GraphCms_RootQueryToPaVarvConnection = {
   __typename?: 'GraphCMS_RootQueryToPaVarvConnection',
  edges?: Maybe<Array<Maybe<GraphCms_RootQueryToPaVarvConnectionEdge>>>,
  nodes?: Maybe<Array<Maybe<GraphCms_PaVarv>>>,
  pageInfo?: Maybe<GraphCms_WpPageInfo>,
  taxonomyInfo?: Maybe<GraphCms_Taxonomy>,
};

export type GraphCms_RootQueryToPaVarvConnectionEdge = {
   __typename?: 'GraphCMS_RootQueryToPaVarvConnectionEdge',
  cursor?: Maybe<Scalars['String']>,
  node?: Maybe<GraphCms_PaVarv>,
};

export type GraphCms_RootQueryToPaVarvConnectionWhereArgs = {
  cacheDomain?: Maybe<Scalars['String']>,
  childOf?: Maybe<Scalars['Int']>,
  childless?: Maybe<Scalars['Boolean']>,
  descriptionLike?: Maybe<Scalars['String']>,
  exclude?: Maybe<Array<Maybe<Scalars['ID']>>>,
  excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>,
  hideEmpty?: Maybe<Scalars['Boolean']>,
  hierarchical?: Maybe<Scalars['Boolean']>,
  include?: Maybe<Array<Maybe<Scalars['ID']>>>,
  name?: Maybe<Array<Maybe<Scalars['String']>>>,
  nameLike?: Maybe<Scalars['String']>,
  objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>,
  orderby?: Maybe<GraphCms_TermObjectsConnectionOrderbyEnum>,
  padCounts?: Maybe<Scalars['Boolean']>,
  parent?: Maybe<Scalars['Int']>,
  search?: Maybe<Scalars['String']>,
  shouldOnlyIncludeConnectedItems?: Maybe<Scalars['Boolean']>,
  shouldOutputInFlatList?: Maybe<Scalars['Boolean']>,
  slug?: Maybe<Array<Maybe<Scalars['String']>>>,
  termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>,
  updateTermMetaCache?: Maybe<Scalars['Boolean']>,
};

export type GraphCms_RootQueryToPaVeekindlusConnection = {
   __typename?: 'GraphCMS_RootQueryToPaVeekindlusConnection',
  edges?: Maybe<Array<Maybe<GraphCms_RootQueryToPaVeekindlusConnectionEdge>>>,
  nodes?: Maybe<Array<Maybe<GraphCms_PaVeekindlus>>>,
  pageInfo?: Maybe<GraphCms_WpPageInfo>,
  taxonomyInfo?: Maybe<GraphCms_Taxonomy>,
};

export type GraphCms_RootQueryToPaVeekindlusConnectionEdge = {
   __typename?: 'GraphCMS_RootQueryToPaVeekindlusConnectionEdge',
  cursor?: Maybe<Scalars['String']>,
  node?: Maybe<GraphCms_PaVeekindlus>,
};

export type GraphCms_RootQueryToPaVeekindlusConnectionWhereArgs = {
  cacheDomain?: Maybe<Scalars['String']>,
  childOf?: Maybe<Scalars['Int']>,
  childless?: Maybe<Scalars['Boolean']>,
  descriptionLike?: Maybe<Scalars['String']>,
  exclude?: Maybe<Array<Maybe<Scalars['ID']>>>,
  excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>,
  hideEmpty?: Maybe<Scalars['Boolean']>,
  hierarchical?: Maybe<Scalars['Boolean']>,
  include?: Maybe<Array<Maybe<Scalars['ID']>>>,
  name?: Maybe<Array<Maybe<Scalars['String']>>>,
  nameLike?: Maybe<Scalars['String']>,
  objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>,
  orderby?: Maybe<GraphCms_TermObjectsConnectionOrderbyEnum>,
  padCounts?: Maybe<Scalars['Boolean']>,
  parent?: Maybe<Scalars['Int']>,
  search?: Maybe<Scalars['String']>,
  shouldOnlyIncludeConnectedItems?: Maybe<Scalars['Boolean']>,
  shouldOutputInFlatList?: Maybe<Scalars['Boolean']>,
  slug?: Maybe<Array<Maybe<Scalars['String']>>>,
  termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>,
  updateTermMetaCache?: Maybe<Scalars['Boolean']>,
};

export type GraphCms_RootQueryToPaymentGatewayConnection = {
   __typename?: 'GraphCMS_RootQueryToPaymentGatewayConnection',
  edges?: Maybe<Array<Maybe<GraphCms_RootQueryToPaymentGatewayConnectionEdge>>>,
  nodes?: Maybe<Array<Maybe<GraphCms_PaymentGateway>>>,
  pageInfo?: Maybe<GraphCms_WpPageInfo>,
};

export type GraphCms_RootQueryToPaymentGatewayConnectionEdge = {
   __typename?: 'GraphCMS_RootQueryToPaymentGatewayConnectionEdge',
  cursor?: Maybe<Scalars['String']>,
  node?: Maybe<GraphCms_PaymentGateway>,
};

export type GraphCms_RootQueryToPaymentGatewayConnectionWhereArgs = {
  all?: Maybe<Scalars['Boolean']>,
};

export type GraphCms_RootQueryToPluginConnection = {
   __typename?: 'GraphCMS_RootQueryToPluginConnection',
  edges?: Maybe<Array<Maybe<GraphCms_RootQueryToPluginConnectionEdge>>>,
  nodes?: Maybe<Array<Maybe<GraphCms_Plugin>>>,
  pageInfo?: Maybe<GraphCms_WpPageInfo>,
};

export type GraphCms_RootQueryToPluginConnectionEdge = {
   __typename?: 'GraphCMS_RootQueryToPluginConnectionEdge',
  cursor?: Maybe<Scalars['String']>,
  node?: Maybe<GraphCms_Plugin>,
};

export type GraphCms_RootQueryToPostConnection = {
   __typename?: 'GraphCMS_RootQueryToPostConnection',
  edges?: Maybe<Array<Maybe<GraphCms_RootQueryToPostConnectionEdge>>>,
  nodes?: Maybe<Array<Maybe<GraphCms_Post>>>,
  pageInfo?: Maybe<GraphCms_WpPageInfo>,
  postTypeInfo?: Maybe<GraphCms_PostType>,
};

export type GraphCms_RootQueryToPostConnectionEdge = {
   __typename?: 'GraphCMS_RootQueryToPostConnectionEdge',
  cursor?: Maybe<Scalars['String']>,
  node?: Maybe<GraphCms_Post>,
};

export type GraphCms_RootQueryToPostConnectionWhereArgs = {
  author?: Maybe<Scalars['Int']>,
  authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>,
  authorName?: Maybe<Scalars['String']>,
  authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>,
  categoryId?: Maybe<Scalars['Int']>,
  categoryIn?: Maybe<Array<Maybe<Scalars['ID']>>>,
  categoryName?: Maybe<Scalars['String']>,
  categoryNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>,
  dateQuery?: Maybe<GraphCms_DateQueryInput>,
  hasPassword?: Maybe<Scalars['Boolean']>,
  id?: Maybe<Scalars['Int']>,
  in?: Maybe<Array<Maybe<Scalars['ID']>>>,
  mimeType?: Maybe<GraphCms_MimeTypeEnum>,
  name?: Maybe<Scalars['String']>,
  nameIn?: Maybe<Array<Maybe<Scalars['String']>>>,
  notIn?: Maybe<Array<Maybe<Scalars['ID']>>>,
  orderby?: Maybe<Array<Maybe<GraphCms_PostObjectsConnectionOrderbyInput>>>,
  parent?: Maybe<Scalars['String']>,
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>,
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>,
  password?: Maybe<Scalars['String']>,
  search?: Maybe<Scalars['String']>,
  stati?: Maybe<Array<Maybe<GraphCms_PostStatusEnum>>>,
  status?: Maybe<GraphCms_PostStatusEnum>,
  tag?: Maybe<Scalars['String']>,
  tagId?: Maybe<Scalars['String']>,
  tagIn?: Maybe<Array<Maybe<Scalars['ID']>>>,
  tagNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>,
  tagSlugAnd?: Maybe<Array<Maybe<Scalars['String']>>>,
  tagSlugIn?: Maybe<Array<Maybe<Scalars['String']>>>,
  title?: Maybe<Scalars['String']>,
};

export type GraphCms_RootQueryToProductCategoryConnection = {
   __typename?: 'GraphCMS_RootQueryToProductCategoryConnection',
  edges?: Maybe<Array<Maybe<GraphCms_RootQueryToProductCategoryConnectionEdge>>>,
  nodes?: Maybe<Array<Maybe<GraphCms_ProductCategory>>>,
  pageInfo?: Maybe<GraphCms_WpPageInfo>,
  taxonomyInfo?: Maybe<GraphCms_Taxonomy>,
};

export type GraphCms_RootQueryToProductCategoryConnectionEdge = {
   __typename?: 'GraphCMS_RootQueryToProductCategoryConnectionEdge',
  cursor?: Maybe<Scalars['String']>,
  node?: Maybe<GraphCms_ProductCategory>,
};

export type GraphCms_RootQueryToProductCategoryConnectionWhereArgs = {
  cacheDomain?: Maybe<Scalars['String']>,
  childOf?: Maybe<Scalars['Int']>,
  childless?: Maybe<Scalars['Boolean']>,
  descriptionLike?: Maybe<Scalars['String']>,
  exclude?: Maybe<Array<Maybe<Scalars['ID']>>>,
  excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>,
  hideEmpty?: Maybe<Scalars['Boolean']>,
  hierarchical?: Maybe<Scalars['Boolean']>,
  include?: Maybe<Array<Maybe<Scalars['ID']>>>,
  name?: Maybe<Array<Maybe<Scalars['String']>>>,
  nameLike?: Maybe<Scalars['String']>,
  objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>,
  orderby?: Maybe<GraphCms_TermObjectsConnectionOrderbyEnum>,
  padCounts?: Maybe<Scalars['Boolean']>,
  parent?: Maybe<Scalars['Int']>,
  search?: Maybe<Scalars['String']>,
  shouldOnlyIncludeConnectedItems?: Maybe<Scalars['Boolean']>,
  shouldOutputInFlatList?: Maybe<Scalars['Boolean']>,
  slug?: Maybe<Array<Maybe<Scalars['String']>>>,
  termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>,
  updateTermMetaCache?: Maybe<Scalars['Boolean']>,
};

export type GraphCms_RootQueryToProductConnection = {
   __typename?: 'GraphCMS_RootQueryToProductConnection',
  edges?: Maybe<Array<Maybe<GraphCms_RootQueryToProductConnectionEdge>>>,
  nodes?: Maybe<Array<Maybe<GraphCms_Product>>>,
  pageInfo?: Maybe<GraphCms_WpPageInfo>,
};

export type GraphCms_RootQueryToProductConnectionEdge = {
   __typename?: 'GraphCMS_RootQueryToProductConnectionEdge',
  cursor?: Maybe<Scalars['String']>,
  node?: Maybe<GraphCms_Product>,
};

export type GraphCms_RootQueryToProductConnectionWhereArgs = {
  attribute?: Maybe<Scalars['String']>,
  attributeTerm?: Maybe<Scalars['String']>,
  category?: Maybe<Scalars['String']>,
  categoryId?: Maybe<Scalars['Int']>,
  categoryIdIn?: Maybe<Array<Maybe<Scalars['Int']>>>,
  categoryIdNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>,
  categoryIn?: Maybe<Array<Maybe<Scalars['String']>>>,
  categoryNotIn?: Maybe<Array<Maybe<Scalars['String']>>>,
  dateQuery?: Maybe<GraphCms_DateQueryInput>,
  exclude?: Maybe<Array<Maybe<Scalars['Int']>>>,
  featured?: Maybe<Scalars['Boolean']>,
  include?: Maybe<Array<Maybe<Scalars['Int']>>>,
  maxPrice?: Maybe<Scalars['Float']>,
  minPrice?: Maybe<Scalars['Float']>,
  onSale?: Maybe<Scalars['Boolean']>,
  orderby?: Maybe<Array<Maybe<GraphCms_ProductsOrderbyInput>>>,
  parent?: Maybe<Scalars['Int']>,
  parentIn?: Maybe<Array<Maybe<Scalars['Int']>>>,
  parentNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>,
  search?: Maybe<Scalars['String']>,
  shippingClassId?: Maybe<Scalars['Int']>,
  sku?: Maybe<Scalars['String']>,
  slug?: Maybe<Scalars['String']>,
  status?: Maybe<Scalars['String']>,
  stockStatus?: Maybe<Array<Maybe<GraphCms_StockStatusEnum>>>,
  tag?: Maybe<Scalars['String']>,
  tagId?: Maybe<Scalars['Int']>,
  tagIdIn?: Maybe<Array<Maybe<Scalars['Int']>>>,
  tagIdNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>,
  tagIn?: Maybe<Array<Maybe<Scalars['String']>>>,
  tagNotIn?: Maybe<Array<Maybe<Scalars['String']>>>,
  taxClass?: Maybe<GraphCms_TaxClassEnum>,
  taxonomyFilter?: Maybe<Array<Maybe<GraphCms_ProductTaxonomyFilterRelationInput>>>,
  type?: Maybe<GraphCms_ProductTypesEnum>,
  typeIn?: Maybe<Array<Maybe<GraphCms_ProductTypesEnum>>>,
  typeNotIn?: Maybe<Array<Maybe<GraphCms_ProductTypesEnum>>>,
  visibility?: Maybe<GraphCms_CatalogVisibilityEnum>,
};

export type GraphCms_RootQueryToProductTagConnection = {
   __typename?: 'GraphCMS_RootQueryToProductTagConnection',
  edges?: Maybe<Array<Maybe<GraphCms_RootQueryToProductTagConnectionEdge>>>,
  nodes?: Maybe<Array<Maybe<GraphCms_ProductTag>>>,
  pageInfo?: Maybe<GraphCms_WpPageInfo>,
  taxonomyInfo?: Maybe<GraphCms_Taxonomy>,
};

export type GraphCms_RootQueryToProductTagConnectionEdge = {
   __typename?: 'GraphCMS_RootQueryToProductTagConnectionEdge',
  cursor?: Maybe<Scalars['String']>,
  node?: Maybe<GraphCms_ProductTag>,
};

export type GraphCms_RootQueryToProductTagConnectionWhereArgs = {
  cacheDomain?: Maybe<Scalars['String']>,
  childOf?: Maybe<Scalars['Int']>,
  childless?: Maybe<Scalars['Boolean']>,
  descriptionLike?: Maybe<Scalars['String']>,
  exclude?: Maybe<Array<Maybe<Scalars['ID']>>>,
  excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>,
  hideEmpty?: Maybe<Scalars['Boolean']>,
  hierarchical?: Maybe<Scalars['Boolean']>,
  include?: Maybe<Array<Maybe<Scalars['ID']>>>,
  name?: Maybe<Array<Maybe<Scalars['String']>>>,
  nameLike?: Maybe<Scalars['String']>,
  objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>,
  orderby?: Maybe<GraphCms_TermObjectsConnectionOrderbyEnum>,
  padCounts?: Maybe<Scalars['Boolean']>,
  parent?: Maybe<Scalars['Int']>,
  search?: Maybe<Scalars['String']>,
  shouldOnlyIncludeConnectedItems?: Maybe<Scalars['Boolean']>,
  shouldOutputInFlatList?: Maybe<Scalars['Boolean']>,
  slug?: Maybe<Array<Maybe<Scalars['String']>>>,
  termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>,
  updateTermMetaCache?: Maybe<Scalars['Boolean']>,
};

export type GraphCms_RootQueryToProductTypeConnection = {
   __typename?: 'GraphCMS_RootQueryToProductTypeConnection',
  edges?: Maybe<Array<Maybe<GraphCms_RootQueryToProductTypeConnectionEdge>>>,
  nodes?: Maybe<Array<Maybe<GraphCms_ProductType>>>,
  pageInfo?: Maybe<GraphCms_WpPageInfo>,
  taxonomyInfo?: Maybe<GraphCms_Taxonomy>,
};

export type GraphCms_RootQueryToProductTypeConnectionEdge = {
   __typename?: 'GraphCMS_RootQueryToProductTypeConnectionEdge',
  cursor?: Maybe<Scalars['String']>,
  node?: Maybe<GraphCms_ProductType>,
};

export type GraphCms_RootQueryToProductTypeConnectionWhereArgs = {
  cacheDomain?: Maybe<Scalars['String']>,
  childOf?: Maybe<Scalars['Int']>,
  childless?: Maybe<Scalars['Boolean']>,
  descriptionLike?: Maybe<Scalars['String']>,
  exclude?: Maybe<Array<Maybe<Scalars['ID']>>>,
  excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>,
  hideEmpty?: Maybe<Scalars['Boolean']>,
  hierarchical?: Maybe<Scalars['Boolean']>,
  include?: Maybe<Array<Maybe<Scalars['ID']>>>,
  name?: Maybe<Array<Maybe<Scalars['String']>>>,
  nameLike?: Maybe<Scalars['String']>,
  objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>,
  orderby?: Maybe<GraphCms_TermObjectsConnectionOrderbyEnum>,
  padCounts?: Maybe<Scalars['Boolean']>,
  parent?: Maybe<Scalars['Int']>,
  search?: Maybe<Scalars['String']>,
  shouldOnlyIncludeConnectedItems?: Maybe<Scalars['Boolean']>,
  shouldOutputInFlatList?: Maybe<Scalars['Boolean']>,
  slug?: Maybe<Array<Maybe<Scalars['String']>>>,
  termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>,
  updateTermMetaCache?: Maybe<Scalars['Boolean']>,
};

export type GraphCms_RootQueryToRefundConnection = {
   __typename?: 'GraphCMS_RootQueryToRefundConnection',
  edges?: Maybe<Array<Maybe<GraphCms_RootQueryToRefundConnectionEdge>>>,
  nodes?: Maybe<Array<Maybe<GraphCms_Refund>>>,
  pageInfo?: Maybe<GraphCms_WpPageInfo>,
};

export type GraphCms_RootQueryToRefundConnectionEdge = {
   __typename?: 'GraphCMS_RootQueryToRefundConnectionEdge',
  cursor?: Maybe<Scalars['String']>,
  node?: Maybe<GraphCms_Refund>,
};

export type GraphCms_RootQueryToRefundConnectionWhereArgs = {
  dateQuery?: Maybe<GraphCms_DateQueryInput>,
  exclude?: Maybe<Array<Maybe<Scalars['Int']>>>,
  include?: Maybe<Array<Maybe<Scalars['Int']>>>,
  orderIn?: Maybe<Array<Maybe<Scalars['Int']>>>,
  orderby?: Maybe<Array<Maybe<GraphCms_PostTypeOrderbyInput>>>,
  parent?: Maybe<Scalars['Int']>,
  parentIn?: Maybe<Array<Maybe<Scalars['Int']>>>,
  parentNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>,
  search?: Maybe<Scalars['String']>,
  statuses?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type GraphCms_RootQueryToShippingClassConnection = {
   __typename?: 'GraphCMS_RootQueryToShippingClassConnection',
  edges?: Maybe<Array<Maybe<GraphCms_RootQueryToShippingClassConnectionEdge>>>,
  nodes?: Maybe<Array<Maybe<GraphCms_ShippingClass>>>,
  pageInfo?: Maybe<GraphCms_WpPageInfo>,
  taxonomyInfo?: Maybe<GraphCms_Taxonomy>,
};

export type GraphCms_RootQueryToShippingClassConnectionEdge = {
   __typename?: 'GraphCMS_RootQueryToShippingClassConnectionEdge',
  cursor?: Maybe<Scalars['String']>,
  node?: Maybe<GraphCms_ShippingClass>,
};

export type GraphCms_RootQueryToShippingClassConnectionWhereArgs = {
  cacheDomain?: Maybe<Scalars['String']>,
  childOf?: Maybe<Scalars['Int']>,
  childless?: Maybe<Scalars['Boolean']>,
  descriptionLike?: Maybe<Scalars['String']>,
  exclude?: Maybe<Array<Maybe<Scalars['ID']>>>,
  excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>,
  hideEmpty?: Maybe<Scalars['Boolean']>,
  hierarchical?: Maybe<Scalars['Boolean']>,
  include?: Maybe<Array<Maybe<Scalars['ID']>>>,
  name?: Maybe<Array<Maybe<Scalars['String']>>>,
  nameLike?: Maybe<Scalars['String']>,
  objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>,
  orderby?: Maybe<GraphCms_TermObjectsConnectionOrderbyEnum>,
  padCounts?: Maybe<Scalars['Boolean']>,
  parent?: Maybe<Scalars['Int']>,
  search?: Maybe<Scalars['String']>,
  shouldOnlyIncludeConnectedItems?: Maybe<Scalars['Boolean']>,
  shouldOutputInFlatList?: Maybe<Scalars['Boolean']>,
  slug?: Maybe<Array<Maybe<Scalars['String']>>>,
  termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>,
  updateTermMetaCache?: Maybe<Scalars['Boolean']>,
};

export type GraphCms_RootQueryToShippingMethodConnection = {
   __typename?: 'GraphCMS_RootQueryToShippingMethodConnection',
  edges?: Maybe<Array<Maybe<GraphCms_RootQueryToShippingMethodConnectionEdge>>>,
  nodes?: Maybe<Array<Maybe<GraphCms_ShippingMethod>>>,
  pageInfo?: Maybe<GraphCms_WpPageInfo>,
};

export type GraphCms_RootQueryToShippingMethodConnectionEdge = {
   __typename?: 'GraphCMS_RootQueryToShippingMethodConnectionEdge',
  cursor?: Maybe<Scalars['String']>,
  node?: Maybe<GraphCms_ShippingMethod>,
};

export type GraphCms_RootQueryToTagConnection = {
   __typename?: 'GraphCMS_RootQueryToTagConnection',
  edges?: Maybe<Array<Maybe<GraphCms_RootQueryToTagConnectionEdge>>>,
  nodes?: Maybe<Array<Maybe<GraphCms_Tag>>>,
  pageInfo?: Maybe<GraphCms_WpPageInfo>,
  taxonomyInfo?: Maybe<GraphCms_Taxonomy>,
};

export type GraphCms_RootQueryToTagConnectionEdge = {
   __typename?: 'GraphCMS_RootQueryToTagConnectionEdge',
  cursor?: Maybe<Scalars['String']>,
  node?: Maybe<GraphCms_Tag>,
};

export type GraphCms_RootQueryToTagConnectionWhereArgs = {
  cacheDomain?: Maybe<Scalars['String']>,
  childOf?: Maybe<Scalars['Int']>,
  childless?: Maybe<Scalars['Boolean']>,
  descriptionLike?: Maybe<Scalars['String']>,
  exclude?: Maybe<Array<Maybe<Scalars['ID']>>>,
  excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>,
  hideEmpty?: Maybe<Scalars['Boolean']>,
  hierarchical?: Maybe<Scalars['Boolean']>,
  include?: Maybe<Array<Maybe<Scalars['ID']>>>,
  name?: Maybe<Array<Maybe<Scalars['String']>>>,
  nameLike?: Maybe<Scalars['String']>,
  objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>,
  orderby?: Maybe<GraphCms_TermObjectsConnectionOrderbyEnum>,
  padCounts?: Maybe<Scalars['Boolean']>,
  parent?: Maybe<Scalars['Int']>,
  search?: Maybe<Scalars['String']>,
  shouldOnlyIncludeConnectedItems?: Maybe<Scalars['Boolean']>,
  shouldOutputInFlatList?: Maybe<Scalars['Boolean']>,
  slug?: Maybe<Array<Maybe<Scalars['String']>>>,
  termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>,
  updateTermMetaCache?: Maybe<Scalars['Boolean']>,
};

export type GraphCms_RootQueryToTaxRateConnection = {
   __typename?: 'GraphCMS_RootQueryToTaxRateConnection',
  edges?: Maybe<Array<Maybe<GraphCms_RootQueryToTaxRateConnectionEdge>>>,
  nodes?: Maybe<Array<Maybe<GraphCms_TaxRate>>>,
  pageInfo?: Maybe<GraphCms_WpPageInfo>,
};

export type GraphCms_RootQueryToTaxRateConnectionEdge = {
   __typename?: 'GraphCMS_RootQueryToTaxRateConnectionEdge',
  cursor?: Maybe<Scalars['String']>,
  node?: Maybe<GraphCms_TaxRate>,
};

export type GraphCms_RootQueryToTaxRateConnectionWhereArgs = {
  class?: Maybe<Scalars['String']>,
  orderby?: Maybe<Array<Maybe<GraphCms_TaxRateConnectionOrderbyInput>>>,
};

export type GraphCms_RootQueryToThemeConnection = {
   __typename?: 'GraphCMS_RootQueryToThemeConnection',
  edges?: Maybe<Array<Maybe<GraphCms_RootQueryToThemeConnectionEdge>>>,
  nodes?: Maybe<Array<Maybe<GraphCms_Theme>>>,
  pageInfo?: Maybe<GraphCms_WpPageInfo>,
};

export type GraphCms_RootQueryToThemeConnectionEdge = {
   __typename?: 'GraphCMS_RootQueryToThemeConnectionEdge',
  cursor?: Maybe<Scalars['String']>,
  node?: Maybe<GraphCms_Theme>,
};

export type GraphCms_RootQueryToUserConnection = {
   __typename?: 'GraphCMS_RootQueryToUserConnection',
  edges?: Maybe<Array<Maybe<GraphCms_RootQueryToUserConnectionEdge>>>,
  nodes?: Maybe<Array<Maybe<GraphCms_User>>>,
  pageInfo?: Maybe<GraphCms_WpPageInfo>,
};

export type GraphCms_RootQueryToUserConnectionEdge = {
   __typename?: 'GraphCMS_RootQueryToUserConnectionEdge',
  cursor?: Maybe<Scalars['String']>,
  node?: Maybe<GraphCms_User>,
};

export type GraphCms_RootQueryToUserConnectionWhereArgs = {
  exclude?: Maybe<Array<Maybe<Scalars['Int']>>>,
  hasPublishedPosts?: Maybe<Array<Maybe<GraphCms_PostTypeEnum>>>,
  include?: Maybe<Array<Maybe<Scalars['Int']>>>,
  login?: Maybe<Scalars['String']>,
  loginIn?: Maybe<Scalars['Int']>,
  loginNotIn?: Maybe<Scalars['Int']>,
  nicename?: Maybe<Scalars['String']>,
  nicenameIn?: Maybe<Array<Maybe<Scalars['String']>>>,
  nicenameNotIn?: Maybe<Array<Maybe<Scalars['String']>>>,
  orderby?: Maybe<Array<Maybe<GraphCms_UsersConnectionOrderbyInput>>>,
  role?: Maybe<GraphCms_UserRoleEnum>,
  roleIn?: Maybe<Array<Maybe<GraphCms_UserRoleEnum>>>,
  roleNotIn?: Maybe<Array<Maybe<GraphCms_UserRoleEnum>>>,
  search?: Maybe<Scalars['String']>,
  searchColumns?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type GraphCms_RootQueryToUserRoleConnection = {
   __typename?: 'GraphCMS_RootQueryToUserRoleConnection',
  edges?: Maybe<Array<Maybe<GraphCms_RootQueryToUserRoleConnectionEdge>>>,
  nodes?: Maybe<Array<Maybe<GraphCms_UserRole>>>,
  pageInfo?: Maybe<GraphCms_WpPageInfo>,
};

export type GraphCms_RootQueryToUserRoleConnectionEdge = {
   __typename?: 'GraphCMS_RootQueryToUserRoleConnectionEdge',
  cursor?: Maybe<Scalars['String']>,
  node?: Maybe<GraphCms_UserRole>,
};

export type GraphCms_RootQueryToVisibleProductConnection = {
   __typename?: 'GraphCMS_RootQueryToVisibleProductConnection',
  edges?: Maybe<Array<Maybe<GraphCms_RootQueryToVisibleProductConnectionEdge>>>,
  nodes?: Maybe<Array<Maybe<GraphCms_VisibleProduct>>>,
  pageInfo?: Maybe<GraphCms_WpPageInfo>,
  taxonomyInfo?: Maybe<GraphCms_Taxonomy>,
};

export type GraphCms_RootQueryToVisibleProductConnectionEdge = {
   __typename?: 'GraphCMS_RootQueryToVisibleProductConnectionEdge',
  cursor?: Maybe<Scalars['String']>,
  node?: Maybe<GraphCms_VisibleProduct>,
};

export type GraphCms_RootQueryToVisibleProductConnectionWhereArgs = {
  cacheDomain?: Maybe<Scalars['String']>,
  childOf?: Maybe<Scalars['Int']>,
  childless?: Maybe<Scalars['Boolean']>,
  descriptionLike?: Maybe<Scalars['String']>,
  exclude?: Maybe<Array<Maybe<Scalars['ID']>>>,
  excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>,
  hideEmpty?: Maybe<Scalars['Boolean']>,
  hierarchical?: Maybe<Scalars['Boolean']>,
  include?: Maybe<Array<Maybe<Scalars['ID']>>>,
  name?: Maybe<Array<Maybe<Scalars['String']>>>,
  nameLike?: Maybe<Scalars['String']>,
  objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>,
  orderby?: Maybe<GraphCms_TermObjectsConnectionOrderbyEnum>,
  padCounts?: Maybe<Scalars['Boolean']>,
  parent?: Maybe<Scalars['Int']>,
  search?: Maybe<Scalars['String']>,
  shouldOnlyIncludeConnectedItems?: Maybe<Scalars['Boolean']>,
  shouldOutputInFlatList?: Maybe<Scalars['Boolean']>,
  slug?: Maybe<Array<Maybe<Scalars['String']>>>,
  termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>,
  updateTermMetaCache?: Maybe<Scalars['Boolean']>,
};

export type GraphCms_SendPasswordResetEmailInput = {
  clientMutationId: Scalars['String'],
  username: Scalars['String'],
};

export type GraphCms_SendPasswordResetEmailPayload = {
   __typename?: 'GraphCMS_SendPasswordResetEmailPayload',
  clientMutationId: Scalars['String'],
  user?: Maybe<GraphCms_User>,
};

export type GraphCms_Settings = {
   __typename?: 'GraphCMS_Settings',
  discussionSettingsDefaultCommentStatus?: Maybe<Scalars['String']>,
  discussionSettingsDefaultPingStatus?: Maybe<Scalars['String']>,
  generalSettingsDateFormat?: Maybe<Scalars['String']>,
  generalSettingsDescription?: Maybe<Scalars['String']>,
  generalSettingsEmail?: Maybe<Scalars['String']>,
  generalSettingsLanguage?: Maybe<Scalars['String']>,
  generalSettingsStartOfWeek?: Maybe<Scalars['Int']>,
  generalSettingsTimeFormat?: Maybe<Scalars['String']>,
  generalSettingsTimezone?: Maybe<Scalars['String']>,
  generalSettingsTitle?: Maybe<Scalars['String']>,
  generalSettingsUrl?: Maybe<Scalars['String']>,
  readingSettingsPostsPerPage?: Maybe<Scalars['Int']>,
  writingSettingsDefaultCategory?: Maybe<Scalars['Int']>,
  writingSettingsDefaultPostFormat?: Maybe<Scalars['String']>,
  writingSettingsUseSmilies?: Maybe<Scalars['Boolean']>,
};

export type GraphCms_ShippingClass = GraphCms_Node & {
   __typename?: 'GraphCMS_ShippingClass',
  count?: Maybe<Scalars['Int']>,
  description?: Maybe<Scalars['String']>,
  id: Scalars['ID'],
  isRestricted?: Maybe<Scalars['Boolean']>,
  link?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  shippingClassId?: Maybe<Scalars['Int']>,
  slug?: Maybe<Scalars['String']>,
  taxonomy?: Maybe<GraphCms_Taxonomy>,
  termGroupId?: Maybe<Scalars['Int']>,
  termTaxonomyId?: Maybe<Scalars['Int']>,
};

export type GraphCms_ShippingLine = {
   __typename?: 'GraphCMS_ShippingLine',
  itemId?: Maybe<Scalars['Int']>,
  metaData?: Maybe<Array<Maybe<GraphCms_MetaData>>>,
  methodTitle?: Maybe<Scalars['String']>,
  orderId?: Maybe<Scalars['Int']>,
  shippingMethod?: Maybe<GraphCms_ShippingMethod>,
  taxClass?: Maybe<GraphCms_TaxClassEnum>,
  taxes?: Maybe<Array<Maybe<GraphCms_OrderItemTax>>>,
  total?: Maybe<Scalars['String']>,
  totalTax?: Maybe<Scalars['String']>,
};


export type GraphCms_ShippingLineMetaDataArgs = {
  key?: Maybe<Scalars['String']>,
  keysIn?: Maybe<Array<Maybe<Scalars['String']>>>,
  multiple?: Maybe<Scalars['Boolean']>
};

export type GraphCms_ShippingLineInput = {
  id?: Maybe<Scalars['ID']>,
  instanceId?: Maybe<Scalars['String']>,
  metaData?: Maybe<Array<Maybe<GraphCms_MetaDataInput>>>,
  methodId: Scalars['String'],
  methodTitle: Scalars['String'],
  total: Scalars['String'],
};

export type GraphCms_ShippingMethod = GraphCms_Node & {
   __typename?: 'GraphCMS_ShippingMethod',
  description?: Maybe<Scalars['String']>,
  id: Scalars['ID'],
  methodId: Scalars['ID'],
  title?: Maybe<Scalars['String']>,
};

export type GraphCms_ShippingPackage = {
   __typename?: 'GraphCMS_ShippingPackage',
  packageDetails?: Maybe<Scalars['String']>,
  rates?: Maybe<Array<Maybe<GraphCms_ShippingRate>>>,
  supportsShippingCalculator?: Maybe<Scalars['Boolean']>,
};

export type GraphCms_ShippingRate = {
   __typename?: 'GraphCMS_ShippingRate',
  cost?: Maybe<Scalars['String']>,
  id: Scalars['ID'],
  instanceId: Scalars['Int'],
  label?: Maybe<Scalars['String']>,
  methodId: Scalars['ID'],
};

export type GraphCms_SimpleProduct = GraphCms_Node & GraphCms_Product & {
   __typename?: 'GraphCMS_SimpleProduct',
  attributes?: Maybe<GraphCms_ProductToProductAttributeConnection>,
  averageRating?: Maybe<Scalars['Float']>,
  backorders?: Maybe<GraphCms_BackordersEnum>,
  backordersAllowed?: Maybe<Scalars['Boolean']>,
  catalogVisibility?: Maybe<GraphCms_CatalogVisibilityEnum>,
  crossSell?: Maybe<GraphCms_SimpleProductToProductConnection>,
  date?: Maybe<Scalars['String']>,
  dateOnSaleFrom?: Maybe<Scalars['String']>,
  dateOnSaleTo?: Maybe<Scalars['String']>,
  defaultAttributes?: Maybe<GraphCms_SimpleProductToVariationAttributeConnection>,
  description?: Maybe<Scalars['String']>,
  downloadExpiry?: Maybe<Scalars['Int']>,
  downloadLimit?: Maybe<Scalars['Int']>,
  downloadable?: Maybe<Scalars['Boolean']>,
  downloads?: Maybe<Array<Maybe<GraphCms_ProductDownload>>>,
  featured?: Maybe<Scalars['Boolean']>,
  galleryImages?: Maybe<GraphCms_ProductToMediaItemConnection>,
  height?: Maybe<Scalars['String']>,
  id: Scalars['ID'],
  image?: Maybe<GraphCms_MediaItem>,
  length?: Maybe<Scalars['String']>,
  link?: Maybe<Scalars['String']>,
  manageStock?: Maybe<Scalars['Boolean']>,
  menuOrder?: Maybe<Scalars['Int']>,
  metaData?: Maybe<Array<Maybe<GraphCms_MetaData>>>,
  modified?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  onSale?: Maybe<Scalars['Boolean']>,
  paHinds?: Maybe<GraphCms_ProductToPaHindConnection>,
  paHulks?: Maybe<GraphCms_ProductToPaHulkConnection>,
  paKasutusaegs?: Maybe<GraphCms_ProductToPaKasutusaegConnection>,
  paKoguses?: Maybe<GraphCms_ProductToPaKogusConnection>,
  paKontuurs?: Maybe<GraphCms_ProductToPaKontuurConnection>,
  paKoostisaineds?: Maybe<GraphCms_ProductToPaKoostisainedConnection>,
  paLaadimisaegs?: Maybe<GraphCms_ProductToPaLaadimisaegConnection>,
  paMaterjals?: Maybe<GraphCms_ProductToPaMaterjalConnection>,
  paMuratasas?: Maybe<GraphCms_ProductToPaMuratasaConnection>,
  paOhutuses?: Maybe<GraphCms_ProductToPaOhutusConnection>,
  paPatareids?: Maybe<GraphCms_ProductToPaPatareidConnection>,
  paSuuruses?: Maybe<GraphCms_ProductToPaSuurusConnection>,
  paVariants?: Maybe<GraphCms_ProductToPaVariantConnection>,
  paVarvs?: Maybe<GraphCms_ProductToPaVarvConnection>,
  paVeekindluses?: Maybe<GraphCms_ProductToPaVeekindlusConnection>,
  parent?: Maybe<GraphCms_Product>,
  price?: Maybe<Scalars['String']>,
  productCategories?: Maybe<GraphCms_ProductToProductCategoryConnection>,
  productId?: Maybe<Scalars['Int']>,
  productTags?: Maybe<GraphCms_ProductToProductTagConnection>,
  productTypes?: Maybe<GraphCms_ProductToProductTypeConnection>,
  purchasable?: Maybe<Scalars['Boolean']>,
  purchaseNote?: Maybe<Scalars['String']>,
  regularPrice?: Maybe<Scalars['String']>,
  related?: Maybe<GraphCms_ProductToProductConnection>,
  reviewCount?: Maybe<Scalars['Int']>,
  reviewsAllowed?: Maybe<Scalars['Boolean']>,
  salePrice?: Maybe<Scalars['String']>,
  shippingClassId?: Maybe<Scalars['Int']>,
  shippingClasses?: Maybe<GraphCms_ProductToShippingClassConnection>,
  shippingRequired?: Maybe<Scalars['Boolean']>,
  shippingTaxable?: Maybe<Scalars['Boolean']>,
  shortDescription?: Maybe<Scalars['String']>,
  sku?: Maybe<Scalars['String']>,
  slug?: Maybe<Scalars['String']>,
  soldIndividually?: Maybe<Scalars['Boolean']>,
  status?: Maybe<Scalars['String']>,
  stockQuantity?: Maybe<Scalars['Int']>,
  stockStatus?: Maybe<GraphCms_StockStatusEnum>,
  taxClass?: Maybe<GraphCms_TaxClassEnum>,
  taxStatus?: Maybe<GraphCms_TaxStatusEnum>,
  totalSales?: Maybe<Scalars['Int']>,
  type?: Maybe<GraphCms_ProductTypesEnum>,
  upsell?: Maybe<GraphCms_ProductToProductConnection>,
  virtual?: Maybe<Scalars['Boolean']>,
  visibleProducts?: Maybe<GraphCms_ProductToVisibleProductConnection>,
  weight?: Maybe<Scalars['String']>,
  width?: Maybe<Scalars['String']>,
};


export type GraphCms_SimpleProductAttributesArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>
};


export type GraphCms_SimpleProductCrossSellArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  where?: Maybe<GraphCms_SimpleProductToProductConnectionWhereArgs>
};


export type GraphCms_SimpleProductDefaultAttributesArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>
};


export type GraphCms_SimpleProductDescriptionArgs = {
  format?: Maybe<GraphCms_PostObjectFieldFormatEnum>
};


export type GraphCms_SimpleProductGalleryImagesArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  where?: Maybe<GraphCms_ProductToMediaItemConnectionWhereArgs>
};


export type GraphCms_SimpleProductMetaDataArgs = {
  key?: Maybe<Scalars['String']>,
  keysIn?: Maybe<Array<Maybe<Scalars['String']>>>,
  multiple?: Maybe<Scalars['Boolean']>
};


export type GraphCms_SimpleProductPaHindsArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  where?: Maybe<GraphCms_ProductToPaHindConnectionWhereArgs>
};


export type GraphCms_SimpleProductPaHulksArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  where?: Maybe<GraphCms_ProductToPaHulkConnectionWhereArgs>
};


export type GraphCms_SimpleProductPaKasutusaegsArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  where?: Maybe<GraphCms_ProductToPaKasutusaegConnectionWhereArgs>
};


export type GraphCms_SimpleProductPaKogusesArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  where?: Maybe<GraphCms_ProductToPaKogusConnectionWhereArgs>
};


export type GraphCms_SimpleProductPaKontuursArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  where?: Maybe<GraphCms_ProductToPaKontuurConnectionWhereArgs>
};


export type GraphCms_SimpleProductPaKoostisainedsArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  where?: Maybe<GraphCms_ProductToPaKoostisainedConnectionWhereArgs>
};


export type GraphCms_SimpleProductPaLaadimisaegsArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  where?: Maybe<GraphCms_ProductToPaLaadimisaegConnectionWhereArgs>
};


export type GraphCms_SimpleProductPaMaterjalsArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  where?: Maybe<GraphCms_ProductToPaMaterjalConnectionWhereArgs>
};


export type GraphCms_SimpleProductPaMuratasasArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  where?: Maybe<GraphCms_ProductToPaMuratasaConnectionWhereArgs>
};


export type GraphCms_SimpleProductPaOhutusesArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  where?: Maybe<GraphCms_ProductToPaOhutusConnectionWhereArgs>
};


export type GraphCms_SimpleProductPaPatareidsArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  where?: Maybe<GraphCms_ProductToPaPatareidConnectionWhereArgs>
};


export type GraphCms_SimpleProductPaSuurusesArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  where?: Maybe<GraphCms_ProductToPaSuurusConnectionWhereArgs>
};


export type GraphCms_SimpleProductPaVariantsArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  where?: Maybe<GraphCms_ProductToPaVariantConnectionWhereArgs>
};


export type GraphCms_SimpleProductPaVarvsArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  where?: Maybe<GraphCms_ProductToPaVarvConnectionWhereArgs>
};


export type GraphCms_SimpleProductPaVeekindlusesArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  where?: Maybe<GraphCms_ProductToPaVeekindlusConnectionWhereArgs>
};


export type GraphCms_SimpleProductPriceArgs = {
  format?: Maybe<GraphCms_PricingFieldFormatEnum>
};


export type GraphCms_SimpleProductProductCategoriesArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  where?: Maybe<GraphCms_ProductToProductCategoryConnectionWhereArgs>
};


export type GraphCms_SimpleProductProductTagsArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  where?: Maybe<GraphCms_ProductToProductTagConnectionWhereArgs>
};


export type GraphCms_SimpleProductProductTypesArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  where?: Maybe<GraphCms_ProductToProductTypeConnectionWhereArgs>
};


export type GraphCms_SimpleProductRegularPriceArgs = {
  format?: Maybe<GraphCms_PricingFieldFormatEnum>
};


export type GraphCms_SimpleProductRelatedArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  where?: Maybe<GraphCms_ProductToProductConnectionWhereArgs>
};


export type GraphCms_SimpleProductSalePriceArgs = {
  format?: Maybe<GraphCms_PricingFieldFormatEnum>
};


export type GraphCms_SimpleProductShippingClassesArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  where?: Maybe<GraphCms_ProductToShippingClassConnectionWhereArgs>
};


export type GraphCms_SimpleProductShortDescriptionArgs = {
  format?: Maybe<GraphCms_PostObjectFieldFormatEnum>
};


export type GraphCms_SimpleProductUpsellArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  where?: Maybe<GraphCms_ProductToProductConnectionWhereArgs>
};


export type GraphCms_SimpleProductVisibleProductsArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  where?: Maybe<GraphCms_ProductToVisibleProductConnectionWhereArgs>
};

export type GraphCms_SimpleProductToProductConnection = {
   __typename?: 'GraphCMS_SimpleProductToProductConnection',
  edges?: Maybe<Array<Maybe<GraphCms_SimpleProductToProductConnectionEdge>>>,
  nodes?: Maybe<Array<Maybe<GraphCms_Product>>>,
  pageInfo?: Maybe<GraphCms_WpPageInfo>,
};

export type GraphCms_SimpleProductToProductConnectionEdge = {
   __typename?: 'GraphCMS_SimpleProductToProductConnectionEdge',
  cursor?: Maybe<Scalars['String']>,
  node?: Maybe<GraphCms_Product>,
};

export type GraphCms_SimpleProductToProductConnectionWhereArgs = {
  attribute?: Maybe<Scalars['String']>,
  attributeTerm?: Maybe<Scalars['String']>,
  category?: Maybe<Scalars['String']>,
  categoryId?: Maybe<Scalars['Int']>,
  categoryIdIn?: Maybe<Array<Maybe<Scalars['Int']>>>,
  categoryIdNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>,
  categoryIn?: Maybe<Array<Maybe<Scalars['String']>>>,
  categoryNotIn?: Maybe<Array<Maybe<Scalars['String']>>>,
  dateQuery?: Maybe<GraphCms_DateQueryInput>,
  exclude?: Maybe<Array<Maybe<Scalars['Int']>>>,
  featured?: Maybe<Scalars['Boolean']>,
  include?: Maybe<Array<Maybe<Scalars['Int']>>>,
  maxPrice?: Maybe<Scalars['Float']>,
  minPrice?: Maybe<Scalars['Float']>,
  onSale?: Maybe<Scalars['Boolean']>,
  orderby?: Maybe<Array<Maybe<GraphCms_ProductsOrderbyInput>>>,
  parent?: Maybe<Scalars['Int']>,
  parentIn?: Maybe<Array<Maybe<Scalars['Int']>>>,
  parentNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>,
  search?: Maybe<Scalars['String']>,
  shippingClassId?: Maybe<Scalars['Int']>,
  sku?: Maybe<Scalars['String']>,
  slug?: Maybe<Scalars['String']>,
  status?: Maybe<Scalars['String']>,
  stockStatus?: Maybe<Array<Maybe<GraphCms_StockStatusEnum>>>,
  tag?: Maybe<Scalars['String']>,
  tagId?: Maybe<Scalars['Int']>,
  tagIdIn?: Maybe<Array<Maybe<Scalars['Int']>>>,
  tagIdNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>,
  tagIn?: Maybe<Array<Maybe<Scalars['String']>>>,
  tagNotIn?: Maybe<Array<Maybe<Scalars['String']>>>,
  taxClass?: Maybe<GraphCms_TaxClassEnum>,
  taxonomyFilter?: Maybe<Array<Maybe<GraphCms_ProductTaxonomyFilterRelationInput>>>,
  type?: Maybe<GraphCms_ProductTypesEnum>,
  typeIn?: Maybe<Array<Maybe<GraphCms_ProductTypesEnum>>>,
  typeNotIn?: Maybe<Array<Maybe<GraphCms_ProductTypesEnum>>>,
  visibility?: Maybe<GraphCms_CatalogVisibilityEnum>,
};

export type GraphCms_SimpleProductToVariationAttributeConnection = {
   __typename?: 'GraphCMS_SimpleProductToVariationAttributeConnection',
  edges?: Maybe<Array<Maybe<GraphCms_SimpleProductToVariationAttributeConnectionEdge>>>,
  nodes?: Maybe<Array<Maybe<GraphCms_VariationAttribute>>>,
  pageInfo?: Maybe<GraphCms_WpPageInfo>,
};

export type GraphCms_SimpleProductToVariationAttributeConnectionEdge = {
   __typename?: 'GraphCMS_SimpleProductToVariationAttributeConnectionEdge',
  cursor?: Maybe<Scalars['String']>,
  node?: Maybe<GraphCms_VariationAttribute>,
};

export enum GraphCms_StockStatusEnum {
  InStock = 'IN_STOCK',
  OnBackorder = 'ON_BACKORDER',
  OutOfStock = 'OUT_OF_STOCK'
}

export type GraphCms_Tag = GraphCms_Node & {
   __typename?: 'GraphCMS_Tag',
  count?: Maybe<Scalars['Int']>,
  description?: Maybe<Scalars['String']>,
  id: Scalars['ID'],
  isRestricted?: Maybe<Scalars['Boolean']>,
  link?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  posts?: Maybe<GraphCms_TagToPostConnection>,
  slug?: Maybe<Scalars['String']>,
  tagId?: Maybe<Scalars['Int']>,
  taxonomy?: Maybe<GraphCms_Taxonomy>,
  termGroupId?: Maybe<Scalars['Int']>,
  termTaxonomyId?: Maybe<Scalars['Int']>,
};


export type GraphCms_TagPostsArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  where?: Maybe<GraphCms_TagToPostConnectionWhereArgs>
};

export type GraphCms_TagToPostConnection = {
   __typename?: 'GraphCMS_TagToPostConnection',
  edges?: Maybe<Array<Maybe<GraphCms_TagToPostConnectionEdge>>>,
  nodes?: Maybe<Array<Maybe<GraphCms_Post>>>,
  pageInfo?: Maybe<GraphCms_WpPageInfo>,
  postTypeInfo?: Maybe<GraphCms_PostType>,
};

export type GraphCms_TagToPostConnectionEdge = {
   __typename?: 'GraphCMS_TagToPostConnectionEdge',
  cursor?: Maybe<Scalars['String']>,
  node?: Maybe<GraphCms_Post>,
};

export type GraphCms_TagToPostConnectionWhereArgs = {
  author?: Maybe<Scalars['Int']>,
  authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>,
  authorName?: Maybe<Scalars['String']>,
  authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>,
  categoryId?: Maybe<Scalars['Int']>,
  categoryIn?: Maybe<Array<Maybe<Scalars['ID']>>>,
  categoryName?: Maybe<Scalars['String']>,
  categoryNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>,
  dateQuery?: Maybe<GraphCms_DateQueryInput>,
  hasPassword?: Maybe<Scalars['Boolean']>,
  id?: Maybe<Scalars['Int']>,
  in?: Maybe<Array<Maybe<Scalars['ID']>>>,
  mimeType?: Maybe<GraphCms_MimeTypeEnum>,
  name?: Maybe<Scalars['String']>,
  nameIn?: Maybe<Array<Maybe<Scalars['String']>>>,
  notIn?: Maybe<Array<Maybe<Scalars['ID']>>>,
  orderby?: Maybe<Array<Maybe<GraphCms_PostObjectsConnectionOrderbyInput>>>,
  parent?: Maybe<Scalars['String']>,
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>,
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>,
  password?: Maybe<Scalars['String']>,
  search?: Maybe<Scalars['String']>,
  stati?: Maybe<Array<Maybe<GraphCms_PostStatusEnum>>>,
  status?: Maybe<GraphCms_PostStatusEnum>,
  tag?: Maybe<Scalars['String']>,
  tagId?: Maybe<Scalars['String']>,
  tagIn?: Maybe<Array<Maybe<Scalars['ID']>>>,
  tagNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>,
  tagSlugAnd?: Maybe<Array<Maybe<Scalars['String']>>>,
  tagSlugIn?: Maybe<Array<Maybe<Scalars['String']>>>,
  title?: Maybe<Scalars['String']>,
};

export enum GraphCms_TaxClassEnum {
  InheritCart = 'INHERIT_CART',
  ReducedRate = 'REDUCED_RATE',
  Standard = 'STANDARD',
  ZeroRate = 'ZERO_RATE'
}

export type GraphCms_TaxLine = {
   __typename?: 'GraphCMS_TaxLine',
  isCompound?: Maybe<Scalars['Boolean']>,
  itemId?: Maybe<Scalars['Int']>,
  label?: Maybe<Scalars['String']>,
  metaData?: Maybe<Array<Maybe<GraphCms_MetaData>>>,
  orderId?: Maybe<Scalars['Int']>,
  rateCode?: Maybe<Scalars['String']>,
  shippingTaxTotal?: Maybe<Scalars['String']>,
  taxRate?: Maybe<GraphCms_TaxRate>,
  taxTotal?: Maybe<Scalars['String']>,
};


export type GraphCms_TaxLineMetaDataArgs = {
  key?: Maybe<Scalars['String']>,
  keysIn?: Maybe<Array<Maybe<Scalars['String']>>>,
  multiple?: Maybe<Scalars['Boolean']>
};

export type GraphCms_Taxonomy = GraphCms_Node & {
   __typename?: 'GraphCMS_Taxonomy',
  connectedPostTypeNames?: Maybe<Array<Maybe<Scalars['String']>>>,
  connectedPostTypes?: Maybe<Array<Maybe<GraphCms_PostType>>>,
  description?: Maybe<Scalars['String']>,
  graphqlPluralName?: Maybe<Scalars['String']>,
  graphqlSingleName?: Maybe<Scalars['String']>,
  hierarchical?: Maybe<Scalars['Boolean']>,
  id: Scalars['ID'],
  isRestricted?: Maybe<Scalars['Boolean']>,
  label?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  public?: Maybe<Scalars['Boolean']>,
  restBase?: Maybe<Scalars['String']>,
  restControllerClass?: Maybe<Scalars['String']>,
  showCloud?: Maybe<Scalars['Boolean']>,
  showInAdminColumn?: Maybe<Scalars['Boolean']>,
  showInGraphql?: Maybe<Scalars['Boolean']>,
  showInMenu?: Maybe<Scalars['Boolean']>,
  showInNavMenus?: Maybe<Scalars['Boolean']>,
  showInQuickEdit?: Maybe<Scalars['Boolean']>,
  showInRest?: Maybe<Scalars['Boolean']>,
  showUi?: Maybe<Scalars['Boolean']>,
};


export type GraphCms_TaxonomyConnectedPostTypeNamesArgs = {
  types?: Maybe<Array<Maybe<GraphCms_PostTypeEnum>>>
};


export type GraphCms_TaxonomyConnectedPostTypesArgs = {
  types?: Maybe<Array<Maybe<GraphCms_PostTypeEnum>>>
};

export enum GraphCms_TaxonomyEnum {
  Category = 'CATEGORY',
  Pahind = 'PAHIND',
  Pahulk = 'PAHULK',
  Pakasutusaeg = 'PAKASUTUSAEG',
  Pakogus = 'PAKOGUS',
  Pakontuur = 'PAKONTUUR',
  Pakoostisained = 'PAKOOSTISAINED',
  Palaadimisaeg = 'PALAADIMISAEG',
  Pamaterjal = 'PAMATERJAL',
  Pamuratasa = 'PAMURATASA',
  Paohutus = 'PAOHUTUS',
  Papatareid = 'PAPATAREID',
  Pasuurus = 'PASUURUS',
  Pavariant = 'PAVARIANT',
  Pavarv = 'PAVARV',
  Paveekindlus = 'PAVEEKINDLUS',
  Productcategory = 'PRODUCTCATEGORY',
  Producttag = 'PRODUCTTAG',
  Producttype = 'PRODUCTTYPE',
  Shippingclass = 'SHIPPINGCLASS',
  Tag = 'TAG',
  Visibleproduct = 'VISIBLEPRODUCT'
}

export enum GraphCms_TaxonomyOperatorEnum {
  And = 'AND',
  Exists = 'EXISTS',
  In = 'IN',
  NotExists = 'NOT_EXISTS',
  NotIn = 'NOT_IN'
}

export type GraphCms_TaxRate = GraphCms_Node & {
   __typename?: 'GraphCMS_TaxRate',
  city?: Maybe<Array<Maybe<Scalars['String']>>>,
  class?: Maybe<GraphCms_TaxClassEnum>,
  compound?: Maybe<Scalars['Boolean']>,
  country?: Maybe<Scalars['String']>,
  id: Scalars['ID'],
  name?: Maybe<Scalars['String']>,
  order?: Maybe<Scalars['Int']>,
  postcode?: Maybe<Array<Maybe<Scalars['String']>>>,
  priority?: Maybe<Scalars['Int']>,
  rate?: Maybe<Scalars['String']>,
  rateId?: Maybe<Scalars['Int']>,
  shipping?: Maybe<Scalars['Boolean']>,
  state?: Maybe<Scalars['String']>,
};

export enum GraphCms_TaxRateConnectionOrderbyEnum {
  Id = 'ID',
  Order = 'ORDER'
}

export type GraphCms_TaxRateConnectionOrderbyInput = {
  field: GraphCms_TaxRateConnectionOrderbyEnum,
  order?: Maybe<GraphCms_OrderEnum>,
};

export enum GraphCms_TaxStatusEnum {
  None = 'NONE',
  Shipping = 'SHIPPING',
  Taxable = 'TAXABLE'
}

export enum GraphCms_TermObjectsConnectionOrderbyEnum {
  Count = 'COUNT',
  Description = 'DESCRIPTION',
  Name = 'NAME',
  Slug = 'SLUG',
  TermGroup = 'TERM_GROUP',
  TermId = 'TERM_ID',
  TermOrder = 'TERM_ORDER'
}

export type GraphCms_TermObjectUnion = GraphCms_Category | GraphCms_Tag | GraphCms_ProductType | GraphCms_VisibleProduct | GraphCms_ProductCategory | GraphCms_ProductTag | GraphCms_ShippingClass | GraphCms_PaHind | GraphCms_PaHulk | GraphCms_PaKasutusaeg | GraphCms_PaKogus | GraphCms_PaKontuur | GraphCms_PaKoostisained | GraphCms_PaLaadimisaeg | GraphCms_PaMaterjal | GraphCms_PaMuratasa | GraphCms_PaOhutus | GraphCms_PaPatareid | GraphCms_PaSuurus | GraphCms_PaVariant | GraphCms_PaVarv | GraphCms_PaVeekindlus;

export type GraphCms_Theme = GraphCms_Node & {
   __typename?: 'GraphCMS_Theme',
  author?: Maybe<Scalars['String']>,
  authorUri?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  id: Scalars['ID'],
  isRestricted?: Maybe<Scalars['Boolean']>,
  name?: Maybe<Scalars['String']>,
  screenshot?: Maybe<Scalars['String']>,
  slug?: Maybe<Scalars['String']>,
  tags?: Maybe<Array<Maybe<Scalars['String']>>>,
  themeUri?: Maybe<Scalars['String']>,
  version?: Maybe<Scalars['Float']>,
};

export type GraphCms_UpdateCategoryInput = {
  aliasOf?: Maybe<Scalars['String']>,
  clientMutationId: Scalars['String'],
  description?: Maybe<Scalars['String']>,
  id: Scalars['ID'],
  name?: Maybe<Scalars['String']>,
  parentId?: Maybe<Scalars['ID']>,
  slug?: Maybe<Scalars['String']>,
};

export type GraphCms_UpdateCategoryPayload = {
   __typename?: 'GraphCMS_UpdateCategoryPayload',
  category?: Maybe<GraphCms_Category>,
  clientMutationId: Scalars['String'],
};

export type GraphCms_UpdateCommentInput = {
  agent?: Maybe<Scalars['String']>,
  approved?: Maybe<Scalars['String']>,
  author?: Maybe<Scalars['String']>,
  authorEmail?: Maybe<Scalars['String']>,
  authorIp?: Maybe<Scalars['String']>,
  authorUrl?: Maybe<Scalars['String']>,
  clientMutationId: Scalars['String'],
  commentOn?: Maybe<Scalars['Int']>,
  content?: Maybe<Scalars['String']>,
  date?: Maybe<Scalars['String']>,
  id: Scalars['ID'],
  parent?: Maybe<Scalars['ID']>,
  type?: Maybe<Scalars['String']>,
  userId?: Maybe<Scalars['Int']>,
};

export type GraphCms_UpdateCommentPayload = {
   __typename?: 'GraphCMS_UpdateCommentPayload',
  clientMutationId: Scalars['String'],
  comment?: Maybe<GraphCms_Comment>,
  success?: Maybe<Scalars['Boolean']>,
};

export type GraphCms_UpdateCustomerInput = {
  aim?: Maybe<Scalars['String']>,
  billing?: Maybe<GraphCms_CustomerAddressInput>,
  clientMutationId: Scalars['String'],
  description?: Maybe<Scalars['String']>,
  displayName?: Maybe<Scalars['String']>,
  email?: Maybe<Scalars['String']>,
  firstName?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['ID']>,
  jabber?: Maybe<Scalars['String']>,
  lastName?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>,
  nicename?: Maybe<Scalars['String']>,
  nickname?: Maybe<Scalars['String']>,
  password?: Maybe<Scalars['String']>,
  registered?: Maybe<Scalars['String']>,
  richEditing?: Maybe<Scalars['String']>,
  roles?: Maybe<Array<Maybe<Scalars['String']>>>,
  shipping?: Maybe<GraphCms_CustomerAddressInput>,
  shippingSameAsBilling?: Maybe<Scalars['Boolean']>,
  websiteUrl?: Maybe<Scalars['String']>,
  yim?: Maybe<Scalars['String']>,
};

export type GraphCms_UpdateCustomerPayload = {
   __typename?: 'GraphCMS_UpdateCustomerPayload',
  clientMutationId: Scalars['String'],
  customer?: Maybe<GraphCms_Customer>,
};

export type GraphCms_UpdateItemQuantitiesInput = {
  clientMutationId: Scalars['String'],
  items?: Maybe<Array<Maybe<GraphCms_CartItemQuantityInput>>>,
};

export type GraphCms_UpdateItemQuantitiesPayload = {
   __typename?: 'GraphCMS_UpdateItemQuantitiesPayload',
  cart?: Maybe<GraphCms_Cart>,
  clientMutationId: Scalars['String'],
  items?: Maybe<Array<Maybe<GraphCms_CartItem>>>,
  removed?: Maybe<Array<Maybe<GraphCms_CartItem>>>,
  updated?: Maybe<Array<Maybe<GraphCms_CartItem>>>,
};

export type GraphCms_UpdateMediaItemInput = {
  altText?: Maybe<Scalars['String']>,
  authorId?: Maybe<Scalars['ID']>,
  caption?: Maybe<Scalars['String']>,
  clientMutationId: Scalars['String'],
  commentStatus?: Maybe<Scalars['String']>,
  date?: Maybe<Scalars['String']>,
  dateGmt?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  filePath?: Maybe<Scalars['String']>,
  fileType?: Maybe<GraphCms_MimeTypeEnum>,
  id: Scalars['ID'],
  parentId?: Maybe<Scalars['ID']>,
  pingStatus?: Maybe<Scalars['String']>,
  slug?: Maybe<Scalars['String']>,
  status?: Maybe<GraphCms_MediaItemStatusEnum>,
  title?: Maybe<Scalars['String']>,
};

export type GraphCms_UpdateMediaItemPayload = {
   __typename?: 'GraphCMS_UpdateMediaItemPayload',
  clientMutationId: Scalars['String'],
  mediaItem?: Maybe<GraphCms_MediaItem>,
};

export type GraphCms_UpdateOrderInput = {
  billing?: Maybe<GraphCms_CustomerAddressInput>,
  clientMutationId: Scalars['String'],
  coupons?: Maybe<Array<Maybe<Scalars['String']>>>,
  currency?: Maybe<Scalars['String']>,
  customerId?: Maybe<Scalars['Int']>,
  customerNote?: Maybe<Scalars['String']>,
  feeLines?: Maybe<Array<Maybe<GraphCms_FeeLineInput>>>,
  id?: Maybe<Scalars['ID']>,
  isPaid?: Maybe<Scalars['Boolean']>,
  lineItems?: Maybe<Array<Maybe<GraphCms_LineItemInput>>>,
  metaData?: Maybe<Array<Maybe<GraphCms_MetaDataInput>>>,
  orderId?: Maybe<Scalars['Int']>,
  parentId?: Maybe<Scalars['Int']>,
  paymentMethod?: Maybe<Scalars['String']>,
  paymentMethodTitle?: Maybe<Scalars['String']>,
  shipping?: Maybe<GraphCms_CustomerAddressInput>,
  shippingLines?: Maybe<Array<Maybe<GraphCms_ShippingLineInput>>>,
  status?: Maybe<GraphCms_OrderStatusEnum>,
  transactionId?: Maybe<Scalars['String']>,
};

export type GraphCms_UpdateOrderPayload = {
   __typename?: 'GraphCMS_UpdateOrderPayload',
  clientMutationId: Scalars['String'],
  order?: Maybe<GraphCms_Order>,
};

export type GraphCms_UpdatePageInput = {
  authorId?: Maybe<Scalars['ID']>,
  clientMutationId: Scalars['String'],
  commentCount?: Maybe<Scalars['Int']>,
  commentStatus?: Maybe<Scalars['String']>,
  content?: Maybe<Scalars['String']>,
  date?: Maybe<Scalars['String']>,
  excerpt?: Maybe<Scalars['String']>,
  id: Scalars['ID'],
  menuOrder?: Maybe<Scalars['Int']>,
  mimeType?: Maybe<GraphCms_MimeTypeEnum>,
  parentId?: Maybe<Scalars['ID']>,
  password?: Maybe<Scalars['String']>,
  pingStatus?: Maybe<Scalars['String']>,
  pinged?: Maybe<Array<Maybe<Scalars['String']>>>,
  slug?: Maybe<Scalars['String']>,
  status?: Maybe<GraphCms_PostStatusEnum>,
  title?: Maybe<Scalars['String']>,
  toPing?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type GraphCms_UpdatePagePayload = {
   __typename?: 'GraphCMS_UpdatePagePayload',
  clientMutationId: Scalars['String'],
  page?: Maybe<GraphCms_Page>,
};

export type GraphCms_UpdatePaHindInput = {
  aliasOf?: Maybe<Scalars['String']>,
  clientMutationId: Scalars['String'],
  description?: Maybe<Scalars['String']>,
  id: Scalars['ID'],
  name?: Maybe<Scalars['String']>,
  slug?: Maybe<Scalars['String']>,
};

export type GraphCms_UpdatePaHindPayload = {
   __typename?: 'GraphCMS_UpdatePaHindPayload',
  clientMutationId: Scalars['String'],
  paHind?: Maybe<GraphCms_PaHind>,
};

export type GraphCms_UpdatePaHulkInput = {
  aliasOf?: Maybe<Scalars['String']>,
  clientMutationId: Scalars['String'],
  description?: Maybe<Scalars['String']>,
  id: Scalars['ID'],
  name?: Maybe<Scalars['String']>,
  slug?: Maybe<Scalars['String']>,
};

export type GraphCms_UpdatePaHulkPayload = {
   __typename?: 'GraphCMS_UpdatePaHulkPayload',
  clientMutationId: Scalars['String'],
  paHulk?: Maybe<GraphCms_PaHulk>,
};

export type GraphCms_UpdatePaKasutusaegInput = {
  aliasOf?: Maybe<Scalars['String']>,
  clientMutationId: Scalars['String'],
  description?: Maybe<Scalars['String']>,
  id: Scalars['ID'],
  name?: Maybe<Scalars['String']>,
  slug?: Maybe<Scalars['String']>,
};

export type GraphCms_UpdatePaKasutusaegPayload = {
   __typename?: 'GraphCMS_UpdatePaKasutusaegPayload',
  clientMutationId: Scalars['String'],
  paKasutusaeg?: Maybe<GraphCms_PaKasutusaeg>,
};

export type GraphCms_UpdatePaKogusInput = {
  aliasOf?: Maybe<Scalars['String']>,
  clientMutationId: Scalars['String'],
  description?: Maybe<Scalars['String']>,
  id: Scalars['ID'],
  name?: Maybe<Scalars['String']>,
  slug?: Maybe<Scalars['String']>,
};

export type GraphCms_UpdatePaKogusPayload = {
   __typename?: 'GraphCMS_UpdatePaKogusPayload',
  clientMutationId: Scalars['String'],
  paKogus?: Maybe<GraphCms_PaKogus>,
};

export type GraphCms_UpdatePaKontuurInput = {
  aliasOf?: Maybe<Scalars['String']>,
  clientMutationId: Scalars['String'],
  description?: Maybe<Scalars['String']>,
  id: Scalars['ID'],
  name?: Maybe<Scalars['String']>,
  slug?: Maybe<Scalars['String']>,
};

export type GraphCms_UpdatePaKontuurPayload = {
   __typename?: 'GraphCMS_UpdatePaKontuurPayload',
  clientMutationId: Scalars['String'],
  paKontuur?: Maybe<GraphCms_PaKontuur>,
};

export type GraphCms_UpdatePaKoostisainedInput = {
  aliasOf?: Maybe<Scalars['String']>,
  clientMutationId: Scalars['String'],
  description?: Maybe<Scalars['String']>,
  id: Scalars['ID'],
  name?: Maybe<Scalars['String']>,
  slug?: Maybe<Scalars['String']>,
};

export type GraphCms_UpdatePaKoostisainedPayload = {
   __typename?: 'GraphCMS_UpdatePaKoostisainedPayload',
  clientMutationId: Scalars['String'],
  paKoostisained?: Maybe<GraphCms_PaKoostisained>,
};

export type GraphCms_UpdatePaLaadimisaegInput = {
  aliasOf?: Maybe<Scalars['String']>,
  clientMutationId: Scalars['String'],
  description?: Maybe<Scalars['String']>,
  id: Scalars['ID'],
  name?: Maybe<Scalars['String']>,
  slug?: Maybe<Scalars['String']>,
};

export type GraphCms_UpdatePaLaadimisaegPayload = {
   __typename?: 'GraphCMS_UpdatePaLaadimisaegPayload',
  clientMutationId: Scalars['String'],
  paLaadimisaeg?: Maybe<GraphCms_PaLaadimisaeg>,
};

export type GraphCms_UpdatePaMaterjalInput = {
  aliasOf?: Maybe<Scalars['String']>,
  clientMutationId: Scalars['String'],
  description?: Maybe<Scalars['String']>,
  id: Scalars['ID'],
  name?: Maybe<Scalars['String']>,
  slug?: Maybe<Scalars['String']>,
};

export type GraphCms_UpdatePaMaterjalPayload = {
   __typename?: 'GraphCMS_UpdatePaMaterjalPayload',
  clientMutationId: Scalars['String'],
  paMaterjal?: Maybe<GraphCms_PaMaterjal>,
};

export type GraphCms_UpdatePaMuratasaInput = {
  aliasOf?: Maybe<Scalars['String']>,
  clientMutationId: Scalars['String'],
  description?: Maybe<Scalars['String']>,
  id: Scalars['ID'],
  name?: Maybe<Scalars['String']>,
  slug?: Maybe<Scalars['String']>,
};

export type GraphCms_UpdatePaMuratasaPayload = {
   __typename?: 'GraphCMS_UpdatePaMuratasaPayload',
  clientMutationId: Scalars['String'],
  paMuratasa?: Maybe<GraphCms_PaMuratasa>,
};

export type GraphCms_UpdatePaOhutusInput = {
  aliasOf?: Maybe<Scalars['String']>,
  clientMutationId: Scalars['String'],
  description?: Maybe<Scalars['String']>,
  id: Scalars['ID'],
  name?: Maybe<Scalars['String']>,
  slug?: Maybe<Scalars['String']>,
};

export type GraphCms_UpdatePaOhutusPayload = {
   __typename?: 'GraphCMS_UpdatePaOhutusPayload',
  clientMutationId: Scalars['String'],
  paOhutus?: Maybe<GraphCms_PaOhutus>,
};

export type GraphCms_UpdatePaPatareidInput = {
  aliasOf?: Maybe<Scalars['String']>,
  clientMutationId: Scalars['String'],
  description?: Maybe<Scalars['String']>,
  id: Scalars['ID'],
  name?: Maybe<Scalars['String']>,
  slug?: Maybe<Scalars['String']>,
};

export type GraphCms_UpdatePaPatareidPayload = {
   __typename?: 'GraphCMS_UpdatePaPatareidPayload',
  clientMutationId: Scalars['String'],
  paPatareid?: Maybe<GraphCms_PaPatareid>,
};

export type GraphCms_UpdatePaSuurusInput = {
  aliasOf?: Maybe<Scalars['String']>,
  clientMutationId: Scalars['String'],
  description?: Maybe<Scalars['String']>,
  id: Scalars['ID'],
  name?: Maybe<Scalars['String']>,
  slug?: Maybe<Scalars['String']>,
};

export type GraphCms_UpdatePaSuurusPayload = {
   __typename?: 'GraphCMS_UpdatePaSuurusPayload',
  clientMutationId: Scalars['String'],
  paSuurus?: Maybe<GraphCms_PaSuurus>,
};

export type GraphCms_UpdatePaVariantInput = {
  aliasOf?: Maybe<Scalars['String']>,
  clientMutationId: Scalars['String'],
  description?: Maybe<Scalars['String']>,
  id: Scalars['ID'],
  name?: Maybe<Scalars['String']>,
  slug?: Maybe<Scalars['String']>,
};

export type GraphCms_UpdatePaVariantPayload = {
   __typename?: 'GraphCMS_UpdatePaVariantPayload',
  clientMutationId: Scalars['String'],
  paVariant?: Maybe<GraphCms_PaVariant>,
};

export type GraphCms_UpdatePaVarvInput = {
  aliasOf?: Maybe<Scalars['String']>,
  clientMutationId: Scalars['String'],
  description?: Maybe<Scalars['String']>,
  id: Scalars['ID'],
  name?: Maybe<Scalars['String']>,
  slug?: Maybe<Scalars['String']>,
};

export type GraphCms_UpdatePaVarvPayload = {
   __typename?: 'GraphCMS_UpdatePaVarvPayload',
  clientMutationId: Scalars['String'],
  paVarv?: Maybe<GraphCms_PaVarv>,
};

export type GraphCms_UpdatePaVeekindlusInput = {
  aliasOf?: Maybe<Scalars['String']>,
  clientMutationId: Scalars['String'],
  description?: Maybe<Scalars['String']>,
  id: Scalars['ID'],
  name?: Maybe<Scalars['String']>,
  slug?: Maybe<Scalars['String']>,
};

export type GraphCms_UpdatePaVeekindlusPayload = {
   __typename?: 'GraphCMS_UpdatePaVeekindlusPayload',
  clientMutationId: Scalars['String'],
  paVeekindlus?: Maybe<GraphCms_PaVeekindlus>,
};

export type GraphCms_UpdatePostInput = {
  authorId?: Maybe<Scalars['ID']>,
  categories?: Maybe<GraphCms_PostCategoriesInput>,
  clientMutationId: Scalars['String'],
  commentCount?: Maybe<Scalars['Int']>,
  commentStatus?: Maybe<Scalars['String']>,
  content?: Maybe<Scalars['String']>,
  date?: Maybe<Scalars['String']>,
  excerpt?: Maybe<Scalars['String']>,
  id: Scalars['ID'],
  menuOrder?: Maybe<Scalars['Int']>,
  mimeType?: Maybe<GraphCms_MimeTypeEnum>,
  parentId?: Maybe<Scalars['ID']>,
  password?: Maybe<Scalars['String']>,
  pingStatus?: Maybe<Scalars['String']>,
  pinged?: Maybe<Array<Maybe<Scalars['String']>>>,
  slug?: Maybe<Scalars['String']>,
  status?: Maybe<GraphCms_PostStatusEnum>,
  tags?: Maybe<GraphCms_PostTagsInput>,
  title?: Maybe<Scalars['String']>,
  toPing?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type GraphCms_UpdatePostPayload = {
   __typename?: 'GraphCMS_UpdatePostPayload',
  clientMutationId: Scalars['String'],
  post?: Maybe<GraphCms_Post>,
};

export type GraphCms_UpdateProductCategoryInput = {
  aliasOf?: Maybe<Scalars['String']>,
  clientMutationId: Scalars['String'],
  description?: Maybe<Scalars['String']>,
  id: Scalars['ID'],
  name?: Maybe<Scalars['String']>,
  parentId?: Maybe<Scalars['ID']>,
  slug?: Maybe<Scalars['String']>,
};

export type GraphCms_UpdateProductCategoryPayload = {
   __typename?: 'GraphCMS_UpdateProductCategoryPayload',
  clientMutationId: Scalars['String'],
  productCategory?: Maybe<GraphCms_ProductCategory>,
};

export type GraphCms_UpdateProductTagInput = {
  aliasOf?: Maybe<Scalars['String']>,
  clientMutationId: Scalars['String'],
  description?: Maybe<Scalars['String']>,
  id: Scalars['ID'],
  name?: Maybe<Scalars['String']>,
  slug?: Maybe<Scalars['String']>,
};

export type GraphCms_UpdateProductTagPayload = {
   __typename?: 'GraphCMS_UpdateProductTagPayload',
  clientMutationId: Scalars['String'],
  productTag?: Maybe<GraphCms_ProductTag>,
};

export type GraphCms_UpdateProductTypeInput = {
  aliasOf?: Maybe<Scalars['String']>,
  clientMutationId: Scalars['String'],
  description?: Maybe<Scalars['String']>,
  id: Scalars['ID'],
  name?: Maybe<Scalars['String']>,
  slug?: Maybe<Scalars['String']>,
};

export type GraphCms_UpdateProductTypePayload = {
   __typename?: 'GraphCMS_UpdateProductTypePayload',
  clientMutationId: Scalars['String'],
  productType?: Maybe<GraphCms_ProductType>,
};

export type GraphCms_UpdateSettingsInput = {
  clientMutationId: Scalars['String'],
  discussionSettingsDefaultCommentStatus?: Maybe<Scalars['String']>,
  discussionSettingsDefaultPingStatus?: Maybe<Scalars['String']>,
  generalSettingsDateFormat?: Maybe<Scalars['String']>,
  generalSettingsDescription?: Maybe<Scalars['String']>,
  generalSettingsEmail?: Maybe<Scalars['String']>,
  generalSettingsLanguage?: Maybe<Scalars['String']>,
  generalSettingsStartOfWeek?: Maybe<Scalars['Int']>,
  generalSettingsTimeFormat?: Maybe<Scalars['String']>,
  generalSettingsTimezone?: Maybe<Scalars['String']>,
  generalSettingsTitle?: Maybe<Scalars['String']>,
  generalSettingsUrl?: Maybe<Scalars['String']>,
  readingSettingsPostsPerPage?: Maybe<Scalars['Int']>,
  writingSettingsDefaultCategory?: Maybe<Scalars['Int']>,
  writingSettingsDefaultPostFormat?: Maybe<Scalars['String']>,
  writingSettingsUseSmilies?: Maybe<Scalars['Boolean']>,
};

export type GraphCms_UpdateSettingsPayload = {
   __typename?: 'GraphCMS_UpdateSettingsPayload',
  allSettings?: Maybe<GraphCms_Settings>,
  clientMutationId: Scalars['String'],
  discussionSettings?: Maybe<GraphCms_DiscussionSettings>,
  generalSettings?: Maybe<GraphCms_GeneralSettings>,
  readingSettings?: Maybe<GraphCms_ReadingSettings>,
  writingSettings?: Maybe<GraphCms_WritingSettings>,
};

export type GraphCms_UpdateShippingClassInput = {
  aliasOf?: Maybe<Scalars['String']>,
  clientMutationId: Scalars['String'],
  description?: Maybe<Scalars['String']>,
  id: Scalars['ID'],
  name?: Maybe<Scalars['String']>,
  slug?: Maybe<Scalars['String']>,
};

export type GraphCms_UpdateShippingClassPayload = {
   __typename?: 'GraphCMS_UpdateShippingClassPayload',
  clientMutationId: Scalars['String'],
  shippingClass?: Maybe<GraphCms_ShippingClass>,
};

export type GraphCms_UpdateShippingMethodInput = {
  clientMutationId: Scalars['String'],
  shippingMethods?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type GraphCms_UpdateShippingMethodPayload = {
   __typename?: 'GraphCMS_UpdateShippingMethodPayload',
  cart?: Maybe<GraphCms_Cart>,
  clientMutationId: Scalars['String'],
};

export type GraphCms_UpdateTagInput = {
  aliasOf?: Maybe<Scalars['String']>,
  clientMutationId: Scalars['String'],
  description?: Maybe<Scalars['String']>,
  id: Scalars['ID'],
  name?: Maybe<Scalars['String']>,
  slug?: Maybe<Scalars['String']>,
};

export type GraphCms_UpdateTagPayload = {
   __typename?: 'GraphCMS_UpdateTagPayload',
  clientMutationId: Scalars['String'],
  tag?: Maybe<GraphCms_Tag>,
};

export type GraphCms_UpdateUserInput = {
  aim?: Maybe<Scalars['String']>,
  clientMutationId: Scalars['String'],
  description?: Maybe<Scalars['String']>,
  displayName?: Maybe<Scalars['String']>,
  email?: Maybe<Scalars['String']>,
  firstName?: Maybe<Scalars['String']>,
  id: Scalars['ID'],
  jabber?: Maybe<Scalars['String']>,
  lastName?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>,
  nicename?: Maybe<Scalars['String']>,
  nickname?: Maybe<Scalars['String']>,
  password?: Maybe<Scalars['String']>,
  registered?: Maybe<Scalars['String']>,
  richEditing?: Maybe<Scalars['String']>,
  roles?: Maybe<Array<Maybe<Scalars['String']>>>,
  websiteUrl?: Maybe<Scalars['String']>,
  yim?: Maybe<Scalars['String']>,
};

export type GraphCms_UpdateUserPayload = {
   __typename?: 'GraphCMS_UpdateUserPayload',
  clientMutationId: Scalars['String'],
  user?: Maybe<GraphCms_User>,
};

export type GraphCms_UpdateVisibleProductInput = {
  aliasOf?: Maybe<Scalars['String']>,
  clientMutationId: Scalars['String'],
  description?: Maybe<Scalars['String']>,
  id: Scalars['ID'],
  name?: Maybe<Scalars['String']>,
  slug?: Maybe<Scalars['String']>,
};

export type GraphCms_UpdateVisibleProductPayload = {
   __typename?: 'GraphCMS_UpdateVisibleProductPayload',
  clientMutationId: Scalars['String'],
  visibleProduct?: Maybe<GraphCms_VisibleProduct>,
};

export type GraphCms_User = GraphCms_Node & {
   __typename?: 'GraphCMS_User',
  avatar?: Maybe<GraphCms_Avatar>,
  capKey?: Maybe<Scalars['String']>,
  capabilities?: Maybe<Array<Maybe<Scalars['String']>>>,
  comments?: Maybe<GraphCms_UserToCommentConnection>,
  description?: Maybe<Scalars['String']>,
  email?: Maybe<Scalars['String']>,
  extraCapabilities?: Maybe<Array<Maybe<Scalars['String']>>>,
  firstName?: Maybe<Scalars['String']>,
  id: Scalars['ID'],
  isRestricted?: Maybe<Scalars['Boolean']>,
  lastName?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>,
  mediaItems?: Maybe<GraphCms_UserToMediaItemConnection>,
  name?: Maybe<Scalars['String']>,
  nicename?: Maybe<Scalars['String']>,
  nickname?: Maybe<Scalars['String']>,
  pages?: Maybe<GraphCms_UserToPageConnection>,
  posts?: Maybe<GraphCms_UserToPostConnection>,
  registeredDate?: Maybe<Scalars['String']>,
  revisions?: Maybe<GraphCms_UserToContentRevisionUnionConnection>,
  roles?: Maybe<GraphCms_UserToUserRoleConnection>,
  slug?: Maybe<Scalars['String']>,
  url?: Maybe<Scalars['String']>,
  userId?: Maybe<Scalars['Int']>,
  username?: Maybe<Scalars['String']>,
};


export type GraphCms_UserAvatarArgs = {
  size?: Maybe<Scalars['Int']>,
  forceDefault?: Maybe<Scalars['Boolean']>,
  rating?: Maybe<GraphCms_AvatarRatingEnum>
};


export type GraphCms_UserCommentsArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  where?: Maybe<GraphCms_UserToCommentConnectionWhereArgs>
};


export type GraphCms_UserMediaItemsArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  where?: Maybe<GraphCms_UserToMediaItemConnectionWhereArgs>
};


export type GraphCms_UserPagesArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  where?: Maybe<GraphCms_UserToPageConnectionWhereArgs>
};


export type GraphCms_UserPostsArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  where?: Maybe<GraphCms_UserToPostConnectionWhereArgs>
};


export type GraphCms_UserRevisionsArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  where?: Maybe<GraphCms_UserToContentRevisionUnionConnectionWhereArgs>
};


export type GraphCms_UserRolesArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>
};

export type GraphCms_UserRole = GraphCms_Node & {
   __typename?: 'GraphCMS_UserRole',
  capabilities?: Maybe<Array<Maybe<Scalars['String']>>>,
  displayName?: Maybe<Scalars['String']>,
  id: Scalars['ID'],
  isRestricted?: Maybe<Scalars['Boolean']>,
  name?: Maybe<Scalars['String']>,
};

export enum GraphCms_UserRoleEnum {
  Author = 'AUTHOR',
  Contributor = 'CONTRIBUTOR',
  Customer = 'CUSTOMER',
  Editor = 'EDITOR',
  ShopManager = 'SHOP_MANAGER',
  Subscriber = 'SUBSCRIBER'
}

export enum GraphCms_UsersConnectionOrderbyEnum {
  DisplayName = 'DISPLAY_NAME',
  Email = 'EMAIL',
  Login = 'LOGIN',
  LoginIn = 'LOGIN_IN',
  NiceName = 'NICE_NAME',
  NiceNameIn = 'NICE_NAME_IN',
  Registered = 'REGISTERED',
  Url = 'URL'
}

export type GraphCms_UsersConnectionOrderbyInput = {
  field: GraphCms_UsersConnectionOrderbyEnum,
  order?: Maybe<GraphCms_OrderEnum>,
};

export type GraphCms_UserToCommentConnection = {
   __typename?: 'GraphCMS_UserToCommentConnection',
  edges?: Maybe<Array<Maybe<GraphCms_UserToCommentConnectionEdge>>>,
  nodes?: Maybe<Array<Maybe<GraphCms_Comment>>>,
  pageInfo?: Maybe<GraphCms_WpPageInfo>,
};

export type GraphCms_UserToCommentConnectionEdge = {
   __typename?: 'GraphCMS_UserToCommentConnectionEdge',
  cursor?: Maybe<Scalars['String']>,
  node?: Maybe<GraphCms_Comment>,
};

export type GraphCms_UserToCommentConnectionWhereArgs = {
  authorEmail?: Maybe<Scalars['String']>,
  authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>,
  authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>,
  authorUrl?: Maybe<Scalars['String']>,
  commentIn?: Maybe<Array<Maybe<Scalars['ID']>>>,
  commentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>,
  commentType?: Maybe<Scalars['String']>,
  commentTypeIn?: Maybe<Array<Maybe<Scalars['String']>>>,
  commentTypeNotIn?: Maybe<Scalars['String']>,
  contentAuthor?: Maybe<Array<Maybe<Scalars['ID']>>>,
  contentAuthorIn?: Maybe<Array<Maybe<Scalars['ID']>>>,
  contentAuthorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>,
  contentId?: Maybe<Scalars['ID']>,
  contentIdIn?: Maybe<Array<Maybe<Scalars['ID']>>>,
  contentIdNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>,
  contentName?: Maybe<Scalars['String']>,
  contentParent?: Maybe<Scalars['Int']>,
  contentStatus?: Maybe<Array<Maybe<GraphCms_PostStatusEnum>>>,
  contentType?: Maybe<Array<Maybe<GraphCms_PostTypeEnum>>>,
  includeUnapproved?: Maybe<Array<Maybe<Scalars['ID']>>>,
  karma?: Maybe<Scalars['Int']>,
  order?: Maybe<GraphCms_OrderEnum>,
  orderby?: Maybe<GraphCms_CommentsConnectionOrderbyEnum>,
  parent?: Maybe<Scalars['Int']>,
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>,
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>,
  search?: Maybe<Scalars['String']>,
  status?: Maybe<Scalars['String']>,
  userId?: Maybe<Scalars['ID']>,
};

export type GraphCms_UserToContentRevisionUnionConnection = {
   __typename?: 'GraphCMS_UserToContentRevisionUnionConnection',
  edges?: Maybe<Array<Maybe<GraphCms_UserToContentRevisionUnionConnectionEdge>>>,
  nodes?: Maybe<Array<Maybe<GraphCms_ContentRevisionUnion>>>,
  pageInfo?: Maybe<GraphCms_WpPageInfo>,
};

export type GraphCms_UserToContentRevisionUnionConnectionEdge = {
   __typename?: 'GraphCMS_UserToContentRevisionUnionConnectionEdge',
  cursor?: Maybe<Scalars['String']>,
  node?: Maybe<GraphCms_ContentRevisionUnion>,
};

export type GraphCms_UserToContentRevisionUnionConnectionWhereArgs = {
  author?: Maybe<Scalars['Int']>,
  authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>,
  authorName?: Maybe<Scalars['String']>,
  authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>,
  categoryId?: Maybe<Scalars['Int']>,
  categoryIn?: Maybe<Array<Maybe<Scalars['ID']>>>,
  categoryName?: Maybe<Scalars['String']>,
  categoryNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>,
  dateQuery?: Maybe<GraphCms_DateQueryInput>,
  hasPassword?: Maybe<Scalars['Boolean']>,
  id?: Maybe<Scalars['Int']>,
  in?: Maybe<Array<Maybe<Scalars['ID']>>>,
  mimeType?: Maybe<GraphCms_MimeTypeEnum>,
  name?: Maybe<Scalars['String']>,
  nameIn?: Maybe<Array<Maybe<Scalars['String']>>>,
  notIn?: Maybe<Array<Maybe<Scalars['ID']>>>,
  orderby?: Maybe<Array<Maybe<GraphCms_PostObjectsConnectionOrderbyInput>>>,
  parent?: Maybe<Scalars['String']>,
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>,
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>,
  password?: Maybe<Scalars['String']>,
  search?: Maybe<Scalars['String']>,
  stati?: Maybe<Array<Maybe<GraphCms_PostStatusEnum>>>,
  status?: Maybe<GraphCms_PostStatusEnum>,
  tag?: Maybe<Scalars['String']>,
  tagId?: Maybe<Scalars['String']>,
  tagIn?: Maybe<Array<Maybe<Scalars['ID']>>>,
  tagNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>,
  tagSlugAnd?: Maybe<Array<Maybe<Scalars['String']>>>,
  tagSlugIn?: Maybe<Array<Maybe<Scalars['String']>>>,
  title?: Maybe<Scalars['String']>,
};

export type GraphCms_UserToMediaItemConnection = {
   __typename?: 'GraphCMS_UserToMediaItemConnection',
  edges?: Maybe<Array<Maybe<GraphCms_UserToMediaItemConnectionEdge>>>,
  nodes?: Maybe<Array<Maybe<GraphCms_MediaItem>>>,
  pageInfo?: Maybe<GraphCms_WpPageInfo>,
  postTypeInfo?: Maybe<GraphCms_PostType>,
};

export type GraphCms_UserToMediaItemConnectionEdge = {
   __typename?: 'GraphCMS_UserToMediaItemConnectionEdge',
  cursor?: Maybe<Scalars['String']>,
  node?: Maybe<GraphCms_MediaItem>,
};

export type GraphCms_UserToMediaItemConnectionWhereArgs = {
  author?: Maybe<Scalars['Int']>,
  authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>,
  authorName?: Maybe<Scalars['String']>,
  authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>,
  categoryId?: Maybe<Scalars['Int']>,
  categoryIn?: Maybe<Array<Maybe<Scalars['ID']>>>,
  categoryName?: Maybe<Scalars['String']>,
  categoryNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>,
  dateQuery?: Maybe<GraphCms_DateQueryInput>,
  hasPassword?: Maybe<Scalars['Boolean']>,
  id?: Maybe<Scalars['Int']>,
  in?: Maybe<Array<Maybe<Scalars['ID']>>>,
  mimeType?: Maybe<GraphCms_MimeTypeEnum>,
  name?: Maybe<Scalars['String']>,
  nameIn?: Maybe<Array<Maybe<Scalars['String']>>>,
  notIn?: Maybe<Array<Maybe<Scalars['ID']>>>,
  orderby?: Maybe<Array<Maybe<GraphCms_PostObjectsConnectionOrderbyInput>>>,
  parent?: Maybe<Scalars['String']>,
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>,
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>,
  password?: Maybe<Scalars['String']>,
  search?: Maybe<Scalars['String']>,
  stati?: Maybe<Array<Maybe<GraphCms_PostStatusEnum>>>,
  status?: Maybe<GraphCms_PostStatusEnum>,
  tag?: Maybe<Scalars['String']>,
  tagId?: Maybe<Scalars['String']>,
  tagIn?: Maybe<Array<Maybe<Scalars['ID']>>>,
  tagNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>,
  tagSlugAnd?: Maybe<Array<Maybe<Scalars['String']>>>,
  tagSlugIn?: Maybe<Array<Maybe<Scalars['String']>>>,
  title?: Maybe<Scalars['String']>,
};

export type GraphCms_UserToPageConnection = {
   __typename?: 'GraphCMS_UserToPageConnection',
  edges?: Maybe<Array<Maybe<GraphCms_UserToPageConnectionEdge>>>,
  nodes?: Maybe<Array<Maybe<GraphCms_Page>>>,
  pageInfo?: Maybe<GraphCms_WpPageInfo>,
  postTypeInfo?: Maybe<GraphCms_PostType>,
};

export type GraphCms_UserToPageConnectionEdge = {
   __typename?: 'GraphCMS_UserToPageConnectionEdge',
  cursor?: Maybe<Scalars['String']>,
  node?: Maybe<GraphCms_Page>,
};

export type GraphCms_UserToPageConnectionWhereArgs = {
  author?: Maybe<Scalars['Int']>,
  authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>,
  authorName?: Maybe<Scalars['String']>,
  authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>,
  categoryId?: Maybe<Scalars['Int']>,
  categoryIn?: Maybe<Array<Maybe<Scalars['ID']>>>,
  categoryName?: Maybe<Scalars['String']>,
  categoryNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>,
  dateQuery?: Maybe<GraphCms_DateQueryInput>,
  hasPassword?: Maybe<Scalars['Boolean']>,
  id?: Maybe<Scalars['Int']>,
  in?: Maybe<Array<Maybe<Scalars['ID']>>>,
  mimeType?: Maybe<GraphCms_MimeTypeEnum>,
  name?: Maybe<Scalars['String']>,
  nameIn?: Maybe<Array<Maybe<Scalars['String']>>>,
  notIn?: Maybe<Array<Maybe<Scalars['ID']>>>,
  orderby?: Maybe<Array<Maybe<GraphCms_PostObjectsConnectionOrderbyInput>>>,
  parent?: Maybe<Scalars['String']>,
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>,
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>,
  password?: Maybe<Scalars['String']>,
  search?: Maybe<Scalars['String']>,
  stati?: Maybe<Array<Maybe<GraphCms_PostStatusEnum>>>,
  status?: Maybe<GraphCms_PostStatusEnum>,
  tag?: Maybe<Scalars['String']>,
  tagId?: Maybe<Scalars['String']>,
  tagIn?: Maybe<Array<Maybe<Scalars['ID']>>>,
  tagNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>,
  tagSlugAnd?: Maybe<Array<Maybe<Scalars['String']>>>,
  tagSlugIn?: Maybe<Array<Maybe<Scalars['String']>>>,
  title?: Maybe<Scalars['String']>,
};

export type GraphCms_UserToPostConnection = {
   __typename?: 'GraphCMS_UserToPostConnection',
  edges?: Maybe<Array<Maybe<GraphCms_UserToPostConnectionEdge>>>,
  nodes?: Maybe<Array<Maybe<GraphCms_Post>>>,
  pageInfo?: Maybe<GraphCms_WpPageInfo>,
  postTypeInfo?: Maybe<GraphCms_PostType>,
};

export type GraphCms_UserToPostConnectionEdge = {
   __typename?: 'GraphCMS_UserToPostConnectionEdge',
  cursor?: Maybe<Scalars['String']>,
  node?: Maybe<GraphCms_Post>,
};

export type GraphCms_UserToPostConnectionWhereArgs = {
  author?: Maybe<Scalars['Int']>,
  authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>,
  authorName?: Maybe<Scalars['String']>,
  authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>,
  categoryId?: Maybe<Scalars['Int']>,
  categoryIn?: Maybe<Array<Maybe<Scalars['ID']>>>,
  categoryName?: Maybe<Scalars['String']>,
  categoryNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>,
  dateQuery?: Maybe<GraphCms_DateQueryInput>,
  hasPassword?: Maybe<Scalars['Boolean']>,
  id?: Maybe<Scalars['Int']>,
  in?: Maybe<Array<Maybe<Scalars['ID']>>>,
  mimeType?: Maybe<GraphCms_MimeTypeEnum>,
  name?: Maybe<Scalars['String']>,
  nameIn?: Maybe<Array<Maybe<Scalars['String']>>>,
  notIn?: Maybe<Array<Maybe<Scalars['ID']>>>,
  orderby?: Maybe<Array<Maybe<GraphCms_PostObjectsConnectionOrderbyInput>>>,
  parent?: Maybe<Scalars['String']>,
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>,
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>,
  password?: Maybe<Scalars['String']>,
  search?: Maybe<Scalars['String']>,
  stati?: Maybe<Array<Maybe<GraphCms_PostStatusEnum>>>,
  status?: Maybe<GraphCms_PostStatusEnum>,
  tag?: Maybe<Scalars['String']>,
  tagId?: Maybe<Scalars['String']>,
  tagIn?: Maybe<Array<Maybe<Scalars['ID']>>>,
  tagNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>,
  tagSlugAnd?: Maybe<Array<Maybe<Scalars['String']>>>,
  tagSlugIn?: Maybe<Array<Maybe<Scalars['String']>>>,
  title?: Maybe<Scalars['String']>,
};

export type GraphCms_UserToUserRoleConnection = {
   __typename?: 'GraphCMS_UserToUserRoleConnection',
  edges?: Maybe<Array<Maybe<GraphCms_UserToUserRoleConnectionEdge>>>,
  nodes?: Maybe<Array<Maybe<GraphCms_UserRole>>>,
  pageInfo?: Maybe<GraphCms_WpPageInfo>,
};

export type GraphCms_UserToUserRoleConnectionEdge = {
   __typename?: 'GraphCMS_UserToUserRoleConnectionEdge',
  cursor?: Maybe<Scalars['String']>,
  node?: Maybe<GraphCms_UserRole>,
};

export type GraphCms_VariableProduct = GraphCms_Node & GraphCms_Product & {
   __typename?: 'GraphCMS_VariableProduct',
  attributes?: Maybe<GraphCms_ProductToProductAttributeConnection>,
  averageRating?: Maybe<Scalars['Float']>,
  backorders?: Maybe<GraphCms_BackordersEnum>,
  backordersAllowed?: Maybe<Scalars['Boolean']>,
  catalogVisibility?: Maybe<GraphCms_CatalogVisibilityEnum>,
  crossSell?: Maybe<GraphCms_VariableProductToProductConnection>,
  date?: Maybe<Scalars['String']>,
  dateOnSaleFrom?: Maybe<Scalars['String']>,
  dateOnSaleTo?: Maybe<Scalars['String']>,
  defaultAttributes?: Maybe<GraphCms_VariableProductToVariationAttributeConnection>,
  description?: Maybe<Scalars['String']>,
  featured?: Maybe<Scalars['Boolean']>,
  galleryImages?: Maybe<GraphCms_ProductToMediaItemConnection>,
  height?: Maybe<Scalars['String']>,
  id: Scalars['ID'],
  image?: Maybe<GraphCms_MediaItem>,
  length?: Maybe<Scalars['String']>,
  link?: Maybe<Scalars['String']>,
  manageStock?: Maybe<Scalars['Boolean']>,
  menuOrder?: Maybe<Scalars['Int']>,
  metaData?: Maybe<Array<Maybe<GraphCms_MetaData>>>,
  modified?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  onSale?: Maybe<Scalars['Boolean']>,
  paHinds?: Maybe<GraphCms_ProductToPaHindConnection>,
  paHulks?: Maybe<GraphCms_ProductToPaHulkConnection>,
  paKasutusaegs?: Maybe<GraphCms_ProductToPaKasutusaegConnection>,
  paKoguses?: Maybe<GraphCms_ProductToPaKogusConnection>,
  paKontuurs?: Maybe<GraphCms_ProductToPaKontuurConnection>,
  paKoostisaineds?: Maybe<GraphCms_ProductToPaKoostisainedConnection>,
  paLaadimisaegs?: Maybe<GraphCms_ProductToPaLaadimisaegConnection>,
  paMaterjals?: Maybe<GraphCms_ProductToPaMaterjalConnection>,
  paMuratasas?: Maybe<GraphCms_ProductToPaMuratasaConnection>,
  paOhutuses?: Maybe<GraphCms_ProductToPaOhutusConnection>,
  paPatareids?: Maybe<GraphCms_ProductToPaPatareidConnection>,
  paSuuruses?: Maybe<GraphCms_ProductToPaSuurusConnection>,
  paVariants?: Maybe<GraphCms_ProductToPaVariantConnection>,
  paVarvs?: Maybe<GraphCms_ProductToPaVarvConnection>,
  paVeekindluses?: Maybe<GraphCms_ProductToPaVeekindlusConnection>,
  parent?: Maybe<GraphCms_Product>,
  price?: Maybe<Scalars['String']>,
  productCategories?: Maybe<GraphCms_ProductToProductCategoryConnection>,
  productId?: Maybe<Scalars['Int']>,
  productTags?: Maybe<GraphCms_ProductToProductTagConnection>,
  productTypes?: Maybe<GraphCms_ProductToProductTypeConnection>,
  purchasable?: Maybe<Scalars['Boolean']>,
  purchaseNote?: Maybe<Scalars['String']>,
  regularPrice?: Maybe<Scalars['String']>,
  related?: Maybe<GraphCms_ProductToProductConnection>,
  reviewCount?: Maybe<Scalars['Int']>,
  reviewsAllowed?: Maybe<Scalars['Boolean']>,
  salePrice?: Maybe<Scalars['String']>,
  shippingClassId?: Maybe<Scalars['Int']>,
  shippingClasses?: Maybe<GraphCms_ProductToShippingClassConnection>,
  shippingRequired?: Maybe<Scalars['Boolean']>,
  shippingTaxable?: Maybe<Scalars['Boolean']>,
  shortDescription?: Maybe<Scalars['String']>,
  sku?: Maybe<Scalars['String']>,
  slug?: Maybe<Scalars['String']>,
  soldIndividually?: Maybe<Scalars['Boolean']>,
  status?: Maybe<Scalars['String']>,
  stockQuantity?: Maybe<Scalars['Int']>,
  taxClass?: Maybe<GraphCms_TaxClassEnum>,
  taxStatus?: Maybe<GraphCms_TaxStatusEnum>,
  totalSales?: Maybe<Scalars['Int']>,
  type?: Maybe<GraphCms_ProductTypesEnum>,
  upsell?: Maybe<GraphCms_ProductToProductConnection>,
  variations?: Maybe<GraphCms_VariableProductToProductVariationConnection>,
  visibleProducts?: Maybe<GraphCms_ProductToVisibleProductConnection>,
  weight?: Maybe<Scalars['String']>,
  width?: Maybe<Scalars['String']>,
};


export type GraphCms_VariableProductAttributesArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>
};


export type GraphCms_VariableProductCrossSellArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  where?: Maybe<GraphCms_VariableProductToProductConnectionWhereArgs>
};


export type GraphCms_VariableProductDefaultAttributesArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>
};


export type GraphCms_VariableProductDescriptionArgs = {
  format?: Maybe<GraphCms_PostObjectFieldFormatEnum>
};


export type GraphCms_VariableProductGalleryImagesArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  where?: Maybe<GraphCms_ProductToMediaItemConnectionWhereArgs>
};


export type GraphCms_VariableProductMetaDataArgs = {
  key?: Maybe<Scalars['String']>,
  keysIn?: Maybe<Array<Maybe<Scalars['String']>>>,
  multiple?: Maybe<Scalars['Boolean']>
};


export type GraphCms_VariableProductPaHindsArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  where?: Maybe<GraphCms_ProductToPaHindConnectionWhereArgs>
};


export type GraphCms_VariableProductPaHulksArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  where?: Maybe<GraphCms_ProductToPaHulkConnectionWhereArgs>
};


export type GraphCms_VariableProductPaKasutusaegsArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  where?: Maybe<GraphCms_ProductToPaKasutusaegConnectionWhereArgs>
};


export type GraphCms_VariableProductPaKogusesArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  where?: Maybe<GraphCms_ProductToPaKogusConnectionWhereArgs>
};


export type GraphCms_VariableProductPaKontuursArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  where?: Maybe<GraphCms_ProductToPaKontuurConnectionWhereArgs>
};


export type GraphCms_VariableProductPaKoostisainedsArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  where?: Maybe<GraphCms_ProductToPaKoostisainedConnectionWhereArgs>
};


export type GraphCms_VariableProductPaLaadimisaegsArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  where?: Maybe<GraphCms_ProductToPaLaadimisaegConnectionWhereArgs>
};


export type GraphCms_VariableProductPaMaterjalsArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  where?: Maybe<GraphCms_ProductToPaMaterjalConnectionWhereArgs>
};


export type GraphCms_VariableProductPaMuratasasArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  where?: Maybe<GraphCms_ProductToPaMuratasaConnectionWhereArgs>
};


export type GraphCms_VariableProductPaOhutusesArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  where?: Maybe<GraphCms_ProductToPaOhutusConnectionWhereArgs>
};


export type GraphCms_VariableProductPaPatareidsArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  where?: Maybe<GraphCms_ProductToPaPatareidConnectionWhereArgs>
};


export type GraphCms_VariableProductPaSuurusesArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  where?: Maybe<GraphCms_ProductToPaSuurusConnectionWhereArgs>
};


export type GraphCms_VariableProductPaVariantsArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  where?: Maybe<GraphCms_ProductToPaVariantConnectionWhereArgs>
};


export type GraphCms_VariableProductPaVarvsArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  where?: Maybe<GraphCms_ProductToPaVarvConnectionWhereArgs>
};


export type GraphCms_VariableProductPaVeekindlusesArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  where?: Maybe<GraphCms_ProductToPaVeekindlusConnectionWhereArgs>
};


export type GraphCms_VariableProductPriceArgs = {
  format?: Maybe<GraphCms_PricingFieldFormatEnum>
};


export type GraphCms_VariableProductProductCategoriesArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  where?: Maybe<GraphCms_ProductToProductCategoryConnectionWhereArgs>
};


export type GraphCms_VariableProductProductTagsArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  where?: Maybe<GraphCms_ProductToProductTagConnectionWhereArgs>
};


export type GraphCms_VariableProductProductTypesArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  where?: Maybe<GraphCms_ProductToProductTypeConnectionWhereArgs>
};


export type GraphCms_VariableProductRegularPriceArgs = {
  format?: Maybe<GraphCms_PricingFieldFormatEnum>
};


export type GraphCms_VariableProductRelatedArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  where?: Maybe<GraphCms_ProductToProductConnectionWhereArgs>
};


export type GraphCms_VariableProductSalePriceArgs = {
  format?: Maybe<GraphCms_PricingFieldFormatEnum>
};


export type GraphCms_VariableProductShippingClassesArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  where?: Maybe<GraphCms_ProductToShippingClassConnectionWhereArgs>
};


export type GraphCms_VariableProductShortDescriptionArgs = {
  format?: Maybe<GraphCms_PostObjectFieldFormatEnum>
};


export type GraphCms_VariableProductUpsellArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  where?: Maybe<GraphCms_ProductToProductConnectionWhereArgs>
};


export type GraphCms_VariableProductVariationsArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  where?: Maybe<GraphCms_VariableProductToProductVariationConnectionWhereArgs>
};


export type GraphCms_VariableProductVisibleProductsArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  where?: Maybe<GraphCms_ProductToVisibleProductConnectionWhereArgs>
};

export type GraphCms_VariableProductToProductConnection = {
   __typename?: 'GraphCMS_VariableProductToProductConnection',
  edges?: Maybe<Array<Maybe<GraphCms_VariableProductToProductConnectionEdge>>>,
  nodes?: Maybe<Array<Maybe<GraphCms_Product>>>,
  pageInfo?: Maybe<GraphCms_WpPageInfo>,
};

export type GraphCms_VariableProductToProductConnectionEdge = {
   __typename?: 'GraphCMS_VariableProductToProductConnectionEdge',
  cursor?: Maybe<Scalars['String']>,
  node?: Maybe<GraphCms_Product>,
};

export type GraphCms_VariableProductToProductConnectionWhereArgs = {
  attribute?: Maybe<Scalars['String']>,
  attributeTerm?: Maybe<Scalars['String']>,
  category?: Maybe<Scalars['String']>,
  categoryId?: Maybe<Scalars['Int']>,
  categoryIdIn?: Maybe<Array<Maybe<Scalars['Int']>>>,
  categoryIdNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>,
  categoryIn?: Maybe<Array<Maybe<Scalars['String']>>>,
  categoryNotIn?: Maybe<Array<Maybe<Scalars['String']>>>,
  dateQuery?: Maybe<GraphCms_DateQueryInput>,
  exclude?: Maybe<Array<Maybe<Scalars['Int']>>>,
  featured?: Maybe<Scalars['Boolean']>,
  include?: Maybe<Array<Maybe<Scalars['Int']>>>,
  maxPrice?: Maybe<Scalars['Float']>,
  minPrice?: Maybe<Scalars['Float']>,
  onSale?: Maybe<Scalars['Boolean']>,
  orderby?: Maybe<Array<Maybe<GraphCms_ProductsOrderbyInput>>>,
  parent?: Maybe<Scalars['Int']>,
  parentIn?: Maybe<Array<Maybe<Scalars['Int']>>>,
  parentNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>,
  search?: Maybe<Scalars['String']>,
  shippingClassId?: Maybe<Scalars['Int']>,
  sku?: Maybe<Scalars['String']>,
  slug?: Maybe<Scalars['String']>,
  status?: Maybe<Scalars['String']>,
  stockStatus?: Maybe<Array<Maybe<GraphCms_StockStatusEnum>>>,
  tag?: Maybe<Scalars['String']>,
  tagId?: Maybe<Scalars['Int']>,
  tagIdIn?: Maybe<Array<Maybe<Scalars['Int']>>>,
  tagIdNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>,
  tagIn?: Maybe<Array<Maybe<Scalars['String']>>>,
  tagNotIn?: Maybe<Array<Maybe<Scalars['String']>>>,
  taxClass?: Maybe<GraphCms_TaxClassEnum>,
  taxonomyFilter?: Maybe<Array<Maybe<GraphCms_ProductTaxonomyFilterRelationInput>>>,
  type?: Maybe<GraphCms_ProductTypesEnum>,
  typeIn?: Maybe<Array<Maybe<GraphCms_ProductTypesEnum>>>,
  typeNotIn?: Maybe<Array<Maybe<GraphCms_ProductTypesEnum>>>,
  visibility?: Maybe<GraphCms_CatalogVisibilityEnum>,
};

export type GraphCms_VariableProductToProductVariationConnection = {
   __typename?: 'GraphCMS_VariableProductToProductVariationConnection',
  edges?: Maybe<Array<Maybe<GraphCms_VariableProductToProductVariationConnectionEdge>>>,
  nodes?: Maybe<Array<Maybe<GraphCms_ProductVariation>>>,
  pageInfo?: Maybe<GraphCms_WpPageInfo>,
};

export type GraphCms_VariableProductToProductVariationConnectionEdge = {
   __typename?: 'GraphCMS_VariableProductToProductVariationConnectionEdge',
  cursor?: Maybe<Scalars['String']>,
  node?: Maybe<GraphCms_ProductVariation>,
};

export type GraphCms_VariableProductToProductVariationConnectionWhereArgs = {
  attribute?: Maybe<Scalars['String']>,
  attributeTerm?: Maybe<Scalars['String']>,
  category?: Maybe<Scalars['String']>,
  categoryId?: Maybe<Scalars['Int']>,
  categoryIdIn?: Maybe<Array<Maybe<Scalars['Int']>>>,
  categoryIdNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>,
  categoryIn?: Maybe<Array<Maybe<Scalars['String']>>>,
  categoryNotIn?: Maybe<Array<Maybe<Scalars['String']>>>,
  dateQuery?: Maybe<GraphCms_DateQueryInput>,
  exclude?: Maybe<Array<Maybe<Scalars['Int']>>>,
  featured?: Maybe<Scalars['Boolean']>,
  include?: Maybe<Array<Maybe<Scalars['Int']>>>,
  maxPrice?: Maybe<Scalars['Float']>,
  minPrice?: Maybe<Scalars['Float']>,
  onSale?: Maybe<Scalars['Boolean']>,
  orderby?: Maybe<Array<Maybe<GraphCms_ProductsOrderbyInput>>>,
  parent?: Maybe<Scalars['Int']>,
  parentIn?: Maybe<Array<Maybe<Scalars['Int']>>>,
  parentNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>,
  search?: Maybe<Scalars['String']>,
  shippingClassId?: Maybe<Scalars['Int']>,
  sku?: Maybe<Scalars['String']>,
  slug?: Maybe<Scalars['String']>,
  status?: Maybe<Scalars['String']>,
  stockStatus?: Maybe<Array<Maybe<GraphCms_StockStatusEnum>>>,
  tag?: Maybe<Scalars['String']>,
  tagId?: Maybe<Scalars['Int']>,
  tagIdIn?: Maybe<Array<Maybe<Scalars['Int']>>>,
  tagIdNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>,
  tagIn?: Maybe<Array<Maybe<Scalars['String']>>>,
  tagNotIn?: Maybe<Array<Maybe<Scalars['String']>>>,
  taxClass?: Maybe<GraphCms_TaxClassEnum>,
  taxonomyFilter?: Maybe<Array<Maybe<GraphCms_ProductTaxonomyFilterRelationInput>>>,
  type?: Maybe<GraphCms_ProductTypesEnum>,
  typeIn?: Maybe<Array<Maybe<GraphCms_ProductTypesEnum>>>,
  typeNotIn?: Maybe<Array<Maybe<GraphCms_ProductTypesEnum>>>,
  visibility?: Maybe<GraphCms_CatalogVisibilityEnum>,
};

export type GraphCms_VariableProductToVariationAttributeConnection = {
   __typename?: 'GraphCMS_VariableProductToVariationAttributeConnection',
  edges?: Maybe<Array<Maybe<GraphCms_VariableProductToVariationAttributeConnectionEdge>>>,
  nodes?: Maybe<Array<Maybe<GraphCms_VariationAttribute>>>,
  pageInfo?: Maybe<GraphCms_WpPageInfo>,
};

export type GraphCms_VariableProductToVariationAttributeConnectionEdge = {
   __typename?: 'GraphCMS_VariableProductToVariationAttributeConnectionEdge',
  cursor?: Maybe<Scalars['String']>,
  node?: Maybe<GraphCms_VariationAttribute>,
};

export type GraphCms_VariationAttribute = {
   __typename?: 'GraphCMS_VariationAttribute',
  attributeId?: Maybe<Scalars['Int']>,
  id: Scalars['ID'],
  name?: Maybe<Scalars['String']>,
  value?: Maybe<Scalars['String']>,
};

export type GraphCms_VisibleProduct = GraphCms_Node & {
   __typename?: 'GraphCMS_VisibleProduct',
  count?: Maybe<Scalars['Int']>,
  description?: Maybe<Scalars['String']>,
  id: Scalars['ID'],
  isRestricted?: Maybe<Scalars['Boolean']>,
  link?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  slug?: Maybe<Scalars['String']>,
  taxonomy?: Maybe<GraphCms_Taxonomy>,
  termGroupId?: Maybe<Scalars['Int']>,
  termTaxonomyId?: Maybe<Scalars['Int']>,
  visibleProductId?: Maybe<Scalars['Int']>,
};

export type GraphCms_WpPageInfo = {
   __typename?: 'GraphCMS_WPPageInfo',
  endCursor?: Maybe<Scalars['String']>,
  hasNextPage: Scalars['Boolean'],
  hasPreviousPage: Scalars['Boolean'],
  startCursor?: Maybe<Scalars['String']>,
};

export type GraphCms_WritingSettings = {
   __typename?: 'GraphCMS_WritingSettings',
  defaultCategory?: Maybe<Scalars['Int']>,
  defaultPostFormat?: Maybe<Scalars['String']>,
  useSmilies?: Maybe<Scalars['Boolean']>,
};

export type GraphQlSource = Node & {
   __typename?: 'GraphQLSource',
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
  typeName?: Maybe<Scalars['String']>,
  fieldName?: Maybe<Scalars['String']>,
};

export type GraphQlSourceConnection = {
   __typename?: 'GraphQLSourceConnection',
  totalCount: Scalars['Int'],
  edges: Array<GraphQlSourceEdge>,
  nodes: Array<GraphQlSource>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<GraphQlSourceGroupConnection>,
};


export type GraphQlSourceConnectionDistinctArgs = {
  field: GraphQlSourceFieldsEnum
};


export type GraphQlSourceConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: GraphQlSourceFieldsEnum
};

export type GraphQlSourceEdge = {
   __typename?: 'GraphQLSourceEdge',
  next?: Maybe<GraphQlSource>,
  node: GraphQlSource,
  previous?: Maybe<GraphQlSource>,
};

export enum GraphQlSourceFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  TypeName = 'typeName',
  FieldName = 'fieldName'
}

export type GraphQlSourceFilterInput = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  typeName?: Maybe<StringQueryOperatorInput>,
  fieldName?: Maybe<StringQueryOperatorInput>,
};

export type GraphQlSourceGroupConnection = {
   __typename?: 'GraphQLSourceGroupConnection',
  totalCount: Scalars['Int'],
  edges: Array<GraphQlSourceEdge>,
  nodes: Array<GraphQlSource>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type GraphQlSourceSortInput = {
  fields?: Maybe<Array<Maybe<GraphQlSourceFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type Internal = {
   __typename?: 'Internal',
  content?: Maybe<Scalars['String']>,
  contentDigest: Scalars['String'],
  description?: Maybe<Scalars['String']>,
  fieldOwners?: Maybe<Array<Maybe<Scalars['String']>>>,
  ignoreType?: Maybe<Scalars['Boolean']>,
  mediaType?: Maybe<Scalars['String']>,
  owner: Scalars['String'],
  type: Scalars['String'],
};

export type InternalFilterInput = {
  content?: Maybe<StringQueryOperatorInput>,
  contentDigest?: Maybe<StringQueryOperatorInput>,
  description?: Maybe<StringQueryOperatorInput>,
  fieldOwners?: Maybe<StringQueryOperatorInput>,
  ignoreType?: Maybe<BooleanQueryOperatorInput>,
  mediaType?: Maybe<StringQueryOperatorInput>,
  owner?: Maybe<StringQueryOperatorInput>,
  type?: Maybe<StringQueryOperatorInput>,
};

export type IntQueryOperatorInput = {
  eq?: Maybe<Scalars['Int']>,
  ne?: Maybe<Scalars['Int']>,
  gt?: Maybe<Scalars['Int']>,
  gte?: Maybe<Scalars['Int']>,
  lt?: Maybe<Scalars['Int']>,
  lte?: Maybe<Scalars['Int']>,
  in?: Maybe<Array<Maybe<Scalars['Int']>>>,
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>,
};


export type Node = {
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
};

export type NodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
};

export type NodeFilterListInput = {
  elemMatch?: Maybe<NodeFilterInput>,
};

export type PageInfo = {
   __typename?: 'PageInfo',
  currentPage: Scalars['Int'],
  hasPreviousPage: Scalars['Boolean'],
  hasNextPage: Scalars['Boolean'],
  itemCount: Scalars['Int'],
  pageCount: Scalars['Int'],
  perPage?: Maybe<Scalars['Int']>,
};

export type Query = {
   __typename?: 'Query',
  file?: Maybe<File>,
  allFile: FileConnection,
  directory?: Maybe<Directory>,
  allDirectory: DirectoryConnection,
  graphQlSource?: Maybe<GraphQlSource>,
  allGraphQlSource: GraphQlSourceConnection,
  site?: Maybe<Site>,
  allSite: SiteConnection,
  sitePlugin?: Maybe<SitePlugin>,
  allSitePlugin: SitePluginConnection,
  sitePage?: Maybe<SitePage>,
  allSitePage: SitePageConnection,
  cms: GraphCms,
};


export type QueryFileArgs = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>,
  absolutePath?: Maybe<StringQueryOperatorInput>,
  relativePath?: Maybe<StringQueryOperatorInput>,
  extension?: Maybe<StringQueryOperatorInput>,
  size?: Maybe<IntQueryOperatorInput>,
  prettySize?: Maybe<StringQueryOperatorInput>,
  modifiedTime?: Maybe<DateQueryOperatorInput>,
  accessTime?: Maybe<DateQueryOperatorInput>,
  changeTime?: Maybe<DateQueryOperatorInput>,
  birthTime?: Maybe<DateQueryOperatorInput>,
  root?: Maybe<StringQueryOperatorInput>,
  dir?: Maybe<StringQueryOperatorInput>,
  base?: Maybe<StringQueryOperatorInput>,
  ext?: Maybe<StringQueryOperatorInput>,
  name?: Maybe<StringQueryOperatorInput>,
  relativeDirectory?: Maybe<StringQueryOperatorInput>,
  dev?: Maybe<IntQueryOperatorInput>,
  mode?: Maybe<IntQueryOperatorInput>,
  nlink?: Maybe<IntQueryOperatorInput>,
  uid?: Maybe<IntQueryOperatorInput>,
  gid?: Maybe<IntQueryOperatorInput>,
  rdev?: Maybe<IntQueryOperatorInput>,
  ino?: Maybe<FloatQueryOperatorInput>,
  atimeMs?: Maybe<FloatQueryOperatorInput>,
  mtimeMs?: Maybe<FloatQueryOperatorInput>,
  ctimeMs?: Maybe<FloatQueryOperatorInput>,
  atime?: Maybe<DateQueryOperatorInput>,
  mtime?: Maybe<DateQueryOperatorInput>,
  ctime?: Maybe<DateQueryOperatorInput>,
  birthtime?: Maybe<DateQueryOperatorInput>,
  birthtimeMs?: Maybe<FloatQueryOperatorInput>,
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>
};


export type QueryAllFileArgs = {
  filter?: Maybe<FileFilterInput>,
  sort?: Maybe<FileSortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QueryDirectoryArgs = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>,
  absolutePath?: Maybe<StringQueryOperatorInput>,
  relativePath?: Maybe<StringQueryOperatorInput>,
  extension?: Maybe<StringQueryOperatorInput>,
  size?: Maybe<IntQueryOperatorInput>,
  prettySize?: Maybe<StringQueryOperatorInput>,
  modifiedTime?: Maybe<DateQueryOperatorInput>,
  accessTime?: Maybe<DateQueryOperatorInput>,
  changeTime?: Maybe<DateQueryOperatorInput>,
  birthTime?: Maybe<DateQueryOperatorInput>,
  root?: Maybe<StringQueryOperatorInput>,
  dir?: Maybe<StringQueryOperatorInput>,
  base?: Maybe<StringQueryOperatorInput>,
  ext?: Maybe<StringQueryOperatorInput>,
  name?: Maybe<StringQueryOperatorInput>,
  relativeDirectory?: Maybe<StringQueryOperatorInput>,
  dev?: Maybe<IntQueryOperatorInput>,
  mode?: Maybe<IntQueryOperatorInput>,
  nlink?: Maybe<IntQueryOperatorInput>,
  uid?: Maybe<IntQueryOperatorInput>,
  gid?: Maybe<IntQueryOperatorInput>,
  rdev?: Maybe<IntQueryOperatorInput>,
  ino?: Maybe<FloatQueryOperatorInput>,
  atimeMs?: Maybe<FloatQueryOperatorInput>,
  mtimeMs?: Maybe<FloatQueryOperatorInput>,
  ctimeMs?: Maybe<FloatQueryOperatorInput>,
  atime?: Maybe<DateQueryOperatorInput>,
  mtime?: Maybe<DateQueryOperatorInput>,
  ctime?: Maybe<DateQueryOperatorInput>,
  birthtime?: Maybe<DateQueryOperatorInput>,
  birthtimeMs?: Maybe<FloatQueryOperatorInput>,
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>
};


export type QueryAllDirectoryArgs = {
  filter?: Maybe<DirectoryFilterInput>,
  sort?: Maybe<DirectorySortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QueryGraphQlSourceArgs = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  typeName?: Maybe<StringQueryOperatorInput>,
  fieldName?: Maybe<StringQueryOperatorInput>
};


export type QueryAllGraphQlSourceArgs = {
  filter?: Maybe<GraphQlSourceFilterInput>,
  sort?: Maybe<GraphQlSourceSortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QuerySiteArgs = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>,
  port?: Maybe<IntQueryOperatorInput>,
  host?: Maybe<StringQueryOperatorInput>,
  polyfill?: Maybe<BooleanQueryOperatorInput>,
  pathPrefix?: Maybe<StringQueryOperatorInput>,
  buildTime?: Maybe<DateQueryOperatorInput>
};


export type QueryAllSiteArgs = {
  filter?: Maybe<SiteFilterInput>,
  sort?: Maybe<SiteSortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QuerySitePluginArgs = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  resolve?: Maybe<StringQueryOperatorInput>,
  name?: Maybe<StringQueryOperatorInput>,
  version?: Maybe<StringQueryOperatorInput>,
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>,
  nodeAPIs?: Maybe<StringQueryOperatorInput>,
  browserAPIs?: Maybe<StringQueryOperatorInput>,
  ssrAPIs?: Maybe<StringQueryOperatorInput>,
  pluginFilepath?: Maybe<StringQueryOperatorInput>,
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>
};


export type QueryAllSitePluginArgs = {
  filter?: Maybe<SitePluginFilterInput>,
  sort?: Maybe<SitePluginSortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QuerySitePageArgs = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  path?: Maybe<StringQueryOperatorInput>,
  internalComponentName?: Maybe<StringQueryOperatorInput>,
  component?: Maybe<StringQueryOperatorInput>,
  componentChunkName?: Maybe<StringQueryOperatorInput>,
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>,
  context?: Maybe<SitePageContextFilterInput>,
  pluginCreator?: Maybe<SitePluginFilterInput>,
  pluginCreatorId?: Maybe<StringQueryOperatorInput>,
  componentPath?: Maybe<StringQueryOperatorInput>
};


export type QueryAllSitePageArgs = {
  filter?: Maybe<SitePageFilterInput>,
  sort?: Maybe<SitePageSortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};

export type Site = Node & {
   __typename?: 'Site',
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
  siteMetadata?: Maybe<SiteSiteMetadata>,
  port?: Maybe<Scalars['Int']>,
  host?: Maybe<Scalars['String']>,
  polyfill?: Maybe<Scalars['Boolean']>,
  pathPrefix?: Maybe<Scalars['String']>,
  buildTime?: Maybe<Scalars['Date']>,
};


export type SiteBuildTimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};

export type SiteConnection = {
   __typename?: 'SiteConnection',
  totalCount: Scalars['Int'],
  edges: Array<SiteEdge>,
  nodes: Array<Site>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<SiteGroupConnection>,
};


export type SiteConnectionDistinctArgs = {
  field: SiteFieldsEnum
};


export type SiteConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: SiteFieldsEnum
};

export type SiteEdge = {
   __typename?: 'SiteEdge',
  next?: Maybe<Site>,
  node: Site,
  previous?: Maybe<Site>,
};

export enum SiteFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  SiteMetadataSiteName = 'siteMetadata___siteName',
  Port = 'port',
  Host = 'host',
  Polyfill = 'polyfill',
  PathPrefix = 'pathPrefix',
  BuildTime = 'buildTime'
}

export type SiteFilterInput = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>,
  port?: Maybe<IntQueryOperatorInput>,
  host?: Maybe<StringQueryOperatorInput>,
  polyfill?: Maybe<BooleanQueryOperatorInput>,
  pathPrefix?: Maybe<StringQueryOperatorInput>,
  buildTime?: Maybe<DateQueryOperatorInput>,
};

export type SiteGroupConnection = {
   __typename?: 'SiteGroupConnection',
  totalCount: Scalars['Int'],
  edges: Array<SiteEdge>,
  nodes: Array<Site>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type SitePage = Node & {
   __typename?: 'SitePage',
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
  path?: Maybe<Scalars['String']>,
  internalComponentName?: Maybe<Scalars['String']>,
  component?: Maybe<Scalars['String']>,
  componentChunkName?: Maybe<Scalars['String']>,
  isCreatedByStatefulCreatePages?: Maybe<Scalars['Boolean']>,
  context?: Maybe<SitePageContext>,
  pluginCreator?: Maybe<SitePlugin>,
  pluginCreatorId?: Maybe<Scalars['String']>,
  componentPath?: Maybe<Scalars['String']>,
};

export type SitePageConnection = {
   __typename?: 'SitePageConnection',
  totalCount: Scalars['Int'],
  edges: Array<SitePageEdge>,
  nodes: Array<SitePage>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<SitePageGroupConnection>,
};


export type SitePageConnectionDistinctArgs = {
  field: SitePageFieldsEnum
};


export type SitePageConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: SitePageFieldsEnum
};

export type SitePageContext = {
   __typename?: 'SitePageContext',
  id?: Maybe<Scalars['String']>,
};

export type SitePageContextFilterInput = {
  id?: Maybe<StringQueryOperatorInput>,
};

export type SitePageEdge = {
   __typename?: 'SitePageEdge',
  next?: Maybe<SitePage>,
  node: SitePage,
  previous?: Maybe<SitePage>,
};

export enum SitePageFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Path = 'path',
  InternalComponentName = 'internalComponentName',
  Component = 'component',
  ComponentChunkName = 'componentChunkName',
  IsCreatedByStatefulCreatePages = 'isCreatedByStatefulCreatePages',
  ContextId = 'context___id',
  PluginCreatorId = 'pluginCreator___id',
  PluginCreatorParentId = 'pluginCreator___parent___id',
  PluginCreatorParentParentId = 'pluginCreator___parent___parent___id',
  PluginCreatorParentParentChildren = 'pluginCreator___parent___parent___children',
  PluginCreatorParentChildren = 'pluginCreator___parent___children',
  PluginCreatorParentChildrenId = 'pluginCreator___parent___children___id',
  PluginCreatorParentChildrenChildren = 'pluginCreator___parent___children___children',
  PluginCreatorParentInternalContent = 'pluginCreator___parent___internal___content',
  PluginCreatorParentInternalContentDigest = 'pluginCreator___parent___internal___contentDigest',
  PluginCreatorParentInternalDescription = 'pluginCreator___parent___internal___description',
  PluginCreatorParentInternalFieldOwners = 'pluginCreator___parent___internal___fieldOwners',
  PluginCreatorParentInternalIgnoreType = 'pluginCreator___parent___internal___ignoreType',
  PluginCreatorParentInternalMediaType = 'pluginCreator___parent___internal___mediaType',
  PluginCreatorParentInternalOwner = 'pluginCreator___parent___internal___owner',
  PluginCreatorParentInternalType = 'pluginCreator___parent___internal___type',
  PluginCreatorChildren = 'pluginCreator___children',
  PluginCreatorChildrenId = 'pluginCreator___children___id',
  PluginCreatorChildrenParentId = 'pluginCreator___children___parent___id',
  PluginCreatorChildrenParentChildren = 'pluginCreator___children___parent___children',
  PluginCreatorChildrenChildren = 'pluginCreator___children___children',
  PluginCreatorChildrenChildrenId = 'pluginCreator___children___children___id',
  PluginCreatorChildrenChildrenChildren = 'pluginCreator___children___children___children',
  PluginCreatorChildrenInternalContent = 'pluginCreator___children___internal___content',
  PluginCreatorChildrenInternalContentDigest = 'pluginCreator___children___internal___contentDigest',
  PluginCreatorChildrenInternalDescription = 'pluginCreator___children___internal___description',
  PluginCreatorChildrenInternalFieldOwners = 'pluginCreator___children___internal___fieldOwners',
  PluginCreatorChildrenInternalIgnoreType = 'pluginCreator___children___internal___ignoreType',
  PluginCreatorChildrenInternalMediaType = 'pluginCreator___children___internal___mediaType',
  PluginCreatorChildrenInternalOwner = 'pluginCreator___children___internal___owner',
  PluginCreatorChildrenInternalType = 'pluginCreator___children___internal___type',
  PluginCreatorInternalContent = 'pluginCreator___internal___content',
  PluginCreatorInternalContentDigest = 'pluginCreator___internal___contentDigest',
  PluginCreatorInternalDescription = 'pluginCreator___internal___description',
  PluginCreatorInternalFieldOwners = 'pluginCreator___internal___fieldOwners',
  PluginCreatorInternalIgnoreType = 'pluginCreator___internal___ignoreType',
  PluginCreatorInternalMediaType = 'pluginCreator___internal___mediaType',
  PluginCreatorInternalOwner = 'pluginCreator___internal___owner',
  PluginCreatorInternalType = 'pluginCreator___internal___type',
  PluginCreatorResolve = 'pluginCreator___resolve',
  PluginCreatorName = 'pluginCreator___name',
  PluginCreatorVersion = 'pluginCreator___version',
  PluginCreatorPluginOptionsFieldName = 'pluginCreator___pluginOptions___fieldName',
  PluginCreatorPluginOptionsUrl = 'pluginCreator___pluginOptions___url',
  PluginCreatorPluginOptionsTypeName = 'pluginCreator___pluginOptions___typeName',
  PluginCreatorPluginOptionsPath = 'pluginCreator___pluginOptions___path',
  PluginCreatorPluginOptionsPathCheck = 'pluginCreator___pluginOptions___pathCheck',
  PluginCreatorNodeApIs = 'pluginCreator___nodeAPIs',
  PluginCreatorBrowserApIs = 'pluginCreator___browserAPIs',
  PluginCreatorSsrApIs = 'pluginCreator___ssrAPIs',
  PluginCreatorPluginFilepath = 'pluginCreator___pluginFilepath',
  PluginCreatorPackageJsonName = 'pluginCreator___packageJson___name',
  PluginCreatorPackageJsonDescription = 'pluginCreator___packageJson___description',
  PluginCreatorPackageJsonVersion = 'pluginCreator___packageJson___version',
  PluginCreatorPackageJsonMain = 'pluginCreator___packageJson___main',
  PluginCreatorPackageJsonLicense = 'pluginCreator___packageJson___license',
  PluginCreatorPackageJsonDependencies = 'pluginCreator___packageJson___dependencies',
  PluginCreatorPackageJsonDependenciesName = 'pluginCreator___packageJson___dependencies___name',
  PluginCreatorPackageJsonDependenciesVersion = 'pluginCreator___packageJson___dependencies___version',
  PluginCreatorPackageJsonDevDependencies = 'pluginCreator___packageJson___devDependencies',
  PluginCreatorPackageJsonDevDependenciesName = 'pluginCreator___packageJson___devDependencies___name',
  PluginCreatorPackageJsonDevDependenciesVersion = 'pluginCreator___packageJson___devDependencies___version',
  PluginCreatorPackageJsonPeerDependencies = 'pluginCreator___packageJson___peerDependencies',
  PluginCreatorPackageJsonPeerDependenciesName = 'pluginCreator___packageJson___peerDependencies___name',
  PluginCreatorPackageJsonPeerDependenciesVersion = 'pluginCreator___packageJson___peerDependencies___version',
  PluginCreatorPackageJsonKeywords = 'pluginCreator___packageJson___keywords',
  PluginCreatorId = 'pluginCreatorId',
  ComponentPath = 'componentPath'
}

export type SitePageFilterInput = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  path?: Maybe<StringQueryOperatorInput>,
  internalComponentName?: Maybe<StringQueryOperatorInput>,
  component?: Maybe<StringQueryOperatorInput>,
  componentChunkName?: Maybe<StringQueryOperatorInput>,
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>,
  context?: Maybe<SitePageContextFilterInput>,
  pluginCreator?: Maybe<SitePluginFilterInput>,
  pluginCreatorId?: Maybe<StringQueryOperatorInput>,
  componentPath?: Maybe<StringQueryOperatorInput>,
};

export type SitePageGroupConnection = {
   __typename?: 'SitePageGroupConnection',
  totalCount: Scalars['Int'],
  edges: Array<SitePageEdge>,
  nodes: Array<SitePage>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type SitePageSortInput = {
  fields?: Maybe<Array<Maybe<SitePageFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type SitePlugin = Node & {
   __typename?: 'SitePlugin',
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
  resolve?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  version?: Maybe<Scalars['String']>,
  pluginOptions?: Maybe<SitePluginPluginOptions>,
  nodeAPIs?: Maybe<Array<Maybe<Scalars['String']>>>,
  browserAPIs?: Maybe<Array<Maybe<Scalars['String']>>>,
  ssrAPIs?: Maybe<Array<Maybe<Scalars['String']>>>,
  pluginFilepath?: Maybe<Scalars['String']>,
  packageJson?: Maybe<SitePluginPackageJson>,
};

export type SitePluginConnection = {
   __typename?: 'SitePluginConnection',
  totalCount: Scalars['Int'],
  edges: Array<SitePluginEdge>,
  nodes: Array<SitePlugin>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<SitePluginGroupConnection>,
};


export type SitePluginConnectionDistinctArgs = {
  field: SitePluginFieldsEnum
};


export type SitePluginConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: SitePluginFieldsEnum
};

export type SitePluginEdge = {
   __typename?: 'SitePluginEdge',
  next?: Maybe<SitePlugin>,
  node: SitePlugin,
  previous?: Maybe<SitePlugin>,
};

export enum SitePluginFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Resolve = 'resolve',
  Name = 'name',
  Version = 'version',
  PluginOptionsFieldName = 'pluginOptions___fieldName',
  PluginOptionsUrl = 'pluginOptions___url',
  PluginOptionsTypeName = 'pluginOptions___typeName',
  PluginOptionsPath = 'pluginOptions___path',
  PluginOptionsPathCheck = 'pluginOptions___pathCheck',
  NodeApIs = 'nodeAPIs',
  BrowserApIs = 'browserAPIs',
  SsrApIs = 'ssrAPIs',
  PluginFilepath = 'pluginFilepath',
  PackageJsonName = 'packageJson___name',
  PackageJsonDescription = 'packageJson___description',
  PackageJsonVersion = 'packageJson___version',
  PackageJsonMain = 'packageJson___main',
  PackageJsonLicense = 'packageJson___license',
  PackageJsonDependencies = 'packageJson___dependencies',
  PackageJsonDependenciesName = 'packageJson___dependencies___name',
  PackageJsonDependenciesVersion = 'packageJson___dependencies___version',
  PackageJsonDevDependencies = 'packageJson___devDependencies',
  PackageJsonDevDependenciesName = 'packageJson___devDependencies___name',
  PackageJsonDevDependenciesVersion = 'packageJson___devDependencies___version',
  PackageJsonPeerDependencies = 'packageJson___peerDependencies',
  PackageJsonPeerDependenciesName = 'packageJson___peerDependencies___name',
  PackageJsonPeerDependenciesVersion = 'packageJson___peerDependencies___version',
  PackageJsonKeywords = 'packageJson___keywords'
}

export type SitePluginFilterInput = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  resolve?: Maybe<StringQueryOperatorInput>,
  name?: Maybe<StringQueryOperatorInput>,
  version?: Maybe<StringQueryOperatorInput>,
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>,
  nodeAPIs?: Maybe<StringQueryOperatorInput>,
  browserAPIs?: Maybe<StringQueryOperatorInput>,
  ssrAPIs?: Maybe<StringQueryOperatorInput>,
  pluginFilepath?: Maybe<StringQueryOperatorInput>,
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>,
};

export type SitePluginGroupConnection = {
   __typename?: 'SitePluginGroupConnection',
  totalCount: Scalars['Int'],
  edges: Array<SitePluginEdge>,
  nodes: Array<SitePlugin>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type SitePluginPackageJson = {
   __typename?: 'SitePluginPackageJson',
  name?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  version?: Maybe<Scalars['String']>,
  main?: Maybe<Scalars['String']>,
  license?: Maybe<Scalars['String']>,
  dependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDependencies>>>,
  devDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDevDependencies>>>,
  peerDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonPeerDependencies>>>,
  keywords?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type SitePluginPackageJsonDependencies = {
   __typename?: 'SitePluginPackageJsonDependencies',
  name?: Maybe<Scalars['String']>,
  version?: Maybe<Scalars['String']>,
};

export type SitePluginPackageJsonDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>,
  version?: Maybe<StringQueryOperatorInput>,
};

export type SitePluginPackageJsonDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDependenciesFilterInput>,
};

export type SitePluginPackageJsonDevDependencies = {
   __typename?: 'SitePluginPackageJsonDevDependencies',
  name?: Maybe<Scalars['String']>,
  version?: Maybe<Scalars['String']>,
};

export type SitePluginPackageJsonDevDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>,
  version?: Maybe<StringQueryOperatorInput>,
};

export type SitePluginPackageJsonDevDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDevDependenciesFilterInput>,
};

export type SitePluginPackageJsonFilterInput = {
  name?: Maybe<StringQueryOperatorInput>,
  description?: Maybe<StringQueryOperatorInput>,
  version?: Maybe<StringQueryOperatorInput>,
  main?: Maybe<StringQueryOperatorInput>,
  license?: Maybe<StringQueryOperatorInput>,
  dependencies?: Maybe<SitePluginPackageJsonDependenciesFilterListInput>,
  devDependencies?: Maybe<SitePluginPackageJsonDevDependenciesFilterListInput>,
  peerDependencies?: Maybe<SitePluginPackageJsonPeerDependenciesFilterListInput>,
  keywords?: Maybe<StringQueryOperatorInput>,
};

export type SitePluginPackageJsonPeerDependencies = {
   __typename?: 'SitePluginPackageJsonPeerDependencies',
  name?: Maybe<Scalars['String']>,
  version?: Maybe<Scalars['String']>,
};

export type SitePluginPackageJsonPeerDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>,
  version?: Maybe<StringQueryOperatorInput>,
};

export type SitePluginPackageJsonPeerDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonPeerDependenciesFilterInput>,
};

export type SitePluginPluginOptions = {
   __typename?: 'SitePluginPluginOptions',
  fieldName?: Maybe<Scalars['String']>,
  url?: Maybe<Scalars['String']>,
  typeName?: Maybe<Scalars['String']>,
  path?: Maybe<Scalars['String']>,
  pathCheck?: Maybe<Scalars['Boolean']>,
};

export type SitePluginPluginOptionsFilterInput = {
  fieldName?: Maybe<StringQueryOperatorInput>,
  url?: Maybe<StringQueryOperatorInput>,
  typeName?: Maybe<StringQueryOperatorInput>,
  path?: Maybe<StringQueryOperatorInput>,
  pathCheck?: Maybe<BooleanQueryOperatorInput>,
};

export type SitePluginSortInput = {
  fields?: Maybe<Array<Maybe<SitePluginFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type SiteSiteMetadata = {
   __typename?: 'SiteSiteMetadata',
  siteName?: Maybe<Scalars['String']>,
};

export type SiteSiteMetadataFilterInput = {
  siteName?: Maybe<StringQueryOperatorInput>,
};

export type SiteSortInput = {
  fields?: Maybe<Array<Maybe<SiteFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export enum SortOrderEnum {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type StringQueryOperatorInput = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
};

type ProductForListing_GraphCms_VariableProduct_Fragment = (
  { __typename?: 'GraphCMS_VariableProduct' }
  & Pick<GraphCms_VariableProduct, 'price' | 'name' | 'slug'>
  & { image: Maybe<(
    { __typename?: 'GraphCMS_MediaItem' }
    & Pick<GraphCms_MediaItem, 'srcSet'>
    & { mediaDetails: Maybe<(
      { __typename?: 'GraphCMS_MediaDetails' }
      & Pick<GraphCms_MediaDetails, 'width' | 'height'>
    )> }
  )>, galleryImages: Maybe<(
    { __typename?: 'GraphCMS_ProductToMediaItemConnection' }
    & { edges: Maybe<Array<Maybe<(
      { __typename?: 'GraphCMS_ProductToMediaItemConnectionEdge' }
      & { node: Maybe<(
        { __typename?: 'GraphCMS_MediaItem' }
        & Pick<GraphCms_MediaItem, 'srcSet'>
        & { mediaDetails: Maybe<(
          { __typename?: 'GraphCMS_MediaDetails' }
          & Pick<GraphCms_MediaDetails, 'width' | 'height'>
          & { sizes: Maybe<Array<Maybe<(
            { __typename?: 'GraphCMS_MediaSize' }
            & Pick<GraphCms_MediaSize, 'width' | 'height' | 'sourceUrl'>
          )>>> }
        )> }
      )> }
    )>>> }
  )> }
);

type ProductForListing_GraphCms_ExternalProduct_Fragment = (
  { __typename?: 'GraphCMS_ExternalProduct' }
  & Pick<GraphCms_ExternalProduct, 'name' | 'slug'>
  & { image: Maybe<(
    { __typename?: 'GraphCMS_MediaItem' }
    & Pick<GraphCms_MediaItem, 'srcSet'>
    & { mediaDetails: Maybe<(
      { __typename?: 'GraphCMS_MediaDetails' }
      & Pick<GraphCms_MediaDetails, 'width' | 'height'>
    )> }
  )>, galleryImages: Maybe<(
    { __typename?: 'GraphCMS_ProductToMediaItemConnection' }
    & { edges: Maybe<Array<Maybe<(
      { __typename?: 'GraphCMS_ProductToMediaItemConnectionEdge' }
      & { node: Maybe<(
        { __typename?: 'GraphCMS_MediaItem' }
        & Pick<GraphCms_MediaItem, 'srcSet'>
        & { mediaDetails: Maybe<(
          { __typename?: 'GraphCMS_MediaDetails' }
          & Pick<GraphCms_MediaDetails, 'width' | 'height'>
          & { sizes: Maybe<Array<Maybe<(
            { __typename?: 'GraphCMS_MediaSize' }
            & Pick<GraphCms_MediaSize, 'width' | 'height' | 'sourceUrl'>
          )>>> }
        )> }
      )> }
    )>>> }
  )> }
);

type ProductForListing_GraphCms_GroupProduct_Fragment = (
  { __typename?: 'GraphCMS_GroupProduct' }
  & Pick<GraphCms_GroupProduct, 'name' | 'slug'>
  & { image: Maybe<(
    { __typename?: 'GraphCMS_MediaItem' }
    & Pick<GraphCms_MediaItem, 'srcSet'>
    & { mediaDetails: Maybe<(
      { __typename?: 'GraphCMS_MediaDetails' }
      & Pick<GraphCms_MediaDetails, 'width' | 'height'>
    )> }
  )>, galleryImages: Maybe<(
    { __typename?: 'GraphCMS_ProductToMediaItemConnection' }
    & { edges: Maybe<Array<Maybe<(
      { __typename?: 'GraphCMS_ProductToMediaItemConnectionEdge' }
      & { node: Maybe<(
        { __typename?: 'GraphCMS_MediaItem' }
        & Pick<GraphCms_MediaItem, 'srcSet'>
        & { mediaDetails: Maybe<(
          { __typename?: 'GraphCMS_MediaDetails' }
          & Pick<GraphCms_MediaDetails, 'width' | 'height'>
          & { sizes: Maybe<Array<Maybe<(
            { __typename?: 'GraphCMS_MediaSize' }
            & Pick<GraphCms_MediaSize, 'width' | 'height' | 'sourceUrl'>
          )>>> }
        )> }
      )> }
    )>>> }
  )> }
);

type ProductForListing_GraphCms_SimpleProduct_Fragment = (
  { __typename?: 'GraphCMS_SimpleProduct' }
  & Pick<GraphCms_SimpleProduct, 'price' | 'name' | 'slug'>
  & { image: Maybe<(
    { __typename?: 'GraphCMS_MediaItem' }
    & Pick<GraphCms_MediaItem, 'srcSet'>
    & { mediaDetails: Maybe<(
      { __typename?: 'GraphCMS_MediaDetails' }
      & Pick<GraphCms_MediaDetails, 'width' | 'height'>
    )> }
  )>, galleryImages: Maybe<(
    { __typename?: 'GraphCMS_ProductToMediaItemConnection' }
    & { edges: Maybe<Array<Maybe<(
      { __typename?: 'GraphCMS_ProductToMediaItemConnectionEdge' }
      & { node: Maybe<(
        { __typename?: 'GraphCMS_MediaItem' }
        & Pick<GraphCms_MediaItem, 'srcSet'>
        & { mediaDetails: Maybe<(
          { __typename?: 'GraphCMS_MediaDetails' }
          & Pick<GraphCms_MediaDetails, 'width' | 'height'>
          & { sizes: Maybe<Array<Maybe<(
            { __typename?: 'GraphCMS_MediaSize' }
            & Pick<GraphCms_MediaSize, 'width' | 'height' | 'sourceUrl'>
          )>>> }
        )> }
      )> }
    )>>> }
  )> }
);

export type ProductForListingFragment = ProductForListing_GraphCms_VariableProduct_Fragment | ProductForListing_GraphCms_ExternalProduct_Fragment | ProductForListing_GraphCms_GroupProduct_Fragment | ProductForListing_GraphCms_SimpleProduct_Fragment;

export type MainLayoutQueryVariables = {};


export type MainLayoutQuery = (
  { __typename?: 'Query' }
  & { site: Maybe<(
    { __typename?: 'Site' }
    & { siteMetadata: Maybe<(
      { __typename?: 'SiteSiteMetadata' }
      & Pick<SiteSiteMetadata, 'siteName'>
    )> }
  )>, cms: (
    { __typename?: 'GraphCMS' }
    & { productCategories: Maybe<(
      { __typename?: 'GraphCMS_RootQueryToProductCategoryConnection' }
      & { edges: Maybe<Array<Maybe<(
        { __typename?: 'GraphCMS_RootQueryToProductCategoryConnectionEdge' }
        & { node: Maybe<(
          { __typename?: 'GraphCMS_ProductCategory' }
          & Pick<GraphCms_ProductCategory, 'name' | 'slug'>
        )> }
      )>>> }
    )> }
  ) }
);

export type IndexQueryQueryVariables = {};


export type IndexQueryQuery = (
  { __typename?: 'Query' }
  & { site: Maybe<(
    { __typename?: 'Site' }
    & { siteMetadata: Maybe<(
      { __typename?: 'SiteSiteMetadata' }
      & Pick<SiteSiteMetadata, 'siteName'>
    )> }
  )>, cms: (
    { __typename?: 'GraphCMS' }
    & { products: Maybe<(
      { __typename?: 'GraphCMS_RootQueryToProductConnection' }
      & { edges: Maybe<Array<Maybe<(
        { __typename?: 'GraphCMS_RootQueryToProductConnectionEdge' }
        & { node: Maybe<(
          { __typename?: 'GraphCMS_VariableProduct' }
          & ProductForListing_GraphCms_VariableProduct_Fragment
        ) | (
          { __typename?: 'GraphCMS_ExternalProduct' }
          & ProductForListing_GraphCms_ExternalProduct_Fragment
        ) | (
          { __typename?: 'GraphCMS_GroupProduct' }
          & ProductForListing_GraphCms_GroupProduct_Fragment
        ) | (
          { __typename?: 'GraphCMS_SimpleProduct' }
          & ProductForListing_GraphCms_SimpleProduct_Fragment
        )> }
      )>>> }
    )> }
  ) }
);

export type CategoryTemplateQueryVariables = {
  id: Scalars['ID']
};


export type CategoryTemplateQuery = (
  { __typename?: 'Query' }
  & { site: Maybe<(
    { __typename?: 'Site' }
    & { siteMetadata: Maybe<(
      { __typename?: 'SiteSiteMetadata' }
      & Pick<SiteSiteMetadata, 'siteName'>
    )> }
  )>, cms: (
    { __typename?: 'GraphCMS' }
    & { productCategory: Maybe<(
      { __typename?: 'GraphCMS_ProductCategory' }
      & Pick<GraphCms_ProductCategory, 'name'>
      & { products: Maybe<(
        { __typename?: 'GraphCMS_ProductCategoryToProductConnection' }
        & { edges: Maybe<Array<Maybe<(
          { __typename?: 'GraphCMS_ProductCategoryToProductConnectionEdge' }
          & { node: Maybe<(
            { __typename?: 'GraphCMS_VariableProduct' }
            & ProductForListing_GraphCms_VariableProduct_Fragment
          ) | (
            { __typename?: 'GraphCMS_ExternalProduct' }
            & ProductForListing_GraphCms_ExternalProduct_Fragment
          ) | (
            { __typename?: 'GraphCMS_GroupProduct' }
            & ProductForListing_GraphCms_GroupProduct_Fragment
          ) | (
            { __typename?: 'GraphCMS_SimpleProduct' }
            & ProductForListing_GraphCms_SimpleProduct_Fragment
          )> }
        )>>> }
      )> }
    )> }
  ) }
);

export type ProductTemplateQueryVariables = {
  id: Scalars['ID']
};


export type ProductTemplateQuery = (
  { __typename?: 'Query' }
  & { site: Maybe<(
    { __typename?: 'Site' }
    & { siteMetadata: Maybe<(
      { __typename?: 'SiteSiteMetadata' }
      & Pick<SiteSiteMetadata, 'siteName'>
    )> }
  )>, cms: (
    { __typename?: 'GraphCMS' }
    & { product: Maybe<(
      { __typename?: 'GraphCMS_VariableProduct' }
      & Pick<GraphCms_VariableProduct, 'price' | 'id' | 'name' | 'description'>
      & { image: Maybe<(
        { __typename?: 'GraphCMS_MediaItem' }
        & Pick<GraphCms_MediaItem, 'srcSet'>
        & { mediaDetails: Maybe<(
          { __typename?: 'GraphCMS_MediaDetails' }
          & Pick<GraphCms_MediaDetails, 'width' | 'height'>
        )> }
      )>, galleryImages: Maybe<(
        { __typename?: 'GraphCMS_ProductToMediaItemConnection' }
        & { nodes: Maybe<Array<Maybe<(
          { __typename?: 'GraphCMS_MediaItem' }
          & Pick<GraphCms_MediaItem, 'srcSet'>
          & { mediaDetails: Maybe<(
            { __typename?: 'GraphCMS_MediaDetails' }
            & Pick<GraphCms_MediaDetails, 'width' | 'height'>
          )> }
        )>>> }
      )>, attributes: Maybe<(
        { __typename?: 'GraphCMS_ProductToProductAttributeConnection' }
        & { nodes: Maybe<Array<Maybe<(
          { __typename?: 'GraphCMS_ProductAttribute' }
          & Pick<GraphCms_ProductAttribute, 'name' | 'options'>
        )>>> }
      )> }
    ) | (
      { __typename?: 'GraphCMS_ExternalProduct' }
      & Pick<GraphCms_ExternalProduct, 'id' | 'name' | 'description'>
      & { image: Maybe<(
        { __typename?: 'GraphCMS_MediaItem' }
        & Pick<GraphCms_MediaItem, 'srcSet'>
        & { mediaDetails: Maybe<(
          { __typename?: 'GraphCMS_MediaDetails' }
          & Pick<GraphCms_MediaDetails, 'width' | 'height'>
        )> }
      )>, galleryImages: Maybe<(
        { __typename?: 'GraphCMS_ProductToMediaItemConnection' }
        & { nodes: Maybe<Array<Maybe<(
          { __typename?: 'GraphCMS_MediaItem' }
          & Pick<GraphCms_MediaItem, 'srcSet'>
          & { mediaDetails: Maybe<(
            { __typename?: 'GraphCMS_MediaDetails' }
            & Pick<GraphCms_MediaDetails, 'width' | 'height'>
          )> }
        )>>> }
      )>, attributes: Maybe<(
        { __typename?: 'GraphCMS_ProductToProductAttributeConnection' }
        & { nodes: Maybe<Array<Maybe<(
          { __typename?: 'GraphCMS_ProductAttribute' }
          & Pick<GraphCms_ProductAttribute, 'name' | 'options'>
        )>>> }
      )> }
    ) | (
      { __typename?: 'GraphCMS_GroupProduct' }
      & Pick<GraphCms_GroupProduct, 'id' | 'name' | 'description'>
      & { image: Maybe<(
        { __typename?: 'GraphCMS_MediaItem' }
        & Pick<GraphCms_MediaItem, 'srcSet'>
        & { mediaDetails: Maybe<(
          { __typename?: 'GraphCMS_MediaDetails' }
          & Pick<GraphCms_MediaDetails, 'width' | 'height'>
        )> }
      )>, galleryImages: Maybe<(
        { __typename?: 'GraphCMS_ProductToMediaItemConnection' }
        & { nodes: Maybe<Array<Maybe<(
          { __typename?: 'GraphCMS_MediaItem' }
          & Pick<GraphCms_MediaItem, 'srcSet'>
          & { mediaDetails: Maybe<(
            { __typename?: 'GraphCMS_MediaDetails' }
            & Pick<GraphCms_MediaDetails, 'width' | 'height'>
          )> }
        )>>> }
      )>, attributes: Maybe<(
        { __typename?: 'GraphCMS_ProductToProductAttributeConnection' }
        & { nodes: Maybe<Array<Maybe<(
          { __typename?: 'GraphCMS_ProductAttribute' }
          & Pick<GraphCms_ProductAttribute, 'name' | 'options'>
        )>>> }
      )> }
    ) | (
      { __typename?: 'GraphCMS_SimpleProduct' }
      & Pick<GraphCms_SimpleProduct, 'price' | 'id' | 'name' | 'description'>
      & { image: Maybe<(
        { __typename?: 'GraphCMS_MediaItem' }
        & Pick<GraphCms_MediaItem, 'srcSet'>
        & { mediaDetails: Maybe<(
          { __typename?: 'GraphCMS_MediaDetails' }
          & Pick<GraphCms_MediaDetails, 'width' | 'height'>
        )> }
      )>, galleryImages: Maybe<(
        { __typename?: 'GraphCMS_ProductToMediaItemConnection' }
        & { nodes: Maybe<Array<Maybe<(
          { __typename?: 'GraphCMS_MediaItem' }
          & Pick<GraphCms_MediaItem, 'srcSet'>
          & { mediaDetails: Maybe<(
            { __typename?: 'GraphCMS_MediaDetails' }
            & Pick<GraphCms_MediaDetails, 'width' | 'height'>
          )> }
        )>>> }
      )>, attributes: Maybe<(
        { __typename?: 'GraphCMS_ProductToProductAttributeConnection' }
        & { nodes: Maybe<Array<Maybe<(
          { __typename?: 'GraphCMS_ProductAttribute' }
          & Pick<GraphCms_ProductAttribute, 'name' | 'options'>
        )>>> }
      )> }
    )> }
  ) }
);
