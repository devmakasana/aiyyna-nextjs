export interface compnySectionCollectionItemsModel {
  logo: {
    url: string;
  };
}

export interface compnySectionCollectionModel {
  items: compnySectionCollectionItemsModel[];
}

export interface featureSectionContentCollectionItemsModel {
  title: string;
  slug: string;
  description: string;
  banner: {
    url: string;
  };
}

export interface featureSectionContentCollectionModel {
  items: featureSectionContentCollectionItemsModel[];
}
export interface BookDemoModel {
  title: string;
  description: string;
  featureSectionTitle: string;
  companySectionTitle: string;
  seoMetadata: {
    seoTitle: string;
  };
  compnySectionCollection: compnySectionCollectionModel;
  featureSectionContentCollection: featureSectionContentCollectionModel;
}
