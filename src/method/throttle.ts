let throttleTimeout: ReturnType<typeof setTimeout> | null = null;

export default function throttle<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  return function (...args: Parameters<T>) {
    if (!throttleTimeout) {
      func(...args); // 立即调用函数
      throttleTimeout = setTimeout(() => {
        throttleTimeout = null; // 重置状态
      }, wait);
    }
  };
}
