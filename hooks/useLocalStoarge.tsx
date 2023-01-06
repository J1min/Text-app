type methodType = "get" | "post" | "delete" | "clear";
interface UseLocalStoargeProps {
  method: methodType;
  key: string;
  value?: string;
}

const accessLocalStoarge = ({ method, key, value }: UseLocalStoargeProps) => {
  if (typeof window !== "undefined") {
    switch (method) {
      case "get":
        return localStorage.getItem(key);
      case "post":
        if (value) {
          localStorage.setItem(key, value);
          return;
        }
        throw "value가 없습니다";
      case "delete":
        localStorage.removeItem(key);
        return;
      case "clear":
        localStorage.clear();
        return;
      default:
        throw "바보신가요";
    }
  }
};

export default function useLocalStoarge(
  method: methodType,
  key: string,
  value?: string,
) {
  return accessLocalStoarge({ method: method, key: key, value: value });
}
