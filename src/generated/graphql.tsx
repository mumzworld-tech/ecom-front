import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
};

export type BooleanFieldComparison = {
  is?: InputMaybe<Scalars['Boolean']>;
  isNot?: InputMaybe<Scalars['Boolean']>;
};

export type Category = {
  __typename?: 'Category';
  created_at: Scalars['DateTime'];
  id: Scalars['ID'];
  image?: Maybe<Scalars['String']>;
  include_in_menu: Scalars['Float'];
  level: Scalars['Float'];
  name: Scalars['String'];
  status: Status;
  updated_at: Scalars['DateTime'];
  url_key: Scalars['String'];
};

export type CategoryAggregateGroupBy = {
  __typename?: 'CategoryAggregateGroupBy';
  id?: Maybe<Scalars['ID']>;
  include_in_menu?: Maybe<Scalars['Float']>;
  level?: Maybe<Scalars['Float']>;
  name?: Maybe<Scalars['String']>;
  status?: Maybe<Status>;
  url_key?: Maybe<Scalars['String']>;
};

export type CategoryAvgAggregate = {
  __typename?: 'CategoryAvgAggregate';
  id?: Maybe<Scalars['Float']>;
  include_in_menu?: Maybe<Scalars['Float']>;
  level?: Maybe<Scalars['Float']>;
  status?: Maybe<Scalars['Float']>;
};

export type CategoryCountAggregate = {
  __typename?: 'CategoryCountAggregate';
  id?: Maybe<Scalars['Int']>;
  include_in_menu?: Maybe<Scalars['Int']>;
  level?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['Int']>;
  url_key?: Maybe<Scalars['Int']>;
};

export type CategoryDeleteFilter = {
  and?: InputMaybe<Array<CategoryDeleteFilter>>;
  id?: InputMaybe<IdFilterComparison>;
  include_in_menu?: InputMaybe<NumberFieldComparison>;
  level?: InputMaybe<NumberFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<CategoryDeleteFilter>>;
  status?: InputMaybe<CategoryStatusFilterComparison>;
  url_key?: InputMaybe<StringFieldComparison>;
};

export type CategoryDeleteResponse = {
  __typename?: 'CategoryDeleteResponse';
  created_at?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  image?: Maybe<Scalars['String']>;
  include_in_menu?: Maybe<Scalars['Float']>;
  level?: Maybe<Scalars['Float']>;
  name?: Maybe<Scalars['String']>;
  status?: Maybe<Status>;
  updated_at?: Maybe<Scalars['DateTime']>;
  url_key?: Maybe<Scalars['String']>;
};

export type CategoryFilter = {
  and?: InputMaybe<Array<CategoryFilter>>;
  id?: InputMaybe<IdFilterComparison>;
  include_in_menu?: InputMaybe<NumberFieldComparison>;
  level?: InputMaybe<NumberFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<CategoryFilter>>;
  status?: InputMaybe<CategoryStatusFilterComparison>;
  url_key?: InputMaybe<StringFieldComparison>;
};

export type CategoryMaxAggregate = {
  __typename?: 'CategoryMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  include_in_menu?: Maybe<Scalars['Float']>;
  level?: Maybe<Scalars['Float']>;
  name?: Maybe<Scalars['String']>;
  status?: Maybe<Status>;
  url_key?: Maybe<Scalars['String']>;
};

export type CategoryMinAggregate = {
  __typename?: 'CategoryMinAggregate';
  id?: Maybe<Scalars['ID']>;
  include_in_menu?: Maybe<Scalars['Float']>;
  level?: Maybe<Scalars['Float']>;
  name?: Maybe<Scalars['String']>;
  status?: Maybe<Status>;
  url_key?: Maybe<Scalars['String']>;
};

