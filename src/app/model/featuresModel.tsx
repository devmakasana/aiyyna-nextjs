export interface ServiceSectionContentCollectionItemsModel {
  title: string;
  name: string;
  description: string;
  banner: {
    url: string;
  };
}

export interface ServiceSectionContentCollectionModel {
  items: ServiceSectionContentCollectionItemsModel[];
}

export interface FeaturesPageModel {
  title: string;
  slug: string;
  description: string;
  banner: {
    url: string;
  };
  serviceSectionContentCollection: ServiceSectionContentCollectionModel;
  body: {
    json: any;
  };
}
