import { SearchEntry } from './search-entry.interface';

export interface SearchResults {
    resultCount: number;
    results: SearchEntry[];
}