export type CategorySort = {
  direction: SortDirection;
  field: CategorySortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum CategorySortFields {
  Id = 'id',
  IncludeInMenu = 'include_in_menu',
  Level = 'level',
  Name = 'name',
  Status = 'status',
  UrlKey = 'url_key'
}

export type CategoryStatusFilterComparison = {
  eq?: InputMaybe<Status>;
  in?: InputMaybe<Array<Status>>;
  neq?: InputMaybe<Status>;
  notIn?: InputMaybe<Array<Status>>;
};

export type CategorySumAggregate = {
  __typename?: 'CategorySumAggregate';
  id?: Maybe<Scalars['Float']>;
  include_in_menu?: Maybe<Scalars['Float']>;
  level?: Maybe<Scalars['Float']>;
  status?: Maybe<Scalars['Float']>;
};

export type CategoryUpdateFilter = {
  and?: InputMaybe<Array<CategoryUpdateFilter>>;
  id?: InputMaybe<IdFilterComparison>;
  include_in_menu?: InputMaybe<NumberFieldComparison>;
  level?: InputMaybe<NumberFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<CategoryUpdateFilter>>;
  status?: InputMaybe<CategoryStatusFilterComparison>;
  url_key?: InputMaybe<StringFieldComparison>;
};

export type CreateCategory = {
  created_at?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['ID']>;
  image?: InputMaybe<Scalars['String']>;
  include_in_menu?: InputMaybe<Scalars['Float']>;
  level?: InputMaybe<Scalars['Float']>;
  name?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Status>;
  updated_at?: InputMaybe<Scalars['DateTime']>;
  url_key?: InputMaybe<Scalars['String']>;
};

export type CreateManyCategoriesInput = {
  /** Array of records to create */
  categories: Array<CreateCategory>;
};

export type CreateManyProductsInput = {
  /** Array of records to create */
  products: Array<CreateProduct>;
};

export type CreateOneCategoryInput = {
  /** The record to create */
  category: CreateCategory;
};

export type CreateOneProductInput = {
  /** The record to create */
  product: CreateProduct;
};

export type CreateProduct = {
  brand?: InputMaybe<Scalars['String']>;
  categoryId?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  gender?: InputMaybe<Gender>;
  id?: InputMaybe<Scalars['ID']>;
  image?: InputMaybe<Scalars['String']>;
  is_sale?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['Float']>;
  qty?: InputMaybe<Scalars['Float']>;
  sku?: InputMaybe<Scalars['String']>;
  special_price?: InputMaybe<Scalars['Float']>;
  status?: InputMaybe<Status>;
  stock_status?: InputMaybe<StockStatus>;
  updated_at?: InputMaybe<Scalars['DateTime']>;
  url_key?: InputMaybe<Scalars['String']>;
};

export type DeleteManyCategoriesInput = {
  /** Filter to find records to delete */
  filter: CategoryDeleteFilter;
};

export type DeleteManyProductsInput = {
  /** Filter to find records to delete */
  filter: ProductDeleteFilter;
};

export type DeleteManyResponse = {
  __typename?: 'DeleteManyResponse';
  /** The number of records deleted. */
  deletedCount: Scalars['Int'];
};

export type DeleteOneCategoryInput = {
  /** The id of the record to delete. */
  id: Scalars['ID'];
};

export type DeleteOneProductInput = {
  /** The id of the record to delete. */
  id: Scalars['ID'];
};

export enum Gender {
  Boy = 'Boy',
  Girl = 'Girl',
  Unisex = 'Unisex'
}

export type GenderFilterComparison = {
  eq?: InputMaybe<Gender>;
  gt?: InputMaybe<Gender>;
  gte?: InputMaybe<Gender>;
  iLike?: InputMaybe<Gender>;
  in?: InputMaybe<Array<Gender>>;
  is?: InputMaybe<Scalars['Boolean']>;
  isNot?: InputMaybe<Scalars['Boolean']>;
  like?: InputMaybe<Gender>;
  lt?: InputMaybe<Gender>;
  lte?: InputMaybe<Gender>;
  neq?: InputMaybe<Gender>;
  notILike?: InputMaybe<Gender>;
  notIn?: InputMaybe<Array<Gender>>;
  notLike?: InputMaybe<Gender>;
};

export type IdFilterComparison = {
  eq?: InputMaybe<Scalars['ID']>;
  gt?: InputMaybe<Scalars['ID']>;
  gte?: InputMaybe<Scalars['ID']>;
  iLike?: InputMaybe<Scalars['ID']>;
  in?: InputMaybe<Array<Scalars['ID']>>;
  is?: InputMaybe<Scalars['Boolean']>;
  isNot?: InputMaybe<Scalars['Boolean']>;
  like?: InputMaybe<Scalars['ID']>;
  lt?: InputMaybe<Scalars['ID']>;
  lte?: InputMaybe<Scalars['ID']>;
  neq?: InputMaybe<Scalars['ID']>;
  notILike?: InputMaybe<Scalars['ID']>;
  notIn?: InputMaybe<Array<Scalars['ID']>>;
  notLike?: InputMaybe<Scalars['ID']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createManyCategories: Array<Category>;
  createManyProducts: Array<Product>;
  createOneCategory: Category;
  createOneProduct: Product;
  deleteManyCategories: DeleteManyResponse;
  deleteManyProducts: DeleteManyResponse;
  deleteOneCategory: CategoryDeleteResponse;
  deleteOneProduct: ProductDeleteResponse;
  removeCategoryFromProduct: Product;
  setCategoryOnProduct: Product;
  updateManyCategories: UpdateManyResponse;
  updateManyProducts: UpdateManyResponse;
  updateOneCategory: Category;
  updateOneProduct: Product;
};


export type MutationCreateManyCategoriesArgs = {
  input: CreateManyCategoriesInput;
};


export type MutationCreateManyProductsArgs = {
  input: CreateManyProductsInput;
};


export type MutationCreateOneCategoryArgs = {
  input: CreateOneCategoryInput;
};


export type MutationCreateOneProductArgs = {
  input: CreateOneProductInput;
};


export type MutationDeleteManyCategoriesArgs = {
  input: DeleteManyCategoriesInput;
};


export type MutationDeleteManyProductsArgs = {
  input: DeleteManyProductsInput;
};


export type MutationDeleteOneCategoryArgs = {
  input: DeleteOneCategoryInput;
};


export type MutationDeleteOneProductArgs = {
  input: DeleteOneProductInput;
};


export type MutationRemoveCategoryFromProductArgs = {
  input: RemoveCategoryFromProductInput;
};


export type MutationSetCategoryOnProductArgs = {
  input: SetCategoryOnProductInput;
};


export type MutationUpdateManyCategoriesArgs = {
  input: UpdateManyCategoriesInput;
};


export type MutationUpdateManyProductsArgs = {
  input: UpdateManyProductsInput;
};


export type MutationUpdateOneCategoryArgs = {
  input: UpdateOneCategoryInput;
};


export type MutationUpdateOneProductArgs = {
  input: UpdateOneProductInput;
};

export type NumberFieldComparison = {
  between?: InputMaybe<NumberFieldComparisonBetween>;
  eq?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<Scalars['Float']>>;
  is?: InputMaybe<Scalars['Boolean']>;
  isNot?: InputMaybe<Scalars['Boolean']>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  neq?: InputMaybe<Scalars['Float']>;
  notBetween?: InputMaybe<NumberFieldComparisonBetween>;
  notIn?: InputMaybe<Array<Scalars['Float']>>;
};

export type NumberFieldComparisonBetween = {
  lower: Scalars['Float'];
  upper: Scalars['Float'];
};

export type OffsetPageInfo = {
  __typename?: 'OffsetPageInfo';
  /** true if paging forward and there are more records. */
  hasNextPage?: Maybe<Scalars['Boolean']>;
  /** true if paging backwards and there are more records. */
  hasPreviousPage?: Maybe<Scalars['Boolean']>;
};

export type OffsetPaging = {
  /** Limit the number of records returned */
  limit?: InputMaybe<Scalars['Int']>;
  /** Offset to start returning records from */
  offset?: InputMaybe<Scalars['Int']>;
};

export type Product = {
  __typename?: 'Product';
  brand?: Maybe<Scalars['String']>;
  category: Category;
  categoryId?: Maybe<Scalars['String']>;
  created_at: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  gender?: Maybe<Gender>;
  id: Scalars['ID'];
  image?: Maybe<Scalars['String']>;
  is_sale: Scalars['Boolean'];
  name: Scalars['String'];
  price: Scalars['Float'];
  qty: Scalars['Float'];
  sku: Scalars['String'];
  special_price?: Maybe<Scalars['Float']>;
  status: Status;
  stock_status: StockStatus;
  updated_at: Scalars['DateTime'];
  url_key: Scalars['String'];
};

export type ProductAggregateFilter = {
  and?: InputMaybe<Array<ProductAggregateFilter>>;
  brand?: InputMaybe<StringFieldComparison>;
  categoryId?: InputMaybe<StringFieldComparison>;
  gender?: InputMaybe<GenderFilterComparison>;
  id?: InputMaybe<IdFilterComparison>;
  is_sale?: InputMaybe<BooleanFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ProductAggregateFilter>>;
  price?: InputMaybe<NumberFieldComparison>;
  qty?: InputMaybe<NumberFieldComparison>;
  sku?: InputMaybe<StringFieldComparison>;
  special_price?: InputMaybe<NumberFieldComparison>;
  status?: InputMaybe<ProductStatusFilterComparison>;
  stock_status?: InputMaybe<ProductStock_StatusFilterComparison>;
  url_key?: InputMaybe<StringFieldComparison>;
};

export type ProductAggregateGroupBy = {
  __typename?: 'ProductAggregateGroupBy';
  brand?: Maybe<Scalars['String']>;
  categoryId?: Maybe<Scalars['String']>;
  gender?: Maybe<Gender>;
  id?: Maybe<Scalars['ID']>;
  is_sale?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Float']>;
  qty?: Maybe<Scalars['Float']>;
  sku?: Maybe<Scalars['String']>;
  special_price?: Maybe<Scalars['Float']>;
  status?: Maybe<Status>;
  stock_status?: Maybe<StockStatus>;
  url_key?: Maybe<Scalars['String']>;
};

export type ProductAggregateResponse = {
  __typename?: 'ProductAggregateResponse';
  avg?: Maybe<ProductAvgAggregate>;
  count?: Maybe<ProductCountAggregate>;
  groupBy?: Maybe<ProductAggregateGroupBy>;
  max?: Maybe<ProductMaxAggregate>;
  min?: Maybe<ProductMinAggregate>;
  sum?: Maybe<ProductSumAggregate>;
};

export type ProductAvgAggregate = {
  __typename?: 'ProductAvgAggregate';
  id?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  qty?: Maybe<Scalars['Float']>;
  special_price?: Maybe<Scalars['Float']>;
  status?: Maybe<Scalars['Float']>;
  stock_status?: Maybe<Scalars['Float']>;
};

export type ProductConnection = {
  __typename?: 'ProductConnection';
  /** Array of nodes. */
  nodes: Array<Product>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int'];
};

export type ProductCountAggregate = {
  __typename?: 'ProductCountAggregate';
  brand?: Maybe<Scalars['Int']>;
  categoryId?: Maybe<Scalars['Int']>;
  gender?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  is_sale?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['Int']>;
  price?: Maybe<Scalars['Int']>;
  qty?: Maybe<Scalars['Int']>;
  sku?: Maybe<Scalars['Int']>;
  special_price?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['Int']>;
  stock_status?: Maybe<Scalars['Int']>;
  url_key?: Maybe<Scalars['Int']>;
};

export type ProductDeleteFilter = {
  and?: InputMaybe<Array<ProductDeleteFilter>>;
  brand?: InputMaybe<StringFieldComparison>;
  categoryId?: InputMaybe<StringFieldComparison>;
  gender?: InputMaybe<GenderFilterComparison>;
  id?: InputMaybe<IdFilterComparison>;
  is_sale?: InputMaybe<BooleanFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ProductDeleteFilter>>;
  price?: InputMaybe<NumberFieldComparison>;
  qty?: InputMaybe<NumberFieldComparison>;
  sku?: InputMaybe<StringFieldComparison>;
  special_price?: InputMaybe<NumberFieldComparison>;
  status?: InputMaybe<ProductStatusFilterComparison>;
  stock_status?: InputMaybe<ProductStock_StatusFilterComparison>;
  url_key?: InputMaybe<StringFieldComparison>;
};

export type ProductDeleteResponse = {
  __typename?: 'ProductDeleteResponse';
  brand?: Maybe<Scalars['String']>;
  categoryId?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  gender?: Maybe<Gender>;
  id?: Maybe<Scalars['ID']>;
  image?: Maybe<Scalars['String']>;
  is_sale?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Float']>;
  qty?: Maybe<Scalars['Float']>;
  sku?: Maybe<Scalars['String']>;
  special_price?: Maybe<Scalars['Float']>;
  status?: Maybe<Status>;
  stock_status?: Maybe<StockStatus>;
  updated_at?: Maybe<Scalars['DateTime']>;
  url_key?: Maybe<Scalars['String']>;
};

export type ProductFilter = {
  and?: InputMaybe<Array<ProductFilter>>;
  brand?: InputMaybe<StringFieldComparison>;
  category?: InputMaybe<ProductFilterCategoryFilter>;
  categoryId?: InputMaybe<StringFieldComparison>;
  gender?: InputMaybe<GenderFilterComparison>;
  id?: InputMaybe<IdFilterComparison>;
  is_sale?: InputMaybe<BooleanFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ProductFilter>>;
  price?: InputMaybe<NumberFieldComparison>;
  qty?: InputMaybe<NumberFieldComparison>;
  sku?: InputMaybe<StringFieldComparison>;
  special_price?: InputMaybe<NumberFieldComparison>;
  status?: InputMaybe<ProductStatusFilterComparison>;
  stock_status?: InputMaybe<ProductStock_StatusFilterComparison>;
  url_key?: InputMaybe<StringFieldComparison>;
};

export type ProductFilterCategoryFilter = {
  and?: InputMaybe<Array<ProductFilterCategoryFilter>>;
  id?: InputMaybe<IdFilterComparison>;
  include_in_menu?: InputMaybe<NumberFieldComparison>;
  level?: InputMaybe<NumberFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ProductFilterCategoryFilter>>;
  status?: InputMaybe<CategoryStatusFilterComparison>;
  url_key?: InputMaybe<StringFieldComparison>;
};

export type ProductMaxAggregate = {
  __typename?: 'ProductMaxAggregate';
  brand?: Maybe<Scalars['String']>;
  categoryId?: Maybe<Scalars['String']>;
  gender?: Maybe<Gender>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Float']>;
  qty?: Maybe<Scalars['Float']>;
  sku?: Maybe<Scalars['String']>;
  special_price?: Maybe<Scalars['Float']>;
  status?: Maybe<Status>;
  stock_status?: Maybe<StockStatus>;
  url_key?: Maybe<Scalars['String']>;
};

export type ProductMinAggregate = {
  __typename?: 'ProductMinAggregate';
  brand?: Maybe<Scalars['String']>;
  categoryId?: Maybe<Scalars['String']>;
  gender?: Maybe<Gender>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Float']>;
  qty?: Maybe<Scalars['Float']>;
  sku?: Maybe<Scalars['String']>;
  special_price?: Maybe<Scalars['Float']>;
  status?: Maybe<Status>;
  stock_status?: Maybe<StockStatus>;
  url_key?: Maybe<Scalars['String']>;
};

export type ProductSort = {
  direction: SortDirection;
  field: ProductSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum ProductSortFields {
  Brand = 'brand',
  CategoryId = 'categoryId',
  Gender = 'gender',
  Id = 'id',
  IsSale = 'is_sale',
  Name = 'name',
  Price = 'price',
  Qty = 'qty',
  Sku = 'sku',
  SpecialPrice = 'special_price',
  Status = 'status',
  StockStatus = 'stock_status',
  UrlKey = 'url_key'
}

export type ProductStatusFilterComparison = {
  eq?: InputMaybe<Status>;
  in?: InputMaybe<Array<Status>>;
  neq?: InputMaybe<Status>;
  notIn?: InputMaybe<Array<Status>>;
};

export type ProductStock_StatusFilterComparison = {
  eq?: InputMaybe<StockStatus>;
  in?: InputMaybe<Array<StockStatus>>;
  neq?: InputMaybe<StockStatus>;
  notIn?: InputMaybe<Array<StockStatus>>;
};

export type ProductSumAggregate = {
  __typename?: 'ProductSumAggregate';
  id?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  qty?: Maybe<Scalars['Float']>;
  special_price?: Maybe<Scalars['Float']>;
  status?: Maybe<Scalars['Float']>;
  stock_status?: Maybe<Scalars['Float']>;
};

export type ProductUpdateFilter = {
  and?: InputMaybe<Array<ProductUpdateFilter>>;
  brand?: InputMaybe<StringFieldComparison>;
  categoryId?: InputMaybe<StringFieldComparison>;
  gender?: InputMaybe<GenderFilterComparison>;
  id?: InputMaybe<IdFilterComparison>;
  is_sale?: InputMaybe<BooleanFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ProductUpdateFilter>>;
  price?: InputMaybe<NumberFieldComparison>;
  qty?: InputMaybe<NumberFieldComparison>;
  sku?: InputMaybe<StringFieldComparison>;
  special_price?: InputMaybe<NumberFieldComparison>;
  status?: InputMaybe<ProductStatusFilterComparison>;
  stock_status?: InputMaybe<ProductStock_StatusFilterComparison>;
  url_key?: InputMaybe<StringFieldComparison>;
};

export type Query = {
  __typename?: 'Query';
  categories: Array<Category>;
  category?: Maybe<Category>;
  product?: Maybe<Product>;
  productAggregate: Array<ProductAggregateResponse>;
  products: ProductConnection;
};


export type QueryCategoriesArgs = {
  filter?: InputMaybe<CategoryFilter>;
  sorting?: InputMaybe<Array<CategorySort>>;
};


export type QueryCategoryArgs = {
  id: Scalars['ID'];
};


export type QueryProductArgs = {
  id: Scalars['ID'];
};


export type QueryProductAggregateArgs = {
  filter?: InputMaybe<ProductAggregateFilter>;
};


export type QueryProductsArgs = {
  filter?: InputMaybe<ProductFilter>;
  paging?: InputMaybe<OffsetPaging>;
  sorting?: InputMaybe<Array<ProductSort>>;
};

export type RemoveCategoryFromProductInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The id of relation. */
  relationId: Scalars['ID'];
};

export type SetCategoryOnProductInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The id of relation. */
  relationId: Scalars['ID'];
};

