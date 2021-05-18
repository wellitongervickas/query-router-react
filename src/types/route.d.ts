// src/types/route.d.ts
interface Route {
  component: ReactNode;
  path: string;
  searchKeys?: string[];
}

type Routes = Route[];
