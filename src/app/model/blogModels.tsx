export interface BlogModel {
  title: string;
  slug: string;
  date: string;
  banner: {
    url: string;
  };
  description: string;
  seoMetadataCollection: {
    items: [
      {
        seoTitle: string;
      }
    ];
  };
}