/** Sort Directions */
export enum SortDirection {
  Asc = 'ASC',
  Desc = 'DESC'
}

/** Sort Nulls Options */
export enum SortNulls {
  NullsFirst = 'NULLS_FIRST',
  NullsLast = 'NULLS_LAST'
}

export enum Status {
  Disabled = 'DISABLED',
  Enabled = 'ENABLED'
}

export enum StockStatus {
  InStock = 'IN_STOCK',
  OutOfStock = 'OUT_OF_STOCK'
}

export type StringFieldComparison = {
  eq?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  iLike?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  is?: InputMaybe<Scalars['Boolean']>;
  isNot?: InputMaybe<Scalars['Boolean']>;
  like?: InputMaybe<Scalars['String']>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  neq?: InputMaybe<Scalars['String']>;
  notILike?: InputMaybe<Scalars['String']>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  notLike?: InputMaybe<Scalars['String']>;
};

export type UpdateCategory = {
  created_at?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['ID']>;
  image?: InputMaybe<Scalars['String']>;
  include_in_menu?: InputMaybe<Scalars['Float']>;
  level?: InputMaybe<Scalars['Float']>;
  name?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Status>;
  updated_at?: InputMaybe<Scalars['DateTime']>;
  url_key?: InputMaybe<Scalars['String']>;
};

