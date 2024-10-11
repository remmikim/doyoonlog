import { NotionAPI } from 'notion-client'

class LRUCache {
  private maxSize: number;
  private cache: Map<string, { data: any; expires: number }>;

  constructor(maxSize: number) {
    this.maxSize = maxSize;
    this.cache = new Map();
  }

  get(key: string) {
    const now = Date.now();

    if (!this.cache.has(key)) {
      return null;
    }

    const { data, expires } = this.cache.get(key)!;

    // 만료된 데이터는 제거하고 null 반환
    if (expires < now) {
      this.cache.delete(key);
      return null;
    }

    // 최신 사용 데이터를 캐시의 끝으로 이동
    this.cache.delete(key);
    this.cache.set(key, { data, expires });

    return data;
  }

  set(key: string, value: any, duration: number) {
    const now = Date.now();
    const expires = now + duration;

    // 캐시가 가득 차면 가장 오래된 항목 삭제
    if (this.cache.size >= this.maxSize) {
      const firstKey = this.cache.keys().next().value;
      this.cache.delete(firstKey);
    }

    this.cache.set(key, { data: value, expires });
  }
}

const cacheDuration = 1000 * 60 * 10; // 10분 TTL
const lruCache = new LRUCache(50); // 최대 50개 항목 캐싱

export async function getPostBlocks(id: string) {
  const cachedData = lruCache.get(id);
  if (cachedData) {
    return cachedData;
  }

  const api = new NotionAPI();
  const pageBlock = await api.getPage(id);

  lruCache.set(id, pageBlock, cacheDuration);
  
  return pageBlock;
}
