export interface IModal {
  show: boolean;
  close(): void;
  databaseUser: {
    imageUrl: string;
    language: 'ua' | 'en';
    sex: 'none' | 'men' | 'women';
    socials?: {
      [key: string]: string;
    };
    theme: 'light' | 'dark';
    username: string;
    country?: {
      value: string;
      label: string;
    };
  };
}

export interface ISocialLink {
  socials: {
    [key: string]: string;
  };
}