export type UpdateManyCategoriesInput = {
  /** Filter used to find fields to update */
  filter: CategoryUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: UpdateCategory;
};

export type UpdateManyProductsInput = {
  /** Filter used to find fields to update */
  filter: ProductUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: UpdateProduct;
};

export type UpdateManyResponse = {
  __typename?: 'UpdateManyResponse';
  /** The number of records updated. */
  updatedCount: Scalars['Int'];
};

export type UpdateOneCategoryInput = {
  /** The id of the record to update */
  id: Scalars['ID'];
  /** The update to apply. */
  update: UpdateCategory;
};

export type UpdateOneProductInput = {
  /** The id of the record to update */
  id: Scalars['ID'];
  /** The update to apply. */
  update: UpdateProduct;
};

export type UpdateProduct = {
  brand?: InputMaybe<Scalars['String']>;
  categoryId?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  gender?: InputMaybe<Gender>;
  id?: InputMaybe<Scalars['ID']>;
  image?: InputMaybe<Scalars['String']>;
  is_sale?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['Float']>;
  qty?: InputMaybe<Scalars['Float']>;
  sku?: InputMaybe<Scalars['String']>;
  special_price?: InputMaybe<Scalars['Float']>;
  status?: InputMaybe<Status>;
  stock_status?: InputMaybe<StockStatus>;
  updated_at?: InputMaybe<Scalars['DateTime']>;
  url_key?: InputMaybe<Scalars['String']>;
};

