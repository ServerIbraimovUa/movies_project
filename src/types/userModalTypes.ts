export interface IModal {
  show: boolean;
  close(): void;
}

export interface ISocialLink {
  socials: {
    [key: string]: string;
  };
}
