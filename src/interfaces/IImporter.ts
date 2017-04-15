export interface IImporter {
  import: (url: string, includePaths: string[]) => {
    file?: string,
    contents?: string,
  } | null;
}

export interface IImporterOptions {
  cwd: string;
}
