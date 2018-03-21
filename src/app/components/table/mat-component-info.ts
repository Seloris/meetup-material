export interface MatComponentInfo {
  moduleImport: string;
  name: string;
  category: string;
}

export interface MatComponentInfoResponse {
  components: MatComponentInfo[];
  totalLength: number;
}