export type GetCategoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCategoriesQuery = { __typename?: 'Query', categories: Array<{ __typename?: 'Category', id: string, name: string, url_key: string, image?: string | null, status: Status, created_at: any, updated_at: any }> };


export const GetCategoriesDocument = gql`
    query getCategories {
  categories(
    filter: {include_in_menu: {eq: 1}, status: {eq: ENABLED}, level: {eq: 1}}
  ) {
    id
    name
    url_key
    image
    status
    created_at
    updated_at
  }
}
    `;

/**
 * __useGetCategoriesQuery__
 *
 * To run a query within a React component, call `useGetCategoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCategoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCategoriesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetCategoriesQuery(baseOptions?: Apollo.QueryHookOptions<GetCategoriesQuery, GetCategoriesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCategoriesQuery, GetCategoriesQueryVariables>(GetCategoriesDocument, options);
      }
export function useGetCategoriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCategoriesQuery, GetCategoriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCategoriesQuery, GetCategoriesQueryVariables>(GetCategoriesDocument, options);
        }
export type GetCategoriesQueryHookResult = ReturnType<typeof useGetCategoriesQuery>;
export type GetCategoriesLazyQueryHookResult = ReturnType<typeof useGetCategoriesLazyQuery>;
export type GetCategoriesQueryResult = Apollo.QueryResult<GetCategoriesQuery, GetCategoriesQueryVariables>;