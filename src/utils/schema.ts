export type Maybe<T> = T;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
  JSON: any;
};

export type BooleanQueryOperatorInput = {
  eq: Maybe<Scalars["Boolean"]>;
  ne: Maybe<Scalars["Boolean"]>;
  in: Maybe<Array<Maybe<Scalars["Boolean"]>>>;
  nin: Maybe<Array<Maybe<Scalars["Boolean"]>>>;
};

export type ContentfulAsset = Node & {
  __typename?: "ContentfulAsset";
  id: Scalars["ID"];
  parent: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  contentful_id: Maybe<Scalars["String"]>;
  file: Maybe<ContentfulAssetFile>;
  title: Maybe<Scalars["String"]>;
  description: Maybe<Scalars["String"]>;
  node_locale: Maybe<Scalars["String"]>;
  localFile: Maybe<File>;
  fixed: Maybe<ContentfulFixed>;
  resolutions: Maybe<ContentfulResolutions>;
  fluid: Maybe<ContentfulFluid>;
  sizes: Maybe<ContentfulSizes>;
  resize: Maybe<ContentfulResize>;
};

export type ContentfulAssetFixedArgs = {
  width: Maybe<Scalars["Int"]>;
  height: Maybe<Scalars["Int"]>;
  quality?: Maybe<Scalars["Int"]>;
  toFormat?: Maybe<ContentfulImageFormat>;
  resizingBehavior: Maybe<ImageResizingBehavior>;
  cropFocus?: Maybe<ContentfulImageCropFocus>;
  background?: Maybe<Scalars["String"]>;
};

export type ContentfulAssetResolutionsArgs = {
  width: Maybe<Scalars["Int"]>;
  height: Maybe<Scalars["Int"]>;
  quality?: Maybe<Scalars["Int"]>;
  toFormat?: Maybe<ContentfulImageFormat>;
  resizingBehavior: Maybe<ImageResizingBehavior>;
  cropFocus?: Maybe<ContentfulImageCropFocus>;
  background?: Maybe<Scalars["String"]>;
};

export type ContentfulAssetFluidArgs = {
  maxWidth: Maybe<Scalars["Int"]>;
  maxHeight: Maybe<Scalars["Int"]>;
  quality?: Maybe<Scalars["Int"]>;
  toFormat?: Maybe<ContentfulImageFormat>;
  resizingBehavior: Maybe<ImageResizingBehavior>;
  cropFocus?: Maybe<ContentfulImageCropFocus>;
  background?: Maybe<Scalars["String"]>;
  sizes: Maybe<Scalars["String"]>;
};

export type ContentfulAssetSizesArgs = {
  maxWidth: Maybe<Scalars["Int"]>;
  maxHeight: Maybe<Scalars["Int"]>;
  quality?: Maybe<Scalars["Int"]>;
  toFormat?: Maybe<ContentfulImageFormat>;
  resizingBehavior: Maybe<ImageResizingBehavior>;
  cropFocus?: Maybe<ContentfulImageCropFocus>;
  background?: Maybe<Scalars["String"]>;
  sizes: Maybe<Scalars["String"]>;
};

export type ContentfulAssetResizeArgs = {
  width: Maybe<Scalars["Int"]>;
  height: Maybe<Scalars["Int"]>;
  quality?: Maybe<Scalars["Int"]>;
  jpegProgressive?: Maybe<Scalars["Boolean"]>;
  resizingBehavior: Maybe<ImageResizingBehavior>;
  toFormat?: Maybe<ContentfulImageFormat>;
  cropFocus?: Maybe<ContentfulImageCropFocus>;
  background?: Maybe<Scalars["String"]>;
};

export type ContentfulAssetConnection = {
  __typename?: "ContentfulAssetConnection";
  totalCount: Scalars["Int"];
  edges: Array<ContentfulAssetEdge>;
  nodes: Array<ContentfulAsset>;
  pageInfo: PageInfo;
  distinct: Array<Scalars["String"]>;
  group: Array<ContentfulAssetGroupConnection>;
};

export type ContentfulAssetConnectionDistinctArgs = {
  field: ContentfulAssetFieldsEnum;
};

export type ContentfulAssetConnectionGroupArgs = {
  skip: Maybe<Scalars["Int"]>;
  limit: Maybe<Scalars["Int"]>;
  field: ContentfulAssetFieldsEnum;
};

export type ContentfulAssetEdge = {
  __typename?: "ContentfulAssetEdge";
  next: Maybe<ContentfulAsset>;
  node: ContentfulAsset;
  previous: Maybe<ContentfulAsset>;
};

export enum ContentfulAssetFieldsEnum {
  Id = "id",
  ParentId = "parent___id",
  ParentParentId = "parent___parent___id",
  ParentParentParentId = "parent___parent___parent___id",
  ParentParentParentChildren = "parent___parent___parent___children",
  ParentParentChildren = "parent___parent___children",
  ParentParentChildrenId = "parent___parent___children___id",
  ParentParentChildrenChildren = "parent___parent___children___children",
  ParentParentInternalContent = "parent___parent___internal___content",
  ParentParentInternalContentDigest = "parent___parent___internal___contentDigest",
  ParentParentInternalDescription = "parent___parent___internal___description",
  ParentParentInternalFieldOwners = "parent___parent___internal___fieldOwners",
  ParentParentInternalIgnoreType = "parent___parent___internal___ignoreType",
  ParentParentInternalMediaType = "parent___parent___internal___mediaType",
  ParentParentInternalOwner = "parent___parent___internal___owner",
  ParentParentInternalType = "parent___parent___internal___type",
  ParentChildren = "parent___children",
  ParentChildrenId = "parent___children___id",
  ParentChildrenParentId = "parent___children___parent___id",
  ParentChildrenParentChildren = "parent___children___parent___children",
  ParentChildrenChildren = "parent___children___children",
  ParentChildrenChildrenId = "parent___children___children___id",
  ParentChildrenChildrenChildren = "parent___children___children___children",
  ParentChildrenInternalContent = "parent___children___internal___content",
  ParentChildrenInternalContentDigest = "parent___children___internal___contentDigest",
  ParentChildrenInternalDescription = "parent___children___internal___description",
  ParentChildrenInternalFieldOwners = "parent___children___internal___fieldOwners",
  ParentChildrenInternalIgnoreType = "parent___children___internal___ignoreType",
  ParentChildrenInternalMediaType = "parent___children___internal___mediaType",
  ParentChildrenInternalOwner = "parent___children___internal___owner",
  ParentChildrenInternalType = "parent___children___internal___type",
  ParentInternalContent = "parent___internal___content",
  ParentInternalContentDigest = "parent___internal___contentDigest",
  ParentInternalDescription = "parent___internal___description",
  ParentInternalFieldOwners = "parent___internal___fieldOwners",
  ParentInternalIgnoreType = "parent___internal___ignoreType",
  ParentInternalMediaType = "parent___internal___mediaType",
  ParentInternalOwner = "parent___internal___owner",
  ParentInternalType = "parent___internal___type",
  Children = "children",
  ChildrenId = "children___id",
  ChildrenParentId = "children___parent___id",
  ChildrenParentParentId = "children___parent___parent___id",
  ChildrenParentParentChildren = "children___parent___parent___children",
  ChildrenParentChildren = "children___parent___children",
  ChildrenParentChildrenId = "children___parent___children___id",
  ChildrenParentChildrenChildren = "children___parent___children___children",
  ChildrenParentInternalContent = "children___parent___internal___content",
  ChildrenParentInternalContentDigest = "children___parent___internal___contentDigest",
  ChildrenParentInternalDescription = "children___parent___internal___description",
  ChildrenParentInternalFieldOwners = "children___parent___internal___fieldOwners",
  ChildrenParentInternalIgnoreType = "children___parent___internal___ignoreType",
  ChildrenParentInternalMediaType = "children___parent___internal___mediaType",
  ChildrenParentInternalOwner = "children___parent___internal___owner",
  ChildrenParentInternalType = "children___parent___internal___type",
  ChildrenChildren = "children___children",
  ChildrenChildrenId = "children___children___id",
  ChildrenChildrenParentId = "children___children___parent___id",
  ChildrenChildrenParentChildren = "children___children___parent___children",
  ChildrenChildrenChildren = "children___children___children",
  ChildrenChildrenChildrenId = "children___children___children___id",
  ChildrenChildrenChildrenChildren = "children___children___children___children",
  ChildrenChildrenInternalContent = "children___children___internal___content",
  ChildrenChildrenInternalContentDigest = "children___children___internal___contentDigest",
  ChildrenChildrenInternalDescription = "children___children___internal___description",
  ChildrenChildrenInternalFieldOwners = "children___children___internal___fieldOwners",
  ChildrenChildrenInternalIgnoreType = "children___children___internal___ignoreType",
  ChildrenChildrenInternalMediaType = "children___children___internal___mediaType",
  ChildrenChildrenInternalOwner = "children___children___internal___owner",
  ChildrenChildrenInternalType = "children___children___internal___type",
  ChildrenInternalContent = "children___internal___content",
  ChildrenInternalContentDigest = "children___internal___contentDigest",
  ChildrenInternalDescription = "children___internal___description",
  ChildrenInternalFieldOwners = "children___internal___fieldOwners",
  ChildrenInternalIgnoreType = "children___internal___ignoreType",
  ChildrenInternalMediaType = "children___internal___mediaType",
  ChildrenInternalOwner = "children___internal___owner",
  ChildrenInternalType = "children___internal___type",
  InternalContent = "internal___content",
  InternalContentDigest = "internal___contentDigest",
  InternalDescription = "internal___description",
  InternalFieldOwners = "internal___fieldOwners",
  InternalIgnoreType = "internal___ignoreType",
  InternalMediaType = "internal___mediaType",
  InternalOwner = "internal___owner",
  InternalType = "internal___type",
  ContentfulId = "contentful_id",
  FileUrl = "file___url",
  FileDetailsSize = "file___details___size",
  FileDetailsImageWidth = "file___details___image___width",
  FileDetailsImageHeight = "file___details___image___height",
  FileFileName = "file___fileName",
  FileContentType = "file___contentType",
  Title = "title",
  Description = "description",
  NodeLocale = "node_locale",
  LocalFileSourceInstanceName = "localFile___sourceInstanceName",
  LocalFileAbsolutePath = "localFile___absolutePath",
  LocalFileRelativePath = "localFile___relativePath",
  LocalFileExtension = "localFile___extension",
  LocalFileSize = "localFile___size",
  LocalFilePrettySize = "localFile___prettySize",
  LocalFileModifiedTime = "localFile___modifiedTime",
  LocalFileAccessTime = "localFile___accessTime",
  LocalFileChangeTime = "localFile___changeTime",
  LocalFileBirthTime = "localFile___birthTime",
  LocalFileRoot = "localFile___root",
  LocalFileDir = "localFile___dir",
  LocalFileBase = "localFile___base",
  LocalFileExt = "localFile___ext",
  LocalFileName = "localFile___name",
  LocalFileRelativeDirectory = "localFile___relativeDirectory",
  LocalFileDev = "localFile___dev",
  LocalFileMode = "localFile___mode",
  LocalFileNlink = "localFile___nlink",
  LocalFileUid = "localFile___uid",
  LocalFileGid = "localFile___gid",
  LocalFileRdev = "localFile___rdev",
  LocalFileIno = "localFile___ino",
  LocalFileAtimeMs = "localFile___atimeMs",
  LocalFileMtimeMs = "localFile___mtimeMs",
  LocalFileCtimeMs = "localFile___ctimeMs",
  LocalFileAtime = "localFile___atime",
  LocalFileMtime = "localFile___mtime",
  LocalFileCtime = "localFile___ctime",
  LocalFileBirthtime = "localFile___birthtime",
  LocalFileBirthtimeMs = "localFile___birthtimeMs",
  LocalFileBlksize = "localFile___blksize",
  LocalFileBlocks = "localFile___blocks",
  LocalFileUrl = "localFile___url",
  LocalFileId = "localFile___id",
  LocalFileParentId = "localFile___parent___id",
  LocalFileParentParentId = "localFile___parent___parent___id",
  LocalFileParentParentChildren = "localFile___parent___parent___children",
  LocalFileParentChildren = "localFile___parent___children",
  LocalFileParentChildrenId = "localFile___parent___children___id",
  LocalFileParentChildrenChildren = "localFile___parent___children___children",
  LocalFileParentInternalContent = "localFile___parent___internal___content",
  LocalFileParentInternalContentDigest = "localFile___parent___internal___contentDigest",
  LocalFileParentInternalDescription = "localFile___parent___internal___description",
  LocalFileParentInternalFieldOwners = "localFile___parent___internal___fieldOwners",
  LocalFileParentInternalIgnoreType = "localFile___parent___internal___ignoreType",
  LocalFileParentInternalMediaType = "localFile___parent___internal___mediaType",
  LocalFileParentInternalOwner = "localFile___parent___internal___owner",
  LocalFileParentInternalType = "localFile___parent___internal___type",
  LocalFileChildren = "localFile___children",
  LocalFileChildrenId = "localFile___children___id",
  LocalFileChildrenParentId = "localFile___children___parent___id",
  LocalFileChildrenParentChildren = "localFile___children___parent___children",
  LocalFileChildrenChildren = "localFile___children___children",
  LocalFileChildrenChildrenId = "localFile___children___children___id",
  LocalFileChildrenChildrenChildren = "localFile___children___children___children",
  LocalFileChildrenInternalContent = "localFile___children___internal___content",
  LocalFileChildrenInternalContentDigest = "localFile___children___internal___contentDigest",
  LocalFileChildrenInternalDescription = "localFile___children___internal___description",
  LocalFileChildrenInternalFieldOwners = "localFile___children___internal___fieldOwners",
  LocalFileChildrenInternalIgnoreType = "localFile___children___internal___ignoreType",
  LocalFileChildrenInternalMediaType = "localFile___children___internal___mediaType",
  LocalFileChildrenInternalOwner = "localFile___children___internal___owner",
  LocalFileChildrenInternalType = "localFile___children___internal___type",
  LocalFileInternalContent = "localFile___internal___content",
  LocalFileInternalContentDigest = "localFile___internal___contentDigest",
  LocalFileInternalDescription = "localFile___internal___description",
  LocalFileInternalFieldOwners = "localFile___internal___fieldOwners",
  LocalFileInternalIgnoreType = "localFile___internal___ignoreType",
  LocalFileInternalMediaType = "localFile___internal___mediaType",
  LocalFileInternalOwner = "localFile___internal___owner",
  LocalFileInternalType = "localFile___internal___type",
  FixedBase64 = "fixed___base64",
  FixedTracedSvg = "fixed___tracedSVG",
  FixedAspectRatio = "fixed___aspectRatio",
  FixedWidth = "fixed___width",
  FixedHeight = "fixed___height",
  FixedSrc = "fixed___src",
  FixedSrcSet = "fixed___srcSet",
  FixedSrcWebp = "fixed___srcWebp",
  FixedSrcSetWebp = "fixed___srcSetWebp",
  ResolutionsBase64 = "resolutions___base64",
  ResolutionsTracedSvg = "resolutions___tracedSVG",
  ResolutionsAspectRatio = "resolutions___aspectRatio",
  ResolutionsWidth = "resolutions___width",
  ResolutionsHeight = "resolutions___height",
  ResolutionsSrc = "resolutions___src",
  ResolutionsSrcSet = "resolutions___srcSet",
  ResolutionsSrcWebp = "resolutions___srcWebp",
  ResolutionsSrcSetWebp = "resolutions___srcSetWebp",
  FluidBase64 = "fluid___base64",
  FluidTracedSvg = "fluid___tracedSVG",
  FluidAspectRatio = "fluid___aspectRatio",
  FluidSrc = "fluid___src",
  FluidSrcSet = "fluid___srcSet",
  FluidSrcWebp = "fluid___srcWebp",
  FluidSrcSetWebp = "fluid___srcSetWebp",
  FluidSizes = "fluid___sizes",
  SizesBase64 = "sizes___base64",
  SizesTracedSvg = "sizes___tracedSVG",
  SizesAspectRatio = "sizes___aspectRatio",
  SizesSrc = "sizes___src",
  SizesSrcSet = "sizes___srcSet",
  SizesSrcWebp = "sizes___srcWebp",
  SizesSrcSetWebp = "sizes___srcSetWebp",
  SizesSizes = "sizes___sizes",
  ResizeBase64 = "resize___base64",
  ResizeTracedSvg = "resize___tracedSVG",
  ResizeSrc = "resize___src",
  ResizeWidth = "resize___width",
  ResizeHeight = "resize___height",
  ResizeAspectRatio = "resize___aspectRatio",
}

export type ContentfulAssetFile = {
  __typename?: "ContentfulAssetFile";
  url: Maybe<Scalars["String"]>;
  details: Maybe<ContentfulAssetFileDetails>;
  fileName: Maybe<Scalars["String"]>;
  contentType: Maybe<Scalars["String"]>;
};

export type ContentfulAssetFileDetails = {
  __typename?: "ContentfulAssetFileDetails";
  size: Maybe<Scalars["Int"]>;
  image: Maybe<ContentfulAssetFileDetailsImage>;
};

export type ContentfulAssetFileDetailsFilterInput = {
  size: Maybe<IntQueryOperatorInput>;
  image: Maybe<ContentfulAssetFileDetailsImageFilterInput>;
};

export type ContentfulAssetFileDetailsImage = {
  __typename?: "ContentfulAssetFileDetailsImage";
  width: Maybe<Scalars["Int"]>;
  height: Maybe<Scalars["Int"]>;
};

export type ContentfulAssetFileDetailsImageFilterInput = {
  width: Maybe<IntQueryOperatorInput>;
  height: Maybe<IntQueryOperatorInput>;
};

export type ContentfulAssetFileFilterInput = {
  url: Maybe<StringQueryOperatorInput>;
  details: Maybe<ContentfulAssetFileDetailsFilterInput>;
  fileName: Maybe<StringQueryOperatorInput>;
  contentType: Maybe<StringQueryOperatorInput>;
};

export type ContentfulAssetFilterInput = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  contentful_id: Maybe<StringQueryOperatorInput>;
  file: Maybe<ContentfulAssetFileFilterInput>;
  title: Maybe<StringQueryOperatorInput>;
  description: Maybe<StringQueryOperatorInput>;
  node_locale: Maybe<StringQueryOperatorInput>;
  localFile: Maybe<FileFilterInput>;
  fixed: Maybe<ContentfulFixedFilterInput>;
  resolutions: Maybe<ContentfulResolutionsFilterInput>;
  fluid: Maybe<ContentfulFluidFilterInput>;
  sizes: Maybe<ContentfulSizesFilterInput>;
  resize: Maybe<ContentfulResizeFilterInput>;
};

export type ContentfulAssetGroupConnection = {
  __typename?: "ContentfulAssetGroupConnection";
  totalCount: Scalars["Int"];
  edges: Array<ContentfulAssetEdge>;
  nodes: Array<ContentfulAsset>;
  pageInfo: PageInfo;
  field: Scalars["String"];
  fieldValue: Maybe<Scalars["String"]>;
};

export type ContentfulAssetSortInput = {
  fields: Maybe<Array<Maybe<ContentfulAssetFieldsEnum>>>;
  order: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulContentType = Node & {
  __typename?: "ContentfulContentType";
  id: Scalars["ID"];
  parent: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  name: Maybe<Scalars["String"]>;
  displayField: Maybe<Scalars["String"]>;
  description: Maybe<Scalars["String"]>;
};

export type ContentfulContentTypeConnection = {
  __typename?: "ContentfulContentTypeConnection";
  totalCount: Scalars["Int"];
  edges: Array<ContentfulContentTypeEdge>;
  nodes: Array<ContentfulContentType>;
  pageInfo: PageInfo;
  distinct: Array<Scalars["String"]>;
  group: Array<ContentfulContentTypeGroupConnection>;
};

export type ContentfulContentTypeConnectionDistinctArgs = {
  field: ContentfulContentTypeFieldsEnum;
};

export type ContentfulContentTypeConnectionGroupArgs = {
  skip: Maybe<Scalars["Int"]>;
  limit: Maybe<Scalars["Int"]>;
  field: ContentfulContentTypeFieldsEnum;
};

export type ContentfulContentTypeEdge = {
  __typename?: "ContentfulContentTypeEdge";
  next: Maybe<ContentfulContentType>;
  node: ContentfulContentType;
  previous: Maybe<ContentfulContentType>;
};

export enum ContentfulContentTypeFieldsEnum {
  Id = "id",
  ParentId = "parent___id",
  ParentParentId = "parent___parent___id",
  ParentParentParentId = "parent___parent___parent___id",
  ParentParentParentChildren = "parent___parent___parent___children",
  ParentParentChildren = "parent___parent___children",
  ParentParentChildrenId = "parent___parent___children___id",
  ParentParentChildrenChildren = "parent___parent___children___children",
  ParentParentInternalContent = "parent___parent___internal___content",
  ParentParentInternalContentDigest = "parent___parent___internal___contentDigest",
  ParentParentInternalDescription = "parent___parent___internal___description",
  ParentParentInternalFieldOwners = "parent___parent___internal___fieldOwners",
  ParentParentInternalIgnoreType = "parent___parent___internal___ignoreType",
  ParentParentInternalMediaType = "parent___parent___internal___mediaType",
  ParentParentInternalOwner = "parent___parent___internal___owner",
  ParentParentInternalType = "parent___parent___internal___type",
  ParentChildren = "parent___children",
  ParentChildrenId = "parent___children___id",
  ParentChildrenParentId = "parent___children___parent___id",
  ParentChildrenParentChildren = "parent___children___parent___children",
  ParentChildrenChildren = "parent___children___children",
  ParentChildrenChildrenId = "parent___children___children___id",
  ParentChildrenChildrenChildren = "parent___children___children___children",
  ParentChildrenInternalContent = "parent___children___internal___content",
  ParentChildrenInternalContentDigest = "parent___children___internal___contentDigest",
  ParentChildrenInternalDescription = "parent___children___internal___description",
  ParentChildrenInternalFieldOwners = "parent___children___internal___fieldOwners",
  ParentChildrenInternalIgnoreType = "parent___children___internal___ignoreType",
  ParentChildrenInternalMediaType = "parent___children___internal___mediaType",
  ParentChildrenInternalOwner = "parent___children___internal___owner",
  ParentChildrenInternalType = "parent___children___internal___type",
  ParentInternalContent = "parent___internal___content",
  ParentInternalContentDigest = "parent___internal___contentDigest",
  ParentInternalDescription = "parent___internal___description",
  ParentInternalFieldOwners = "parent___internal___fieldOwners",
  ParentInternalIgnoreType = "parent___internal___ignoreType",
  ParentInternalMediaType = "parent___internal___mediaType",
  ParentInternalOwner = "parent___internal___owner",
  ParentInternalType = "parent___internal___type",
  Children = "children",
  ChildrenId = "children___id",
  ChildrenParentId = "children___parent___id",
  ChildrenParentParentId = "children___parent___parent___id",
  ChildrenParentParentChildren = "children___parent___parent___children",
  ChildrenParentChildren = "children___parent___children",
  ChildrenParentChildrenId = "children___parent___children___id",
  ChildrenParentChildrenChildren = "children___parent___children___children",
  ChildrenParentInternalContent = "children___parent___internal___content",
  ChildrenParentInternalContentDigest = "children___parent___internal___contentDigest",
  ChildrenParentInternalDescription = "children___parent___internal___description",
  ChildrenParentInternalFieldOwners = "children___parent___internal___fieldOwners",
  ChildrenParentInternalIgnoreType = "children___parent___internal___ignoreType",
  ChildrenParentInternalMediaType = "children___parent___internal___mediaType",
  ChildrenParentInternalOwner = "children___parent___internal___owner",
  ChildrenParentInternalType = "children___parent___internal___type",
  ChildrenChildren = "children___children",
  ChildrenChildrenId = "children___children___id",
  ChildrenChildrenParentId = "children___children___parent___id",
  ChildrenChildrenParentChildren = "children___children___parent___children",
  ChildrenChildrenChildren = "children___children___children",
  ChildrenChildrenChildrenId = "children___children___children___id",
  ChildrenChildrenChildrenChildren = "children___children___children___children",
  ChildrenChildrenInternalContent = "children___children___internal___content",
  ChildrenChildrenInternalContentDigest = "children___children___internal___contentDigest",
  ChildrenChildrenInternalDescription = "children___children___internal___description",
  ChildrenChildrenInternalFieldOwners = "children___children___internal___fieldOwners",
  ChildrenChildrenInternalIgnoreType = "children___children___internal___ignoreType",
  ChildrenChildrenInternalMediaType = "children___children___internal___mediaType",
  ChildrenChildrenInternalOwner = "children___children___internal___owner",
  ChildrenChildrenInternalType = "children___children___internal___type",
  ChildrenInternalContent = "children___internal___content",
  ChildrenInternalContentDigest = "children___internal___contentDigest",
  ChildrenInternalDescription = "children___internal___description",
  ChildrenInternalFieldOwners = "children___internal___fieldOwners",
  ChildrenInternalIgnoreType = "children___internal___ignoreType",
  ChildrenInternalMediaType = "children___internal___mediaType",
  ChildrenInternalOwner = "children___internal___owner",
  ChildrenInternalType = "children___internal___type",
  InternalContent = "internal___content",
  InternalContentDigest = "internal___contentDigest",
  InternalDescription = "internal___description",
  InternalFieldOwners = "internal___fieldOwners",
  InternalIgnoreType = "internal___ignoreType",
  InternalMediaType = "internal___mediaType",
  InternalOwner = "internal___owner",
  InternalType = "internal___type",
  Name = "name",
  DisplayField = "displayField",
  Description = "description",
}

export type ContentfulContentTypeFilterInput = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  name: Maybe<StringQueryOperatorInput>;
  displayField: Maybe<StringQueryOperatorInput>;
  description: Maybe<StringQueryOperatorInput>;
};

export type ContentfulContentTypeGroupConnection = {
  __typename?: "ContentfulContentTypeGroupConnection";
  totalCount: Scalars["Int"];
  edges: Array<ContentfulContentTypeEdge>;
  nodes: Array<ContentfulContentType>;
  pageInfo: PageInfo;
  field: Scalars["String"];
  fieldValue: Maybe<Scalars["String"]>;
};

export type ContentfulContentTypeSortInput = {
  fields: Maybe<Array<Maybe<ContentfulContentTypeFieldsEnum>>>;
  order: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulFeatured = Node & {
  __typename?: "ContentfulFeatured";
  id: Scalars["ID"];
  parent: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  title: Maybe<Scalars["String"]>;
  siteJobs: Maybe<Array<Maybe<ContentfulJob>>>;
  sitePerformances: Maybe<Array<Maybe<ContentfulMusic>>>;
  resumeJobs: Maybe<Array<Maybe<ContentfulJob>>>;
  spaceId: Maybe<Scalars["String"]>;
  contentful_id: Maybe<Scalars["String"]>;
  createdAt: Maybe<Scalars["Date"]>;
  updatedAt: Maybe<Scalars["Date"]>;
  sys: Maybe<ContentfulFeaturedSys>;
  node_locale: Maybe<Scalars["String"]>;
};

export type ContentfulFeaturedCreatedAtArgs = {
  formatString: Maybe<Scalars["String"]>;
  fromNow: Maybe<Scalars["Boolean"]>;
  difference: Maybe<Scalars["String"]>;
  locale: Maybe<Scalars["String"]>;
};

export type ContentfulFeaturedUpdatedAtArgs = {
  formatString: Maybe<Scalars["String"]>;
  fromNow: Maybe<Scalars["Boolean"]>;
  difference: Maybe<Scalars["String"]>;
  locale: Maybe<Scalars["String"]>;
};

export type ContentfulFeaturedConnection = {
  __typename?: "ContentfulFeaturedConnection";
  totalCount: Scalars["Int"];
  edges: Array<ContentfulFeaturedEdge>;
  nodes: Array<ContentfulFeatured>;
  pageInfo: PageInfo;
  distinct: Array<Scalars["String"]>;
  group: Array<ContentfulFeaturedGroupConnection>;
};

export type ContentfulFeaturedConnectionDistinctArgs = {
  field: ContentfulFeaturedFieldsEnum;
};

export type ContentfulFeaturedConnectionGroupArgs = {
  skip: Maybe<Scalars["Int"]>;
  limit: Maybe<Scalars["Int"]>;
  field: ContentfulFeaturedFieldsEnum;
};

export type ContentfulFeaturedEdge = {
  __typename?: "ContentfulFeaturedEdge";
  next: Maybe<ContentfulFeatured>;
  node: ContentfulFeatured;
  previous: Maybe<ContentfulFeatured>;
};

export enum ContentfulFeaturedFieldsEnum {
  Id = "id",
  ParentId = "parent___id",
  ParentParentId = "parent___parent___id",
  ParentParentParentId = "parent___parent___parent___id",
  ParentParentParentChildren = "parent___parent___parent___children",
  ParentParentChildren = "parent___parent___children",
  ParentParentChildrenId = "parent___parent___children___id",
  ParentParentChildrenChildren = "parent___parent___children___children",
  ParentParentInternalContent = "parent___parent___internal___content",
  ParentParentInternalContentDigest = "parent___parent___internal___contentDigest",
  ParentParentInternalDescription = "parent___parent___internal___description",
  ParentParentInternalFieldOwners = "parent___parent___internal___fieldOwners",
  ParentParentInternalIgnoreType = "parent___parent___internal___ignoreType",
  ParentParentInternalMediaType = "parent___parent___internal___mediaType",
  ParentParentInternalOwner = "parent___parent___internal___owner",
  ParentParentInternalType = "parent___parent___internal___type",
  ParentChildren = "parent___children",
  ParentChildrenId = "parent___children___id",
  ParentChildrenParentId = "parent___children___parent___id",
  ParentChildrenParentChildren = "parent___children___parent___children",
  ParentChildrenChildren = "parent___children___children",
  ParentChildrenChildrenId = "parent___children___children___id",
  ParentChildrenChildrenChildren = "parent___children___children___children",
  ParentChildrenInternalContent = "parent___children___internal___content",
  ParentChildrenInternalContentDigest = "parent___children___internal___contentDigest",
  ParentChildrenInternalDescription = "parent___children___internal___description",
  ParentChildrenInternalFieldOwners = "parent___children___internal___fieldOwners",
  ParentChildrenInternalIgnoreType = "parent___children___internal___ignoreType",
  ParentChildrenInternalMediaType = "parent___children___internal___mediaType",
  ParentChildrenInternalOwner = "parent___children___internal___owner",
  ParentChildrenInternalType = "parent___children___internal___type",
  ParentInternalContent = "parent___internal___content",
  ParentInternalContentDigest = "parent___internal___contentDigest",
  ParentInternalDescription = "parent___internal___description",
  ParentInternalFieldOwners = "parent___internal___fieldOwners",
  ParentInternalIgnoreType = "parent___internal___ignoreType",
  ParentInternalMediaType = "parent___internal___mediaType",
  ParentInternalOwner = "parent___internal___owner",
  ParentInternalType = "parent___internal___type",
  Children = "children",
  ChildrenId = "children___id",
  ChildrenParentId = "children___parent___id",
  ChildrenParentParentId = "children___parent___parent___id",
  ChildrenParentParentChildren = "children___parent___parent___children",
  ChildrenParentChildren = "children___parent___children",
  ChildrenParentChildrenId = "children___parent___children___id",
  ChildrenParentChildrenChildren = "children___parent___children___children",
  ChildrenParentInternalContent = "children___parent___internal___content",
  ChildrenParentInternalContentDigest = "children___parent___internal___contentDigest",
  ChildrenParentInternalDescription = "children___parent___internal___description",
  ChildrenParentInternalFieldOwners = "children___parent___internal___fieldOwners",
  ChildrenParentInternalIgnoreType = "children___parent___internal___ignoreType",
  ChildrenParentInternalMediaType = "children___parent___internal___mediaType",
  ChildrenParentInternalOwner = "children___parent___internal___owner",
  ChildrenParentInternalType = "children___parent___internal___type",
  ChildrenChildren = "children___children",
  ChildrenChildrenId = "children___children___id",
  ChildrenChildrenParentId = "children___children___parent___id",
  ChildrenChildrenParentChildren = "children___children___parent___children",
  ChildrenChildrenChildren = "children___children___children",
  ChildrenChildrenChildrenId = "children___children___children___id",
  ChildrenChildrenChildrenChildren = "children___children___children___children",
  ChildrenChildrenInternalContent = "children___children___internal___content",
  ChildrenChildrenInternalContentDigest = "children___children___internal___contentDigest",
  ChildrenChildrenInternalDescription = "children___children___internal___description",
  ChildrenChildrenInternalFieldOwners = "children___children___internal___fieldOwners",
  ChildrenChildrenInternalIgnoreType = "children___children___internal___ignoreType",
  ChildrenChildrenInternalMediaType = "children___children___internal___mediaType",
  ChildrenChildrenInternalOwner = "children___children___internal___owner",
  ChildrenChildrenInternalType = "children___children___internal___type",
  ChildrenInternalContent = "children___internal___content",
  ChildrenInternalContentDigest = "children___internal___contentDigest",
  ChildrenInternalDescription = "children___internal___description",
  ChildrenInternalFieldOwners = "children___internal___fieldOwners",
  ChildrenInternalIgnoreType = "children___internal___ignoreType",
  ChildrenInternalMediaType = "children___internal___mediaType",
  ChildrenInternalOwner = "children___internal___owner",
  ChildrenInternalType = "children___internal___type",
  InternalContent = "internal___content",
  InternalContentDigest = "internal___contentDigest",
  InternalDescription = "internal___description",
  InternalFieldOwners = "internal___fieldOwners",
  InternalIgnoreType = "internal___ignoreType",
  InternalMediaType = "internal___mediaType",
  InternalOwner = "internal___owner",
  InternalType = "internal___type",
  Title = "title",
  SiteJobs = "siteJobs",
  SiteJobsId = "siteJobs___id",
  SiteJobsParentId = "siteJobs___parent___id",
  SiteJobsParentParentId = "siteJobs___parent___parent___id",
  SiteJobsParentParentChildren = "siteJobs___parent___parent___children",
  SiteJobsParentChildren = "siteJobs___parent___children",
  SiteJobsParentChildrenId = "siteJobs___parent___children___id",
  SiteJobsParentChildrenChildren = "siteJobs___parent___children___children",
  SiteJobsParentInternalContent = "siteJobs___parent___internal___content",
  SiteJobsParentInternalContentDigest = "siteJobs___parent___internal___contentDigest",
  SiteJobsParentInternalDescription = "siteJobs___parent___internal___description",
  SiteJobsParentInternalFieldOwners = "siteJobs___parent___internal___fieldOwners",
  SiteJobsParentInternalIgnoreType = "siteJobs___parent___internal___ignoreType",
  SiteJobsParentInternalMediaType = "siteJobs___parent___internal___mediaType",
  SiteJobsParentInternalOwner = "siteJobs___parent___internal___owner",
  SiteJobsParentInternalType = "siteJobs___parent___internal___type",
  SiteJobsChildren = "siteJobs___children",
  SiteJobsChildrenId = "siteJobs___children___id",
  SiteJobsChildrenParentId = "siteJobs___children___parent___id",
  SiteJobsChildrenParentChildren = "siteJobs___children___parent___children",
  SiteJobsChildrenChildren = "siteJobs___children___children",
  SiteJobsChildrenChildrenId = "siteJobs___children___children___id",
  SiteJobsChildrenChildrenChildren = "siteJobs___children___children___children",
  SiteJobsChildrenInternalContent = "siteJobs___children___internal___content",
  SiteJobsChildrenInternalContentDigest = "siteJobs___children___internal___contentDigest",
  SiteJobsChildrenInternalDescription = "siteJobs___children___internal___description",
  SiteJobsChildrenInternalFieldOwners = "siteJobs___children___internal___fieldOwners",
  SiteJobsChildrenInternalIgnoreType = "siteJobs___children___internal___ignoreType",
  SiteJobsChildrenInternalMediaType = "siteJobs___children___internal___mediaType",
  SiteJobsChildrenInternalOwner = "siteJobs___children___internal___owner",
  SiteJobsChildrenInternalType = "siteJobs___children___internal___type",
  SiteJobsInternalContent = "siteJobs___internal___content",
  SiteJobsInternalContentDigest = "siteJobs___internal___contentDigest",
  SiteJobsInternalDescription = "siteJobs___internal___description",
  SiteJobsInternalFieldOwners = "siteJobs___internal___fieldOwners",
  SiteJobsInternalIgnoreType = "siteJobs___internal___ignoreType",
  SiteJobsInternalMediaType = "siteJobs___internal___mediaType",
  SiteJobsInternalOwner = "siteJobs___internal___owner",
  SiteJobsInternalType = "siteJobs___internal___type",
  SiteJobsTitle = "siteJobs___title",
  SiteJobsCompany = "siteJobs___company",
  SiteJobsLocationLon = "siteJobs___location___lon",
  SiteJobsLocationLat = "siteJobs___location___lat",
  SiteJobsStartDate = "siteJobs___startDate",
  SiteJobsStartPay = "siteJobs___startPay",
  SiteJobsIsHourly = "siteJobs___isHourly",
  SiteJobsCity = "siteJobs___city",
  SiteJobsState = "siteJobs___state",
  SiteJobsDescriptionId = "siteJobs___description___id",
  SiteJobsDescriptionParentId = "siteJobs___description___parent___id",
  SiteJobsDescriptionParentChildren = "siteJobs___description___parent___children",
  SiteJobsDescriptionChildren = "siteJobs___description___children",
  SiteJobsDescriptionChildrenId = "siteJobs___description___children___id",
  SiteJobsDescriptionChildrenChildren = "siteJobs___description___children___children",
  SiteJobsDescriptionInternalContent = "siteJobs___description___internal___content",
  SiteJobsDescriptionInternalContentDigest = "siteJobs___description___internal___contentDigest",
  SiteJobsDescriptionInternalDescription = "siteJobs___description___internal___description",
  SiteJobsDescriptionInternalFieldOwners = "siteJobs___description___internal___fieldOwners",
  SiteJobsDescriptionInternalIgnoreType = "siteJobs___description___internal___ignoreType",
  SiteJobsDescriptionInternalMediaType = "siteJobs___description___internal___mediaType",
  SiteJobsDescriptionInternalOwner = "siteJobs___description___internal___owner",
  SiteJobsDescriptionInternalType = "siteJobs___description___internal___type",
  SiteJobsDescriptionContent = "siteJobs___description___content",
  SiteJobsDescriptionContentContent = "siteJobs___description___content___content",
  SiteJobsDescriptionContentNodeType = "siteJobs___description___content___nodeType",
  SiteJobsDescriptionNodeType = "siteJobs___description___nodeType",
  SiteJobsDescriptionDescription = "siteJobs___description___description",
  SiteJobsDescriptionJson = "siteJobs___description___json",
  SiteJobsSpaceId = "siteJobs___spaceId",
  SiteJobsContentfulId = "siteJobs___contentful_id",
  SiteJobsCreatedAt = "siteJobs___createdAt",
  SiteJobsUpdatedAt = "siteJobs___updatedAt",
  SiteJobsSysRevision = "siteJobs___sys___revision",
  SiteJobsNodeLocale = "siteJobs___node_locale",
  SiteJobsFeatured = "siteJobs___featured",
  SiteJobsFeaturedId = "siteJobs___featured___id",
  SiteJobsFeaturedParentId = "siteJobs___featured___parent___id",
  SiteJobsFeaturedParentChildren = "siteJobs___featured___parent___children",
  SiteJobsFeaturedChildren = "siteJobs___featured___children",
  SiteJobsFeaturedChildrenId = "siteJobs___featured___children___id",
  SiteJobsFeaturedChildrenChildren = "siteJobs___featured___children___children",
  SiteJobsFeaturedInternalContent = "siteJobs___featured___internal___content",
  SiteJobsFeaturedInternalContentDigest = "siteJobs___featured___internal___contentDigest",
  SiteJobsFeaturedInternalDescription = "siteJobs___featured___internal___description",
  SiteJobsFeaturedInternalFieldOwners = "siteJobs___featured___internal___fieldOwners",
  SiteJobsFeaturedInternalIgnoreType = "siteJobs___featured___internal___ignoreType",
  SiteJobsFeaturedInternalMediaType = "siteJobs___featured___internal___mediaType",
  SiteJobsFeaturedInternalOwner = "siteJobs___featured___internal___owner",
  SiteJobsFeaturedInternalType = "siteJobs___featured___internal___type",
  SiteJobsFeaturedTitle = "siteJobs___featured___title",
  SiteJobsFeaturedSiteJobs = "siteJobs___featured___siteJobs",
  SiteJobsFeaturedSiteJobsId = "siteJobs___featured___siteJobs___id",
  SiteJobsFeaturedSiteJobsChildren = "siteJobs___featured___siteJobs___children",
  SiteJobsFeaturedSiteJobsTitle = "siteJobs___featured___siteJobs___title",
  SiteJobsFeaturedSiteJobsCompany = "siteJobs___featured___siteJobs___company",
  SiteJobsFeaturedSiteJobsStartDate = "siteJobs___featured___siteJobs___startDate",
  SiteJobsFeaturedSiteJobsStartPay = "siteJobs___featured___siteJobs___startPay",
  SiteJobsFeaturedSiteJobsIsHourly = "siteJobs___featured___siteJobs___isHourly",
  SiteJobsFeaturedSiteJobsCity = "siteJobs___featured___siteJobs___city",
  SiteJobsFeaturedSiteJobsState = "siteJobs___featured___siteJobs___state",
  SiteJobsFeaturedSiteJobsSpaceId = "siteJobs___featured___siteJobs___spaceId",
  SiteJobsFeaturedSiteJobsContentfulId = "siteJobs___featured___siteJobs___contentful_id",
  SiteJobsFeaturedSiteJobsCreatedAt = "siteJobs___featured___siteJobs___createdAt",
  SiteJobsFeaturedSiteJobsUpdatedAt = "siteJobs___featured___siteJobs___updatedAt",
  SiteJobsFeaturedSiteJobsNodeLocale = "siteJobs___featured___siteJobs___node_locale",
  SiteJobsFeaturedSiteJobsFeatured = "siteJobs___featured___siteJobs___featured",
  SiteJobsFeaturedSiteJobsEndDate = "siteJobs___featured___siteJobs___endDate",
  SiteJobsFeaturedSiteJobsEndPay = "siteJobs___featured___siteJobs___endPay",
  SiteJobsFeaturedSitePerformances = "siteJobs___featured___sitePerformances",
  SiteJobsFeaturedSitePerformancesId = "siteJobs___featured___sitePerformances___id",
  SiteJobsFeaturedSitePerformancesChildren = "siteJobs___featured___sitePerformances___children",
  SiteJobsFeaturedSitePerformancesTitle = "siteJobs___featured___sitePerformances___title",
  SiteJobsFeaturedSitePerformancesGroup = "siteJobs___featured___sitePerformances___group",
  SiteJobsFeaturedSitePerformancesRecording = "siteJobs___featured___sitePerformances___recording",
  SiteJobsFeaturedSitePerformancesYear = "siteJobs___featured___sitePerformances___year",
  SiteJobsFeaturedSitePerformancesSpaceId = "siteJobs___featured___sitePerformances___spaceId",
  SiteJobsFeaturedSitePerformancesContentfulId = "siteJobs___featured___sitePerformances___contentful_id",
  SiteJobsFeaturedSitePerformancesCreatedAt = "siteJobs___featured___sitePerformances___createdAt",
  SiteJobsFeaturedSitePerformancesUpdatedAt = "siteJobs___featured___sitePerformances___updatedAt",
  SiteJobsFeaturedSitePerformancesNodeLocale = "siteJobs___featured___sitePerformances___node_locale",
  SiteJobsFeaturedSitePerformancesFeatured = "siteJobs___featured___sitePerformances___featured",
  SiteJobsFeaturedResumeJobs = "siteJobs___featured___resumeJobs",
  SiteJobsFeaturedResumeJobsId = "siteJobs___featured___resumeJobs___id",
  SiteJobsFeaturedResumeJobsChildren = "siteJobs___featured___resumeJobs___children",
  SiteJobsFeaturedResumeJobsTitle = "siteJobs___featured___resumeJobs___title",
  SiteJobsFeaturedResumeJobsCompany = "siteJobs___featured___resumeJobs___company",
  SiteJobsFeaturedResumeJobsStartDate = "siteJobs___featured___resumeJobs___startDate",
  SiteJobsFeaturedResumeJobsStartPay = "siteJobs___featured___resumeJobs___startPay",
  SiteJobsFeaturedResumeJobsIsHourly = "siteJobs___featured___resumeJobs___isHourly",
  SiteJobsFeaturedResumeJobsCity = "siteJobs___featured___resumeJobs___city",
  SiteJobsFeaturedResumeJobsState = "siteJobs___featured___resumeJobs___state",
  SiteJobsFeaturedResumeJobsSpaceId = "siteJobs___featured___resumeJobs___spaceId",
  SiteJobsFeaturedResumeJobsContentfulId = "siteJobs___featured___resumeJobs___contentful_id",
  SiteJobsFeaturedResumeJobsCreatedAt = "siteJobs___featured___resumeJobs___createdAt",
  SiteJobsFeaturedResumeJobsUpdatedAt = "siteJobs___featured___resumeJobs___updatedAt",
  SiteJobsFeaturedResumeJobsNodeLocale = "siteJobs___featured___resumeJobs___node_locale",
  SiteJobsFeaturedResumeJobsFeatured = "siteJobs___featured___resumeJobs___featured",
  SiteJobsFeaturedResumeJobsEndDate = "siteJobs___featured___resumeJobs___endDate",
  SiteJobsFeaturedResumeJobsEndPay = "siteJobs___featured___resumeJobs___endPay",
  SiteJobsFeaturedSpaceId = "siteJobs___featured___spaceId",
  SiteJobsFeaturedContentfulId = "siteJobs___featured___contentful_id",
  SiteJobsFeaturedCreatedAt = "siteJobs___featured___createdAt",
  SiteJobsFeaturedUpdatedAt = "siteJobs___featured___updatedAt",
  SiteJobsFeaturedSysRevision = "siteJobs___featured___sys___revision",
  SiteJobsFeaturedNodeLocale = "siteJobs___featured___node_locale",
  SiteJobsEndDate = "siteJobs___endDate",
  SiteJobsEndPay = "siteJobs___endPay",
  SiteJobsChildContentfulJobDescriptionRichTextNodeId = "siteJobs___childContentfulJobDescriptionRichTextNode___id",
  SiteJobsChildContentfulJobDescriptionRichTextNodeParentId = "siteJobs___childContentfulJobDescriptionRichTextNode___parent___id",
  SiteJobsChildContentfulJobDescriptionRichTextNodeParentChildren = "siteJobs___childContentfulJobDescriptionRichTextNode___parent___children",
  SiteJobsChildContentfulJobDescriptionRichTextNodeChildren = "siteJobs___childContentfulJobDescriptionRichTextNode___children",
  SiteJobsChildContentfulJobDescriptionRichTextNodeChildrenId = "siteJobs___childContentfulJobDescriptionRichTextNode___children___id",
  SiteJobsChildContentfulJobDescriptionRichTextNodeChildrenChildren = "siteJobs___childContentfulJobDescriptionRichTextNode___children___children",
  SiteJobsChildContentfulJobDescriptionRichTextNodeInternalContent = "siteJobs___childContentfulJobDescriptionRichTextNode___internal___content",
  SiteJobsChildContentfulJobDescriptionRichTextNodeInternalContentDigest = "siteJobs___childContentfulJobDescriptionRichTextNode___internal___contentDigest",
  SiteJobsChildContentfulJobDescriptionRichTextNodeInternalDescription = "siteJobs___childContentfulJobDescriptionRichTextNode___internal___description",
  SiteJobsChildContentfulJobDescriptionRichTextNodeInternalFieldOwners = "siteJobs___childContentfulJobDescriptionRichTextNode___internal___fieldOwners",
  SiteJobsChildContentfulJobDescriptionRichTextNodeInternalIgnoreType = "siteJobs___childContentfulJobDescriptionRichTextNode___internal___ignoreType",
  SiteJobsChildContentfulJobDescriptionRichTextNodeInternalMediaType = "siteJobs___childContentfulJobDescriptionRichTextNode___internal___mediaType",
  SiteJobsChildContentfulJobDescriptionRichTextNodeInternalOwner = "siteJobs___childContentfulJobDescriptionRichTextNode___internal___owner",
  SiteJobsChildContentfulJobDescriptionRichTextNodeInternalType = "siteJobs___childContentfulJobDescriptionRichTextNode___internal___type",
  SiteJobsChildContentfulJobDescriptionRichTextNodeContent = "siteJobs___childContentfulJobDescriptionRichTextNode___content",
  SiteJobsChildContentfulJobDescriptionRichTextNodeContentContent = "siteJobs___childContentfulJobDescriptionRichTextNode___content___content",
  SiteJobsChildContentfulJobDescriptionRichTextNodeContentNodeType = "siteJobs___childContentfulJobDescriptionRichTextNode___content___nodeType",
  SiteJobsChildContentfulJobDescriptionRichTextNodeNodeType = "siteJobs___childContentfulJobDescriptionRichTextNode___nodeType",
  SiteJobsChildContentfulJobDescriptionRichTextNodeDescription = "siteJobs___childContentfulJobDescriptionRichTextNode___description",
  SiteJobsChildContentfulJobDescriptionRichTextNodeJson = "siteJobs___childContentfulJobDescriptionRichTextNode___json",
  SitePerformances = "sitePerformances",
  SitePerformancesId = "sitePerformances___id",
  SitePerformancesParentId = "sitePerformances___parent___id",
  SitePerformancesParentParentId = "sitePerformances___parent___parent___id",
  SitePerformancesParentParentChildren = "sitePerformances___parent___parent___children",
  SitePerformancesParentChildren = "sitePerformances___parent___children",
  SitePerformancesParentChildrenId = "sitePerformances___parent___children___id",
  SitePerformancesParentChildrenChildren = "sitePerformances___parent___children___children",
  SitePerformancesParentInternalContent = "sitePerformances___parent___internal___content",
  SitePerformancesParentInternalContentDigest = "sitePerformances___parent___internal___contentDigest",
  SitePerformancesParentInternalDescription = "sitePerformances___parent___internal___description",
  SitePerformancesParentInternalFieldOwners = "sitePerformances___parent___internal___fieldOwners",
  SitePerformancesParentInternalIgnoreType = "sitePerformances___parent___internal___ignoreType",
  SitePerformancesParentInternalMediaType = "sitePerformances___parent___internal___mediaType",
  SitePerformancesParentInternalOwner = "sitePerformances___parent___internal___owner",
  SitePerformancesParentInternalType = "sitePerformances___parent___internal___type",
  SitePerformancesChildren = "sitePerformances___children",
  SitePerformancesChildrenId = "sitePerformances___children___id",
  SitePerformancesChildrenParentId = "sitePerformances___children___parent___id",
  SitePerformancesChildrenParentChildren = "sitePerformances___children___parent___children",
  SitePerformancesChildrenChildren = "sitePerformances___children___children",
  SitePerformancesChildrenChildrenId = "sitePerformances___children___children___id",
  SitePerformancesChildrenChildrenChildren = "sitePerformances___children___children___children",
  SitePerformancesChildrenInternalContent = "sitePerformances___children___internal___content",
  SitePerformancesChildrenInternalContentDigest = "sitePerformances___children___internal___contentDigest",
  SitePerformancesChildrenInternalDescription = "sitePerformances___children___internal___description",
  SitePerformancesChildrenInternalFieldOwners = "sitePerformances___children___internal___fieldOwners",
  SitePerformancesChildrenInternalIgnoreType = "sitePerformances___children___internal___ignoreType",
  SitePerformancesChildrenInternalMediaType = "sitePerformances___children___internal___mediaType",
  SitePerformancesChildrenInternalOwner = "sitePerformances___children___internal___owner",
  SitePerformancesChildrenInternalType = "sitePerformances___children___internal___type",
  SitePerformancesInternalContent = "sitePerformances___internal___content",
  SitePerformancesInternalContentDigest = "sitePerformances___internal___contentDigest",
  SitePerformancesInternalDescription = "sitePerformances___internal___description",
  SitePerformancesInternalFieldOwners = "sitePerformances___internal___fieldOwners",
  SitePerformancesInternalIgnoreType = "sitePerformances___internal___ignoreType",
  SitePerformancesInternalMediaType = "sitePerformances___internal___mediaType",
  SitePerformancesInternalOwner = "sitePerformances___internal___owner",
  SitePerformancesInternalType = "sitePerformances___internal___type",
  SitePerformancesTitle = "sitePerformances___title",
  SitePerformancesGroup = "sitePerformances___group",
  SitePerformancesRecording = "sitePerformances___recording",
  SitePerformancesYear = "sitePerformances___year",
  SitePerformancesDescriptionId = "sitePerformances___description___id",
  SitePerformancesDescriptionParentId = "sitePerformances___description___parent___id",
  SitePerformancesDescriptionParentChildren = "sitePerformances___description___parent___children",
  SitePerformancesDescriptionChildren = "sitePerformances___description___children",
  SitePerformancesDescriptionChildrenId = "sitePerformances___description___children___id",
  SitePerformancesDescriptionChildrenChildren = "sitePerformances___description___children___children",
  SitePerformancesDescriptionInternalContent = "sitePerformances___description___internal___content",
  SitePerformancesDescriptionInternalContentDigest = "sitePerformances___description___internal___contentDigest",
  SitePerformancesDescriptionInternalDescription = "sitePerformances___description___internal___description",
  SitePerformancesDescriptionInternalFieldOwners = "sitePerformances___description___internal___fieldOwners",
  SitePerformancesDescriptionInternalIgnoreType = "sitePerformances___description___internal___ignoreType",
  SitePerformancesDescriptionInternalMediaType = "sitePerformances___description___internal___mediaType",
  SitePerformancesDescriptionInternalOwner = "sitePerformances___description___internal___owner",
  SitePerformancesDescriptionInternalType = "sitePerformances___description___internal___type",
  SitePerformancesDescriptionContent = "sitePerformances___description___content",
  SitePerformancesDescriptionContentContent = "sitePerformances___description___content___content",
  SitePerformancesDescriptionContentNodeType = "sitePerformances___description___content___nodeType",
  SitePerformancesDescriptionNodeType = "sitePerformances___description___nodeType",
  SitePerformancesDescriptionDescription = "sitePerformances___description___description",
  SitePerformancesDescriptionJson = "sitePerformances___description___json",
  SitePerformancesSpaceId = "sitePerformances___spaceId",
  SitePerformancesContentfulId = "sitePerformances___contentful_id",
  SitePerformancesCreatedAt = "sitePerformances___createdAt",
  SitePerformancesUpdatedAt = "sitePerformances___updatedAt",
  SitePerformancesSysRevision = "sitePerformances___sys___revision",
  SitePerformancesNodeLocale = "sitePerformances___node_locale",
  SitePerformancesFeatured = "sitePerformances___featured",
  SitePerformancesFeaturedId = "sitePerformances___featured___id",
  SitePerformancesFeaturedParentId = "sitePerformances___featured___parent___id",
  SitePerformancesFeaturedParentChildren = "sitePerformances___featured___parent___children",
  SitePerformancesFeaturedChildren = "sitePerformances___featured___children",
  SitePerformancesFeaturedChildrenId = "sitePerformances___featured___children___id",
  SitePerformancesFeaturedChildrenChildren = "sitePerformances___featured___children___children",
  SitePerformancesFeaturedInternalContent = "sitePerformances___featured___internal___content",
  SitePerformancesFeaturedInternalContentDigest = "sitePerformances___featured___internal___contentDigest",
  SitePerformancesFeaturedInternalDescription = "sitePerformances___featured___internal___description",
  SitePerformancesFeaturedInternalFieldOwners = "sitePerformances___featured___internal___fieldOwners",
  SitePerformancesFeaturedInternalIgnoreType = "sitePerformances___featured___internal___ignoreType",
  SitePerformancesFeaturedInternalMediaType = "sitePerformances___featured___internal___mediaType",
  SitePerformancesFeaturedInternalOwner = "sitePerformances___featured___internal___owner",
  SitePerformancesFeaturedInternalType = "sitePerformances___featured___internal___type",
  SitePerformancesFeaturedTitle = "sitePerformances___featured___title",
  SitePerformancesFeaturedSiteJobs = "sitePerformances___featured___siteJobs",
  SitePerformancesFeaturedSiteJobsId = "sitePerformances___featured___siteJobs___id",
  SitePerformancesFeaturedSiteJobsChildren = "sitePerformances___featured___siteJobs___children",
  SitePerformancesFeaturedSiteJobsTitle = "sitePerformances___featured___siteJobs___title",
  SitePerformancesFeaturedSiteJobsCompany = "sitePerformances___featured___siteJobs___company",
  SitePerformancesFeaturedSiteJobsStartDate = "sitePerformances___featured___siteJobs___startDate",
  SitePerformancesFeaturedSiteJobsStartPay = "sitePerformances___featured___siteJobs___startPay",
  SitePerformancesFeaturedSiteJobsIsHourly = "sitePerformances___featured___siteJobs___isHourly",
  SitePerformancesFeaturedSiteJobsCity = "sitePerformances___featured___siteJobs___city",
  SitePerformancesFeaturedSiteJobsState = "sitePerformances___featured___siteJobs___state",
  SitePerformancesFeaturedSiteJobsSpaceId = "sitePerformances___featured___siteJobs___spaceId",
  SitePerformancesFeaturedSiteJobsContentfulId = "sitePerformances___featured___siteJobs___contentful_id",
  SitePerformancesFeaturedSiteJobsCreatedAt = "sitePerformances___featured___siteJobs___createdAt",
  SitePerformancesFeaturedSiteJobsUpdatedAt = "sitePerformances___featured___siteJobs___updatedAt",
  SitePerformancesFeaturedSiteJobsNodeLocale = "sitePerformances___featured___siteJobs___node_locale",
  SitePerformancesFeaturedSiteJobsFeatured = "sitePerformances___featured___siteJobs___featured",
  SitePerformancesFeaturedSiteJobsEndDate = "sitePerformances___featured___siteJobs___endDate",
  SitePerformancesFeaturedSiteJobsEndPay = "sitePerformances___featured___siteJobs___endPay",
  SitePerformancesFeaturedSitePerformances = "sitePerformances___featured___sitePerformances",
  SitePerformancesFeaturedSitePerformancesId = "sitePerformances___featured___sitePerformances___id",
  SitePerformancesFeaturedSitePerformancesChildren = "sitePerformances___featured___sitePerformances___children",
  SitePerformancesFeaturedSitePerformancesTitle = "sitePerformances___featured___sitePerformances___title",
  SitePerformancesFeaturedSitePerformancesGroup = "sitePerformances___featured___sitePerformances___group",
  SitePerformancesFeaturedSitePerformancesRecording = "sitePerformances___featured___sitePerformances___recording",
  SitePerformancesFeaturedSitePerformancesYear = "sitePerformances___featured___sitePerformances___year",
  SitePerformancesFeaturedSitePerformancesSpaceId = "sitePerformances___featured___sitePerformances___spaceId",
  SitePerformancesFeaturedSitePerformancesContentfulId = "sitePerformances___featured___sitePerformances___contentful_id",
  SitePerformancesFeaturedSitePerformancesCreatedAt = "sitePerformances___featured___sitePerformances___createdAt",
  SitePerformancesFeaturedSitePerformancesUpdatedAt = "sitePerformances___featured___sitePerformances___updatedAt",
  SitePerformancesFeaturedSitePerformancesNodeLocale = "sitePerformances___featured___sitePerformances___node_locale",
  SitePerformancesFeaturedSitePerformancesFeatured = "sitePerformances___featured___sitePerformances___featured",
  SitePerformancesFeaturedResumeJobs = "sitePerformances___featured___resumeJobs",
  SitePerformancesFeaturedResumeJobsId = "sitePerformances___featured___resumeJobs___id",
  SitePerformancesFeaturedResumeJobsChildren = "sitePerformances___featured___resumeJobs___children",
  SitePerformancesFeaturedResumeJobsTitle = "sitePerformances___featured___resumeJobs___title",
  SitePerformancesFeaturedResumeJobsCompany = "sitePerformances___featured___resumeJobs___company",
  SitePerformancesFeaturedResumeJobsStartDate = "sitePerformances___featured___resumeJobs___startDate",
  SitePerformancesFeaturedResumeJobsStartPay = "sitePerformances___featured___resumeJobs___startPay",
  SitePerformancesFeaturedResumeJobsIsHourly = "sitePerformances___featured___resumeJobs___isHourly",
  SitePerformancesFeaturedResumeJobsCity = "sitePerformances___featured___resumeJobs___city",
  SitePerformancesFeaturedResumeJobsState = "sitePerformances___featured___resumeJobs___state",
  SitePerformancesFeaturedResumeJobsSpaceId = "sitePerformances___featured___resumeJobs___spaceId",
  SitePerformancesFeaturedResumeJobsContentfulId = "sitePerformances___featured___resumeJobs___contentful_id",
  SitePerformancesFeaturedResumeJobsCreatedAt = "sitePerformances___featured___resumeJobs___createdAt",
  SitePerformancesFeaturedResumeJobsUpdatedAt = "sitePerformances___featured___resumeJobs___updatedAt",
  SitePerformancesFeaturedResumeJobsNodeLocale = "sitePerformances___featured___resumeJobs___node_locale",
  SitePerformancesFeaturedResumeJobsFeatured = "sitePerformances___featured___resumeJobs___featured",
  SitePerformancesFeaturedResumeJobsEndDate = "sitePerformances___featured___resumeJobs___endDate",
  SitePerformancesFeaturedResumeJobsEndPay = "sitePerformances___featured___resumeJobs___endPay",
  SitePerformancesFeaturedSpaceId = "sitePerformances___featured___spaceId",
  SitePerformancesFeaturedContentfulId = "sitePerformances___featured___contentful_id",
  SitePerformancesFeaturedCreatedAt = "sitePerformances___featured___createdAt",
  SitePerformancesFeaturedUpdatedAt = "sitePerformances___featured___updatedAt",
  SitePerformancesFeaturedSysRevision = "sitePerformances___featured___sys___revision",
  SitePerformancesFeaturedNodeLocale = "sitePerformances___featured___node_locale",
  SitePerformancesChildContentfulMusicDescriptionRichTextNodeId = "sitePerformances___childContentfulMusicDescriptionRichTextNode___id",
  SitePerformancesChildContentfulMusicDescriptionRichTextNodeParentId = "sitePerformances___childContentfulMusicDescriptionRichTextNode___parent___id",
  SitePerformancesChildContentfulMusicDescriptionRichTextNodeParentChildren = "sitePerformances___childContentfulMusicDescriptionRichTextNode___parent___children",
  SitePerformancesChildContentfulMusicDescriptionRichTextNodeChildren = "sitePerformances___childContentfulMusicDescriptionRichTextNode___children",
  SitePerformancesChildContentfulMusicDescriptionRichTextNodeChildrenId = "sitePerformances___childContentfulMusicDescriptionRichTextNode___children___id",
  SitePerformancesChildContentfulMusicDescriptionRichTextNodeChildrenChildren = "sitePerformances___childContentfulMusicDescriptionRichTextNode___children___children",
  SitePerformancesChildContentfulMusicDescriptionRichTextNodeInternalContent = "sitePerformances___childContentfulMusicDescriptionRichTextNode___internal___content",
  SitePerformancesChildContentfulMusicDescriptionRichTextNodeInternalContentDigest = "sitePerformances___childContentfulMusicDescriptionRichTextNode___internal___contentDigest",
  SitePerformancesChildContentfulMusicDescriptionRichTextNodeInternalDescription = "sitePerformances___childContentfulMusicDescriptionRichTextNode___internal___description",
  SitePerformancesChildContentfulMusicDescriptionRichTextNodeInternalFieldOwners = "sitePerformances___childContentfulMusicDescriptionRichTextNode___internal___fieldOwners",
  SitePerformancesChildContentfulMusicDescriptionRichTextNodeInternalIgnoreType = "sitePerformances___childContentfulMusicDescriptionRichTextNode___internal___ignoreType",
  SitePerformancesChildContentfulMusicDescriptionRichTextNodeInternalMediaType = "sitePerformances___childContentfulMusicDescriptionRichTextNode___internal___mediaType",
  SitePerformancesChildContentfulMusicDescriptionRichTextNodeInternalOwner = "sitePerformances___childContentfulMusicDescriptionRichTextNode___internal___owner",
  SitePerformancesChildContentfulMusicDescriptionRichTextNodeInternalType = "sitePerformances___childContentfulMusicDescriptionRichTextNode___internal___type",
  SitePerformancesChildContentfulMusicDescriptionRichTextNodeContent = "sitePerformances___childContentfulMusicDescriptionRichTextNode___content",
  SitePerformancesChildContentfulMusicDescriptionRichTextNodeContentContent = "sitePerformances___childContentfulMusicDescriptionRichTextNode___content___content",
  SitePerformancesChildContentfulMusicDescriptionRichTextNodeContentNodeType = "sitePerformances___childContentfulMusicDescriptionRichTextNode___content___nodeType",
  SitePerformancesChildContentfulMusicDescriptionRichTextNodeNodeType = "sitePerformances___childContentfulMusicDescriptionRichTextNode___nodeType",
  SitePerformancesChildContentfulMusicDescriptionRichTextNodeDescription = "sitePerformances___childContentfulMusicDescriptionRichTextNode___description",
  SitePerformancesChildContentfulMusicDescriptionRichTextNodeJson = "sitePerformances___childContentfulMusicDescriptionRichTextNode___json",
  ResumeJobs = "resumeJobs",
  ResumeJobsId = "resumeJobs___id",
  ResumeJobsParentId = "resumeJobs___parent___id",
  ResumeJobsParentParentId = "resumeJobs___parent___parent___id",
  ResumeJobsParentParentChildren = "resumeJobs___parent___parent___children",
  ResumeJobsParentChildren = "resumeJobs___parent___children",
  ResumeJobsParentChildrenId = "resumeJobs___parent___children___id",
  ResumeJobsParentChildrenChildren = "resumeJobs___parent___children___children",
  ResumeJobsParentInternalContent = "resumeJobs___parent___internal___content",
  ResumeJobsParentInternalContentDigest = "resumeJobs___parent___internal___contentDigest",
  ResumeJobsParentInternalDescription = "resumeJobs___parent___internal___description",
  ResumeJobsParentInternalFieldOwners = "resumeJobs___parent___internal___fieldOwners",
  ResumeJobsParentInternalIgnoreType = "resumeJobs___parent___internal___ignoreType",
  ResumeJobsParentInternalMediaType = "resumeJobs___parent___internal___mediaType",
  ResumeJobsParentInternalOwner = "resumeJobs___parent___internal___owner",
  ResumeJobsParentInternalType = "resumeJobs___parent___internal___type",
  ResumeJobsChildren = "resumeJobs___children",
  ResumeJobsChildrenId = "resumeJobs___children___id",
  ResumeJobsChildrenParentId = "resumeJobs___children___parent___id",
  ResumeJobsChildrenParentChildren = "resumeJobs___children___parent___children",
  ResumeJobsChildrenChildren = "resumeJobs___children___children",
  ResumeJobsChildrenChildrenId = "resumeJobs___children___children___id",
  ResumeJobsChildrenChildrenChildren = "resumeJobs___children___children___children",
  ResumeJobsChildrenInternalContent = "resumeJobs___children___internal___content",
  ResumeJobsChildrenInternalContentDigest = "resumeJobs___children___internal___contentDigest",
  ResumeJobsChildrenInternalDescription = "resumeJobs___children___internal___description",
  ResumeJobsChildrenInternalFieldOwners = "resumeJobs___children___internal___fieldOwners",
  ResumeJobsChildrenInternalIgnoreType = "resumeJobs___children___internal___ignoreType",
  ResumeJobsChildrenInternalMediaType = "resumeJobs___children___internal___mediaType",
  ResumeJobsChildrenInternalOwner = "resumeJobs___children___internal___owner",
  ResumeJobsChildrenInternalType = "resumeJobs___children___internal___type",
  ResumeJobsInternalContent = "resumeJobs___internal___content",
  ResumeJobsInternalContentDigest = "resumeJobs___internal___contentDigest",
  ResumeJobsInternalDescription = "resumeJobs___internal___description",
  ResumeJobsInternalFieldOwners = "resumeJobs___internal___fieldOwners",
  ResumeJobsInternalIgnoreType = "resumeJobs___internal___ignoreType",
  ResumeJobsInternalMediaType = "resumeJobs___internal___mediaType",
  ResumeJobsInternalOwner = "resumeJobs___internal___owner",
  ResumeJobsInternalType = "resumeJobs___internal___type",
  ResumeJobsTitle = "resumeJobs___title",
  ResumeJobsCompany = "resumeJobs___company",
  ResumeJobsLocationLon = "resumeJobs___location___lon",
  ResumeJobsLocationLat = "resumeJobs___location___lat",
  ResumeJobsStartDate = "resumeJobs___startDate",
  ResumeJobsStartPay = "resumeJobs___startPay",
  ResumeJobsIsHourly = "resumeJobs___isHourly",
  ResumeJobsCity = "resumeJobs___city",
  ResumeJobsState = "resumeJobs___state",
  ResumeJobsDescriptionId = "resumeJobs___description___id",
  ResumeJobsDescriptionParentId = "resumeJobs___description___parent___id",
  ResumeJobsDescriptionParentChildren = "resumeJobs___description___parent___children",
  ResumeJobsDescriptionChildren = "resumeJobs___description___children",
  ResumeJobsDescriptionChildrenId = "resumeJobs___description___children___id",
  ResumeJobsDescriptionChildrenChildren = "resumeJobs___description___children___children",
  ResumeJobsDescriptionInternalContent = "resumeJobs___description___internal___content",
  ResumeJobsDescriptionInternalContentDigest = "resumeJobs___description___internal___contentDigest",
  ResumeJobsDescriptionInternalDescription = "resumeJobs___description___internal___description",
  ResumeJobsDescriptionInternalFieldOwners = "resumeJobs___description___internal___fieldOwners",
  ResumeJobsDescriptionInternalIgnoreType = "resumeJobs___description___internal___ignoreType",
  ResumeJobsDescriptionInternalMediaType = "resumeJobs___description___internal___mediaType",
  ResumeJobsDescriptionInternalOwner = "resumeJobs___description___internal___owner",
  ResumeJobsDescriptionInternalType = "resumeJobs___description___internal___type",
  ResumeJobsDescriptionContent = "resumeJobs___description___content",
  ResumeJobsDescriptionContentContent = "resumeJobs___description___content___content",
  ResumeJobsDescriptionContentNodeType = "resumeJobs___description___content___nodeType",
  ResumeJobsDescriptionNodeType = "resumeJobs___description___nodeType",
  ResumeJobsDescriptionDescription = "resumeJobs___description___description",
  ResumeJobsDescriptionJson = "resumeJobs___description___json",
  ResumeJobsSpaceId = "resumeJobs___spaceId",
  ResumeJobsContentfulId = "resumeJobs___contentful_id",
  ResumeJobsCreatedAt = "resumeJobs___createdAt",
  ResumeJobsUpdatedAt = "resumeJobs___updatedAt",
  ResumeJobsSysRevision = "resumeJobs___sys___revision",
  ResumeJobsNodeLocale = "resumeJobs___node_locale",
  ResumeJobsFeatured = "resumeJobs___featured",
  ResumeJobsFeaturedId = "resumeJobs___featured___id",
  ResumeJobsFeaturedParentId = "resumeJobs___featured___parent___id",
  ResumeJobsFeaturedParentChildren = "resumeJobs___featured___parent___children",
  ResumeJobsFeaturedChildren = "resumeJobs___featured___children",
  ResumeJobsFeaturedChildrenId = "resumeJobs___featured___children___id",
  ResumeJobsFeaturedChildrenChildren = "resumeJobs___featured___children___children",
  ResumeJobsFeaturedInternalContent = "resumeJobs___featured___internal___content",
  ResumeJobsFeaturedInternalContentDigest = "resumeJobs___featured___internal___contentDigest",
  ResumeJobsFeaturedInternalDescription = "resumeJobs___featured___internal___description",
  ResumeJobsFeaturedInternalFieldOwners = "resumeJobs___featured___internal___fieldOwners",
  ResumeJobsFeaturedInternalIgnoreType = "resumeJobs___featured___internal___ignoreType",
  ResumeJobsFeaturedInternalMediaType = "resumeJobs___featured___internal___mediaType",
  ResumeJobsFeaturedInternalOwner = "resumeJobs___featured___internal___owner",
  ResumeJobsFeaturedInternalType = "resumeJobs___featured___internal___type",
  ResumeJobsFeaturedTitle = "resumeJobs___featured___title",
  ResumeJobsFeaturedSiteJobs = "resumeJobs___featured___siteJobs",
  ResumeJobsFeaturedSiteJobsId = "resumeJobs___featured___siteJobs___id",
  ResumeJobsFeaturedSiteJobsChildren = "resumeJobs___featured___siteJobs___children",
  ResumeJobsFeaturedSiteJobsTitle = "resumeJobs___featured___siteJobs___title",
  ResumeJobsFeaturedSiteJobsCompany = "resumeJobs___featured___siteJobs___company",
  ResumeJobsFeaturedSiteJobsStartDate = "resumeJobs___featured___siteJobs___startDate",
  ResumeJobsFeaturedSiteJobsStartPay = "resumeJobs___featured___siteJobs___startPay",
  ResumeJobsFeaturedSiteJobsIsHourly = "resumeJobs___featured___siteJobs___isHourly",
  ResumeJobsFeaturedSiteJobsCity = "resumeJobs___featured___siteJobs___city",
  ResumeJobsFeaturedSiteJobsState = "resumeJobs___featured___siteJobs___state",
  ResumeJobsFeaturedSiteJobsSpaceId = "resumeJobs___featured___siteJobs___spaceId",
  ResumeJobsFeaturedSiteJobsContentfulId = "resumeJobs___featured___siteJobs___contentful_id",
  ResumeJobsFeaturedSiteJobsCreatedAt = "resumeJobs___featured___siteJobs___createdAt",
  ResumeJobsFeaturedSiteJobsUpdatedAt = "resumeJobs___featured___siteJobs___updatedAt",
  ResumeJobsFeaturedSiteJobsNodeLocale = "resumeJobs___featured___siteJobs___node_locale",
  ResumeJobsFeaturedSiteJobsFeatured = "resumeJobs___featured___siteJobs___featured",
  ResumeJobsFeaturedSiteJobsEndDate = "resumeJobs___featured___siteJobs___endDate",
  ResumeJobsFeaturedSiteJobsEndPay = "resumeJobs___featured___siteJobs___endPay",
  ResumeJobsFeaturedSitePerformances = "resumeJobs___featured___sitePerformances",
  ResumeJobsFeaturedSitePerformancesId = "resumeJobs___featured___sitePerformances___id",
  ResumeJobsFeaturedSitePerformancesChildren = "resumeJobs___featured___sitePerformances___children",
  ResumeJobsFeaturedSitePerformancesTitle = "resumeJobs___featured___sitePerformances___title",
  ResumeJobsFeaturedSitePerformancesGroup = "resumeJobs___featured___sitePerformances___group",
  ResumeJobsFeaturedSitePerformancesRecording = "resumeJobs___featured___sitePerformances___recording",
  ResumeJobsFeaturedSitePerformancesYear = "resumeJobs___featured___sitePerformances___year",
  ResumeJobsFeaturedSitePerformancesSpaceId = "resumeJobs___featured___sitePerformances___spaceId",
  ResumeJobsFeaturedSitePerformancesContentfulId = "resumeJobs___featured___sitePerformances___contentful_id",
  ResumeJobsFeaturedSitePerformancesCreatedAt = "resumeJobs___featured___sitePerformances___createdAt",
  ResumeJobsFeaturedSitePerformancesUpdatedAt = "resumeJobs___featured___sitePerformances___updatedAt",
  ResumeJobsFeaturedSitePerformancesNodeLocale = "resumeJobs___featured___sitePerformances___node_locale",
  ResumeJobsFeaturedSitePerformancesFeatured = "resumeJobs___featured___sitePerformances___featured",
  ResumeJobsFeaturedResumeJobs = "resumeJobs___featured___resumeJobs",
  ResumeJobsFeaturedResumeJobsId = "resumeJobs___featured___resumeJobs___id",
  ResumeJobsFeaturedResumeJobsChildren = "resumeJobs___featured___resumeJobs___children",
  ResumeJobsFeaturedResumeJobsTitle = "resumeJobs___featured___resumeJobs___title",
  ResumeJobsFeaturedResumeJobsCompany = "resumeJobs___featured___resumeJobs___company",
  ResumeJobsFeaturedResumeJobsStartDate = "resumeJobs___featured___resumeJobs___startDate",
  ResumeJobsFeaturedResumeJobsStartPay = "resumeJobs___featured___resumeJobs___startPay",
  ResumeJobsFeaturedResumeJobsIsHourly = "resumeJobs___featured___resumeJobs___isHourly",
  ResumeJobsFeaturedResumeJobsCity = "resumeJobs___featured___resumeJobs___city",
  ResumeJobsFeaturedResumeJobsState = "resumeJobs___featured___resumeJobs___state",
  ResumeJobsFeaturedResumeJobsSpaceId = "resumeJobs___featured___resumeJobs___spaceId",
  ResumeJobsFeaturedResumeJobsContentfulId = "resumeJobs___featured___resumeJobs___contentful_id",
  ResumeJobsFeaturedResumeJobsCreatedAt = "resumeJobs___featured___resumeJobs___createdAt",
  ResumeJobsFeaturedResumeJobsUpdatedAt = "resumeJobs___featured___resumeJobs___updatedAt",
  ResumeJobsFeaturedResumeJobsNodeLocale = "resumeJobs___featured___resumeJobs___node_locale",
  ResumeJobsFeaturedResumeJobsFeatured = "resumeJobs___featured___resumeJobs___featured",
  ResumeJobsFeaturedResumeJobsEndDate = "resumeJobs___featured___resumeJobs___endDate",
  ResumeJobsFeaturedResumeJobsEndPay = "resumeJobs___featured___resumeJobs___endPay",
  ResumeJobsFeaturedSpaceId = "resumeJobs___featured___spaceId",
  ResumeJobsFeaturedContentfulId = "resumeJobs___featured___contentful_id",
  ResumeJobsFeaturedCreatedAt = "resumeJobs___featured___createdAt",
  ResumeJobsFeaturedUpdatedAt = "resumeJobs___featured___updatedAt",
  ResumeJobsFeaturedSysRevision = "resumeJobs___featured___sys___revision",
  ResumeJobsFeaturedNodeLocale = "resumeJobs___featured___node_locale",
  ResumeJobsEndDate = "resumeJobs___endDate",
  ResumeJobsEndPay = "resumeJobs___endPay",
  ResumeJobsChildContentfulJobDescriptionRichTextNodeId = "resumeJobs___childContentfulJobDescriptionRichTextNode___id",
  ResumeJobsChildContentfulJobDescriptionRichTextNodeParentId = "resumeJobs___childContentfulJobDescriptionRichTextNode___parent___id",
  ResumeJobsChildContentfulJobDescriptionRichTextNodeParentChildren = "resumeJobs___childContentfulJobDescriptionRichTextNode___parent___children",
  ResumeJobsChildContentfulJobDescriptionRichTextNodeChildren = "resumeJobs___childContentfulJobDescriptionRichTextNode___children",
  ResumeJobsChildContentfulJobDescriptionRichTextNodeChildrenId = "resumeJobs___childContentfulJobDescriptionRichTextNode___children___id",
  ResumeJobsChildContentfulJobDescriptionRichTextNodeChildrenChildren = "resumeJobs___childContentfulJobDescriptionRichTextNode___children___children",
  ResumeJobsChildContentfulJobDescriptionRichTextNodeInternalContent = "resumeJobs___childContentfulJobDescriptionRichTextNode___internal___content",
  ResumeJobsChildContentfulJobDescriptionRichTextNodeInternalContentDigest = "resumeJobs___childContentfulJobDescriptionRichTextNode___internal___contentDigest",
  ResumeJobsChildContentfulJobDescriptionRichTextNodeInternalDescription = "resumeJobs___childContentfulJobDescriptionRichTextNode___internal___description",
  ResumeJobsChildContentfulJobDescriptionRichTextNodeInternalFieldOwners = "resumeJobs___childContentfulJobDescriptionRichTextNode___internal___fieldOwners",
  ResumeJobsChildContentfulJobDescriptionRichTextNodeInternalIgnoreType = "resumeJobs___childContentfulJobDescriptionRichTextNode___internal___ignoreType",
  ResumeJobsChildContentfulJobDescriptionRichTextNodeInternalMediaType = "resumeJobs___childContentfulJobDescriptionRichTextNode___internal___mediaType",
  ResumeJobsChildContentfulJobDescriptionRichTextNodeInternalOwner = "resumeJobs___childContentfulJobDescriptionRichTextNode___internal___owner",
  ResumeJobsChildContentfulJobDescriptionRichTextNodeInternalType = "resumeJobs___childContentfulJobDescriptionRichTextNode___internal___type",
  ResumeJobsChildContentfulJobDescriptionRichTextNodeContent = "resumeJobs___childContentfulJobDescriptionRichTextNode___content",
  ResumeJobsChildContentfulJobDescriptionRichTextNodeContentContent = "resumeJobs___childContentfulJobDescriptionRichTextNode___content___content",
  ResumeJobsChildContentfulJobDescriptionRichTextNodeContentNodeType = "resumeJobs___childContentfulJobDescriptionRichTextNode___content___nodeType",
  ResumeJobsChildContentfulJobDescriptionRichTextNodeNodeType = "resumeJobs___childContentfulJobDescriptionRichTextNode___nodeType",
  ResumeJobsChildContentfulJobDescriptionRichTextNodeDescription = "resumeJobs___childContentfulJobDescriptionRichTextNode___description",
  ResumeJobsChildContentfulJobDescriptionRichTextNodeJson = "resumeJobs___childContentfulJobDescriptionRichTextNode___json",
  SpaceId = "spaceId",
  ContentfulId = "contentful_id",
  CreatedAt = "createdAt",
  UpdatedAt = "updatedAt",
  SysRevision = "sys___revision",
  SysContentTypeSysType = "sys___contentType___sys___type",
  SysContentTypeSysLinkType = "sys___contentType___sys___linkType",
  SysContentTypeSysId = "sys___contentType___sys___id",
  SysContentTypeSysContentfulId = "sys___contentType___sys___contentful_id",
  NodeLocale = "node_locale",
}

export type ContentfulFeaturedFilterInput = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  title: Maybe<StringQueryOperatorInput>;
  siteJobs: Maybe<ContentfulJobFilterListInput>;
  sitePerformances: Maybe<ContentfulMusicFilterListInput>;
  resumeJobs: Maybe<ContentfulJobFilterListInput>;
  spaceId: Maybe<StringQueryOperatorInput>;
  contentful_id: Maybe<StringQueryOperatorInput>;
  createdAt: Maybe<DateQueryOperatorInput>;
  updatedAt: Maybe<DateQueryOperatorInput>;
  sys: Maybe<ContentfulFeaturedSysFilterInput>;
  node_locale: Maybe<StringQueryOperatorInput>;
};

export type ContentfulFeaturedFilterListInput = {
  elemMatch: Maybe<ContentfulFeaturedFilterInput>;
};

export type ContentfulFeaturedGroupConnection = {
  __typename?: "ContentfulFeaturedGroupConnection";
  totalCount: Scalars["Int"];
  edges: Array<ContentfulFeaturedEdge>;
  nodes: Array<ContentfulFeatured>;
  pageInfo: PageInfo;
  field: Scalars["String"];
  fieldValue: Maybe<Scalars["String"]>;
};

export type ContentfulFeaturedSortInput = {
  fields: Maybe<Array<Maybe<ContentfulFeaturedFieldsEnum>>>;
  order: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulFeaturedSys = {
  __typename?: "ContentfulFeaturedSys";
  revision: Maybe<Scalars["Int"]>;
  contentType: Maybe<ContentfulFeaturedSysContentType>;
};

export type ContentfulFeaturedSysContentType = {
  __typename?: "ContentfulFeaturedSysContentType";
  sys: Maybe<ContentfulFeaturedSysContentTypeSys>;
};

export type ContentfulFeaturedSysContentTypeFilterInput = {
  sys: Maybe<ContentfulFeaturedSysContentTypeSysFilterInput>;
};

export type ContentfulFeaturedSysContentTypeSys = {
  __typename?: "ContentfulFeaturedSysContentTypeSys";
  type: Maybe<Scalars["String"]>;
  linkType: Maybe<Scalars["String"]>;
  id: Maybe<Scalars["String"]>;
  contentful_id: Maybe<Scalars["String"]>;
};

export type ContentfulFeaturedSysContentTypeSysFilterInput = {
  type: Maybe<StringQueryOperatorInput>;
  linkType: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  contentful_id: Maybe<StringQueryOperatorInput>;
};

export type ContentfulFeaturedSysFilterInput = {
  revision: Maybe<IntQueryOperatorInput>;
  contentType: Maybe<ContentfulFeaturedSysContentTypeFilterInput>;
};

export type ContentfulFixed = {
  __typename?: "ContentfulFixed";
  base64: Maybe<Scalars["String"]>;
  tracedSVG: Maybe<Scalars["String"]>;
  aspectRatio: Maybe<Scalars["Float"]>;
  width: Scalars["Float"];
  height: Scalars["Float"];
  src: Scalars["String"];
  srcSet: Scalars["String"];
  srcWebp: Maybe<Scalars["String"]>;
  srcSetWebp: Maybe<Scalars["String"]>;
};

export type ContentfulFixedFilterInput = {
  base64: Maybe<StringQueryOperatorInput>;
  tracedSVG: Maybe<StringQueryOperatorInput>;
  aspectRatio: Maybe<FloatQueryOperatorInput>;
  width: Maybe<FloatQueryOperatorInput>;
  height: Maybe<FloatQueryOperatorInput>;
  src: Maybe<StringQueryOperatorInput>;
  srcSet: Maybe<StringQueryOperatorInput>;
  srcWebp: Maybe<StringQueryOperatorInput>;
  srcSetWebp: Maybe<StringQueryOperatorInput>;
};

export type ContentfulFluid = {
  __typename?: "ContentfulFluid";
  base64: Maybe<Scalars["String"]>;
  tracedSVG: Maybe<Scalars["String"]>;
  aspectRatio: Scalars["Float"];
  src: Scalars["String"];
  srcSet: Scalars["String"];
  srcWebp: Maybe<Scalars["String"]>;
  srcSetWebp: Maybe<Scalars["String"]>;
  sizes: Scalars["String"];
};

export type ContentfulFluidFilterInput = {
  base64: Maybe<StringQueryOperatorInput>;
  tracedSVG: Maybe<StringQueryOperatorInput>;
  aspectRatio: Maybe<FloatQueryOperatorInput>;
  src: Maybe<StringQueryOperatorInput>;
  srcSet: Maybe<StringQueryOperatorInput>;
  srcWebp: Maybe<StringQueryOperatorInput>;
  srcSetWebp: Maybe<StringQueryOperatorInput>;
  sizes: Maybe<StringQueryOperatorInput>;
};

export enum ContentfulImageCropFocus {
  Top = "TOP",
  TopLeft = "TOP_LEFT",
  TopRight = "TOP_RIGHT",
  Bottom = "BOTTOM",
  BottomRight = "BOTTOM_RIGHT",
  BottomLeft = "BOTTOM_LEFT",
  Right = "RIGHT",
  Left = "LEFT",
  Face = "FACE",
  Faces = "FACES",
  Center = "CENTER",
}

export enum ContentfulImageFormat {
  NoChange = "NO_CHANGE",
  Jpg = "JPG",
  Png = "PNG",
  Webp = "WEBP",
}

export type ContentfulJob = Node & {
  __typename?: "ContentfulJob";
  id: Scalars["ID"];
  parent: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  title: Maybe<Scalars["String"]>;
  company: Maybe<Scalars["String"]>;
  location: Maybe<ContentfulJobLocation>;
  startDate: Maybe<Scalars["Date"]>;
  startPay: Maybe<Scalars["Float"]>;
  isHourly: Maybe<Scalars["Boolean"]>;
  city: Maybe<Scalars["String"]>;
  state: Maybe<Scalars["String"]>;
  description: Maybe<ContentfulJobDescriptionRichTextNode>;
  spaceId: Maybe<Scalars["String"]>;
  contentful_id: Maybe<Scalars["String"]>;
  createdAt: Maybe<Scalars["Date"]>;
  updatedAt: Maybe<Scalars["Date"]>;
  sys: Maybe<ContentfulJobSys>;
  node_locale: Maybe<Scalars["String"]>;
  featured: Maybe<Array<Maybe<ContentfulFeatured>>>;
  endDate: Maybe<Scalars["Date"]>;
  endPay: Maybe<Scalars["Int"]>;
  childContentfulJobDescriptionRichTextNode: Maybe<ContentfulJobDescriptionRichTextNode>;
};

export type ContentfulJobStartDateArgs = {
  formatString: Maybe<Scalars["String"]>;
  fromNow: Maybe<Scalars["Boolean"]>;
  difference: Maybe<Scalars["String"]>;
  locale: Maybe<Scalars["String"]>;
};

export type ContentfulJobCreatedAtArgs = {
  formatString: Maybe<Scalars["String"]>;
  fromNow: Maybe<Scalars["Boolean"]>;
  difference: Maybe<Scalars["String"]>;
  locale: Maybe<Scalars["String"]>;
};

export type ContentfulJobUpdatedAtArgs = {
  formatString: Maybe<Scalars["String"]>;
  fromNow: Maybe<Scalars["Boolean"]>;
  difference: Maybe<Scalars["String"]>;
  locale: Maybe<Scalars["String"]>;
};

export type ContentfulJobEndDateArgs = {
  formatString: Maybe<Scalars["String"]>;
  fromNow: Maybe<Scalars["Boolean"]>;
  difference: Maybe<Scalars["String"]>;
  locale: Maybe<Scalars["String"]>;
};

export type ContentfulJobConnection = {
  __typename?: "ContentfulJobConnection";
  totalCount: Scalars["Int"];
  edges: Array<ContentfulJobEdge>;
  nodes: Array<ContentfulJob>;
  pageInfo: PageInfo;
  distinct: Array<Scalars["String"]>;
  group: Array<ContentfulJobGroupConnection>;
};

export type ContentfulJobConnectionDistinctArgs = {
  field: ContentfulJobFieldsEnum;
};

export type ContentfulJobConnectionGroupArgs = {
  skip: Maybe<Scalars["Int"]>;
  limit: Maybe<Scalars["Int"]>;
  field: ContentfulJobFieldsEnum;
};

export type ContentfulJobDescriptionRichTextNode = Node & {
  __typename?: "contentfulJobDescriptionRichTextNode";
  id: Scalars["ID"];
  parent: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  content: Maybe<Array<Maybe<ContentfulJobDescriptionRichTextNodeContent>>>;
  nodeType: Maybe<Scalars["String"]>;
  description: Maybe<Scalars["String"]>;
  json: Maybe<Scalars["JSON"]>;
};

export type ContentfulJobDescriptionRichTextNodeConnection = {
  __typename?: "contentfulJobDescriptionRichTextNodeConnection";
  totalCount: Scalars["Int"];
  edges: Array<ContentfulJobDescriptionRichTextNodeEdge>;
  nodes: Array<ContentfulJobDescriptionRichTextNode>;
  pageInfo: PageInfo;
  distinct: Array<Scalars["String"]>;
  group: Array<ContentfulJobDescriptionRichTextNodeGroupConnection>;
};

export type ContentfulJobDescriptionRichTextNodeConnectionDistinctArgs = {
  field: ContentfulJobDescriptionRichTextNodeFieldsEnum;
};

export type ContentfulJobDescriptionRichTextNodeConnectionGroupArgs = {
  skip: Maybe<Scalars["Int"]>;
  limit: Maybe<Scalars["Int"]>;
  field: ContentfulJobDescriptionRichTextNodeFieldsEnum;
};

export type ContentfulJobDescriptionRichTextNodeContent = {
  __typename?: "contentfulJobDescriptionRichTextNodeContent";
  content: Maybe<
    Array<Maybe<ContentfulJobDescriptionRichTextNodeContentContent>>
  >;
  nodeType: Maybe<Scalars["String"]>;
};

export type ContentfulJobDescriptionRichTextNodeContentContent = {
  __typename?: "contentfulJobDescriptionRichTextNodeContentContent";
  value: Maybe<Scalars["String"]>;
  nodeType: Maybe<Scalars["String"]>;
  content: Maybe<
    Array<Maybe<ContentfulJobDescriptionRichTextNodeContentContentContent>>
  >;
};

export type ContentfulJobDescriptionRichTextNodeContentContentContent = {
  __typename?: "contentfulJobDescriptionRichTextNodeContentContentContent";
  content: Maybe<
    Array<
      Maybe<ContentfulJobDescriptionRichTextNodeContentContentContentContent>
    >
  >;
  nodeType: Maybe<Scalars["String"]>;
};

export type ContentfulJobDescriptionRichTextNodeContentContentContentContent = {
  __typename?: "contentfulJobDescriptionRichTextNodeContentContentContentContent";
  value: Maybe<Scalars["String"]>;
  nodeType: Maybe<Scalars["String"]>;
};

export type ContentfulJobDescriptionRichTextNodeContentContentContentContentFilterInput =
  {
    value: Maybe<StringQueryOperatorInput>;
    nodeType: Maybe<StringQueryOperatorInput>;
  };

export type ContentfulJobDescriptionRichTextNodeContentContentContentContentFilterListInput =
  {
    elemMatch: Maybe<ContentfulJobDescriptionRichTextNodeContentContentContentContentFilterInput>;
  };

export type ContentfulJobDescriptionRichTextNodeContentContentContentFilterInput =
  {
    content: Maybe<ContentfulJobDescriptionRichTextNodeContentContentContentContentFilterListInput>;
    nodeType: Maybe<StringQueryOperatorInput>;
  };

export type ContentfulJobDescriptionRichTextNodeContentContentContentFilterListInput =
  {
    elemMatch: Maybe<ContentfulJobDescriptionRichTextNodeContentContentContentFilterInput>;
  };

export type ContentfulJobDescriptionRichTextNodeContentContentFilterInput = {
  value: Maybe<StringQueryOperatorInput>;
  nodeType: Maybe<StringQueryOperatorInput>;
  content: Maybe<ContentfulJobDescriptionRichTextNodeContentContentContentFilterListInput>;
};

export type ContentfulJobDescriptionRichTextNodeContentContentFilterListInput =
  {
    elemMatch: Maybe<ContentfulJobDescriptionRichTextNodeContentContentFilterInput>;
  };

export type ContentfulJobDescriptionRichTextNodeContentFilterInput = {
  content: Maybe<ContentfulJobDescriptionRichTextNodeContentContentFilterListInput>;
  nodeType: Maybe<StringQueryOperatorInput>;
};

export type ContentfulJobDescriptionRichTextNodeContentFilterListInput = {
  elemMatch: Maybe<ContentfulJobDescriptionRichTextNodeContentFilterInput>;
};

export type ContentfulJobDescriptionRichTextNodeEdge = {
  __typename?: "contentfulJobDescriptionRichTextNodeEdge";
  next: Maybe<ContentfulJobDescriptionRichTextNode>;
  node: ContentfulJobDescriptionRichTextNode;
  previous: Maybe<ContentfulJobDescriptionRichTextNode>;
};

export enum ContentfulJobDescriptionRichTextNodeFieldsEnum {
  Id = "id",
  ParentId = "parent___id",
  ParentParentId = "parent___parent___id",
  ParentParentParentId = "parent___parent___parent___id",
  ParentParentParentChildren = "parent___parent___parent___children",
  ParentParentChildren = "parent___parent___children",
  ParentParentChildrenId = "parent___parent___children___id",
  ParentParentChildrenChildren = "parent___parent___children___children",
  ParentParentInternalContent = "parent___parent___internal___content",
  ParentParentInternalContentDigest = "parent___parent___internal___contentDigest",
  ParentParentInternalDescription = "parent___parent___internal___description",
  ParentParentInternalFieldOwners = "parent___parent___internal___fieldOwners",
  ParentParentInternalIgnoreType = "parent___parent___internal___ignoreType",
  ParentParentInternalMediaType = "parent___parent___internal___mediaType",
  ParentParentInternalOwner = "parent___parent___internal___owner",
  ParentParentInternalType = "parent___parent___internal___type",
  ParentChildren = "parent___children",
  ParentChildrenId = "parent___children___id",
  ParentChildrenParentId = "parent___children___parent___id",
  ParentChildrenParentChildren = "parent___children___parent___children",
  ParentChildrenChildren = "parent___children___children",
  ParentChildrenChildrenId = "parent___children___children___id",
  ParentChildrenChildrenChildren = "parent___children___children___children",
  ParentChildrenInternalContent = "parent___children___internal___content",
  ParentChildrenInternalContentDigest = "parent___children___internal___contentDigest",
  ParentChildrenInternalDescription = "parent___children___internal___description",
  ParentChildrenInternalFieldOwners = "parent___children___internal___fieldOwners",
  ParentChildrenInternalIgnoreType = "parent___children___internal___ignoreType",
  ParentChildrenInternalMediaType = "parent___children___internal___mediaType",
  ParentChildrenInternalOwner = "parent___children___internal___owner",
  ParentChildrenInternalType = "parent___children___internal___type",
  ParentInternalContent = "parent___internal___content",
  ParentInternalContentDigest = "parent___internal___contentDigest",
  ParentInternalDescription = "parent___internal___description",
  ParentInternalFieldOwners = "parent___internal___fieldOwners",
  ParentInternalIgnoreType = "parent___internal___ignoreType",
  ParentInternalMediaType = "parent___internal___mediaType",
  ParentInternalOwner = "parent___internal___owner",
  ParentInternalType = "parent___internal___type",
  Children = "children",
  ChildrenId = "children___id",
  ChildrenParentId = "children___parent___id",
  ChildrenParentParentId = "children___parent___parent___id",
  ChildrenParentParentChildren = "children___parent___parent___children",
  ChildrenParentChildren = "children___parent___children",
  ChildrenParentChildrenId = "children___parent___children___id",
  ChildrenParentChildrenChildren = "children___parent___children___children",
  ChildrenParentInternalContent = "children___parent___internal___content",
  ChildrenParentInternalContentDigest = "children___parent___internal___contentDigest",
  ChildrenParentInternalDescription = "children___parent___internal___description",
  ChildrenParentInternalFieldOwners = "children___parent___internal___fieldOwners",
  ChildrenParentInternalIgnoreType = "children___parent___internal___ignoreType",
  ChildrenParentInternalMediaType = "children___parent___internal___mediaType",
  ChildrenParentInternalOwner = "children___parent___internal___owner",
  ChildrenParentInternalType = "children___parent___internal___type",
  ChildrenChildren = "children___children",
  ChildrenChildrenId = "children___children___id",
  ChildrenChildrenParentId = "children___children___parent___id",
  ChildrenChildrenParentChildren = "children___children___parent___children",
  ChildrenChildrenChildren = "children___children___children",
  ChildrenChildrenChildrenId = "children___children___children___id",
  ChildrenChildrenChildrenChildren = "children___children___children___children",
  ChildrenChildrenInternalContent = "children___children___internal___content",
  ChildrenChildrenInternalContentDigest = "children___children___internal___contentDigest",
  ChildrenChildrenInternalDescription = "children___children___internal___description",
  ChildrenChildrenInternalFieldOwners = "children___children___internal___fieldOwners",
  ChildrenChildrenInternalIgnoreType = "children___children___internal___ignoreType",
  ChildrenChildrenInternalMediaType = "children___children___internal___mediaType",
  ChildrenChildrenInternalOwner = "children___children___internal___owner",
  ChildrenChildrenInternalType = "children___children___internal___type",
  ChildrenInternalContent = "children___internal___content",
  ChildrenInternalContentDigest = "children___internal___contentDigest",
  ChildrenInternalDescription = "children___internal___description",
  ChildrenInternalFieldOwners = "children___internal___fieldOwners",
  ChildrenInternalIgnoreType = "children___internal___ignoreType",
  ChildrenInternalMediaType = "children___internal___mediaType",
  ChildrenInternalOwner = "children___internal___owner",
  ChildrenInternalType = "children___internal___type",
  InternalContent = "internal___content",
  InternalContentDigest = "internal___contentDigest",
  InternalDescription = "internal___description",
  InternalFieldOwners = "internal___fieldOwners",
  InternalIgnoreType = "internal___ignoreType",
  InternalMediaType = "internal___mediaType",
  InternalOwner = "internal___owner",
  InternalType = "internal___type",
  Content = "content",
  ContentContent = "content___content",
  ContentContentValue = "content___content___value",
  ContentContentNodeType = "content___content___nodeType",
  ContentContentContent = "content___content___content",
  ContentContentContentContent = "content___content___content___content",
  ContentContentContentNodeType = "content___content___content___nodeType",
  ContentNodeType = "content___nodeType",
  NodeType = "nodeType",
  Description = "description",
  Json = "json",
}

export type ContentfulJobDescriptionRichTextNodeFilterInput = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  content: Maybe<ContentfulJobDescriptionRichTextNodeContentFilterListInput>;
  nodeType: Maybe<StringQueryOperatorInput>;
  description: Maybe<StringQueryOperatorInput>;
  json: Maybe<JsonQueryOperatorInput>;
};

export type ContentfulJobDescriptionRichTextNodeGroupConnection = {
  __typename?: "contentfulJobDescriptionRichTextNodeGroupConnection";
  totalCount: Scalars["Int"];
  edges: Array<ContentfulJobDescriptionRichTextNodeEdge>;
  nodes: Array<ContentfulJobDescriptionRichTextNode>;
  pageInfo: PageInfo;
  field: Scalars["String"];
  fieldValue: Maybe<Scalars["String"]>;
};

export type ContentfulJobDescriptionRichTextNodeSortInput = {
  fields: Maybe<Array<Maybe<ContentfulJobDescriptionRichTextNodeFieldsEnum>>>;
  order: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulJobEdge = {
  __typename?: "ContentfulJobEdge";
  next: Maybe<ContentfulJob>;
  node: ContentfulJob;
  previous: Maybe<ContentfulJob>;
};

export enum ContentfulJobFieldsEnum {
  Id = "id",
  ParentId = "parent___id",
  ParentParentId = "parent___parent___id",
  ParentParentParentId = "parent___parent___parent___id",
  ParentParentParentChildren = "parent___parent___parent___children",
  ParentParentChildren = "parent___parent___children",
  ParentParentChildrenId = "parent___parent___children___id",
  ParentParentChildrenChildren = "parent___parent___children___children",
  ParentParentInternalContent = "parent___parent___internal___content",
  ParentParentInternalContentDigest = "parent___parent___internal___contentDigest",
  ParentParentInternalDescription = "parent___parent___internal___description",
  ParentParentInternalFieldOwners = "parent___parent___internal___fieldOwners",
  ParentParentInternalIgnoreType = "parent___parent___internal___ignoreType",
  ParentParentInternalMediaType = "parent___parent___internal___mediaType",
  ParentParentInternalOwner = "parent___parent___internal___owner",
  ParentParentInternalType = "parent___parent___internal___type",
  ParentChildren = "parent___children",
  ParentChildrenId = "parent___children___id",
  ParentChildrenParentId = "parent___children___parent___id",
  ParentChildrenParentChildren = "parent___children___parent___children",
  ParentChildrenChildren = "parent___children___children",
  ParentChildrenChildrenId = "parent___children___children___id",
  ParentChildrenChildrenChildren = "parent___children___children___children",
  ParentChildrenInternalContent = "parent___children___internal___content",
  ParentChildrenInternalContentDigest = "parent___children___internal___contentDigest",
  ParentChildrenInternalDescription = "parent___children___internal___description",
  ParentChildrenInternalFieldOwners = "parent___children___internal___fieldOwners",
  ParentChildrenInternalIgnoreType = "parent___children___internal___ignoreType",
  ParentChildrenInternalMediaType = "parent___children___internal___mediaType",
  ParentChildrenInternalOwner = "parent___children___internal___owner",
  ParentChildrenInternalType = "parent___children___internal___type",
  ParentInternalContent = "parent___internal___content",
  ParentInternalContentDigest = "parent___internal___contentDigest",
  ParentInternalDescription = "parent___internal___description",
  ParentInternalFieldOwners = "parent___internal___fieldOwners",
  ParentInternalIgnoreType = "parent___internal___ignoreType",
  ParentInternalMediaType = "parent___internal___mediaType",
  ParentInternalOwner = "parent___internal___owner",
  ParentInternalType = "parent___internal___type",
  Children = "children",
  ChildrenId = "children___id",
  ChildrenParentId = "children___parent___id",
  ChildrenParentParentId = "children___parent___parent___id",
  ChildrenParentParentChildren = "children___parent___parent___children",
  ChildrenParentChildren = "children___parent___children",
  ChildrenParentChildrenId = "children___parent___children___id",
  ChildrenParentChildrenChildren = "children___parent___children___children",
  ChildrenParentInternalContent = "children___parent___internal___content",
  ChildrenParentInternalContentDigest = "children___parent___internal___contentDigest",
  ChildrenParentInternalDescription = "children___parent___internal___description",
  ChildrenParentInternalFieldOwners = "children___parent___internal___fieldOwners",
  ChildrenParentInternalIgnoreType = "children___parent___internal___ignoreType",
  ChildrenParentInternalMediaType = "children___parent___internal___mediaType",
  ChildrenParentInternalOwner = "children___parent___internal___owner",
  ChildrenParentInternalType = "children___parent___internal___type",
  ChildrenChildren = "children___children",
  ChildrenChildrenId = "children___children___id",
  ChildrenChildrenParentId = "children___children___parent___id",
  ChildrenChildrenParentChildren = "children___children___parent___children",
  ChildrenChildrenChildren = "children___children___children",
  ChildrenChildrenChildrenId = "children___children___children___id",
  ChildrenChildrenChildrenChildren = "children___children___children___children",
  ChildrenChildrenInternalContent = "children___children___internal___content",
  ChildrenChildrenInternalContentDigest = "children___children___internal___contentDigest",
  ChildrenChildrenInternalDescription = "children___children___internal___description",
  ChildrenChildrenInternalFieldOwners = "children___children___internal___fieldOwners",
  ChildrenChildrenInternalIgnoreType = "children___children___internal___ignoreType",
  ChildrenChildrenInternalMediaType = "children___children___internal___mediaType",
  ChildrenChildrenInternalOwner = "children___children___internal___owner",
  ChildrenChildrenInternalType = "children___children___internal___type",
  ChildrenInternalContent = "children___internal___content",
  ChildrenInternalContentDigest = "children___internal___contentDigest",
  ChildrenInternalDescription = "children___internal___description",
  ChildrenInternalFieldOwners = "children___internal___fieldOwners",
  ChildrenInternalIgnoreType = "children___internal___ignoreType",
  ChildrenInternalMediaType = "children___internal___mediaType",
  ChildrenInternalOwner = "children___internal___owner",
  ChildrenInternalType = "children___internal___type",
  InternalContent = "internal___content",
  InternalContentDigest = "internal___contentDigest",
  InternalDescription = "internal___description",
  InternalFieldOwners = "internal___fieldOwners",
  InternalIgnoreType = "internal___ignoreType",
  InternalMediaType = "internal___mediaType",
  InternalOwner = "internal___owner",
  InternalType = "internal___type",
  Title = "title",
  Company = "company",
  LocationLon = "location___lon",
  LocationLat = "location___lat",
  StartDate = "startDate",
  StartPay = "startPay",
  IsHourly = "isHourly",
  City = "city",
  State = "state",
  DescriptionId = "description___id",
  DescriptionParentId = "description___parent___id",
  DescriptionParentParentId = "description___parent___parent___id",
  DescriptionParentParentChildren = "description___parent___parent___children",
  DescriptionParentChildren = "description___parent___children",
  DescriptionParentChildrenId = "description___parent___children___id",
  DescriptionParentChildrenChildren = "description___parent___children___children",
  DescriptionParentInternalContent = "description___parent___internal___content",
  DescriptionParentInternalContentDigest = "description___parent___internal___contentDigest",
  DescriptionParentInternalDescription = "description___parent___internal___description",
  DescriptionParentInternalFieldOwners = "description___parent___internal___fieldOwners",
  DescriptionParentInternalIgnoreType = "description___parent___internal___ignoreType",
  DescriptionParentInternalMediaType = "description___parent___internal___mediaType",
  DescriptionParentInternalOwner = "description___parent___internal___owner",
  DescriptionParentInternalType = "description___parent___internal___type",
  DescriptionChildren = "description___children",
  DescriptionChildrenId = "description___children___id",
  DescriptionChildrenParentId = "description___children___parent___id",
  DescriptionChildrenParentChildren = "description___children___parent___children",
  DescriptionChildrenChildren = "description___children___children",
  DescriptionChildrenChildrenId = "description___children___children___id",
  DescriptionChildrenChildrenChildren = "description___children___children___children",
  DescriptionChildrenInternalContent = "description___children___internal___content",
  DescriptionChildrenInternalContentDigest = "description___children___internal___contentDigest",
  DescriptionChildrenInternalDescription = "description___children___internal___description",
  DescriptionChildrenInternalFieldOwners = "description___children___internal___fieldOwners",
  DescriptionChildrenInternalIgnoreType = "description___children___internal___ignoreType",
  DescriptionChildrenInternalMediaType = "description___children___internal___mediaType",
  DescriptionChildrenInternalOwner = "description___children___internal___owner",
  DescriptionChildrenInternalType = "description___children___internal___type",
  DescriptionInternalContent = "description___internal___content",
  DescriptionInternalContentDigest = "description___internal___contentDigest",
  DescriptionInternalDescription = "description___internal___description",
  DescriptionInternalFieldOwners = "description___internal___fieldOwners",
  DescriptionInternalIgnoreType = "description___internal___ignoreType",
  DescriptionInternalMediaType = "description___internal___mediaType",
  DescriptionInternalOwner = "description___internal___owner",
  DescriptionInternalType = "description___internal___type",
  DescriptionContent = "description___content",
  DescriptionContentContent = "description___content___content",
  DescriptionContentContentValue = "description___content___content___value",
  DescriptionContentContentNodeType = "description___content___content___nodeType",
  DescriptionContentContentContent = "description___content___content___content",
  DescriptionContentNodeType = "description___content___nodeType",
  DescriptionNodeType = "description___nodeType",
  DescriptionDescription = "description___description",
  DescriptionJson = "description___json",
  SpaceId = "spaceId",
  ContentfulId = "contentful_id",
  CreatedAt = "createdAt",
  UpdatedAt = "updatedAt",
  SysRevision = "sys___revision",
  SysContentTypeSysType = "sys___contentType___sys___type",
  SysContentTypeSysLinkType = "sys___contentType___sys___linkType",
  SysContentTypeSysId = "sys___contentType___sys___id",
  SysContentTypeSysContentfulId = "sys___contentType___sys___contentful_id",
  NodeLocale = "node_locale",
  Featured = "featured",
  FeaturedId = "featured___id",
  FeaturedParentId = "featured___parent___id",
  FeaturedParentParentId = "featured___parent___parent___id",
  FeaturedParentParentChildren = "featured___parent___parent___children",
  FeaturedParentChildren = "featured___parent___children",
  FeaturedParentChildrenId = "featured___parent___children___id",
  FeaturedParentChildrenChildren = "featured___parent___children___children",
  FeaturedParentInternalContent = "featured___parent___internal___content",
  FeaturedParentInternalContentDigest = "featured___parent___internal___contentDigest",
  FeaturedParentInternalDescription = "featured___parent___internal___description",
  FeaturedParentInternalFieldOwners = "featured___parent___internal___fieldOwners",
  FeaturedParentInternalIgnoreType = "featured___parent___internal___ignoreType",
  FeaturedParentInternalMediaType = "featured___parent___internal___mediaType",
  FeaturedParentInternalOwner = "featured___parent___internal___owner",
  FeaturedParentInternalType = "featured___parent___internal___type",
  FeaturedChildren = "featured___children",
  FeaturedChildrenId = "featured___children___id",
  FeaturedChildrenParentId = "featured___children___parent___id",
  FeaturedChildrenParentChildren = "featured___children___parent___children",
  FeaturedChildrenChildren = "featured___children___children",
  FeaturedChildrenChildrenId = "featured___children___children___id",
  FeaturedChildrenChildrenChildren = "featured___children___children___children",
  FeaturedChildrenInternalContent = "featured___children___internal___content",
  FeaturedChildrenInternalContentDigest = "featured___children___internal___contentDigest",
  FeaturedChildrenInternalDescription = "featured___children___internal___description",
  FeaturedChildrenInternalFieldOwners = "featured___children___internal___fieldOwners",
  FeaturedChildrenInternalIgnoreType = "featured___children___internal___ignoreType",
  FeaturedChildrenInternalMediaType = "featured___children___internal___mediaType",
  FeaturedChildrenInternalOwner = "featured___children___internal___owner",
  FeaturedChildrenInternalType = "featured___children___internal___type",
  FeaturedInternalContent = "featured___internal___content",
  FeaturedInternalContentDigest = "featured___internal___contentDigest",
  FeaturedInternalDescription = "featured___internal___description",
  FeaturedInternalFieldOwners = "featured___internal___fieldOwners",
  FeaturedInternalIgnoreType = "featured___internal___ignoreType",
  FeaturedInternalMediaType = "featured___internal___mediaType",
  FeaturedInternalOwner = "featured___internal___owner",
  FeaturedInternalType = "featured___internal___type",
  FeaturedTitle = "featured___title",
  FeaturedSiteJobs = "featured___siteJobs",
  FeaturedSiteJobsId = "featured___siteJobs___id",
  FeaturedSiteJobsParentId = "featured___siteJobs___parent___id",
  FeaturedSiteJobsParentChildren = "featured___siteJobs___parent___children",
  FeaturedSiteJobsChildren = "featured___siteJobs___children",
  FeaturedSiteJobsChildrenId = "featured___siteJobs___children___id",
  FeaturedSiteJobsChildrenChildren = "featured___siteJobs___children___children",
  FeaturedSiteJobsInternalContent = "featured___siteJobs___internal___content",
  FeaturedSiteJobsInternalContentDigest = "featured___siteJobs___internal___contentDigest",
  FeaturedSiteJobsInternalDescription = "featured___siteJobs___internal___description",
  FeaturedSiteJobsInternalFieldOwners = "featured___siteJobs___internal___fieldOwners",
  FeaturedSiteJobsInternalIgnoreType = "featured___siteJobs___internal___ignoreType",
  FeaturedSiteJobsInternalMediaType = "featured___siteJobs___internal___mediaType",
  FeaturedSiteJobsInternalOwner = "featured___siteJobs___internal___owner",
  FeaturedSiteJobsInternalType = "featured___siteJobs___internal___type",
  FeaturedSiteJobsTitle = "featured___siteJobs___title",
  FeaturedSiteJobsCompany = "featured___siteJobs___company",
  FeaturedSiteJobsLocationLon = "featured___siteJobs___location___lon",
  FeaturedSiteJobsLocationLat = "featured___siteJobs___location___lat",
  FeaturedSiteJobsStartDate = "featured___siteJobs___startDate",
  FeaturedSiteJobsStartPay = "featured___siteJobs___startPay",
  FeaturedSiteJobsIsHourly = "featured___siteJobs___isHourly",
  FeaturedSiteJobsCity = "featured___siteJobs___city",
  FeaturedSiteJobsState = "featured___siteJobs___state",
  FeaturedSiteJobsDescriptionId = "featured___siteJobs___description___id",
  FeaturedSiteJobsDescriptionChildren = "featured___siteJobs___description___children",
  FeaturedSiteJobsDescriptionContent = "featured___siteJobs___description___content",
  FeaturedSiteJobsDescriptionNodeType = "featured___siteJobs___description___nodeType",
  FeaturedSiteJobsDescriptionDescription = "featured___siteJobs___description___description",
  FeaturedSiteJobsDescriptionJson = "featured___siteJobs___description___json",
  FeaturedSiteJobsSpaceId = "featured___siteJobs___spaceId",
  FeaturedSiteJobsContentfulId = "featured___siteJobs___contentful_id",
  FeaturedSiteJobsCreatedAt = "featured___siteJobs___createdAt",
  FeaturedSiteJobsUpdatedAt = "featured___siteJobs___updatedAt",
  FeaturedSiteJobsSysRevision = "featured___siteJobs___sys___revision",
  FeaturedSiteJobsNodeLocale = "featured___siteJobs___node_locale",
  FeaturedSiteJobsFeatured = "featured___siteJobs___featured",
  FeaturedSiteJobsFeaturedId = "featured___siteJobs___featured___id",
  FeaturedSiteJobsFeaturedChildren = "featured___siteJobs___featured___children",
  FeaturedSiteJobsFeaturedTitle = "featured___siteJobs___featured___title",
  FeaturedSiteJobsFeaturedSiteJobs = "featured___siteJobs___featured___siteJobs",
  FeaturedSiteJobsFeaturedSitePerformances = "featured___siteJobs___featured___sitePerformances",
  FeaturedSiteJobsFeaturedResumeJobs = "featured___siteJobs___featured___resumeJobs",
  FeaturedSiteJobsFeaturedSpaceId = "featured___siteJobs___featured___spaceId",
  FeaturedSiteJobsFeaturedContentfulId = "featured___siteJobs___featured___contentful_id",
  FeaturedSiteJobsFeaturedCreatedAt = "featured___siteJobs___featured___createdAt",
  FeaturedSiteJobsFeaturedUpdatedAt = "featured___siteJobs___featured___updatedAt",
  FeaturedSiteJobsFeaturedNodeLocale = "featured___siteJobs___featured___node_locale",
  FeaturedSiteJobsEndDate = "featured___siteJobs___endDate",
  FeaturedSiteJobsEndPay = "featured___siteJobs___endPay",
  FeaturedSiteJobsChildContentfulJobDescriptionRichTextNodeId = "featured___siteJobs___childContentfulJobDescriptionRichTextNode___id",
  FeaturedSiteJobsChildContentfulJobDescriptionRichTextNodeChildren = "featured___siteJobs___childContentfulJobDescriptionRichTextNode___children",
  FeaturedSiteJobsChildContentfulJobDescriptionRichTextNodeContent = "featured___siteJobs___childContentfulJobDescriptionRichTextNode___content",
  FeaturedSiteJobsChildContentfulJobDescriptionRichTextNodeNodeType = "featured___siteJobs___childContentfulJobDescriptionRichTextNode___nodeType",
  FeaturedSiteJobsChildContentfulJobDescriptionRichTextNodeDescription = "featured___siteJobs___childContentfulJobDescriptionRichTextNode___description",
  FeaturedSiteJobsChildContentfulJobDescriptionRichTextNodeJson = "featured___siteJobs___childContentfulJobDescriptionRichTextNode___json",
  FeaturedSitePerformances = "featured___sitePerformances",
  FeaturedSitePerformancesId = "featured___sitePerformances___id",
  FeaturedSitePerformancesParentId = "featured___sitePerformances___parent___id",
  FeaturedSitePerformancesParentChildren = "featured___sitePerformances___parent___children",
  FeaturedSitePerformancesChildren = "featured___sitePerformances___children",
  FeaturedSitePerformancesChildrenId = "featured___sitePerformances___children___id",
  FeaturedSitePerformancesChildrenChildren = "featured___sitePerformances___children___children",
  FeaturedSitePerformancesInternalContent = "featured___sitePerformances___internal___content",
  FeaturedSitePerformancesInternalContentDigest = "featured___sitePerformances___internal___contentDigest",
  FeaturedSitePerformancesInternalDescription = "featured___sitePerformances___internal___description",
  FeaturedSitePerformancesInternalFieldOwners = "featured___sitePerformances___internal___fieldOwners",
  FeaturedSitePerformancesInternalIgnoreType = "featured___sitePerformances___internal___ignoreType",
  FeaturedSitePerformancesInternalMediaType = "featured___sitePerformances___internal___mediaType",
  FeaturedSitePerformancesInternalOwner = "featured___sitePerformances___internal___owner",
  FeaturedSitePerformancesInternalType = "featured___sitePerformances___internal___type",
  FeaturedSitePerformancesTitle = "featured___sitePerformances___title",
  FeaturedSitePerformancesGroup = "featured___sitePerformances___group",
  FeaturedSitePerformancesRecording = "featured___sitePerformances___recording",
  FeaturedSitePerformancesYear = "featured___sitePerformances___year",
  FeaturedSitePerformancesDescriptionId = "featured___sitePerformances___description___id",
  FeaturedSitePerformancesDescriptionChildren = "featured___sitePerformances___description___children",
  FeaturedSitePerformancesDescriptionContent = "featured___sitePerformances___description___content",
  FeaturedSitePerformancesDescriptionNodeType = "featured___sitePerformances___description___nodeType",
  FeaturedSitePerformancesDescriptionDescription = "featured___sitePerformances___description___description",
  FeaturedSitePerformancesDescriptionJson = "featured___sitePerformances___description___json",
  FeaturedSitePerformancesSpaceId = "featured___sitePerformances___spaceId",
  FeaturedSitePerformancesContentfulId = "featured___sitePerformances___contentful_id",
  FeaturedSitePerformancesCreatedAt = "featured___sitePerformances___createdAt",
  FeaturedSitePerformancesUpdatedAt = "featured___sitePerformances___updatedAt",
  FeaturedSitePerformancesSysRevision = "featured___sitePerformances___sys___revision",
  FeaturedSitePerformancesNodeLocale = "featured___sitePerformances___node_locale",
  FeaturedSitePerformancesFeatured = "featured___sitePerformances___featured",
  FeaturedSitePerformancesFeaturedId = "featured___sitePerformances___featured___id",
  FeaturedSitePerformancesFeaturedChildren = "featured___sitePerformances___featured___children",
  FeaturedSitePerformancesFeaturedTitle = "featured___sitePerformances___featured___title",
  FeaturedSitePerformancesFeaturedSiteJobs = "featured___sitePerformances___featured___siteJobs",
  FeaturedSitePerformancesFeaturedSitePerformances = "featured___sitePerformances___featured___sitePerformances",
  FeaturedSitePerformancesFeaturedResumeJobs = "featured___sitePerformances___featured___resumeJobs",
  FeaturedSitePerformancesFeaturedSpaceId = "featured___sitePerformances___featured___spaceId",
  FeaturedSitePerformancesFeaturedContentfulId = "featured___sitePerformances___featured___contentful_id",
  FeaturedSitePerformancesFeaturedCreatedAt = "featured___sitePerformances___featured___createdAt",
  FeaturedSitePerformancesFeaturedUpdatedAt = "featured___sitePerformances___featured___updatedAt",
  FeaturedSitePerformancesFeaturedNodeLocale = "featured___sitePerformances___featured___node_locale",
  FeaturedSitePerformancesChildContentfulMusicDescriptionRichTextNodeId = "featured___sitePerformances___childContentfulMusicDescriptionRichTextNode___id",
  FeaturedSitePerformancesChildContentfulMusicDescriptionRichTextNodeChildren = "featured___sitePerformances___childContentfulMusicDescriptionRichTextNode___children",
  FeaturedSitePerformancesChildContentfulMusicDescriptionRichTextNodeContent = "featured___sitePerformances___childContentfulMusicDescriptionRichTextNode___content",
  FeaturedSitePerformancesChildContentfulMusicDescriptionRichTextNodeNodeType = "featured___sitePerformances___childContentfulMusicDescriptionRichTextNode___nodeType",
  FeaturedSitePerformancesChildContentfulMusicDescriptionRichTextNodeDescription = "featured___sitePerformances___childContentfulMusicDescriptionRichTextNode___description",
  FeaturedSitePerformancesChildContentfulMusicDescriptionRichTextNodeJson = "featured___sitePerformances___childContentfulMusicDescriptionRichTextNode___json",
  FeaturedResumeJobs = "featured___resumeJobs",
  FeaturedResumeJobsId = "featured___resumeJobs___id",
  FeaturedResumeJobsParentId = "featured___resumeJobs___parent___id",
  FeaturedResumeJobsParentChildren = "featured___resumeJobs___parent___children",
  FeaturedResumeJobsChildren = "featured___resumeJobs___children",
  FeaturedResumeJobsChildrenId = "featured___resumeJobs___children___id",
  FeaturedResumeJobsChildrenChildren = "featured___resumeJobs___children___children",
  FeaturedResumeJobsInternalContent = "featured___resumeJobs___internal___content",
  FeaturedResumeJobsInternalContentDigest = "featured___resumeJobs___internal___contentDigest",
  FeaturedResumeJobsInternalDescription = "featured___resumeJobs___internal___description",
  FeaturedResumeJobsInternalFieldOwners = "featured___resumeJobs___internal___fieldOwners",
  FeaturedResumeJobsInternalIgnoreType = "featured___resumeJobs___internal___ignoreType",
  FeaturedResumeJobsInternalMediaType = "featured___resumeJobs___internal___mediaType",
  FeaturedResumeJobsInternalOwner = "featured___resumeJobs___internal___owner",
  FeaturedResumeJobsInternalType = "featured___resumeJobs___internal___type",
  FeaturedResumeJobsTitle = "featured___resumeJobs___title",
  FeaturedResumeJobsCompany = "featured___resumeJobs___company",
  FeaturedResumeJobsLocationLon = "featured___resumeJobs___location___lon",
  FeaturedResumeJobsLocationLat = "featured___resumeJobs___location___lat",
  FeaturedResumeJobsStartDate = "featured___resumeJobs___startDate",
  FeaturedResumeJobsStartPay = "featured___resumeJobs___startPay",
  FeaturedResumeJobsIsHourly = "featured___resumeJobs___isHourly",
  FeaturedResumeJobsCity = "featured___resumeJobs___city",
  FeaturedResumeJobsState = "featured___resumeJobs___state",
  FeaturedResumeJobsDescriptionId = "featured___resumeJobs___description___id",
  FeaturedResumeJobsDescriptionChildren = "featured___resumeJobs___description___children",
  FeaturedResumeJobsDescriptionContent = "featured___resumeJobs___description___content",
  FeaturedResumeJobsDescriptionNodeType = "featured___resumeJobs___description___nodeType",
  FeaturedResumeJobsDescriptionDescription = "featured___resumeJobs___description___description",
  FeaturedResumeJobsDescriptionJson = "featured___resumeJobs___description___json",
  FeaturedResumeJobsSpaceId = "featured___resumeJobs___spaceId",
  FeaturedResumeJobsContentfulId = "featured___resumeJobs___contentful_id",
  FeaturedResumeJobsCreatedAt = "featured___resumeJobs___createdAt",
  FeaturedResumeJobsUpdatedAt = "featured___resumeJobs___updatedAt",
  FeaturedResumeJobsSysRevision = "featured___resumeJobs___sys___revision",
  FeaturedResumeJobsNodeLocale = "featured___resumeJobs___node_locale",
  FeaturedResumeJobsFeatured = "featured___resumeJobs___featured",
  FeaturedResumeJobsFeaturedId = "featured___resumeJobs___featured___id",
  FeaturedResumeJobsFeaturedChildren = "featured___resumeJobs___featured___children",
  FeaturedResumeJobsFeaturedTitle = "featured___resumeJobs___featured___title",
  FeaturedResumeJobsFeaturedSiteJobs = "featured___resumeJobs___featured___siteJobs",
  FeaturedResumeJobsFeaturedSitePerformances = "featured___resumeJobs___featured___sitePerformances",
  FeaturedResumeJobsFeaturedResumeJobs = "featured___resumeJobs___featured___resumeJobs",
  FeaturedResumeJobsFeaturedSpaceId = "featured___resumeJobs___featured___spaceId",
  FeaturedResumeJobsFeaturedContentfulId = "featured___resumeJobs___featured___contentful_id",
  FeaturedResumeJobsFeaturedCreatedAt = "featured___resumeJobs___featured___createdAt",
  FeaturedResumeJobsFeaturedUpdatedAt = "featured___resumeJobs___featured___updatedAt",
  FeaturedResumeJobsFeaturedNodeLocale = "featured___resumeJobs___featured___node_locale",
  FeaturedResumeJobsEndDate = "featured___resumeJobs___endDate",
  FeaturedResumeJobsEndPay = "featured___resumeJobs___endPay",
  FeaturedResumeJobsChildContentfulJobDescriptionRichTextNodeId = "featured___resumeJobs___childContentfulJobDescriptionRichTextNode___id",
  FeaturedResumeJobsChildContentfulJobDescriptionRichTextNodeChildren = "featured___resumeJobs___childContentfulJobDescriptionRichTextNode___children",
  FeaturedResumeJobsChildContentfulJobDescriptionRichTextNodeContent = "featured___resumeJobs___childContentfulJobDescriptionRichTextNode___content",
  FeaturedResumeJobsChildContentfulJobDescriptionRichTextNodeNodeType = "featured___resumeJobs___childContentfulJobDescriptionRichTextNode___nodeType",
  FeaturedResumeJobsChildContentfulJobDescriptionRichTextNodeDescription = "featured___resumeJobs___childContentfulJobDescriptionRichTextNode___description",
  FeaturedResumeJobsChildContentfulJobDescriptionRichTextNodeJson = "featured___resumeJobs___childContentfulJobDescriptionRichTextNode___json",
  FeaturedSpaceId = "featured___spaceId",
  FeaturedContentfulId = "featured___contentful_id",
  FeaturedCreatedAt = "featured___createdAt",
  FeaturedUpdatedAt = "featured___updatedAt",
  FeaturedSysRevision = "featured___sys___revision",
  FeaturedNodeLocale = "featured___node_locale",
  EndDate = "endDate",
  EndPay = "endPay",
  ChildContentfulJobDescriptionRichTextNodeId = "childContentfulJobDescriptionRichTextNode___id",
  ChildContentfulJobDescriptionRichTextNodeParentId = "childContentfulJobDescriptionRichTextNode___parent___id",
  ChildContentfulJobDescriptionRichTextNodeParentParentId = "childContentfulJobDescriptionRichTextNode___parent___parent___id",
  ChildContentfulJobDescriptionRichTextNodeParentParentChildren = "childContentfulJobDescriptionRichTextNode___parent___parent___children",
  ChildContentfulJobDescriptionRichTextNodeParentChildren = "childContentfulJobDescriptionRichTextNode___parent___children",
  ChildContentfulJobDescriptionRichTextNodeParentChildrenId = "childContentfulJobDescriptionRichTextNode___parent___children___id",
  ChildContentfulJobDescriptionRichTextNodeParentChildrenChildren = "childContentfulJobDescriptionRichTextNode___parent___children___children",
  ChildContentfulJobDescriptionRichTextNodeParentInternalContent = "childContentfulJobDescriptionRichTextNode___parent___internal___content",
  ChildContentfulJobDescriptionRichTextNodeParentInternalContentDigest = "childContentfulJobDescriptionRichTextNode___parent___internal___contentDigest",
  ChildContentfulJobDescriptionRichTextNodeParentInternalDescription = "childContentfulJobDescriptionRichTextNode___parent___internal___description",
  ChildContentfulJobDescriptionRichTextNodeParentInternalFieldOwners = "childContentfulJobDescriptionRichTextNode___parent___internal___fieldOwners",
  ChildContentfulJobDescriptionRichTextNodeParentInternalIgnoreType = "childContentfulJobDescriptionRichTextNode___parent___internal___ignoreType",
  ChildContentfulJobDescriptionRichTextNodeParentInternalMediaType = "childContentfulJobDescriptionRichTextNode___parent___internal___mediaType",
  ChildContentfulJobDescriptionRichTextNodeParentInternalOwner = "childContentfulJobDescriptionRichTextNode___parent___internal___owner",
  ChildContentfulJobDescriptionRichTextNodeParentInternalType = "childContentfulJobDescriptionRichTextNode___parent___internal___type",
  ChildContentfulJobDescriptionRichTextNodeChildren = "childContentfulJobDescriptionRichTextNode___children",
  ChildContentfulJobDescriptionRichTextNodeChildrenId = "childContentfulJobDescriptionRichTextNode___children___id",
  ChildContentfulJobDescriptionRichTextNodeChildrenParentId = "childContentfulJobDescriptionRichTextNode___children___parent___id",
  ChildContentfulJobDescriptionRichTextNodeChildrenParentChildren = "childContentfulJobDescriptionRichTextNode___children___parent___children",
  ChildContentfulJobDescriptionRichTextNodeChildrenChildren = "childContentfulJobDescriptionRichTextNode___children___children",
  ChildContentfulJobDescriptionRichTextNodeChildrenChildrenId = "childContentfulJobDescriptionRichTextNode___children___children___id",
  ChildContentfulJobDescriptionRichTextNodeChildrenChildrenChildren = "childContentfulJobDescriptionRichTextNode___children___children___children",
  ChildContentfulJobDescriptionRichTextNodeChildrenInternalContent = "childContentfulJobDescriptionRichTextNode___children___internal___content",
  ChildContentfulJobDescriptionRichTextNodeChildrenInternalContentDigest = "childContentfulJobDescriptionRichTextNode___children___internal___contentDigest",
  ChildContentfulJobDescriptionRichTextNodeChildrenInternalDescription = "childContentfulJobDescriptionRichTextNode___children___internal___description",
  ChildContentfulJobDescriptionRichTextNodeChildrenInternalFieldOwners = "childContentfulJobDescriptionRichTextNode___children___internal___fieldOwners",
  ChildContentfulJobDescriptionRichTextNodeChildrenInternalIgnoreType = "childContentfulJobDescriptionRichTextNode___children___internal___ignoreType",
  ChildContentfulJobDescriptionRichTextNodeChildrenInternalMediaType = "childContentfulJobDescriptionRichTextNode___children___internal___mediaType",
  ChildContentfulJobDescriptionRichTextNodeChildrenInternalOwner = "childContentfulJobDescriptionRichTextNode___children___internal___owner",
  ChildContentfulJobDescriptionRichTextNodeChildrenInternalType = "childContentfulJobDescriptionRichTextNode___children___internal___type",
  ChildContentfulJobDescriptionRichTextNodeInternalContent = "childContentfulJobDescriptionRichTextNode___internal___content",
  ChildContentfulJobDescriptionRichTextNodeInternalContentDigest = "childContentfulJobDescriptionRichTextNode___internal___contentDigest",
  ChildContentfulJobDescriptionRichTextNodeInternalDescription = "childContentfulJobDescriptionRichTextNode___internal___description",
  ChildContentfulJobDescriptionRichTextNodeInternalFieldOwners = "childContentfulJobDescriptionRichTextNode___internal___fieldOwners",
  ChildContentfulJobDescriptionRichTextNodeInternalIgnoreType = "childContentfulJobDescriptionRichTextNode___internal___ignoreType",
  ChildContentfulJobDescriptionRichTextNodeInternalMediaType = "childContentfulJobDescriptionRichTextNode___internal___mediaType",
  ChildContentfulJobDescriptionRichTextNodeInternalOwner = "childContentfulJobDescriptionRichTextNode___internal___owner",
  ChildContentfulJobDescriptionRichTextNodeInternalType = "childContentfulJobDescriptionRichTextNode___internal___type",
  ChildContentfulJobDescriptionRichTextNodeContent = "childContentfulJobDescriptionRichTextNode___content",
  ChildContentfulJobDescriptionRichTextNodeContentContent = "childContentfulJobDescriptionRichTextNode___content___content",
  ChildContentfulJobDescriptionRichTextNodeContentContentValue = "childContentfulJobDescriptionRichTextNode___content___content___value",
  ChildContentfulJobDescriptionRichTextNodeContentContentNodeType = "childContentfulJobDescriptionRichTextNode___content___content___nodeType",
  ChildContentfulJobDescriptionRichTextNodeContentContentContent = "childContentfulJobDescriptionRichTextNode___content___content___content",
  ChildContentfulJobDescriptionRichTextNodeContentNodeType = "childContentfulJobDescriptionRichTextNode___content___nodeType",
  ChildContentfulJobDescriptionRichTextNodeNodeType = "childContentfulJobDescriptionRichTextNode___nodeType",
  ChildContentfulJobDescriptionRichTextNodeDescription = "childContentfulJobDescriptionRichTextNode___description",
  ChildContentfulJobDescriptionRichTextNodeJson = "childContentfulJobDescriptionRichTextNode___json",
}

export type ContentfulJobFilterInput = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  title: Maybe<StringQueryOperatorInput>;
  company: Maybe<StringQueryOperatorInput>;
  location: Maybe<ContentfulJobLocationFilterInput>;
  startDate: Maybe<DateQueryOperatorInput>;
  startPay: Maybe<FloatQueryOperatorInput>;
  isHourly: Maybe<BooleanQueryOperatorInput>;
  city: Maybe<StringQueryOperatorInput>;
  state: Maybe<StringQueryOperatorInput>;
  description: Maybe<ContentfulJobDescriptionRichTextNodeFilterInput>;
  spaceId: Maybe<StringQueryOperatorInput>;
  contentful_id: Maybe<StringQueryOperatorInput>;
  createdAt: Maybe<DateQueryOperatorInput>;
  updatedAt: Maybe<DateQueryOperatorInput>;
  sys: Maybe<ContentfulJobSysFilterInput>;
  node_locale: Maybe<StringQueryOperatorInput>;
  featured: Maybe<ContentfulFeaturedFilterListInput>;
  endDate: Maybe<DateQueryOperatorInput>;
  endPay: Maybe<IntQueryOperatorInput>;
  childContentfulJobDescriptionRichTextNode: Maybe<ContentfulJobDescriptionRichTextNodeFilterInput>;
};

export type ContentfulJobFilterListInput = {
  elemMatch: Maybe<ContentfulJobFilterInput>;
};

export type ContentfulJobGroupConnection = {
  __typename?: "ContentfulJobGroupConnection";
  totalCount: Scalars["Int"];
  edges: Array<ContentfulJobEdge>;
  nodes: Array<ContentfulJob>;
  pageInfo: PageInfo;
  field: Scalars["String"];
  fieldValue: Maybe<Scalars["String"]>;
};

export type ContentfulJobLocation = {
  __typename?: "ContentfulJobLocation";
  lon: Maybe<Scalars["Float"]>;
  lat: Maybe<Scalars["Float"]>;
};

export type ContentfulJobLocationFilterInput = {
  lon: Maybe<FloatQueryOperatorInput>;
  lat: Maybe<FloatQueryOperatorInput>;
};

export type ContentfulJobSortInput = {
  fields: Maybe<Array<Maybe<ContentfulJobFieldsEnum>>>;
  order: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulJobSys = {
  __typename?: "ContentfulJobSys";
  revision: Maybe<Scalars["Int"]>;
  contentType: Maybe<ContentfulJobSysContentType>;
};

export type ContentfulJobSysContentType = {
  __typename?: "ContentfulJobSysContentType";
  sys: Maybe<ContentfulJobSysContentTypeSys>;
};

export type ContentfulJobSysContentTypeFilterInput = {
  sys: Maybe<ContentfulJobSysContentTypeSysFilterInput>;
};

export type ContentfulJobSysContentTypeSys = {
  __typename?: "ContentfulJobSysContentTypeSys";
  type: Maybe<Scalars["String"]>;
  linkType: Maybe<Scalars["String"]>;
  id: Maybe<Scalars["String"]>;
  contentful_id: Maybe<Scalars["String"]>;
};

export type ContentfulJobSysContentTypeSysFilterInput = {
  type: Maybe<StringQueryOperatorInput>;
  linkType: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  contentful_id: Maybe<StringQueryOperatorInput>;
};

export type ContentfulJobSysFilterInput = {
  revision: Maybe<IntQueryOperatorInput>;
  contentType: Maybe<ContentfulJobSysContentTypeFilterInput>;
};

export type ContentfulMusic = Node & {
  __typename?: "ContentfulMusic";
  id: Scalars["ID"];
  parent: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  title: Maybe<Scalars["String"]>;
  group: Maybe<Scalars["String"]>;
  recording: Maybe<Scalars["String"]>;
  year: Maybe<Scalars["Int"]>;
  description: Maybe<ContentfulMusicDescriptionRichTextNode>;
  spaceId: Maybe<Scalars["String"]>;
  contentful_id: Maybe<Scalars["String"]>;
  createdAt: Maybe<Scalars["Date"]>;
  updatedAt: Maybe<Scalars["Date"]>;
  sys: Maybe<ContentfulMusicSys>;
  node_locale: Maybe<Scalars["String"]>;
  featured: Maybe<Array<Maybe<ContentfulFeatured>>>;
  childContentfulMusicDescriptionRichTextNode: Maybe<ContentfulMusicDescriptionRichTextNode>;
};

export type ContentfulMusicCreatedAtArgs = {
  formatString: Maybe<Scalars["String"]>;
  fromNow: Maybe<Scalars["Boolean"]>;
  difference: Maybe<Scalars["String"]>;
  locale: Maybe<Scalars["String"]>;
};

export type ContentfulMusicUpdatedAtArgs = {
  formatString: Maybe<Scalars["String"]>;
  fromNow: Maybe<Scalars["Boolean"]>;
  difference: Maybe<Scalars["String"]>;
  locale: Maybe<Scalars["String"]>;
};

export type ContentfulMusicConnection = {
  __typename?: "ContentfulMusicConnection";
  totalCount: Scalars["Int"];
  edges: Array<ContentfulMusicEdge>;
  nodes: Array<ContentfulMusic>;
  pageInfo: PageInfo;
  distinct: Array<Scalars["String"]>;
  group: Array<ContentfulMusicGroupConnection>;
};

export type ContentfulMusicConnectionDistinctArgs = {
  field: ContentfulMusicFieldsEnum;
};

export type ContentfulMusicConnectionGroupArgs = {
  skip: Maybe<Scalars["Int"]>;
  limit: Maybe<Scalars["Int"]>;
  field: ContentfulMusicFieldsEnum;
};

export type ContentfulMusicDescriptionRichTextNode = Node & {
  __typename?: "contentfulMusicDescriptionRichTextNode";
  id: Scalars["ID"];
  parent: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  content: Maybe<Array<Maybe<ContentfulMusicDescriptionRichTextNodeContent>>>;
  nodeType: Maybe<Scalars["String"]>;
  description: Maybe<Scalars["String"]>;
  json: Maybe<Scalars["JSON"]>;
};

export type ContentfulMusicDescriptionRichTextNodeConnection = {
  __typename?: "contentfulMusicDescriptionRichTextNodeConnection";
  totalCount: Scalars["Int"];
  edges: Array<ContentfulMusicDescriptionRichTextNodeEdge>;
  nodes: Array<ContentfulMusicDescriptionRichTextNode>;
  pageInfo: PageInfo;
  distinct: Array<Scalars["String"]>;
  group: Array<ContentfulMusicDescriptionRichTextNodeGroupConnection>;
};

export type ContentfulMusicDescriptionRichTextNodeConnectionDistinctArgs = {
  field: ContentfulMusicDescriptionRichTextNodeFieldsEnum;
};

export type ContentfulMusicDescriptionRichTextNodeConnectionGroupArgs = {
  skip: Maybe<Scalars["Int"]>;
  limit: Maybe<Scalars["Int"]>;
  field: ContentfulMusicDescriptionRichTextNodeFieldsEnum;
};

export type ContentfulMusicDescriptionRichTextNodeContent = {
  __typename?: "contentfulMusicDescriptionRichTextNodeContent";
  content: Maybe<
    Array<Maybe<ContentfulMusicDescriptionRichTextNodeContentContent>>
  >;
  nodeType: Maybe<Scalars["String"]>;
};

export type ContentfulMusicDescriptionRichTextNodeContentContent = {
  __typename?: "contentfulMusicDescriptionRichTextNodeContentContent";
  data: Maybe<ContentfulMusicDescriptionRichTextNodeContentContentData>;
  marks: Maybe<
    Array<Maybe<ContentfulMusicDescriptionRichTextNodeContentContentMarks>>
  >;
  value: Maybe<Scalars["String"]>;
  nodeType: Maybe<Scalars["String"]>;
  content: Maybe<
    Array<Maybe<ContentfulMusicDescriptionRichTextNodeContentContentContent>>
  >;
};

export type ContentfulMusicDescriptionRichTextNodeContentContentContent = {
  __typename?: "contentfulMusicDescriptionRichTextNodeContentContentContent";
  value: Maybe<Scalars["String"]>;
  nodeType: Maybe<Scalars["String"]>;
};

export type ContentfulMusicDescriptionRichTextNodeContentContentContentFilterInput =
  {
    value: Maybe<StringQueryOperatorInput>;
    nodeType: Maybe<StringQueryOperatorInput>;
  };

export type ContentfulMusicDescriptionRichTextNodeContentContentContentFilterListInput =
  {
    elemMatch: Maybe<ContentfulMusicDescriptionRichTextNodeContentContentContentFilterInput>;
  };

export type ContentfulMusicDescriptionRichTextNodeContentContentData = {
  __typename?: "contentfulMusicDescriptionRichTextNodeContentContentData";
  uri: Maybe<Scalars["String"]>;
};

export type ContentfulMusicDescriptionRichTextNodeContentContentDataFilterInput =
  {
    uri: Maybe<StringQueryOperatorInput>;
  };

export type ContentfulMusicDescriptionRichTextNodeContentContentFilterInput = {
  data: Maybe<ContentfulMusicDescriptionRichTextNodeContentContentDataFilterInput>;
  marks: Maybe<ContentfulMusicDescriptionRichTextNodeContentContentMarksFilterListInput>;
  value: Maybe<StringQueryOperatorInput>;
  nodeType: Maybe<StringQueryOperatorInput>;
  content: Maybe<ContentfulMusicDescriptionRichTextNodeContentContentContentFilterListInput>;
};

export type ContentfulMusicDescriptionRichTextNodeContentContentFilterListInput =
  {
    elemMatch: Maybe<ContentfulMusicDescriptionRichTextNodeContentContentFilterInput>;
  };

export type ContentfulMusicDescriptionRichTextNodeContentContentMarks = {
  __typename?: "contentfulMusicDescriptionRichTextNodeContentContentMarks";
  type: Maybe<Scalars["String"]>;
};

export type ContentfulMusicDescriptionRichTextNodeContentContentMarksFilterInput =
  {
    type: Maybe<StringQueryOperatorInput>;
  };

export type ContentfulMusicDescriptionRichTextNodeContentContentMarksFilterListInput =
  {
    elemMatch: Maybe<ContentfulMusicDescriptionRichTextNodeContentContentMarksFilterInput>;
  };

export type ContentfulMusicDescriptionRichTextNodeContentFilterInput = {
  content: Maybe<ContentfulMusicDescriptionRichTextNodeContentContentFilterListInput>;
  nodeType: Maybe<StringQueryOperatorInput>;
};

export type ContentfulMusicDescriptionRichTextNodeContentFilterListInput = {
  elemMatch: Maybe<ContentfulMusicDescriptionRichTextNodeContentFilterInput>;
};

export type ContentfulMusicDescriptionRichTextNodeEdge = {
  __typename?: "contentfulMusicDescriptionRichTextNodeEdge";
  next: Maybe<ContentfulMusicDescriptionRichTextNode>;
  node: ContentfulMusicDescriptionRichTextNode;
  previous: Maybe<ContentfulMusicDescriptionRichTextNode>;
};

export enum ContentfulMusicDescriptionRichTextNodeFieldsEnum {
  Id = "id",
  ParentId = "parent___id",
  ParentParentId = "parent___parent___id",
  ParentParentParentId = "parent___parent___parent___id",
  ParentParentParentChildren = "parent___parent___parent___children",
  ParentParentChildren = "parent___parent___children",
  ParentParentChildrenId = "parent___parent___children___id",
  ParentParentChildrenChildren = "parent___parent___children___children",
  ParentParentInternalContent = "parent___parent___internal___content",
  ParentParentInternalContentDigest = "parent___parent___internal___contentDigest",
  ParentParentInternalDescription = "parent___parent___internal___description",
  ParentParentInternalFieldOwners = "parent___parent___internal___fieldOwners",
  ParentParentInternalIgnoreType = "parent___parent___internal___ignoreType",
  ParentParentInternalMediaType = "parent___parent___internal___mediaType",
  ParentParentInternalOwner = "parent___parent___internal___owner",
  ParentParentInternalType = "parent___parent___internal___type",
  ParentChildren = "parent___children",
  ParentChildrenId = "parent___children___id",
  ParentChildrenParentId = "parent___children___parent___id",
  ParentChildrenParentChildren = "parent___children___parent___children",
  ParentChildrenChildren = "parent___children___children",
  ParentChildrenChildrenId = "parent___children___children___id",
  ParentChildrenChildrenChildren = "parent___children___children___children",
  ParentChildrenInternalContent = "parent___children___internal___content",
  ParentChildrenInternalContentDigest = "parent___children___internal___contentDigest",
  ParentChildrenInternalDescription = "parent___children___internal___description",
  ParentChildrenInternalFieldOwners = "parent___children___internal___fieldOwners",
  ParentChildrenInternalIgnoreType = "parent___children___internal___ignoreType",
  ParentChildrenInternalMediaType = "parent___children___internal___mediaType",
  ParentChildrenInternalOwner = "parent___children___internal___owner",
  ParentChildrenInternalType = "parent___children___internal___type",
  ParentInternalContent = "parent___internal___content",
  ParentInternalContentDigest = "parent___internal___contentDigest",
  ParentInternalDescription = "parent___internal___description",
  ParentInternalFieldOwners = "parent___internal___fieldOwners",
  ParentInternalIgnoreType = "parent___internal___ignoreType",
  ParentInternalMediaType = "parent___internal___mediaType",
  ParentInternalOwner = "parent___internal___owner",
  ParentInternalType = "parent___internal___type",
  Children = "children",
  ChildrenId = "children___id",
  ChildrenParentId = "children___parent___id",
  ChildrenParentParentId = "children___parent___parent___id",
  ChildrenParentParentChildren = "children___parent___parent___children",
  ChildrenParentChildren = "children___parent___children",
  ChildrenParentChildrenId = "children___parent___children___id",
  ChildrenParentChildrenChildren = "children___parent___children___children",
  ChildrenParentInternalContent = "children___parent___internal___content",
  ChildrenParentInternalContentDigest = "children___parent___internal___contentDigest",
  ChildrenParentInternalDescription = "children___parent___internal___description",
  ChildrenParentInternalFieldOwners = "children___parent___internal___fieldOwners",
  ChildrenParentInternalIgnoreType = "children___parent___internal___ignoreType",
  ChildrenParentInternalMediaType = "children___parent___internal___mediaType",
  ChildrenParentInternalOwner = "children___parent___internal___owner",
  ChildrenParentInternalType = "children___parent___internal___type",
  ChildrenChildren = "children___children",
  ChildrenChildrenId = "children___children___id",
  ChildrenChildrenParentId = "children___children___parent___id",
  ChildrenChildrenParentChildren = "children___children___parent___children",
  ChildrenChildrenChildren = "children___children___children",
  ChildrenChildrenChildrenId = "children___children___children___id",
  ChildrenChildrenChildrenChildren = "children___children___children___children",
  ChildrenChildrenInternalContent = "children___children___internal___content",
  ChildrenChildrenInternalContentDigest = "children___children___internal___contentDigest",
  ChildrenChildrenInternalDescription = "children___children___internal___description",
  ChildrenChildrenInternalFieldOwners = "children___children___internal___fieldOwners",
  ChildrenChildrenInternalIgnoreType = "children___children___internal___ignoreType",
  ChildrenChildrenInternalMediaType = "children___children___internal___mediaType",
  ChildrenChildrenInternalOwner = "children___children___internal___owner",
  ChildrenChildrenInternalType = "children___children___internal___type",
  ChildrenInternalContent = "children___internal___content",
  ChildrenInternalContentDigest = "children___internal___contentDigest",
  ChildrenInternalDescription = "children___internal___description",
  ChildrenInternalFieldOwners = "children___internal___fieldOwners",
  ChildrenInternalIgnoreType = "children___internal___ignoreType",
  ChildrenInternalMediaType = "children___internal___mediaType",
  ChildrenInternalOwner = "children___internal___owner",
  ChildrenInternalType = "children___internal___type",
  InternalContent = "internal___content",
  InternalContentDigest = "internal___contentDigest",
  InternalDescription = "internal___description",
  InternalFieldOwners = "internal___fieldOwners",
  InternalIgnoreType = "internal___ignoreType",
  InternalMediaType = "internal___mediaType",
  InternalOwner = "internal___owner",
  InternalType = "internal___type",
  Content = "content",
  ContentContent = "content___content",
  ContentContentDataUri = "content___content___data___uri",
  ContentContentMarks = "content___content___marks",
  ContentContentMarksType = "content___content___marks___type",
  ContentContentValue = "content___content___value",
  ContentContentNodeType = "content___content___nodeType",
  ContentContentContent = "content___content___content",
  ContentContentContentValue = "content___content___content___value",
  ContentContentContentNodeType = "content___content___content___nodeType",
  ContentNodeType = "content___nodeType",
  NodeType = "nodeType",
  Description = "description",
  Json = "json",
}

export type ContentfulMusicDescriptionRichTextNodeFilterInput = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  content: Maybe<ContentfulMusicDescriptionRichTextNodeContentFilterListInput>;
  nodeType: Maybe<StringQueryOperatorInput>;
  description: Maybe<StringQueryOperatorInput>;
  json: Maybe<JsonQueryOperatorInput>;
};

export type ContentfulMusicDescriptionRichTextNodeGroupConnection = {
  __typename?: "contentfulMusicDescriptionRichTextNodeGroupConnection";
  totalCount: Scalars["Int"];
  edges: Array<ContentfulMusicDescriptionRichTextNodeEdge>;
  nodes: Array<ContentfulMusicDescriptionRichTextNode>;
  pageInfo: PageInfo;
  field: Scalars["String"];
  fieldValue: Maybe<Scalars["String"]>;
};

export type ContentfulMusicDescriptionRichTextNodeSortInput = {
  fields: Maybe<Array<Maybe<ContentfulMusicDescriptionRichTextNodeFieldsEnum>>>;
  order: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulMusicEdge = {
  __typename?: "ContentfulMusicEdge";
  next: Maybe<ContentfulMusic>;
  node: ContentfulMusic;
  previous: Maybe<ContentfulMusic>;
};

export enum ContentfulMusicFieldsEnum {
  Id = "id",
  ParentId = "parent___id",
  ParentParentId = "parent___parent___id",
  ParentParentParentId = "parent___parent___parent___id",
  ParentParentParentChildren = "parent___parent___parent___children",
  ParentParentChildren = "parent___parent___children",
  ParentParentChildrenId = "parent___parent___children___id",
  ParentParentChildrenChildren = "parent___parent___children___children",
  ParentParentInternalContent = "parent___parent___internal___content",
  ParentParentInternalContentDigest = "parent___parent___internal___contentDigest",
  ParentParentInternalDescription = "parent___parent___internal___description",
  ParentParentInternalFieldOwners = "parent___parent___internal___fieldOwners",
  ParentParentInternalIgnoreType = "parent___parent___internal___ignoreType",
  ParentParentInternalMediaType = "parent___parent___internal___mediaType",
  ParentParentInternalOwner = "parent___parent___internal___owner",
  ParentParentInternalType = "parent___parent___internal___type",
  ParentChildren = "parent___children",
  ParentChildrenId = "parent___children___id",
  ParentChildrenParentId = "parent___children___parent___id",
  ParentChildrenParentChildren = "parent___children___parent___children",
  ParentChildrenChildren = "parent___children___children",
  ParentChildrenChildrenId = "parent___children___children___id",
  ParentChildrenChildrenChildren = "parent___children___children___children",
  ParentChildrenInternalContent = "parent___children___internal___content",
  ParentChildrenInternalContentDigest = "parent___children___internal___contentDigest",
  ParentChildrenInternalDescription = "parent___children___internal___description",
  ParentChildrenInternalFieldOwners = "parent___children___internal___fieldOwners",
  ParentChildrenInternalIgnoreType = "parent___children___internal___ignoreType",
  ParentChildrenInternalMediaType = "parent___children___internal___mediaType",
  ParentChildrenInternalOwner = "parent___children___internal___owner",
  ParentChildrenInternalType = "parent___children___internal___type",
  ParentInternalContent = "parent___internal___content",
  ParentInternalContentDigest = "parent___internal___contentDigest",
  ParentInternalDescription = "parent___internal___description",
  ParentInternalFieldOwners = "parent___internal___fieldOwners",
  ParentInternalIgnoreType = "parent___internal___ignoreType",
  ParentInternalMediaType = "parent___internal___mediaType",
  ParentInternalOwner = "parent___internal___owner",
  ParentInternalType = "parent___internal___type",
  Children = "children",
  ChildrenId = "children___id",
  ChildrenParentId = "children___parent___id",
  ChildrenParentParentId = "children___parent___parent___id",
  ChildrenParentParentChildren = "children___parent___parent___children",
  ChildrenParentChildren = "children___parent___children",
  ChildrenParentChildrenId = "children___parent___children___id",
  ChildrenParentChildrenChildren = "children___parent___children___children",
  ChildrenParentInternalContent = "children___parent___internal___content",
  ChildrenParentInternalContentDigest = "children___parent___internal___contentDigest",
  ChildrenParentInternalDescription = "children___parent___internal___description",
  ChildrenParentInternalFieldOwners = "children___parent___internal___fieldOwners",
  ChildrenParentInternalIgnoreType = "children___parent___internal___ignoreType",
  ChildrenParentInternalMediaType = "children___parent___internal___mediaType",
  ChildrenParentInternalOwner = "children___parent___internal___owner",
  ChildrenParentInternalType = "children___parent___internal___type",
  ChildrenChildren = "children___children",
  ChildrenChildrenId = "children___children___id",
  ChildrenChildrenParentId = "children___children___parent___id",
  ChildrenChildrenParentChildren = "children___children___parent___children",
  ChildrenChildrenChildren = "children___children___children",
  ChildrenChildrenChildrenId = "children___children___children___id",
  ChildrenChildrenChildrenChildren = "children___children___children___children",
  ChildrenChildrenInternalContent = "children___children___internal___content",
  ChildrenChildrenInternalContentDigest = "children___children___internal___contentDigest",
  ChildrenChildrenInternalDescription = "children___children___internal___description",
  ChildrenChildrenInternalFieldOwners = "children___children___internal___fieldOwners",
  ChildrenChildrenInternalIgnoreType = "children___children___internal___ignoreType",
  ChildrenChildrenInternalMediaType = "children___children___internal___mediaType",
  ChildrenChildrenInternalOwner = "children___children___internal___owner",
  ChildrenChildrenInternalType = "children___children___internal___type",
  ChildrenInternalContent = "children___internal___content",
  ChildrenInternalContentDigest = "children___internal___contentDigest",
  ChildrenInternalDescription = "children___internal___description",
  ChildrenInternalFieldOwners = "children___internal___fieldOwners",
  ChildrenInternalIgnoreType = "children___internal___ignoreType",
  ChildrenInternalMediaType = "children___internal___mediaType",
  ChildrenInternalOwner = "children___internal___owner",
  ChildrenInternalType = "children___internal___type",
  InternalContent = "internal___content",
  InternalContentDigest = "internal___contentDigest",
  InternalDescription = "internal___description",
  InternalFieldOwners = "internal___fieldOwners",
  InternalIgnoreType = "internal___ignoreType",
  InternalMediaType = "internal___mediaType",
  InternalOwner = "internal___owner",
  InternalType = "internal___type",
  Title = "title",
  Group = "group",
  Recording = "recording",
  Year = "year",
  DescriptionId = "description___id",
  DescriptionParentId = "description___parent___id",
  DescriptionParentParentId = "description___parent___parent___id",
  DescriptionParentParentChildren = "description___parent___parent___children",
  DescriptionParentChildren = "description___parent___children",
  DescriptionParentChildrenId = "description___parent___children___id",
  DescriptionParentChildrenChildren = "description___parent___children___children",
  DescriptionParentInternalContent = "description___parent___internal___content",
  DescriptionParentInternalContentDigest = "description___parent___internal___contentDigest",
  DescriptionParentInternalDescription = "description___parent___internal___description",
  DescriptionParentInternalFieldOwners = "description___parent___internal___fieldOwners",
  DescriptionParentInternalIgnoreType = "description___parent___internal___ignoreType",
  DescriptionParentInternalMediaType = "description___parent___internal___mediaType",
  DescriptionParentInternalOwner = "description___parent___internal___owner",
  DescriptionParentInternalType = "description___parent___internal___type",
  DescriptionChildren = "description___children",
  DescriptionChildrenId = "description___children___id",
  DescriptionChildrenParentId = "description___children___parent___id",
  DescriptionChildrenParentChildren = "description___children___parent___children",
  DescriptionChildrenChildren = "description___children___children",
  DescriptionChildrenChildrenId = "description___children___children___id",
  DescriptionChildrenChildrenChildren = "description___children___children___children",
  DescriptionChildrenInternalContent = "description___children___internal___content",
  DescriptionChildrenInternalContentDigest = "description___children___internal___contentDigest",
  DescriptionChildrenInternalDescription = "description___children___internal___description",
  DescriptionChildrenInternalFieldOwners = "description___children___internal___fieldOwners",
  DescriptionChildrenInternalIgnoreType = "description___children___internal___ignoreType",
  DescriptionChildrenInternalMediaType = "description___children___internal___mediaType",
  DescriptionChildrenInternalOwner = "description___children___internal___owner",
  DescriptionChildrenInternalType = "description___children___internal___type",
  DescriptionInternalContent = "description___internal___content",
  DescriptionInternalContentDigest = "description___internal___contentDigest",
  DescriptionInternalDescription = "description___internal___description",
  DescriptionInternalFieldOwners = "description___internal___fieldOwners",
  DescriptionInternalIgnoreType = "description___internal___ignoreType",
  DescriptionInternalMediaType = "description___internal___mediaType",
  DescriptionInternalOwner = "description___internal___owner",
  DescriptionInternalType = "description___internal___type",
  DescriptionContent = "description___content",
  DescriptionContentContent = "description___content___content",
  DescriptionContentContentMarks = "description___content___content___marks",
  DescriptionContentContentValue = "description___content___content___value",
  DescriptionContentContentNodeType = "description___content___content___nodeType",
  DescriptionContentContentContent = "description___content___content___content",
  DescriptionContentNodeType = "description___content___nodeType",
  DescriptionNodeType = "description___nodeType",
  DescriptionDescription = "description___description",
  DescriptionJson = "description___json",
  SpaceId = "spaceId",
  ContentfulId = "contentful_id",
  CreatedAt = "createdAt",
  UpdatedAt = "updatedAt",
  SysRevision = "sys___revision",
  SysContentTypeSysType = "sys___contentType___sys___type",
  SysContentTypeSysLinkType = "sys___contentType___sys___linkType",
  SysContentTypeSysId = "sys___contentType___sys___id",
  SysContentTypeSysContentfulId = "sys___contentType___sys___contentful_id",
  NodeLocale = "node_locale",
  Featured = "featured",
  FeaturedId = "featured___id",
  FeaturedParentId = "featured___parent___id",
  FeaturedParentParentId = "featured___parent___parent___id",
  FeaturedParentParentChildren = "featured___parent___parent___children",
  FeaturedParentChildren = "featured___parent___children",
  FeaturedParentChildrenId = "featured___parent___children___id",
  FeaturedParentChildrenChildren = "featured___parent___children___children",
  FeaturedParentInternalContent = "featured___parent___internal___content",
  FeaturedParentInternalContentDigest = "featured___parent___internal___contentDigest",
  FeaturedParentInternalDescription = "featured___parent___internal___description",
  FeaturedParentInternalFieldOwners = "featured___parent___internal___fieldOwners",
  FeaturedParentInternalIgnoreType = "featured___parent___internal___ignoreType",
  FeaturedParentInternalMediaType = "featured___parent___internal___mediaType",
  FeaturedParentInternalOwner = "featured___parent___internal___owner",
  FeaturedParentInternalType = "featured___parent___internal___type",
  FeaturedChildren = "featured___children",
  FeaturedChildrenId = "featured___children___id",
  FeaturedChildrenParentId = "featured___children___parent___id",
  FeaturedChildrenParentChildren = "featured___children___parent___children",
  FeaturedChildrenChildren = "featured___children___children",
  FeaturedChildrenChildrenId = "featured___children___children___id",
  FeaturedChildrenChildrenChildren = "featured___children___children___children",
  FeaturedChildrenInternalContent = "featured___children___internal___content",
  FeaturedChildrenInternalContentDigest = "featured___children___internal___contentDigest",
  FeaturedChildrenInternalDescription = "featured___children___internal___description",
  FeaturedChildrenInternalFieldOwners = "featured___children___internal___fieldOwners",
  FeaturedChildrenInternalIgnoreType = "featured___children___internal___ignoreType",
  FeaturedChildrenInternalMediaType = "featured___children___internal___mediaType",
  FeaturedChildrenInternalOwner = "featured___children___internal___owner",
  FeaturedChildrenInternalType = "featured___children___internal___type",
  FeaturedInternalContent = "featured___internal___content",
  FeaturedInternalContentDigest = "featured___internal___contentDigest",
  FeaturedInternalDescription = "featured___internal___description",
  FeaturedInternalFieldOwners = "featured___internal___fieldOwners",
  FeaturedInternalIgnoreType = "featured___internal___ignoreType",
  FeaturedInternalMediaType = "featured___internal___mediaType",
  FeaturedInternalOwner = "featured___internal___owner",
  FeaturedInternalType = "featured___internal___type",
  FeaturedTitle = "featured___title",
  FeaturedSiteJobs = "featured___siteJobs",
  FeaturedSiteJobsId = "featured___siteJobs___id",
  FeaturedSiteJobsParentId = "featured___siteJobs___parent___id",
  FeaturedSiteJobsParentChildren = "featured___siteJobs___parent___children",
  FeaturedSiteJobsChildren = "featured___siteJobs___children",
  FeaturedSiteJobsChildrenId = "featured___siteJobs___children___id",
  FeaturedSiteJobsChildrenChildren = "featured___siteJobs___children___children",
  FeaturedSiteJobsInternalContent = "featured___siteJobs___internal___content",
  FeaturedSiteJobsInternalContentDigest = "featured___siteJobs___internal___contentDigest",
  FeaturedSiteJobsInternalDescription = "featured___siteJobs___internal___description",
  FeaturedSiteJobsInternalFieldOwners = "featured___siteJobs___internal___fieldOwners",
  FeaturedSiteJobsInternalIgnoreType = "featured___siteJobs___internal___ignoreType",
  FeaturedSiteJobsInternalMediaType = "featured___siteJobs___internal___mediaType",
  FeaturedSiteJobsInternalOwner = "featured___siteJobs___internal___owner",
  FeaturedSiteJobsInternalType = "featured___siteJobs___internal___type",
  FeaturedSiteJobsTitle = "featured___siteJobs___title",
  FeaturedSiteJobsCompany = "featured___siteJobs___company",
  FeaturedSiteJobsLocationLon = "featured___siteJobs___location___lon",
  FeaturedSiteJobsLocationLat = "featured___siteJobs___location___lat",
  FeaturedSiteJobsStartDate = "featured___siteJobs___startDate",
  FeaturedSiteJobsStartPay = "featured___siteJobs___startPay",
  FeaturedSiteJobsIsHourly = "featured___siteJobs___isHourly",
  FeaturedSiteJobsCity = "featured___siteJobs___city",
  FeaturedSiteJobsState = "featured___siteJobs___state",
  FeaturedSiteJobsDescriptionId = "featured___siteJobs___description___id",
  FeaturedSiteJobsDescriptionChildren = "featured___siteJobs___description___children",
  FeaturedSiteJobsDescriptionContent = "featured___siteJobs___description___content",
  FeaturedSiteJobsDescriptionNodeType = "featured___siteJobs___description___nodeType",
  FeaturedSiteJobsDescriptionDescription = "featured___siteJobs___description___description",
  FeaturedSiteJobsDescriptionJson = "featured___siteJobs___description___json",
  FeaturedSiteJobsSpaceId = "featured___siteJobs___spaceId",
  FeaturedSiteJobsContentfulId = "featured___siteJobs___contentful_id",
  FeaturedSiteJobsCreatedAt = "featured___siteJobs___createdAt",
  FeaturedSiteJobsUpdatedAt = "featured___siteJobs___updatedAt",
  FeaturedSiteJobsSysRevision = "featured___siteJobs___sys___revision",
  FeaturedSiteJobsNodeLocale = "featured___siteJobs___node_locale",
  FeaturedSiteJobsFeatured = "featured___siteJobs___featured",
  FeaturedSiteJobsFeaturedId = "featured___siteJobs___featured___id",
  FeaturedSiteJobsFeaturedChildren = "featured___siteJobs___featured___children",
  FeaturedSiteJobsFeaturedTitle = "featured___siteJobs___featured___title",
  FeaturedSiteJobsFeaturedSiteJobs = "featured___siteJobs___featured___siteJobs",
  FeaturedSiteJobsFeaturedSitePerformances = "featured___siteJobs___featured___sitePerformances",
  FeaturedSiteJobsFeaturedResumeJobs = "featured___siteJobs___featured___resumeJobs",
  FeaturedSiteJobsFeaturedSpaceId = "featured___siteJobs___featured___spaceId",
  FeaturedSiteJobsFeaturedContentfulId = "featured___siteJobs___featured___contentful_id",
  FeaturedSiteJobsFeaturedCreatedAt = "featured___siteJobs___featured___createdAt",
  FeaturedSiteJobsFeaturedUpdatedAt = "featured___siteJobs___featured___updatedAt",
  FeaturedSiteJobsFeaturedNodeLocale = "featured___siteJobs___featured___node_locale",
  FeaturedSiteJobsEndDate = "featured___siteJobs___endDate",
  FeaturedSiteJobsEndPay = "featured___siteJobs___endPay",
  FeaturedSiteJobsChildContentfulJobDescriptionRichTextNodeId = "featured___siteJobs___childContentfulJobDescriptionRichTextNode___id",
  FeaturedSiteJobsChildContentfulJobDescriptionRichTextNodeChildren = "featured___siteJobs___childContentfulJobDescriptionRichTextNode___children",
  FeaturedSiteJobsChildContentfulJobDescriptionRichTextNodeContent = "featured___siteJobs___childContentfulJobDescriptionRichTextNode___content",
  FeaturedSiteJobsChildContentfulJobDescriptionRichTextNodeNodeType = "featured___siteJobs___childContentfulJobDescriptionRichTextNode___nodeType",
  FeaturedSiteJobsChildContentfulJobDescriptionRichTextNodeDescription = "featured___siteJobs___childContentfulJobDescriptionRichTextNode___description",
  FeaturedSiteJobsChildContentfulJobDescriptionRichTextNodeJson = "featured___siteJobs___childContentfulJobDescriptionRichTextNode___json",
  FeaturedSitePerformances = "featured___sitePerformances",
  FeaturedSitePerformancesId = "featured___sitePerformances___id",
  FeaturedSitePerformancesParentId = "featured___sitePerformances___parent___id",
  FeaturedSitePerformancesParentChildren = "featured___sitePerformances___parent___children",
  FeaturedSitePerformancesChildren = "featured___sitePerformances___children",
  FeaturedSitePerformancesChildrenId = "featured___sitePerformances___children___id",
  FeaturedSitePerformancesChildrenChildren = "featured___sitePerformances___children___children",
  FeaturedSitePerformancesInternalContent = "featured___sitePerformances___internal___content",
  FeaturedSitePerformancesInternalContentDigest = "featured___sitePerformances___internal___contentDigest",
  FeaturedSitePerformancesInternalDescription = "featured___sitePerformances___internal___description",
  FeaturedSitePerformancesInternalFieldOwners = "featured___sitePerformances___internal___fieldOwners",
  FeaturedSitePerformancesInternalIgnoreType = "featured___sitePerformances___internal___ignoreType",
  FeaturedSitePerformancesInternalMediaType = "featured___sitePerformances___internal___mediaType",
  FeaturedSitePerformancesInternalOwner = "featured___sitePerformances___internal___owner",
  FeaturedSitePerformancesInternalType = "featured___sitePerformances___internal___type",
  FeaturedSitePerformancesTitle = "featured___sitePerformances___title",
  FeaturedSitePerformancesGroup = "featured___sitePerformances___group",
  FeaturedSitePerformancesRecording = "featured___sitePerformances___recording",
  FeaturedSitePerformancesYear = "featured___sitePerformances___year",
  FeaturedSitePerformancesDescriptionId = "featured___sitePerformances___description___id",
  FeaturedSitePerformancesDescriptionChildren = "featured___sitePerformances___description___children",
  FeaturedSitePerformancesDescriptionContent = "featured___sitePerformances___description___content",
  FeaturedSitePerformancesDescriptionNodeType = "featured___sitePerformances___description___nodeType",
  FeaturedSitePerformancesDescriptionDescription = "featured___sitePerformances___description___description",
  FeaturedSitePerformancesDescriptionJson = "featured___sitePerformances___description___json",
  FeaturedSitePerformancesSpaceId = "featured___sitePerformances___spaceId",
  FeaturedSitePerformancesContentfulId = "featured___sitePerformances___contentful_id",
  FeaturedSitePerformancesCreatedAt = "featured___sitePerformances___createdAt",
  FeaturedSitePerformancesUpdatedAt = "featured___sitePerformances___updatedAt",
  FeaturedSitePerformancesSysRevision = "featured___sitePerformances___sys___revision",
  FeaturedSitePerformancesNodeLocale = "featured___sitePerformances___node_locale",
  FeaturedSitePerformancesFeatured = "featured___sitePerformances___featured",
  FeaturedSitePerformancesFeaturedId = "featured___sitePerformances___featured___id",
  FeaturedSitePerformancesFeaturedChildren = "featured___sitePerformances___featured___children",
  FeaturedSitePerformancesFeaturedTitle = "featured___sitePerformances___featured___title",
  FeaturedSitePerformancesFeaturedSiteJobs = "featured___sitePerformances___featured___siteJobs",
  FeaturedSitePerformancesFeaturedSitePerformances = "featured___sitePerformances___featured___sitePerformances",
  FeaturedSitePerformancesFeaturedResumeJobs = "featured___sitePerformances___featured___resumeJobs",
  FeaturedSitePerformancesFeaturedSpaceId = "featured___sitePerformances___featured___spaceId",
  FeaturedSitePerformancesFeaturedContentfulId = "featured___sitePerformances___featured___contentful_id",
  FeaturedSitePerformancesFeaturedCreatedAt = "featured___sitePerformances___featured___createdAt",
  FeaturedSitePerformancesFeaturedUpdatedAt = "featured___sitePerformances___featured___updatedAt",
  FeaturedSitePerformancesFeaturedNodeLocale = "featured___sitePerformances___featured___node_locale",
  FeaturedSitePerformancesChildContentfulMusicDescriptionRichTextNodeId = "featured___sitePerformances___childContentfulMusicDescriptionRichTextNode___id",
  FeaturedSitePerformancesChildContentfulMusicDescriptionRichTextNodeChildren = "featured___sitePerformances___childContentfulMusicDescriptionRichTextNode___children",
  FeaturedSitePerformancesChildContentfulMusicDescriptionRichTextNodeContent = "featured___sitePerformances___childContentfulMusicDescriptionRichTextNode___content",
  FeaturedSitePerformancesChildContentfulMusicDescriptionRichTextNodeNodeType = "featured___sitePerformances___childContentfulMusicDescriptionRichTextNode___nodeType",
  FeaturedSitePerformancesChildContentfulMusicDescriptionRichTextNodeDescription = "featured___sitePerformances___childContentfulMusicDescriptionRichTextNode___description",
  FeaturedSitePerformancesChildContentfulMusicDescriptionRichTextNodeJson = "featured___sitePerformances___childContentfulMusicDescriptionRichTextNode___json",
  FeaturedResumeJobs = "featured___resumeJobs",
  FeaturedResumeJobsId = "featured___resumeJobs___id",
  FeaturedResumeJobsParentId = "featured___resumeJobs___parent___id",
  FeaturedResumeJobsParentChildren = "featured___resumeJobs___parent___children",
  FeaturedResumeJobsChildren = "featured___resumeJobs___children",
  FeaturedResumeJobsChildrenId = "featured___resumeJobs___children___id",
  FeaturedResumeJobsChildrenChildren = "featured___resumeJobs___children___children",
  FeaturedResumeJobsInternalContent = "featured___resumeJobs___internal___content",
  FeaturedResumeJobsInternalContentDigest = "featured___resumeJobs___internal___contentDigest",
  FeaturedResumeJobsInternalDescription = "featured___resumeJobs___internal___description",
  FeaturedResumeJobsInternalFieldOwners = "featured___resumeJobs___internal___fieldOwners",
  FeaturedResumeJobsInternalIgnoreType = "featured___resumeJobs___internal___ignoreType",
  FeaturedResumeJobsInternalMediaType = "featured___resumeJobs___internal___mediaType",
  FeaturedResumeJobsInternalOwner = "featured___resumeJobs___internal___owner",
  FeaturedResumeJobsInternalType = "featured___resumeJobs___internal___type",
  FeaturedResumeJobsTitle = "featured___resumeJobs___title",
  FeaturedResumeJobsCompany = "featured___resumeJobs___company",
  FeaturedResumeJobsLocationLon = "featured___resumeJobs___location___lon",
  FeaturedResumeJobsLocationLat = "featured___resumeJobs___location___lat",
  FeaturedResumeJobsStartDate = "featured___resumeJobs___startDate",
  FeaturedResumeJobsStartPay = "featured___resumeJobs___startPay",
  FeaturedResumeJobsIsHourly = "featured___resumeJobs___isHourly",
  FeaturedResumeJobsCity = "featured___resumeJobs___city",
  FeaturedResumeJobsState = "featured___resumeJobs___state",
  FeaturedResumeJobsDescriptionId = "featured___resumeJobs___description___id",
  FeaturedResumeJobsDescriptionChildren = "featured___resumeJobs___description___children",
  FeaturedResumeJobsDescriptionContent = "featured___resumeJobs___description___content",
  FeaturedResumeJobsDescriptionNodeType = "featured___resumeJobs___description___nodeType",
  FeaturedResumeJobsDescriptionDescription = "featured___resumeJobs___description___description",
  FeaturedResumeJobsDescriptionJson = "featured___resumeJobs___description___json",
  FeaturedResumeJobsSpaceId = "featured___resumeJobs___spaceId",
  FeaturedResumeJobsContentfulId = "featured___resumeJobs___contentful_id",
  FeaturedResumeJobsCreatedAt = "featured___resumeJobs___createdAt",
  FeaturedResumeJobsUpdatedAt = "featured___resumeJobs___updatedAt",
  FeaturedResumeJobsSysRevision = "featured___resumeJobs___sys___revision",
  FeaturedResumeJobsNodeLocale = "featured___resumeJobs___node_locale",
  FeaturedResumeJobsFeatured = "featured___resumeJobs___featured",
  FeaturedResumeJobsFeaturedId = "featured___resumeJobs___featured___id",
  FeaturedResumeJobsFeaturedChildren = "featured___resumeJobs___featured___children",
  FeaturedResumeJobsFeaturedTitle = "featured___resumeJobs___featured___title",
  FeaturedResumeJobsFeaturedSiteJobs = "featured___resumeJobs___featured___siteJobs",
  FeaturedResumeJobsFeaturedSitePerformances = "featured___resumeJobs___featured___sitePerformances",
  FeaturedResumeJobsFeaturedResumeJobs = "featured___resumeJobs___featured___resumeJobs",
  FeaturedResumeJobsFeaturedSpaceId = "featured___resumeJobs___featured___spaceId",
  FeaturedResumeJobsFeaturedContentfulId = "featured___resumeJobs___featured___contentful_id",
  FeaturedResumeJobsFeaturedCreatedAt = "featured___resumeJobs___featured___createdAt",
  FeaturedResumeJobsFeaturedUpdatedAt = "featured___resumeJobs___featured___updatedAt",
  FeaturedResumeJobsFeaturedNodeLocale = "featured___resumeJobs___featured___node_locale",
  FeaturedResumeJobsEndDate = "featured___resumeJobs___endDate",
  FeaturedResumeJobsEndPay = "featured___resumeJobs___endPay",
  FeaturedResumeJobsChildContentfulJobDescriptionRichTextNodeId = "featured___resumeJobs___childContentfulJobDescriptionRichTextNode___id",
  FeaturedResumeJobsChildContentfulJobDescriptionRichTextNodeChildren = "featured___resumeJobs___childContentfulJobDescriptionRichTextNode___children",
  FeaturedResumeJobsChildContentfulJobDescriptionRichTextNodeContent = "featured___resumeJobs___childContentfulJobDescriptionRichTextNode___content",
  FeaturedResumeJobsChildContentfulJobDescriptionRichTextNodeNodeType = "featured___resumeJobs___childContentfulJobDescriptionRichTextNode___nodeType",
  FeaturedResumeJobsChildContentfulJobDescriptionRichTextNodeDescription = "featured___resumeJobs___childContentfulJobDescriptionRichTextNode___description",
  FeaturedResumeJobsChildContentfulJobDescriptionRichTextNodeJson = "featured___resumeJobs___childContentfulJobDescriptionRichTextNode___json",
  FeaturedSpaceId = "featured___spaceId",
  FeaturedContentfulId = "featured___contentful_id",
  FeaturedCreatedAt = "featured___createdAt",
  FeaturedUpdatedAt = "featured___updatedAt",
  FeaturedSysRevision = "featured___sys___revision",
  FeaturedNodeLocale = "featured___node_locale",
  ChildContentfulMusicDescriptionRichTextNodeId = "childContentfulMusicDescriptionRichTextNode___id",
  ChildContentfulMusicDescriptionRichTextNodeParentId = "childContentfulMusicDescriptionRichTextNode___parent___id",
  ChildContentfulMusicDescriptionRichTextNodeParentParentId = "childContentfulMusicDescriptionRichTextNode___parent___parent___id",
  ChildContentfulMusicDescriptionRichTextNodeParentParentChildren = "childContentfulMusicDescriptionRichTextNode___parent___parent___children",
  ChildContentfulMusicDescriptionRichTextNodeParentChildren = "childContentfulMusicDescriptionRichTextNode___parent___children",
  ChildContentfulMusicDescriptionRichTextNodeParentChildrenId = "childContentfulMusicDescriptionRichTextNode___parent___children___id",
  ChildContentfulMusicDescriptionRichTextNodeParentChildrenChildren = "childContentfulMusicDescriptionRichTextNode___parent___children___children",
  ChildContentfulMusicDescriptionRichTextNodeParentInternalContent = "childContentfulMusicDescriptionRichTextNode___parent___internal___content",
  ChildContentfulMusicDescriptionRichTextNodeParentInternalContentDigest = "childContentfulMusicDescriptionRichTextNode___parent___internal___contentDigest",
  ChildContentfulMusicDescriptionRichTextNodeParentInternalDescription = "childContentfulMusicDescriptionRichTextNode___parent___internal___description",
  ChildContentfulMusicDescriptionRichTextNodeParentInternalFieldOwners = "childContentfulMusicDescriptionRichTextNode___parent___internal___fieldOwners",
  ChildContentfulMusicDescriptionRichTextNodeParentInternalIgnoreType = "childContentfulMusicDescriptionRichTextNode___parent___internal___ignoreType",
  ChildContentfulMusicDescriptionRichTextNodeParentInternalMediaType = "childContentfulMusicDescriptionRichTextNode___parent___internal___mediaType",
  ChildContentfulMusicDescriptionRichTextNodeParentInternalOwner = "childContentfulMusicDescriptionRichTextNode___parent___internal___owner",
  ChildContentfulMusicDescriptionRichTextNodeParentInternalType = "childContentfulMusicDescriptionRichTextNode___parent___internal___type",
  ChildContentfulMusicDescriptionRichTextNodeChildren = "childContentfulMusicDescriptionRichTextNode___children",
  ChildContentfulMusicDescriptionRichTextNodeChildrenId = "childContentfulMusicDescriptionRichTextNode___children___id",
  ChildContentfulMusicDescriptionRichTextNodeChildrenParentId = "childContentfulMusicDescriptionRichTextNode___children___parent___id",
  ChildContentfulMusicDescriptionRichTextNodeChildrenParentChildren = "childContentfulMusicDescriptionRichTextNode___children___parent___children",
  ChildContentfulMusicDescriptionRichTextNodeChildrenChildren = "childContentfulMusicDescriptionRichTextNode___children___children",
  ChildContentfulMusicDescriptionRichTextNodeChildrenChildrenId = "childContentfulMusicDescriptionRichTextNode___children___children___id",
  ChildContentfulMusicDescriptionRichTextNodeChildrenChildrenChildren = "childContentfulMusicDescriptionRichTextNode___children___children___children",
  ChildContentfulMusicDescriptionRichTextNodeChildrenInternalContent = "childContentfulMusicDescriptionRichTextNode___children___internal___content",
  ChildContentfulMusicDescriptionRichTextNodeChildrenInternalContentDigest = "childContentfulMusicDescriptionRichTextNode___children___internal___contentDigest",
  ChildContentfulMusicDescriptionRichTextNodeChildrenInternalDescription = "childContentfulMusicDescriptionRichTextNode___children___internal___description",
  ChildContentfulMusicDescriptionRichTextNodeChildrenInternalFieldOwners = "childContentfulMusicDescriptionRichTextNode___children___internal___fieldOwners",
  ChildContentfulMusicDescriptionRichTextNodeChildrenInternalIgnoreType = "childContentfulMusicDescriptionRichTextNode___children___internal___ignoreType",
  ChildContentfulMusicDescriptionRichTextNodeChildrenInternalMediaType = "childContentfulMusicDescriptionRichTextNode___children___internal___mediaType",
  ChildContentfulMusicDescriptionRichTextNodeChildrenInternalOwner = "childContentfulMusicDescriptionRichTextNode___children___internal___owner",
  ChildContentfulMusicDescriptionRichTextNodeChildrenInternalType = "childContentfulMusicDescriptionRichTextNode___children___internal___type",
  ChildContentfulMusicDescriptionRichTextNodeInternalContent = "childContentfulMusicDescriptionRichTextNode___internal___content",
  ChildContentfulMusicDescriptionRichTextNodeInternalContentDigest = "childContentfulMusicDescriptionRichTextNode___internal___contentDigest",
  ChildContentfulMusicDescriptionRichTextNodeInternalDescription = "childContentfulMusicDescriptionRichTextNode___internal___description",
  ChildContentfulMusicDescriptionRichTextNodeInternalFieldOwners = "childContentfulMusicDescriptionRichTextNode___internal___fieldOwners",
  ChildContentfulMusicDescriptionRichTextNodeInternalIgnoreType = "childContentfulMusicDescriptionRichTextNode___internal___ignoreType",
  ChildContentfulMusicDescriptionRichTextNodeInternalMediaType = "childContentfulMusicDescriptionRichTextNode___internal___mediaType",
  ChildContentfulMusicDescriptionRichTextNodeInternalOwner = "childContentfulMusicDescriptionRichTextNode___internal___owner",
  ChildContentfulMusicDescriptionRichTextNodeInternalType = "childContentfulMusicDescriptionRichTextNode___internal___type",
  ChildContentfulMusicDescriptionRichTextNodeContent = "childContentfulMusicDescriptionRichTextNode___content",
  ChildContentfulMusicDescriptionRichTextNodeContentContent = "childContentfulMusicDescriptionRichTextNode___content___content",
  ChildContentfulMusicDescriptionRichTextNodeContentContentMarks = "childContentfulMusicDescriptionRichTextNode___content___content___marks",
  ChildContentfulMusicDescriptionRichTextNodeContentContentValue = "childContentfulMusicDescriptionRichTextNode___content___content___value",
  ChildContentfulMusicDescriptionRichTextNodeContentContentNodeType = "childContentfulMusicDescriptionRichTextNode___content___content___nodeType",
  ChildContentfulMusicDescriptionRichTextNodeContentContentContent = "childContentfulMusicDescriptionRichTextNode___content___content___content",
  ChildContentfulMusicDescriptionRichTextNodeContentNodeType = "childContentfulMusicDescriptionRichTextNode___content___nodeType",
  ChildContentfulMusicDescriptionRichTextNodeNodeType = "childContentfulMusicDescriptionRichTextNode___nodeType",
  ChildContentfulMusicDescriptionRichTextNodeDescription = "childContentfulMusicDescriptionRichTextNode___description",
  ChildContentfulMusicDescriptionRichTextNodeJson = "childContentfulMusicDescriptionRichTextNode___json",
}

export type ContentfulMusicFilterInput = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  title: Maybe<StringQueryOperatorInput>;
  group: Maybe<StringQueryOperatorInput>;
  recording: Maybe<StringQueryOperatorInput>;
  year: Maybe<IntQueryOperatorInput>;
  description: Maybe<ContentfulMusicDescriptionRichTextNodeFilterInput>;
  spaceId: Maybe<StringQueryOperatorInput>;
  contentful_id: Maybe<StringQueryOperatorInput>;
  createdAt: Maybe<DateQueryOperatorInput>;
  updatedAt: Maybe<DateQueryOperatorInput>;
  sys: Maybe<ContentfulMusicSysFilterInput>;
  node_locale: Maybe<StringQueryOperatorInput>;
  featured: Maybe<ContentfulFeaturedFilterListInput>;
  childContentfulMusicDescriptionRichTextNode: Maybe<ContentfulMusicDescriptionRichTextNodeFilterInput>;
};

export type ContentfulMusicFilterListInput = {
  elemMatch: Maybe<ContentfulMusicFilterInput>;
};

export type ContentfulMusicGroupConnection = {
  __typename?: "ContentfulMusicGroupConnection";
  totalCount: Scalars["Int"];
  edges: Array<ContentfulMusicEdge>;
  nodes: Array<ContentfulMusic>;
  pageInfo: PageInfo;
  field: Scalars["String"];
  fieldValue: Maybe<Scalars["String"]>;
};

export type ContentfulMusicSortInput = {
  fields: Maybe<Array<Maybe<ContentfulMusicFieldsEnum>>>;
  order: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulMusicSys = {
  __typename?: "ContentfulMusicSys";
  revision: Maybe<Scalars["Int"]>;
  contentType: Maybe<ContentfulMusicSysContentType>;
};

export type ContentfulMusicSysContentType = {
  __typename?: "ContentfulMusicSysContentType";
  sys: Maybe<ContentfulMusicSysContentTypeSys>;
};

export type ContentfulMusicSysContentTypeFilterInput = {
  sys: Maybe<ContentfulMusicSysContentTypeSysFilterInput>;
};

export type ContentfulMusicSysContentTypeSys = {
  __typename?: "ContentfulMusicSysContentTypeSys";
  type: Maybe<Scalars["String"]>;
  linkType: Maybe<Scalars["String"]>;
  id: Maybe<Scalars["String"]>;
  contentful_id: Maybe<Scalars["String"]>;
};

export type ContentfulMusicSysContentTypeSysFilterInput = {
  type: Maybe<StringQueryOperatorInput>;
  linkType: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  contentful_id: Maybe<StringQueryOperatorInput>;
};

export type ContentfulMusicSysFilterInput = {
  revision: Maybe<IntQueryOperatorInput>;
  contentType: Maybe<ContentfulMusicSysContentTypeFilterInput>;
};

export type ContentfulResize = {
  __typename?: "ContentfulResize";
  base64: Maybe<Scalars["String"]>;
  tracedSVG: Maybe<Scalars["String"]>;
  src: Maybe<Scalars["String"]>;
  width: Maybe<Scalars["Int"]>;
  height: Maybe<Scalars["Int"]>;
  aspectRatio: Maybe<Scalars["Float"]>;
};

export type ContentfulResizeFilterInput = {
  base64: Maybe<StringQueryOperatorInput>;
  tracedSVG: Maybe<StringQueryOperatorInput>;
  src: Maybe<StringQueryOperatorInput>;
  width: Maybe<IntQueryOperatorInput>;
  height: Maybe<IntQueryOperatorInput>;
  aspectRatio: Maybe<FloatQueryOperatorInput>;
};

export type ContentfulResolutions = {
  __typename?: "ContentfulResolutions";
  base64: Maybe<Scalars["String"]>;
  tracedSVG: Maybe<Scalars["String"]>;
  aspectRatio: Maybe<Scalars["Float"]>;
  width: Scalars["Float"];
  height: Scalars["Float"];
  src: Scalars["String"];
  srcSet: Scalars["String"];
  srcWebp: Maybe<Scalars["String"]>;
  srcSetWebp: Maybe<Scalars["String"]>;
};

export type ContentfulResolutionsFilterInput = {
  base64: Maybe<StringQueryOperatorInput>;
  tracedSVG: Maybe<StringQueryOperatorInput>;
  aspectRatio: Maybe<FloatQueryOperatorInput>;
  width: Maybe<FloatQueryOperatorInput>;
  height: Maybe<FloatQueryOperatorInput>;
  src: Maybe<StringQueryOperatorInput>;
  srcSet: Maybe<StringQueryOperatorInput>;
  srcWebp: Maybe<StringQueryOperatorInput>;
  srcSetWebp: Maybe<StringQueryOperatorInput>;
};

export type ContentfulSchool = Node & {
  __typename?: "ContentfulSchool";
  id: Scalars["ID"];
  parent: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  name: Maybe<Scalars["String"]>;
  location: Maybe<ContentfulSchoolLocation>;
  startDate: Maybe<Scalars["Date"]>;
  endDate: Maybe<Scalars["Date"]>;
  major: Maybe<Array<Maybe<Scalars["String"]>>>;
  minor: Maybe<Array<Maybe<Scalars["String"]>>>;
  concentration: Maybe<Array<Maybe<Scalars["String"]>>>;
  gpa: Maybe<Scalars["Int"]>;
  inProgress: Maybe<Scalars["Boolean"]>;
  city: Maybe<Scalars["String"]>;
  state: Maybe<Scalars["String"]>;
  logo: Maybe<ContentfulAsset>;
  spaceId: Maybe<Scalars["String"]>;
  contentful_id: Maybe<Scalars["String"]>;
  createdAt: Maybe<Scalars["Date"]>;
  updatedAt: Maybe<Scalars["Date"]>;
  sys: Maybe<ContentfulSchoolSys>;
  node_locale: Maybe<Scalars["String"]>;
};

export type ContentfulSchoolStartDateArgs = {
  formatString: Maybe<Scalars["String"]>;
  fromNow: Maybe<Scalars["Boolean"]>;
  difference: Maybe<Scalars["String"]>;
  locale: Maybe<Scalars["String"]>;
};

export type ContentfulSchoolEndDateArgs = {
  formatString: Maybe<Scalars["String"]>;
  fromNow: Maybe<Scalars["Boolean"]>;
  difference: Maybe<Scalars["String"]>;
  locale: Maybe<Scalars["String"]>;
};

export type ContentfulSchoolCreatedAtArgs = {
  formatString: Maybe<Scalars["String"]>;
  fromNow: Maybe<Scalars["Boolean"]>;
  difference: Maybe<Scalars["String"]>;
  locale: Maybe<Scalars["String"]>;
};

export type ContentfulSchoolUpdatedAtArgs = {
  formatString: Maybe<Scalars["String"]>;
  fromNow: Maybe<Scalars["Boolean"]>;
  difference: Maybe<Scalars["String"]>;
  locale: Maybe<Scalars["String"]>;
};

export type ContentfulSchoolConnection = {
  __typename?: "ContentfulSchoolConnection";
  totalCount: Scalars["Int"];
  edges: Array<ContentfulSchoolEdge>;
  nodes: Array<ContentfulSchool>;
  pageInfo: PageInfo;
  distinct: Array<Scalars["String"]>;
  group: Array<ContentfulSchoolGroupConnection>;
};

export type ContentfulSchoolConnectionDistinctArgs = {
  field: ContentfulSchoolFieldsEnum;
};

export type ContentfulSchoolConnectionGroupArgs = {
  skip: Maybe<Scalars["Int"]>;
  limit: Maybe<Scalars["Int"]>;
  field: ContentfulSchoolFieldsEnum;
};

export type ContentfulSchoolEdge = {
  __typename?: "ContentfulSchoolEdge";
  next: Maybe<ContentfulSchool>;
  node: ContentfulSchool;
  previous: Maybe<ContentfulSchool>;
};

export enum ContentfulSchoolFieldsEnum {
  Id = "id",
  ParentId = "parent___id",
  ParentParentId = "parent___parent___id",
  ParentParentParentId = "parent___parent___parent___id",
  ParentParentParentChildren = "parent___parent___parent___children",
  ParentParentChildren = "parent___parent___children",
  ParentParentChildrenId = "parent___parent___children___id",
  ParentParentChildrenChildren = "parent___parent___children___children",
  ParentParentInternalContent = "parent___parent___internal___content",
  ParentParentInternalContentDigest = "parent___parent___internal___contentDigest",
  ParentParentInternalDescription = "parent___parent___internal___description",
  ParentParentInternalFieldOwners = "parent___parent___internal___fieldOwners",
  ParentParentInternalIgnoreType = "parent___parent___internal___ignoreType",
  ParentParentInternalMediaType = "parent___parent___internal___mediaType",
  ParentParentInternalOwner = "parent___parent___internal___owner",
  ParentParentInternalType = "parent___parent___internal___type",
  ParentChildren = "parent___children",
  ParentChildrenId = "parent___children___id",
  ParentChildrenParentId = "parent___children___parent___id",
  ParentChildrenParentChildren = "parent___children___parent___children",
  ParentChildrenChildren = "parent___children___children",
  ParentChildrenChildrenId = "parent___children___children___id",
  ParentChildrenChildrenChildren = "parent___children___children___children",
  ParentChildrenInternalContent = "parent___children___internal___content",
  ParentChildrenInternalContentDigest = "parent___children___internal___contentDigest",
  ParentChildrenInternalDescription = "parent___children___internal___description",
  ParentChildrenInternalFieldOwners = "parent___children___internal___fieldOwners",
  ParentChildrenInternalIgnoreType = "parent___children___internal___ignoreType",
  ParentChildrenInternalMediaType = "parent___children___internal___mediaType",
  ParentChildrenInternalOwner = "parent___children___internal___owner",
  ParentChildrenInternalType = "parent___children___internal___type",
  ParentInternalContent = "parent___internal___content",
  ParentInternalContentDigest = "parent___internal___contentDigest",
  ParentInternalDescription = "parent___internal___description",
  ParentInternalFieldOwners = "parent___internal___fieldOwners",
  ParentInternalIgnoreType = "parent___internal___ignoreType",
  ParentInternalMediaType = "parent___internal___mediaType",
  ParentInternalOwner = "parent___internal___owner",
  ParentInternalType = "parent___internal___type",
  Children = "children",
  ChildrenId = "children___id",
  ChildrenParentId = "children___parent___id",
  ChildrenParentParentId = "children___parent___parent___id",
  ChildrenParentParentChildren = "children___parent___parent___children",
  ChildrenParentChildren = "children___parent___children",
  ChildrenParentChildrenId = "children___parent___children___id",
  ChildrenParentChildrenChildren = "children___parent___children___children",
  ChildrenParentInternalContent = "children___parent___internal___content",
  ChildrenParentInternalContentDigest = "children___parent___internal___contentDigest",
  ChildrenParentInternalDescription = "children___parent___internal___description",
  ChildrenParentInternalFieldOwners = "children___parent___internal___fieldOwners",
  ChildrenParentInternalIgnoreType = "children___parent___internal___ignoreType",
  ChildrenParentInternalMediaType = "children___parent___internal___mediaType",
  ChildrenParentInternalOwner = "children___parent___internal___owner",
  ChildrenParentInternalType = "children___parent___internal___type",
  ChildrenChildren = "children___children",
  ChildrenChildrenId = "children___children___id",
  ChildrenChildrenParentId = "children___children___parent___id",
  ChildrenChildrenParentChildren = "children___children___parent___children",
  ChildrenChildrenChildren = "children___children___children",
  ChildrenChildrenChildrenId = "children___children___children___id",
  ChildrenChildrenChildrenChildren = "children___children___children___children",
  ChildrenChildrenInternalContent = "children___children___internal___content",
  ChildrenChildrenInternalContentDigest = "children___children___internal___contentDigest",
  ChildrenChildrenInternalDescription = "children___children___internal___description",
  ChildrenChildrenInternalFieldOwners = "children___children___internal___fieldOwners",
  ChildrenChildrenInternalIgnoreType = "children___children___internal___ignoreType",
  ChildrenChildrenInternalMediaType = "children___children___internal___mediaType",
  ChildrenChildrenInternalOwner = "children___children___internal___owner",
  ChildrenChildrenInternalType = "children___children___internal___type",
  ChildrenInternalContent = "children___internal___content",
  ChildrenInternalContentDigest = "children___internal___contentDigest",
  ChildrenInternalDescription = "children___internal___description",
  ChildrenInternalFieldOwners = "children___internal___fieldOwners",
  ChildrenInternalIgnoreType = "children___internal___ignoreType",
  ChildrenInternalMediaType = "children___internal___mediaType",
  ChildrenInternalOwner = "children___internal___owner",
  ChildrenInternalType = "children___internal___type",
  InternalContent = "internal___content",
  InternalContentDigest = "internal___contentDigest",
  InternalDescription = "internal___description",
  InternalFieldOwners = "internal___fieldOwners",
  InternalIgnoreType = "internal___ignoreType",
  InternalMediaType = "internal___mediaType",
  InternalOwner = "internal___owner",
  InternalType = "internal___type",
  Name = "name",
  LocationLon = "location___lon",
  LocationLat = "location___lat",
  StartDate = "startDate",
  EndDate = "endDate",
  Major = "major",
  Minor = "minor",
  Concentration = "concentration",
  Gpa = "gpa",
  InProgress = "inProgress",
  City = "city",
  State = "state",
  LogoId = "logo___id",
  LogoParentId = "logo___parent___id",
  LogoParentParentId = "logo___parent___parent___id",
  LogoParentParentChildren = "logo___parent___parent___children",
  LogoParentChildren = "logo___parent___children",
  LogoParentChildrenId = "logo___parent___children___id",
  LogoParentChildrenChildren = "logo___parent___children___children",
  LogoParentInternalContent = "logo___parent___internal___content",
  LogoParentInternalContentDigest = "logo___parent___internal___contentDigest",
  LogoParentInternalDescription = "logo___parent___internal___description",
  LogoParentInternalFieldOwners = "logo___parent___internal___fieldOwners",
  LogoParentInternalIgnoreType = "logo___parent___internal___ignoreType",
  LogoParentInternalMediaType = "logo___parent___internal___mediaType",
  LogoParentInternalOwner = "logo___parent___internal___owner",
  LogoParentInternalType = "logo___parent___internal___type",
  LogoChildren = "logo___children",
  LogoChildrenId = "logo___children___id",
  LogoChildrenParentId = "logo___children___parent___id",
  LogoChildrenParentChildren = "logo___children___parent___children",
  LogoChildrenChildren = "logo___children___children",
  LogoChildrenChildrenId = "logo___children___children___id",
  LogoChildrenChildrenChildren = "logo___children___children___children",
  LogoChildrenInternalContent = "logo___children___internal___content",
  LogoChildrenInternalContentDigest = "logo___children___internal___contentDigest",
  LogoChildrenInternalDescription = "logo___children___internal___description",
  LogoChildrenInternalFieldOwners = "logo___children___internal___fieldOwners",
  LogoChildrenInternalIgnoreType = "logo___children___internal___ignoreType",
  LogoChildrenInternalMediaType = "logo___children___internal___mediaType",
  LogoChildrenInternalOwner = "logo___children___internal___owner",
  LogoChildrenInternalType = "logo___children___internal___type",
  LogoInternalContent = "logo___internal___content",
  LogoInternalContentDigest = "logo___internal___contentDigest",
  LogoInternalDescription = "logo___internal___description",
  LogoInternalFieldOwners = "logo___internal___fieldOwners",
  LogoInternalIgnoreType = "logo___internal___ignoreType",
  LogoInternalMediaType = "logo___internal___mediaType",
  LogoInternalOwner = "logo___internal___owner",
  LogoInternalType = "logo___internal___type",
  LogoContentfulId = "logo___contentful_id",
  LogoFileUrl = "logo___file___url",
  LogoFileDetailsSize = "logo___file___details___size",
  LogoFileFileName = "logo___file___fileName",
  LogoFileContentType = "logo___file___contentType",
  LogoTitle = "logo___title",
  LogoDescription = "logo___description",
  LogoNodeLocale = "logo___node_locale",
  LogoLocalFileSourceInstanceName = "logo___localFile___sourceInstanceName",
  LogoLocalFileAbsolutePath = "logo___localFile___absolutePath",
  LogoLocalFileRelativePath = "logo___localFile___relativePath",
  LogoLocalFileExtension = "logo___localFile___extension",
  LogoLocalFileSize = "logo___localFile___size",
  LogoLocalFilePrettySize = "logo___localFile___prettySize",
  LogoLocalFileModifiedTime = "logo___localFile___modifiedTime",
  LogoLocalFileAccessTime = "logo___localFile___accessTime",
  LogoLocalFileChangeTime = "logo___localFile___changeTime",
  LogoLocalFileBirthTime = "logo___localFile___birthTime",
  LogoLocalFileRoot = "logo___localFile___root",
  LogoLocalFileDir = "logo___localFile___dir",
  LogoLocalFileBase = "logo___localFile___base",
  LogoLocalFileExt = "logo___localFile___ext",
  LogoLocalFileName = "logo___localFile___name",
  LogoLocalFileRelativeDirectory = "logo___localFile___relativeDirectory",
  LogoLocalFileDev = "logo___localFile___dev",
  LogoLocalFileMode = "logo___localFile___mode",
  LogoLocalFileNlink = "logo___localFile___nlink",
  LogoLocalFileUid = "logo___localFile___uid",
  LogoLocalFileGid = "logo___localFile___gid",
  LogoLocalFileRdev = "logo___localFile___rdev",
  LogoLocalFileIno = "logo___localFile___ino",
  LogoLocalFileAtimeMs = "logo___localFile___atimeMs",
  LogoLocalFileMtimeMs = "logo___localFile___mtimeMs",
  LogoLocalFileCtimeMs = "logo___localFile___ctimeMs",
  LogoLocalFileAtime = "logo___localFile___atime",
  LogoLocalFileMtime = "logo___localFile___mtime",
  LogoLocalFileCtime = "logo___localFile___ctime",
  LogoLocalFileBirthtime = "logo___localFile___birthtime",
  LogoLocalFileBirthtimeMs = "logo___localFile___birthtimeMs",
  LogoLocalFileBlksize = "logo___localFile___blksize",
  LogoLocalFileBlocks = "logo___localFile___blocks",
  LogoLocalFileUrl = "logo___localFile___url",
  LogoLocalFileId = "logo___localFile___id",
  LogoLocalFileParentId = "logo___localFile___parent___id",
  LogoLocalFileParentChildren = "logo___localFile___parent___children",
  LogoLocalFileChildren = "logo___localFile___children",
  LogoLocalFileChildrenId = "logo___localFile___children___id",
  LogoLocalFileChildrenChildren = "logo___localFile___children___children",
  LogoLocalFileInternalContent = "logo___localFile___internal___content",
  LogoLocalFileInternalContentDigest = "logo___localFile___internal___contentDigest",
  LogoLocalFileInternalDescription = "logo___localFile___internal___description",
  LogoLocalFileInternalFieldOwners = "logo___localFile___internal___fieldOwners",
  LogoLocalFileInternalIgnoreType = "logo___localFile___internal___ignoreType",
  LogoLocalFileInternalMediaType = "logo___localFile___internal___mediaType",
  LogoLocalFileInternalOwner = "logo___localFile___internal___owner",
  LogoLocalFileInternalType = "logo___localFile___internal___type",
  LogoFixedBase64 = "logo___fixed___base64",
  LogoFixedTracedSvg = "logo___fixed___tracedSVG",
  LogoFixedAspectRatio = "logo___fixed___aspectRatio",
  LogoFixedWidth = "logo___fixed___width",
  LogoFixedHeight = "logo___fixed___height",
  LogoFixedSrc = "logo___fixed___src",
  LogoFixedSrcSet = "logo___fixed___srcSet",
  LogoFixedSrcWebp = "logo___fixed___srcWebp",
  LogoFixedSrcSetWebp = "logo___fixed___srcSetWebp",
  LogoResolutionsBase64 = "logo___resolutions___base64",
  LogoResolutionsTracedSvg = "logo___resolutions___tracedSVG",
  LogoResolutionsAspectRatio = "logo___resolutions___aspectRatio",
  LogoResolutionsWidth = "logo___resolutions___width",
  LogoResolutionsHeight = "logo___resolutions___height",
  LogoResolutionsSrc = "logo___resolutions___src",
  LogoResolutionsSrcSet = "logo___resolutions___srcSet",
  LogoResolutionsSrcWebp = "logo___resolutions___srcWebp",
  LogoResolutionsSrcSetWebp = "logo___resolutions___srcSetWebp",
  LogoFluidBase64 = "logo___fluid___base64",
  LogoFluidTracedSvg = "logo___fluid___tracedSVG",
  LogoFluidAspectRatio = "logo___fluid___aspectRatio",
  LogoFluidSrc = "logo___fluid___src",
  LogoFluidSrcSet = "logo___fluid___srcSet",
  LogoFluidSrcWebp = "logo___fluid___srcWebp",
  LogoFluidSrcSetWebp = "logo___fluid___srcSetWebp",
  LogoFluidSizes = "logo___fluid___sizes",
  LogoSizesBase64 = "logo___sizes___base64",
  LogoSizesTracedSvg = "logo___sizes___tracedSVG",
  LogoSizesAspectRatio = "logo___sizes___aspectRatio",
  LogoSizesSrc = "logo___sizes___src",
  LogoSizesSrcSet = "logo___sizes___srcSet",
  LogoSizesSrcWebp = "logo___sizes___srcWebp",
  LogoSizesSrcSetWebp = "logo___sizes___srcSetWebp",
  LogoSizesSizes = "logo___sizes___sizes",
  LogoResizeBase64 = "logo___resize___base64",
  LogoResizeTracedSvg = "logo___resize___tracedSVG",
  LogoResizeSrc = "logo___resize___src",
  LogoResizeWidth = "logo___resize___width",
  LogoResizeHeight = "logo___resize___height",
  LogoResizeAspectRatio = "logo___resize___aspectRatio",
  SpaceId = "spaceId",
  ContentfulId = "contentful_id",
  CreatedAt = "createdAt",
  UpdatedAt = "updatedAt",
  SysRevision = "sys___revision",
  SysContentTypeSysType = "sys___contentType___sys___type",
  SysContentTypeSysLinkType = "sys___contentType___sys___linkType",
  SysContentTypeSysId = "sys___contentType___sys___id",
  SysContentTypeSysContentfulId = "sys___contentType___sys___contentful_id",
  NodeLocale = "node_locale",
}

export type ContentfulSchoolFilterInput = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  name: Maybe<StringQueryOperatorInput>;
  location: Maybe<ContentfulSchoolLocationFilterInput>;
  startDate: Maybe<DateQueryOperatorInput>;
  endDate: Maybe<DateQueryOperatorInput>;
  major: Maybe<StringQueryOperatorInput>;
  minor: Maybe<StringQueryOperatorInput>;
  concentration: Maybe<StringQueryOperatorInput>;
  gpa: Maybe<IntQueryOperatorInput>;
  inProgress: Maybe<BooleanQueryOperatorInput>;
  city: Maybe<StringQueryOperatorInput>;
  state: Maybe<StringQueryOperatorInput>;
  logo: Maybe<ContentfulAssetFilterInput>;
  spaceId: Maybe<StringQueryOperatorInput>;
  contentful_id: Maybe<StringQueryOperatorInput>;
  createdAt: Maybe<DateQueryOperatorInput>;
  updatedAt: Maybe<DateQueryOperatorInput>;
  sys: Maybe<ContentfulSchoolSysFilterInput>;
  node_locale: Maybe<StringQueryOperatorInput>;
};

export type ContentfulSchoolGroupConnection = {
  __typename?: "ContentfulSchoolGroupConnection";
  totalCount: Scalars["Int"];
  edges: Array<ContentfulSchoolEdge>;
  nodes: Array<ContentfulSchool>;
  pageInfo: PageInfo;
  field: Scalars["String"];
  fieldValue: Maybe<Scalars["String"]>;
};

export type ContentfulSchoolLocation = {
  __typename?: "ContentfulSchoolLocation";
  lon: Maybe<Scalars["Float"]>;
  lat: Maybe<Scalars["Float"]>;
};

export type ContentfulSchoolLocationFilterInput = {
  lon: Maybe<FloatQueryOperatorInput>;
  lat: Maybe<FloatQueryOperatorInput>;
};

export type ContentfulSchoolSortInput = {
  fields: Maybe<Array<Maybe<ContentfulSchoolFieldsEnum>>>;
  order: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulSchoolSys = {
  __typename?: "ContentfulSchoolSys";
  revision: Maybe<Scalars["Int"]>;
  contentType: Maybe<ContentfulSchoolSysContentType>;
};

export type ContentfulSchoolSysContentType = {
  __typename?: "ContentfulSchoolSysContentType";
  sys: Maybe<ContentfulSchoolSysContentTypeSys>;
};

export type ContentfulSchoolSysContentTypeFilterInput = {
  sys: Maybe<ContentfulSchoolSysContentTypeSysFilterInput>;
};

export type ContentfulSchoolSysContentTypeSys = {
  __typename?: "ContentfulSchoolSysContentTypeSys";
  type: Maybe<Scalars["String"]>;
  linkType: Maybe<Scalars["String"]>;
  id: Maybe<Scalars["String"]>;
  contentful_id: Maybe<Scalars["String"]>;
};

export type ContentfulSchoolSysContentTypeSysFilterInput = {
  type: Maybe<StringQueryOperatorInput>;
  linkType: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  contentful_id: Maybe<StringQueryOperatorInput>;
};

export type ContentfulSchoolSysFilterInput = {
  revision: Maybe<IntQueryOperatorInput>;
  contentType: Maybe<ContentfulSchoolSysContentTypeFilterInput>;
};

export type ContentfulSizes = {
  __typename?: "ContentfulSizes";
  base64: Maybe<Scalars["String"]>;
  tracedSVG: Maybe<Scalars["String"]>;
  aspectRatio: Scalars["Float"];
  src: Scalars["String"];
  srcSet: Scalars["String"];
  srcWebp: Maybe<Scalars["String"]>;
  srcSetWebp: Maybe<Scalars["String"]>;
  sizes: Scalars["String"];
};

export type ContentfulSizesFilterInput = {
  base64: Maybe<StringQueryOperatorInput>;
  tracedSVG: Maybe<StringQueryOperatorInput>;
  aspectRatio: Maybe<FloatQueryOperatorInput>;
  src: Maybe<StringQueryOperatorInput>;
  srcSet: Maybe<StringQueryOperatorInput>;
  srcWebp: Maybe<StringQueryOperatorInput>;
  srcSetWebp: Maybe<StringQueryOperatorInput>;
  sizes: Maybe<StringQueryOperatorInput>;
};

export type DateQueryOperatorInput = {
  eq: Maybe<Scalars["Date"]>;
  ne: Maybe<Scalars["Date"]>;
  gt: Maybe<Scalars["Date"]>;
  gte: Maybe<Scalars["Date"]>;
  lt: Maybe<Scalars["Date"]>;
  lte: Maybe<Scalars["Date"]>;
  in: Maybe<Array<Maybe<Scalars["Date"]>>>;
  nin: Maybe<Array<Maybe<Scalars["Date"]>>>;
};

export type Directory = Node & {
  __typename?: "Directory";
  sourceInstanceName: Scalars["String"];
  absolutePath: Scalars["String"];
  relativePath: Scalars["String"];
  extension: Scalars["String"];
  size: Scalars["Int"];
  prettySize: Scalars["String"];
  modifiedTime: Scalars["Date"];
  accessTime: Scalars["Date"];
  changeTime: Scalars["Date"];
  birthTime: Scalars["Date"];
  root: Scalars["String"];
  dir: Scalars["String"];
  base: Scalars["String"];
  ext: Scalars["String"];
  name: Scalars["String"];
  relativeDirectory: Scalars["String"];
  dev: Scalars["Int"];
  mode: Scalars["Int"];
  nlink: Scalars["Int"];
  uid: Scalars["Int"];
  gid: Scalars["Int"];
  rdev: Scalars["Int"];
  ino: Scalars["Float"];
  atimeMs: Scalars["Float"];
  mtimeMs: Scalars["Float"];
  ctimeMs: Scalars["Float"];
  atime: Scalars["Date"];
  mtime: Scalars["Date"];
  ctime: Scalars["Date"];
  birthtime: Maybe<Scalars["Date"]>;
  birthtimeMs: Maybe<Scalars["Float"]>;
  id: Scalars["ID"];
  parent: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type DirectoryModifiedTimeArgs = {
  formatString: Maybe<Scalars["String"]>;
  fromNow: Maybe<Scalars["Boolean"]>;
  difference: Maybe<Scalars["String"]>;
  locale: Maybe<Scalars["String"]>;
};

export type DirectoryAccessTimeArgs = {
  formatString: Maybe<Scalars["String"]>;
  fromNow: Maybe<Scalars["Boolean"]>;
  difference: Maybe<Scalars["String"]>;
  locale: Maybe<Scalars["String"]>;
};

export type DirectoryChangeTimeArgs = {
  formatString: Maybe<Scalars["String"]>;
  fromNow: Maybe<Scalars["Boolean"]>;
  difference: Maybe<Scalars["String"]>;
  locale: Maybe<Scalars["String"]>;
};

export type DirectoryBirthTimeArgs = {
  formatString: Maybe<Scalars["String"]>;
  fromNow: Maybe<Scalars["Boolean"]>;
  difference: Maybe<Scalars["String"]>;
  locale: Maybe<Scalars["String"]>;
};

export type DirectoryAtimeArgs = {
  formatString: Maybe<Scalars["String"]>;
  fromNow: Maybe<Scalars["Boolean"]>;
  difference: Maybe<Scalars["String"]>;
  locale: Maybe<Scalars["String"]>;
};

export type DirectoryMtimeArgs = {
  formatString: Maybe<Scalars["String"]>;
  fromNow: Maybe<Scalars["Boolean"]>;
  difference: Maybe<Scalars["String"]>;
  locale: Maybe<Scalars["String"]>;
};

export type DirectoryCtimeArgs = {
  formatString: Maybe<Scalars["String"]>;
  fromNow: Maybe<Scalars["Boolean"]>;
  difference: Maybe<Scalars["String"]>;
  locale: Maybe<Scalars["String"]>;
};

export type DirectoryConnection = {
  __typename?: "DirectoryConnection";
  totalCount: Scalars["Int"];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  distinct: Array<Scalars["String"]>;
  group: Array<DirectoryGroupConnection>;
};

export type DirectoryConnectionDistinctArgs = {
  field: DirectoryFieldsEnum;
};

export type DirectoryConnectionGroupArgs = {
  skip: Maybe<Scalars["Int"]>;
  limit: Maybe<Scalars["Int"]>;
  field: DirectoryFieldsEnum;
};

export type DirectoryEdge = {
  __typename?: "DirectoryEdge";
  next: Maybe<Directory>;
  node: Directory;
  previous: Maybe<Directory>;
};

export enum DirectoryFieldsEnum {
  SourceInstanceName = "sourceInstanceName",
  AbsolutePath = "absolutePath",
  RelativePath = "relativePath",
  Extension = "extension",
  Size = "size",
  PrettySize = "prettySize",
  ModifiedTime = "modifiedTime",
  AccessTime = "accessTime",
  ChangeTime = "changeTime",
  BirthTime = "birthTime",
  Root = "root",
  Dir = "dir",
  Base = "base",
  Ext = "ext",
  Name = "name",
  RelativeDirectory = "relativeDirectory",
  Dev = "dev",
  Mode = "mode",
  Nlink = "nlink",
  Uid = "uid",
  Gid = "gid",
  Rdev = "rdev",
  Ino = "ino",
  AtimeMs = "atimeMs",
  MtimeMs = "mtimeMs",
  CtimeMs = "ctimeMs",
  Atime = "atime",
  Mtime = "mtime",
  Ctime = "ctime",
  Birthtime = "birthtime",
  BirthtimeMs = "birthtimeMs",
  Id = "id",
  ParentId = "parent___id",
  ParentParentId = "parent___parent___id",
  ParentParentParentId = "parent___parent___parent___id",
  ParentParentParentChildren = "parent___parent___parent___children",
  ParentParentChildren = "parent___parent___children",
  ParentParentChildrenId = "parent___parent___children___id",
  ParentParentChildrenChildren = "parent___parent___children___children",
  ParentParentInternalContent = "parent___parent___internal___content",
  ParentParentInternalContentDigest = "parent___parent___internal___contentDigest",
  ParentParentInternalDescription = "parent___parent___internal___description",
  ParentParentInternalFieldOwners = "parent___parent___internal___fieldOwners",
  ParentParentInternalIgnoreType = "parent___parent___internal___ignoreType",
  ParentParentInternalMediaType = "parent___parent___internal___mediaType",
  ParentParentInternalOwner = "parent___parent___internal___owner",
  ParentParentInternalType = "parent___parent___internal___type",
  ParentChildren = "parent___children",
  ParentChildrenId = "parent___children___id",
  ParentChildrenParentId = "parent___children___parent___id",
  ParentChildrenParentChildren = "parent___children___parent___children",
  ParentChildrenChildren = "parent___children___children",
  ParentChildrenChildrenId = "parent___children___children___id",
  ParentChildrenChildrenChildren = "parent___children___children___children",
  ParentChildrenInternalContent = "parent___children___internal___content",
  ParentChildrenInternalContentDigest = "parent___children___internal___contentDigest",
  ParentChildrenInternalDescription = "parent___children___internal___description",
  ParentChildrenInternalFieldOwners = "parent___children___internal___fieldOwners",
  ParentChildrenInternalIgnoreType = "parent___children___internal___ignoreType",
  ParentChildrenInternalMediaType = "parent___children___internal___mediaType",
  ParentChildrenInternalOwner = "parent___children___internal___owner",
  ParentChildrenInternalType = "parent___children___internal___type",
  ParentInternalContent = "parent___internal___content",
  ParentInternalContentDigest = "parent___internal___contentDigest",
  ParentInternalDescription = "parent___internal___description",
  ParentInternalFieldOwners = "parent___internal___fieldOwners",
  ParentInternalIgnoreType = "parent___internal___ignoreType",
  ParentInternalMediaType = "parent___internal___mediaType",
  ParentInternalOwner = "parent___internal___owner",
  ParentInternalType = "parent___internal___type",
  Children = "children",
  ChildrenId = "children___id",
  ChildrenParentId = "children___parent___id",
  ChildrenParentParentId = "children___parent___parent___id",
  ChildrenParentParentChildren = "children___parent___parent___children",
  ChildrenParentChildren = "children___parent___children",
  ChildrenParentChildrenId = "children___parent___children___id",
  ChildrenParentChildrenChildren = "children___parent___children___children",
  ChildrenParentInternalContent = "children___parent___internal___content",
  ChildrenParentInternalContentDigest = "children___parent___internal___contentDigest",
  ChildrenParentInternalDescription = "children___parent___internal___description",
  ChildrenParentInternalFieldOwners = "children___parent___internal___fieldOwners",
  ChildrenParentInternalIgnoreType = "children___parent___internal___ignoreType",
  ChildrenParentInternalMediaType = "children___parent___internal___mediaType",
  ChildrenParentInternalOwner = "children___parent___internal___owner",
  ChildrenParentInternalType = "children___parent___internal___type",
  ChildrenChildren = "children___children",
  ChildrenChildrenId = "children___children___id",
  ChildrenChildrenParentId = "children___children___parent___id",
  ChildrenChildrenParentChildren = "children___children___parent___children",
  ChildrenChildrenChildren = "children___children___children",
  ChildrenChildrenChildrenId = "children___children___children___id",
  ChildrenChildrenChildrenChildren = "children___children___children___children",
  ChildrenChildrenInternalContent = "children___children___internal___content",
  ChildrenChildrenInternalContentDigest = "children___children___internal___contentDigest",
  ChildrenChildrenInternalDescription = "children___children___internal___description",
  ChildrenChildrenInternalFieldOwners = "children___children___internal___fieldOwners",
  ChildrenChildrenInternalIgnoreType = "children___children___internal___ignoreType",
  ChildrenChildrenInternalMediaType = "children___children___internal___mediaType",
  ChildrenChildrenInternalOwner = "children___children___internal___owner",
  ChildrenChildrenInternalType = "children___children___internal___type",
  ChildrenInternalContent = "children___internal___content",
  ChildrenInternalContentDigest = "children___internal___contentDigest",
  ChildrenInternalDescription = "children___internal___description",
  ChildrenInternalFieldOwners = "children___internal___fieldOwners",
  ChildrenInternalIgnoreType = "children___internal___ignoreType",
  ChildrenInternalMediaType = "children___internal___mediaType",
  ChildrenInternalOwner = "children___internal___owner",
  ChildrenInternalType = "children___internal___type",
  InternalContent = "internal___content",
  InternalContentDigest = "internal___contentDigest",
  InternalDescription = "internal___description",
  InternalFieldOwners = "internal___fieldOwners",
  InternalIgnoreType = "internal___ignoreType",
  InternalMediaType = "internal___mediaType",
  InternalOwner = "internal___owner",
  InternalType = "internal___type",
}

export type DirectoryFilterInput = {
  sourceInstanceName: Maybe<StringQueryOperatorInput>;
  absolutePath: Maybe<StringQueryOperatorInput>;
  relativePath: Maybe<StringQueryOperatorInput>;
  extension: Maybe<StringQueryOperatorInput>;
  size: Maybe<IntQueryOperatorInput>;
  prettySize: Maybe<StringQueryOperatorInput>;
  modifiedTime: Maybe<DateQueryOperatorInput>;
  accessTime: Maybe<DateQueryOperatorInput>;
  changeTime: Maybe<DateQueryOperatorInput>;
  birthTime: Maybe<DateQueryOperatorInput>;
  root: Maybe<StringQueryOperatorInput>;
  dir: Maybe<StringQueryOperatorInput>;
  base: Maybe<StringQueryOperatorInput>;
  ext: Maybe<StringQueryOperatorInput>;
  name: Maybe<StringQueryOperatorInput>;
  relativeDirectory: Maybe<StringQueryOperatorInput>;
  dev: Maybe<IntQueryOperatorInput>;
  mode: Maybe<IntQueryOperatorInput>;
  nlink: Maybe<IntQueryOperatorInput>;
  uid: Maybe<IntQueryOperatorInput>;
  gid: Maybe<IntQueryOperatorInput>;
  rdev: Maybe<IntQueryOperatorInput>;
  ino: Maybe<FloatQueryOperatorInput>;
  atimeMs: Maybe<FloatQueryOperatorInput>;
  mtimeMs: Maybe<FloatQueryOperatorInput>;
  ctimeMs: Maybe<FloatQueryOperatorInput>;
  atime: Maybe<DateQueryOperatorInput>;
  mtime: Maybe<DateQueryOperatorInput>;
  ctime: Maybe<DateQueryOperatorInput>;
  birthtime: Maybe<DateQueryOperatorInput>;
  birthtimeMs: Maybe<FloatQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};

export type DirectoryGroupConnection = {
  __typename?: "DirectoryGroupConnection";
  totalCount: Scalars["Int"];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  field: Scalars["String"];
  fieldValue: Maybe<Scalars["String"]>;
};

export type DirectorySortInput = {
  fields: Maybe<Array<Maybe<DirectoryFieldsEnum>>>;
  order: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type File = Node & {
  __typename?: "File";
  sourceInstanceName: Scalars["String"];
  absolutePath: Scalars["String"];
  relativePath: Scalars["String"];
  extension: Scalars["String"];
  size: Scalars["Int"];
  prettySize: Scalars["String"];
  modifiedTime: Scalars["Date"];
  accessTime: Scalars["Date"];
  changeTime: Scalars["Date"];
  birthTime: Scalars["Date"];
  root: Scalars["String"];
  dir: Scalars["String"];
  base: Scalars["String"];
  ext: Scalars["String"];
  name: Scalars["String"];
  relativeDirectory: Scalars["String"];
  dev: Scalars["Int"];
  mode: Scalars["Int"];
  nlink: Scalars["Int"];
  uid: Scalars["Int"];
  gid: Scalars["Int"];
  rdev: Scalars["Int"];
  ino: Scalars["Float"];
  atimeMs: Scalars["Float"];
  mtimeMs: Scalars["Float"];
  ctimeMs: Scalars["Float"];
  atime: Scalars["Date"];
  mtime: Scalars["Date"];
  ctime: Scalars["Date"];
  birthtime: Maybe<Scalars["Date"]>;
  birthtimeMs: Maybe<Scalars["Float"]>;
  blksize: Maybe<Scalars["Int"]>;
  blocks: Maybe<Scalars["Int"]>;
  url: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  parent: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type FileModifiedTimeArgs = {
  formatString: Maybe<Scalars["String"]>;
  fromNow: Maybe<Scalars["Boolean"]>;
  difference: Maybe<Scalars["String"]>;
  locale: Maybe<Scalars["String"]>;
};

export type FileAccessTimeArgs = {
  formatString: Maybe<Scalars["String"]>;
  fromNow: Maybe<Scalars["Boolean"]>;
  difference: Maybe<Scalars["String"]>;
  locale: Maybe<Scalars["String"]>;
};

export type FileChangeTimeArgs = {
  formatString: Maybe<Scalars["String"]>;
  fromNow: Maybe<Scalars["Boolean"]>;
  difference: Maybe<Scalars["String"]>;
  locale: Maybe<Scalars["String"]>;
};

export type FileBirthTimeArgs = {
  formatString: Maybe<Scalars["String"]>;
  fromNow: Maybe<Scalars["Boolean"]>;
  difference: Maybe<Scalars["String"]>;
  locale: Maybe<Scalars["String"]>;
};

export type FileAtimeArgs = {
  formatString: Maybe<Scalars["String"]>;
  fromNow: Maybe<Scalars["Boolean"]>;
  difference: Maybe<Scalars["String"]>;
  locale: Maybe<Scalars["String"]>;
};

export type FileMtimeArgs = {
  formatString: Maybe<Scalars["String"]>;
  fromNow: Maybe<Scalars["Boolean"]>;
  difference: Maybe<Scalars["String"]>;
  locale: Maybe<Scalars["String"]>;
};

export type FileCtimeArgs = {
  formatString: Maybe<Scalars["String"]>;
  fromNow: Maybe<Scalars["Boolean"]>;
  difference: Maybe<Scalars["String"]>;
  locale: Maybe<Scalars["String"]>;
};

export type FileConnection = {
  __typename?: "FileConnection";
  totalCount: Scalars["Int"];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  distinct: Array<Scalars["String"]>;
  group: Array<FileGroupConnection>;
};

export type FileConnectionDistinctArgs = {
  field: FileFieldsEnum;
};

export type FileConnectionGroupArgs = {
  skip: Maybe<Scalars["Int"]>;
  limit: Maybe<Scalars["Int"]>;
  field: FileFieldsEnum;
};

export type FileEdge = {
  __typename?: "FileEdge";
  next: Maybe<File>;
  node: File;
  previous: Maybe<File>;
};

export enum FileFieldsEnum {
  SourceInstanceName = "sourceInstanceName",
  AbsolutePath = "absolutePath",
  RelativePath = "relativePath",
  Extension = "extension",
  Size = "size",
  PrettySize = "prettySize",
  ModifiedTime = "modifiedTime",
  AccessTime = "accessTime",
  ChangeTime = "changeTime",
  BirthTime = "birthTime",
  Root = "root",
  Dir = "dir",
  Base = "base",
  Ext = "ext",
  Name = "name",
  RelativeDirectory = "relativeDirectory",
  Dev = "dev",
  Mode = "mode",
  Nlink = "nlink",
  Uid = "uid",
  Gid = "gid",
  Rdev = "rdev",
  Ino = "ino",
  AtimeMs = "atimeMs",
  MtimeMs = "mtimeMs",
  CtimeMs = "ctimeMs",
  Atime = "atime",
  Mtime = "mtime",
  Ctime = "ctime",
  Birthtime = "birthtime",
  BirthtimeMs = "birthtimeMs",
  Blksize = "blksize",
  Blocks = "blocks",
  Url = "url",
  Id = "id",
  ParentId = "parent___id",
  ParentParentId = "parent___parent___id",
  ParentParentParentId = "parent___parent___parent___id",
  ParentParentParentChildren = "parent___parent___parent___children",
  ParentParentChildren = "parent___parent___children",
  ParentParentChildrenId = "parent___parent___children___id",
  ParentParentChildrenChildren = "parent___parent___children___children",
  ParentParentInternalContent = "parent___parent___internal___content",
  ParentParentInternalContentDigest = "parent___parent___internal___contentDigest",
  ParentParentInternalDescription = "parent___parent___internal___description",
  ParentParentInternalFieldOwners = "parent___parent___internal___fieldOwners",
  ParentParentInternalIgnoreType = "parent___parent___internal___ignoreType",
  ParentParentInternalMediaType = "parent___parent___internal___mediaType",
  ParentParentInternalOwner = "parent___parent___internal___owner",
  ParentParentInternalType = "parent___parent___internal___type",
  ParentChildren = "parent___children",
  ParentChildrenId = "parent___children___id",
  ParentChildrenParentId = "parent___children___parent___id",
  ParentChildrenParentChildren = "parent___children___parent___children",
  ParentChildrenChildren = "parent___children___children",
  ParentChildrenChildrenId = "parent___children___children___id",
  ParentChildrenChildrenChildren = "parent___children___children___children",
  ParentChildrenInternalContent = "parent___children___internal___content",
  ParentChildrenInternalContentDigest = "parent___children___internal___contentDigest",
  ParentChildrenInternalDescription = "parent___children___internal___description",
  ParentChildrenInternalFieldOwners = "parent___children___internal___fieldOwners",
  ParentChildrenInternalIgnoreType = "parent___children___internal___ignoreType",
  ParentChildrenInternalMediaType = "parent___children___internal___mediaType",
  ParentChildrenInternalOwner = "parent___children___internal___owner",
  ParentChildrenInternalType = "parent___children___internal___type",
  ParentInternalContent = "parent___internal___content",
  ParentInternalContentDigest = "parent___internal___contentDigest",
  ParentInternalDescription = "parent___internal___description",
  ParentInternalFieldOwners = "parent___internal___fieldOwners",
  ParentInternalIgnoreType = "parent___internal___ignoreType",
  ParentInternalMediaType = "parent___internal___mediaType",
  ParentInternalOwner = "parent___internal___owner",
  ParentInternalType = "parent___internal___type",
  Children = "children",
  ChildrenId = "children___id",
  ChildrenParentId = "children___parent___id",
  ChildrenParentParentId = "children___parent___parent___id",
  ChildrenParentParentChildren = "children___parent___parent___children",
  ChildrenParentChildren = "children___parent___children",
  ChildrenParentChildrenId = "children___parent___children___id",
  ChildrenParentChildrenChildren = "children___parent___children___children",
  ChildrenParentInternalContent = "children___parent___internal___content",
  ChildrenParentInternalContentDigest = "children___parent___internal___contentDigest",
  ChildrenParentInternalDescription = "children___parent___internal___description",
  ChildrenParentInternalFieldOwners = "children___parent___internal___fieldOwners",
  ChildrenParentInternalIgnoreType = "children___parent___internal___ignoreType",
  ChildrenParentInternalMediaType = "children___parent___internal___mediaType",
  ChildrenParentInternalOwner = "children___parent___internal___owner",
  ChildrenParentInternalType = "children___parent___internal___type",
  ChildrenChildren = "children___children",
  ChildrenChildrenId = "children___children___id",
  ChildrenChildrenParentId = "children___children___parent___id",
  ChildrenChildrenParentChildren = "children___children___parent___children",
  ChildrenChildrenChildren = "children___children___children",
  ChildrenChildrenChildrenId = "children___children___children___id",
  ChildrenChildrenChildrenChildren = "children___children___children___children",
  ChildrenChildrenInternalContent = "children___children___internal___content",
  ChildrenChildrenInternalContentDigest = "children___children___internal___contentDigest",
  ChildrenChildrenInternalDescription = "children___children___internal___description",
  ChildrenChildrenInternalFieldOwners = "children___children___internal___fieldOwners",
  ChildrenChildrenInternalIgnoreType = "children___children___internal___ignoreType",
  ChildrenChildrenInternalMediaType = "children___children___internal___mediaType",
  ChildrenChildrenInternalOwner = "children___children___internal___owner",
  ChildrenChildrenInternalType = "children___children___internal___type",
  ChildrenInternalContent = "children___internal___content",
  ChildrenInternalContentDigest = "children___internal___contentDigest",
  ChildrenInternalDescription = "children___internal___description",
  ChildrenInternalFieldOwners = "children___internal___fieldOwners",
  ChildrenInternalIgnoreType = "children___internal___ignoreType",
  ChildrenInternalMediaType = "children___internal___mediaType",
  ChildrenInternalOwner = "children___internal___owner",
  ChildrenInternalType = "children___internal___type",
  InternalContent = "internal___content",
  InternalContentDigest = "internal___contentDigest",
  InternalDescription = "internal___description",
  InternalFieldOwners = "internal___fieldOwners",
  InternalIgnoreType = "internal___ignoreType",
  InternalMediaType = "internal___mediaType",
  InternalOwner = "internal___owner",
  InternalType = "internal___type",
}

export type FileFilterInput = {
  sourceInstanceName: Maybe<StringQueryOperatorInput>;
  absolutePath: Maybe<StringQueryOperatorInput>;
  relativePath: Maybe<StringQueryOperatorInput>;
  extension: Maybe<StringQueryOperatorInput>;
  size: Maybe<IntQueryOperatorInput>;
  prettySize: Maybe<StringQueryOperatorInput>;
  modifiedTime: Maybe<DateQueryOperatorInput>;
  accessTime: Maybe<DateQueryOperatorInput>;
  changeTime: Maybe<DateQueryOperatorInput>;
  birthTime: Maybe<DateQueryOperatorInput>;
  root: Maybe<StringQueryOperatorInput>;
  dir: Maybe<StringQueryOperatorInput>;
  base: Maybe<StringQueryOperatorInput>;
  ext: Maybe<StringQueryOperatorInput>;
  name: Maybe<StringQueryOperatorInput>;
  relativeDirectory: Maybe<StringQueryOperatorInput>;
  dev: Maybe<IntQueryOperatorInput>;
  mode: Maybe<IntQueryOperatorInput>;
  nlink: Maybe<IntQueryOperatorInput>;
  uid: Maybe<IntQueryOperatorInput>;
  gid: Maybe<IntQueryOperatorInput>;
  rdev: Maybe<IntQueryOperatorInput>;
  ino: Maybe<FloatQueryOperatorInput>;
  atimeMs: Maybe<FloatQueryOperatorInput>;
  mtimeMs: Maybe<FloatQueryOperatorInput>;
  ctimeMs: Maybe<FloatQueryOperatorInput>;
  atime: Maybe<DateQueryOperatorInput>;
  mtime: Maybe<DateQueryOperatorInput>;
  ctime: Maybe<DateQueryOperatorInput>;
  birthtime: Maybe<DateQueryOperatorInput>;
  birthtimeMs: Maybe<FloatQueryOperatorInput>;
  blksize: Maybe<IntQueryOperatorInput>;
  blocks: Maybe<IntQueryOperatorInput>;
  url: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};

export type FileGroupConnection = {
  __typename?: "FileGroupConnection";
  totalCount: Scalars["Int"];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  field: Scalars["String"];
  fieldValue: Maybe<Scalars["String"]>;
};

export type FileSortInput = {
  fields: Maybe<Array<Maybe<FileFieldsEnum>>>;
  order: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type FloatQueryOperatorInput = {
  eq: Maybe<Scalars["Float"]>;
  ne: Maybe<Scalars["Float"]>;
  gt: Maybe<Scalars["Float"]>;
  gte: Maybe<Scalars["Float"]>;
  lt: Maybe<Scalars["Float"]>;
  lte: Maybe<Scalars["Float"]>;
  in: Maybe<Array<Maybe<Scalars["Float"]>>>;
  nin: Maybe<Array<Maybe<Scalars["Float"]>>>;
};

export type GithubData = Node & {
  __typename?: "GithubData";
  id: Scalars["ID"];
  parent: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  data: Maybe<GithubDataData>;
  rawResult: Maybe<GithubDataRawResult>;
};

export type GithubDataConnection = {
  __typename?: "GithubDataConnection";
  totalCount: Scalars["Int"];
  edges: Array<GithubDataEdge>;
  nodes: Array<GithubData>;
  pageInfo: PageInfo;
  distinct: Array<Scalars["String"]>;
  group: Array<GithubDataGroupConnection>;
};

export type GithubDataConnectionDistinctArgs = {
  field: GithubDataFieldsEnum;
};

export type GithubDataConnectionGroupArgs = {
  skip: Maybe<Scalars["Int"]>;
  limit: Maybe<Scalars["Int"]>;
  field: GithubDataFieldsEnum;
};

export type GithubDataData = {
  __typename?: "GithubDataData";
  user: Maybe<GithubDataDataUser>;
};

export type GithubDataDataFilterInput = {
  user: Maybe<GithubDataDataUserFilterInput>;
};

export type GithubDataDataUser = {
  __typename?: "GithubDataDataUser";
  pinnedItems: Maybe<GithubDataDataUserPinnedItems>;
};

export type GithubDataDataUserFilterInput = {
  pinnedItems: Maybe<GithubDataDataUserPinnedItemsFilterInput>;
};

export type GithubDataDataUserPinnedItems = {
  __typename?: "GithubDataDataUserPinnedItems";
  nodes: Maybe<Array<Maybe<GithubDataDataUserPinnedItemsNodes>>>;
};

export type GithubDataDataUserPinnedItemsFilterInput = {
  nodes: Maybe<GithubDataDataUserPinnedItemsNodesFilterListInput>;
};

export type GithubDataDataUserPinnedItemsNodes = {
  __typename?: "GithubDataDataUserPinnedItemsNodes";
  name: Maybe<Scalars["String"]>;
  url: Maybe<Scalars["String"]>;
  description: Maybe<Scalars["String"]>;
  homepageUrl: Maybe<Scalars["String"]>;
  object: Maybe<GithubDataDataUserPinnedItemsNodesObject>;
};

export type GithubDataDataUserPinnedItemsNodesFilterInput = {
  name: Maybe<StringQueryOperatorInput>;
  url: Maybe<StringQueryOperatorInput>;
  description: Maybe<StringQueryOperatorInput>;
  homepageUrl: Maybe<StringQueryOperatorInput>;
  object: Maybe<GithubDataDataUserPinnedItemsNodesObjectFilterInput>;
};

export type GithubDataDataUserPinnedItemsNodesFilterListInput = {
  elemMatch: Maybe<GithubDataDataUserPinnedItemsNodesFilterInput>;
};

export type GithubDataDataUserPinnedItemsNodesObject = {
  __typename?: "GithubDataDataUserPinnedItemsNodesObject";
  text: Maybe<Scalars["String"]>;
};

export type GithubDataDataUserPinnedItemsNodesObjectFilterInput = {
  text: Maybe<StringQueryOperatorInput>;
};

export type GithubDataEdge = {
  __typename?: "GithubDataEdge";
  next: Maybe<GithubData>;
  node: GithubData;
  previous: Maybe<GithubData>;
};

export enum GithubDataFieldsEnum {
  Id = "id",
  ParentId = "parent___id",
  ParentParentId = "parent___parent___id",
  ParentParentParentId = "parent___parent___parent___id",
  ParentParentParentChildren = "parent___parent___parent___children",
  ParentParentChildren = "parent___parent___children",
  ParentParentChildrenId = "parent___parent___children___id",
  ParentParentChildrenChildren = "parent___parent___children___children",
  ParentParentInternalContent = "parent___parent___internal___content",
  ParentParentInternalContentDigest = "parent___parent___internal___contentDigest",
  ParentParentInternalDescription = "parent___parent___internal___description",
  ParentParentInternalFieldOwners = "parent___parent___internal___fieldOwners",
  ParentParentInternalIgnoreType = "parent___parent___internal___ignoreType",
  ParentParentInternalMediaType = "parent___parent___internal___mediaType",
  ParentParentInternalOwner = "parent___parent___internal___owner",
  ParentParentInternalType = "parent___parent___internal___type",
  ParentChildren = "parent___children",
  ParentChildrenId = "parent___children___id",
  ParentChildrenParentId = "parent___children___parent___id",
  ParentChildrenParentChildren = "parent___children___parent___children",
  ParentChildrenChildren = "parent___children___children",
  ParentChildrenChildrenId = "parent___children___children___id",
  ParentChildrenChildrenChildren = "parent___children___children___children",
  ParentChildrenInternalContent = "parent___children___internal___content",
  ParentChildrenInternalContentDigest = "parent___children___internal___contentDigest",
  ParentChildrenInternalDescription = "parent___children___internal___description",
  ParentChildrenInternalFieldOwners = "parent___children___internal___fieldOwners",
  ParentChildrenInternalIgnoreType = "parent___children___internal___ignoreType",
  ParentChildrenInternalMediaType = "parent___children___internal___mediaType",
  ParentChildrenInternalOwner = "parent___children___internal___owner",
  ParentChildrenInternalType = "parent___children___internal___type",
  ParentInternalContent = "parent___internal___content",
  ParentInternalContentDigest = "parent___internal___contentDigest",
  ParentInternalDescription = "parent___internal___description",
  ParentInternalFieldOwners = "parent___internal___fieldOwners",
  ParentInternalIgnoreType = "parent___internal___ignoreType",
  ParentInternalMediaType = "parent___internal___mediaType",
  ParentInternalOwner = "parent___internal___owner",
  ParentInternalType = "parent___internal___type",
  Children = "children",
  ChildrenId = "children___id",
  ChildrenParentId = "children___parent___id",
  ChildrenParentParentId = "children___parent___parent___id",
  ChildrenParentParentChildren = "children___parent___parent___children",
  ChildrenParentChildren = "children___parent___children",
  ChildrenParentChildrenId = "children___parent___children___id",
  ChildrenParentChildrenChildren = "children___parent___children___children",
  ChildrenParentInternalContent = "children___parent___internal___content",
  ChildrenParentInternalContentDigest = "children___parent___internal___contentDigest",
  ChildrenParentInternalDescription = "children___parent___internal___description",
  ChildrenParentInternalFieldOwners = "children___parent___internal___fieldOwners",
  ChildrenParentInternalIgnoreType = "children___parent___internal___ignoreType",
  ChildrenParentInternalMediaType = "children___parent___internal___mediaType",
  ChildrenParentInternalOwner = "children___parent___internal___owner",
  ChildrenParentInternalType = "children___parent___internal___type",
  ChildrenChildren = "children___children",
  ChildrenChildrenId = "children___children___id",
  ChildrenChildrenParentId = "children___children___parent___id",
  ChildrenChildrenParentChildren = "children___children___parent___children",
  ChildrenChildrenChildren = "children___children___children",
  ChildrenChildrenChildrenId = "children___children___children___id",
  ChildrenChildrenChildrenChildren = "children___children___children___children",
  ChildrenChildrenInternalContent = "children___children___internal___content",
  ChildrenChildrenInternalContentDigest = "children___children___internal___contentDigest",
  ChildrenChildrenInternalDescription = "children___children___internal___description",
  ChildrenChildrenInternalFieldOwners = "children___children___internal___fieldOwners",
  ChildrenChildrenInternalIgnoreType = "children___children___internal___ignoreType",
  ChildrenChildrenInternalMediaType = "children___children___internal___mediaType",
  ChildrenChildrenInternalOwner = "children___children___internal___owner",
  ChildrenChildrenInternalType = "children___children___internal___type",
  ChildrenInternalContent = "children___internal___content",
  ChildrenInternalContentDigest = "children___internal___contentDigest",
  ChildrenInternalDescription = "children___internal___description",
  ChildrenInternalFieldOwners = "children___internal___fieldOwners",
  ChildrenInternalIgnoreType = "children___internal___ignoreType",
  ChildrenInternalMediaType = "children___internal___mediaType",
  ChildrenInternalOwner = "children___internal___owner",
  ChildrenInternalType = "children___internal___type",
  InternalContent = "internal___content",
  InternalContentDigest = "internal___contentDigest",
  InternalDescription = "internal___description",
  InternalFieldOwners = "internal___fieldOwners",
  InternalIgnoreType = "internal___ignoreType",
  InternalMediaType = "internal___mediaType",
  InternalOwner = "internal___owner",
  InternalType = "internal___type",
  DataUserPinnedItemsNodes = "data___user___pinnedItems___nodes",
}

export type GithubDataFilterInput = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  data: Maybe<GithubDataDataFilterInput>;
  rawResult: Maybe<GithubDataRawResultFilterInput>;
};

export type GithubDataGroupConnection = {
  __typename?: "GithubDataGroupConnection";
  totalCount: Scalars["Int"];
  edges: Array<GithubDataEdge>;
  nodes: Array<GithubData>;
  pageInfo: PageInfo;
  field: Scalars["String"];
  fieldValue: Maybe<Scalars["String"]>;
};

export type GithubDataRawResult = {
  __typename?: "GithubDataRawResult";
  data: Maybe<GithubDataRawResultData>;
};

export type GithubDataRawResultData = {
  __typename?: "GithubDataRawResultData";
  user: Maybe<GithubDataRawResultDataUser>;
};

export type GithubDataRawResultDataFilterInput = {
  user: Maybe<GithubDataRawResultDataUserFilterInput>;
};

export type GithubDataRawResultDataUser = {
  __typename?: "GithubDataRawResultDataUser";
  pinnedItems: Maybe<GithubDataRawResultDataUserPinnedItems>;
};

export type GithubDataRawResultDataUserFilterInput = {
  pinnedItems: Maybe<GithubDataRawResultDataUserPinnedItemsFilterInput>;
};

export type GithubDataRawResultDataUserPinnedItems = {
  __typename?: "GithubDataRawResultDataUserPinnedItems";
  nodes: Maybe<Array<Maybe<GithubDataRawResultDataUserPinnedItemsNodes>>>;
};

export type GithubDataRawResultDataUserPinnedItemsFilterInput = {
  nodes: Maybe<GithubDataRawResultDataUserPinnedItemsNodesFilterListInput>;
};

export type GithubDataRawResultDataUserPinnedItemsNodes = {
  __typename?: "GithubDataRawResultDataUserPinnedItemsNodes";
  name: Maybe<Scalars["String"]>;
  url: Maybe<Scalars["String"]>;
  description: Maybe<Scalars["String"]>;
  homepageUrl: Maybe<Scalars["String"]>;
  object: Maybe<GithubDataRawResultDataUserPinnedItemsNodesObject>;
};

export type GithubDataRawResultDataUserPinnedItemsNodesFilterInput = {
  name: Maybe<StringQueryOperatorInput>;
  url: Maybe<StringQueryOperatorInput>;
  description: Maybe<StringQueryOperatorInput>;
  homepageUrl: Maybe<StringQueryOperatorInput>;
  object: Maybe<GithubDataRawResultDataUserPinnedItemsNodesObjectFilterInput>;
};

export type GithubDataRawResultDataUserPinnedItemsNodesFilterListInput = {
  elemMatch: Maybe<GithubDataRawResultDataUserPinnedItemsNodesFilterInput>;
};

export type GithubDataRawResultDataUserPinnedItemsNodesObject = {
  __typename?: "GithubDataRawResultDataUserPinnedItemsNodesObject";
  text: Maybe<Scalars["String"]>;
};

export type GithubDataRawResultDataUserPinnedItemsNodesObjectFilterInput = {
  text: Maybe<StringQueryOperatorInput>;
};

export type GithubDataRawResultFilterInput = {
  data: Maybe<GithubDataRawResultDataFilterInput>;
};

export type GithubDataSortInput = {
  fields: Maybe<Array<Maybe<GithubDataFieldsEnum>>>;
  order: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export enum ImageResizingBehavior {
  NoChange = "NO_CHANGE",
  Pad = "PAD",
  Crop = "CROP",
  Fill = "FILL",
  Thumb = "THUMB",
  Scale = "SCALE",
}

export type Internal = {
  __typename?: "Internal";
  content: Maybe<Scalars["String"]>;
  contentDigest: Scalars["String"];
  description: Maybe<Scalars["String"]>;
  fieldOwners: Maybe<Array<Maybe<Scalars["String"]>>>;
  ignoreType: Maybe<Scalars["Boolean"]>;
  mediaType: Maybe<Scalars["String"]>;
  owner: Scalars["String"];
  type: Scalars["String"];
};

export type InternalFilterInput = {
  content: Maybe<StringQueryOperatorInput>;
  contentDigest: Maybe<StringQueryOperatorInput>;
  description: Maybe<StringQueryOperatorInput>;
  fieldOwners: Maybe<StringQueryOperatorInput>;
  ignoreType: Maybe<BooleanQueryOperatorInput>;
  mediaType: Maybe<StringQueryOperatorInput>;
  owner: Maybe<StringQueryOperatorInput>;
  type: Maybe<StringQueryOperatorInput>;
};

export type IntQueryOperatorInput = {
  eq: Maybe<Scalars["Int"]>;
  ne: Maybe<Scalars["Int"]>;
  gt: Maybe<Scalars["Int"]>;
  gte: Maybe<Scalars["Int"]>;
  lt: Maybe<Scalars["Int"]>;
  lte: Maybe<Scalars["Int"]>;
  in: Maybe<Array<Maybe<Scalars["Int"]>>>;
  nin: Maybe<Array<Maybe<Scalars["Int"]>>>;
};

export type JsonQueryOperatorInput = {
  eq: Maybe<Scalars["JSON"]>;
  ne: Maybe<Scalars["JSON"]>;
  in: Maybe<Array<Maybe<Scalars["JSON"]>>>;
  nin: Maybe<Array<Maybe<Scalars["JSON"]>>>;
  regex: Maybe<Scalars["JSON"]>;
  glob: Maybe<Scalars["JSON"]>;
};

export type Node = {
  id: Scalars["ID"];
  parent: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type NodeFilterInput = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};

export type NodeFilterListInput = {
  elemMatch: Maybe<NodeFilterInput>;
};

export type PageInfo = {
  __typename?: "PageInfo";
  currentPage: Scalars["Int"];
  hasPreviousPage: Scalars["Boolean"];
  hasNextPage: Scalars["Boolean"];
  itemCount: Scalars["Int"];
  pageCount: Scalars["Int"];
  perPage: Maybe<Scalars["Int"]>;
};

export type Query = {
  __typename?: "Query";
  file: Maybe<File>;
  allFile: FileConnection;
  directory: Maybe<Directory>;
  allDirectory: DirectoryConnection;
  sitePage: Maybe<SitePage>;
  allSitePage: SitePageConnection;
  site: Maybe<Site>;
  allSite: SiteConnection;
  contentfulAsset: Maybe<ContentfulAsset>;
  allContentfulAsset: ContentfulAssetConnection;
  contentfulFeatured: Maybe<ContentfulFeatured>;
  allContentfulFeatured: ContentfulFeaturedConnection;
  contentfulMusicDescriptionRichTextNode: Maybe<ContentfulMusicDescriptionRichTextNode>;
  allContentfulMusicDescriptionRichTextNode: ContentfulMusicDescriptionRichTextNodeConnection;
  contentfulMusic: Maybe<ContentfulMusic>;
  allContentfulMusic: ContentfulMusicConnection;
  contentfulSchool: Maybe<ContentfulSchool>;
  allContentfulSchool: ContentfulSchoolConnection;
  contentfulJobDescriptionRichTextNode: Maybe<ContentfulJobDescriptionRichTextNode>;
  allContentfulJobDescriptionRichTextNode: ContentfulJobDescriptionRichTextNodeConnection;
  contentfulJob: Maybe<ContentfulJob>;
  allContentfulJob: ContentfulJobConnection;
  contentfulContentType: Maybe<ContentfulContentType>;
  allContentfulContentType: ContentfulContentTypeConnection;
  githubData: Maybe<GithubData>;
  allGithubData: GithubDataConnection;
  siteBuildMetadata: Maybe<SiteBuildMetadata>;
  allSiteBuildMetadata: SiteBuildMetadataConnection;
  sitePlugin: Maybe<SitePlugin>;
  allSitePlugin: SitePluginConnection;
};

export type QueryFileArgs = {
  sourceInstanceName: Maybe<StringQueryOperatorInput>;
  absolutePath: Maybe<StringQueryOperatorInput>;
  relativePath: Maybe<StringQueryOperatorInput>;
  extension: Maybe<StringQueryOperatorInput>;
  size: Maybe<IntQueryOperatorInput>;
  prettySize: Maybe<StringQueryOperatorInput>;
  modifiedTime: Maybe<DateQueryOperatorInput>;
  accessTime: Maybe<DateQueryOperatorInput>;
  changeTime: Maybe<DateQueryOperatorInput>;
  birthTime: Maybe<DateQueryOperatorInput>;
  root: Maybe<StringQueryOperatorInput>;
  dir: Maybe<StringQueryOperatorInput>;
  base: Maybe<StringQueryOperatorInput>;
  ext: Maybe<StringQueryOperatorInput>;
  name: Maybe<StringQueryOperatorInput>;
  relativeDirectory: Maybe<StringQueryOperatorInput>;
  dev: Maybe<IntQueryOperatorInput>;
  mode: Maybe<IntQueryOperatorInput>;
  nlink: Maybe<IntQueryOperatorInput>;
  uid: Maybe<IntQueryOperatorInput>;
  gid: Maybe<IntQueryOperatorInput>;
  rdev: Maybe<IntQueryOperatorInput>;
  ino: Maybe<FloatQueryOperatorInput>;
  atimeMs: Maybe<FloatQueryOperatorInput>;
  mtimeMs: Maybe<FloatQueryOperatorInput>;
  ctimeMs: Maybe<FloatQueryOperatorInput>;
  atime: Maybe<DateQueryOperatorInput>;
  mtime: Maybe<DateQueryOperatorInput>;
  ctime: Maybe<DateQueryOperatorInput>;
  birthtime: Maybe<DateQueryOperatorInput>;
  birthtimeMs: Maybe<FloatQueryOperatorInput>;
  blksize: Maybe<IntQueryOperatorInput>;
  blocks: Maybe<IntQueryOperatorInput>;
  url: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};

export type QueryAllFileArgs = {
  filter: Maybe<FileFilterInput>;
  sort: Maybe<FileSortInput>;
  skip: Maybe<Scalars["Int"]>;
  limit: Maybe<Scalars["Int"]>;
};

export type QueryDirectoryArgs = {
  sourceInstanceName: Maybe<StringQueryOperatorInput>;
  absolutePath: Maybe<StringQueryOperatorInput>;
  relativePath: Maybe<StringQueryOperatorInput>;
  extension: Maybe<StringQueryOperatorInput>;
  size: Maybe<IntQueryOperatorInput>;
  prettySize: Maybe<StringQueryOperatorInput>;
  modifiedTime: Maybe<DateQueryOperatorInput>;
  accessTime: Maybe<DateQueryOperatorInput>;
  changeTime: Maybe<DateQueryOperatorInput>;
  birthTime: Maybe<DateQueryOperatorInput>;
  root: Maybe<StringQueryOperatorInput>;
  dir: Maybe<StringQueryOperatorInput>;
  base: Maybe<StringQueryOperatorInput>;
  ext: Maybe<StringQueryOperatorInput>;
  name: Maybe<StringQueryOperatorInput>;
  relativeDirectory: Maybe<StringQueryOperatorInput>;
  dev: Maybe<IntQueryOperatorInput>;
  mode: Maybe<IntQueryOperatorInput>;
  nlink: Maybe<IntQueryOperatorInput>;
  uid: Maybe<IntQueryOperatorInput>;
  gid: Maybe<IntQueryOperatorInput>;
  rdev: Maybe<IntQueryOperatorInput>;
  ino: Maybe<FloatQueryOperatorInput>;
  atimeMs: Maybe<FloatQueryOperatorInput>;
  mtimeMs: Maybe<FloatQueryOperatorInput>;
  ctimeMs: Maybe<FloatQueryOperatorInput>;
  atime: Maybe<DateQueryOperatorInput>;
  mtime: Maybe<DateQueryOperatorInput>;
  ctime: Maybe<DateQueryOperatorInput>;
  birthtime: Maybe<DateQueryOperatorInput>;
  birthtimeMs: Maybe<FloatQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};

export type QueryAllDirectoryArgs = {
  filter: Maybe<DirectoryFilterInput>;
  sort: Maybe<DirectorySortInput>;
  skip: Maybe<Scalars["Int"]>;
  limit: Maybe<Scalars["Int"]>;
};

export type QuerySitePageArgs = {
  path: Maybe<StringQueryOperatorInput>;
  component: Maybe<StringQueryOperatorInput>;
  internalComponentName: Maybe<StringQueryOperatorInput>;
  componentChunkName: Maybe<StringQueryOperatorInput>;
  matchPath: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  isCreatedByStatefulCreatePages: Maybe<BooleanQueryOperatorInput>;
  context: Maybe<SitePageContextFilterInput>;
  pluginCreator: Maybe<SitePluginFilterInput>;
  pluginCreatorId: Maybe<StringQueryOperatorInput>;
  componentPath: Maybe<StringQueryOperatorInput>;
};

export type QueryAllSitePageArgs = {
  filter: Maybe<SitePageFilterInput>;
  sort: Maybe<SitePageSortInput>;
  skip: Maybe<Scalars["Int"]>;
  limit: Maybe<Scalars["Int"]>;
};

export type QuerySiteArgs = {
  buildTime: Maybe<DateQueryOperatorInput>;
  siteMetadata: Maybe<SiteSiteMetadataFilterInput>;
  port: Maybe<IntQueryOperatorInput>;
  host: Maybe<StringQueryOperatorInput>;
  polyfill: Maybe<BooleanQueryOperatorInput>;
  pathPrefix: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};

export type QueryAllSiteArgs = {
  filter: Maybe<SiteFilterInput>;
  sort: Maybe<SiteSortInput>;
  skip: Maybe<Scalars["Int"]>;
  limit: Maybe<Scalars["Int"]>;
};

export type QueryContentfulAssetArgs = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  contentful_id: Maybe<StringQueryOperatorInput>;
  file: Maybe<ContentfulAssetFileFilterInput>;
  title: Maybe<StringQueryOperatorInput>;
  description: Maybe<StringQueryOperatorInput>;
  node_locale: Maybe<StringQueryOperatorInput>;
  localFile: Maybe<FileFilterInput>;
  fixed: Maybe<ContentfulFixedFilterInput>;
  resolutions: Maybe<ContentfulResolutionsFilterInput>;
  fluid: Maybe<ContentfulFluidFilterInput>;
  sizes: Maybe<ContentfulSizesFilterInput>;
  resize: Maybe<ContentfulResizeFilterInput>;
};

export type QueryAllContentfulAssetArgs = {
  filter: Maybe<ContentfulAssetFilterInput>;
  sort: Maybe<ContentfulAssetSortInput>;
  skip: Maybe<Scalars["Int"]>;
  limit: Maybe<Scalars["Int"]>;
};

export type QueryContentfulFeaturedArgs = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  title: Maybe<StringQueryOperatorInput>;
  siteJobs: Maybe<ContentfulJobFilterListInput>;
  sitePerformances: Maybe<ContentfulMusicFilterListInput>;
  resumeJobs: Maybe<ContentfulJobFilterListInput>;
  spaceId: Maybe<StringQueryOperatorInput>;
  contentful_id: Maybe<StringQueryOperatorInput>;
  createdAt: Maybe<DateQueryOperatorInput>;
  updatedAt: Maybe<DateQueryOperatorInput>;
  sys: Maybe<ContentfulFeaturedSysFilterInput>;
  node_locale: Maybe<StringQueryOperatorInput>;
};

export type QueryAllContentfulFeaturedArgs = {
  filter: Maybe<ContentfulFeaturedFilterInput>;
  sort: Maybe<ContentfulFeaturedSortInput>;
  skip: Maybe<Scalars["Int"]>;
  limit: Maybe<Scalars["Int"]>;
};

export type QueryContentfulMusicDescriptionRichTextNodeArgs = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  content: Maybe<ContentfulMusicDescriptionRichTextNodeContentFilterListInput>;
  nodeType: Maybe<StringQueryOperatorInput>;
  description: Maybe<StringQueryOperatorInput>;
  json: Maybe<JsonQueryOperatorInput>;
};

export type QueryAllContentfulMusicDescriptionRichTextNodeArgs = {
  filter: Maybe<ContentfulMusicDescriptionRichTextNodeFilterInput>;
  sort: Maybe<ContentfulMusicDescriptionRichTextNodeSortInput>;
  skip: Maybe<Scalars["Int"]>;
  limit: Maybe<Scalars["Int"]>;
};

export type QueryContentfulMusicArgs = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  title: Maybe<StringQueryOperatorInput>;
  group: Maybe<StringQueryOperatorInput>;
  recording: Maybe<StringQueryOperatorInput>;
  year: Maybe<IntQueryOperatorInput>;
  description: Maybe<ContentfulMusicDescriptionRichTextNodeFilterInput>;
  spaceId: Maybe<StringQueryOperatorInput>;
  contentful_id: Maybe<StringQueryOperatorInput>;
  createdAt: Maybe<DateQueryOperatorInput>;
  updatedAt: Maybe<DateQueryOperatorInput>;
  sys: Maybe<ContentfulMusicSysFilterInput>;
  node_locale: Maybe<StringQueryOperatorInput>;
  featured: Maybe<ContentfulFeaturedFilterListInput>;
  childContentfulMusicDescriptionRichTextNode: Maybe<ContentfulMusicDescriptionRichTextNodeFilterInput>;
};

export type QueryAllContentfulMusicArgs = {
  filter: Maybe<ContentfulMusicFilterInput>;
  sort: Maybe<ContentfulMusicSortInput>;
  skip: Maybe<Scalars["Int"]>;
  limit: Maybe<Scalars["Int"]>;
};

export type QueryContentfulSchoolArgs = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  name: Maybe<StringQueryOperatorInput>;
  location: Maybe<ContentfulSchoolLocationFilterInput>;
  startDate: Maybe<DateQueryOperatorInput>;
  endDate: Maybe<DateQueryOperatorInput>;
  major: Maybe<StringQueryOperatorInput>;
  minor: Maybe<StringQueryOperatorInput>;
  concentration: Maybe<StringQueryOperatorInput>;
  gpa: Maybe<IntQueryOperatorInput>;
  inProgress: Maybe<BooleanQueryOperatorInput>;
  city: Maybe<StringQueryOperatorInput>;
  state: Maybe<StringQueryOperatorInput>;
  logo: Maybe<ContentfulAssetFilterInput>;
  spaceId: Maybe<StringQueryOperatorInput>;
  contentful_id: Maybe<StringQueryOperatorInput>;
  createdAt: Maybe<DateQueryOperatorInput>;
  updatedAt: Maybe<DateQueryOperatorInput>;
  sys: Maybe<ContentfulSchoolSysFilterInput>;
  node_locale: Maybe<StringQueryOperatorInput>;
};

export type QueryAllContentfulSchoolArgs = {
  filter: Maybe<ContentfulSchoolFilterInput>;
  sort: Maybe<ContentfulSchoolSortInput>;
  skip: Maybe<Scalars["Int"]>;
  limit: Maybe<Scalars["Int"]>;
};

export type QueryContentfulJobDescriptionRichTextNodeArgs = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  content: Maybe<ContentfulJobDescriptionRichTextNodeContentFilterListInput>;
  nodeType: Maybe<StringQueryOperatorInput>;
  description: Maybe<StringQueryOperatorInput>;
  json: Maybe<JsonQueryOperatorInput>;
};

export type QueryAllContentfulJobDescriptionRichTextNodeArgs = {
  filter: Maybe<ContentfulJobDescriptionRichTextNodeFilterInput>;
  sort: Maybe<ContentfulJobDescriptionRichTextNodeSortInput>;
  skip: Maybe<Scalars["Int"]>;
  limit: Maybe<Scalars["Int"]>;
};

export type QueryContentfulJobArgs = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  title: Maybe<StringQueryOperatorInput>;
  company: Maybe<StringQueryOperatorInput>;
  location: Maybe<ContentfulJobLocationFilterInput>;
  startDate: Maybe<DateQueryOperatorInput>;
  startPay: Maybe<FloatQueryOperatorInput>;
  isHourly: Maybe<BooleanQueryOperatorInput>;
  city: Maybe<StringQueryOperatorInput>;
  state: Maybe<StringQueryOperatorInput>;
  description: Maybe<ContentfulJobDescriptionRichTextNodeFilterInput>;
  spaceId: Maybe<StringQueryOperatorInput>;
  contentful_id: Maybe<StringQueryOperatorInput>;
  createdAt: Maybe<DateQueryOperatorInput>;
  updatedAt: Maybe<DateQueryOperatorInput>;
  sys: Maybe<ContentfulJobSysFilterInput>;
  node_locale: Maybe<StringQueryOperatorInput>;
  featured: Maybe<ContentfulFeaturedFilterListInput>;
  endDate: Maybe<DateQueryOperatorInput>;
  endPay: Maybe<IntQueryOperatorInput>;
  childContentfulJobDescriptionRichTextNode: Maybe<ContentfulJobDescriptionRichTextNodeFilterInput>;
};

export type QueryAllContentfulJobArgs = {
  filter: Maybe<ContentfulJobFilterInput>;
  sort: Maybe<ContentfulJobSortInput>;
  skip: Maybe<Scalars["Int"]>;
  limit: Maybe<Scalars["Int"]>;
};

export type QueryContentfulContentTypeArgs = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  name: Maybe<StringQueryOperatorInput>;
  displayField: Maybe<StringQueryOperatorInput>;
  description: Maybe<StringQueryOperatorInput>;
};

export type QueryAllContentfulContentTypeArgs = {
  filter: Maybe<ContentfulContentTypeFilterInput>;
  sort: Maybe<ContentfulContentTypeSortInput>;
  skip: Maybe<Scalars["Int"]>;
  limit: Maybe<Scalars["Int"]>;
};

export type QueryGithubDataArgs = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  data: Maybe<GithubDataDataFilterInput>;
  rawResult: Maybe<GithubDataRawResultFilterInput>;
};

export type QueryAllGithubDataArgs = {
  filter: Maybe<GithubDataFilterInput>;
  sort: Maybe<GithubDataSortInput>;
  skip: Maybe<Scalars["Int"]>;
  limit: Maybe<Scalars["Int"]>;
};

export type QuerySiteBuildMetadataArgs = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  buildTime: Maybe<DateQueryOperatorInput>;
};

export type QueryAllSiteBuildMetadataArgs = {
  filter: Maybe<SiteBuildMetadataFilterInput>;
  sort: Maybe<SiteBuildMetadataSortInput>;
  skip: Maybe<Scalars["Int"]>;
  limit: Maybe<Scalars["Int"]>;
};

export type QuerySitePluginArgs = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  resolve: Maybe<StringQueryOperatorInput>;
  name: Maybe<StringQueryOperatorInput>;
  version: Maybe<StringQueryOperatorInput>;
  pluginOptions: Maybe<SitePluginPluginOptionsFilterInput>;
  nodeAPIs: Maybe<StringQueryOperatorInput>;
  browserAPIs: Maybe<StringQueryOperatorInput>;
  ssrAPIs: Maybe<StringQueryOperatorInput>;
  pluginFilepath: Maybe<StringQueryOperatorInput>;
  packageJson: Maybe<SitePluginPackageJsonFilterInput>;
};

export type QueryAllSitePluginArgs = {
  filter: Maybe<SitePluginFilterInput>;
  sort: Maybe<SitePluginSortInput>;
  skip: Maybe<Scalars["Int"]>;
  limit: Maybe<Scalars["Int"]>;
};

export type Site = Node & {
  __typename?: "Site";
  buildTime: Maybe<Scalars["Date"]>;
  siteMetadata: Maybe<SiteSiteMetadata>;
  port: Maybe<Scalars["Int"]>;
  host: Maybe<Scalars["String"]>;
  polyfill: Maybe<Scalars["Boolean"]>;
  pathPrefix: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  parent: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type SiteBuildTimeArgs = {
  formatString: Maybe<Scalars["String"]>;
  fromNow: Maybe<Scalars["Boolean"]>;
  difference: Maybe<Scalars["String"]>;
  locale: Maybe<Scalars["String"]>;
};

export type SiteBuildMetadata = Node & {
  __typename?: "SiteBuildMetadata";
  id: Scalars["ID"];
  parent: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  buildTime: Maybe<Scalars["Date"]>;
};

export type SiteBuildMetadataBuildTimeArgs = {
  formatString: Maybe<Scalars["String"]>;
  fromNow: Maybe<Scalars["Boolean"]>;
  difference: Maybe<Scalars["String"]>;
  locale: Maybe<Scalars["String"]>;
};

export type SiteBuildMetadataConnection = {
  __typename?: "SiteBuildMetadataConnection";
  totalCount: Scalars["Int"];
  edges: Array<SiteBuildMetadataEdge>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  distinct: Array<Scalars["String"]>;
  group: Array<SiteBuildMetadataGroupConnection>;
};

export type SiteBuildMetadataConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataConnectionGroupArgs = {
  skip: Maybe<Scalars["Int"]>;
  limit: Maybe<Scalars["Int"]>;
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataEdge = {
  __typename?: "SiteBuildMetadataEdge";
  next: Maybe<SiteBuildMetadata>;
  node: SiteBuildMetadata;
  previous: Maybe<SiteBuildMetadata>;
};

export enum SiteBuildMetadataFieldsEnum {
  Id = "id",
  ParentId = "parent___id",
  ParentParentId = "parent___parent___id",
  ParentParentParentId = "parent___parent___parent___id",
  ParentParentParentChildren = "parent___parent___parent___children",
  ParentParentChildren = "parent___parent___children",
  ParentParentChildrenId = "parent___parent___children___id",
  ParentParentChildrenChildren = "parent___parent___children___children",
  ParentParentInternalContent = "parent___parent___internal___content",
  ParentParentInternalContentDigest = "parent___parent___internal___contentDigest",
  ParentParentInternalDescription = "parent___parent___internal___description",
  ParentParentInternalFieldOwners = "parent___parent___internal___fieldOwners",
  ParentParentInternalIgnoreType = "parent___parent___internal___ignoreType",
  ParentParentInternalMediaType = "parent___parent___internal___mediaType",
  ParentParentInternalOwner = "parent___parent___internal___owner",
  ParentParentInternalType = "parent___parent___internal___type",
  ParentChildren = "parent___children",
  ParentChildrenId = "parent___children___id",
  ParentChildrenParentId = "parent___children___parent___id",
  ParentChildrenParentChildren = "parent___children___parent___children",
  ParentChildrenChildren = "parent___children___children",
  ParentChildrenChildrenId = "parent___children___children___id",
  ParentChildrenChildrenChildren = "parent___children___children___children",
  ParentChildrenInternalContent = "parent___children___internal___content",
  ParentChildrenInternalContentDigest = "parent___children___internal___contentDigest",
  ParentChildrenInternalDescription = "parent___children___internal___description",
  ParentChildrenInternalFieldOwners = "parent___children___internal___fieldOwners",
  ParentChildrenInternalIgnoreType = "parent___children___internal___ignoreType",
  ParentChildrenInternalMediaType = "parent___children___internal___mediaType",
  ParentChildrenInternalOwner = "parent___children___internal___owner",
  ParentChildrenInternalType = "parent___children___internal___type",
  ParentInternalContent = "parent___internal___content",
  ParentInternalContentDigest = "parent___internal___contentDigest",
  ParentInternalDescription = "parent___internal___description",
  ParentInternalFieldOwners = "parent___internal___fieldOwners",
  ParentInternalIgnoreType = "parent___internal___ignoreType",
  ParentInternalMediaType = "parent___internal___mediaType",
  ParentInternalOwner = "parent___internal___owner",
  ParentInternalType = "parent___internal___type",
  Children = "children",
  ChildrenId = "children___id",
  ChildrenParentId = "children___parent___id",
  ChildrenParentParentId = "children___parent___parent___id",
  ChildrenParentParentChildren = "children___parent___parent___children",
  ChildrenParentChildren = "children___parent___children",
  ChildrenParentChildrenId = "children___parent___children___id",
  ChildrenParentChildrenChildren = "children___parent___children___children",
  ChildrenParentInternalContent = "children___parent___internal___content",
  ChildrenParentInternalContentDigest = "children___parent___internal___contentDigest",
  ChildrenParentInternalDescription = "children___parent___internal___description",
  ChildrenParentInternalFieldOwners = "children___parent___internal___fieldOwners",
  ChildrenParentInternalIgnoreType = "children___parent___internal___ignoreType",
  ChildrenParentInternalMediaType = "children___parent___internal___mediaType",
  ChildrenParentInternalOwner = "children___parent___internal___owner",
  ChildrenParentInternalType = "children___parent___internal___type",
  ChildrenChildren = "children___children",
  ChildrenChildrenId = "children___children___id",
  ChildrenChildrenParentId = "children___children___parent___id",
  ChildrenChildrenParentChildren = "children___children___parent___children",
  ChildrenChildrenChildren = "children___children___children",
  ChildrenChildrenChildrenId = "children___children___children___id",
  ChildrenChildrenChildrenChildren = "children___children___children___children",
  ChildrenChildrenInternalContent = "children___children___internal___content",
  ChildrenChildrenInternalContentDigest = "children___children___internal___contentDigest",
  ChildrenChildrenInternalDescription = "children___children___internal___description",
  ChildrenChildrenInternalFieldOwners = "children___children___internal___fieldOwners",
  ChildrenChildrenInternalIgnoreType = "children___children___internal___ignoreType",
  ChildrenChildrenInternalMediaType = "children___children___internal___mediaType",
  ChildrenChildrenInternalOwner = "children___children___internal___owner",
  ChildrenChildrenInternalType = "children___children___internal___type",
  ChildrenInternalContent = "children___internal___content",
  ChildrenInternalContentDigest = "children___internal___contentDigest",
  ChildrenInternalDescription = "children___internal___description",
  ChildrenInternalFieldOwners = "children___internal___fieldOwners",
  ChildrenInternalIgnoreType = "children___internal___ignoreType",
  ChildrenInternalMediaType = "children___internal___mediaType",
  ChildrenInternalOwner = "children___internal___owner",
  ChildrenInternalType = "children___internal___type",
  InternalContent = "internal___content",
  InternalContentDigest = "internal___contentDigest",
  InternalDescription = "internal___description",
  InternalFieldOwners = "internal___fieldOwners",
  InternalIgnoreType = "internal___ignoreType",
  InternalMediaType = "internal___mediaType",
  InternalOwner = "internal___owner",
  InternalType = "internal___type",
  BuildTime = "buildTime",
}

export type SiteBuildMetadataFilterInput = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  buildTime: Maybe<DateQueryOperatorInput>;
};

export type SiteBuildMetadataGroupConnection = {
  __typename?: "SiteBuildMetadataGroupConnection";
  totalCount: Scalars["Int"];
  edges: Array<SiteBuildMetadataEdge>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  field: Scalars["String"];
  fieldValue: Maybe<Scalars["String"]>;
};

export type SiteBuildMetadataSortInput = {
  fields: Maybe<Array<Maybe<SiteBuildMetadataFieldsEnum>>>;
  order: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SiteConnection = {
  __typename?: "SiteConnection";
  totalCount: Scalars["Int"];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  distinct: Array<Scalars["String"]>;
  group: Array<SiteGroupConnection>;
};

export type SiteConnectionDistinctArgs = {
  field: SiteFieldsEnum;
};

export type SiteConnectionGroupArgs = {
  skip: Maybe<Scalars["Int"]>;
  limit: Maybe<Scalars["Int"]>;
  field: SiteFieldsEnum;
};

export type SiteEdge = {
  __typename?: "SiteEdge";
  next: Maybe<Site>;
  node: Site;
  previous: Maybe<Site>;
};

export enum SiteFieldsEnum {
  BuildTime = "buildTime",
  SiteMetadataTitle = "siteMetadata___title",
  SiteMetadataDescription = "siteMetadata___description",
  SiteMetadataAuthor = "siteMetadata___author",
  Port = "port",
  Host = "host",
  Polyfill = "polyfill",
  PathPrefix = "pathPrefix",
  Id = "id",
  ParentId = "parent___id",
  ParentParentId = "parent___parent___id",
  ParentParentParentId = "parent___parent___parent___id",
  ParentParentParentChildren = "parent___parent___parent___children",
  ParentParentChildren = "parent___parent___children",
  ParentParentChildrenId = "parent___parent___children___id",
  ParentParentChildrenChildren = "parent___parent___children___children",
  ParentParentInternalContent = "parent___parent___internal___content",
  ParentParentInternalContentDigest = "parent___parent___internal___contentDigest",
  ParentParentInternalDescription = "parent___parent___internal___description",
  ParentParentInternalFieldOwners = "parent___parent___internal___fieldOwners",
  ParentParentInternalIgnoreType = "parent___parent___internal___ignoreType",
  ParentParentInternalMediaType = "parent___parent___internal___mediaType",
  ParentParentInternalOwner = "parent___parent___internal___owner",
  ParentParentInternalType = "parent___parent___internal___type",
  ParentChildren = "parent___children",
  ParentChildrenId = "parent___children___id",
  ParentChildrenParentId = "parent___children___parent___id",
  ParentChildrenParentChildren = "parent___children___parent___children",
  ParentChildrenChildren = "parent___children___children",
  ParentChildrenChildrenId = "parent___children___children___id",
  ParentChildrenChildrenChildren = "parent___children___children___children",
  ParentChildrenInternalContent = "parent___children___internal___content",
  ParentChildrenInternalContentDigest = "parent___children___internal___contentDigest",
  ParentChildrenInternalDescription = "parent___children___internal___description",
  ParentChildrenInternalFieldOwners = "parent___children___internal___fieldOwners",
  ParentChildrenInternalIgnoreType = "parent___children___internal___ignoreType",
  ParentChildrenInternalMediaType = "parent___children___internal___mediaType",
  ParentChildrenInternalOwner = "parent___children___internal___owner",
  ParentChildrenInternalType = "parent___children___internal___type",
  ParentInternalContent = "parent___internal___content",
  ParentInternalContentDigest = "parent___internal___contentDigest",
  ParentInternalDescription = "parent___internal___description",
  ParentInternalFieldOwners = "parent___internal___fieldOwners",
  ParentInternalIgnoreType = "parent___internal___ignoreType",
  ParentInternalMediaType = "parent___internal___mediaType",
  ParentInternalOwner = "parent___internal___owner",
  ParentInternalType = "parent___internal___type",
  Children = "children",
  ChildrenId = "children___id",
  ChildrenParentId = "children___parent___id",
  ChildrenParentParentId = "children___parent___parent___id",
  ChildrenParentParentChildren = "children___parent___parent___children",
  ChildrenParentChildren = "children___parent___children",
  ChildrenParentChildrenId = "children___parent___children___id",
  ChildrenParentChildrenChildren = "children___parent___children___children",
  ChildrenParentInternalContent = "children___parent___internal___content",
  ChildrenParentInternalContentDigest = "children___parent___internal___contentDigest",
  ChildrenParentInternalDescription = "children___parent___internal___description",
  ChildrenParentInternalFieldOwners = "children___parent___internal___fieldOwners",
  ChildrenParentInternalIgnoreType = "children___parent___internal___ignoreType",
  ChildrenParentInternalMediaType = "children___parent___internal___mediaType",
  ChildrenParentInternalOwner = "children___parent___internal___owner",
  ChildrenParentInternalType = "children___parent___internal___type",
  ChildrenChildren = "children___children",
  ChildrenChildrenId = "children___children___id",
  ChildrenChildrenParentId = "children___children___parent___id",
  ChildrenChildrenParentChildren = "children___children___parent___children",
  ChildrenChildrenChildren = "children___children___children",
  ChildrenChildrenChildrenId = "children___children___children___id",
  ChildrenChildrenChildrenChildren = "children___children___children___children",
  ChildrenChildrenInternalContent = "children___children___internal___content",
  ChildrenChildrenInternalContentDigest = "children___children___internal___contentDigest",
  ChildrenChildrenInternalDescription = "children___children___internal___description",
  ChildrenChildrenInternalFieldOwners = "children___children___internal___fieldOwners",
  ChildrenChildrenInternalIgnoreType = "children___children___internal___ignoreType",
  ChildrenChildrenInternalMediaType = "children___children___internal___mediaType",
  ChildrenChildrenInternalOwner = "children___children___internal___owner",
  ChildrenChildrenInternalType = "children___children___internal___type",
  ChildrenInternalContent = "children___internal___content",
  ChildrenInternalContentDigest = "children___internal___contentDigest",
  ChildrenInternalDescription = "children___internal___description",
  ChildrenInternalFieldOwners = "children___internal___fieldOwners",
  ChildrenInternalIgnoreType = "children___internal___ignoreType",
  ChildrenInternalMediaType = "children___internal___mediaType",
  ChildrenInternalOwner = "children___internal___owner",
  ChildrenInternalType = "children___internal___type",
  InternalContent = "internal___content",
  InternalContentDigest = "internal___contentDigest",
  InternalDescription = "internal___description",
  InternalFieldOwners = "internal___fieldOwners",
  InternalIgnoreType = "internal___ignoreType",
  InternalMediaType = "internal___mediaType",
  InternalOwner = "internal___owner",
  InternalType = "internal___type",
}

export type SiteFilterInput = {
  buildTime: Maybe<DateQueryOperatorInput>;
  siteMetadata: Maybe<SiteSiteMetadataFilterInput>;
  port: Maybe<IntQueryOperatorInput>;
  host: Maybe<StringQueryOperatorInput>;
  polyfill: Maybe<BooleanQueryOperatorInput>;
  pathPrefix: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};

export type SiteGroupConnection = {
  __typename?: "SiteGroupConnection";
  totalCount: Scalars["Int"];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  field: Scalars["String"];
  fieldValue: Maybe<Scalars["String"]>;
};

export type SitePage = Node & {
  __typename?: "SitePage";
  path: Scalars["String"];
  component: Scalars["String"];
  internalComponentName: Scalars["String"];
  componentChunkName: Scalars["String"];
  matchPath: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  parent: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  isCreatedByStatefulCreatePages: Maybe<Scalars["Boolean"]>;
  context: Maybe<SitePageContext>;
  pluginCreator: Maybe<SitePlugin>;
  pluginCreatorId: Maybe<Scalars["String"]>;
  componentPath: Maybe<Scalars["String"]>;
};

export type SitePageConnection = {
  __typename?: "SitePageConnection";
  totalCount: Scalars["Int"];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars["String"]>;
  group: Array<SitePageGroupConnection>;
};

export type SitePageConnectionDistinctArgs = {
  field: SitePageFieldsEnum;
};

export type SitePageConnectionGroupArgs = {
  skip: Maybe<Scalars["Int"]>;
  limit: Maybe<Scalars["Int"]>;
  field: SitePageFieldsEnum;
};

export type SitePageContext = {
  __typename?: "SitePageContext";
  repo: Maybe<SitePageContextRepo>;
};

export type SitePageContextFilterInput = {
  repo: Maybe<SitePageContextRepoFilterInput>;
};

export type SitePageContextRepo = {
  __typename?: "SitePageContextRepo";
  name: Maybe<Scalars["String"]>;
  description: Maybe<Scalars["String"]>;
  homepageUrl: Maybe<Scalars["String"]>;
  url: Maybe<Scalars["String"]>;
  object: Maybe<SitePageContextRepoObject>;
};

export type SitePageContextRepoFilterInput = {
  name: Maybe<StringQueryOperatorInput>;
  description: Maybe<StringQueryOperatorInput>;
  homepageUrl: Maybe<StringQueryOperatorInput>;
  url: Maybe<StringQueryOperatorInput>;
  object: Maybe<SitePageContextRepoObjectFilterInput>;
};

export type SitePageContextRepoObject = {
  __typename?: "SitePageContextRepoObject";
  text: Maybe<Scalars["String"]>;
};

export type SitePageContextRepoObjectFilterInput = {
  text: Maybe<StringQueryOperatorInput>;
};

export type SitePageEdge = {
  __typename?: "SitePageEdge";
  next: Maybe<SitePage>;
  node: SitePage;
  previous: Maybe<SitePage>;
};

export enum SitePageFieldsEnum {
  Path = "path",
  Component = "component",
  InternalComponentName = "internalComponentName",
  ComponentChunkName = "componentChunkName",
  MatchPath = "matchPath",
  Id = "id",
  ParentId = "parent___id",
  ParentParentId = "parent___parent___id",
  ParentParentParentId = "parent___parent___parent___id",
  ParentParentParentChildren = "parent___parent___parent___children",
  ParentParentChildren = "parent___parent___children",
  ParentParentChildrenId = "parent___parent___children___id",
  ParentParentChildrenChildren = "parent___parent___children___children",
  ParentParentInternalContent = "parent___parent___internal___content",
  ParentParentInternalContentDigest = "parent___parent___internal___contentDigest",
  ParentParentInternalDescription = "parent___parent___internal___description",
  ParentParentInternalFieldOwners = "parent___parent___internal___fieldOwners",
  ParentParentInternalIgnoreType = "parent___parent___internal___ignoreType",
  ParentParentInternalMediaType = "parent___parent___internal___mediaType",
  ParentParentInternalOwner = "parent___parent___internal___owner",
  ParentParentInternalType = "parent___parent___internal___type",
  ParentChildren = "parent___children",
  ParentChildrenId = "parent___children___id",
  ParentChildrenParentId = "parent___children___parent___id",
  ParentChildrenParentChildren = "parent___children___parent___children",
  ParentChildrenChildren = "parent___children___children",
  ParentChildrenChildrenId = "parent___children___children___id",
  ParentChildrenChildrenChildren = "parent___children___children___children",
  ParentChildrenInternalContent = "parent___children___internal___content",
  ParentChildrenInternalContentDigest = "parent___children___internal___contentDigest",
  ParentChildrenInternalDescription = "parent___children___internal___description",
  ParentChildrenInternalFieldOwners = "parent___children___internal___fieldOwners",
  ParentChildrenInternalIgnoreType = "parent___children___internal___ignoreType",
  ParentChildrenInternalMediaType = "parent___children___internal___mediaType",
  ParentChildrenInternalOwner = "parent___children___internal___owner",
  ParentChildrenInternalType = "parent___children___internal___type",
  ParentInternalContent = "parent___internal___content",
  ParentInternalContentDigest = "parent___internal___contentDigest",
  ParentInternalDescription = "parent___internal___description",
  ParentInternalFieldOwners = "parent___internal___fieldOwners",
  ParentInternalIgnoreType = "parent___internal___ignoreType",
  ParentInternalMediaType = "parent___internal___mediaType",
  ParentInternalOwner = "parent___internal___owner",
  ParentInternalType = "parent___internal___type",
  Children = "children",
  ChildrenId = "children___id",
  ChildrenParentId = "children___parent___id",
  ChildrenParentParentId = "children___parent___parent___id",
  ChildrenParentParentChildren = "children___parent___parent___children",
  ChildrenParentChildren = "children___parent___children",
  ChildrenParentChildrenId = "children___parent___children___id",
  ChildrenParentChildrenChildren = "children___parent___children___children",
  ChildrenParentInternalContent = "children___parent___internal___content",
  ChildrenParentInternalContentDigest = "children___parent___internal___contentDigest",
  ChildrenParentInternalDescription = "children___parent___internal___description",
  ChildrenParentInternalFieldOwners = "children___parent___internal___fieldOwners",
  ChildrenParentInternalIgnoreType = "children___parent___internal___ignoreType",
  ChildrenParentInternalMediaType = "children___parent___internal___mediaType",
  ChildrenParentInternalOwner = "children___parent___internal___owner",
  ChildrenParentInternalType = "children___parent___internal___type",
  ChildrenChildren = "children___children",
  ChildrenChildrenId = "children___children___id",
  ChildrenChildrenParentId = "children___children___parent___id",
  ChildrenChildrenParentChildren = "children___children___parent___children",
  ChildrenChildrenChildren = "children___children___children",
  ChildrenChildrenChildrenId = "children___children___children___id",
  ChildrenChildrenChildrenChildren = "children___children___children___children",
  ChildrenChildrenInternalContent = "children___children___internal___content",
  ChildrenChildrenInternalContentDigest = "children___children___internal___contentDigest",
  ChildrenChildrenInternalDescription = "children___children___internal___description",
  ChildrenChildrenInternalFieldOwners = "children___children___internal___fieldOwners",
  ChildrenChildrenInternalIgnoreType = "children___children___internal___ignoreType",
  ChildrenChildrenInternalMediaType = "children___children___internal___mediaType",
  ChildrenChildrenInternalOwner = "children___children___internal___owner",
  ChildrenChildrenInternalType = "children___children___internal___type",
  ChildrenInternalContent = "children___internal___content",
  ChildrenInternalContentDigest = "children___internal___contentDigest",
  ChildrenInternalDescription = "children___internal___description",
  ChildrenInternalFieldOwners = "children___internal___fieldOwners",
  ChildrenInternalIgnoreType = "children___internal___ignoreType",
  ChildrenInternalMediaType = "children___internal___mediaType",
  ChildrenInternalOwner = "children___internal___owner",
  ChildrenInternalType = "children___internal___type",
  InternalContent = "internal___content",
  InternalContentDigest = "internal___contentDigest",
  InternalDescription = "internal___description",
  InternalFieldOwners = "internal___fieldOwners",
  InternalIgnoreType = "internal___ignoreType",
  InternalMediaType = "internal___mediaType",
  InternalOwner = "internal___owner",
  InternalType = "internal___type",
  IsCreatedByStatefulCreatePages = "isCreatedByStatefulCreatePages",
  ContextRepoName = "context___repo___name",
  ContextRepoDescription = "context___repo___description",
  ContextRepoHomepageUrl = "context___repo___homepageUrl",
  ContextRepoUrl = "context___repo___url",
  ContextRepoObjectText = "context___repo___object___text",
  PluginCreatorId = "pluginCreator___id",
  PluginCreatorParentId = "pluginCreator___parent___id",
  PluginCreatorParentParentId = "pluginCreator___parent___parent___id",
  PluginCreatorParentParentChildren = "pluginCreator___parent___parent___children",
  PluginCreatorParentChildren = "pluginCreator___parent___children",
  PluginCreatorParentChildrenId = "pluginCreator___parent___children___id",
  PluginCreatorParentChildrenChildren = "pluginCreator___parent___children___children",
  PluginCreatorParentInternalContent = "pluginCreator___parent___internal___content",
  PluginCreatorParentInternalContentDigest = "pluginCreator___parent___internal___contentDigest",
  PluginCreatorParentInternalDescription = "pluginCreator___parent___internal___description",
  PluginCreatorParentInternalFieldOwners = "pluginCreator___parent___internal___fieldOwners",
  PluginCreatorParentInternalIgnoreType = "pluginCreator___parent___internal___ignoreType",
  PluginCreatorParentInternalMediaType = "pluginCreator___parent___internal___mediaType",
  PluginCreatorParentInternalOwner = "pluginCreator___parent___internal___owner",
  PluginCreatorParentInternalType = "pluginCreator___parent___internal___type",
  PluginCreatorChildren = "pluginCreator___children",
  PluginCreatorChildrenId = "pluginCreator___children___id",
  PluginCreatorChildrenParentId = "pluginCreator___children___parent___id",
  PluginCreatorChildrenParentChildren = "pluginCreator___children___parent___children",
  PluginCreatorChildrenChildren = "pluginCreator___children___children",
  PluginCreatorChildrenChildrenId = "pluginCreator___children___children___id",
  PluginCreatorChildrenChildrenChildren = "pluginCreator___children___children___children",
  PluginCreatorChildrenInternalContent = "pluginCreator___children___internal___content",
  PluginCreatorChildrenInternalContentDigest = "pluginCreator___children___internal___contentDigest",
  PluginCreatorChildrenInternalDescription = "pluginCreator___children___internal___description",
  PluginCreatorChildrenInternalFieldOwners = "pluginCreator___children___internal___fieldOwners",
  PluginCreatorChildrenInternalIgnoreType = "pluginCreator___children___internal___ignoreType",
  PluginCreatorChildrenInternalMediaType = "pluginCreator___children___internal___mediaType",
  PluginCreatorChildrenInternalOwner = "pluginCreator___children___internal___owner",
  PluginCreatorChildrenInternalType = "pluginCreator___children___internal___type",
  PluginCreatorInternalContent = "pluginCreator___internal___content",
  PluginCreatorInternalContentDigest = "pluginCreator___internal___contentDigest",
  PluginCreatorInternalDescription = "pluginCreator___internal___description",
  PluginCreatorInternalFieldOwners = "pluginCreator___internal___fieldOwners",
  PluginCreatorInternalIgnoreType = "pluginCreator___internal___ignoreType",
  PluginCreatorInternalMediaType = "pluginCreator___internal___mediaType",
  PluginCreatorInternalOwner = "pluginCreator___internal___owner",
  PluginCreatorInternalType = "pluginCreator___internal___type",
  PluginCreatorResolve = "pluginCreator___resolve",
  PluginCreatorName = "pluginCreator___name",
  PluginCreatorVersion = "pluginCreator___version",
  PluginCreatorPluginOptionsName = "pluginCreator___pluginOptions___name",
  PluginCreatorPluginOptionsShortName = "pluginCreator___pluginOptions___short_name",
  PluginCreatorPluginOptionsStartUrl = "pluginCreator___pluginOptions___start_url",
  PluginCreatorPluginOptionsBackgroundColor = "pluginCreator___pluginOptions___background_color",
  PluginCreatorPluginOptionsThemeColor = "pluginCreator___pluginOptions___theme_color",
  PluginCreatorPluginOptionsDisplay = "pluginCreator___pluginOptions___display",
  PluginCreatorPluginOptionsToken = "pluginCreator___pluginOptions___token",
  PluginCreatorPluginOptionsGraphQlQuery = "pluginCreator___pluginOptions___graphQLQuery",
  PluginCreatorPluginOptionsSpaceId = "pluginCreator___pluginOptions___spaceId",
  PluginCreatorPluginOptionsAccessToken = "pluginCreator___pluginOptions___accessToken",
  PluginCreatorPluginOptionsDownloadLocal = "pluginCreator___pluginOptions___downloadLocal",
  PluginCreatorPluginOptionsPath = "pluginCreator___pluginOptions___path",
  PluginCreatorPluginOptionsPathCheck = "pluginCreator___pluginOptions___pathCheck",
  PluginCreatorNodeApIs = "pluginCreator___nodeAPIs",
  PluginCreatorBrowserApIs = "pluginCreator___browserAPIs",
  PluginCreatorSsrApIs = "pluginCreator___ssrAPIs",
  PluginCreatorPluginFilepath = "pluginCreator___pluginFilepath",
  PluginCreatorPackageJsonName = "pluginCreator___packageJson___name",
  PluginCreatorPackageJsonDescription = "pluginCreator___packageJson___description",
  PluginCreatorPackageJsonVersion = "pluginCreator___packageJson___version",
  PluginCreatorPackageJsonMain = "pluginCreator___packageJson___main",
  PluginCreatorPackageJsonLicense = "pluginCreator___packageJson___license",
  PluginCreatorPackageJsonDependencies = "pluginCreator___packageJson___dependencies",
  PluginCreatorPackageJsonDependenciesName = "pluginCreator___packageJson___dependencies___name",
  PluginCreatorPackageJsonDependenciesVersion = "pluginCreator___packageJson___dependencies___version",
  PluginCreatorPackageJsonDevDependencies = "pluginCreator___packageJson___devDependencies",
  PluginCreatorPackageJsonDevDependenciesName = "pluginCreator___packageJson___devDependencies___name",
  PluginCreatorPackageJsonDevDependenciesVersion = "pluginCreator___packageJson___devDependencies___version",
  PluginCreatorPackageJsonPeerDependencies = "pluginCreator___packageJson___peerDependencies",
  PluginCreatorPackageJsonPeerDependenciesName = "pluginCreator___packageJson___peerDependencies___name",
  PluginCreatorPackageJsonPeerDependenciesVersion = "pluginCreator___packageJson___peerDependencies___version",
  PluginCreatorPackageJsonKeywords = "pluginCreator___packageJson___keywords",
  PluginCreatorId = "pluginCreatorId",
  ComponentPath = "componentPath",
}

export type SitePageFilterInput = {
  path: Maybe<StringQueryOperatorInput>;
  component: Maybe<StringQueryOperatorInput>;
  internalComponentName: Maybe<StringQueryOperatorInput>;
  componentChunkName: Maybe<StringQueryOperatorInput>;
  matchPath: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  isCreatedByStatefulCreatePages: Maybe<BooleanQueryOperatorInput>;
  context: Maybe<SitePageContextFilterInput>;
  pluginCreator: Maybe<SitePluginFilterInput>;
  pluginCreatorId: Maybe<StringQueryOperatorInput>;
  componentPath: Maybe<StringQueryOperatorInput>;
};

export type SitePageGroupConnection = {
  __typename?: "SitePageGroupConnection";
  totalCount: Scalars["Int"];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  field: Scalars["String"];
  fieldValue: Maybe<Scalars["String"]>;
};

export type SitePageSortInput = {
  fields: Maybe<Array<Maybe<SitePageFieldsEnum>>>;
  order: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SitePlugin = Node & {
  __typename?: "SitePlugin";
  id: Scalars["ID"];
  parent: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  resolve: Maybe<Scalars["String"]>;
  name: Maybe<Scalars["String"]>;
  version: Maybe<Scalars["String"]>;
  pluginOptions: Maybe<SitePluginPluginOptions>;
  nodeAPIs: Maybe<Array<Maybe<Scalars["String"]>>>;
  browserAPIs: Maybe<Array<Maybe<Scalars["String"]>>>;
  ssrAPIs: Maybe<Array<Maybe<Scalars["String"]>>>;
  pluginFilepath: Maybe<Scalars["String"]>;
  packageJson: Maybe<SitePluginPackageJson>;
};

export type SitePluginConnection = {
  __typename?: "SitePluginConnection";
  totalCount: Scalars["Int"];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  distinct: Array<Scalars["String"]>;
  group: Array<SitePluginGroupConnection>;
};

export type SitePluginConnectionDistinctArgs = {
  field: SitePluginFieldsEnum;
};

export type SitePluginConnectionGroupArgs = {
  skip: Maybe<Scalars["Int"]>;
  limit: Maybe<Scalars["Int"]>;
  field: SitePluginFieldsEnum;
};

export type SitePluginEdge = {
  __typename?: "SitePluginEdge";
  next: Maybe<SitePlugin>;
  node: SitePlugin;
  previous: Maybe<SitePlugin>;
};

export enum SitePluginFieldsEnum {
  Id = "id",
  ParentId = "parent___id",
  ParentParentId = "parent___parent___id",
  ParentParentParentId = "parent___parent___parent___id",
  ParentParentParentChildren = "parent___parent___parent___children",
  ParentParentChildren = "parent___parent___children",
  ParentParentChildrenId = "parent___parent___children___id",
  ParentParentChildrenChildren = "parent___parent___children___children",
  ParentParentInternalContent = "parent___parent___internal___content",
  ParentParentInternalContentDigest = "parent___parent___internal___contentDigest",
  ParentParentInternalDescription = "parent___parent___internal___description",
  ParentParentInternalFieldOwners = "parent___parent___internal___fieldOwners",
  ParentParentInternalIgnoreType = "parent___parent___internal___ignoreType",
  ParentParentInternalMediaType = "parent___parent___internal___mediaType",
  ParentParentInternalOwner = "parent___parent___internal___owner",
  ParentParentInternalType = "parent___parent___internal___type",
  ParentChildren = "parent___children",
  ParentChildrenId = "parent___children___id",
  ParentChildrenParentId = "parent___children___parent___id",
  ParentChildrenParentChildren = "parent___children___parent___children",
  ParentChildrenChildren = "parent___children___children",
  ParentChildrenChildrenId = "parent___children___children___id",
  ParentChildrenChildrenChildren = "parent___children___children___children",
  ParentChildrenInternalContent = "parent___children___internal___content",
  ParentChildrenInternalContentDigest = "parent___children___internal___contentDigest",
  ParentChildrenInternalDescription = "parent___children___internal___description",
  ParentChildrenInternalFieldOwners = "parent___children___internal___fieldOwners",
  ParentChildrenInternalIgnoreType = "parent___children___internal___ignoreType",
  ParentChildrenInternalMediaType = "parent___children___internal___mediaType",
  ParentChildrenInternalOwner = "parent___children___internal___owner",
  ParentChildrenInternalType = "parent___children___internal___type",
  ParentInternalContent = "parent___internal___content",
  ParentInternalContentDigest = "parent___internal___contentDigest",
  ParentInternalDescription = "parent___internal___description",
  ParentInternalFieldOwners = "parent___internal___fieldOwners",
  ParentInternalIgnoreType = "parent___internal___ignoreType",
  ParentInternalMediaType = "parent___internal___mediaType",
  ParentInternalOwner = "parent___internal___owner",
  ParentInternalType = "parent___internal___type",
  Children = "children",
  ChildrenId = "children___id",
  ChildrenParentId = "children___parent___id",
  ChildrenParentParentId = "children___parent___parent___id",
  ChildrenParentParentChildren = "children___parent___parent___children",
  ChildrenParentChildren = "children___parent___children",
  ChildrenParentChildrenId = "children___parent___children___id",
  ChildrenParentChildrenChildren = "children___parent___children___children",
  ChildrenParentInternalContent = "children___parent___internal___content",
  ChildrenParentInternalContentDigest = "children___parent___internal___contentDigest",
  ChildrenParentInternalDescription = "children___parent___internal___description",
  ChildrenParentInternalFieldOwners = "children___parent___internal___fieldOwners",
  ChildrenParentInternalIgnoreType = "children___parent___internal___ignoreType",
  ChildrenParentInternalMediaType = "children___parent___internal___mediaType",
  ChildrenParentInternalOwner = "children___parent___internal___owner",
  ChildrenParentInternalType = "children___parent___internal___type",
  ChildrenChildren = "children___children",
  ChildrenChildrenId = "children___children___id",
  ChildrenChildrenParentId = "children___children___parent___id",
  ChildrenChildrenParentChildren = "children___children___parent___children",
  ChildrenChildrenChildren = "children___children___children",
  ChildrenChildrenChildrenId = "children___children___children___id",
  ChildrenChildrenChildrenChildren = "children___children___children___children",
  ChildrenChildrenInternalContent = "children___children___internal___content",
  ChildrenChildrenInternalContentDigest = "children___children___internal___contentDigest",
  ChildrenChildrenInternalDescription = "children___children___internal___description",
  ChildrenChildrenInternalFieldOwners = "children___children___internal___fieldOwners",
  ChildrenChildrenInternalIgnoreType = "children___children___internal___ignoreType",
  ChildrenChildrenInternalMediaType = "children___children___internal___mediaType",
  ChildrenChildrenInternalOwner = "children___children___internal___owner",
  ChildrenChildrenInternalType = "children___children___internal___type",
  ChildrenInternalContent = "children___internal___content",
  ChildrenInternalContentDigest = "children___internal___contentDigest",
  ChildrenInternalDescription = "children___internal___description",
  ChildrenInternalFieldOwners = "children___internal___fieldOwners",
  ChildrenInternalIgnoreType = "children___internal___ignoreType",
  ChildrenInternalMediaType = "children___internal___mediaType",
  ChildrenInternalOwner = "children___internal___owner",
  ChildrenInternalType = "children___internal___type",
  InternalContent = "internal___content",
  InternalContentDigest = "internal___contentDigest",
  InternalDescription = "internal___description",
  InternalFieldOwners = "internal___fieldOwners",
  InternalIgnoreType = "internal___ignoreType",
  InternalMediaType = "internal___mediaType",
  InternalOwner = "internal___owner",
  InternalType = "internal___type",
  Resolve = "resolve",
  Name = "name",
  Version = "version",
  PluginOptionsName = "pluginOptions___name",
  PluginOptionsShortName = "pluginOptions___short_name",
  PluginOptionsStartUrl = "pluginOptions___start_url",
  PluginOptionsBackgroundColor = "pluginOptions___background_color",
  PluginOptionsThemeColor = "pluginOptions___theme_color",
  PluginOptionsDisplay = "pluginOptions___display",
  PluginOptionsToken = "pluginOptions___token",
  PluginOptionsGraphQlQuery = "pluginOptions___graphQLQuery",
  PluginOptionsSpaceId = "pluginOptions___spaceId",
  PluginOptionsAccessToken = "pluginOptions___accessToken",
  PluginOptionsDownloadLocal = "pluginOptions___downloadLocal",
  PluginOptionsPath = "pluginOptions___path",
  PluginOptionsPathCheck = "pluginOptions___pathCheck",
  NodeApIs = "nodeAPIs",
  BrowserApIs = "browserAPIs",
  SsrApIs = "ssrAPIs",
  PluginFilepath = "pluginFilepath",
  PackageJsonName = "packageJson___name",
  PackageJsonDescription = "packageJson___description",
  PackageJsonVersion = "packageJson___version",
  PackageJsonMain = "packageJson___main",
  PackageJsonLicense = "packageJson___license",
  PackageJsonDependencies = "packageJson___dependencies",
  PackageJsonDependenciesName = "packageJson___dependencies___name",
  PackageJsonDependenciesVersion = "packageJson___dependencies___version",
  PackageJsonDevDependencies = "packageJson___devDependencies",
  PackageJsonDevDependenciesName = "packageJson___devDependencies___name",
  PackageJsonDevDependenciesVersion = "packageJson___devDependencies___version",
  PackageJsonPeerDependencies = "packageJson___peerDependencies",
  PackageJsonPeerDependenciesName = "packageJson___peerDependencies___name",
  PackageJsonPeerDependenciesVersion = "packageJson___peerDependencies___version",
  PackageJsonKeywords = "packageJson___keywords",
}

export type SitePluginFilterInput = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  resolve: Maybe<StringQueryOperatorInput>;
  name: Maybe<StringQueryOperatorInput>;
  version: Maybe<StringQueryOperatorInput>;
  pluginOptions: Maybe<SitePluginPluginOptionsFilterInput>;
  nodeAPIs: Maybe<StringQueryOperatorInput>;
  browserAPIs: Maybe<StringQueryOperatorInput>;
  ssrAPIs: Maybe<StringQueryOperatorInput>;
  pluginFilepath: Maybe<StringQueryOperatorInput>;
  packageJson: Maybe<SitePluginPackageJsonFilterInput>;
};

export type SitePluginGroupConnection = {
  __typename?: "SitePluginGroupConnection";
  totalCount: Scalars["Int"];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  field: Scalars["String"];
  fieldValue: Maybe<Scalars["String"]>;
};

export type SitePluginPackageJson = {
  __typename?: "SitePluginPackageJson";
  name: Maybe<Scalars["String"]>;
  description: Maybe<Scalars["String"]>;
  version: Maybe<Scalars["String"]>;
  main: Maybe<Scalars["String"]>;
  license: Maybe<Scalars["String"]>;
  dependencies: Maybe<Array<Maybe<SitePluginPackageJsonDependencies>>>;
  devDependencies: Maybe<Array<Maybe<SitePluginPackageJsonDevDependencies>>>;
  peerDependencies: Maybe<Array<Maybe<SitePluginPackageJsonPeerDependencies>>>;
  keywords: Maybe<Array<Maybe<Scalars["String"]>>>;
};

export type SitePluginPackageJsonDependencies = {
  __typename?: "SitePluginPackageJsonDependencies";
  name: Maybe<Scalars["String"]>;
  version: Maybe<Scalars["String"]>;
};

export type SitePluginPackageJsonDependenciesFilterInput = {
  name: Maybe<StringQueryOperatorInput>;
  version: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonDependenciesFilterListInput = {
  elemMatch: Maybe<SitePluginPackageJsonDependenciesFilterInput>;
};

export type SitePluginPackageJsonDevDependencies = {
  __typename?: "SitePluginPackageJsonDevDependencies";
  name: Maybe<Scalars["String"]>;
  version: Maybe<Scalars["String"]>;
};

export type SitePluginPackageJsonDevDependenciesFilterInput = {
  name: Maybe<StringQueryOperatorInput>;
  version: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonDevDependenciesFilterListInput = {
  elemMatch: Maybe<SitePluginPackageJsonDevDependenciesFilterInput>;
};

export type SitePluginPackageJsonFilterInput = {
  name: Maybe<StringQueryOperatorInput>;
  description: Maybe<StringQueryOperatorInput>;
  version: Maybe<StringQueryOperatorInput>;
  main: Maybe<StringQueryOperatorInput>;
  license: Maybe<StringQueryOperatorInput>;
  dependencies: Maybe<SitePluginPackageJsonDependenciesFilterListInput>;
  devDependencies: Maybe<SitePluginPackageJsonDevDependenciesFilterListInput>;
  peerDependencies: Maybe<SitePluginPackageJsonPeerDependenciesFilterListInput>;
  keywords: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonPeerDependencies = {
  __typename?: "SitePluginPackageJsonPeerDependencies";
  name: Maybe<Scalars["String"]>;
  version: Maybe<Scalars["String"]>;
};

export type SitePluginPackageJsonPeerDependenciesFilterInput = {
  name: Maybe<StringQueryOperatorInput>;
  version: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonPeerDependenciesFilterListInput = {
  elemMatch: Maybe<SitePluginPackageJsonPeerDependenciesFilterInput>;
};

export type SitePluginPluginOptions = {
  __typename?: "SitePluginPluginOptions";
  name: Maybe<Scalars["String"]>;
  short_name: Maybe<Scalars["String"]>;
  start_url: Maybe<Scalars["String"]>;
  background_color: Maybe<Scalars["String"]>;
  theme_color: Maybe<Scalars["String"]>;
  display: Maybe<Scalars["String"]>;
  token: Maybe<Scalars["String"]>;
  graphQLQuery: Maybe<Scalars["String"]>;
  spaceId: Maybe<Scalars["String"]>;
  accessToken: Maybe<Scalars["String"]>;
  downloadLocal: Maybe<Scalars["Boolean"]>;
  path: Maybe<Scalars["String"]>;
  pathCheck: Maybe<Scalars["Boolean"]>;
};

export type SitePluginPluginOptionsFilterInput = {
  name: Maybe<StringQueryOperatorInput>;
  short_name: Maybe<StringQueryOperatorInput>;
  start_url: Maybe<StringQueryOperatorInput>;
  background_color: Maybe<StringQueryOperatorInput>;
  theme_color: Maybe<StringQueryOperatorInput>;
  display: Maybe<StringQueryOperatorInput>;
  token: Maybe<StringQueryOperatorInput>;
  graphQLQuery: Maybe<StringQueryOperatorInput>;
  spaceId: Maybe<StringQueryOperatorInput>;
  accessToken: Maybe<StringQueryOperatorInput>;
  downloadLocal: Maybe<BooleanQueryOperatorInput>;
  path: Maybe<StringQueryOperatorInput>;
  pathCheck: Maybe<BooleanQueryOperatorInput>;
};

export type SitePluginSortInput = {
  fields: Maybe<Array<Maybe<SitePluginFieldsEnum>>>;
  order: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SiteSiteMetadata = {
  __typename?: "SiteSiteMetadata";
  title: Maybe<Scalars["String"]>;
  description: Maybe<Scalars["String"]>;
  author: Maybe<Scalars["String"]>;
};

export type SiteSiteMetadataFilterInput = {
  title: Maybe<StringQueryOperatorInput>;
  description: Maybe<StringQueryOperatorInput>;
  author: Maybe<StringQueryOperatorInput>;
};

export type SiteSortInput = {
  fields: Maybe<Array<Maybe<SiteFieldsEnum>>>;
  order: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export enum SortOrderEnum {
  Asc = "ASC",
  Desc = "DESC",
}

export type StringQueryOperatorInput = {
  eq: Maybe<Scalars["String"]>;
  ne: Maybe<Scalars["String"]>;
  in: Maybe<Array<Maybe<Scalars["String"]>>>;
  nin: Maybe<Array<Maybe<Scalars["String"]>>>;
  regex: Maybe<Scalars["String"]>;
  glob: Maybe<Scalars["String"]>;
};
