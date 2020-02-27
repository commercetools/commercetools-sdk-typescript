/**
*
*    Generated file, please do not change!!!
*    From http://www.vrap.io/ with love
*
*                ,d88b.d88b,
*                88888888888
*                `Y8888888Y'
*                  `Y888Y'
*                    `Y'
*
*/

import { CategoryReference } from './common';

export interface ProjectCategoryRecommendation {
  /**
  *	A category that is recommended for a product.
  */
  readonly category: CategoryReference;
  /**
  *	Probability score for the category recommendation.
  */
  readonly confidence: number;
  /**
  *	Breadcrumb path to the recommended category. This only picks up one language, not all
  *	available languages for the category. English is prioritized, but if English data 
  *	is not available, an arbitrary language is selected. Do not use this to identify a 
  *	category,use the category ID from the category reference instead.
  *	
  */
  readonly path: string
}
export interface ProjectCategoryRecommendationMeta {
  /**
  *	The product name that was used to generate recommendations.
  */
  readonly productName?: string;
  /**
  *	The product image that was used to generate recommendations.
  */
  readonly productImageUrl?: string;
  /**
  *	Top 5 general categories that were used internally to generate 
  *	the project-specific categories. These category names are not related 
  *	to the categories defined in the project, but they provide additional 
  *	information to understand the project-specific categories in the results
  *	section.
  *	
  */
  readonly generalCategoryNames: string[]
}
export interface ProjectCategoryRecommendationPagedQueryResponse {
  readonly count: number;
  readonly total: number;
  readonly offset: number;
  readonly results: ProjectCategoryRecommendation[];
  readonly meta: ProjectCategoryRecommendationMeta
}