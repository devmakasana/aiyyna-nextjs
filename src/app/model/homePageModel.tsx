export interface CompanySectionContentCollectionItemsModel {
  name: string;
  logo: {
    url: string;
  };
}

export interface CompanySectionContentCollectionModel {
  items: CompanySectionContentCollectionItemsModel[];
}

export interface FeatureSectionContentCollectionItemsModel {
  title: string;
  slug: string;
  description: string;
  banner: {
    url: string;
  };
}

export interface FeatureSectionContentCollectionModel {
  items: FeatureSectionContentCollectionItemsModel[];
}

export interface TestinomialSectionContentCollectionItemsModel {
  userName: string;
  designation: string;
  content: string;
  companyName: string;
  profile: {
    url: string;
  };
}

export interface TestinomialSectionContentCollectionModel {
  items: TestinomialSectionContentCollectionItemsModel[];
}

export interface HomePageDetail {
  title: string;
  banner: {
    url: string;
  };
  companySectionContentCollection: CompanySectionContentCollectionModel;
  companySectionTitle: string;
  description: string;
  featureSectionContentCollection: FeatureSectionContentCollectionModel;
  featureSectionTitle: string;
  intigrationTitle: string;
  seoMetadata: {
    seoTitle: string;
  };
  testinomialSectionContentCollection: TestinomialSectionContentCollectionModel;
  testinomialSectionTitle: string;
}
