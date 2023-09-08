export interface BlogModel {
  title: string;
  slug: string;
  date: string;
  banner: {
    url: string;
  };
  body: {
    json: any
  }
  description: string;
  seoMetadataCollection: {
    items: [
      {
        seoTitle: string;
      }
    ];
  };
}
